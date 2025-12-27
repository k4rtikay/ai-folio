interface SkillsProps{
    skills: string[]
}

export default function SkillsSection({skills}: SkillsProps) {
    return (
        <div className="flex flex-col gap-2 p-4 border-t border-b border-gray-200 dark:border-[#27282D]">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="flex gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 rounded-sm bg-gray-100 dark:bg-[#27282D]">{skill}</span>
                ))}
            </div>
        </div>
    );
}