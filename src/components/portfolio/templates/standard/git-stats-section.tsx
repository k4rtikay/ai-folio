import GithubHeatmap from "@/components/shared/github-heatmap";

interface   GitStatsSectionProps {
    followers: number | null;
    following: number | null;
    repos: number | null;
    username: string;
}

export default function GitStatsSection({ followers, following, repos, username }: GitStatsSectionProps) {
    return (
        <div className="flex flex-col gap-4 border-y border-gray-200 dark:border-[#27282D]">
            <h2 className="px-4 py-2 text-2xl font-semibold">Contributions</h2>

            <div className="w-full flex justify-center gap-8 md:gap-64 pb-2 border-b border-gray-200 dark:border-[#27282D]"> 
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Followers</h3>
                    <p className="text-lg">{followers ?? "N/A"}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Following</h3>    
                    <p className="text-lg">{following ?? "N/A"}</p>
                </div>
                <div className="flex flex-col items-center">    
                    <h3 className="text-lg font-semibold">Repos</h3>
                    <p className="text-lg">{repos ?? "N/A"}</p>
                </div>
            </div>

            <GithubHeatmap username={username} />
        </div>
    );
}