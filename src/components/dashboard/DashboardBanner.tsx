"use client";

interface DashboardBannerProps {
  greeting: string;
  subtext: string;
  statusBadgeText?: string;
  statusBadgeColor?: string;
}

export default function DashboardBanner({
  greeting,
  subtext,
  statusBadgeText = "Active",
  statusBadgeColor = "bg-[#D5A754] text-slate-950",
}: DashboardBannerProps) {
  return (
    <div className="w-full bg-[#0B1E36] rounded-2xl p-6 sm:p-7 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-slate-800">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
          <span>{greeting}</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1.5">
          {subtext}
        </p>
      </div>

      {statusBadgeText && (
        <div className="shrink-0">
          <span
            className={`inline-block font-bold text-xs px-4 py-1.5 rounded-full shadow-xs ${statusBadgeColor}`}
          >
            {statusBadgeText}
          </span>
        </div>
      )}
    </div>
  );
}
