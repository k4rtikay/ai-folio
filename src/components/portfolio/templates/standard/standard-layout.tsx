import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import StandardFooter from "./standard-footer";

export default function StandardTemplate() {
    return (
        <div className="bg-[#F5F7FA] w-full h-full px-16 md:px-32 dark:bg-[#111827]">
            <div className="flex flex-col border-r border-l border-gray-200 dark:border-gray-800">
                <HeroSection />
                <Divider />
                <AboutSection />
                <Divider />
                <ProjectsSection />
                <Divider />
                <SkillsSection />
                <Divider />
                <StandardFooter />
            </div>
        </div>
    );
}