import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-neutral-950">
            <div className="flex flex-col p-10 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 items-center gap-2">
                <Loader2 className="size-8 animate-spin text-neutral-400" />
                <p className="text-neutral-400 text-sm">Generating your portfolio...</p>
                <p className="text-xs text-neutral-500">This may take up to 15 seconds...</p>
            </div>
        </div>
    )
}