import React from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

interface ProfessorsBannerProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  href?: string;
}

export default function ProfessorsBanner({
  title = "Meet Our Professors & Teaching Staff",
  subtitle = "Get to know the experts who guide, mentor and inspire our students.",
  linkText = "VIEW FACULTY MEMBERS",
  href = "/professors",
}: ProfessorsBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#121E2F] via-[#1A283C] to-[#C49B4B] border-t border-b border-slate-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left Icon & Text */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-slate-200 shadow-inner">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-0.5 text-xs text-slate-300">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md transition hover:bg-slate-100"
            >
              <span>{linkText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
