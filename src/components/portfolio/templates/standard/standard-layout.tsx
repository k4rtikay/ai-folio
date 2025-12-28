import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import StandardFooter from "./standard-footer";
import Header from "./header";
import GitStatsSection from "./git-stats-section";
import { usePortfolioStore } from "@/store/use-portfolio-state";

interface StandardTemplateProps {
    username: string;    
}

export default function StandardTemplate({ username }: StandardTemplateProps) {
    const portfolio = usePortfolioStore((state) => state.portfolio);
    const profile = usePortfolioStore((state) => state.profile);
    const repos = usePortfolioStore((state)=>state.repos);

    if(!profile || !portfolio ){
        return <div>Loading....</div>
    }

    return (
        <div className="bg-[#F5F7FA] w-full min-h-full @md:px-16 @lg:px-32 dark:bg-[#16181D] dark:text-[#ECEFF4]">
            <div className="flex flex-col border-r border-l border-gray-200 dark:border-[#27282D]">
                <Header name={profile.name ?? username}/>

                <HeroSection heroText={portfolio.heroText ?? ""} heroSubText={portfolio.heroSubText ?? ""}/>

                <Divider />

                <AboutSection
                about={portfolio.about ?? ""}
                name={profile.name ?? username}
                location={profile.location ?? ""} 
                username={username} avatar={profile.avatarUrl ?? ""} 
                links={ {blog: profile.blog, twitterUsername: profile.twitterUsername}}
                company={profile.company}
                />

                <Divider /> 

                <GitStatsSection  followers={profile.followers} following={profile.following} repos={profile.repos} username={username}/>

                <Divider /> 

                <ProjectsSection repos={repos}/>

                <Divider />

                <SkillsSection skills={portfolio.skills ?? []} />

                <Divider />

                <StandardFooter name={profile.name ?? username}/>
            </div>
        </div>
    );
}