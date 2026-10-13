"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const stats = [
  { value: "60+", label: "PARTNER UNIVERSITIES" },
  { value: "40+", label: "COUNTRIES" },
  { value: "800+", label: "EXCHANGE STUDENTS / YEAR" },
  { value: "15+", label: "ACTIVE PROGRAMS" },
];

const mobilityPrograms = [
  {
    id: 0,
    badge: "ERASMUS+ EXCHANGE",
    badgeBg: "bg-[#C26B1E]",
    title: "STUDENT EXCHANGE SEMESTERS",
    description:
      "Spend one or two semesters at any of our 60+ Erasmus+ partner universities across Europe. Courses completed abroad are fully recognised toward your degree. Grants are available to eligible students to offset travel and living costs.",
    points: [
      "Course recognition",
      "Grant funding available",
      "1–2 semester stays",
    ],
    action: "APPLY FOR ERASMUS+",
    link: "#contact",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 1,
    badge: "STAFF MOBILITY",
    badgeBg: "bg-[#1E70A2]",
    title: "STAFF TEACHING & TRAINING",
    description:
      "Academic and administrative staff may apply for Erasmus+ teaching and training mobility — delivering guest lectures at partner universities or attending professional development programmes abroad.",
    points: [
      "Teaching mobility",
      "Training mobility",
      "Staff grants",
    ],
    action: "STAFF MOBILITY PROGRAM",
    link: "#contact",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    badge: "JOINT RESEARCH",
    badgeBg: "bg-[#6366F1]",
    title: "INTERNATIONAL RESEARCH PROJECTS",
    description:
      "Alfa BK participates in EU-funded and bilateral research collaborations in areas including AI, applied economics, mathematics and sports science. Research opportunities are subject to annual funding cycles.",
    points: [
      "Horizon Europe & Erasmus+",
      "Co-authored publications",
      "Laboratory exchanges",
    ],
    action: "RESEARCH COLLABORATIONS",
    link: "#contact",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    badge: "DUAL DEGREE",
    badgeBg: "bg-[#0D825E]",
    title: "DUAL DEGREE PATHWAYS",
    description:
      "Select partner universities offer pathways where students graduate with qualifications from both Alfa BK and the partner institution. Currently active with partner universities in Germany, France and Russia — subject to confirmation.",
    points: [
      "Two recognised diplomas",
      "Integrated curricula",
      "Career acceleration",
    ],
    action: "VIEW DUAL DEGREES",
    link: "#contact",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
];

const europeanPartners = [
  {
    flagCode: "de",
    name: "TU München",
    country: "Munich, Germany",
    disciplines: "Engineering · CS · Business",
    status: "Active Exchange",
  },
  {
    flagCode: "fr",
    name: "Sorbonne Université",
    country: "Paris, France",
    disciplines: "Humanities · Sciences · Law",
    status: "Active Exchange",
  },
  {
    flagCode: "it",
    name: "University of Bologna",
    country: "Bologna, Italy",
    disciplines: "Economics · Political Science",
    status: "Active Exchange",
  },
  {
    flagCode: "be",
    name: "KU Leuven",
    country: "Leuven, Belgium",
    disciplines: "Engineering · Life Sciences",
    status: "Active Exchange",
  },
  {
    flagCode: "se",
    name: "Uppsala University",
    country: "Uppsala, Sweden",
    disciplines: "All disciplines",
    status: "Active Exchange",
  },
  {
    flagCode: "pl",
    name: "University of Warsaw",
    country: "Warsaw, Poland",
    disciplines: "Economics · CS · Languages",
    status: "Active Exchange",
  },
  {
    flagCode: "cz",
    name: "Charles University",
    country: "Prague, Czech Republic",
    disciplines: "Law · Medicine · Humanities",
    status: "Active Exchange",
  },
  {
    flagCode: "at",
    name: "University of Vienna",
    country: "Vienna, Austria",
    disciplines: "Business · Psychology · Arts",
    status: "Active Exchange",
  },
];

const globalPartners = [
  {
    flagCode: "sg",
    name: "National University of Singapore",
    country: "Singapore",
    type: "Research partnership",
  },
  {
    flagCode: "ca",
    name: "University of Toronto",
    country: "Canada",
    type: "Academic cooperation",
  },
  {
    flagCode: "kr",
    name: "Seoul National University",
    country: "South Korea",
    type: "Student exchange",
  },
  {
    flagCode: "ru",
    name: "Lomonosov Moscow State University",
    country: "Russia",
    type: "Academic cooperation",
  },
  {
    flagCode: "cn",
    name: "Peking University",
    country: "China",
    type: "Research partnership",
  },
  {
    flagCode: "ae",
    name: "American University in Dubai",
    country: "UAE",
    type: "Student exchange",
  },
];

export default function InternationalCooperationContent() {
  // Track active program card. Default to Card 0 to match static reference image.
  // Hovering any card dynamically applies the blue card styling!
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* =========================================================================
          1. HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-[#0A1F3B] text-white">
        {/* Background photo of European street & university students */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Soft linear overlay keeping the photo visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172B]/90 via-[#0A1F3B]/75 to-[#0A1F3B]/45" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Tag */}
            <p className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase mb-4">
              — INTERNATIONAL COOPERATION · ALFA BK UNIVERSITY
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              THE WORLD IS <span className="text-[#D5A754]">YOUR CAMPUS.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl font-normal">
              Partnerships with 60+ universities across 40 countries — opening doors to
              exchange semesters, joint research, dual degrees and global careers. All figures
              are provisional and subject to verification.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
              >
                EXPLORE OPPORTUNITIES
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#132A4A]/80 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded border border-white/20 shadow-sm transition"
              >
                CONTACT INTERNATIONAL OFFICE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. METRICS BAR (Stats Bar)
          ========================================================================= */}
      <section className="bg-white border-b border-slate-200/80 py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className={`text-center sm:text-left ${
                  idx !== 0 ? "md:border-l md:border-slate-200/70 md:pl-8" : ""
                }`}
              >
                <p className="text-4xl sm:text-5xl font-black text-[#0B203D] tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PROGRAMS THAT TAKE YOU FURTHER (4 Big Cards with Blue Hover Effect)
          ========================================================================= */}
      <section id="programs" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                INTERNATIONAL MOBILITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              PROGRAMS THAT TAKE YOU FURTHER.
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              Whether you study abroad for a semester, complete a joint research project or
              earn a dual degree, our international programmes open horizons. Availability
              and funding are subject to annual confirmation.
            </p>
          </div>

          {/* 4 Cards: 2x2 Grid with Interactive Hover Transition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobilityPrograms.map((prog) => {
              const isActive = activeCard === prog.id;

              return (
                <div
                  key={prog.id}
                  onMouseEnter={() => setActiveCard(prog.id)}
                  className={`flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#113565] text-white shadow-xl border border-[#113565]"
                      : "bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:shadow-md"
                  }`}
                >
                  {/* Card Image Banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                        isActive ? "scale-105" : "hover:scale-105"
                      }`}
                      style={{
                        backgroundImage: `url('${prog.image}')`,
                      }}
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-gradient-to-t from-[#113565] via-transparent to-black/20"
                          : "bg-gradient-to-t from-black/40 via-transparent to-black/10"
                      }`}
                    />
                    <span
                      className={`absolute top-4 right-4 ${prog.badgeBg} text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded shadow`}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-black tracking-tight uppercase transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#0B1E36]"
                        }`}
                      >
                        {prog.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed font-normal transition-colors duration-300 ${
                          isActive ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        {prog.description}
                      </p>

                      {/* Numbered Benefits */}
                      <div className="mt-6 space-y-2 text-xs font-semibold">
                        {prog.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2.5">
                            <span
                              className={`text-sm font-bold transition-colors duration-300 ${
                                isActive ? "text-[#D5A754]" : "text-[#0B1E36]"
                              }`}
                            >
                              0{pIdx + 1}
                            </span>
                            <span
                              className={`transition-colors duration-300 ${
                                isActive ? "text-slate-100" : "text-slate-700"
                              }`}
                            >
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <div
                      className={`mt-8 pt-6 border-t transition-colors duration-300 ${
                        isActive ? "border-white/15" : "border-slate-100"
                      }`}
                    >
                      <a
                        href={prog.link}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? "text-[#D5A754] hover:text-[#e5bf76]"
                            : "text-[#0B1E36] hover:text-[#D5A754]"
                        }`}
                      >
                        {prog.action} <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EUROPEAN PARTNER UNIVERSITIES (White Background & Clean SVG Flags)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                ERASMUS+ NETWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              EUROPEAN PARTNER UNIVERSITIES.
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              Alfa BK is an active Erasmus+ member. Students may apply for exchange semesters at these
              partner institutions. All partnerships are subject to annual renewal and place availability.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {europeanPartners.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#FBFBFA] p-5 shadow-xs hover:border-[#D5A754] hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    {/* Real National Flag SVG from local public/flags */}
                    <img
                      src={`/flags/${item.flagCode}.svg`}
                      alt={item.country}
                      className="w-8 h-5.5 object-cover rounded shadow-2xs border border-slate-200"
                    />
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0B1E36] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.country}</p>
                  <p className="mt-3 text-xs text-slate-600 font-medium">{item.disciplines}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="mt-8 text-xs text-slate-400 italic">
            * Illustrative list of partner institutions. Availability, exchange places and grant amounts
            are confirmed annually and vary by faculty. Contact the International Office for current information.
          </p>
        </div>
      </section>

      {/* =========================================================================
          5. SPLIT 1: GLOBAL EXPERTISE BROUGHT TO YOU (Deep Navy #113565)
          ========================================================================= */}
      <section className="bg-[#113565] text-white overflow-hidden py-16 lg:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 h-[380px] sm:h-[460px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#113565]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  VISITING PROFESSORS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                GLOBAL EXPERTISE BROUGHT TO YOU.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Alfa BK regularly hosts visiting academics from partner institutions — bringing fresh
                perspectives into classrooms across all faculties. Visiting professorships are
                arranged through our International Office and are subject to availability each semester.
              </p>

              {/* Numbered Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 pb-3 border-b border-white/15">
                  <span className="text-lg font-black text-[#D5A754]">01</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Guest lectures and intensive workshops
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-3 border-b border-white/15">
                  <span className="text-lg font-black text-[#D5A754]">02</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Co-supervised thesis and research projects
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-lg font-black text-[#D5A754]">03</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Short-term teaching mobility via Erasmus+
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D5A754] hover:text-[#e4bd75] uppercase tracking-wider transition-colors"
                >
                  INVITE A VISITING PROFESSOR <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SPLIT 2: STUDY AT ALFA BK FROM ANYWHERE (Deep Navy #113565 matching image)
          ========================================================================= */}
      <section className="bg-[#113565] text-white overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  INTERNATIONAL STUDENTS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                STUDY AT ALFA BK FROM ANYWHERE.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                We welcome inbound students from partner universities as exchange visitors and
                full-degree applicants. English-taught programmes, student support services and
                cultural integration activities help international students thrive in Belgrade.
              </p>

              {/* Numbered Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 pb-3 border-b border-white/15">
                  <span className="text-lg font-black text-[#D5A754]">01</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Inbound Erasmus+ exchange semesters
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-3 border-b border-white/15">
                  <span className="text-lg font-black text-[#D5A754]">02</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Full-degree programmes open to international applicants
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-lg font-black text-[#D5A754]">03</span>
                  <p className="text-sm font-semibold text-slate-100">
                    Dedicated international student support services
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D5A754] hover:text-[#e4bd75] uppercase tracking-wider transition-colors"
                >
                  APPLY AS AN INTERNATIONAL STUDENT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 h-[380px] sm:h-[460px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#113565]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PARTNERS BEYOND EUROPE (Global Network & Clean SVG Flags)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0] border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                GLOBAL NETWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              PARTNERS BEYOND EUROPE.
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              Our cooperative network extends to leading institutions across Asia, the Americas and
              the Middle East. All partnerships are provisional and subject to verification.
            </p>
          </div>

          {/* 6 Cards Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {globalPartners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[#D5A754] hover:shadow-sm transition"
              >
                {/* Real National Flag SVG from local public/flags */}
                <img
                  src={`/flags/${p.flagCode}.svg`}
                  alt={p.country}
                  className="w-9 h-6 object-cover rounded shadow-2xs border border-slate-200 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm text-[#0B1E36] truncate">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.country}</p>
                  <p className="text-[11px] font-semibold text-[#1E70A2] mt-1">{p.type}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FROM INQUIRY TO OPPORTUNITY (International Office)
          ========================================================================= */}
      <section id="contact" className="bg-[#08172B] text-white py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Photos Strip at Top */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            <div className="h-44 sm:h-52 rounded-xl overflow-hidden relative shadow border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="h-44 sm:h-52 rounded-xl overflow-hidden relative shadow border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="h-44 sm:h-52 rounded-xl overflow-hidden relative shadow border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Section Heading */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                INTERNATIONAL OFFICE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              FROM INQUIRY TO OPPORTUNITY.
            </h2>
            <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
              Whether you are a student considering exchange, a staff member applying for teaching
              mobility, or an institution exploring a new partnership — our International Office team is
              your first point of contact.
            </p>
          </div>

          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#0F2642] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D5A754] mb-4">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  EMAIL
                </span>
                <a
                  href="mailto:international@alfabk.edu"
                  className="mt-1 block text-base font-bold text-white hover:text-[#D5A754] transition-colors"
                >
                  international@alfabk.edu
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-400">Response within 2 business days</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0F2642] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D5A754] mb-4">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  PHONE
                </span>
                <a
                  href="tel:+381112607902"
                  className="mt-1 block text-base font-bold text-white hover:text-[#D5A754] transition-colors"
                >
                  +381 11 260 7902
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-400">Mon–Fri, 09:00 – 16:00 CET</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0F2642] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D5A754] mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  LOCATION & HOURS
                </span>
                <p className="mt-1 text-base font-bold text-white">
                  Main Building, Room 104
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-400">Mon–Fri 09:00–16:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. YOUR FUTURE STARTS HERE (CTA BANNER)
          ========================================================================= */}
      <section className="relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0A1F3B]">
        {/* Modern university architecture at dusk background */}
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
          {/* Motto Accent */}
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
            — UVEK PRVI - ALWAYS FIRST —
          </p>

          {/* Big Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight text-white">
            YOUR FUTURE STARTS HERE.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
            Find a programme, speak to admissions or explore how our international
            partnerships can take your academic journey further.
          </p>

          {/* 2 Buttons */}
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
