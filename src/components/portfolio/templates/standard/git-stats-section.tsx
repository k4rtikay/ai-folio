interface   GitStatsSectionProps {
    followers: number | null;
    following: number | null;
    repos: number | null;
}

export default function GitStatsSection({ followers, following, repos }: GitStatsSectionProps) {
    return (
        <div className="p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Github Stats</h2>

            <div className="w-full flex justify-center gap-8 md:gap-64"> 
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
            
        </div>
    );
}