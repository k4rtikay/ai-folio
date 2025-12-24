import PortfolioWrapper from "@/components/portfolio/portfolio-wrapper";
import { getGithubData } from "@/lib/github";
import { generatePortfolio } from "@/lib/groq";
import { MOCK_PORTFOLIO } from "@/lib/mock-data";

export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const { profile, repos } = await getGithubData(username);
    // const portfolio = await generatePortfolio(profile, repos);

    const portfolio = MOCK_PORTFOLIO;

    // console.log("📋 SNAPSHOT:", JSON.stringify(portfolio, null, 2));

    return (
        <div className="flex min-h-screen">
            <PortfolioWrapper username={username} portfolio={portfolio} profile={profile} repos = {repos}/>
        </div>
    );
};