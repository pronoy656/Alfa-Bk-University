"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { programsData } from "@/components/data";

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedFaculty, setSelectedFaculty] = useState("All Faculties");

  const filteredPrograms = useMemo(() => {
    return programsData.programs.filter((prog) => {
      // Level filter
      if (selectedLevel !== "All Levels") {
        if (prog.levelCategory !== selectedLevel) return false;
      }

      // Faculty filter
      if (selectedFaculty !== "All Faculties") {
        if (!prog.faculty.toLowerCase().includes(selectedFaculty.toLowerCase())) {
          return false;
        }
      }

      // Search query
      if (search.trim() !== "") {
        const q = search.toLowerCase();
        const matchTitle = prog.title.toLowerCase().includes(q);
        const matchFac = prog.faculty.toLowerCase().includes(q);
        const matchLevel = prog.level.toLowerCase().includes(q);
        return matchTitle || matchFac || matchLevel;
      }

      return true;
    });
  }, [selectedLevel, selectedFaculty, search]);

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "Basic Higher Education":
        return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "Master Program":
        return "bg-purple-50 text-purple-700 border-purple-200/60";
      case "Doctoral Studies":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/90 to-[#102444]/80" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
              {programsData.kicker}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {programsData.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base max-w-2xl">
              {programsData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & DUAL FILTERS */}
      <section className="pt-8 pb-6 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search programs or faculties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-4 pl-11 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-2xs focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Level Filter Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mr-2 shrink-0">
                LEVEL:
              </span>
              {programsData.levels.map((lvl) => {
                const isSelected = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1E36] text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            {/* Faculty Filter Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mr-2 shrink-0">
                FACULTY:
              </span>
              {programsData.faculties.map((fac) => {
                const isSelected = selectedFaculty === fac;
                return (
                  <button
                    key={fac}
                    onClick={() => setSelectedFaculty(fac)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1E36] text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {fac}
                  </button>
                );
              })}
            </div>

            {/* Counter */}
            <div className="pt-2 text-xs text-slate-400 font-medium">
              {filteredPrograms.length} {filteredPrograms.length === 1 ? "program" : "programs"} found
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS GRID */}
      <section className="py-10 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                >
                  <div>
                    {/* Level Badge + Status badge if applicable */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${getBadgeStyle(
                          prog.level
                        )}`}
                      >
                        {prog.level}
                      </span>
                      {prog.status === "In process of accreditation" && (
                        <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                          In process of accreditation
                        </span>
                      )}
                    </div>

                    {/* Program Title */}
                    <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                      <Link href={`/programs/${prog.slug}`}>{prog.title}</Link>
                    </h3>

                    {/* Faculty */}
                    <p className="mt-1 text-xs text-slate-500">{prog.faculty}</p>
                  </div>

                  {/* Footer Row */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-normal">
                      {prog.duration} · {prog.ects}
                    </span>
                    <Link
                      href={`/programs/${prog.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-slate-900 group-hover:text-blue-600 transition"
                    >
                      Details
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
                <p className="text-sm font-semibold">No study programs found matching your filters.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedLevel("All Levels");
                    setSelectedFaculty("All Faculties");
                  }}
                  className="mt-3 text-xs font-bold text-[#0B1E36] hover:underline cursor-pointer"
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
