import { UsernameForm } from "@/components/shared/username-form";
import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";
import LandingHeader from "@/components/shared/landing-header";

export default async function HomePage() {
    return (
        <div className="dark bg-background text-foreground flex flex-col">
            <div className="min-h-screen flex flex-col">
                <LandingHeader />
                <main className="flex flex-col gap-2 items-center p-6 md:px-24 md:pt-16 md:pb-0 flex-1 mt-24">
                    <div className="text-center max-w-2xl mt-8 mb-6">
                        <h1 className="text-2xl md:text-4xl font-bold tracking-tight font-display">
                            From GitHub to Portfolio. Instantly.
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground leading-6 md:leading-8 px-4 md:px-0">
                            Showcase your work with stunning, customizable dev
                            portfolio templates and let AI handle the copy.
                        </p>
                    </div>
                    <UsernameForm />
                    <LandingHero />
                </main>
            </div>
            <LandingFooter />
        </div>
    );
}
