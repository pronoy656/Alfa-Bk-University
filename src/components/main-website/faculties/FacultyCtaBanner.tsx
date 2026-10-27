import React from "react";
import Link from "next/link";

interface FacultyCtaBannerProps {
  facultyName?: string;
  facultySlug?: string;
  headline?: string;
  subtitle?: string;
}

export default function FacultyCtaBanner({
  facultyName = "FINANCE",
  facultySlug,
  headline,
  subtitle,
}: FacultyCtaBannerProps) {
  const isLanguages =
    facultySlug === "foreign-languages" ||
    facultyName?.toLowerCase().includes("language");

  const resolvedHeadline =
    headline ||
    (isLanguages
      ? "YOUR LANGUAGE. YOUR FUTURE. STARTS HERE."
      : facultyName?.toLowerCase().includes("finance")
      ? "YOUR FUTURE IN FINANCE STARTS HERE."
      : `YOUR FUTURE IN ${facultyName.replace("Faculty of ", "").toUpperCase()} STARTS HERE.`);

  const resolvedSubtitle =
    subtitle ||
    (isLanguages
      ? "Explore our programmes, speak to the faculty, or begin your application today."
      : "Find a programme, talk to admissions or plan your first career conversation with the Alfa BK Career Office.");

  const resolvedBgImage = isLanguages
    ? "/d09b8bf4e6edfa81783a8c38e81ad142f70b718f.jpg"
    : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className="relative min-h-[460px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#113565]">
      {/* Background Campus Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${resolvedBgImage}')`,
        }}
      />
      {/* Atmospheric Overlays - lighter and transparent */}
      <div className="absolute inset-0 bg-[#113565]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#113565]/70 via-[#113565]/30 to-[#113565]/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center max-w-4xl">
        {/* Motto Accent */}
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
          UVEK PRVI - ALWAYS FIRST
        </p>

        {/* Big Bold Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
          {resolvedHeadline}
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {resolvedSubtitle}
        </p>

        {/* 3 Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/apply-now"
            className="inline-flex items-center justify-center bg-[#C69A4C] hover:bg-[#b08539] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg shadow-amber-900/20 transition cursor-pointer"
          >
            APPLY NOW
          </Link>
          <Link
            href="/university/contact"
            className="inline-flex items-center justify-center bg-[#16355C]/90 hover:bg-[#1d4577] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-white/20 shadow-lg transition cursor-pointer"
          >
            CONTACT ADMISSIONS
          </Link>
          <Link
            href="/career-industry"
            className="inline-flex items-center justify-center bg-[#113565]/90 hover:bg-[#184682] text-[#D5A754] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-[#D5A754]/40 hover:border-[#D5A754] shadow-lg transition cursor-pointer"
          >
            CAREERS & INDUSTRY
          </Link>
        </div>
      </div>
    </section>
  );
}
