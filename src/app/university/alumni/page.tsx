"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Send, Award, Users, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { universityData } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

export default function AlumniPage() {
  const { alumni } = universityData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduationYear: "2024",
    faculty: "Faculty of Finance, Trade and Accounting",
    program: "",
    occupation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/90 to-[#0B1E36]/75" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E5A83B] uppercase">
              ALUMNI
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {alumni.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {alumni.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT: MORE THAN GRADUATION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
                ABOUT
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                More Than Graduation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                The Alfa BK University Alumni Association was founded to maintain the lasting connection between the university and its graduates. Since 1993, Alfa BK has educated thousands of students across six faculties — and our alumni community spans Serbia, the region, and the world.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Becoming an Alumni Association member connects you to a lifelong network of professionals, gives you continued access to university resources, and allows you to contribute to the university's future through mentoring, lectures, and events.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 text-center sm:text-left">
                {alumni.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-slate-900 sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-slate-500 uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                  alt="Alumni gathering"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEMBER BENEFITS */}
      <section className="border-t border-slate-100 bg-[#FAF9F6] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Member Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition hover:border-amber-300 hover:shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAB308] text-slate-950">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALUMNI APPLICATION FORM */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">
                BECOME A MEMBER
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                Alumni Association Application
              </h2>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Fill in the form below. Our team will review your application and send confirmation to your email.
              </p>
            </div>

            {submitted ? (
              <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900 shadow-sm">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="mt-4 text-xl font-bold">
                  Application Submitted!
                </h3>
                <p className="mt-2 text-xs text-emerald-700">
                  Thank you for registering with the Alfa BK Alumni Association. A confirmation email has been sent to your inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-emerald-700 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-5 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md sm:p-10"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      FIRST NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      LAST NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      placeholder="+381 60 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      GRADUATION YEAR *
                    </label>
                    <select
                      value={formData.graduationYear}
                      onChange={(e) =>
                        setFormData({ ...formData, graduationYear: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-hidden"
                    >
                      {Array.from({ length: 32 }, (_, i) => 2024 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      FACULTY *
                    </label>
                    <select
                      value={formData.faculty}
                      onChange={(e) =>
                        setFormData({ ...formData, faculty: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-hidden"
                    >
                      <option>Faculty of Finance, Trade and Accounting</option>
                      <option>Faculty of Foreign Languages</option>
                      <option>Faculty of Management in Sports</option>
                      <option>Faculty of Information Technologies</option>
                      <option>Faculty of Mathematics and Computer Science</option>
                      <option>Faculty of Psychology</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    CURRENT OCCUPATION / EMPLOYER
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Financial Analyst at UniCredit"
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({ ...formData, occupation: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    MESSAGE / COMMENTS (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you've been working on..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0B1E36] py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#152B4D]"
                >
                  Submit Application
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Your information is strictly used for official Alumni Association purposes and never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. GRADIENT BANNER */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-white shadow-md sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Users className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Stay Connected with Your Alma Mater
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Join our official alumni channels on LinkedIn and receive quarterly research bulletins.
                </p>
              </div>
            </div>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Join LinkedIn Network
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </UniversityGradient>
        </div>
      </section>
    </div>
  );
}
