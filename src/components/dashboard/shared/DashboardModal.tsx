"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: "gold" | "navy" | "emerald" | "amber";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  children: React.ReactNode;
  footerActions?: React.ReactNode;
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
};

export default function DashboardModal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  badgeColor = "gold",
  maxWidth = "lg",
  children,
  footerActions,
}: DashboardModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const badgeColorClass =
    badgeColor === "gold"
      ? "text-[#D5A754]"
      : badgeColor === "emerald"
      ? "text-emerald-400"
      : badgeColor === "amber"
      ? "text-amber-400"
      : "text-slate-300";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidthMap[maxWidth]} rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]`}
      >
        {/* University Navy Modal Header */}
        <div className="bg-[#0B1E36] p-6 text-white relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {badge && (
            <span
              className={`text-[10px] font-bold tracking-widest uppercase block ${badgeColorClass}`}
            >
              {badge}
            </span>
          )}

          <h3 className="mt-1 text-lg font-bold leading-snug text-white pr-8">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Modal Body with Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">{children}</div>

        {/* Optional Footer */}
        {footerActions && (
          <div className="p-4 sm:px-8 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3 shrink-0">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
}
