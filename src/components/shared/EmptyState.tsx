import React from "react";
import { FolderSearch, LucideIcon } from "lucide-react";
import Button from "./Button";

export interface EmptyStateProps {
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  className?: string;
}

export default function EmptyState({
  icon: Icon = FolderSearch,
  title,
  description,
  actionText,
  actionHref,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#C69234] mb-4">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-base font-bold text-slate-800">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
      {actionText && (
        <div className="mt-5">
          <Button
            size="sm"
            variant="gold"
            href={actionHref}
            onClick={onAction}
          >
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}
