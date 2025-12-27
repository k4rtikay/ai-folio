"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";

interface EditorPanelProps {
    username: string;
    open: boolean;
    onToggle: () => void;
}

export default function EditorPanel({ username, open, onToggle }: EditorPanelProps) {
    return (
        <div className="h-full w-full bg-[#26262B] text-[#F2F4F7] px-2 py-3 flex flex-col items-center">
            <div className="w-full flex justify-between items-center">
                {open && <h1>Editor Panel</h1>}
                <Button
                    variant={"outline"}
                    size={"icon-sm"}
                    onClick={() => onToggle()}
                    className="bg-[#26262B] hover:bg-gray-800 border-none"
                >
                    <Sidebar className="w-4 h-4 text-[#F2F4F7]" />
                </Button>
            </div>
        </div >
    );
}