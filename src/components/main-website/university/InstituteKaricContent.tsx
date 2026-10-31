"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Film,
  Users,
  Award,
  Globe,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Cpu,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { PageHero, TitleSubtitle, SectionHeading, Subtitle } from "@/components/shared";
import {
  hero,
  stats,
  about,
  pillars,
  researchProjects,
  publications,
  events,
  gallery,
  cta,
} from "@/data/instituteKaricContent";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Film,
  Users,
  Award,
  Globe,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Cpu,
  Scale,
  ShieldCheck,
};

export default function InstituteKaricContent() {
  const [content, setContent] = useState({
    hero,
    stats,
    about,
    pillars,
    researchProjects,
    publications,
    events,
    gallery,
    cta,
  });

  useEffect(() => {
    // Dynamic data binding lifecycle
    setContent({
      hero,
      stats,
      about,
      pillars,
      researchProjects,
      publications,
      events,
      gallery,
      cta,
    });
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO BANNER */}
      <PageHero
        kicker={content.hero.kicker}
        title={
          <>
            {content.hero.titlePrefix} <br />
            <span className="text-[#D5A754]">{content.hero.titleHighlight}</span>
          </>
        }
        description={content.hero.description}
        bgImage={content.hero.bgImage}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={content.hero.ctaExplore.href}
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
            >
              {content.hero.ctaExplore.text}
            </a>
            <a
              href={content.hero.ctaResearch.href}
              className="inline-flex items-center justify-center bg-[#132A4A]/80 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded border border-white/20 shadow-sm transition"
            >
              {content.hero.ctaResearch.text}
            </a>
          </div>
        }
        stats={content.stats}
      />

      {/* =========================================================================
          2. ABOUT THE INSTITUTE ("WHERE KNOWLEDGE MEETS LEGACY")
          ========================================================================= */}
      <section id="about" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <TitleSubtitle
                kicker={content.about.tag}
                withGoldLine
                uppercase
                title={content.about.title}
                maxWidth="none"
              />
              {content.about.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`${
                    idx === 0 ? "mt-5" : "mt-4"
                  } text-sm sm:text-base leading-relaxed text-slate-700 font-normal`}
                >
                  {para}
                </p>
              ))}

              {/* Mission Box */}
              <div className="mt-8 rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1E36]">
                    {content.about.mission.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {content.about.mission.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image & Stat Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 h-[340px] sm:h-[380px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${content.about.image}')`,
                  }}
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#0B203D]/90 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase border border-white/20">
                  {content.about.imageBadge}
                </span>
              </div>

              {/* 3 Navy Stat Cards */}
              <div className="grid grid-cols-3 gap-3">
                {content.about.quickStats.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#0B2545] p-4 text-center text-white border border-white/10"
                  >
                    <p className="text-xl sm:text-2xl font-black text-[#D5A754]">
                      {item.value}
                    </p>
                    <p className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-0.5">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AREAS OF ACTIVITY (Deep Navy #113565)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <TitleSubtitle
            align="center"
            kicker="WHAT WE DO"
            withGoldLine
            theme="dark"
            uppercase
            title="AREAS OF ACTIVITY"
            subtitle="Six pillars of the Institute's engagement"
            className="mb-14"
          />

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.pillars.map((p) => {
              const Icon = iconMap[p.icon] || BookOpen;
              return (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-center flex flex-col items-center justify-between hover:bg-white/10 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D5A754] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-300 font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ACTIVE RESEARCH PROJECTS
          ========================================================================= */}
      <section id="research" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <TitleSubtitle
            kicker="RESEARCH"
            withGoldLine
            uppercase
            title="ACTIVE RESEARCH PROJECTS"
            subtitle="The Institute hosts six active research groups. Full project details, team members, and findings will be published upon completion."
            className="mb-14"
          />

          {/* 6 Research Cards Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.researchProjects.map((proj) => {
              const Icon = iconMap[proj.icon] || Briefcase;
              return (
                <div
                  key={proj.title}
                  className="rounded-2xl bg-white border border-slate-200/80 p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1E36] tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold tracking-wider text-[#A2302F] uppercase">
                      RESEARCH IN PROGRESS · DETAILS PENDING
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PUBLICATIONS & JOURNAL (White Background)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <TitleSubtitle
              kicker="ACADEMIC OUTPUT"
              withGoldLine
              uppercase
              title="PUBLICATIONS & JOURNAL"
              subtitle="The Alfa BK Academic Journal and conference proceedings. Current volume in preparation."
            />
            <Link
              href="/news"
              className="inline-flex items-center justify-center bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              Browse Archive
            </Link>
          </div>

          {/* 3 Publication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.publications.map((pub) => (
              <div
                key={pub.title}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F5] border border-slate-200/80 shadow-xs hover:shadow-md transition"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${pub.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#D5A754] uppercase tracking-wider block mb-2">
                      {pub.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1E36]">
                      {pub.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {pub.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <span className="text-xs font-semibold text-[#D5A754]">
                      {pub.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EVENTS & CONFERENCES
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0] border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <TitleSubtitle
              kicker="UPCOMING"
              withGoldLine
              uppercase
              title="EVENTS & CONFERENCES"
              subtitle="Lectures, symposia, award ceremonies and cultural evenings. Programme announced each semester."
            />
            <Link
              href="/news-events"
              className="inline-flex items-center justify-center bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              Full Calendar
            </Link>
          </div>

          {/* 3 Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.events.map((ev) => (
              <div
                key={ev.title}
                className="flex flex-col rounded-2xl bg-white border border-slate-200/80 p-7 shadow-xs hover:shadow-md justify-between transition"
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs mb-4 ${ev.badgeBg}`}
                  >
                    {ev.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1E36] tracking-tight">
                    {ev.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                    {ev.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {ev.footerInfo}
                  </span>
                  <button
                    type="button"
                    className="text-xs font-bold text-[#113565] hover:text-[#D5A754] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {ev.buttonText} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. INSTITUTE IN PICTURES (Deep Navy #113565)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <TitleSubtitle
            align="center"
            kicker="CAMPUS LIFE"
            withGoldLine
            theme="dark"
            uppercase
            title="INSTITUTE IN PICTURES"
            subtitle="Photographs from Institute events, lectures, and campus life. Gallery updated each semester."
            className="mb-14"
          />

          {/* 3 Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.gallery.map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold text-white tracking-wider">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. COLLABORATE WITH THE INSTITUTE (CTA Banner)
          ========================================================================= */}
      <section className="relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0A1F3B]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0B1E36]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-[#0B1E36]/70" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
            {content.cta.motto}
          </p>

          <SectionHeading className="uppercase text-white">
            {content.cta.titlePrefix} <br />
            <span className="text-[#D5A754]">{content.cta.titleHighlight}</span>
          </SectionHeading>

          <Subtitle className="mt-4 text-slate-300 max-w-2xl">
            {content.cta.description}
          </Subtitle>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={content.cta.button1.href}
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition"
            >
              {content.cta.button1.text}
            </Link>
            <a
              href={content.cta.button2.href}
              className="inline-flex items-center justify-center bg-[#132A4A]/90 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-white/20 shadow-md transition"
            >
              {content.cta.button2.text}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
