"use client";

export default function Error({ error, reset, }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex items-center justify-center h-screen bg-neutral-950">
            <div className="flex flex-col p-10 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 items-center gap-2">
                <h1 className="text-2xl font-semibold text-red-500/80">Something went wrong!</h1>
                <p className="text-neutral-400 text-sm">Failed to generate portfolio. Please try again.</p>
                {error.digest && (
                    <p className="text-neutral-500 text-xs">Error ID: {error.digest}</p>
                )}
                <button className="mt-4 bg-neutral-700 text-neutral-100 px-3 py-1.5 rounded-md hover:bg-neutral-600 transition-colors" onClick={reset}>Retry</button>
                <a href="/" className="mt-4 text-neutral-500 text-xs hover:underline transition-colors">Go back to home</a>
            </div>
        </div>
    )
}