import React from "react";
import Link from "next/link";
import { LucideIcon, ChevronRight } from "lucide-react";

interface AdminPagePlaceholderProps {
  title: string;
  routePath: string;
  icon: LucideIcon;
  description?: string;
}

export default function AdminPagePlaceholder({
  title,
  routePath,
  icon: Icon,
  description,
}: AdminPagePlaceholderProps) {
  return (
    <div className="w-full space-y-6">
      {/* Breadcrumb Header */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <Link
          href="/dashboard/admin"
          className="hover:text-slate-800 transition font-medium"
        >
          Admin Dashboard
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">{title}</span>
      </div>

      {/* Main Container Card */}
      <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="w-16 h-16 rounded-2xl bg-[#0B1E36]/5 text-[#0B1E36] flex items-center justify-center mb-5 shadow-xs">
          <Icon className="w-8 h-8 text-[#C69234]" />
        </div>

        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider mb-3">
          Admin Route Initialized
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          This page is {title} page
        </h1>

        <p className="mt-2 text-sm text-slate-500 max-w-md">
          {description ||
            `Routing and page structure for ${title} are now configured under ${routePath}. Full administrative modules and management controls will be integrated here.`}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href="/dashboard/admin"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition"
          >
            ← Back to Overview
          </Link>
          <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            {routePath}
          </span>
        </div>
      </div>
    </div>
  );
}
