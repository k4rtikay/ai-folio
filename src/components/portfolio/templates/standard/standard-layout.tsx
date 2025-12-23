import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";

export default function StandardTemplate() {
    return (
        <div className="bg-[#F5F7FA] w-full h-full p-4 dark:bg-[#111827]">
            <div className="flex flex-col border-r border-l border-gray-200 dark:border-gray-800">
                <HeroSection />
                <Divider />
                <AboutSection />
            </div>
        </div>
    );
}