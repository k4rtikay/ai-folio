"use client";

import { PORTFOLIO_THEMES } from "@/lib/themes";
import { usePortfolioStore } from "@/store/use-portfolio-state";

export const ColorPicker = () => {
    const { setColors, colors } = usePortfolioStore();

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">Color Theme</h3>

            <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_THEMES.map((theme) => {
                    const isActive = theme.colors.accent === colors.accent;

                    return (
                        <button
                            key={theme.id}
                            onClick={() => setColors(theme.colors)}
                            className={`
                                flex items-center gap-3 p-3 rounded-xl border transition-all text-left group
                                ${isActive
                                    ? "border-blue-500 ring-1 ring-blue-500"
                                    : "border-gray-200 hover:border-gray-400"
                                }
                            `}
                        >
                            <div
                                className="w-8 h-8 rounded-full shadow-sm border border-black/10 flex-shrink-0"
                                style={{ backgroundColor: theme.colors.accent }}
                            />

                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">
                                    {theme.name}
                                </span>
                                <div className="flex gap-1 mt-1">
                                    <div className="w-2 h-2 rounded-full" style={{ background: theme.colors.light.bg }} />
                                    <div className="w-2 h-2 rounded-full" style={{ background: theme.colors.dark.bg }} />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};