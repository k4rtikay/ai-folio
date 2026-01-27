import PortfolioWrapper from "@/components/portfolio/portfolio-wrapper";
import { getGithubData } from "@/lib/github";
import { MOCK_PORTFOLIO } from "@/lib/mock-data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { RenderData } from "@/lib/types";
import { db } from "@/db";
import { portfolios, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { portfolioToRender } from "@/lib/mappers";
import { generatePortfolio } from "@/lib/groq";

export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const isOwnPortfolio = session?.user?.name === username;

    let renderData: RenderData | null = null;
    let savedPortfolioId: string | null = null;

    if(isOwnPortfolio && session?.user){
        const [savedPortfolio] = await db
        .select()
        .from(portfolios)
        .where(eq(portfolios.userId, session.user.id))
        .limit(1);

        if(savedPortfolio){
            const savedProjects = await db
            .select()
            .from(projects)
            .where(eq(projects.portfolioId, savedPortfolio.id))
            .orderBy(projects.sortOrder);

            renderData = portfolioToRender(savedPortfolio, savedProjects);
            savedPortfolioId = savedPortfolio.id

            console.log("📦 Loaded saved portfolio from DB");
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
        
        console.log("🔄 Generated fresh portfolio from GitHub");
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
            />
        </div>
    );
};