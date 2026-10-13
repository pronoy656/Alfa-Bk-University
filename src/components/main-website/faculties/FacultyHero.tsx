import React from "react";
import { FacultyBadges } from "@/data";
import { PageHero } from "@/components/shared";

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
    <PageHero
      kicker="FACULTY"
      title={title}
      subtitle={subtitle}
      bgImage={bgImage}
      backLink={{ label: "All Faculties", href: "/programs" }}
      badges={
        <div className="flex flex-wrap items-center gap-2.5">
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
      }
    />
  );
}
