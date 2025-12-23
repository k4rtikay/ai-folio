import { cn } from "@/lib/utils";

export default function Divider() {
    return (
        <div 
        className={cn("w-full h-8 md:h-10 border-l border-gray-200 border-r text-black/5 dark:text-white/3")}
        style={{background: "repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 1px, transparent 6px"}}
        >
        </div>
    );
}