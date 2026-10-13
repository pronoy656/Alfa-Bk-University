"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: "gold" | "navy" | "emerald" | "amber" | "red";
  headerTheme?: "navy" | "light";
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "max-w-sm"
    | "max-w-md"
    | "max-w-lg"
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl";
  children: React.ReactNode;
  footerActions?: React.ReactNode;
}

const maxWidthMap: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "max-w-sm": "max-w-sm",
  "max-w-md": "max-w-md",
  "max-w-lg": "max-w-lg",
  "max-w-xl": "max-w-xl",
  "max-w-2xl": "max-w-2xl",
  "max-w-3xl": "max-w-3xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  badgeColor = "gold",
  headerTheme = "navy",
  maxWidth = "lg",
  children,
  footerActions,
}: ModalProps) {
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

  const isNavy = headerTheme === "navy";

  const badgeColorClass =
    badgeColor === "gold"
      ? "text-[#D5A754]"
      : badgeColor === "emerald"
      ? "text-emerald-400"
      : badgeColor === "amber"
      ? "text-amber-400"
      : badgeColor === "red"
      ? "text-red-400"
      : isNavy
      ? "text-slate-300"
      : "text-slate-600";

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
        className={`relative w-full ${maxWidthMap[maxWidth] || "max-w-lg"} rounded-3xl ${
          isNavy ? "bg-[#0B1E36]" : "bg-white"
        } shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
      >
        {/* Modal Header */}
        <div
          className={`p-6 relative shrink-0 ${
            isNavy
              ? "bg-[#0B1E36] text-white"
              : "bg-slate-50 border-b border-slate-100 text-slate-900"
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full transition cursor-pointer ${
              isNavy
                ? "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
                : "bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900"
            }`}
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

          <h3
            className={`mt-1 text-lg font-bold leading-snug pr-8 ${
              isNavy ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className={`mt-1 text-xs leading-relaxed font-normal ${
                isNavy ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Modal Body with Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 bg-white flex-1">
          {children}
        </div>

        {/* Optional Footer */}
        {footerActions && (
          <div className="p-4 sm:px-8 border-t border-slate-100 bg-white flex items-center justify-end gap-3 shrink-0">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
}

// Alias for dashboard compatibility
export { Modal as DashboardModal };
export type DashboardModalProps = ModalProps;
