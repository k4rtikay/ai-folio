import { UsernameForm } from "@/components/shared/username-form";
import LoginButton from "@/components/shared/login-button";
import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";
import { Github } from "lucide-react";

export default async function HomePage() {

  return (
    <div className="flex flex-col justify-between">
      <header className="flex justify-between px-4 pt-2 items-center">
        <h1 className="font-semibold">GitXhibit</h1>
        <span className="flex gap-8 items-center">
          <a href="https://github.com/k4rtikay/gitxhibit" className="hover:text-primary transition-colors"><Github/></a> 
          <LoginButton/>
        </span>
      </header>

      <main className="flex flex-col gap-4 items-center p-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            From GitHub to Portfolio. Instantly.
          </h1>
          <p className="mt-2 text-muted-foreground leading-8">
            Showcase your work with stunning, developer-focused templates and let AI handle the copy.
          </p>
        </div>
        <UsernameForm />
        {/* <p className="mt-4 tracking-wide text-muted-foreground opacity-60 text-xs">Uses public GitHub data only.</p> */}
        <LandingHero/>
      </main>
      <LandingFooter />
    </div>
  );
} 