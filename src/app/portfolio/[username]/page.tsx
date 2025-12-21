export function PortfolioPage({ params }: { params: { username: string } }) {
    const { username } = params;

    return (
        <div>
            <h1>Portfolio for {username}</h1>
        </div>
    );
};