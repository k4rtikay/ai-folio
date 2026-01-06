import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import StandardFooter from "./standard-footer";
import Header from "./header";
import GitStatsSection from "./git-stats-section";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { cn } from "@/lib/utils";
import { fontOptions } from "@/lib/fonts";
import { useTheme } from "next-themes";
import React from "react";

interface StandardTemplateProps {
    username: string;
}

export default function StandardTemplate({ username }: StandardTemplateProps) {
    const portfolio = usePortfolioStore((state) => state.portfolio);
    const profile = usePortfolioStore((state) => state.profile);
    const repos = usePortfolioStore((state) => state.repos);
    const colors = usePortfolioStore((state) => state.colors);
    const font = usePortfolioStore((state) => state.font);
    const selectedFont = fontOptions.find((fontOption) => fontOption.value === font) || fontOptions[0];
    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === "dark";
    const activeColors = isDark ? colors.dark : colors.light;

    console.log(colors);


    if (!profile || !portfolio) {
        return <div>Loading....</div>
    }

    return (
        <div
            className={cn("w-full min-h-full @md:px-16 @lg:px-32", selectedFont.class)}
            style={{
                "--accent-color": colors.accent,
                "--bg-color": activeColors.bg,
                "--text-color": activeColors.text,
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col border-r border-l"
                style={{
                    borderColor: "color-mix(in srgb, var(--text-color) 15%, transparent)",
                }}
            >
                <Header name={profile.name ?? username} />

                <HeroSection heroText={portfolio.heroText ?? ""} heroSubText={portfolio.heroSubText ?? ""} />

                <Divider />

                <AboutSection
                    about={portfolio.about ?? ""}
                    name={profile.name ?? username}
                    location={profile.location ?? ""}
                    username={username} avatar={profile.avatarUrl ?? ""}
                    links={{ blog: profile.blog, twitterUsername: profile.twitterUsername }}
                    company={profile.company}
                />

                <Divider />

                <GitStatsSection followers={profile.followers} following={profile.following} repos={profile.repos} username={username} />

                <Divider />

                <ProjectsSection repos={repos} />

                <Divider />

                <SkillsSection skills={portfolio.skills ?? []} />

                <Divider />

                <StandardFooter name={profile.name ?? username} />
            </div>
        </div>
    );
}