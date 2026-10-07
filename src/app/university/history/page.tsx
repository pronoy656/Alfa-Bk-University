import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { universityData } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

export const metadata: Metadata = {
  title: "Our History | Alfa BK University",
  description:
    "From a bold founding vision in 1993 to one of Serbia's leading private universities — three decades of academic excellence, growth, and innovation.",
};

export default function HistoryPage() {
  const { history } = universityData;

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
              {history.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {history.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. VERTICAL TIMELINE SECTION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl">
            {/* Center connecting line */}
            <div className="absolute top-8 bottom-8 left-6 w-0.5 bg-gradient-to-b from-[#D5A754] via-blue-200 to-slate-200 sm:left-8" />

            <div className="space-y-12 sm:space-y-16">
              {history.milestones.map((item, index) => (
                <div key={item.year} className="relative flex items-start gap-6 sm:gap-10">
                  {/* Circular Milestone Badge */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#0B1E36] text-xs font-black text-[#D5A754] shadow-md ring-2 ring-[#D5A754]/50 sm:h-16 sm:w-16 sm:text-sm">
                    {item.year}
                  </div>

                  {/* Milestone Card */}
                  <div className="flex-1 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:border-blue-300 hover:shadow-md sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 sm:text-xl">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        <Calendar className="h-3.5 w-3.5 text-[#D5A754]" />
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {item.description}
                    </p>

                    {item.image && (
                      <div className="mt-5 overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 w-full object-cover transition duration-300 hover:scale-105 sm:h-64"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. REUSABLE GRADIENT CTA BANNER */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-white shadow-md sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Sparkles className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Become Part of Our Story
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Join a tradition of academic leadership, international partnerships, and real-world impact.
                </p>
              </div>
            </div>

            <Link
              href="/apply-now"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </UniversityGradient>
        </div>
      </section>
    </div>
  );
}
