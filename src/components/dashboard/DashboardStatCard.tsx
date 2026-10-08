"use client";

import { DashboardStat } from "./types";

interface DashboardStatCardProps {
  stat: DashboardStat;
}

export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
        {stat.label}
      </span>
      <div className="text-3xl font-black text-slate-900 mt-2">
        {stat.value}
      </div>
      {stat.subtext && (
        <span className="text-xs font-medium text-slate-400 mt-1 block">
          {stat.subtext}
        </span>
      )}
    </div>
  );
}

interface DashboardStatsGridProps {
  stats: DashboardStat[];
}

export function DashboardStatsGrid({ stats }: DashboardStatsGridProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {stats.map((stat, idx) => (
        <DashboardStatCard key={idx} stat={stat} />
      ))}
    </div>
  );
}
