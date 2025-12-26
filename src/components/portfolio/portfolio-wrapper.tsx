"use client";

import { useState } from "react";
import EditorPanel from "../editor/editor-panel";
import PortfolioPreview from "./portfolio-preview";
import { cn } from "@/lib/utils";
import { AIFolio } from "@/schemas/aifolio.schema";
import { UserProfile, Repo } from "@/lib/github";

interface PortfolioWrapperProps {
    username: string;
    portfolio: AIFolio;
    repos: Repo[];
    profile: UserProfile;
}

export default function PortfolioWrapper({ username, portfolio, profile, repos }: PortfolioWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex min-h-screen w-full bg-black">
            <aside className={cn("transition-all", isSidebarOpen ? "w-1/4" : "w-fit")}>
                <EditorPanel
                    username={username}
                    open={isSidebarOpen}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </aside>
            <main className="flex-1">
                <PortfolioPreview
                    username={username}
                    portfolio={portfolio}
                    profile={profile}
                    repos={repos}
                />
            </main>
        </div>
    );
};