import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  demo: string | null;
  language: string | null;
  stars: number | null;
  topics?: string[] | null;
  homepage?: string | null;
  forks: number | null;
  open_graph_image_url?: string;
}

export interface UserProfile {
  name: string | null;
  bio: string | null;
  avatarUrl: string | null;
  location: string | null;
  twitterUsername: string | null;
  email: string | null;
  blog: string | null;
  company: string | null;
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

    const cleanRepos: Repo[] = response.data
      .filter((repo) => !repo.fork)
      .filter((repo) => repo.description)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 8)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        demo: repo.homepage ?? null,
        language: repo.language ?? null,
        stars: repo.stargazers_count ?? null,
        topics: repo.topics ?? null,
        homepage: repo.homepage ?? null,
        forks: repo.forks_count ?? null,
        // open_graph_image_url: repo.open_graph_image_url ?? null,
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

export async function fetchUserProfile(username: string) {
  try {
    const response = await octokit.rest.users.getByUsername({
      username,
    });

    const profile = {
      name: response.data.name ?? null,
      bio: response.data.bio ?? null,
      avatarUrl: response.data.avatar_url ?? null,
      location: response.data.location ?? null,
      twitterUsername: response.data.twitter_username ?? null,
      email: response.data.email ?? null,
      blog: response.data.blog ?? null,
      company: response.data.company ?? null,
    };

    return profile;

  }
  catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export async function getGithubData(username: string) {
  try {
    const [profile, repos] = await Promise.all([
      fetchUserProfile(username),
      fetchUserRepos(username),
    ]);

    return { profile, repos };
  }
  catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
}