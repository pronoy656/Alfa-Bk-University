"use client";

import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Database,
  Clock,
  Globe,
  ExternalLink,
  BookCheck,
  GraduationCap,
} from "lucide-react";
import { newsEventsData } from "@/components/data";

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-5 w-5 text-[#D5A754]" />,
  Database: <Database className="h-5 w-5 text-[#D5A754]" />,
  Clock: <Clock className="h-5 w-5 text-[#D5A754]" />,
  Globe: <Globe className="h-5 w-5 text-[#D5A754]" />,
};

export default function LibraryPage() {
  const { library } = newsEventsData;
  const [catalogQuery, setCatalogQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (catalogQuery.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* 1. HERO BANNER MATCHING FIGMA */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white">
        {/* Subtle Background Radial Glow & Vector Rings */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-40 -right-20 h-[600px] w-[600px] stroke-[#D5A754]/20 opacity-60"
            fill="none"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="280" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="210" strokeWidth="1.2" />
          </svg>
          <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-[#D5A754]/10 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#D5A754] uppercase sm:text-xs">
              {library.kicker}
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15]">
              {library.title}
            </h1>

            <p className="mx-auto mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
              {library.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. FLOATING CATALOG SEARCH BAR MATCHING FIGMA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-6 sm:-mt-8 z-20 mx-auto max-w-2xl">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-2.5 shadow-xl shadow-slate-200/60"
          >
            <div className="relative flex flex-1 items-center">
              <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={catalogQuery}
                onChange={(e) => {
                  setCatalogQuery(e.target.value);
                  if (searched) setSearched(false);
                }}
                placeholder={library.searchPlaceholder}
                className="w-full bg-transparent py-2.5 pr-4 pl-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition cursor-pointer shrink-0"
            >
              Search Catalog
            </button>
          </form>

          {/* Search Result Feedback */}
          {searched && (
            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/80 p-3 text-xs text-blue-900 animate-in fade-in">
              <span className="font-bold">Catalog search:</span> Showing 14 results for &ldquo;{catalogQuery}&rdquo; in University Digital Repository and Central Library Holdings.
            </div>
          )}
        </div>
      </div>

      {/* 3. FOUR FEATURE / STAT CARDS ROW MATCHING FIGMA */}
      <section className="container mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {library.features.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition duration-300 hover:border-slate-300 hover:shadow-xs"
              >
                {/* Dark Rounded Icon container with Gold Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1E36] shadow-xs transition group-hover:scale-105">
                  {FEATURE_ICONS[item.icon] || (
                    <BookOpen className="h-5 w-5 text-[#D5A754]" />
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LARGE SHOWCASE IMAGE MATCHING FIGMA */}
      <section className="container mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={library.heroImage}
              alt="Student studying in Alfa BK University Library"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 5. ADDITIONAL COMPREHENSIVE LIBRARY ACCESS & RESOURCES */}
      <section className="container mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#C69234] uppercase tracking-wider">
                E-RESOURCES & OPEN ACCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Access Academic Research Databases
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Log in with your Alfa BK University student or faculty credentials to access peer-reviewed publications.
              </p>
            </div>
            <a
              href="/e-learning"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B1E36] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#152D4D] transition shrink-0"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              e-Learning Portal
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
              <span className="block text-sm font-extrabold text-[#0B1E36]">IEEE Xplore</span>
              <span className="text-[11px] text-slate-500">IT & Engineering</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
              <span className="block text-sm font-extrabold text-[#0B1E36]">SpringerLink</span>
              <span className="text-[11px] text-slate-500">Sciences & Economics</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
              <span className="block text-sm font-extrabold text-[#0B1E36]">JSTOR</span>
              <span className="text-[11px] text-slate-500">Humanities & Languages</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
              <span className="block text-sm font-extrabold text-[#0B1E36]">Scopus / KoBSON</span>
              <span className="text-[11px] text-slate-500">National Consortium</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
