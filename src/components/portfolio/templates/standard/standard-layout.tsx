import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import Divider from "./divider";

export default function StandardTemplate() {
    return (
        <div className="bg-[#F5F7FA] w-full h-full flex flex-col p-4">
            <HeroSection />
            <Divider />
            <AboutSection />
        </div>
    );
}