import EditorPanel from "@/components/editor/editor-panel";
import PortfolioPreview from "@/components/portfolio/portfolio-preview";


export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    return (
        <div className="flex min-h-screen">
            <aside className="w-1/4">
                <EditorPanel
                    username={username}
                    className="h-full w-full bg-gray-100 px-2 py-3"
                />
            </aside>
            <main className="w-3/4 px-2 py-2">
                <PortfolioPreview
                    username={username}
                    className="h-full w-full border-2 border-gray-200 rounded-md"
                />
            </main>
        </div>
    );
};