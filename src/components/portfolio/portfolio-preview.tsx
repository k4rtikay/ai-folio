import { Button } from "@/components/ui/button";
import { Forward, MonitorSmartphone } from "lucide-react";
import StandardTemplate from "./templates/standard/standard-layout";
import { cn } from "@/lib/utils";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo, UserProfile } from "@/lib/github";

interface PortfolioPreviewProps {
    username: string;
    portfolio: AIFolio;
    profile: UserProfile;
    repos: Repo[];
}

export default function PortfolioPreview({ username, portfolio, profile, repos }: PortfolioPreviewProps) {
    return (
        <div className="flex flex-col h-full w-full m-1 bg-[#1D1D21] rounded-xl overflow-hidden">
            <header className="flex justify-between items-center p-2 text-white text-sm tracking-wide">
                <div className="flex gap-2 items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>  
                </div>

                <h1 className="font-semibold">Preview</h1>

                <div className="flex  gap-1 items-center">
                    <Button variant={"outline"} size={"icon-sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-white border-none">
                        <Forward className="w-4 h-4 text-white"></Forward>
                    </Button>
                    <Button variant={"outline"} size={"icon-sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-white border-none">
                        <MonitorSmartphone className="w-4 h-4 text-white"></MonitorSmartphone>
                    </Button>
                    <Button variant={"outline"} size={"sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-white border-none">
                        <span className="flex gap-2 items-center w-full">
                            <p className="text-xs">@{username}</p>
                        </span>
                    </Button>
                </div>
            </header>

            <div className="h-full w-full overflow-y-auto px-1 rounded-xl">
                <StandardTemplate username={username} portfolio={portfolio} profile={profile} repos={repos} />
            </div>
        </div>
    );
}