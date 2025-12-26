import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
    name?: string | null;
}

export default function Header({ name }: HeaderProps) {

    const { theme, setTheme } = useTheme();

    const handleTheming = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <header className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
            <p className="text-lg font-semibold">{name}</p>
            <div>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={handleTheming}
                >
                    <Sun />
                </Button>
            </div>
        </header>
    );
}