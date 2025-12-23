"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorPanelProps {
    username: string;
    className?: string;
    open: boolean;
    onToggle: () => void;
}

export default function EditorPanel({ username, className, open, onToggle }: EditorPanelProps) {
        return (
        <div className={cn("", className)}>
            <div className="w-full flex justify-between items-center">
                { open && <h1>Editor Panel</h1> }
                <Button variant={"outline"} size={"icon-sm"} onClick={() => onToggle()}>
                    <Sidebar />
                </Button>
            </div>
        </div >
    );
}