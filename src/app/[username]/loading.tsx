import { Loader2 } from "lucide-react";

export default function Loading(){
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col p-10 bg-card rounded-lg shadow-lg border border-foreground/5 items-center gap-2">
                <Loader2 className="size-8 animate-spin" />
                <p className="text-muted-foreground text-sm">Loading your portfolio...</p>
            </div>
        </div>
    )
}