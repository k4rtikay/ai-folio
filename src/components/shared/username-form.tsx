"use client";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export function UsernameForm() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        if (!username) return;
        router.push(`/portfolio/${username}`);
    }

    return (
        <form action="" className="flex flex-row gap-2 p-1" onSubmit={handleSubmit}>
            <label htmlFor="username" className="sr-only">Enter Username:</label>
            <Input
                type="text"
                name="username"
                id="username"
                placeholder="e.g. shadcn"
                className="rounded-md border-2 border-neutral-600/50 px-2 py-1.5 md:py-2 w-32 md:w-40 lg:w-60 h-fit text-sm md:text-base text-neutral-50 transition-all duration-125 ease-in-out"
            />
            <button type="submit" className="rounded-md shadow-md border border-neutral-700/40 bg-linear-to-b from-neutral-800/70 to-neutral-950/70 px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base text-[#F2F4F7] h-fit w-fit hover:opacity-80 transition-opacity duration-125 whitespace-nowrap">
                Generate
            </button>
        </form>
    );
}