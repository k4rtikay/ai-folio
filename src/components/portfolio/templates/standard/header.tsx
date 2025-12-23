import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export default function Header(){
    return (
        <header className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
            <p className="text-lg font-semibold">git_alex</p>
            <div>
                <Button variant="ghost" size="icon-sm">
                    <Sun />
                </Button>
            </div>
        </header>
    );
}