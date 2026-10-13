"use client";

import React from "react";
import { PageHero } from "@/components/shared";

interface NewsHeroProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  bgImage?: string;
  activeView?: "overview" | "events";
  onViewChange?: (view: "overview" | "events") => void;
}

export default function NewsHero({
  kicker = "NEWSROOM",
  title = "News & Events",
  subtitle = "Achievements, announcements, media, and what's happening on campus.",
  bgImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80",
  heroImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  activeView = "overview",
  onViewChange,
}: NewsHeroProps) {
  return (
    <PageHero
      kicker={kicker}
      title={title}
      subtitle={subtitle}
      bgImage={bgImage}
      overlayClass="bg-gradient-to-r from-[#0B1E36]/90 via-[#0B1E36]/75 to-[#0B1E36]/50"
      decorations
      actions={
        onViewChange ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onViewChange("overview")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeView === "overview"
                  ? "bg-[#D5A754] text-slate-950 shadow-sm"
                  : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              News & Events Overview
            </button>
            <button
              type="button"
              onClick={() => onViewChange("events")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeView === "events"
                  ? "bg-[#D5A754] text-slate-950 shadow-sm"
                  : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              All Events Calendar
            </button>
          </div>
        ) : undefined
      }
      rightContent={
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-white/5 p-1 shadow-2xl backdrop-blur-xs">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt="Alfa BK University Students"
                className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      }
    />
  );
}
