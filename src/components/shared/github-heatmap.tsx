"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { PORTFOLIO_THEMES, DEFAULT_THEME } from "@/lib/themes";

interface HeatmapProps {
    username: string;
}

export default function Heatmap({ username }: HeatmapProps) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { resolvedTheme } = useTheme();
    const colors = usePortfolioStore((state) => state.colors);

    // Find the current theme based on accent color
    const currentTheme = PORTFOLIO_THEMES.find(
        (theme) => theme.colors.accent === colors.accent
    ) ?? DEFAULT_THEME;

    useEffect(() => {
        const fetchHeatmapData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status}`);
                }

                const json = await res.json();

                if (json.contributions) {
                    setData(json.contributions);
                }
            } catch (error) {
                console.error("Heatmap Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeatmapData();
    }, [username]);

    if (loading) {
        return (
            <div className="w-full h-32 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 text-sm text-gray-400">
                Loading activity...
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center py-4">
            <ActivityCalendar
                data={data}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                theme={{
                    light: currentTheme.heatmap.light,
                    dark: currentTheme.heatmap.dark,
                }}
                labels={{
                    totalCount: "{{count}} contributions in the last year",
                }}
                showWeekdayLabels
            />
        </div>
    );
}