import PortfolioWrapper from "@/components/portfolio/portfolio-wrapper";

export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    return (
        <div className="flex min-h-screen">
            <PortfolioWrapper username={username} />
        </div>
    );
};