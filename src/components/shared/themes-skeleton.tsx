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
            className="relative flex h-full w-full items-center justify-center 
                       [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] 
                       [-webkit-mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]
                       md:[mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]
                       md:[-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_90%)]"
        >
            <div className="relative mt-8 w-52 sm:mt-10 sm:w-60 md:mt-12 md:w-72">
                {/* Floating color swatch */}
                <div
                    className={`bg-background absolute -left-1/3 -top-1/14 z-20 hidden md:flex -rotate-6 items-center gap-1 rounded-lg p-1.5 sm:gap-1.5 sm:rounded-xl sm:p-2 md:rounded-2xl md:p-2.5 ${floatingShadow}`}
                >
                    {[
                        activeTheme.colors.accent,
                        activeTheme.colors.light.bg,
                        activeTheme.colors.dark.text,
                    ].map((color, i) => (
                        <span
                            key={i}
                            className="h-2 w-2 rounded-full ring-1 ring-black/10 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                {/* Floating "Aa" type patch */}
                <div
                    className={`bg-background absolute bottom-4 -right-1/5 z-20 hidden md:flex h-8 w-8 rotate-6 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl md:h-12 md:w-12 ${floatingShadow}`}
                >
                    <span
                        className="text-xs font-medium sm:text-sm md:text-lg"
                        style={{ color: activeTheme.colors.dark.text }}
                    >
                        Aa
                    </span>
                </div>

                <CardStack
                    exitOffset={40}
                    autoAdvance={true}
                    autoAdvanceInterval={4000}
                    className="h-32 w-52 sm:h-40 sm:w-60 md:h-48 md:w-72"
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
                                className="relative flex h-fit w-full flex-col justify-between gap-1.5 overflow-hidden rounded-xl py-3 pl-3 pr-6 shadow-[0_2px_4px_0_rgba(0,0,0,0.25),inset_0_2px_4px_1px_rgba(255,255,255,1),inset_0_-2px_4px_1px_rgba(0,0,0,0.1)] sm:gap-2 sm:py-4 sm:pl-4 sm:pr-7 md:py-5 md:pl-5 md:pr-9"
                                style={{
                                    backgroundColor: bg,
                                    color: text,
                                    borderColor: `${accent}`,
                                }}
                            >
                                <div className="z-10 flex items-center gap-2 sm:gap-3">
                                    <div
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white sm:h-8 sm:w-8 sm:text-xs md:h-10 md:w-10 md:text-sm"
                                        style={{ backgroundColor: accent }}
                                    >
                                        {initials}
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="font-display text-xs font-semibold tracking-tight sm:text-sm md:text-base">
                                            {profile.name}
                                        </span>
                                        <span
                                            className="text-[10px] font-medium sm:text-xs"
                                            style={{ color: accent }}
                                        >
                                            {profile.handle}
                                        </span>
                                    </div>
                                </div>

                                <p className="z-10 w-full text-balance text-[11px] font-medium opacity-80 sm:text-xs md:text-sm">
                                    {profile.bio}
                                </p>

                                <div className="z-10 flex flex-wrap items-center gap-1 sm:gap-1.5">
                                    {profile.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border px-1.5 py-0.5 text-[8px] font-medium sm:px-2 sm:text-[9px] md:px-2.5 md:py-1 md:text-[10px]"
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
                                <div className="absolute inset-y-0 right-0 z-10 flex w-5 flex-col items-center justify-between gap-x-1 py-2 pr-1.5 sm:w-6 sm:py-3 sm:pr-2 md:w-8 md:py-4 md:pr-3">
                                    {Array.from({ length: 8 }).map((_, row) => (
                                        <div
                                            key={row}
                                            className="flex gap-0.5 sm:gap-1"
                                        >
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
                                                        className="h-1.5 w-1.5 rounded-[2px] sm:h-2 sm:w-2 md:h-2.5 md:w-2.5"
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