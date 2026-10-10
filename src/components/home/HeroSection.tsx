"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { value: "1993", label: "YEAR FOUNDED" },
    { value: "30+", label: "YEARS OF EXPERIENCE" },
    { value: "6", label: "FACULTIES" },
    { value: "25.325", label: "STUDENTS" },
    { value: "15", label: "ACCREDITED PROGRAMS" },
    { value: "60", label: "COUNTRIES REPRESENTED" },
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0B1E36] text-white overflow-hidden">
        {/* Background Campus Building with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/85 to-[#0B1E36]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="hero-animate-fade-up hero-delay-100 mb-6 inline-flex items-center gap-2 rounded-full border border-[#D5A754]/40 bg-[#D5A754]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D5A754] backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-[#D5A754] animate-pulse" />
              <span>Fall 2026 Applications Open</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D5A754] ml-0.5" />
            </div>

            {/* Main Headline with Silky Staggered Entrance & Luminous Gold Sheen */}
            <h1 className="hero-animate-fade-up hero-delay-200 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18]">
              <span className="block text-white">Inspiring Knowledge,</span>
              <span className="block mt-1 text-gold-animated">
                Shaping the Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate-fade-up hero-delay-350 mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              Alfa BK University is a modern international university committed to academic excellence, innovation, research, entrepreneurship, technology, and global collaboration.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/programs?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="hero-animate-fade-up hero-delay-500 mt-8 max-w-xl flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1.5 focus-within:border-[#D5A754] transition shadow-lg"
            >
              <div className="pl-3.5 pr-2 text-slate-400">
                <Search className="w-5 h-5 text-slate-300" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 138 programs — e.g. Computer Science, MBA, Law..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none px-2 py-2"
              />
              <button
                type="submit"
                className="bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-semibold text-sm px-6 py-2.5 rounded-lg transition shadow-md whitespace-nowrap cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="hero-animate-fade-up hero-delay-650 mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-sm px-6 py-3 rounded-lg shadow-lg shadow-[#D5A754]/20 transition"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/5 hover:bg-white/15 text-white font-medium text-sm px-6 py-3 rounded-lg backdrop-blur-sm transition"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100 py-10 shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 text-center divide-y md:divide-y-0 divide-slate-100">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`pt-4 md:pt-0 fade-up-scroll delay-${(idx % 6 + 1) * 100}`}
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold tracking-wider text-slate-500 uppercase mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
