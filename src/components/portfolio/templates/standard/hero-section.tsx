interface HeroSectionProps {
    heroText: string;
    heroSubText: string;
}

export default function HeroSection({ heroText, heroSubText }: HeroSectionProps) {

    const bars = [
        { height: "65%", opacity: 0.3 },
        { height: "50%", opacity: 0.4 },
        { height: "40%", opacity: 0.5 },
        { height: "30%", opacity: 0.6 },
        { height: "25%", opacity: 0.7 },
        { height: "20%", opacity: 0.8 },
        { height: "15%", opacity: 0.9 }, // Center
        { height: "20%", opacity: 0.8 },
        { height: "25%", opacity: 0.7 },
        { height: "30%", opacity: 0.6 },
        { height: "40%", opacity: 0.5 },
        { height: "50%", opacity: 0.4 },
        { height: "65%", opacity: 0.3 },
    ];

    return (
        <div
            className="relative p-4 flex flex-col gap-2 w-full h-[200px] @md:h-[400px] items-center justify-center border-t border-b"
            style={{ borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)" }}
        >
            <h1 className="z-10 text-xl @md:text-4xl font-bold text-shadow-sm text-center">{heroText}</h1>
            <p className="z-10 text-sm @md:text-base tracking-wide opacity-70 text-shadow-xs text-center">{heroSubText}</p>

            <div className="absolute inset-0 flex items-end w-full h-full gap-0 justify-between pb-0 pointer-events-none">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="w-full rounded-t-sm"
                        style={{
                            height: bar.height,
                            opacity: bar.opacity,
                            background: `linear-gradient(to top, color-mix(in srgb, var(--accent-color) 80%, transparent), color-mix(in srgb, var(--accent-color) 60%, transparent), transparent)`
                        }}
                    />
                ))}
            </div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, var(--bg-color), transparent, color-mix(in srgb, var(--bg-color) 60%, transparent))`
                }}
            />
        </div>
    )
}