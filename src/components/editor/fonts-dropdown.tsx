"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { fontOptions } from "@/lib/fonts";

export const FontsDropdown = () => {

    const selectedFont = usePortfolioStore((state) => state.font);
    const setFont = usePortfolioStore((state) => state.setFont);

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">Fonts</h3>
            <Select
                value={selectedFont}
                onValueChange={(value) => setFont(value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue
                        placeholder="Select a font"
                    />
                </SelectTrigger>
                <SelectContent className="w-full dark">
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
    );
};