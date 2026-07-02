import { UsernameForm } from "@/components/shared/username-form";
import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";
import LandingHeader from "@/components/shared/landing-header";

export default async function HomePage() {
    return (
        <div className="dark bg-background text-foreground flex flex-col">
            <div className="min-h-screen flex flex-col">
                <LandingHeader />
                <main className="flex flex-col items-center p-6 md:px-24 md:pt-16 md:pb-0 flex-1 mt-24">
                    <div className="text-center max-w-xl mt-8 mb-6">
                        <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight font-display px-4">
                            From GitHub to Portfolio. Instantly.
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground md:leading-relaxed px-4 md:px-0">
                            Showcase your work with stunning, customizable dev
                            portfolio templates and let AI handle the copy.
                        </p>
                    </div>
                    <UsernameForm />
                    <p className="text-center text-muted-foreground text-xs leading-relaxed mt-4">
                        Read-only access. We don&apos;t touch your private data.
                    </p>
                    <LandingHero />
                </main>
            </div>
            <LandingFooter />
        </div>
    );
}
