import PortfolioWrapper from "@/components/portfolio/portfolio-wrapper";
import { getGithubData } from "@/lib/github";
import {
    DEV_MODE,
    MOCK_PORTFOLIO,
    MOCK_PROFILE,
    MOCK_REPOS,
} from "@/lib/mock-data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { RenderData } from "@/lib/types";
import { db } from "@/db";
import { portfolios, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { portfolioToRender } from "@/lib/mappers";
import { generatePortfolio } from "@/lib/groq";
import { PortfolioColors } from "@/store/use-portfolio-state";
import { redis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";

export default async function PortfolioPage({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;

    // DEV TESTING MODE: Skip auth, database, and API calls
    if (DEV_MODE) {
        console.log(
            "DEV MODE: Using mock data (no auth, no database, no API calls)",
        );

        const mockRenderData: RenderData = {
            profile: MOCK_PROFILE,
            repos: MOCK_REPOS,
            portfolio: MOCK_PORTFOLIO,
        };

        return (
            <div className="flex min-h-screen">
                <PortfolioWrapper
                    username={username}
                    portfolio={mockRenderData.portfolio}
                    profile={mockRenderData.profile}
                    repos={mockRenderData.repos}
                    isOwnPortfolio={true} // Allow editing in dev mode
                    currentUserId="dev-user-id"
                    currentUserName={username}
                    savedPortfolioId={null}
                    colors={undefined}
                    font={undefined}
                />
            </div>
        );
    }

    // PRODUCTION MODE: Normal flow with auth, database, and API calls
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const rateLimiter = new Ratelimit({
        redis,
        limiter: Ratelimit.tokenBucket(10, "20 m", 10),
        prefix: "ratelimit:generation",
    });

    const isOwnPortfolio = session?.user?.name === username;

    const cacheKey = `portfolio:render:${username}`;

    let renderData: RenderData | null = null;
    let savedPortfolioId: string | null = null;
    let savedColors: PortfolioColors | undefined;
    let savedFont: string | undefined;

    const cachedPayload = await redis.get<{
        renderData: RenderData;
        savedPortfolioId: string | null;
        savedColors?: PortfolioColors;
        savedFont?: string;
    }>(cacheKey);

    if (cachedPayload) {
        console.log(`[CACHE HIT] Served ${username} from Redis`);

        renderData = cachedPayload.renderData;
        savedPortfolioId = cachedPayload.savedPortfolioId;
        savedColors = cachedPayload.savedColors;
        savedFont = cachedPayload.savedFont;
    } else {
        console.log(`[CACHE MISS] Generating or fetching ${username}...`);

        // STEP 2: DATABASE CHECK (If it's the owner checking their saved work)
        // Single lookup — previously this same query ran up to 3x in a row.
        if (isOwnPortfolio && session?.user) {
            const [savedPortfolio] = await db
                .select()
                .from(portfolios)
                .where(eq(portfolios.userId, session.user.id))
                .limit(1);

            if (savedPortfolio) {
                const savedProjects = await db
                    .select()
                    .from(projects)
                    .where(eq(projects.portfolioId, savedPortfolio.id))
                    .orderBy(projects.sortOrder);

                renderData = portfolioToRender(savedPortfolio, savedProjects);
                savedPortfolioId = savedPortfolio.id;
                savedColors = savedPortfolio.colors as PortfolioColors;
                savedFont = savedPortfolio.font;

                console.log("Loaded saved portfolio from DB");

                // NOTE: previously this path never wrote to Redis, so owners
                // hit the DB on every request regardless of cache. Caching
                // it here now — remove this block if you want owner views
                // to always read fresh from the DB instead.
                await redis.set(
                    cacheKey,
                    { renderData, savedPortfolioId, savedColors, savedFont },
                    { ex: 86400 },
                );
            }
        }

        // STEP 3: Nothing saved yet — generate fresh from GitHub + AI
        if (!renderData) {
            const ip =
                (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
            const { success } = await rateLimiter.limit(`generate_${ip}`);

            if (!success) {
                throw new Error("RATE_LIMIT_EXCEEDED");
            }
            const { profile, repos } = await getGithubData(username);

            //mock or generate with AI
            // const aiPortfolio = MOCK_PORTFOLIO;
            const aiPortfolio = await generatePortfolio(profile, repos);

            renderData = {
                profile,
                repos,
                portfolio: aiPortfolio,
            };

            console.log(
                "SAVING TO REDIS:",
                JSON.stringify(renderData, null, 2),
            );
            await redis.set(
                cacheKey,
                { renderData, savedPortfolioId, savedColors, savedFont },
                { ex: 86400 }, // TTL: 24 hours (86400 seconds)
            );

            console.log("Generated fresh portfolio from GitHub");
        }
    }

    return (
        <div className="flex min-h-screen">
            <PortfolioWrapper
                username={username}
                portfolio={renderData.portfolio}
                profile={renderData.profile}
                repos={renderData.repos}
                isOwnPortfolio={isOwnPortfolio}
                currentUserId={session?.user?.id}
                currentUserName={session?.user?.name}
                savedPortfolioId={savedPortfolioId}
                colors={savedColors}
                font={savedFont}
            />
        </div>
    );
}