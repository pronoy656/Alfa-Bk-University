"use client";

import React from "react";

export interface BadgeProps {
  variant?:
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "gold"
    | "navy"
    | "neutral"
    | "outline";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  success: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
  warning: "bg-amber-50 text-amber-800 border-amber-200/80",
  danger: "bg-rose-50 text-rose-800 border-rose-200/80",
  info: "bg-blue-50 text-blue-800 border-blue-200/80",
  gold: "bg-[#FFF8ED] text-[#C69234] border-[#EEDBBA]",
  navy: "bg-[#0B1E36] text-white border-[#162D4E]",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
  outline: "bg-transparent text-slate-700 border-slate-300",
};

const dotColors = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
  info: "bg-blue-500",
  gold: "bg-[#C69234]",
  navy: "bg-sky-400",
  neutral: "bg-slate-400",
  outline: "bg-slate-500",
};

export default function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  icon,
  children,
  className = "",
}: BadgeProps) {
  const sizeClass =
    size === "sm"
      ? "px-2 py-0.5 text-[10px]"
      : size === "lg"
      ? "px-3.5 py-1.5 text-sm"
      : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold select-none transition ${variantStyles[variant]} ${sizeClass} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

// Alias for dashboard compatibility
export { Badge as DashboardBadge };
export type DashboardBadgeProps = BadgeProps;
