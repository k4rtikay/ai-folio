import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { portfolios, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { portfolioToRender } from "@/lib/mappers";
import ShareableWrapper from "@/components/portfolio/shareable-wrapper";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { PortfolioColors } from "@/store/use-portfolio-state";

export default async function ShareablePage({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const [savedPortfolio] = await db
        .select()
        .from(portfolios)
        .where(eq(portfolios.username, username))
        .limit(1);

    if (!savedPortfolio) {
        notFound();
    }
    const savedProjects = await db
        .select()
        .from(projects)
        .where(eq(projects.portfolioId, savedPortfolio.id));

    const renderData = portfolioToRender(savedPortfolio, savedProjects);

    const isOwner = session?.user?.name === username;

    return (
        <div className="relative flex min-h-screen">

            {isOwner && (
                <Link
                    href={`/portfolio/${username}`}
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all"
                >
                    <Pencil className="w-5 h-5" />
                    Edit Portfolio
                </Link>
            )}

            <ShareableWrapper
                username={username}
                portfolio={renderData.portfolio}
                profile={renderData.profile}
                repos={renderData.repos}
                colors={savedPortfolio.colors as PortfolioColors}
                font={savedPortfolio.font ?? undefined}
            />
        </div>
    );
}