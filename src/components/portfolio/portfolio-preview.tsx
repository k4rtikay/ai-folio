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
                        <span className="flex gap-2 items-center">
                            <span><svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
                            <p className="text-xs">{username}</p>
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