import Image from "next/image";
import { Repo } from "@/lib/github";
import { Star } from "lucide-react";

interface ProjectsSectionProps {
    repos: Repo[];
}

export default function ProjectsSection({ repos }: ProjectsSectionProps) {

    console.log(repos)
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="p-4 border-t border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <p className="text-base tracking-wide opacity-70">Here are some of my works.</p>
            </div>
            <div className="w-full flex flex-col">
                {repos.map((project, index) => (
                    <div key={index} className="w-full flex gap-4 p-4 border-b border-gray-200 dark:border-gray-800">
                        <div className="w-[240px] h-[160px] rounded-md overflow-hidden border border-gray-200">
                            {/* <Image src={""} alt="" width={240} height={160} /> */}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="flex w-full justify-between items-center">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <span className="flex w-fit gap-2 px-2 py-1 rounded-md items-center text-base tracking-wide opacity-70 border-2 border-gray-200 dark:border-gray-800">
                                    <Star className="w-4 h-4" /> {project.stars}
                                </span>
                            </span>
                            <p className="text-base tracking-wide opacity-70">{project.description}</p>
                            <p className="text-base tracking-wide opacity-70">{project.language}</p>
                            <a href={project.url} rel="noreferrer nopener" target="_blank">
                                <button className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded-md">View Project</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}