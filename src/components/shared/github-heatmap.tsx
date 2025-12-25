"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

interface HeatmapProps {
  username: string;
}

export default function Heatmap({ username }: HeatmapProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(res => res.json())
      .then(json => {
        if (json.contributions) setData(json.contributions);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
        theme={{
            dark: ['#f1f5f9', '#cbd5e1', '#94a3b8', '#64748b', '#334155'], 
            light:  ['#1e293b', '#334155', '#475569', '#64748b', '#cbd5e1'],
        }}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
        showWeekdayLabels
      />
    </div>
  );
}