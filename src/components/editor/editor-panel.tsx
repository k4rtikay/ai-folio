"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar, Loader2, Check, Save } from "lucide-react";
import { Forward, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditorForm } from "./editor-form";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { RotateCcw } from "lucide-react";
import { fontOptions } from "@/lib/fonts";
import { ColorPicker } from "./color-picker";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

    const selectedFont = font;

    console.log(selectedFont);

    return (
        <div className="h-full w-full bg-[#26262B] text-[#F2F4F7] px-2 py-3 flex flex-col items-center">
            <div className="w-full flex justify-between items-center">
                {open &&
                    <Button variant={"outline"} size={"sm"} className="bg-[#313136] hover:bg-gray-800 hover:text-[#F2F4F7] border-none">
                        <span className="flex gap-2 items-center w-full">
                            {currentUserName ? <p className="text-xs">@{currentUserName}</p> : <p className="text-xs">Sign In</p>}
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
                <div className="w-full h-full flex flex-col gap-2 mt-2 overflow-y-auto">

                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex justify-between py-2 items-end">
                            <h2 className="font-semibold">Appearance</h2>
                            <Button
                                variant="outline"
                                size="sm"
                                // onClick={handleResetAll}
                                className="text-xs gap-1.5 text-orange-400 border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
                            >
                                <RotateCcw className="w-2 h-2" />
                                All
                            </Button>
                        </div>
                        <div className="w-full">
                            <ColorPicker />
                        </div>
                        <div className="w-full">
                            <Select
                                value={selectedFont}
                                onValueChange={(value) => setFont(value)}
                            >
                                <SelectTrigger className="w-full bg-[#121212] border-[#313136]">
                                    <SelectValue
                                        placeholder="Select a font" />
                                </SelectTrigger>
                                <SelectContent className="w-full bg-[#121212] border-[#313136">
                                    <SelectGroup>
                                        <SelectLabel>Fonts</SelectLabel>
                                        {fontOptions.map((font) => (
                                            <SelectItem
                                                key={font.value}
                                                value={font.value}
                                                className={`cursor-pointer focus:bg-[#313136] focus:text-white ${font.class}`}
                                            >
                                                {font.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full flex justify-between py-2 items-end">
                            <h2 className="font-semibold">Content</h2>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleResetAll}
                                className="text-xs gap-1.5 text-orange-400 border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
                            >
                                <RotateCcw className="w-2 h-2" />
                                All
                            </Button>
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
                            className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        <button className="w-full px-4 py-2 border rounded">
                            Get Shareable Link
                        </button>
                    </div>
                ) : (
                    <div className="border rounded p-4 text-center">
                        <p className="text-sm mb-2">Like this portfolio?</p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-4 py-2 bg-purple-600 text-white rounded"
                        >
                            Create Your Own
                        </button>
                    </div>
                )}
            </div>

        </div >
    );
}