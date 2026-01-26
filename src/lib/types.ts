import type { Repo, UserProfile } from "./github";
import type { AIFolio } from "@/schemas/aifolio.schema";

export interface RenderData {
  profile: UserProfile;
  repos: Repo[];
  portfolio: AIFolio;
}

export interface PortfolioRecord {
  id: string;
  userId: string;
  name: string;
  heroText: string | null;
  heroSubText: string | null;
  about: string | null;
  skills: string[] | null;
  location: string | null;
  username: string;
  avatar: string;
  links: Record<string, string>;
  company: string | null;
  followers: number;
  following: number;
  repos: number;
  font: string;
  colors: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectRecord {
  id: string;
  portfolioId: string;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  ogImage: string | null;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}