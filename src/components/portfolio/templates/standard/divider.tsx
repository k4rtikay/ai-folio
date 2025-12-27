import { cn } from "@/lib/utils";

export default function Divider() {
    return (
        <div
            className={cn("w-full h-8 md:h-10 text-black/5 dark:text-[#F2F4F7]/3")}
            style={{ background: "repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 1px, transparent 6px" }}
        />
    );
}