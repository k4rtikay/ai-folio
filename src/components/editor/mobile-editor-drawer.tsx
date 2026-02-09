"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import EditorPanel from "./editor-panel";

interface MobileEditorDrawerProps {
    username: string;
    isOwnPortfolio: boolean;
    currentUserName?: string;
}

export function MobileEditorDrawer({
    username,
    isOwnPortfolio,
    currentUserName,
}: MobileEditorDrawerProps) {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    size="icon"
                    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-neutral-800 hover:bg-neutral-700 text-white"
                >
                    <Pencil className="h-6 w-6" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] bg-neutral-900 border-neutral-800">
                <DrawerHeader className="sr-only">
                    <DrawerTitle>Edit Portfolio</DrawerTitle>
                </DrawerHeader>
                <div className="overflow-y-auto h-full">
                    <EditorPanel
                        username={username}
                        open={true}
                        isOwnPortfolio={isOwnPortfolio}
                        currentUserName={currentUserName}
                        onToggle={() => setOpen(false)}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}
