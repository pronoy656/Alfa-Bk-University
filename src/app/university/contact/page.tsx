"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { universityData, facultiesData } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

export default function ContactPage() {
  const { contact } = universityData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Admissions & Enrollment Office",
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
              CONTACT
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {contact.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT DEPARTMENT CARDS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Key University Offices
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Reach out directly to the dedicated administrative unit responsible for your inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contact.offices.map((office) => (
              <div
                key={office.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition hover:border-blue-400 hover:shadow-md"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
                    {office.room}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {office.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {office.description}
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs font-semibold">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="h-3.5 w-3.5 text-[#D5A754]" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-3.5 w-3.5 text-[#D5A754]" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-slate-800 hover:text-blue-600"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & CAMPUS INFO */}
      <section className="border-t border-slate-100 bg-[#FAF9F6] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left: Interactive Message Form */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                SEND A MESSAGE
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Our support team typically responds within one business day.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900 shadow-sm">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h3 className="mt-4 text-xl font-bold">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-xs text-emerald-700">
                    Thank you for contacting Alfa BK University. An academic advisor will reply to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg bg-emerald-700 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      FULL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase">
                        EMAIL ADDRESS *
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
                        PHONE NUMBER
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      DEPARTMENT / SUBJECT
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-blue-500 focus:outline-hidden"
                    >
                      <option>Admissions & Enrollment Office</option>
                      <option>Student Affairs & Exam Verification</option>
                      <option>International Relations & Erasmus+</option>
                      <option>Accounting & Financial Clearance</option>
                      <option>General Academic Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we assist you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1E36] py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#152B4D]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Central Campus Info & Map */}
            <div className="space-y-6 lg:col-span-5">
              <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
                LOCATION & VISITS
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                Main Campus
              </h2>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      ADDRESS
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {contact.campus.address}
                    </p>
                    <p className="text-xs text-slate-500">
                      {contact.campus.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      WORKING HOURS
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {contact.campus.workingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">
                      CENTRAL OPERATOR
                    </h4>
                    <a
                      href={`tel:${contact.campus.phone}`}
                      className="mt-1 block text-sm font-bold text-blue-600 hover:underline"
                    >
                      {contact.campus.phone}
                    </a>
                  </div>
                </div>

                {/* Campus Image / Map placeholder */}
                <div className="mt-4 overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                    alt="Alfa BK University New Belgrade Campus"
                    className="h-44 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECT FACULTY CONTACT DIRECTORY */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
              FACULTIES
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              Faculty Contact Directory
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(facultiesData).map((fac) => (
              <div
                key={fac.slug}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs"
              >
                <h3 className="text-sm font-bold text-slate-900">
                  {fac.title}
                </h3>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="h-3.5 w-3.5 text-[#D5A754]" />
                    <a
                      href={`mailto:${fac.contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {fac.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="h-3.5 w-3.5 text-[#D5A754]" />
                    <a
                      href={`tel:${fac.contact.phone}`}
                      className="hover:text-blue-600"
                    >
                      {fac.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-[#D5A754]" />
                    <span>{fac.contact.address}</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3">
                  <Link
                    href={`/faculties/${fac.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-600"
                  >
                    View Faculty Page
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GRADIENT BANNER */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-white shadow-md sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <GraduationCap className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Ready to Start Your Application?
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Enrolment for 2026/2027 is now open across all faculties and degree levels.
                </p>
              </div>
            </div>

            <Link
              href="/apply-now"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Apply Online
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </UniversityGradient>
        </div>
      </section>
    </div>
  );
}
