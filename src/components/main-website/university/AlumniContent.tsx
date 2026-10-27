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
import { PageHero, Input, TitleSubtitle } from "@/components/shared";
import {
  faculties,
  alumniStories,
  careerNetworkFeatures,
  events,
  supportWays,
} from "@/data/alumni";

const careerIcons = [Briefcase, Users, Award, Globe];

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

  const graduationYears = Array.from({ length: 33 }, (_, i) => `${2025 - i}`);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO BANNER */}
      <PageHero
        kicker="ALUMNI NETWORK"
        title={
          <>
            WHERE ALFA BK <br />
            <span className="text-[#D5A754]">GRADUATES COME TOGETHER.</span>
          </>
        }
        description="Connect with thousands of graduates across Serbia and the world. Share your story, mentor the next generation, and grow your career through the Alfa BK Alumni Network."
        bgImage="/alumni-hero.jpg"
        actions={
          <div className="flex flex-wrap items-center gap-4">
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
        }
        stats={[
          { value: "30+", label: "YEARS OF GRADUATES" },
          { value: "74", label: "COUNTRIES" },
          { value: "97%", label: "EMPLOYMENT RATE" },
          { value: "6", label: "FACULTIES" },
        ]}
      />

      {/* 2. ABOUT THE ASSOCIATION */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <TitleSubtitle
                kicker="ABOUT THE ASSOCIATION"
                withGoldLine
                uppercase
                title="MORE THAN GRADUATION"
                maxWidth="none"
              />
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

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 h-[380px] sm:h-[420px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/8857b18bb800e6c1325a0a319d6a30f099236053.jpg')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUMNI STORIES */}
      <section id="stories" className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            align="center"
            kicker="ALUMNI STORIES"
            withGoldLine
            theme="dark"
            uppercase
            title="WHAT I STUDIED. WHAT I DO TODAY."
            subtitle="Real paths from graduation to career. No invented facts — just honest journeys."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniStories.map((story) => (
              <div
                key={story.name}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F5] text-slate-800 shadow-xl border-0"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${story.image}')`,
                    }}
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#113565] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                        {story.faculty}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {story.classYear}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#0B1E36] uppercase tracking-tight">
                      {story.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C49B55] mt-0.5">
                      {story.role}
                    </p>

                    <div className="mt-6 space-y-3.5 text-xs">
                      <div>
                        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          <span>WHAT I STUDIED</span>
                        </div>
                        <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                          {story.whatIStudied}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          <span>WHAT I DO TODAY</span>
                        </div>
                        <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                          {story.whatIDoToday}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-800">
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                          <span>HOW I GOT THERE</span>
                        </div>
                        <p className="mt-1 text-slate-600 pl-3.5 leading-relaxed">
                          {story.howIGotThere}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-lg shadow-sm transition"
            >
              Share Your Story &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. CAREERS & INDUSTRY */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            kicker="CAREERS & INDUSTRY"
            withGoldLine
            uppercase
            title="YOUR CAREER NETWORK"
            subtitle="The Alfa BK alumni community spans industries, sectors, and borders. Use the network to find opportunities, open doors, and build partnerships."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerNetworkFeatures.map((feat, idx) => {
              const Icon = careerIcons[idx % careerIcons.length];
              return (
                <div
                  key={feat.title}
                  className="flex flex-col justify-between rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#113565] flex items-center justify-center text-[#D5A754] mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1E36]">{feat.title}</h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GIVE BACK */}
      <section className="bg-[#A2302F] text-white py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <TitleSubtitle
                kicker="GIVE BACK"
                withGoldLine
                theme="dark"
                uppercase
                size="xl"
                title="MENTOR A STUDENT"
                maxWidth="none"
                kickerClassName="!text-[#FFE4B5]"
              />
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

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-[380px] sm:h-[420px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/0c2239dd77e20bfac14116b810004a66b2b082b7.jpg')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EVENTS */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <TitleSubtitle
              kicker="EVENTS"
              withGoldLine
              uppercase
              title="COMING TOGETHER"
            />
            <Link
              href="/news-events"
              className="inline-flex items-center justify-center border border-[#0B1E36]/30 text-[#0B1E36] hover:bg-black/5 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition self-start sm:self-auto"
            >
              See All Events
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((evt) => (
              <div
                key={evt.title}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${evt.image}')`,
                    }}
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#D5A754] uppercase tracking-wider mb-2">
                      <span className="h-2 w-2 rounded-full bg-[#D5A754]" />
                      <span>{evt.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1E36]">{evt.title}</h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {evt.desc}
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
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUPPORT ALFA BK */}
      <section className="py-20 lg:py-24 bg-[#113565] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            align="center"
            kicker="SUPPORT ALFA BK"
            withGoldLine
            theme="dark"
            uppercase
            title="GIVE BACK. SHAPE WHAT COMES NEXT."
            subtitle="From establishing scholarships to funding research — alumni support directly shapes the experience of the next generation of Alfa BK students."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportWays.map((way) => (
              <div
                key={way.num}
                className="rounded-2xl bg-[#193F71] border border-white/10 p-7 flex flex-col justify-between"
              >
                <div>
                  <p className="text-2xl font-black text-[#D5A754] mb-3">{way.num}</p>
                  <h3 className="text-base font-bold text-white">{way.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {way.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

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

      {/* 8. BECOME A MEMBER (APPLICATION FORM) */}
      <section id="register" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            align="center"
            kicker="BECOME A MEMBER"
            withGoldLine
            uppercase
            title="ALUMNI ASSOCIATION APPLICATION"
            subtitle="Fill in the form below. Our Alumni Office will review your application and send confirmation to your email within 3 working days."
            className="mb-12"
          />

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
                  <Input
                    label="FIRST NAME *"
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="py-3 text-sm"
                    labelClassName="text-[11px] font-bold tracking-wider text-slate-600 mb-2"
                  />

                  <Input
                    label="LAST NAME *"
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="py-3 text-sm"
                    labelClassName="text-[11px] font-bold tracking-wider text-slate-600 mb-2"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="EMAIL *"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="py-3 text-sm"
                    labelClassName="text-[11px] font-bold tracking-wider text-slate-600 mb-2"
                  />

                  <Input
                    label="PHONE"
                    type="tel"
                    placeholder="+381 ..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="py-3 text-sm"
                    labelClassName="text-[11px] font-bold tracking-wider text-slate-600 mb-2"
                  />
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

                <Input
                  label="CURRENT OCCUPATION"
                  type="text"
                  placeholder="Job title and employer"
                  value={formData.occupation}
                  onChange={(e) =>
                    setFormData({ ...formData, occupation: e.target.value })
                  }
                  className="py-3 text-sm"
                  labelClassName="text-[11px] font-bold tracking-wider text-slate-600 mb-2"
                />

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
