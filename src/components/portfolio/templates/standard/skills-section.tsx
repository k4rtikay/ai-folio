const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Tailwind CSS"
]

export default function SkillsSection() {
    return (
        <div className="flex flex-col gap-2 p-4 border-t border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="flex gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 rounded-sm bg-gray-200 dark:bg-gray-800">{skill}</span>
                ))}
            </div>
        </div>
    );
}