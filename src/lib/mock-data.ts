import { AIFolio } from "@/schemas/aifolio.schema";

export const MOCK_PORTFOLIO: AIFolio = {
    heroText: "Building innovative solutions",
    heroSubText: "With expertise in cutting-edge tech and creative problem-solving",
    about: "I'm Theo Browne, CEO at Ping.gg, a passionate developer and entrepreneur with a focus on building innovative solutions that make a difference. With experience in a wide range of technologies, I'm always looking to push the boundaries of what's possible.",
    projects: [
        {
            title: "Stripe Recommendations",
            description: "Learn how to implement Stripe without losing your mind. With this comprehensive guide, you'll be able to set up Stripe in your application with ease.",
            techStack: [
                "Stripe",
                "TypeScript",
                "Node.js"
            ]
        },
        {
            title: "QuickPic",
            description: "Turn SVGs into high-resolution PNGs in 2 clicks. This user-friendly tool is designed to make your workflow more efficient and save you time.",
            techStack: [
                "TypeScript",
                "Electron",
                "Vite"
            ]
        },
        {
            title: "Yerba",
            description: "A monorepo project using Electron Turborepo with Next.js, Typescript, and Vite. Explore the world of web development with this comprehensive example.",
            techStack: [
                "Electron",
                "Turborepo",
                "Next.js"
            ]
        },
        {
            title: "Paycheck Extension",
            description: "A poorly guessed estimate of a tweet's value. Explore the world of social media with this innovative browser extension.",
            techStack: [
                "JavaScript",
                "Chromium",
                "React"
            ]
        },
        {
            title: "Roundest Mon",
            description: "The ultimate answer to the eternal question - which Pokémon is roundest? With this fun and interactive application, you can explore the world of Pokémon and see which one takes the prize.",
            techStack: [
                "TypeScript",
                "Elixir",
                "Next.js"
            ]
        },
        {
            title: "1 App 5 Stacks",
            description: "A fun and lighthearted example of building the same application with different frameworks and technologies. Explore the world of software development with this fun and interactive example.",
            techStack: [
                "Elixir",
                "Phoenix",
                "Postgres"
            ]
        }
    ],
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
