"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function ApplyNowSection() {
  const [formData, setFormData] = useState({
    faculty: "",
    program: "",
    fullName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const faculties = [
    "Faculty of Finance, Trade and Accounting",
    "Faculty of Foreign Languages",
    "Faculty of Management in Sports",
    "Faculty of Information Technologies",
    "Faculty of Mathematics and Computer Sciences",
    "Faculty of Psychology",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const guarantees = [
    "Same enrolment documents for all faculties",
    "Student service responds within 24 hours",
    "Both Serbian and international applicants welcome",
  ];

  return (
    <section className="py-20 bg-[#0B1E36] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Info & Requirements */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754]">
              ENROLMENT 2026/2027
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white tracking-tight">
              Apply Now
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed">
              Choose your faculty and program, fill in your basic details, and our student service team will contact you within 24 hours.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {guarantees.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D5A754]/20 border border-[#D5A754]/40 flex items-center justify-center text-[#D5A754] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D5A754] hover:text-[#e4bd70] transition"
              >
                <span>View full admission requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#10243E] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[#D5A754]/20 rounded-full flex items-center justify-center text-[#D5A754] mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                    Thank you, {formData.fullName || "applicant"}. Our student service team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-[#D5A754] underline hover:text-[#e4bd70]"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Faculty Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      FACULTY
                    </label>
                    <select
                      required
                      value={formData.faculty}
                      onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                      className="w-full bg-[#0A192F] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D5A754] transition"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a faculty...
                      </option>
                      {faculties.map((fac, idx) => (
                        <option key={idx} value={fac} className="text-slate-900 bg-white">
                          {fac}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      PROGRAM
                    </label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-[#0A192F] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D5A754] transition"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a program...
                      </option>
                      <option value="Undergraduate Studies (BSc / BA)" className="text-slate-900 bg-white">
                        Undergraduate Studies (BSc / BA)
                      </option>
                      <option value="Master Academic Studies (MSc / MA)" className="text-slate-900 bg-white">
                        Master Academic Studies (MSc / MA)
                      </option>
                      <option value="Doctoral Studies (PhD)" className="text-slate-900 bg-white">
                        Doctoral Studies (PhD)
                      </option>
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0A192F] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D5A754] transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A192F] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D5A754] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+381 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A192F] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D5A754] transition"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-sm py-3.5 rounded-lg shadow-lg shadow-[#D5A754]/20 transition cursor-pointer"
                    >
                      Send Application
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-400">
                      Your data is sent only to the Alfa BK student service and is not shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
