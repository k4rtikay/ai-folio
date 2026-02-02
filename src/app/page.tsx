import { UsernameForm } from "@/components/shared/username-form";
import LoginButton from "@/components/shared/login-button";
import LandingFooter from "@/components/shared/landing-footer";
import LandingHero from "@/components/shared/landing-hero";

export default async function HomePage() {

  return (
    <div className="flex flex-col justify-between">
      <header className="flex justify-between px-4 py-2">
        <h1>GitExhibit</h1>
        <span className="flex gap-2">
          <button>Github</button> 
          <LoginButton/>
        </span>
      </header>

      <main className="flex flex-col items-center p-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Build Your Vision.
          </h1>
          <p className="mt-2 text-lg leading-8">
            Turn your github into your brand. Choose from many fun templates.
          </p>
        </div>
        <UsernameForm />
        <LandingHero/>
      </main>
      <LandingFooter />
    </div>
  );
} 