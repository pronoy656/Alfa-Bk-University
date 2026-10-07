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
import { ProgramItem, AdvancedProgram } from "@/components/data";

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
    <section className="border-t border-slate-100 bg-[#FAF8F5] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Programs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {programCount} accredited programs — click any card to view the full
            program details, semester structure, and documents.
          </p>
        </div>

        {/* Undergraduate (BSc) Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    View Program
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
            <h3 className="text-xs font-bold tracking-wider text-purple-700 uppercase">
              MASTER PROGRAM ({mscProgram.badge} • {mscProgram.duration})
            </h3>

            <div className="group mt-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:border-purple-400 hover:shadow-md">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white shadow-2xs">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700">
                        {mscProgram.title}
                      </h4>
                      <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                        {mscProgram.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600">
                      {mscProgram.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-3 md:border-t-0 md:pt-0">
                  <span className="text-xs font-medium text-slate-500">
                    {mscProgram.duration}
                  </span>
                  <Link
                    href={mscProgram.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View Program
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Doctoral Studies Section */}
        {phdProgram && (
          <div className="mt-10">
            <h3 className="text-xs font-bold tracking-wider text-amber-700 uppercase">
              DOCTORAL STUDIES ({phdProgram.badge} • {phdProgram.duration})
            </h3>

            <div className="group mt-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:border-amber-400 hover:shadow-md">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D97706] text-white shadow-2xs">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
                        {phdProgram.title}
                      </h4>
                      <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                        {phdProgram.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600">
                      {phdProgram.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-3 md:border-t-0 md:pt-0">
                  <span className="text-xs font-medium text-slate-500">
                    {phdProgram.duration}
                  </span>
                  <Link
                    href={phdProgram.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View Program
                    <ArrowRight className="h-3.5 w-3.5" />
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
