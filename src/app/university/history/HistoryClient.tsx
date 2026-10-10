"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function HistoryClient() {
  const scrollToChapterOne = () => {
    const el = document.getElementById("chapter-one");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#D5A754]/30 selection:text-[#0B1E36]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION - COMPACT HALF-SCREEN HEIGHT              */}
      {/* ========================================================= */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex flex-col justify-center overflow-hidden bg-[#07172C] text-white py-12 sm:py-16 lg:py-20">
        {/* Background Image with Dark Navy Moody Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        {/* Navy Gradient layers for depth and focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07172C]/80 via-[#07172C]/90 to-[#07172C]" />

        {/* Center Hero Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          {/* Top Label: — ABOUT UNIVERSITY — */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-6 bg-[#C69234]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#D5A754] uppercase">
              ABOUT UNIVERSITY
            </span>
            <span className="h-[1px] w-6 bg-[#C69234]" />
          </div>

          {/* Main Title: our HISTORY. */}
          <h1 className="mt-4 flex flex-wrap items-baseline justify-center gap-2 sm:gap-3 text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            <span className="font-normal lowercase text-white tracking-normal font-serif italic sm:not-italic sm:font-bold">
              our
            </span>
            <span className="font-black uppercase tracking-wider text-[#D5A754]">
              HISTORY<span className="text-[#C69234]">.</span>
            </span>
          </h1>

          {/* Subtitle row: TRADITION • TRANSFORMATION • FUTURE */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5 text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#D5A754] uppercase">
            <span>TRADITION</span>
            <span className="text-[#D5A754]/60">&bull;</span>
            <span>TRANSFORMATION</span>
            <span className="text-[#D5A754]/60">&bull;</span>
            <span>FUTURE</span>
          </div>

          {/* Lead Paragraph */}
          <p className="mt-4 mx-auto max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300 font-light">
            From a bold founding vision in 1993 to one of Serbia&apos;s leading private universities &mdash; three
            decades of academic excellence, growth, and innovation.
          </p>

          {/* Scroll indicator */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={scrollToChapterOne}
              className="group inline-flex flex-col items-center gap-1 cursor-pointer transition hover:opacity-80"
              aria-label="Scroll to explore"
            >
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-[#D5A754]/80 uppercase">
                SCROLL TO EXPLORE
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-[#D5A754] animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CHAPTER I — TRADITION (1993 - 2000)                    */}
      {/* ========================================================= */}
      <div id="chapter-one">
        {/* Chapter Ribbon */}
        <div className="bg-[#0D2444] text-white py-3.5 sm:py-4 px-4 sm:px-8 border-y border-[#0B1E36]">
          <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 font-medium">
              <span className="text-slate-300 text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                CHAPTER I
              </span>
              <span className="h-0.5 w-6 bg-[#D5A754]" />
              <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                Tradition
              </span>
            </div>
            <div className="text-slate-400 font-semibold tracking-wider text-xs sm:text-sm">
              1993 - 2000
            </div>
          </div>
        </div>

        {/* Milestone 1: 1993 — Foundation of Braća Karić University */}
        <section className="bg-white">
          {/* Full-width / wide image with 1993 gold badge anchored */}
          <div className="relative w-full overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
                  alt="Braća Karić University founding campus"
                  className="w-full h-[320px] sm:h-[480px] lg:h-[560px] object-cover object-center"
                />
                {/* Gold 1993 Badge on bottom-left */}
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-[#D5A754] text-[#0B1E36] font-black text-2xl sm:text-3xl px-6 py-3 rounded-md shadow-2xl tracking-tight">
                  1993
                </div>
              </div>
            </div>
          </div>

          {/* 1993 Content: 2-column layout with quote box */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Category + Title + Subtitle */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    FOUNDING
                  </span>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Foundation of Braća Karić University
                </h2>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Belgrade, 1993
                </p>
              </div>

              {/* Right Column: Narrative + Dark Navy Quote Box */}
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Alfa BK University &mdash; officially known as Karic Brothers University &mdash; was founded in
                  Belgrade by the Karic family as one of the very first private universities in the Federal Republic
                  of Yugoslavia. Its founding mission was to offer high-quality, practically oriented higher education
                  as an alternative to the state university system.
                </p>

                {/* Dark Navy Quote Box */}
                <div className="mt-6 rounded-lg bg-[#0E274A] p-5 sm:p-6 text-white shadow-md border-l-4 border-[#D5A754]">
                  <p className="italic text-sm sm:text-base font-light leading-relaxed text-slate-100">
                    &ldquo;A new chapter in Serbian higher education &mdash; the courage to build something lasting.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone 2: 1995 — First Graduating Class (50/50 Split) */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left 50%: Graduation photo */}
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                alt="First Graduating Class"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>

            {/* Right 50%: Dark Navy Block */}
            <div className="bg-[#0F2D54] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-300/35 tracking-tight font-sans">
                1995
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-[2px] w-4 bg-[#D5A754]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
                  MILESTONE
                </span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                First Graduating Class
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                The university welcomed its first class of graduates, primarily from the Faculty of Economics.
                These early students established Alfa BK&apos;s reputation for producing practice-ready graduates who
                quickly integrated into Serbia&apos;s emerging private sector.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone 3: 2000 — Expansion of Faculties */}
        <section className="bg-white py-12 sm:py-20 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Category + Large Watermark 2000 + Title */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    GROWTH
                  </span>
                </div>

                <div className="mt-2 text-6xl sm:text-7xl lg:text-8xl font-black text-slate-200/90 tracking-tighter select-none font-sans leading-none">
                  2000
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Expansion of Faculties
                </h2>
              </div>

              {/* Right Column: Narrative + Wide Rounded Photo */}
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  The turn of the millennium marked a major expansion. New faculties were established across business,
                  languages, and sports management &mdash; transforming the institution from a single-faculty university
                  into a full multidisciplinary academic body. International cooperation agreements were signed with
                  partner universities across Europe.
                </p>

                {/* Wide rounded image */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                    alt="Students collaborating at university"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* 3. CHAPTER II — TRANSFORMATION (2006 - 2018)              */}
      {/* ========================================================= */}
      <div>
        {/* Chapter Ribbon - Terracotta / Red matching Figma */}
        <div className="bg-[#9E2A2B] text-white py-3.5 sm:py-4 px-4 sm:px-8 border-y border-[#7E1F20]">
          <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 font-medium">
              <span className="text-rose-200 text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                CHAPTER II
              </span>
              <span className="h-0.5 w-6 bg-white" />
              <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                Transformation
              </span>
            </div>
            <div className="text-rose-200 font-semibold tracking-wider text-xs sm:text-sm">
              2006 - 2018
            </div>
          </div>
        </div>

        {/* Milestone 4: 2006 — Bologna Process Integration */}
        <section className="bg-white">
          <div className="relative w-full overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
                  alt="Bologna Process integration at Alfa BK"
                  className="w-full h-[320px] sm:h-[460px] lg:h-[520px] object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-[#D5A754] text-[#0B1E36] font-black text-2xl sm:text-3xl px-6 py-3 rounded-md shadow-2xl tracking-tight">
                  2006
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    REFORM
                  </span>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Bologna Process Integration
                </h2>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  European Standards, 2006
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Alfa BK fully adopted the Bologna Process &mdash; restructuring all programs into the European
                  three-cycle system: Basic Higher Education (BSc, 3 years, 180 ECTS), Master Programs (2 years, 120 ECTS),
                  and Doctoral Studies (3 years, 180 ECTS). This aligned Alfa BK degrees with European standards and
                  opened new pathways for student mobility.
                </p>

                <div className="mt-6 rounded-lg bg-[#0E274A] p-5 sm:p-6 text-white shadow-md border-l-4 border-[#D5A754]">
                  <p className="italic text-sm sm:text-base font-light leading-relaxed text-slate-100">
                    &ldquo;Aligning with European academic excellence &mdash; opening international pathways for Serbian students.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone 5: 2010 — National Accreditation (50/50 Split) */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80"
                alt="National Accreditation"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>

            <div className="bg-[#0F2D54] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-300/35 tracking-tight font-sans">
                2010
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-[2px] w-4 bg-[#D5A754]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
                  ACCREDITATION
                </span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                National Accreditation
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                Following the adoption of the Law on Higher Education in Serbia, Alfa BK completed the national
                accreditation process for all its faculties and programs under the Commission for Accreditation and
                Quality Assurance (KAPK). This milestone cemented the university&apos;s legal standing and academic
                credibility.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone 6: 2014 & 2018 — International Erasmus+ and FIT */}
        <section className="bg-white py-12 sm:py-20 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 2014 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-slate-100">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    MOBILITY
                  </span>
                </div>
                <div className="mt-2 text-6xl sm:text-7xl lg:text-8xl font-black text-slate-200/90 tracking-tighter select-none font-sans leading-none">
                  2014
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Erasmus+ Partnership
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Alfa BK was formally admitted to the Erasmus+ program, enabling student and staff exchanges with
                  partner universities across the European Union. Within two years, over 100 students had participated
                  in exchange semesters abroad, and the university hosted international students from 12 countries.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
                    alt="Erasmus+ Student mobility"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 2018: Faculty of Information Technologies */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    INNOVATION
                  </span>
                </div>
                <div className="mt-2 text-6xl sm:text-7xl lg:text-8xl font-black text-slate-200/90 tracking-tighter select-none font-sans leading-none">
                  2018
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Faculty of Information Technologies
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  In response to growing demand for technology professionals in Serbia and the region, the Faculty
                  of Information Technologies (FIT) was officially established and accredited. It quickly became one
                  of the most popular faculties, attracting students interested in software engineering, networks,
                  and computer engineering.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                    alt="Faculty of Information Technologies Lab"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* 4. CHAPTER III — FUTURE & INNOVATION (2020 - PRESENT)     */}
      {/* ========================================================= */}
      <div>
        {/* Chapter Ribbon - Deep Teal/Navy */}
        <div className="bg-[#0B2548] text-white py-3.5 sm:py-4 px-4 sm:px-8 border-y border-[#07172C]">
          <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 font-medium">
              <span className="text-blue-200 text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                CHAPTER III
              </span>
              <span className="h-0.5 w-6 bg-[#D5A754]" />
              <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                Future &amp; Innovation
              </span>
            </div>
            <div className="text-slate-300 font-semibold tracking-wider text-xs sm:text-sm">
              2020 - Present
            </div>
          </div>
        </div>

        {/* Milestone 8: 2020 — Digital Transformation */}
        <section className="bg-white">
          <div className="relative w-full overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80"
                  alt="Digital Transformation and E-Learning"
                  className="w-full h-[320px] sm:h-[460px] lg:h-[520px] object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-[#D5A754] text-[#0B1E36] font-black text-2xl sm:text-3xl px-6 py-3 rounded-md shadow-2xl tracking-tight">
                  2020
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-4 bg-[#B83A3A]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#B83A3A] uppercase">
                    TECHNOLOGY
                  </span>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E36] leading-tight tracking-tight">
                  Digital Transformation
                </h2>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Hybrid Learning, 2020
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  In response to the global pandemic, Alfa BK rapidly deployed its modern E-Learning platform,
                  enabling uninterrupted online lectures, digital assignments, and remote examinations. This investment
                  in digital infrastructure accelerated the university&apos;s long-term digital strategy and remains in
                  active use as a hybrid learning model.
                </p>

                <div className="mt-6 rounded-lg bg-[#0E274A] p-5 sm:p-6 text-white shadow-md border-l-4 border-[#D5A754]">
                  <p className="italic text-sm sm:text-base font-light leading-relaxed text-slate-100">
                    &ldquo;Deploying technology to empower students anywhere, anytime &mdash; learning without interruption.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone: TODAY • 2026 — 30+ Years of Excellence (Full-width Campus Banner with Stats) */}
        <section className="relative overflow-hidden text-white py-20 sm:py-28 lg:py-32">
          {/* Background Image: Stately Brick University Campus with Trees */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=80')",
            }}
          />
          {/* Deep Navy/Blue Atmospheric Overlay tint matching screenshot */}
          <div className="absolute inset-0 bg-[#0A264A]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D]/95 via-[#0A264A]/85 to-[#0A264A]/70" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Tag: — TODAY • 2026 */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#C69234]" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#D5A754] uppercase">
                  TODAY &bull; 2026
                </span>
              </div>

              {/* Heading: 30+ Years of Excellence */}
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                30+ Years of Excellence
              </h2>

              {/* Description paragraph */}
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200/90 font-light max-w-2xl">
                Alfa BK University enters its fourth decade with 6 accredited faculties, 19 academic programs,
                2,450 enrolled students, 120 teaching staff, and graduates working in 74 countries. The
                university&apos;s continued focus on employability, research, and international cooperation keeps it
                at the forefront of Serbian higher education.
              </p>

              {/* 4 Stats in horizontal row with vertical dividers */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 max-w-2xl pt-2">
                {/* Stat 1: 6 Faculties */}
                <div className="sm:pr-8 sm:border-r border-white/20">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D5A754] tracking-tight">
                    6
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                    Faculties
                  </div>
                </div>

                {/* Stat 2: 19 Programs */}
                <div className="sm:px-8 sm:border-r border-white/20">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D5A754] tracking-tight">
                    19
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                    Programs
                  </div>
                </div>

                {/* Stat 3: 2,450 Students */}
                <div className="sm:px-8 sm:border-r border-white/20">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D5A754] tracking-tight">
                    2,450
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                    Students
                  </div>
                </div>

                {/* Stat 4: 74 Countries */}
                <div className="sm:pl-8">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D5A754] tracking-tight">
                    74
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* 5. CALL TO ACTION - EXACT BRAND FINALE                    */}
      {/* ========================================================= */}
      <section className="bg-[#07172C] text-white py-16 sm:py-24 border-t border-[#0D2444]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D5A754]/30 bg-[#D5A754]/10 px-4 py-1 text-xs font-semibold text-[#D5A754] uppercase tracking-widest">
            BECOME PART OF OUR STORY
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Join Three Decades of Academic Tradition
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Take the first step toward an internationally recognized degree, accredited curricula, and hands-on
            career preparation at Alfa BK University.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D5A754] px-7 py-3.5 text-sm font-bold text-[#0B1E36] shadow-lg transition duration-200 hover:bg-[#E5A83B] hover:scale-105"
            >
              <span>Apply for Enrolment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/faculties"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/10"
            >
              <span>Explore Faculties</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
