"use client";

import React from "react";
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

export default function InstituteKaricContent() {
  const stats = [
    { value: "30+", label: "YEARS OF EXCELLENCE" },
    { value: "10+", label: "YEARS ACTIVE" },
    { value: "60+", label: "EVENTS PER YEAR" },
    { value: "200+", label: "PUBLICATIONS" },
  ];

  const pillars = [
    {
      icon: BookOpen,
      title: "SCIENTIFIC RESEARCH",
      desc: "Peer-reviewed journals, working papers and applied research groups.",
    },
    {
      icon: Film,
      title: "CULTURAL PROGRAMS",
      desc: "Conferences, public lectures, film screenings and art exhibitions.",
    },
    {
      icon: Users,
      title: "ALUMNI ENGAGEMENT",
      desc: "Mentoring circles, alumni lectures and professional development.",
    },
    {
      icon: Award,
      title: "STUDENT AWARDS",
      desc: "Annual scholarships for outstanding academic and civic achievement.",
    },
    {
      icon: Globe,
      title: "INTERNATIONAL EXCHANGE",
      desc: "Visiting scholars, joint symposia and collaborative research projects.",
    },
    {
      icon: GraduationCap,
      title: "PUBLICATIONS",
      desc: "Annual academic journal, conference proceedings and monographs.",
    },
  ];

  const researchProjects = [
    {
      icon: Briefcase,
      title: "Strategic Management & Operations",
      desc: "Developing innovative models for corporate strategy, process optimisation, and competitive advantage analysis across emerging markets.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Corporate Finance & Modelling",
      desc: "Quantifying financial risk, valuing complex assets, and optimising investment portfolios for sustainable and responsible growth.",
    },
    {
      icon: Globe,
      title: "Global Marketing & Consumer Analytics",
      desc: "Analysing international market trends, consumer psychology, and digital marketing effectiveness across the Western Balkans.",
    },
    {
      icon: Cpu,
      title: "Digital Transformation & Applied AI",
      desc: "Developing AI-driven decision tools, data platforms, and cybersecurity frameworks for businesses and public institutions.",
    },
    {
      icon: Users,
      title: "Human Resource Development & Talent Strategy",
      desc: "Optimising workforce skills, talent acquisition, and performance management in rapidly changing economic landscapes.",
    },
    {
      icon: Scale,
      title: "Legal & Ethical Frameworks in Business",
      desc: "Navigating international trade laws, intellectual property rights, and corporate social responsibility in global contexts.",
    },
  ];

  const publications = [
    {
      tag: "JOURNAL · VOL. 1(2)",
      title: "Alfa BK Academic Journal",
      desc: "Annual peer-reviewed journal covering economics, law, technology and social sciences. Current volume in preparation.",
      status: "Forthcoming · Details Pending",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "PROCEEDINGS · 2025",
      title: "Annual Conference Proceedings",
      desc: "Selected papers from the Institute's annual academic conference. Submission guidelines published each autumn.",
      status: "Forthcoming · Details Pending",
      image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "MONOGRAPHS · 2025",
      title: "Topical Research Monographs",
      desc: "Deep-dive monographs on applied economics, digital transformation and legal frameworks. Catalogue updated annually.",
      status: "Forthcoming · Details Pending",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const events = [
    {
      badge: "CONFERENCE",
      badgeBg: "bg-[#113565] text-white",
      title: "ANNUAL ACADEMIC CONFERENCE 2025",
      desc: "The Institute's flagship annual gathering of researchers, faculty, students and invited speakers. Theme and date to be announced.",
      footerInfo: "Date · Venue · Programme Pending",
      buttonText: "Register Interest",
    },
    {
      badge: "PUBLIC LECTURE",
      badgeBg: "bg-[#C49B55] text-slate-950",
      title: "PUBLIC LECTURE SERIES · AUTUMN 2025",
      desc: "Monthly lectures open to the public on topics spanning economics, culture, technology and civic life. Speakers and dates forthcoming.",
      footerInfo: "Speakers · Dates Pending",
      buttonText: "Register Interest",
    },
    {
      badge: "AWARDS CEREMONY",
      badgeBg: "bg-[#A2302F] text-white",
      title: "PETAR KARIĆ STUDENT AWARDS 2025",
      desc: "Annual awards honouring outstanding student achievement in academics, civic engagement, and leadership. Nomination details published in spring.",
      footerInfo: "Nominations Open · Spring 2026",
      buttonText: "Nominate a Student",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* =========================================================================
          1. HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden bg-[#0A1F3B] text-white">
        {/* Background photo of library / academic research */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/institute-hero.jpg')",
          }}
        />
        {/* Soft linear overlay keeping photo clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172B]/85 via-[#0A1F3B]/60 to-[#0A1F3B]/30" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Tag */}
            <p className="text-xs font-bold tracking-[0.25em] text-[#D5A754] uppercase mb-4">
              — ALFA BK UNIVERSITY · EST. 1993 —
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              INSTITUTE <br />
              <span className="text-[#D5A754]">PETAR KARIĆ.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl font-normal">
              The scientific, cultural and social institute of Alfa BK University — dedicated to
              advancing knowledge, fostering dialogue, and honouring the legacy of Petar Karić.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
              >
                Explore the Institute
              </a>
              <a
                href="#research"
                className="inline-flex items-center justify-center bg-[#132A4A]/80 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded border border-white/20 shadow-sm transition"
              >
                View Research
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT THE INSTITUTE ("WHERE KNOWLEDGE MEETS LEGACY")
          ========================================================================= */}
      <section id="about" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  ABOUT THE INSTITUTE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase leading-tight">
                WHERE KNOWLEDGE MEETS LEGACY
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                The Institute Petar Karić was established in memory of Petar Karić, a founding member of the
                Karić family whose vision gave life to this university. It carries forward his values:
                dedication to learning, commitment to the public good, and belief in education as a
                transformative force.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                The Institute serves as the scientific and cultural arm of Alfa BK University — organising
                academic conferences, public lectures, student award programmes, and cultural events that
                enrich intellectual life on campus and in the wider community.
              </p>

              {/* Mission Box */}
              <div className="mt-8 rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B1E36]">Institute Mission</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To advance scientific inquiry, preserve cultural heritage, and nurture the next
                    generation of scholars, innovators, and civic leaders — in Serbia and beyond.
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
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#0B203D]/90 px-3.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase border border-white/20">
                  INSTITUTE PETAR KARIĆ · BELGRADE
                </span>
              </div>

              {/* 3 Navy Stat Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#0B2545] p-4 text-center text-white border border-white/10">
                  <p className="text-xl sm:text-2xl font-black text-[#D5A754]">10+</p>
                  <p className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-0.5">
                    YEARS ACTIVE
                  </p>
                </div>
                <div className="rounded-xl bg-[#0B2545] p-4 text-center text-white border border-white/10">
                  <p className="text-xl sm:text-2xl font-black text-[#D5A754]">60+</p>
                  <p className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-0.5">
                    EVENTS/YR
                  </p>
                </div>
                <div className="rounded-xl bg-[#0B2545] p-4 text-center text-white border border-white/10">
                  <p className="text-xl sm:text-2xl font-black text-[#D5A754]">200+</p>
                  <p className="text-[10px] font-bold tracking-wider text-slate-300 uppercase mt-0.5">
                    PUBLICATIONS
                  </p>
                </div>
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
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                WHAT WE DO
              </span>
              <span className="h-[2px] w-6 bg-[#D5A754]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              AREAS OF ACTIVITY
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal">
              Six pillars of the Institute&apos;s engagement
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
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
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                RESEARCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              ACTIVE RESEARCH PROJECTS
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-3xl font-normal leading-relaxed">
              The Institute hosts six active research groups. Full project details, team members, and
              findings will be published upon completion.
            </p>
          </div>

          {/* 6 Research Cards Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((proj) => {
              const Icon = proj.icon;
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
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  ACADEMIC OUTPUT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
                PUBLICATIONS & JOURNAL
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                The Alfa BK Academic Journal and conference proceedings. Current volume in preparation.
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center justify-center bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              Browse Archive
            </Link>
          </div>

          {/* 3 Publication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((pub) => (
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
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  UPCOMING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
                EVENTS & CONFERENCES
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Lectures, symposia, award ceremonies and cultural evenings. Programme announced each semester.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center justify-center bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              Full Calendar
            </Link>
          </div>

          {/* 3 Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((ev) => (
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
                    className="text-xs font-bold text-[#113565] hover:text-[#D5A754] uppercase tracking-wider transition-colors"
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
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                CAMPUS LIFE
              </span>
              <span className="h-[2px] w-6 bg-[#D5A754]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              INSTITUTE IN PICTURES
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal">
              Photographs from Institute events, lectures, and campus life. Gallery updated each semester.
            </p>
          </div>

          {/* 3 Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-bold text-white tracking-wider">
                Photo Pending · Academic Events
              </span>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-bold text-white tracking-wider">
                Photo Pending · Library & Research
              </span>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-bold text-white tracking-wider">
                Photo Pending · Awards & Ceremonies
              </span>
            </div>
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
            — UVEK PRVI - ALWAYS FIRST —
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight text-white">
            COLLABORATE WITH <br />
            <span className="text-[#D5A754]">THE INSTITUTE</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            Whether you are a researcher, student, partner institution, or cultural organisation — the
            Institute Petar Karić welcomes collaboration. Get in touch to explore opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition"
            >
              Contact the Institute
            </Link>
            <a
              href="mailto:institute@alfabk.edu"
              className="inline-flex items-center justify-center bg-[#132A4A]/90 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-white/20 shadow-md transition"
            >
              Submit Research Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
