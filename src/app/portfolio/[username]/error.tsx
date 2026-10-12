"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    if (error.message === "RATE_LIMIT_EXCEEDED") {
        return (
            <div className="bg-card flex flex-col items-center justify-center min-h-screen text-center p-8">
                <h2 className="text-2xl font-bold mb-4">Whoa, slow down!</h2>
                <p>Rate Limit Exceeded.</p>
                <p className="text-foreground mb-6">
                    You have generated too many portfolios recently. Please wait
                    a bit.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-primary rounded-md text-primary-foreground"
                >
                    Try Again
                </button>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-center h-screen bg-neutral-950">
            <div className="flex flex-col p-10 bg-card rounded-lg shadow-lg border border-border items-center gap-2">
                <h1 className="text-2xl font-semibold text-red-500/80">
                    Something went wrong!
                </h1>
                <p className="text-neutral-400 text-sm">
                    Failed to generate portfolio. Please try again.
                </p>
                {error.digest && (
                    <p className="text-neutral-500 text-xs">
                        Error ID: {error.digest}
                    </p>
                )}
                <button
                    className="mt-4 bg-neutral-700 text-neutral-100 px-3 py-1.5 rounded-md hover:bg-neutral-600 transition-colors"
                    onClick={reset}
                >
                    Retry
                </button>
                <Link
                    href="/"
                    className="mt-4 text-neutral-500 text-xs hover:underline transition-colors"
                >
                    Go back to home
                </Link>
            </div>
        </div>
    );
}
