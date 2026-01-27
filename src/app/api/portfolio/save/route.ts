import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Repo, UserProfile } from "@/lib/github";
import { AIFolio } from "@/schemas/aifolio.schema";
import { PortfolioColors } from "@/store/use-portfolio-state";
import { githubToPortfolio } from "@/lib/mappers";
import { db } from "@/db";
import { portfolios, projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await request.json();

        const {
            profile,
            portfolio,
            repos,
            colors,
            font,
            username,
        }: {
            profile: UserProfile,
            repos: Repo[],
            portfolio: AIFolio,
            colors: PortfolioColors,
            font: string,
            username: string
        } = body;

        const { portfolio: portfolioData, projects: projectsData } = githubToPortfolio(profile, repos, portfolio, session.user.id, username);

        const portfolioWithCustomization = {
            ...portfolioData,
            colors,
            font,
        };

        const [existingPortfolio] = await db
            .select()
            .from(portfolios)
            .where(eq(portfolios.userId, session.user.id))
            .limit(1);

        let savedPortfolioId: string;

        if (existingPortfolio) {
            // UPDATE existing portfolio
            await db
                .update(portfolios)
                .set({
                    ...portfolioWithCustomization,
                    updatedAt: new Date(),
                })
                .where(eq(portfolios.id, existingPortfolio.id));

            savedPortfolioId = existingPortfolio.id;

            await db
                .delete(projects)
                .where(eq(projects.portfolioId, existingPortfolio.id));

            if (projectsData.length > 0) {
                await db.insert(projects).values(
                    projectsData.map(project => ({
                        ...project,
                        portfolioId: existingPortfolio.id,
                    }))
                );
            }

            console.log("Updated existing portfolio:", existingPortfolio.id);
        } else {
            // INSERT new portfolio
            const [newPortfolio] = await db
                .insert(portfolios)
                .values(portfolioWithCustomization)
                .returning();

            savedPortfolioId = newPortfolio.id;

            if (projectsData.length > 0) {
                await db.insert(projects).values(
                    projectsData.map(project => ({
                        ...project,
                        portfolioId: newPortfolio.id,
                    }))
                );
            }

            console.log("Created new portfolio:", newPortfolio.id);
        }

        return NextResponse.json({
            portfolioId: savedPortfolioId,
            success: true,
            message: existingPortfolio ? "portfolio updated" : "portfolio saved"
        }, { status: 200 })

    } catch (error) {
        console.error("Error saving portfolio", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}