import React from "react";
import { FacultyBadges } from "@/data";
import { PageHero } from "@/components/shared";
import { getFacultyTheme } from "./facultyTheme";

interface FacultyHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  badges: FacultyBadges;
  facultySlug?: string;
}

export default function FacultyHero({
  title,
  subtitle,
  bgImage,
  badges,
  facultySlug,
}: FacultyHeroProps) {
  const theme = getFacultyTheme(facultySlug);

  return (
    <PageHero
      kicker={
        <div className="inline-flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: theme.primaryColor }}
          />
          <span
            className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: theme.accentColor }}
          >
            FACULTY
          </span>
        </div>
      }
      title={title}
      subtitle={subtitle}
      bgImage={bgImage}
      style={{ backgroundColor: theme.baseBg }}
      overlayStyle={{ background: theme.gradientOverlay }}
      backLink={{ label: "All Faculties", href: "/programs" }}
      badges={
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className="rounded-full px-3.5 py-1 text-xs font-semibold text-white shadow-xs"
            style={{ backgroundColor: theme.primaryColor }}
          >
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
