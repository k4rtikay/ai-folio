import Image from "next/image";

const projects = [
    {
        title: "orbit-ui", // Matches mockRepos[0].name
        description: "A highly performant, accessible React component library designed to reduce development time by 40% for enterprise dashboards.",
        techStack: ["React", "TypeScript", "Storybook", "Rollup"],
    },
    {
        title: "chat-genie", // Matches mockRepos[2].name
        description: "An AI integration tool that allows developers to instantiate custom LLM personas with a single API call, streamlining customer support bot creation.",
        techStack: ["Python", "FastAPI", "OpenAI API", "Redis"],
    },
    {
        title: "postgres-auto-backup", // Matches mockRepos[1].name
        description: "A set-and-forget disaster recovery solution for Dockerized PostgreSQL databases, ensuring 99.9% data safety for small startups.",
        techStack: ["Shell Scripting", "Docker", "Cron", "S3"],
    }
]


export default function ProjectsSection() {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="p-4 border-t border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <p className="text-base tracking-wide opacity-70">Here are some of my works.</p>
            </div>
            <div className="w-full flex flex-col">
                {projects.map((project, index) => (
                    <div key={index} className="w-full flex gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="w-[240px] h-[160px] rounded-md overflow-hidden border border-gray-200">
                            {/* <Image src={""} alt="" width={240} height={160} /> */}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-base tracking-wide opacity-70">{project.description}</p>
                            <p className="text-base tracking-wide opacity-70">{project.techStack.join(", ")}</p>
                            <a href="" rel="noreferrer nopener" target="_blank">
                                <button className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded-sm">View Project</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}