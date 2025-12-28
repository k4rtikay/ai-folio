"use client";

import StandardTemplate from "./templates/standard/standard-layout";
import { cn } from "@/lib/utils";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo, UserProfile } from "@/lib/github";

interface PortfolioPreviewProps {
    viewMode: "desktop" | "mobile"; 
    username: string;
    portfolio: AIFolio;
    profile: UserProfile;
    repos: Repo[];
}

export default function PortfolioPreview({ viewMode, username, portfolio, profile, repos }: PortfolioPreviewProps) {
    return (
        <div className="flex items-center justify-center h-full w-full bg-[#121212] overflow-hidden p-4 md:p-8 transition-all">
            
            <div 
                className={cn(
                    "relative shadow-2xl overflow-hidden transition-all duration-500 ease-in-out bg-white dark:bg-black",
                    viewMode === "mobile" 
                        ? "w-[375px] h-[90%] rounded-[3rem] border-[8px] border-[#313136]" 
                        : "w-full max-w-[1400px] h-full rounded-xl border border-[#313136]" 
                )}
            >
                <div 
                    className={cn(
                        "h-8 bg-[#1D1D21] border-b border-[#313136] flex items-center px-4 gap-2 transition-all duration-300",
                        viewMode === "mobile" ? "h-0 opacity-0 overflow-hidden" : "opacity-100"
                    )}
                >
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /> 
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /> 
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" /> 
                    </div>
                    <div className="flex-1 flex justify-center">
                         <div className="bg-[#121212] text-xs text-gray-500 rounded px-3 py-0.5 w-[40%] text-center">
                            {username}.aifolio.app
                         </div>
                    </div>
                </div>

                <div className={cn(
                    "w-full overflow-y-auto scrollbar-hide bg-white dark:bg-black",
                    viewMode === "mobile" ? "h-full" : "h-[calc(100%-2rem)]"
                )}>
                    <StandardTemplate 
                        username={username} 
                        portfolio={portfolio} 
                        profile={profile} 
                        repos={repos} 
                    />
                </div>
            </div>
        </div>
    );
}