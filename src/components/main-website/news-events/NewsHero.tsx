"use client";

import React from "react";
import Image from "next/image";

interface NewsHeroProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  activeView?: "overview" | "events";
  onViewChange?: (view: "overview" | "events") => void;
}

export default function NewsHero({
  kicker = "NEWSROOM",
  title = "News & Events",
  subtitle = "Achievements, announcements, media, and what's happening on campus.",
  heroImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  activeView = "overview",
  onViewChange,
}: NewsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1E36] text-white">
      {/* Background Decorative Gold Curved Rings / Orbit Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -top-32 right-10 h-[650px] w-[650px] stroke-[#D5A754]/25 opacity-70"
          fill="none"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle cx="300" cy="300" r="220" strokeWidth="1" />
          <path
            d="M 50 300 Q 300 50 550 300"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
        </svg>
        <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#D5A754]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D5A754] uppercase sm:text-xs">
              {kicker}
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.12]">
              {title}
            </h1>

            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {subtitle}
            </p>

            {/* Optional Interactive Toggle Switcher */}
            {onViewChange && (
              <div className="mt-6 flex items-center gap-2">
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
            )}
          </div>

          {/* Right Image Container matching Figma */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card border */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
