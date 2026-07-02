import LoginButton from "@/components/shared/login-button";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
];

export default function LandingHeader() {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-center pt-6 px-8 z-50 pointer-events-none">
            {/*<div className="w-40 hidden md:block" aria-hidden="true"></div>*/}
            <nav className="pointer-events-auto flex items-center gap-6 px-2 py-2 rounded-full font-semibold border border-border/80 bg-muted/40 backdrop-blur-md shadow-lg">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icon.png"
                        alt="GitXhibit Logo"
                        width={32}
                        height={32}
                        className="rounded-full w-5 h-5"
                    />
                    <h1 className="font-display pt- text-lg leading-none text-foreground tracking-tight">
                        GitXhibit
                    </h1>
                </Link>

                <div className="flex items-center gap-6 pr-2">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-all transition-duration-200 ease-out"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <LoginButton />
            </nav>
            {/*<div className="pointer-events-auto flex gap-4 items-center justify-end w-40">
                <LoginButton />
            </div>*/}
        </header>
    );
}
