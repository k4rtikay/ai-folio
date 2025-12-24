import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { UserProfile } from "@/lib/github";

interface HeaderProps {
    profile: UserProfile;
    username: string;
}

export default function Header({ profile, username }: HeaderProps) {

    const name = profile?.name;

    return (
        <header className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
            <p className="text-lg font-semibold">{name ? name : username}</p>
            <div>
                <Button variant="ghost" size="icon-sm">
                    <Sun />
                </Button>
            </div>
        </header>
    );
}