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
        <div className="relative flex flex-col gap-2 w-full h-[200px] md:h-[400px] items-center justify-center border-t border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl md:text-4xl font-bold text-shadow-sm">{heroText}</h1>
            <p className="text-sm md:text-base tracking-wide opacity-70 text-shadow-xs">{heroSubText}</p>

            <div className="absolute inset-0 flex items-end w-full h-full gap-0 justify-between pb-0 pointer-events-none">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="w-full rounded-t-sm bg-gradient-to-t from-blue-500/80 via-cyan-400/60 dark:from-cyan-600 dark:via-cyan-600/60 to-transparent"
                        style={{ height: bar.height, opacity: bar.opacity }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA] via-transparent to-[#F5F7FA]/60 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/30 pointer-events-none" />
        </div>
    )
}