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
    className?: string;
}

export default function PortfolioWrapper({ username, portfolio, profile, repos, className }: PortfolioWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className={cn("flex min-h-screen w-full", className)}>
            <aside className={cn("border-r border-gray-200 transition-all", isSidebarOpen ? "w-1/4" : "w-fit")}>
                <EditorPanel
                    username={username}
                    className="h-full w-full bg-gray-100 px-2 py-3 flex flex-col items-center"
                    open={isSidebarOpen}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </aside>
            <main className="flex-1 px-2 py-2">
                <PortfolioPreview
                    username={username}
                    portfolio={portfolio}
                    profile={profile}
                    repos={repos}
                    className="h-full w-full border-2 border-gray-200 rounded-md"
                />
            </main>
        </div>
    );
};