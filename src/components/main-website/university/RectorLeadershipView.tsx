"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { PageHero, SectionHeading, Subtitle } from "@/components/shared";
import {
  rector,
  proRectors,
  deans,
  administration,
} from "@/data/rectorLeadership";

export default function RectorLeadershipView() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <PageHero
        kicker="ABOUT THE UNIVERSITY · LEADERSHIP"
        title={
          <>
            <span className="block text-white">RECTOR &amp;</span>
            <span className="block text-[#D5A754]">LEADERSHIP.</span>
          </>
        }
        description="Meet the academic and administrative leaders who guide Alfa BK University - shaping strategy, upholding quality, and opening doors to opportunity for every student."
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80"
      />

      {/* 2. UNIVERSITY LEADERSHIP (RECTOR PROFILE) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                RECTOR
              </span>
            </div>
            <SectionHeading className="uppercase text-[#0B1E36]">
              UNIVERSITY LEADERSHIP
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-100">
                <img
                  src={rector.photo}
                  alt={rector.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-block bg-[#FDF9F0] border border-[#EADBBD] text-[#B88728] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                {rector.badge}
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-[#0B1E36] tracking-tight uppercase">
                {rector.name}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#9E2A2B]">
                {rector.degree}
              </p>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {rector.bio}
              </p>

              <div className="mt-8 bg-[#FAF7F2] border border-[#EFE8DC] rounded-2xl p-6 max-w-lg space-y-3">
                <p className="text-[11px] font-bold tracking-widest text-[#B88728] uppercase">
                  RECTOR&apos;S OFFICE
                </p>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1E36] font-medium">
                  <Mail className="w-4 h-4 text-[#B88728] shrink-0" />
                  <a
                    href={`mailto:${rector.office.email}`}
                    className="hover:underline font-semibold"
                  >
                    {rector.office.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1E36] font-medium">
                  <Phone className="w-4 h-4 text-[#B88728] shrink-0" />
                  <a href={`tel:${rector.office.phone}`} className="hover:underline font-semibold">
                    {rector.office.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE ACADEMIC TEAM (PRO-RECTORS) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                PRO-RECTORS
              </span>
            </div>
            <SectionHeading className="uppercase text-[#0B1E36]">
              EXECUTIVE ACADEMIC TEAM
            </SectionHeading>
            <Subtitle className="mt-3 text-slate-600 max-w-2xl">
              Three Pro-Rectors lead the day-to-day academic, research and
              international operations of the university.
            </Subtitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proRectors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#B88728] uppercase block mb-1">
                      {item.role}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1E36] tracking-tight uppercase">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FACULTY DEANS */}
      <section className="py-20 lg:py-24 bg-[#0C2442] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                DEANS
              </span>
            </div>
            <SectionHeading className="uppercase text-white">
              FACULTY DEANS
            </SectionHeading>
            <Subtitle className="mt-3 text-slate-300 max-w-2xl">
              Each faculty is led by a dean responsible for academic programmes,
              faculty hiring and student outcomes.
            </Subtitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deans.map((d, idx) => (
              <div
                key={idx}
                className="bg-[#14335C] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mb-4">
                    {d.initials}
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-normal">
                    {d.faculty}
                  </p>
                </div>

                <a
                  href={`mailto:${d.email}`}
                  className="mt-4 text-[11px] text-slate-400 hover:text-white transition-colors block truncate"
                >
                  {d.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SENIOR ADMINISTRATION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                ADMINISTRATION
              </span>
            </div>
            <SectionHeading className="uppercase text-[#0B1E36]">
              SENIOR ADMINISTRATION
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {administration.map((adm, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#B88728] uppercase block mb-1">
                    {adm.role}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1E36] tracking-tight">
                    {adm.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  {adm.isEmail ? (
                    <a
                      href={`mailto:${adm.contact}`}
                      className="text-xs text-slate-500 hover:text-[#0B1E36] transition-colors"
                    >
                      {adm.contact}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      {adm.contact}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MISSION BANNER */}
      <section className="py-20 lg:py-24 bg-[#9E2A2B] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-white/70" />
                <span className="text-xs font-bold tracking-widest text-white/90 uppercase">
                  OUR MISSION
                </span>
              </div>

              <SectionHeading className="uppercase text-white">
                EDUCATION THAT<br />
                TRANSFORMS LIVES.
              </SectionHeading>

              <Subtitle className="mt-5 text-white/90 max-w-xl">
                Under the leadership of our Rector and faculty, Alfa BK University is
                committed to delivering world-class education, research, and creative
                practice - empowering students to become innovative leaders,
                entrepreneurs and responsible global citizens.
              </Subtitle>

              <div className="mt-8">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center border border-white/40 hover:bg-white hover:text-[#9E2A2B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition"
                >
                  EXPLORE OUR PROGRAMMES
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-black/20">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Alfa BK University Grand Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. YOUR FUTURE STARTS HERE (CTA BANNER) */}
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
            — UVEK PRVI - ALWAYS FIRST —
          </p>

          <SectionHeading className="uppercase text-white">
            YOUR FUTURE STARTS HERE.
          </SectionHeading>

          <Subtitle className="mt-4 text-slate-300 max-w-xl">
            Find a programme, speak to admissions or explore how our leadership team
            can help you take the next step.
          </Subtitle>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition"
            >
              FIND A PROGRAMME
            </Link>
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center bg-[#132A4A]/90 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-white/20 shadow-md transition"
            >
              CONTACT ADMISSIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
