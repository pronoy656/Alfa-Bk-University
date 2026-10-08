"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, User, CheckCircle2, Clock } from "lucide-react";

export default function StudentCoursesPage() {
  const enrolledCourses = [
    {
      id: "cse-305",
      code: "CSE-305",
      title: "Database Management System",
      credits: 3,
      instructor: "Dr. Rahman",
      progress: 62,
      lastActive: "Today, 09:00 AM",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: "cse-310",
      code: "CSE-310",
      title: "Software Engineering",
      credits: 3,
      instructor: "Dr. Hasan Mahmud",
      progress: 75,
      lastActive: "Yesterday",
      color: "from-emerald-600 to-teal-700",
    },
    {
      id: "cse-320",
      code: "CSE-320",
      title: "Computer Networking",
      credits: 3,
      instructor: "Ms. Farhana Sultana",
      progress: 58,
      lastActive: "2 days ago",
      color: "from-amber-600 to-orange-700",
    },
    {
      id: "cse-401",
      code: "CSE-401",
      title: "Artificial Intelligence",
      credits: 3,
      instructor: "Prof. Dr. Milan Stanković",
      progress: 45,
      lastActive: "3 days ago",
      color: "from-purple-600 to-violet-700",
    },
    {
      id: "cse-315",
      code: "CSE-315",
      title: "Web Engineering & Design",
      credits: 3,
      instructor: "Doc. Dr. Jelena Novak",
      progress: 82,
      lastActive: "Today",
      color: "from-sky-600 to-cyan-700",
    },
    {
      id: "cse-499",
      code: "CSE-499",
      title: "Undergraduate Thesis & Project",
      credits: 3,
      instructor: "Academic Advisory Committee",
      progress: 35,
      lastActive: "This week",
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            My Enrolled Courses
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            Fall 2026 Academic Term · 6 active courses (18 Total Credit Hours)
          </p>
        </div>
        <Link
          href="/dashboard/student"
          className="text-xs font-bold text-[#C69234] hover:underline self-start sm:self-auto"
        >
          ← Back to Overview
        </Link>
      </div>

      {/* Courses Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {enrolledCourses.map((c) => (
          <div
            key={c.code}
            className="w-full bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-700">
                  {c.code} · {c.credits} Credits
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {c.lastActive}
                </span>
              </div>

              <Link href={`/dashboard/student/courses/${c.id}`}>
                <h2 className="text-base font-bold text-slate-900 mt-4 group-hover:text-[#C69234] transition leading-snug">
                  {c.title}
                </h2>
              </Link>

              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{c.instructor}</span>
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-slate-400">Syllabus Covered</span>
                  <span className="font-bold text-slate-800">{c.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C69234] h-full rounded-full transition-all duration-500"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Regular Active
              </span>
              <Link
                href={`/dashboard/student/courses/${c.id}`}
                className="font-bold text-[#0B1E36] hover:text-[#C69234] transition"
              >
                Access Courseware →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
