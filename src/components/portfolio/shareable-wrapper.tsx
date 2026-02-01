"use client";

import { useEffect } from "react";
import { usePortfolioStore, PortfolioColors } from "@/store/use-portfolio-state";
import { AIFolio } from "@/schemas/aifolio.schema";
import { UserProfile, Repo } from "@/lib/github";
import StandardTemplate from "./templates/standard/standard-layout";

interface ShareableWrapperProps {
    username: string;
    portfolio: AIFolio;
    profile: UserProfile;
    repos: Repo[];
    colors?: PortfolioColors;
    font?: string;
}

export default function ShareableWrapper({
    username,
    portfolio,
    profile,
    repos,
    colors,
    font,
}: ShareableWrapperProps) {
    const setPortfolio = usePortfolioStore((state) => state.setPortfolio);
    const setProfile = usePortfolioStore((state) => state.setProfile);
    const setRepos = usePortfolioStore((state) => state.setRepos);
    const setColors = usePortfolioStore((state) => state.setColors);
    const setFont = usePortfolioStore((state) => state.setFont);

    useEffect(() => {
        setPortfolio(portfolio);
        setProfile(profile);
        setRepos(repos);
        if (colors) setColors(colors);
        if (font) setFont(font);
    }, [portfolio, profile, repos, colors, font, setPortfolio, setProfile, setRepos, setColors, setFont]);

    return <StandardTemplate username={username} />;
}
