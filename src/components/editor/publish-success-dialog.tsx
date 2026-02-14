"use client";

import { useState } from "react";
import { CircleCheck, Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";

interface PublishSuccessDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    username: string;
}

export function PublishSuccessDialog({ open, onOpenChange, username }: PublishSuccessDialogProps) {
    const [copied, setCopied] = useState(false);
    const portfolioUrl = `https://gitxhibit.vercel.app/${username}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(portfolioUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-700 text-neutral-100">
                <DialogHeader className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                        <CircleCheck className="w-10 h-10 text-green-500" />
                    </div>
                    <DialogTitle className="text-xl">Portfolio Published!</DialogTitle>
                    <DialogDescription className="text-neutral-400 mt-2">
                        Your portfolio is now live and ready to share with the world. Anyone with the link can view your work.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-2 mt-4">
                    <div className="flex-1 bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-300 truncate">
                        {portfolioUrl}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopyLink}
                        className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-100 gap-2"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 text-green-500" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4" />
                                Copy
                            </>
                        )}
                    </Button>
                </div>

                <DialogFooter className="mt-4">
                    <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="w-full rounded-md text-blue-200 bg-blue-500/20 px-2 py-1 text-[#F2F4F7] h-fit hover:opacity-80 transition-opacity duration-125 flex items-center justify-center gap-2 border-t border-white/10 shadow-[0_4px_10px_-4px_rgba(37,99,235,0.32)]">Visit Portfolio</a>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
