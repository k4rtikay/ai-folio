"use client";

import { EVAN_PORTFOLIO, EVAN_PROFILE } from "@/lib/famous-devs-data";
import Header from "@/components/portfolio/templates/standard/header";
import HeroSection from "@/components/portfolio/templates/standard/hero-section";
import AboutSection from "@/components/portfolio/templates/standard/about-section";
import React from "react";

export default function HeroIllustration() {
    const profile = EVAN_PROFILE;
    const portfolio = EVAN_PORTFOLIO;

    // Fixed colors for the illustration (dark theme)
    const bgColor = "#0a0a0a";
    const textColor = "#fafafa";
    const accentColor = "#8b5cf6";

    return (
        <div className="relative w-full px-4 py-8">
            {/* Ambient glow background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-cyan-500/20 blur-3xl rounded-full" />
            </div>

            {/* Window container with perspective */}
            <div className="relative perspective-[2500px]">
                {/* Window frame */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-neutral-900/95 to-neutral-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl rotate-x-[20deg] rotate-y-[10deg] rotate-z-[-8deg]">

                    {/* macOS-style title bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-neutral-900/80">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-xs text-neutral-400">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>gitexhibit.com/evan</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio content preview - using actual Standard template components */}
                    <div className="relative h-[420px] md:h-[480px] overflow-hidden">
                        {/* Portfolio container with CSS variables for theming */}
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
                                className="flex flex-col border-r border-l max-w-5xl mx-auto transform scale-[0.85] origin-top"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)",
                                }}
                            >
                                {/* Actual Header Component */}
                                <Header name={profile.name} />

                                {/* Actual Hero Section Component */}
                                <HeroSection
                                    heroText={portfolio.heroText ?? ""}
                                    heroSubText={portfolio.heroSubText ?? ""}
                                />

                                {/* Actual About Section Component */}
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

                        {/* Bottom fade mask - uses the same background color */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                            style={{
                                background: `linear-gradient(to top, ${bgColor} 0%, ${bgColor} 20%, transparent 100%)`
                            }}
                        />
                    </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-white/5 to-transparent blur-xl rounded-full" />
            </div>
        </div>
    );
}