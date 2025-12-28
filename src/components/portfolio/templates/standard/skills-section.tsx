interface SkillsProps{
    skills: string[]
}

export default function SkillsSection({skills}: SkillsProps) {
    return (
        <div className="flex flex-col gap-2 p-4 border-t border-b border-gray-200 dark:border-[#27282D]">
            <h2 className="text-xl @md:text-2xl font-semibold">Skills</h2>
            <div className="w-full flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-sm @md:text-base rounded-sm bg-gray-100 dark:bg-[#27282D] border border-gray-200 dark:border-[#45474A]">{skill}</span>
                ))}
            </div>
        </div>
    );
}