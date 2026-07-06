import { CardStack, CardOffset } from "../ui/card-stack";
import { PORTFOLIO_THEMES } from "@/lib/themes";

const PROFILES = [
    {
        name: "Alex Chen",
        handle: "@alexcodes",
        skills: ["TypeScript", "React", "Node.js"],
        bio: "Building clean, minimal software for the modern web.",
    },
    {
        name: "Maya Torres",
        handle: "@mayadev",
        skills: ["Python", "Django", "PostgreSQL"],
        bio: "Full-stack engineer riding the deep end of the stack.",
    },
    {
        name: "Sam Okafor",
        handle: "@sambuilds",
        skills: ["Rust", "Go", "Kubernetes"],
        bio: "Open-source maintainer and systems tinkerer.",
    },
    {
        name: "Elena Voss",
        handle: "@elenacodes",
        skills: ["Swift", "SwiftUI", "Figma"],
        bio: "Crafting premium developer experiences, pixel by pixel.",
    },
    {
        name: "Jordan Lee",
        handle: "@jlee.dev",
        skills: ["Java", "Spring", "AWS"],
        bio: "Coffee-fueled backend engineer shipping resilient APIs.",
    },
    {
        name: "Priya Nair",
        handle: "@priyabuilds",
        skills: ["Vue", "Tailwind", "GraphQL"],
        bio: "Designing delightful, accessible frontend interfaces.",
    },
];

const customOffsets: CardOffset[] = [
    { scale: 1, y: 0, opacity: 1 },
    { scale: 0.95, y: -10, opacity: 0.95 },
    { scale: 0.9, y: -20, opacity: 0.85 },
];

export default function ThemesSkeleton() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <CardStack
                exitOffset={40}
                autoAdvance={true}
                autoAdvanceInterval={4000}
                className="mt-12 w-72"
                offsets={customOffsets}
            >
                {PORTFOLIO_THEMES.map((theme, index) => {
                    const profile = PROFILES[index % PROFILES.length];
                    const { bg, text } = theme.colors.light;
                    const accent = theme.colors.accent;
                    const initials = profile.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("");

                    const heatmap = theme.heatmap.light;

                    return (
                        <div
                            key={theme.id}
                            className="relative flex h-fit w-full flex-col justify-between gap-2 overflow-hidden rounded-xl py-5 pl-5 pr-9 shadow-[0_2px_4px_0_rgba(0,0,0,0.25),inset_0_2px_4px_1px_rgba(255,255,255,1),inset_0_-2px_4px_1px_rgba(0,0,0,0.1)]"
                            style={{
                                backgroundColor: bg,
                                color: text,
                                borderColor: `${accent}`,
                            }}
                        >
                            <div className="flex items-center gap-3 z-10">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                                    style={{ backgroundColor: accent }}
                                >
                                    {initials}
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="font-display text-base font-semibold tracking-tight">
                                        {profile.name}
                                    </span>
                                    <span
                                        className="text-xs font-medium"
                                        style={{ color: accent }}
                                    >
                                        {profile.handle}
                                    </span>
                                </div>
                            </div>

                            <p className="w-full text-sm font-medium opacity-80 text-balance z-10">
                                {profile.bio}
                            </p>

                            <div className="flex flex-wrap items-center gap-1.5 z-10">
                                {profile.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full px-2.5 py-1 text-[10px] font-medium border"
                                        style={{
                                            backgroundColor: `${accent}1A`,
                                            color: accent,
                                            borderColor: accent,
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Heatmap strip */}
                            <div className="absolute inset-y-0 right-0 flex w-8 flex-col items-center justify-between gap-x-1 py-4 pr-3 z-10">
                                {Array.from({ length: 8 }).map((_, row) => (
                                    <div key={row} className="flex gap-1">
                                        {[0, 1].map((col) => {
                                            const heat =
                                                heatmap[
                                                    (row * 2 + col + index) %
                                                        heatmap.length
                                                ];
                                            return (
                                                <span
                                                    key={col}
                                                    className="h-2.5 w-2.5 rounded-[2px]"
                                                    style={{
                                                        backgroundColor: heat,
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </CardStack>
        </div>
    );
}
