import { AIFolio } from "@/schemas/aifolio.schema";
import type { Repo, UserProfile } from "./github";

// Enable dev testing mode via environment variable
export const DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === "true";

export const MOCK_PROFILE: UserProfile = {
    name: "Theo Browne",
    bio: "CEO at Ping.gg • Building cool stuff with TypeScript",
    avatarUrl: "https://avatars.githubusercontent.com/u/6751787?v=4",
    location: "San Francisco, CA",
    twitterUsername: "t3dotgg",
    email: "theo@ping.gg",
    blog: "https://t3.gg",
    company: "Ping.gg",
    followers: 25000,
    following: 150,
    repos: 85,
};

export const MOCK_REPOS: Repo[] = [
    {
        name: "create-t3-app",
        description: "The best way to start a full-stack, typesafe Next.js app",
        url: "https://github.com/t3-oss/create-t3-app",
        demo: "https://create.t3.gg",
        language: "TypeScript",
        stars: 22500,
        topics: ["nextjs", "typescript", "trpc", "tailwindcss", "prisma"],
        homepage: "https://create.t3.gg",
        forks: 1200,
    },
    {
        name: "uploadthing",
        description: "File uploads for modern web devs",
        url: "https://github.com/pingdotgg/uploadthing",
        demo: "https://uploadthing.com",
        language: "TypeScript",
        stars: 3500,
        topics: ["file-upload", "typescript", "nextjs", "s3"],
        homepage: "https://uploadthing.com",
        forks: 280,
    },
    {
        name: "og-image",
        description: "Generate dynamic Open Graph images for social sharing",
        url: "https://github.com/vercel/og-image",
        demo: "https://og-image.vercel.app",
        language: "TypeScript",
        stars: 4200,
        topics: ["og-image", "social", "meta-tags", "satori"],
        homepage: "https://og-image.vercel.app",
        forks: 350,
    },
    {
        name: "trpc",
        description: "End-to-end typesafe APIs made easy",
        url: "https://github.com/trpc/trpc",
        demo: "https://trpc.io",
        language: "TypeScript",
        stars: 31000,
        topics: ["typescript", "api", "rpc", "react-query"],
        homepage: "https://trpc.io",
        forks: 1100,
    },
];

export const MOCK_PORTFOLIO: AIFolio = {
    heroText: "Building innovative solutions",
    heroSubText: "With expertise in cutting-edge tech and creative problem-solving",
    about: "I'm Theo Browne, CEO at Ping.gg, a passionate developer and entrepreneur with a focus on building innovative solutions that make a difference. With experience in a wide range of technologies, I'm always looking to push the boundaries of what's possible.",
    skills: [
        "TypeScript",
        "JavaScript",
        "Elixir",
        "Node.js",
        "Vite",
        "Next.js",
        "Electron",
        "Chromium"
    ]
};
