import { UsernameForm } from "@/components/shared/username-form";
import LoginButton from "@/components/shared/login-button";
import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";
import { Github } from "lucide-react";

export default async function HomePage() {

  return (
    <div className="dark bg-background text-foreground flex flex-col">
      <div className="min-h-screen flex flex-col">
        <header className="flex justify-between px-4 pt-2 items-center">
          <h1 className="font-semibold">GitXhibit</h1>
          <span className="flex gap-8 items-center">
            <a href="https://github.com/k4rtikay/gitxhibit" className="hover:text-primary transition-colors"><Github className="size-5" /></a>
            <LoginButton />
          </span>
        </header>

        <main className="flex flex-col gap-4 items-center p-6 md:p-24 flex-1">
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              From GitHub to Portfolio. Instantly.
            </h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-6 md:leading-8 px-4 md:px-0">
              Showcase your work with stunning, developer-focused templates and let AI handle the copy.
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
