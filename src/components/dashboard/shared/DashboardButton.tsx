"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export interface DashboardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles = {
  primary:
    "bg-[#0B1E36] hover:bg-[#162D4E] text-white shadow-2xs border border-transparent",
  gold:
    "bg-[#C69234] hover:bg-[#B87A1E] text-white shadow-xs border border-transparent",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs",
  outline:
    "bg-transparent hover:bg-[#0B1E36]/5 text-[#0B1E36] border border-[#0B1E36]",
  danger:
    "bg-rose-600 hover:bg-rose-700 text-white shadow-2xs border border-transparent",
  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5 font-semibold",
  md: "px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2 font-bold",
  lg: "px-6 py-3 text-sm sm:text-base rounded-2xl gap-2.5 font-bold",
};

export default function DashboardButton({
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: DashboardButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`inline-flex items-center justify-center transition active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        iconLeft && <span className="shrink-0">{iconLeft}</span>
      )}
      <span>{children}</span>
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}
