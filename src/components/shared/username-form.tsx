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
        <form action="" className="flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
            <label htmlFor="username" className="sr-only">Enter Username:</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your github username..."
                className="rounded-md border border-gray-300 px-3 py-2 w-40 lg:w-60 h-fit"
            />
            <button type="submit" className="rounded-md bg-black px-3 py-2 text-white h-fit w-fit">Create</button>
        </form>
    );
}