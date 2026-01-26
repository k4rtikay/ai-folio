import type { Repo, UserProfile } from "./github";
import type { AIFolio } from "@/schemas/aifolio.schema";
import type { RenderData, PortfolioRecord, ProjectRecord } from "./types";

type portfolioInsert = Omit<PortfolioRecord, 'id' | 'createdAt' | 'updatedAt'>;
type projectInsert = Omit<ProjectRecord, 'id' | 'portfolioId' | 'createdAt' | 'updatedAt'>;

export function githubToPortfolio(
    profile: UserProfile,
    repos: Repo[],
    aiPortfolio: AIFolio,
    userId: string,
    username: string,
): {
    portfolio: portfolioInsert,
    projects: projectInsert[]
} {
    const links: Record<string, string> = {
        github: `https://github.com/${username}`
    }

    if (profile.blog) links.website = profile.blog;
    if (profile.twitterUsername) links.twitterUsername = profile.twitterUsername;

    const portfolio = {
        userId,
        name: profile.name || username,
        heroText: aiPortfolio.heroText || "",
        heroSubText: aiPortfolio.heroSubText || "",
        about: aiPortfolio.about || "",
        skills: aiPortfolio.skills || [],
        location: profile.location,
        username: username,
        avatar: profile.avatarUrl || "",
        links,
        company: profile.company,
        followers: profile.followers || 0,
        following: profile.following || 0,
        repos: profile.repos || 0,
        font: "inter",
        colors: {},
    }

    const projects = repos.map((repo) => ({
        name: repo.name,
        description: repo.description || "",
        url: repo.url,
        homepage: repo.homepage || "",
        ogImage: repo.open_graph_image_url || "",
        stars: repo.stars || 0,
        forks: repo.forks || 0,
        language: repo.language || "",
        topics: repo.topics || [],
        sortOrder: 0,
    }));

    return { portfolio, projects };
}

export function portfolioToRender(portfolioRecord: PortfolioRecord, projects: ProjectRecord[]): RenderData {
    const profile: UserProfile = {
        name: portfolioRecord.name,
        bio: portfolioRecord.about,
        avatarUrl: portfolioRecord.avatar,
        location: portfolioRecord.location,
        twitterUsername: portfolioRecord.links.twitterUsername,
        email: null,
        blog: portfolioRecord.links.website,
        company: portfolioRecord.company,
        followers: portfolioRecord.followers,
        following: portfolioRecord.following,
        repos: portfolioRecord.repos,
    };

    const repos: Repo[] = projects
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((project) => ({
            name: project.name,
            description: project.description,
            url: project.url,
            demo: project.homepage,
            language: project.language,
            stars: project.stars,
            topics: project.topics,
            homepage: project.homepage,
            forks: project.forks,
            open_graph_image_url: project.ogImage || undefined,
        }));

    const portfolio: AIFolio = {
        heroText: portfolioRecord.heroText || "",
        heroSubText: portfolioRecord.heroSubText || "",
        about: portfolioRecord.about || "",
        skills: portfolioRecord.skills || [],
    };

    return { profile, repos, portfolio };
}