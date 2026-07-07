"use client";

import { useState } from "react";
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

const floatingShadow =
    "shadow-[0_4px_8px_-6px_rgba(0,0,0,0.45),0_2px_6px_-2px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.08)]";

export default function ThemesSkeleton() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTheme = PORTFOLIO_THEMES[activeIndex];

    return (
        <div
            className="relative flex h-full w-full items-center justify-center"
            style={{
                maskImage:
                    "radial-gradient(ellipse at center, black 55%, transparent 90%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 55%, transparent 90%)",
            }}
        >
            <div className="relative mt-12 w-72">
                {/* Floating color swatch */}
                <div
                    className={`bg-background absolute -left-1/3 -top-1/14 z-20 flex -rotate-6 items-center gap-1.5 rounded-2xl p-2.5 ${floatingShadow}`}
                >
                    {[
                        activeTheme.colors.accent,
                        activeTheme.colors.light.bg,
                        activeTheme.colors.dark.text,
                    ].map((color, i) => (
                        <span
                            key={i}
                            className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                {/* Floating "Aa" type patch */}
                <div
                    className={`bg-background absolute -bottom-0 -right-1/5 z-20 flex h-12 w-12 rotate-6 items-center justify-center rounded-xl ${floatingShadow}`}
                >
                    <span
                        className="text-lg font-medium"
                        style={{ color: activeTheme.colors.dark.text }}
                    >
                        Aa
                    </span>
                </div>

                <CardStack
                    exitOffset={40}
                    autoAdvance={true}
                    autoAdvanceInterval={4000}
                    className="h-48 w-72"
                    offsets={customOffsets}
                    activeIndex={activeIndex}
                    onIndexChange={setActiveIndex}
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
                                                        (row * 2 +
                                                            col +
                                                            index) %
                                                            heatmap.length
                                                    ];
                                                return (
                                                    <span
                                                        key={col}
                                                        className="h-2.5 w-2.5 rounded-[2px]"
                                                        style={{
                                                            backgroundColor:
                                                                heat,
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
        </div>
    );
}
