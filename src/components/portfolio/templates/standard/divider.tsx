import { cn } from "@/lib/utils";

export default function Divider() {
    return (
        <div
            className={cn("w-full h-8 md:h-10")}
            style={{
                color: "color-mix(in srgb, var(--text-color) 5%, transparent)",
                background: "repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 1px, transparent 6px)"
            }}
        />
    );
}