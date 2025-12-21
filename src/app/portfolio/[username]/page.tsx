export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    return (
        <div>
            <h1>Portfolio for {username}</h1>
        </div>
    );
};