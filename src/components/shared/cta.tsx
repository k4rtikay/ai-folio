import { UsernameForm } from "./username-form";

export default function CTA() {
    return (
        <div
            className="flex flex-col justify-center items-center gap-12 w-full md:max-w-5xl my-24 px-4 py-32 rounded-2xl md:rounded-4xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/landing-hero-bg.png')"}}
        >
            <h2 className="text-center max-w-xl text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight font-display px-4">
                Claim your own corner of the web.
            </h2>
            <UsernameForm />
        </div>
    );
}
