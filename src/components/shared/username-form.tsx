"use client";
import { useRouter } from "next/navigation";

export function UsernameForm() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        if (!username) return;
        router.push(`/portfolio/${username}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-sm  p-1 bg-muted/35 backdrop-blur-sm border border-border rounded-full focus-within:ring-1 focus-within:ring-neutral-500/50 transition-all duration-125"
        >
            <label htmlFor="username" className="sr-only">
                Enter Username:
            </label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                className="flex-1 w-full h-full px-4 py-2  bg-transparent border-none font-medium text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
            />
            <button
                type="submit"
                className="rounded-full bg-primary px-4 py-2 text-sm sm:text-base tracking-wide font-semibold text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
            >
                Generate
            </button>
        </form>
    );
}
