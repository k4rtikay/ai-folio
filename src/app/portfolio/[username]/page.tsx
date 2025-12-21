import EditorPanel from "@/components/editor/editor-panel";
import PortfolioPreview from "@/components/portfolio/portfolio-preview";


export default async function PortfolioPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    return (
        <div className="flex">
            <aside className="w-1/4">
                <EditorPanel />
            </aside>
            <main className="w-3/4">
                <PortfolioPreview />
            </main>
        </div>
    );
};