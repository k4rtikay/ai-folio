import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import StandardFooter from "./standard-footer";
import Header from "./header";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo, UserProfile } from "@/lib/github";

interface StandardTemplateProps {
    username: string;
    portfolio: AIFolio;
    profile: UserProfile;
    repos: Repo[];      
}

export default function StandardTemplate({ portfolio, profile, repos, username }: StandardTemplateProps) {
    return (
        <div className="bg-[#F5F7FA] w-full h-full px-16 md:px-32 dark:bg-[#111827]">
            <div className="flex flex-col border-r border-l border-gray-200 dark:border-gray-800">
                <Header name={profile.name ?? username}/>
                <HeroSection heroText={portfolio.heroText ?? ""} heroSubText={portfolio.heroSubText ?? ""}/>
                <Divider />
                <AboutSection about={portfolio.about ?? ""} name={profile.name ?? username} location={profile.location ?? ""} username={username} avatar={profile.avatarUrl ?? ""} links={ {blog: profile.blog, twitterUsername: profile.twitterUsername}}/>
                <Divider />
                <ProjectsSection repos={repos} projectsInfo={portfolio.projects ?? []}/>
                <Divider />
                <SkillsSection skills={portfolio.skills ?? []} />
                <Divider />
                <StandardFooter name={profile.name ?? username}/>
            </div>
        </div>
    );
}