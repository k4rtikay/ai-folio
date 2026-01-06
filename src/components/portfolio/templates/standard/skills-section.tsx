interface SkillsProps {
    skills: string[]
}

export default function SkillsSection({ skills }: SkillsProps) {
    const borderStyle = { borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)" };

    return (
        <div
            className="flex flex-col gap-2 p-4 border-t border-b"
            style={borderStyle}
        >
            <h2 className="text-xl @md:text-2xl font-semibold">Skills</h2>
            <div className="w-full flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-sm @md:text-base rounded-sm border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--text-color) 8%, transparent)",
                            borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)"
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}