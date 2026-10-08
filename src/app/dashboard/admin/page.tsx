"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  Building2,
  Server,
  Settings,
  ArrowRight,
  UserCheck,
  FileText,
  Activity,
} from "lucide-react";
export default function AdminDashboardPage() {
  const adminStats = [
    { label: "Total Enrolled Students", value: "4,820", subtext: "Across 6 faculties" },
    { label: "Faculty & Teaching Staff", value: "185", subtext: "Professors & TAs" },
    { label: "Active Academic Programs", value: "32", subtext: "BSc, MSc, PhD" },
    { label: "System Infrastructure", value: "99.9%", subtext: "e-Learning Uptime" },
  ];

  return (
    <div className="w-full space-y-6">
        {/* Banner */}
        <div className="rounded-2xl bg-[#0B1E36] p-6 sm:p-8 text-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#D5A754] uppercase">
              CENTRAL ADMINISTRATION
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              University Management Portal
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Alfa BK University institutional oversight, admissions dispatch, and portal synchronization
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/teacher"
              className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2 text-xs font-bold text-white shadow-2xs transition"
            >
              Teacher Portal →
            </Link>
            <Link
              href="/dashboard/student"
              className="rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-bold text-white transition"
            >
              Student Portal →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adminStats.map((st, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs"
            >
              <span className="text-xs font-medium text-slate-500">{st.label}</span>
              <div className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                {st.value}
              </div>
              <span className="mt-1 block text-[11px] text-slate-400">{st.subtext}</span>
            </div>
          ))}
        </div>

        {/* Quick Portal Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Teacher & Faculty Dashboard</h3>
                <p className="text-xs text-slate-500">Manage courses, lectures, student rosters, and assignments</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/dashboard/teacher"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1E36] hover:text-blue-700"
              >
                Access Teacher Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Student e-Student Portal</h3>
                <p className="text-xs text-slate-500">Exam schedules, attendance records, study routine, and grades</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/dashboard/student"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1E36] hover:text-emerald-700"
              >
                Access Student Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
