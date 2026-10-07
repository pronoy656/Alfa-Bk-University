import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck, Award, GraduationCap } from "lucide-react";
import { universityData } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

export const metadata: Metadata = {
  title: "Rector & Leadership | Alfa BK University",
  description:
    "Meet the academic and administrative leaders who guide Alfa BK University's vision, strategy, and day-to-day operations.",
};

export default function RectorLeadershipPage() {
  const { leadership } = universityData;

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/95 to-[#0B1E36]/80" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E5A83B] uppercase">
              ABOUT UNIVERSITY
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {leadership.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {leadership.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. RECTOR / UNIVERSITY LEADERSHIP */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
              RECTOR
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              University Leadership
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm lg:grid lg:grid-cols-12">
            <div className="relative aspect-4/3 lg:aspect-auto lg:col-span-5 bg-slate-100">
              <img
                src={leadership.rector.photo}
                alt={leadership.rector.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
              <div>
                <span className="inline-block rounded-md bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-800 uppercase">
                  {leadership.rector.title}
                </span>
                <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                  {leadership.rector.name}
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {leadership.rector.bio}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <Mail className="h-4 w-4 text-[#D5A754]" />
                <a
                  href={`mailto:${leadership.rector.email}`}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  {leadership.rector.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE ACADEMIC TEAM (PRO-RECTORS) */}
      <section className="border-t border-slate-100 bg-[#FAF9F6] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              PRO-RECTORS
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              Executive Academic Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {leadership.proRectors.map((pr) => (
              <div
                key={pr.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full bg-slate-100">
                  <img
                    src={pr.photo}
                    alt={pr.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-[11px] font-bold tracking-wide text-amber-700 uppercase">
                      {pr.title}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {pr.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {pr.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FACULTY DEANS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-[#D5A754] uppercase">
              DEANS
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              Faculty Deans
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {leadership.deans.map((d) => (
              <div
                key={d.faculty}
                className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B1E36] text-xs font-black text-[#D5A754]">
                  {d.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-slate-900">
                    {d.name}
                  </h3>
                  <p className="truncate text-xs font-medium text-slate-500">
                    {d.faculty}
                  </p>
                  <a
                    href={`mailto:${d.email}`}
                    className="mt-1 block truncate text-[11px] font-semibold text-blue-600 hover:underline"
                  >
                    {d.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SENIOR ADMINISTRATION */}
      <section className="border-t border-slate-100 bg-[#FAF9F6] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              ADMINISTRATION
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              Senior Administration
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.administration.map((adm) => (
              <div
                key={adm.role}
                className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs"
              >
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  {adm.role}
                </span>
                <h3 className="mt-2 text-sm font-bold text-slate-900">
                  {adm.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{adm.department}</p>
                <a
                  href={`mailto:${adm.email}`}
                  className="mt-3 block text-xs font-medium text-blue-600 hover:underline"
                >
                  {adm.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-white shadow-md sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <GraduationCap className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Contact University Leadership
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  For institutional inquiries, partnerships, or official correspondence.
                </p>
              </div>
            </div>

            <Link
              href="/university/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Contact Office
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </UniversityGradient>
        </div>
      </section>
    </div>
  );
}
