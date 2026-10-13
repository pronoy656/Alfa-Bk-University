"use client";

import React from "react";
import Link from "next/link";

export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  headerRight?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "gold" | "navy" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: "bg-white border border-slate-200/80 text-slate-800 shadow-2xs",
  gold: "bg-[#FFFBF2] border border-[#EEDBBA] text-slate-900 shadow-2xs",
  navy: "bg-[#0B1E36] border border-[#162D4E] text-white shadow-xs",
  glass: "bg-white/80 backdrop-blur-md border border-white/60 shadow-2xs",
};

const paddingStyles = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  title,
  subtitle,
  headerRight,
  actionText,
  actionHref,
  onActionClick,
  children,
  footer,
  variant = "default",
  padding = "md",
  className = "",
  onClick,
}: CardProps) {
  const isNavy = variant === "navy";

  // If headerRight isn't supplied but actionText is, render standard action button/link
  const resolvedHeaderRight =
    headerRight ||
    (actionText ? (
      actionHref ? (
        <Link
          href={actionHref}
          className="text-xs font-bold text-[#C58B24] hover:text-[#A77218] transition cursor-pointer"
        >
          {actionText}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onActionClick}
          className="text-xs font-bold text-[#C58B24] hover:text-[#A77218] transition cursor-pointer"
        >
          {actionText}
        </button>
      )
    ) : null);

  const hasHeader = Boolean(title || resolvedHeaderRight);

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl transition-all ${variantStyles[variant]} ${
        onClick ? "cursor-pointer hover:shadow-xs active:scale-[0.99]" : ""
      } ${className}`}
    >
      {hasHeader && (
        <div
          className={`flex items-start sm:items-center justify-between gap-4 pb-4 border-b ${
            isNavy ? "border-white/10" : "border-slate-100"
          } ${
            padding === "none"
              ? "p-6 pb-4"
              : padding === "sm"
              ? "px-4 pt-4"
              : padding === "lg"
              ? "px-8 pt-8"
              : "px-6 pt-6"
          }`}
        >
          <div>
            {typeof title === "string" ? (
              <h3
                className={`text-base font-bold tracking-tight ${
                  isNavy ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h3>
            ) : (
              title
            )}
            {subtitle && (
              <p
                className={`text-xs mt-0.5 ${
                  isNavy ? "text-slate-300" : "text-slate-500 font-medium"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
          {resolvedHeaderRight && (
            <div className="shrink-0">{resolvedHeaderRight}</div>
          )}
        </div>
      )}

      <div
        className={`${paddingStyles[padding]} ${
          hasHeader ? "pt-4" : ""
        }`}
      >
        {children}
      </div>

      {footer && (
        <div
          className={`border-t ${
            isNavy
              ? "border-white/10 bg-white/5"
              : "border-slate-100 bg-slate-50/50"
          } rounded-b-2xl ${
            padding === "none"
              ? "p-4"
              : padding === "sm"
              ? "px-4 py-3"
              : "px-6 py-4"
          }`}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

// Alias for dashboard compatibility
export { Card as DashboardCard };
export type DashboardCardProps = CardProps;
