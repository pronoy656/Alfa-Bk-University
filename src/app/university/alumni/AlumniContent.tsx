"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Award,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AlumniContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduationYear: "2024",
    faculty: "Faculty of Finance, Banking and Auditing",
    occupation: "",
    mentorConsideration: false,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faculties = [
    "Faculty of Finance, Banking and Auditing",
    "Faculty of Information Technology",
    "Faculty of Mathematics and Computer Science",
    "Faculty of Foreign Languages",
    "Faculty of Management in Sport",
    "Faculty of Arts",
  ];

  const graduationYears = Array.from({ length: 33 }, (_, i) => `${2025 - i}`);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* =========================================================================
          1. HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden bg-[#0A1F3B] text-white">
        {/* Background photo with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
          style={{
            backgroundImage: "url('/alumni-hero.jpg')",
          }}
        />
        {/* Soft navy overlay keeping photo clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172B]/80 via-[#0A1F3B]/55 to-[#0A1F3B]/30" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Tag */}
            <p className="text-xs font-bold tracking-[0.25em] text-[#D5A754] uppercase mb-4">
              ALUMNI NETWORK
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              WHERE ALFA BK <br />
              <span className="text-[#D5A754]">GRADUATES COME TOGETHER.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl font-normal">
              Connect with thousands of graduates across Serbia and the world. Share your story,
              mentor the next generation, and grow your career through the Alfa BK Alumni Network.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
              >
                Join the Alumni Network
              </a>
              <a
                href="#stories"
                className="inline-flex items-center justify-center bg-[#132A4A]/80 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded border border-white/20 shadow-sm transition"
              >
                Explore Stories
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">30+</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  YEARS OF GRADUATES
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">74</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  COUNTRIES
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">97%</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  EMPLOYMENT RATE
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">6</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  FACULTIES
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT THE ASSOCIATION ("MORE THAN GRADUATION")
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  ABOUT THE ASSOCIATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase leading-tight">
                MORE THAN GRADUATION
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                The Alfa BK University Alumni Association has connected graduates since 1993. Our community
                spans Serbia, the region, and the world — united by shared experience, a commitment to
                excellence, and a desire to give back.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                Membership gives you access to a lifelong professional network, continued university resources,
                mentoring opportunities, exclusive events, and the chance to shape the next generation of
                Alfa BK students.
              </p>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 h-[380px] sm:h-[420px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ALUMNI STORIES ("WHAT I STUDIED. WHAT I DO TODAY.")
          ========================================================================= */}
      <section id="stories" className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                ALUMNI STORIES
              </span>
              <span className="h-[2px] w-6 bg-[#D5A754]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              WHAT I STUDIED. WHAT I DO TODAY.
            </h2>
            <p className="mt-3 text-sm text-slate-300 font-normal">
              Real paths from graduation to career. No invented facts — just honest journeys.
            </p>
          </div>

          {/* 3 Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Milena Todorović */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F5] text-slate-800 shadow-xl border-0">
              <div className="relative h-64 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#113565] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      FACULTY OF BUSINESS
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Class of 2018</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0B1E36] uppercase tracking-tight">
                    MILENA TODOROVIĆ
                  </h3>
                  <p className="text-xs font-semibold text-[#C49B55] mt-0.5">
                    Strategy Analyst · Erste Bank
                  </p>

                  <div className="mt-6 space-y-3.5 text-xs">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>WHAT I STUDIED</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        Business Economics at Alfa BK — fascinated by how numbers tell stories.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span>WHAT I DO TODAY</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        I lead strategic analysis for Erste Bank&apos;s retail division across the Balkans.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>HOW I GOT THERE</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        An alumni mentor I met at the Alfa BK Career Fair connected me to my first internship. The rest followed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Nikola Petrović */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F5] text-slate-800 shadow-xl border-0">
              <div className="relative h-64 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#113565] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      FACULTY OF IT
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Class of 2016</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0B1E36] uppercase tracking-tight">
                    NIKOLA PETROVIĆ
                  </h3>
                  <p className="text-xs font-semibold text-[#C49B55] mt-0.5">
                    Senior Software Engineer · Nordeus
                  </p>

                  <div className="mt-6 space-y-3.5 text-xs">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>WHAT I STUDIED</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        Software Engineering — building things that actually work for people.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span>WHAT I DO TODAY</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        I build backend infrastructure for mobile games played by millions worldwide.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>HOW I GOT THERE</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        My thesis supervisor was an industry professional. That relationship opened the first door.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Ana Jovanović */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F5] text-slate-800 shadow-xl border-0">
              <div className="relative h-64 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#113565] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      FACULTY OF HEALTHCARE
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Class of 2014</span>
                  </div>
                  <h3 className="text-lg font-black text-[#0B1E36] uppercase tracking-tight">
                    ANA JOVANOVIĆ
                  </h3>
                  <p className="text-xs font-semibold text-[#C49B55] mt-0.5">
                    Specialist Pharmacist · Clinical Centre
                  </p>

                  <div className="mt-6 space-y-3.5 text-xs">
                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>WHAT I STUDIED</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        Pharmacy — I always wanted to be on the frontline of patient care.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span>WHAT I DO TODAY</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        I specialize in clinical pharmacology at Belgrade&apos;s main hospital complex.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        <span>HOW I GOT THERE</span>
                      </div>
                      <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                        Practical placements in my third year gave me hands-on experience no classroom could replicate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Share Your Story Button */}
          <div className="mt-12 text-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-lg shadow-sm transition"
            >
              Share Your Story →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAREERS & INDUSTRY ("YOUR CAREER NETWORK")
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                CAREERS & INDUSTRY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              YOUR CAREER NETWORK
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              The Alfa BK alumni community spans industries, sectors, and borders. Use the network to
              find opportunities, open doors, and build partnerships.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1E36]">Alumni Job Board</h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  Exclusive postings from alumni employers and university partners — roles you won&apos;t find anywhere else.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1E36]">Mentorship Programme</h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  Be matched with a current student in your field. One conversation can change a career trajectory.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1E36]">Industry Lectures</h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  Return to campus as a speaker. Share real-world expertise with students who are where you once were.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1E36]">Global Alumni Directory</h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  Search and connect with graduates by faculty, industry, location, or graduation year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. GIVE BACK ("MENTOR A STUDENT" - Crimson / Brick Red #A2302F)
          ========================================================================= */}
      <section className="bg-[#A2302F] text-white py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#FFE4B5]" />
                <span className="text-xs font-bold tracking-widest text-[#FFE4B5] uppercase">
                  GIVE BACK
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                MENTOR A STUDENT
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/90 font-normal">
                You know what it takes. As an Alfa BK mentor, you give current students access to honest
                career guidance, industry insight, and real connections — exactly the kind of support that
                shaped your own path.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/90 font-normal">
                Commitment is flexible: a monthly 1-hour conversation is enough to make a meaningful difference.
              </p>
              <div className="mt-8">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center bg-white text-[#A2302F] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
                >
                  Become a Mentor
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-[380px] sm:h-[420px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EVENTS ("COMING TOGETHER")
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#D5A754]" />
                <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                  EVENTS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
                COMING TOGETHER
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center justify-center border border-[#0B1E36]/30 text-[#0B1E36] hover:bg-black/5 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              See All Events
            </Link>
          </div>

          {/* 3 Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#D5A754] uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5A754]" />
                    <span>15 MARCH 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E36]">Annual Alumni Gala</h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    The flagship event of the Alumni Association calendar. An evening of connection, recognition, and celebration.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#A2302F] hover:text-[#7f2424] uppercase tracking-wider transition-colors"
                  >
                    Register interest <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#D5A754] uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5A754]" />
                    <span>28 APRIL 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E36]">Alumni Career Fair</h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    Alumni employers meet current students. If you&apos;re hiring or want to give back to the pipeline — this is your moment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#A2302F] hover:text-[#7f2424] uppercase tracking-wider transition-colors"
                  >
                    Exhibit or attend <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#D5A754] uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5A754]" />
                    <span>ROLLING PROGRAMME</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E36]">Alumni Lecture Series</h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    Monthly talks from alumni professionals across all six faculties. Real careers, real knowledge, real impact on the next generation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#A2302F] hover:text-[#7f2424] uppercase tracking-wider transition-colors"
                  >
                    View schedule <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SUPPORT ALFA BK ("GIVE BACK. SHAPE WHAT COMES NEXT.")
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                SUPPORT ALFA BK
              </span>
              <span className="h-[2px] w-6 bg-[#D5A754]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              GIVE BACK. SHAPE WHAT COMES NEXT.
            </h2>
            <p className="mt-3 text-sm text-slate-300 font-normal">
              From establishing scholarships to funding research — alumni support directly shapes the
              experience of the next generation of Alfa BK students.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-[#193F71] border border-white/10 p-7 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-black text-[#D5A754] mb-3">01</p>
                <h3 className="text-base font-bold text-white">Establish a Scholarship</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Name a scholarship in honour of someone who inspired you or support students from your faculty.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#193F71] border border-white/10 p-7 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-black text-[#D5A754] mb-3">02</p>
                <h3 className="text-base font-bold text-white">Fund Research</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Support the Institute Petar Karić and research projects that keep Alfa BK at the forefront of knowledge.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#193F71] border border-white/10 p-7 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-black text-[#D5A754] mb-3">03</p>
                <h3 className="text-base font-bold text-white">Offer Internships</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Partner with the university to offer paid internship places to students ready for real-world experience.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#193F71] border border-white/10 p-7 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-black text-[#D5A754] mb-3">04</p>
                <h3 className="text-base font-bold text-white">Annual Alumni Fund</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Join the growing group of alumni who contribute annually to campus improvements and student welfare.
                </p>
              </div>
            </div>
          </div>

          {/* 2 Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
            >
              Explore Ways to Give
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded transition"
            >
              Contact Alumni Office
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. BECOME A MEMBER ("ALUMNI ASSOCIATION APPLICATION")
          ========================================================================= */}
      <section id="register" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                BECOME A MEMBER
              </span>
              <span className="h-[2px] w-6 bg-[#D5A754]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              ALUMNI ASSOCIATION APPLICATION
            </h2>
            <p className="mt-3 text-sm text-slate-600 font-normal">
              Fill in the form below. Our Alumni Office will review your application and send confirmation
              to your email within 3 working days.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-slate-200/80 shadow-md p-7 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Application Submitted Successfully!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, {formData.firstName || "Alumnus"}. The Alumni Office will review your details
                  and send confirmation to {formData.email || "your email"} within 3 working days.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center justify-center bg-[#113565] text-white font-bold text-xs uppercase px-6 py-3 rounded-lg hover:bg-[#0c284d] transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      placeholder="+381 ..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      GRADUATION YEAR *
                    </label>
                    <select
                      value={formData.graduationYear}
                      onChange={(e) =>
                        setFormData({ ...formData, graduationYear: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    >
                      {graduationYears.map((yr) => (
                        <option key={yr} value={yr}>
                          {yr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                      FACULTY *
                    </label>
                    <select
                      value={formData.faculty}
                      onChange={(e) =>
                        setFormData({ ...formData, faculty: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                    >
                      {faculties.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    CURRENT OCCUPATION
                  </label>
                  <input
                    type="text"
                    placeholder="Job title and employer"
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({ ...formData, occupation: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                  />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="mentorCheckbox"
                    checked={formData.mentorConsideration}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mentorConsideration: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-slate-300 text-[#113565] focus:ring-[#113565]"
                  />
                  <label
                    htmlFor="mentorCheckbox"
                    className="text-xs text-slate-600 font-medium cursor-pointer"
                  >
                    I&apos;d like to be considered as an Alumni Mentor for current students.
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us anything you'd like to share..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:outline-none focus:ring-1 focus:ring-[#113565]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider py-4 shadow-sm transition"
                >
                  Submit Application
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Your information is sent only to the Alfa BK Alumni Office and is not shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
