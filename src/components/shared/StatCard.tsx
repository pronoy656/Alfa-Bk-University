import React from "react";
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  iconBg?: string;
  variant?: "default" | "gold" | "navy";
  className?: string;
}

const variantStyles = {
  default: "bg-white border-slate-200/90 text-slate-900",
  gold: "bg-[#FFFBF2] border-[#EEDBBA] text-slate-900",
  navy: "bg-[#0B1E36] border-[#162D4E] text-white",
};

export default function StatCard({
  label,
  value,
  subtext,
  icon: Icon,
  iconBg = "bg-blue-50 text-blue-600",
  variant = "default",
  className = "",
}: StatCardProps) {
  const isNavy = variant === "navy";

  return (
    <div
      className={`w-full rounded-2xl border p-5 sm:p-6 shadow-2xs hover:shadow-xs transition ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <span
            className={`text-xs font-semibold uppercase tracking-wider block ${
              isNavy ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {label}
          </span>
          <div
            className={`text-2xl sm:text-3xl font-black mt-2 ${
              isNavy ? "text-white" : "text-slate-900"
            }`}
          >
            {value}
          </div>
          {subtext && (
            <span
              className={`text-xs font-medium mt-1 block ${
                isNavy ? "text-slate-400" : "text-slate-400"
              }`}
            >
              {subtext}
            </span>
          )}
        </div>

        {Icon && (
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
          >
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
