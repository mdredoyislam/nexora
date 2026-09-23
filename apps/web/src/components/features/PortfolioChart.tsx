"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dummyData = [
  { date: "Jan 1", value: 12400 },
  { date: "Jan 8", value: 13200 },
  { date: "Jan 15", value: 12800 },
  { date: "Jan 22", value: 14500 },
  { date: "Jan 29", value: 15100 },
  { date: "Feb 5", value: 14800 },
  { date: "Feb 12", value: 16200 },
];

export function PortfolioChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dummyData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E887" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00E887" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9AA4B2", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            hide
            domain={["dataMin - 1000", "dataMax + 1000"]}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-border bg-card p-3 shadow-sm">
                    <div className="text-[0.70rem] uppercase text-muted-foreground mb-1">
                      {payload[0].payload.date}
                    </div>
                    <div className="font-bold text-foreground text-lg">
                      ${payload[0].value?.toLocaleString()}
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00E887"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
