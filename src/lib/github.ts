import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  demo: string | null | undefined;
  language: string | null | undefined;
  stars: number | null | undefined;
}

export async function fetchUserRepos(username: string) {
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      direction: "desc",
      sort: "updated",
      per_page: 100,
      type: "owner",
    })

    const cleanRepos:Repo[] = response.data
      .filter((repo) => !repo.fork)
      .filter((repo) => repo.description)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        demo: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
      }));

    if (cleanRepos.length === 0) {
      throw new Error("No repositories found for the user.");
    }

    return cleanRepos;

  }
  catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
} 