"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareerIndustryPage() {
  const [activeOutcomeTab, setActiveOutcomeTab] = useState<
    "economics" | "it" | "arts"
  >("economics");

  const outcomesData = {
    economics: {
      kicker: "ECONOMICS · EXAMPLE PATHS",
      title: "FROM ANALYSIS TO DECISION-MAKING",
      subtitle:
        "Illustrative directions only. Outcomes vary by programme, experience and employer requirements.",
      paths: [
        {
          num: "01",
          title: "Business and financial analysis",
        },
        {
          num: "02",
          title: "Operations and project coordination",
        },
        {
          num: "03",
          title: "Entrepreneurship and consulting",
        },
        {
          num: "04",
          title: "Public, nonprofit and research support",
        },
      ],
    },
    it: {
      kicker: "INFORMATION TECHNOLOGY · EXAMPLE PATHS",
      title: "FROM CODE TO DIGITAL PRODUCTS",
      subtitle:
        "Illustrative directions only. Outcomes vary by programme, experience and employer requirements.",
      paths: [
        {
          num: "01",
          title: "Software development and engineering",
        },
        {
          num: "02",
          title: "Data analytics and systems architecture",
        },
        {
          num: "03",
          title: "Cybersecurity and network administration",
        },
        {
          num: "04",
          title: "Product management and technical consulting",
        },
      ],
    },
    arts: {
      kicker: "ARTS & MEDIA · EXAMPLE PATHS",
      title: "FROM CREATIVITY TO PRODUCTION",
      subtitle:
        "Illustrative directions only. Outcomes vary by programme, experience and employer requirements.",
      paths: [
        {
          num: "01",
          title: "Digital media and creative direction",
        },
        {
          num: "02",
          title: "Visual design, branding and animation",
        },
        {
          num: "03",
          title: "Cultural curation and arts administration",
        },
        {
          num: "04",
          title: "Freelance production and studio practice",
        },
      ],
    },
  };

  const currentOutcome = outcomesData[activeOutcomeTab];

  const careerServices = [
    {
      num: "01",
      title: "Career direction & goal setting",
    },
    {
      num: "02",
      title: "CV, portfolio & interview preparation",
    },
    {
      num: "03",
      title: "Internship and opportunity navigation",
    },
    {
      num: "04",
      title: "Employer introductions & career events",
    },
    {
      num: "05",
      title: "Mentorship and alumni connections",
    },
    {
      num: "06",
      title: "Entrepreneurship and project guidance",
    },
  ];

  const employerConnections = [
    {
      num: "01",
      title: "Internships",
      theme: "white",
    },
    {
      num: "02",
      title: "Employment",
      theme: "white",
    },
    {
      num: "03",
      title: "Mentorship",
      theme: "red", // Solid red/burgundy card
    },
    {
      num: "04",
      title: "Guest lectures",
      theme: "white",
    },
    {
      num: "05",
      title: "Live projects",
      theme: "navy", // Solid navy card
    },
    {
      num: "06",
      title: "Scholarships",
      theme: "white",
    },
  ];

  const alumniProfiles = [
    {
      photo: "/d8cfd35298abf018885901538bce6a11c882ea4e.jpg",
      studied: "Economics",
      role: "Business operations",
      path: "Coursework + student project + internship + first role",
    },
    {
      photo: "/006cc1cfa442fbac675b6f6549e2b7458668d501.jpg",
      studied: "Information Technology",
      role: "Product development",
      path: "Lab practice + mentor feedback + portfolio + junior team",
    },
    {
      photo: "/d51b39cf482c946028913aa1dcd650b60234b40e.jpg",
      studied: "Arts",
      role: "Creative production",
      path: "Studio brief + public showcase + collaboration + independent practice",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-slate-900 min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative min-h-[500px] lg:min-h-[540px] flex items-center bg-[#0B1E36] text-white overflow-hidden">
        {/* Background photo: Students discussing at meeting table */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/24d20d9426b01552e1f0e76c4f41a02bda9d7aae.jpg')",
          }}
        />
        {/* Lighter Navy gradient overlays */}
        <div className="absolute inset-0 bg-[#0B1E36]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/85 via-[#0B1E36]/50 to-[#0B1E36]/20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Kicker */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754] mb-4">
              CAREERS & INDUSTRY · YOUR NEXT CHAPTER
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight leading-[1.1] text-white">
              TURN WHAT YOU LEARN
              <br />
              INTO WHAT YOU DO.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Explore possible directions, build practical experience and meet the people
              who can help you move from education to opportunity.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#possible-outcomes"
                className="inline-flex items-center justify-center bg-[#C69A4C] hover:bg-[#b08539] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg shadow-amber-900/20 transition cursor-pointer"
              >
                EXPLORE CAREER PATHS
              </a>
              <Link
                href="/university/contact"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white/10 transition cursor-pointer"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. EXPLORE POSSIBLE OUTCOMES: WHAT CAN I DO WITH THIS EDUCATION? */}
      {/* ========================================================= */}
      <section id="possible-outcomes" className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
            EXPLORE POSSIBLE OUTCOMES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B1E36] tracking-tight uppercase leading-tight mt-2">
            WHAT CAN I DO WITH THIS EDUCATION?
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <button
              onClick={() => setActiveOutcomeTab("economics")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeOutcomeTab === "economics"
                  ? "bg-[#0C213B] text-white shadow-sm"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              Economics
            </button>
            <button
              onClick={() => setActiveOutcomeTab("it")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeOutcomeTab === "it"
                  ? "bg-[#0C213B] text-white shadow-sm"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              Information Technology
            </button>
            <button
              onClick={() => setActiveOutcomeTab("arts")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeOutcomeTab === "arts"
                  ? "bg-[#0C213B] text-white shadow-sm"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              Arts
            </button>
          </div>

          {/* Paths Card Box */}
          <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
              {currentOutcome.kicker}
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight uppercase mt-1">
              {currentOutcome.title}
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              {currentOutcome.subtitle}
            </p>

            {/* List of 4 paths */}
            <div className="mt-8 divide-y divide-slate-100">
              {currentOutcome.paths.map((p, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {p.num}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#0B1E36] mt-0.5">
                    {p.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ALFA BK CAREER OFFICE: FROM EDUCATION TO OPPORTUNITY */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
            ALFA BK CAREER OFFICE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight mt-2">
            FROM EDUCATION TO OPPORTUNITY.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            A practical point of contact for students and alumni preparing for work,
            further study or a new direction. Services are tailored to your next decision.
          </p>

          <Link
            href="/university/contact"
            className="inline-flex items-center justify-center bg-[#C69A4C] hover:bg-[#b08539] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg shadow-amber-900/20 transition cursor-pointer mt-6"
          >
            BOOK A CAREER CONSULTATION
          </Link>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {careerServices.map((svc) => (
              <div
                key={svc.num}
                className="rounded-2xl border border-white/10 bg-[#16355C]/40 p-6 backdrop-blur-xs hover:border-amber-400/40 hover:bg-[#16355C]/55 transition"
              >
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  {svc.num}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-3">
                  {svc.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. INDUSTRY CONNECTION: MEET YOUR FUTURE EMPLOYERS */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
            INDUSTRY CONNECTION
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B1E36] tracking-tight uppercase leading-tight mt-2">
            MEET YOUR FUTURE EMPLOYERS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Not a logo wall: a working relationship between education and industry, built
            around useful encounters and real briefs. Participating organisations and
            opportunities remain provisional until confirmed.
          </p>

          {/* 6 Formats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {employerConnections.map((item) => {
              const isRed = item.theme === "red";
              const isNavy = item.theme === "navy";

              return (
                <div
                  key={item.num}
                  className={`rounded-2xl p-6 flex flex-col justify-between min-h-[140px] shadow-xs transition duration-200 hover:-translate-y-0.5 ${
                    isRed
                      ? "bg-[#A2302F] text-white"
                      : isNavy
                      ? "bg-[#0C213B] text-white"
                      : "bg-white border border-slate-200/90 text-slate-900"
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-semibold ${
                      isRed || isNavy ? "text-white/60" : "text-[#B91C1C]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <h4 className="text-sm font-bold mt-6">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. HANDS-ON LEARNING: REAL EXPERIENCE. BEFORE YOU GRADUATE. (Crimson #A2302F) */}
      {/* ========================================================= */}
      <section className="bg-[#A2302F] py-16 lg:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lecture Hall Image */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] bg-slate-900/20">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Students interactive lecture in university hall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Link */}
            <div className="lg:col-span-6">
              <div className="h-[2px] w-8 bg-[#FCD34D] mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#FCD34D]">
                HANDS-ON LEARNING
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase tracking-tight leading-[1.1] text-white mt-2">
                REAL EXPERIENCE.
                <br />
                BEFORE YOU
                <br />
                GRADUATE.
              </h2>
              <p className="mt-5 text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
                Students work on actual events, club operations, and sport marketing
                campaigns. Supervised internships, studio briefs, and collaborative industry
                projects connect theory to the profession from day one. Availability depends
                on faculty and confirmed partners.
              </p>

              <div className="mt-8">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white/10 transition cursor-pointer"
                >
                  EXPLORE FACULTIES & PROGRAMS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. ALUMNI STORIES: WHERE ARE THEY NOW? */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 bg-[#0C213B] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
            ALUMNI STORIES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight mt-2">
            WHERE ARE THEY NOW?
          </h2>

          {/* 3 Alumni Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {alumniProfiles.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFDF8] p-5 text-slate-900 shadow-lg flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                    <img
                      src={p.photo}
                      alt={p.role}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#992626] mt-4 mb-2">
                    ILLUSTRATIVE ALUMNI PROFILE
                  </p>

                  <div className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <p>
                      What I studied •{" "}
                      <strong className="text-slate-900 font-bold">
                        {p.studied}
                      </strong>
                    </p>
                    <p>
                      What I do today •{" "}
                      <strong className="text-slate-900 font-bold">
                        {p.role}
                      </strong>
                    </p>
                    <p className="text-[11px] text-slate-500 pt-1">
                      How I got there • {p.path}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Footer Link Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-9">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition"
            >
              BROWSE FACULTIES
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition"
            >
              EXPLORE PROGRAMS
            </Link>
            <Link
              href="/university/alumni"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition"
            >
              MEET ALUMNI
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CTA BANNER: YOUR FUTURE STARTS HERE. */}
      {/* ========================================================= */}
      <section className="relative min-h-[460px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#113565]">
        {/* Background Campus building */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/d09b8bf4e6edfa81783a8c38e81ad142f70b718f.jpg')",
          }}
        />
        {/* Lighter Atmospheric Overlays */}
        <div className="absolute inset-0 bg-[#113565]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#113565]/70 via-[#113565]/30 to-[#113565]/50" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
            UVEK PRVI - ALWAYS FIRST
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
            YOUR FUTURE STARTS HERE.
          </h2>

          <p className="mt-5 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Find a programme, talk to admissions or plan your first career conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-[#C69A4C] hover:bg-[#b08539] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg shadow-amber-900/20 transition cursor-pointer"
            >
              FIND A PROGRAM
            </Link>
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center bg-[#16355C]/90 hover:bg-[#1d4577] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-white/20 shadow-lg transition cursor-pointer"
            >
              CONTACT ADMISSIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
