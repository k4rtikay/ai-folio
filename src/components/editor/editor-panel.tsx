"use client";

import { Button } from "../ui/button";
import { Sidebar, Loader2, Check, Save } from "lucide-react";
import { Forward, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorForm } from "./editor-form";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { RotateCcw } from "lucide-react";
import { ColorPicker } from "./color-picker";
import { FontsDropdown } from "./fonts-dropdown";


interface EditorPanelProps {
    username: string;
    open: boolean;
    isOwnPortfolio: boolean;
    currentUserName?: string;
    onToggle: () => void;
    toggleView?: () => void;
}

export default function EditorPanel({ username, open, onToggle, toggleView, isOwnPortfolio, currentUserName }: EditorPanelProps) {

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
    const saveError = usePortfolioStore((state) => state.saveError);
    const lastSaved = usePortfolioStore((state) => state.lastSaved);


    const handleResetAll = () => {
        resetPortfolio();
        resetProfile();
        resetCustomization();
    };

    const handleSave = async () => {
        await savePortfolio(username);
    }

    const handleCopyLink = () => {
        const shareableUrl = `${window.location.origin}/${username}`;
        navigator.clipboard.writeText(shareableUrl);
        // Show toast: "Link copied!"
    };

    const selectedFont = font;

    console.log(selectedFont);

    return (
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

            <div className="w-full flex flex-col gap-2">
                {isOwnPortfolio ? (
                    <div className="space-y-2">
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="w-full rounded-md border border-neutral-700/40 bg-linear-to-b from-green-500/30 to-green-700/30 px-3 py-2 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Saving...
                                </>
                            ) : lastSaved ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Saved
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    Save Portfolio
                                </>
                            )}
                        </button>

                        {saveError && (
                            <p className="text-red-500 text-sm">{saveError}</p>
                        )}

                        {lastSaved && !saveError && (
                            <p className="text-green-600 text-sm">
                                Last saved: {lastSaved.toLocaleTimeString()}
                            </p>
                        )}

                        {/* Other owner features */}
                        <button
                            onClick={handleCopyLink}
                            className="w-full rounded-md shadow-md bg-transparent border border-neutral-700/40 px-3 py-2 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2"
                        >
                            Get Shareable Link
                        </button>
                    </div>
                ) : (
                    <div className="border rounded p-4 text-center">
                        <p className="text-sm mb-2">Like this portfolio?</p>
                        <button
                            className="w-full rounded-md shadow-md border border-neutral-700/40 bg-linear-to-b from-neutral-800/70 to-neutral-950/70 px-3 py-2 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2"
                        >
                            Create Your Own
                        </button>
                    </div>
                )}
            </div>

        </div >
    );
}