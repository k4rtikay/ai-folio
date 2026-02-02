import { AIFolio } from "@/schemas/aifolio.schema";
import type { Repo, UserProfile } from "./github";

// Famous developers data for testing and demo purposes

// ============================================================================
// Linus Torvalds - Creator of Linux and Git
// ============================================================================

export const LINUS_PROFILE: UserProfile = {
    name: "Linus Torvalds",
    bio: "Creator of Linux and Git",
    avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
    location: "Portland, OR",
    twitterUsername: null,
    email: null,
    blog: null,
    company: "Linux Foundation",
    followers: 200000,
    following: 0,
    repos: 7,
};

export const LINUS_REPOS: Repo[] = [
    {
        name: "linux",
        description: "Linux kernel source tree",
        url: "https://github.com/torvalds/linux",
        demo: null,
        language: "C",
        stars: 175000,
        topics: ["linux", "kernel", "operating-system", "c"],
        homepage: "https://kernel.org",
        forks: 52000,
    },
    {
        name: "subsurface-for-dirk",
        description: "Divelog program for recreational, tech, and free divers",
        url: "https://github.com/torvalds/subsurface-for-dirk",
        demo: null,
        language: "C++",
        stars: 1200,
        topics: ["diving", "scuba", "desktop-app"],
        homepage: "https://subsurface-divelog.org",
        forks: 180,
    },
    {
        name: "uemacs",
        description: "Linus's fork of MicroEmacs",
        url: "https://github.com/torvalds/uemacs",
        demo: null,
        language: "C",
        stars: 850,
        topics: ["emacs", "text-editor", "c"],
        homepage: null,
        forks: 150,
    },
];

export const LINUS_PORTFOLIO: AIFolio = {
    heroText: "Building the foundation of modern computing",
    heroSubText: "Creator of the Linux kernel and Git version control",
    about: "I'm Linus Torvalds, a software engineer best known as the creator and lead developer of the Linux kernel, which powers billions of devices worldwide. I also created Git, the distributed version control system that revolutionized collaborative software development. I believe in the power of open source and pragmatic software engineering.",
    skills: [
        "C",
        "C++",
        "Assembly",
        "Linux Kernel",
        "Git",
        "Systems Programming",
        "Operating Systems",
        "Open Source"
    ]
};

// ============================================================================
// Lee Robinson - VP of Developer Experience at Vercel
// ============================================================================

export const LEE_PROFILE: UserProfile = {
    name: "Lee Robinson",
    bio: "VP of Developer Experience at Vercel. Teaching the web, one video at a time.",
    avatarUrl: "https://avatars.githubusercontent.com/u/9113740?v=4",
    location: "Des Moines, IA",
    twitterUsername: "leeerob",
    email: "me@leerob.io",
    blog: "https://leerob.io",
    company: "Vercel",
    followers: 12000,
    following: 250,
    repos: 150,
};

export const LEE_REPOS: Repo[] = [
    {
        name: "leerob.io",
        description: "My portfolio built with Next.js, Tailwind CSS, and Vercel.",
        url: "https://github.com/leerob/leerob.io",
        demo: "https://leerob.io",
        language: "TypeScript",
        stars: 7200,
        topics: ["nextjs", "typescript", "tailwindcss", "portfolio", "blog"],
        homepage: "https://leerob.io",
        forks: 1800,
    },
    {
        name: "next-self-host",
        description: "A reference implementation for self-hosting Next.js applications",
        url: "https://github.com/leerob/next-self-host",
        demo: null,
        language: "TypeScript",
        stars: 1500,
        topics: ["nextjs", "docker", "self-hosted", "deployment"],
        homepage: null,
        forks: 200,
    },
    {
        name: "site",
        description: "My personal website and blog",
        url: "https://github.com/leerob/site",
        demo: "https://leerob.io",
        language: "TypeScript",
        stars: 2100,
        topics: ["nextjs", "mdx", "blog", "portfolio"],
        homepage: "https://leerob.io",
        forks: 450,
    },
    {
        name: "on-demand-isr",
        description: "Demo of On-demand Incremental Static Regeneration with Next.js",
        url: "https://github.com/leerob/on-demand-isr",
        demo: null,
        language: "TypeScript",
        stars: 680,
        topics: ["nextjs", "isr", "static-generation"],
        homepage: null,
        forks: 120,
    },
];

export const LEE_PORTFOLIO: AIFolio = {
    heroText: "Teaching the web, one video at a time",
    heroSubText: "Helping developers build better, faster applications",
    about: "I'm Lee Robinson, VP of Developer Experience at Vercel. I focus on making it easier for developers to build and deploy modern web applications. Through my content on YouTube and my blog, I teach developers how to leverage Next.js, React, and the modern web stack. I'm passionate about developer education and creating resources that help developers level up their skills.",
    skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Vercel",
        "PostgreSQL",
        "Developer Relations"
    ]
};

// ============================================================================
// Evan You - Creator of Vue.js and Vite
// ============================================================================

export const EVAN_PROFILE: UserProfile = {
    name: "Evan You",
    bio: "Independent open source developer. Creator of Vue.js and Vite.",
    avatarUrl: "https://avatars.githubusercontent.com/u/499550?v=4",
    location: "Singapore",
    twitterUsername: "youyuxi",
    email: null,
    blog: "https://evanyou.me",
    company: null,
    followers: 95000,
    following: 150,
    repos: 200,
};

export const EVAN_REPOS: Repo[] = [
    {
        name: "vue",
        description: "The Progressive JavaScript Framework",
        url: "https://github.com/vuejs/vue",
        demo: "https://vuejs.org",
        language: "TypeScript",
        stars: 207000,
        topics: ["vue", "javascript", "frontend", "framework"],
        homepage: "https://vuejs.org",
        forks: 33000,
    },
    {
        name: "vite",
        description: "Next generation frontend tooling. It's fast!",
        url: "https://github.com/vitejs/vite",
        demo: "https://vitejs.dev",
        language: "TypeScript",
        stars: 65000,
        topics: ["vite", "bundler", "build-tool", "esm", "hmr"],
        homepage: "https://vitejs.dev",
        forks: 5800,
    },
    {
        name: "vue-router",
        description: "The official router for Vue.js",
        url: "https://github.com/vuejs/vue-router",
        demo: "https://router.vuejs.org",
        language: "TypeScript",
        stars: 19000,
        topics: ["vue", "router", "spa", "navigation"],
        homepage: "https://router.vuejs.org",
        forks: 5100,
    },
    {
        name: "pinia",
        description: "Intuitive, type safe, light and flexible Store for Vue",
        url: "https://github.com/vuejs/pinia",
        demo: "https://pinia.vuejs.org",
        language: "TypeScript",
        stars: 12500,
        topics: ["vue", "state-management", "store", "typescript"],
        homepage: "https://pinia.vuejs.org",
        forks: 980,
    },
];

export const EVAN_PORTFOLIO: AIFolio = {
    heroText: "Making web development more enjoyable",
    heroSubText: "Creator of Vue.js and Vite - tools loved by millions",
    about: "I'm Evan You, an independent open source developer. I created Vue.js, one of the most popular JavaScript frameworks for building user interfaces, and Vite, a next-generation frontend build tool that significantly improves the developer experience. I'm passionate about making web development more approachable and enjoyable for everyone. I work full-time on open source, supported by the community and sponsors.",
    skills: [
        "TypeScript",
        "JavaScript",
        "Vue.js",
        "Vite",
        "Rollup",
        "esbuild",
        "Frontend Architecture",
        "Open Source"
    ]
};

// ============================================================================
// Combined exports for easy access
// ============================================================================

export const FAMOUS_DEVS = {
    linus: {
        profile: LINUS_PROFILE,
        repos: LINUS_REPOS,
        portfolio: LINUS_PORTFOLIO,
    },
    lee: {
        profile: LEE_PROFILE,
        repos: LEE_REPOS,
        portfolio: LEE_PORTFOLIO,
    },
    evan: {
        profile: EVAN_PROFILE,
        repos: EVAN_REPOS,
        portfolio: EVAN_PORTFOLIO,
    },
} as const;

export type FamousDevKey = keyof typeof FAMOUS_DEVS;
