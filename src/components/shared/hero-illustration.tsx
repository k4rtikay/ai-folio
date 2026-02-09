"use client";

import { EVAN_PORTFOLIO, EVAN_PROFILE } from "@/lib/famous-devs-data";
import Header from "@/components/portfolio/templates/standard/header";
import HeroSection from "@/components/portfolio/templates/standard/hero-section";
import AboutSection from "@/components/portfolio/templates/standard/about-section";
import React from "react";

export default function HeroIllustration() {
    const profile = EVAN_PROFILE;
    const portfolio = EVAN_PORTFOLIO;

    const bgColor = "#0a0a0a";
    const textColor = "#fafafa";
    const accentColor = "#5cf661ff";

    return (
        <div className="relative w-full md:w-3/4 mx-auto px-2 md:px-4 py-4 md:py-8">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[150px] md:h-[200px] bg-gradient-to-br from-green-500/20 via-green-500/10 to-green-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative md:perspective-[2500px]">
                <div className="relative rounded-xl overflow-hidden border border-white/10 [mask-image:linear-gradient(to_bottom,black,transparent)] shadow-2xl shadow-black/50 backdrop-blur-xl md:rotate-x-[50deg] md:rotate-y-[20deg] md:rotate-z-[-30deg]">

                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 border-b border-white/5 bg-neutral-900/80">
                        <div className="flex gap-1.5 md:gap-2">
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-red-500/80" />
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="flex items-center gap-2 px-2 md:px-3 py-1 rounded-md bg-white/5 text-[10px] md:text-xs text-neutral-400">
                                <svg className="w-2.5 md:w-3 h-2.5 md:h-3 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>gitexhibit.com/evan</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[280px] sm:h-[350px] md:h-[480px] overflow-hidden">
                        <div
                            className="absolute inset-0 overflow-hidden pointer-events-none"
                            style={{
                                "--accent-color": accentColor,
                                "--bg-color": bgColor,
                                "--text-color": textColor,
                                backgroundColor: bgColor,
                                color: textColor,
                            } as React.CSSProperties}
                        >
                            <div
                                className="flex flex-col border-r border-l max-w-5xl mx-auto transform scale-[0.65] sm:scale-[0.75] md:scale-[0.85] origin-top"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)",
                                }}
                            >
                                <Header name={profile.name} />
                                <HeroSection
                                    heroText={portfolio.heroText ?? ""}
                                    heroSubText={portfolio.heroSubText ?? ""}
                                />
                                <AboutSection
                                    about={portfolio.about ?? ""}
                                    name={profile.name ?? ""}
                                    location={profile.location ?? ""}
                                    username="evanyou"
                                    avatar={profile.avatarUrl ?? ""}
                                    links={{ blog: profile.blog, twitterUsername: profile.twitterUsername }}
                                    company={profile.company}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-white/5 to-transparent blur-xl rounded-full" />
            </div>
        </div>
    );
}