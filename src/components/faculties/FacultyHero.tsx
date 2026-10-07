import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { FacultyBadges } from "@/components/data";

interface FacultyHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  badges: FacultyBadges;
}

export default function FacultyHero({
  title,
  subtitle,
  bgImage,
  badges,
}: FacultyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1E36] text-white">
      {/* Background Graphic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/95 to-[#0B1E36]/80" />

      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Link
          href="/programs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          All Faculties
        </Link>

        <div className="mt-4 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
            FACULTY
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>

          {/* Badges Row */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-slate-800/90 px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
              {badges.programCount}
            </span>
            {badges.hasBSc && (
              <span className="rounded-full border border-blue-500/40 bg-blue-900/50 px-3.5 py-1 text-xs font-medium text-blue-200">
                BSc available
              </span>
            )}
            {badges.hasMSc && (
              <span className="rounded-full border border-purple-500/40 bg-purple-900/50 px-3.5 py-1 text-xs font-medium text-purple-200">
                MSc available
              </span>
            )}
            {badges.hasPhD && (
              <span className="rounded-full border border-amber-500/40 bg-amber-900/50 px-3.5 py-1 text-xs font-medium text-amber-200">
                PhD available
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
