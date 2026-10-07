import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Repeat,
  Users,
  FlaskConical,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { universityData } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

export const metadata: Metadata = {
  title: "International Cooperation | Alfa BK University",
  description:
    "Alfa BK University maintains active academic partnerships with 60+ universities across 40+ countries — enabling student exchanges, joint research, and dual-degree programs.",
};

export default function InternationalCooperationPage() {
  const { international } = universityData;

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
              ABOUT UNIVERSITY
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {international.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {international.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-b border-slate-100 bg-[#FAF9F6] py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {international.stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="text-3xl font-black text-slate-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOBILITY PROGRAMS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
              PROGRAMS
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              International Mobility Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {international.mobilityPrograms.map((prog) => {
              const Icon =
                prog.icon === "Repeat"
                  ? Repeat
                  : prog.icon === "Users"
                  ? Users
                  : prog.icon === "FlaskConical"
                  ? FlaskConical
                  : GraduationCap;

              return (
                <div
                  key={prog.id}
                  className="rounded-2xl border border-slate-800 bg-[#0B1E36] p-7 text-white shadow-md transition hover:border-[#D5A754]/60"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D5A754]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300">
                      {prog.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {prog.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {prog.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EUROPEAN PARTNER UNIVERSITIES */}
      <section className="border-t border-slate-100 bg-[#FAF9F6] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              ERASMUS+
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              European Partner Universities
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Alfa BK is an active member of the Erasmus+ program. Students may apply for exchange semesters at any of these partner institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {international.europeanPartners.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-blue-400 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500">{item.country}</p>
                  <p className="mt-2 text-[11px] text-slate-600">{item.areas}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL PARTNERS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
              GLOBAL
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              International Partners Outside Europe
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {international.globalPartners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <span className="text-3xl">{p.flag}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-slate-900">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500">{p.country}</p>
                  <span className="mt-1 inline-block text-[11px] font-semibold text-blue-600">
                    {p.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERNATIONAL OFFICE BANNER */}
      <section className="bg-[#0B1E36] py-14 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-black sm:text-3xl">
              International Office
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-300 sm:text-sm">
              Interested in studying abroad, applying for Erasmus+ grants, or establishing a new academic partnership? Our team is ready to assist.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <Mail className="h-6 w-6 text-[#D5A754]" />
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  EMAIL
                </span>
                <a
                  href={`mailto:${international.office.email}`}
                  className="block text-xs font-semibold text-white hover:underline"
                >
                  {international.office.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <Phone className="h-6 w-6 text-[#D5A754]" />
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  PHONE
                </span>
                <a
                  href={`tel:${international.office.phone}`}
                  className="block text-xs font-semibold text-white hover:underline"
                >
                  {international.office.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <MapPin className="h-6 w-6 text-[#D5A754]" />
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  LOCATION
                </span>
                <p className="text-xs font-semibold text-white">
                  {international.office.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
