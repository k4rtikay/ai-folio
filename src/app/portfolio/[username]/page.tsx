import PortfolioWrapper from "@/components/portfolio/portfolio-wrapper";
import { getGithubData } from "@/lib/github";
import { DEV_MODE, MOCK_PORTFOLIO, MOCK_PROFILE, MOCK_REPOS } from "@/lib/mock-data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { RenderData } from "@/lib/types";
import { db } from "@/db";
import { portfolios, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { portfolioToRender } from "@/lib/mappers";
import { generatePortfolio } from "@/lib/groq";
import { PortfolioColors } from "@/store/use-portfolio-state";

export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    // DEV TESTING MODE: Skip auth, database, and API calls
    // if (DEV_MODE) {
    //     console.log("DEV MODE: Using mock data (no auth, no database, no API calls)");

    //     const mockRenderData: RenderData = {
    //         profile: MOCK_PROFILE,
    //         repos: MOCK_REPOS,
    //         portfolio: MOCK_PORTFOLIO,
    //     };

    //     return (
    //         <div className="flex min-h-screen">
    //             <PortfolioWrapper
    //                 username={username}
    //                 portfolio={mockRenderData.portfolio}
    //                 profile={mockRenderData.profile}
    //                 repos={mockRenderData.repos}
    //                 isOwnPortfolio={true} // Allow editing in dev mode
    //                 currentUserId="dev-user-id"
    //                 currentUserName={username}
    //                 savedPortfolioId={null}
    //                 colors={undefined}
    //                 font={undefined}
    //             />
    //         </div>
    //     );
    // }

    // PRODUCTION MODE: Normal flow with auth, database, and API calls
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const isOwnPortfolio = session?.user?.name === username;

    let renderData: RenderData | null = null;
    let savedPortfolioId: string | null = null;
    let savedColors: PortfolioColors | undefined;
    let savedFont: string | undefined;

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
            savedPortfolioId = savedPortfolio.id
            savedColors = savedPortfolio.colors as PortfolioColors;
            savedFont = savedPortfolio.font;

            console.log("Loaded saved portfolio from DB");
        }
    }

    if (!renderData) {
        const { profile, repos } = await getGithubData(username);

        //mock or generate with AI
        // const aiPortfolio = MOCK_PORTFOLIO;
        const aiPortfolio = await generatePortfolio(profile, repos);

        renderData = {
            profile,
            repos,
            portfolio: aiPortfolio
        };

        console.log("Generated fresh portfolio from GitHub");
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
};