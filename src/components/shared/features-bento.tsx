import { cn } from "@/lib/utils";
import BlobSkeleton from "./blob-skeleton";
import RadarSkeleton from "./radar-skeleton";

const cell = "bg-card rounded-3xl min-h-84";

export default function FeaturesBento() {
    return (
        <div className="w-full max-w-5xl grid grid-cols-3 gap-4 mb-4">
            <div className={cn(cell, "col-span-1 relative")}>
                <div className="absolute w-full flex flex-col gap-1 px-4 pt-4">
                    <h3 className="font-display text-balance text-2xl font-medium leading-tight tracking-tight">
                        AI-crafted storytelling
                    </h3>
                    <p className="text-balance text-sm leading-[1.4] md:text-base md:leading-relaxed text-muted-foreground">
                        Discover hidden strengths and transform your GitHub into
                        compelling storytelling.
                    </p>
                </div>
                <BlobSkeleton />
            </div>
            <div className={cn(cell, "col-span-1 relative")}>
                <div className="w-full flex flex-col gap-1 justify-start px-4 pt-4">
                    <h3 className="font-display text-balance text-2xl font-medium leading-tight tracking-tight">
                        Intelligent Charts
                    </h3>
                    <p className="text-balance text-sm leading-[1.4] md:text-base md:leading-relaxed text-muted-foreground">
                        Go beyond commits with visualizations that reveal how
                        you build and grow.
                    </p>
                </div>
                <RadarSkeleton />
            </div>
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-1")} />
            <div className={cn(cell, "col-span-2 relative")}>
                <div className="absolute w-full flex flex-col gap-1 px-4 pt-4">
                    <h3 className="font-display text-balance text-2xl font-medium leading-tight tracking-tight">
                        Beautiful by default
                    </h3>
                    <p className="text-balance text-sm leading-[1.4] md:text-base md:leading-relaxed text-muted-foreground">
                        Start with thoughtfully crafted themes and make them
                        entirely your own.
                    </p>
                </div>
            </div>
        </div>
    );
}
