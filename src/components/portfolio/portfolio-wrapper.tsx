"use client";

import { useState } from "react";
import EditorPanel from "../editor/editor-panel";
import PortfolioPreview from "./portfolio-preview";
import { cn } from "@/lib/utils";
import { AIFolio } from "@/schemas/aifolio.schema";
import { UserProfile, Repo } from "@/lib/github";
import { useEffect } from "react";
import { usePortfolioStore } from "@/store/use-portfolio-state";

interface PortfolioWrapperProps {
    username: string;
    portfolio: AIFolio;
    repos: Repo[];
    profile: UserProfile;
    isOwnPortfolio: boolean;
    currentUserId?: string;
    currentUserName?: string;
    savedPortfolioId: string | null;
}

export default function PortfolioWrapper({ username, portfolio, profile, repos, isOwnPortfolio, currentUserId, currentUserName, savedPortfolioId }: PortfolioWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

    const setPortfolio = usePortfolioStore((state) => state.setPortfolio);
    const setProfile = usePortfolioStore((state) => state.setProfile);
    const setRepos = usePortfolioStore((state) => state.setRepos);

    useEffect(() => {
        setPortfolio(portfolio);
        setProfile(profile);
        setRepos(repos);
    }, [portfolio, profile, repos, setPortfolio, setProfile, setRepos]);

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