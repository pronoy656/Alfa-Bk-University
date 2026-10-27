import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Award,
  TrendingUp,
  Megaphone,
  Briefcase,
  Calculator,
  PieChart,
  BookOpen,
  Globe,
  Trophy,
  Activity,
  Code,
  Server,
  Shield,
  Binary,
  Cpu,
  HeartHandshake,
  Users2,
  LucideIcon,
} from "lucide-react";
import { ProgramItem, AdvancedProgram } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Megaphone,
  Briefcase,
  Calculator,
  PieChart,
  BookOpen,
  Globe,
  Trophy,
  Activity,
  Code,
  Server,
  Shield,
  Binary,
  Cpu,
  HeartHandshake,
  Users2,
};

interface FacultyProgramsProps {
  programCount: string;
  bscPrograms: ProgramItem[];
  mscProgram: AdvancedProgram | null;
  phdProgram: AdvancedProgram | null;
}

export default function FacultyPrograms({
  programCount,
  bscPrograms,
  mscProgram,
  phdProgram,
}: FacultyProgramsProps) {
  return (
    <section className="bg-[#FAF8F5] py-16 lg:py-24 border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
            ACCREDITED PROGRAMMES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B1E36] tracking-tight uppercase leading-tight mt-2">
            WHAT WILL YOU STUDY?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            {programCount} accredited programmes - BSc, MSc and PhD. Click any card to view full details, semester structure and documents.{" "}
            <span className="text-[#B91C1C] font-medium">
              Accreditation details subject to annual confirmation.
            </span>
          </p>
        </div>

        {/* Bachelor Programs Subsection Title */}
        <div className="flex items-center gap-2 mb-6">
          <span className="h-[2px] w-6 bg-[#2563EB] inline-block" />
          <h3 className="text-xs font-bold tracking-wider text-[#2563EB] uppercase">
            BACHELOR PROGRAMMES (BSC • 3 YEARS • 180 ECTS)
          </h3>
        </div>

        {/* Undergraduate (BSc) Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bscPrograms.map((prog) => {
            const Icon = iconMap[prog.icon] || BookOpen;
            return (
              <div
                key={prog.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-2xs ${prog.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-md border px-2.5 py-0.5 text-xs font-semibold ${prog.badgeStyle}`}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900 transition group-hover:text-blue-600">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                  <span className="font-medium text-slate-500">
                    {prog.duration}
                  </span>
                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View Programme
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Program Section */}
        {mscProgram && (
          <div className="mt-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-[#7C3AED] inline-block" />
              <h3 className="text-xs font-bold tracking-wider text-[#7C3AED] uppercase">
                MASTER PROGRAMME ({mscProgram.badge} • {mscProgram.duration})
              </h3>
            </div>

            <div className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition duration-200 hover:border-purple-400 hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white shadow-2xs">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition">
                        {mscProgram.title}
                      </h4>
                      <span className="rounded-md border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700">
                        {mscProgram.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-2xl">
                      {mscProgram.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <span className="text-slate-500">{mscProgram.duration}</span>
                  <span className="text-slate-400">•</span>
                  <Link
                    href={mscProgram.href}
                    className="font-bold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
                  >
                    View Programme &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Doctoral Studies Section */}
        {phdProgram && (
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-[#B45309] inline-block" />
              <h3 className="text-xs font-bold tracking-wider text-[#B45309] uppercase">
                DOCTORAL STUDIES ({phdProgram.badge} • {phdProgram.duration})
              </h3>
            </div>

            <div className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition duration-200 hover:border-amber-400 hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#881337] text-white shadow-2xs">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition">
                        {phdProgram.title}
                      </h4>
                      <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
                        {phdProgram.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 max-w-2xl">
                      {phdProgram.description}{" "}
                      <span className="text-[#B91C1C] font-medium">
                        Subject to annual confirmation.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <span className="text-slate-500">{phdProgram.duration}</span>
                  <span className="text-slate-400">•</span>
                  <Link
                    href={phdProgram.href}
                    className="font-bold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
                  >
                    View Programme &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
