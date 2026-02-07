"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar, Loader2, Save, CircleX } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorForm } from "./editor-form";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { RotateCcw } from "lucide-react";
import { ColorPicker } from "./color-picker";
import { FontsDropdown } from "./fonts-dropdown";
import { toast } from "sonner";
import { PublishSuccessDialog } from "./publish-success-dialog";


interface EditorPanelProps {
    username: string;
    open: boolean;
    isOwnPortfolio: boolean;
    currentUserName?: string;
    onToggle: () => void;
    toggleView?: () => void;
}

export default function EditorPanel({ username, open, onToggle, toggleView, isOwnPortfolio, currentUserName }: EditorPanelProps) {

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const portfolio = usePortfolioStore((state) => state.portfolio);
    const profile = usePortfolioStore((state) => state.profile);
    const repos = usePortfolioStore((state) => state.repos);
    const colors = usePortfolioStore((state) => state.colors);
    const font = usePortfolioStore((state) => state.font);
    const setFont = usePortfolioStore((state) => state.setFont);

    const resetPortfolio = usePortfolioStore((state) => state.resetPortfolio);
    const resetProfile = usePortfolioStore((state) => state.resetProfile);
    const resetCustomization = usePortfolioStore((state) => state.resetCustomization);

    const savePortfolio = usePortfolioStore((state) => state.savePortfolio);
    const isSaving = usePortfolioStore((state) => state.isSaving);

    const handleResetAll = () => {
        resetPortfolio();
        resetProfile();
        resetCustomization();
    };

    const handleSave = async () => {
        const result = await savePortfolio(username);
        if (result.success) {
            setShowSuccessDialog(true);
        } else {
            toast.error(result.error || "Failed to save portfolio", {
                icon: <CircleX className="w-4 h-4" />,
                style: {
                    backgroundColor: "rgba(239, 68, 68, 0.25)",
                    color: "#fca5a5",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                },
            });
        }
    }

    const selectedFont = font;

    console.log(selectedFont);

    return (
        <>
            <PublishSuccessDialog
                open={showSuccessDialog}
                onOpenChange={setShowSuccessDialog}
                username={username}
            />

            <div className="h-full w-full bg-neutral-900 text-neutral-100 px-2 py-3 flex flex-col items-center">
                <div className="w-full flex justify-between items-center">
                    {open &&
                        <Button variant={"outline"} size={"sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-[#F2F4F7] border-none">
                            <span className="flex gap-2 items-center w-full">
                                {currentUserName ? <p className="text-xs">@{currentUserName}</p> : <p className="text-xs">Sign In</p>}
                            </span>
                        </Button>
                    }

                    <div className={cn("items-center", open ? "flex gap-2" : "flex flex-col-reverse gap-2")}>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleResetAll}
                            className="text-xs gap-1.5 dark:bg-red-500/20 hover:bg-red-500/20 text-red-400 hover:text-red-200 dark:hover:bg-red-500/20 border-none"
                        >
                            <RotateCcw className="w-2 h-2" />
                            {open && "All"}
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
                    <div className="w-full h-full flex flex-col gap-2 mt-2 overflow-y-auto">

                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex justify-between py-2 items-end">
                                <h2 className="font-semibold">Appearance</h2>
                            </div>
                            <div className="w-full p-2">
                                <ColorPicker />
                            </div>
                            <div className="w-full p-2">
                                <FontsDropdown />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full flex justify-between py-2 items-end">
                                <h2 className="font-semibold">Content</h2>
                            </div>
                            <EditorForm className="ml-1 px-2" />
                        </div>
                    </div>
                }

                {open && (
                    <div className="w-full flex flex-col gap-2">
                        {isOwnPortfolio ? (
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="w-full rounded-md border border-neutral-700/40 text-blue-200 bg-blue-500/20 px-3 py-2 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2"
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4" />
                                        Save and Publish
                                    </>
                                )}
                            </button>
                        ) : (
                            <div className="border rounded p-4 text-center">
                                <p className="text-sm mb-2">Like this portfolio?</p>
                                <button
                                    className="w-full rounded-md shadow-md border border-neutral-700/40 text-blue-200 bg-blue-500/20 px-3 py-2 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2"
                                >
                                    Create Your Own
                                </button>
                            </div>
                        )}
                    </div>
                )}


            </div >
        </>
    );
}