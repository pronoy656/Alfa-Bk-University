"use client";

import Link from "next/link";
import { GraduationCap, ExternalLink } from "lucide-react";
import { DashboardNavItem } from "./types";

interface DashboardSidebarProps {
  items: DashboardNavItem[];
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  mobileSidebarOpen: boolean;
  onCloseMobileSidebar: () => void;
  universityHomeHref?: string;
}

export default function DashboardSidebar({
  items,
  activeTab,
  onSelectTab,
  mobileSidebarOpen,
  onCloseMobileSidebar,
  universityHomeHref = "/",
}: DashboardSidebarProps) {
  return (
    <>
      <aside
        className={`fixed md:sticky top-16 left-0 z-30 w-64 lg:w-[270px] bg-[#0B1E36] text-white flex flex-col justify-between p-4 shrink-0 overflow-y-auto max-h-[calc(100vh-64px)] transition-transform duration-200 ease-in-out ${
          mobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Navigation Items */}
        <div className="space-y-1.5">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            const innerContent = (
              <>
                <div className="flex items-center gap-3.5">
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? "text-[#D5A754]" : "text-slate-400"
                    }`}
                  />
                  <span className="tracking-normal">{item.label}</span>
                </div>

                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#D5A754]" />
                ) : item.badge ? (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                ) : null}
              </>
            );

            const className = `w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer ${
              isActive
                ? "bg-[#152B4D] text-[#D5A754] font-bold shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`;

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    onSelectTab?.(item.id);
                    onCloseMobileSidebar();
                  }}
                  className={className}
                >
                  {innerContent}
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectTab(item.id);
                  onCloseMobileSidebar();
                }}
                className={className}
              >
                {innerContent}
              </button>
            );
          })}
        </div>

        {/* Bottom Slot */}
        <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
          <Link
            href={universityHomeHref}
            className="flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition"
          >
            <span className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#D5A754]" />
              <span>University Home</span>
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={onCloseMobileSidebar}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        />
      )}
    </>
  );
}
