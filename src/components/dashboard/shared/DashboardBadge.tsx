"use client";

import React from "react";

export interface DashboardBadgeProps {
  variant?: "success" | "warning" | "danger" | "info" | "gold" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  success: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
  warning: "bg-amber-50 text-amber-800 border-amber-200/80",
  danger: "bg-rose-50 text-rose-800 border-rose-200/80",
  info: "bg-blue-50 text-blue-800 border-blue-200/80",
  gold: "bg-[#FFF8ED] text-[#C69234] border-[#EEDBBA]",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
};

const dotColors = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
  info: "bg-blue-500",
  gold: "bg-[#C69234]",
  neutral: "bg-slate-400",
};

export default function DashboardBadge({
  variant = "neutral",
  size = "md",
  dot = false,
  children,
  className = "",
}: DashboardBadgeProps) {
  const sizeClass =
    size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold select-none ${
        variantStyles[variant]
      } ${sizeClass} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
