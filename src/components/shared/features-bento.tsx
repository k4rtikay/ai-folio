import { cn } from "@/lib/utils";

const cell = "bg-card rounded-3xl min-h-72";

export default function FeaturesBento() {
    return (
        <div className="w-full max-w-5xl grid grid-cols-3 gap-4 mt-8 mb-4">
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-2")} />
        </div>
    );
}
