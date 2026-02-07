"use client";

export default function Error({error, reset,}:{
    error: Error & {digest?: string};
    reset: ()=>void;
}){
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col p-10 bg-card rounded-lg shadow-lg border border-foreground/5 items-center gap-2">
                <h1 className="text-2xl font-semibold text-red-500/80">Something went wrong!</h1>
                <p className="text-muted-foreground text-sm">{error.message}</p>
                {error.digest && (
                    <p className="text-muted-foreground text-xs">Error ID: {error.digest}</p>
                )}
                <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors" onClick={reset}>Try again</button>
            </div>
        </div>
    )
}