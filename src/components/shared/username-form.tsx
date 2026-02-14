"use client";
import { useRouter } from "next/navigation";

export function UsernameForm() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        if (!username) return;
        router.push(`/portfolio/${username}`);
    }

    return (
        <form action="" className="flex flex-col md:flex-row gap-2 p-1 " onSubmit={handleSubmit}>
            <label htmlFor="username" className="sr-only">Enter Username:</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="e.g. shadcn"
                className="rounded-md border-2 border-neutral-600/50 bg-neutral-800/50 px-2 py-1.5 sm:py-2 w-32 sm:w-40 lg:w-60 h-fit text-sm sm:text-base text-neutral-50 placeholder:text-neutral-500 transition-all duration-125 ease-in-out focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-neutral-500"
            />
            <button type="submit" className="rounded-md shadow-md border border-neutral-700/40 bg-linear-to-b from-neutral-800/70 to-neutral-950/70 px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base text-[#F2F4F7] h-fit w-fit hover:opacity-80 transition-opacity duration-125 whitespace-nowrap">
                Generate
            </button>
        </form>
    );
}