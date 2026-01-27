"use client";

import { useState } from "react";
import EditorPanel from "../editor/editor-panel";
import PortfolioPreview from "./portfolio-preview";
import { cn } from "@/lib/utils";
import { AIFolio } from "@/schemas/aifolio.schema";
import { UserProfile, Repo } from "@/lib/github";
import { useEffect } from "react";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { PortfolioColors } from "@/store/use-portfolio-state";
interface PortfolioWrapperProps {
    username: string;
    portfolio: AIFolio;
    repos: Repo[];
    profile: UserProfile;
    isOwnPortfolio: boolean;
    currentUserId?: string;
    currentUserName?: string;
    savedPortfolioId: string | null;
    colors?: PortfolioColors;
    font?: string;
}

export default function PortfolioWrapper({ username, portfolio, profile, repos, isOwnPortfolio, currentUserId, currentUserName, savedPortfolioId, colors, font }: PortfolioWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

    const setPortfolio = usePortfolioStore((state) => state.setPortfolio);
    const setProfile = usePortfolioStore((state) => state.setProfile);
    const setRepos = usePortfolioStore((state) => state.setRepos);
    const setColors = usePortfolioStore((state) => state.setColors);
    const setFont = usePortfolioStore((state) => state.setFont);

    useEffect(() => {
        setPortfolio(portfolio);
        setProfile(profile);
        setRepos(repos);
        if(colors) setColors(colors);
        if(font) setFont(font);
    }, [portfolio, profile, repos, setPortfolio, setProfile, setRepos, colors, font, setColors, setFont]);

    return (
        <div className="flex h-screen w-full bg-black overflow-hidden">
            <aside className={cn("transition-all", isSidebarOpen ? "w-1/4" : "w-fit")}>
                <EditorPanel
                    username={username}
                    open={isSidebarOpen}
                    isOwnPortfolio={isOwnPortfolio}
                    currentUserName={currentUserName}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                    toggleView={() => setViewMode(viewMode === "desktop" ? "mobile" : "desktop")}
                />
            </aside>
            <main className="flex-1">
                <PortfolioPreview
                    username={username}
                    viewMode={viewMode}
                />
            </main>
        </div>
    );
};