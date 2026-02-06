"use client";

import { PORTFOLIO_THEMES } from "@/lib/themes";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { Button } from "../ui/button";

export const ColorPicker = () => {

    const colors = usePortfolioStore((state) => state.colors);
    const setColors = usePortfolioStore((state) => state.setColors);

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Colors</h3>
            <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_THEMES.map((theme) => {
                    const isActive = theme.colors.accent === colors.accent;

                    return (
                        <Button
                            variant={"outline"}
                            size="sm"
                            key={theme.id}
                            onClick={() => setColors(theme.colors)}
                            className={`
                                flex justify-start items-center h-fit gap-2 px-2 py-2 rounded-xl border transition-all text-left group bg-neutral-800 dark:bg-neutral-900
                                ${isActive
                                    ? "border-neutral-500 ring-1 ring-neutral-500/50"
                                    : "border-neutral-700 hover:border-neutral-500"
                                }
                            `}
                        >
                            <div
                                className="w-8 h-8 rounded-full shadow-sm border border-neutral-500/50 flex-shrink-0 dark:border-neutral-700/50"
                                style={{ backgroundColor: theme.colors.accent }}
                            />

                            <div className="flex flex-col">
                                <span className="text-sm">
                                    {theme.name}
                                </span>
                                <div className="flex gap-1 mt-1">
                                    <div className="w-2 h-2 rounded-full border border-neutral-500/50" style={{ background: theme.colors.light.bg }} />
                                    <div className="w-2 h-2 rounded-full border border-neutral-500/50" style={{ background: theme.colors.dark.bg }} />
                                </div>
                            </div>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};