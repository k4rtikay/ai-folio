"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { PORTFOLIO_THEMES, DEFAULT_THEME } from "@/lib/themes";

const isDev = process.env.NODE_ENV === "development";

function generateMockData(): any[] {
    const data: any[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    // Simple seeded random based on day-of-year for deterministic results
    const seed = (d: Date) => {
        const n = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
        return ((n * 9301 + 49297) % 233280) / 233280;
    };

    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const r = seed(d);
        let count = 0;
        let level: 0 | 1 | 2 | 3 | 4 = 0;

        // ~30% chance of no contribution, weighted distribution for levels
        if (r > 0.3) {
            if (r < 0.55) { count = Math.ceil(r * 3); level = 1; }
            else if (r < 0.75) { count = Math.ceil(r * 6); level = 2; }
            else if (r < 0.9) { count = Math.ceil(r * 10); level = 3; }
            else { count = Math.ceil(r * 15); level = 4; }
        }

        data.push({
            date: d.toISOString().split("T")[0],
            count,
            level,
        });
    }

    return data;
}

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
        if (isDev) {
            setData(generateMockData());
            setLoading(false);
            return;
        }

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