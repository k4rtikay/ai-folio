"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";
import { Forward, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorForm } from "./editor-form";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { RotateCcw } from "lucide-react";

interface EditorPanelProps {
    username: string;
    open: boolean;
    onToggle: () => void;
    toggleView?: () => void;
}

export default function EditorPanel({ username, open, onToggle, toggleView }: EditorPanelProps) {

    const { resetPortfolio, resetProfile } = usePortfolioStore();

    const handleResetAll = () => {
        resetPortfolio();
        resetProfile();
    };

    return (
        <div className="h-full w-full bg-[#26262B] text-[#F2F4F7] px-2 py-3 flex flex-col items-center">
            <div className="w-full flex justify-between items-center">
                {open &&
                    <Button variant={"outline"} size={"sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-[#F2F4F7] border-none">
                        <span className="flex gap-2 items-center w-full">
                            <p className="text-xs">@{username}</p>
                        </span>
                    </Button>
                }

                <div className={cn("items-center", open ? "flex gap-2" : "flex flex-col-reverse gap-2")}>
                    <Button variant={"outline"} size={"icon-sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-[#F2F4F7] border-none">
                        <Forward className="w-4 h-4 text-[#F2F4F7]"></Forward>
                    </Button>

                    <Button
                        variant={"outline"}
                        size={"icon-sm"}
                        className="bg-[#313136] hover:bg-gray-800 hover:text-[#F2F4F7] border-none"
                        onClick={toggleView}
                    >
                        <MonitorSmartphone className="w-4 h-4 text-[#F2F4F7]"></MonitorSmartphone>
                    </Button>

                    <Button
                        variant={"outline"}
                        size={"icon-sm"}
                        onClick={() => onToggle()}
                        className="bg-[#26262B] hover:bg-gray-800 border-none"
                    >
                        <Sidebar className="w-4 h-4 text-[#F2F4F7]" />
                    </Button>
                </div>
            </div>

            {
                open &&
                <div className="w-full h-full mt-2 overflow-y-auto">
                    <div className="w-full flex justify-between py-2 items-end">
                        <h2 className="font-semibold">Content</h2>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleResetAll}
                            className="text-xs gap-1.5 text-orange-400 border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
                        >
                            <RotateCcw className="w-1 h-1" />
                            All
                        </Button>
                    </div>
                    <EditorForm className="ml-1 px-2"/>
                </div>
            }

        </div >
    );
}