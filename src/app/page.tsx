import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";
import LandingHeader from "@/components/shared/landing-header";
import FeaturesBento from "@/components/shared/features-bento";
import FAQ from "@/components/shared/faq";
import CTA from "@/components/shared/cta";

export default async function HomePage() {
    return (
        <div className="dark bg-background text-foreground flex flex-col">
            <div className="min-h-screen flex flex-col">
                <LandingHeader />
                <main className="flex flex-col items-center p-6 md:px-24 md:pt-16 md:pb-0 flex-1 mt-24">
                    <LandingHero />
                    <section className="w-full flex flex-col items-center" id="features">
                        <h2 className="mt-32 mb-12 text-center max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight font-display px-4">
                            Let your work do the talking.
                        </h2>
                        <FeaturesBento />
                    </section>
                    <section className="w-full flex flex-col items-center" id="faq">
                        <h2 className="mt-32 mb-12 text-center max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight font-display px-4">
                            FAQ
                        </h2>
                        <FAQ />
                    </section>
                    <section className="w-full flex flex-col items-center">
                        <CTA />
                    </section>
                </main>
            </div>
            <LandingFooter />
        </div>
    );
}
