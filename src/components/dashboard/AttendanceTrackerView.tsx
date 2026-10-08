"use client";

import { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Calendar,
  ChevronRight,
  Info,
  Check,
  X,
} from "lucide-react";

interface CourseAttendance {
  id: string;
  course: string;
  code: string;
  present: number;
  absent: number;
  late: number;
  percentage: number;
  barColor: "green" | "orange";
  instructor?: string;
  history?: Array<{
    date: string;
    topic: string;
    status: "Present" | "Absent" | "Late";
  }>;
}

export default function AttendanceTrackerView() {
  const [selectedCourse, setSelectedCourse] = useState<CourseAttendance | null>(
    null
  );

  // Exact 6 Courses matching Figma Node 463-7156
  const coursesAttendance: CourseAttendance[] = [
    {
      id: "att-1",
      course: "Database Management System",
      code: "CSE-305",
      present: 22,
      absent: 2,
      late: 0,
      percentage: 91,
      barColor: "green",
      instructor: "Dr. Mohammad Rahman",
      history: [
        { date: "Oct 05, 2026", topic: "Relational Algebra", status: "Present" },
        { date: "Oct 03, 2026", topic: "SQL Subqueries & Joins", status: "Present" },
        { date: "Sep 28, 2026", topic: "ER Model Mapping", status: "Absent" },
        { date: "Sep 26, 2026", topic: "Schema Design", status: "Present" },
      ],
    },
    {
      id: "att-2",
      course: "Software Engineering",
      code: "CSE-311",
      present: 18,
      absent: 4,
      late: 2,
      percentage: 75,
      barColor: "orange",
      instructor: "Dr. Hasan Mahmud",
      history: [
        { date: "Oct 04, 2026", topic: "Scrum & Sprint Planning", status: "Late" },
        { date: "Oct 02, 2026", topic: "Software Architecture Patterns", status: "Present" },
        { date: "Sep 27, 2026", topic: "Requirement Analysis", status: "Absent" },
        { date: "Sep 25, 2026", topic: "Agile Estimation", status: "Present" },
      ],
    },
    {
      id: "att-3",
      course: "Computer Networking",
      code: "CSE-318",
      present: 24,
      absent: 0,
      late: 0,
      percentage: 100,
      barColor: "green",
      instructor: "Ms. Farhana Sultana",
      history: [
        { date: "Oct 06, 2026", topic: "TCP/IP Protocol Suite", status: "Present" },
        { date: "Oct 01, 2026", topic: "Subnetting Class C", status: "Present" },
        { date: "Sep 29, 2026", topic: "IP Routing Algorithms", status: "Present" },
        { date: "Sep 24, 2026", topic: "OSI Model Review", status: "Present" },
      ],
    },
    {
      id: "att-4",
      course: "Operating Systems",
      code: "CSE-322",
      present: 19,
      absent: 5,
      late: 1,
      percentage: 76,
      barColor: "orange",
      instructor: "Dr. Arif Chowdhury",
      history: [
        { date: "Oct 05, 2026", topic: "Virtual Memory & Paging", status: "Present" },
        { date: "Oct 03, 2026", topic: "Deadlock Detection", status: "Absent" },
        { date: "Sep 28, 2026", topic: "Process Synchronization", status: "Present" },
        { date: "Sep 26, 2026", topic: "CPU Scheduling Algorithms", status: "Late" },
      ],
    },
    {
      id: "att-5",
      course: "Artificial Intelligence",
      code: "CSE-330",
      present: 23,
      absent: 1,
      late: 0,
      percentage: 95,
      barColor: "green",
      instructor: "Prof. Dr. Milan Stanković",
      history: [
        { date: "Oct 04, 2026", topic: "A* Search & Heuristics", status: "Present" },
        { date: "Oct 02, 2026", topic: "State Space Representation", status: "Present" },
        { date: "Sep 27, 2026", topic: "Informed Search Strategies", status: "Present" },
        { date: "Sep 25, 2026", topic: "Uninformed Search (BFS/DFS)", status: "Absent" },
      ],
    },
    {
      id: "att-6",
      course: "Technical Writing",
      code: "GED-201",
      present: 16,
      absent: 4,
      late: 1,
      percentage: 80,
      barColor: "green",
      instructor: "Ms. Tania Ahmed",
      history: [
        { date: "Oct 06, 2026", topic: "IEEE Citation Style", status: "Present" },
        { date: "Sep 29, 2026", topic: "Research Paper Structuring", status: "Present" },
        { date: "Sep 22, 2026", topic: "Abstract Drafting", status: "Late" },
        { date: "Sep 15, 2026", topic: "Literature Review Techniques", status: "Absent" },
      ],
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* 1. Header (Matching Figma Node 463-7156) */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Attendance Tracker
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
          Review your active attendance metrics and stats across all classes
        </p>
      </div>

      {/* 2. Top Summary Cards (4 Cards Grid) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        
        {/* Card 1: Overall Attendance with Circular Gauge (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs flex items-center gap-5">
          {/* Circular Progress Gauge */}
          <div className="relative w-22 h-22 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle
                cx="50"
                cy="50"
                r="38"
                className="stroke-slate-100"
                strokeWidth="7"
                fill="transparent"
              />
              {/* Progress Ring (86%) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#10B981"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 38}
                strokeDashoffset={2 * Math.PI * 38 * (1 - 0.86)}
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-black text-slate-900">
                86%
              </span>
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Overall Attendance
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              You have attended 122 out of 142 total lectures scheduled this
              term.
            </p>
          </div>
        </div>

        {/* Card 2: Classes Attended (lg:col-span-2 or 3) */}
        <div className="lg:col-span-2 sm:col-span-1 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            CLASSES ATTENDED
          </span>
          <div className="text-3xl font-black text-emerald-600 mt-1.5">
            122
          </div>
          <span className="text-xs font-medium text-slate-400 mt-1 block">
            Present
          </span>
        </div>

        {/* Card 3: Classes Absent */}
        <div className="lg:col-span-3 sm:col-span-1 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            CLASSES ABSENT
          </span>
          <div className="text-3xl font-black text-red-500 mt-1.5">
            16
          </div>
          <span className="text-xs font-medium text-slate-400 mt-1 block">
            Excused or unexcused
          </span>
        </div>

        {/* Card 4: Late Arrivals */}
        <div className="lg:col-span-2 sm:col-span-1 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            LATE ARRIVALS
          </span>
          <div className="text-3xl font-black text-amber-500 mt-1.5">
            4
          </div>
          <span className="text-xs font-medium text-slate-400 mt-1 block">
            Tardy mark
          </span>
        </div>

      </div>

      {/* 3. Main Attendance Table (Exact Figma Design Table) */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  COURSE
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  PRESENT
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  ABSENT
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  LATE
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-64">
                  ATTENDANCE BAR
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">
                  PERCENTAGE
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {coursesAttendance.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setSelectedCourse(item)}
                  className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
                >
                  {/* Course Name & Code */}
                  <td className="py-4 px-6 align-middle">
                    <div className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.course}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">
                      {item.code}
                    </div>
                  </td>

                  {/* Present Count */}
                  <td className="py-4 px-6 align-middle text-center">
                    <span className="text-xs font-semibold text-slate-800">
                      {item.present}
                    </span>
                  </td>

                  {/* Absent Count */}
                  <td className="py-4 px-6 align-middle text-center">
                    <span className="text-xs font-semibold text-slate-800">
                      {item.absent}
                    </span>
                  </td>

                  {/* Late Count */}
                  <td className="py-4 px-6 align-middle text-center">
                    <span className="text-xs font-semibold text-slate-800">
                      {item.late}
                    </span>
                  </td>

                  {/* Attendance Bar */}
                  <td className="py-4 px-6 align-middle">
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.barColor === "green"
                            ? "bg-[#10B981]"
                            : "bg-[#D97706]"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </td>

                  {/* Percentage */}
                  <td className="py-4 px-6 align-middle text-right">
                    <span
                      className={`text-xs font-bold ${
                        item.barColor === "green"
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}
                    >
                      {item.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Minimum Attendance Requirement Alert */}
      <div className="w-full bg-blue-50/50 rounded-2xl border border-blue-100 p-5 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-600">
          <span className="font-bold text-slate-800">
            University Attendance Requirement:
          </span>{" "}
          Students must maintain a minimum of{" "}
          <strong className="text-slate-900">75% attendance</strong> in each
          registered course to qualify for the final semester examination.
          Courses below 80% are highlighted in amber.
        </div>
      </div>

      {/* 5. Course Attendance Modal (when clicking a row) */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#D5A754] uppercase tracking-wider">
                {selectedCourse.code} · Attendance Breakdown
              </span>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-black text-slate-900">
                {selectedCourse.course}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Instructor: {selectedCourse.instructor}
              </p>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-4 gap-2.5 mt-4 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  Percentage
                </span>
                <span
                  className={`text-base font-black mt-0.5 block ${
                    selectedCourse.barColor === "green"
                      ? "text-emerald-600"
                      : "text-amber-600"
                  }`}
                >
                  {selectedCourse.percentage}%
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  Present
                </span>
                <span className="text-base font-black text-slate-800 mt-0.5 block">
                  {selectedCourse.present}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  Absent
                </span>
                <span className="text-base font-black text-red-500 mt-0.5 block">
                  {selectedCourse.absent}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                  Late
                </span>
                <span className="text-base font-black text-amber-500 mt-0.5 block">
                  {selectedCourse.late}
                </span>
              </div>
            </div>

            {/* Recent Class Logs */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-800 mb-2">
                Recent Lecture Attendance Logs
              </h4>
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden text-xs">
                {selectedCourse.history?.map((log, idx) => (
                  <div
                    key={idx}
                    className="p-3 flex items-center justify-between bg-white hover:bg-slate-50 transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-800">
                        {log.topic}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {log.date}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        log.status === "Present"
                          ? "bg-emerald-50 text-emerald-700"
                          : log.status === "Absent"
                          ? "bg-red-50 text-red-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0B1E36] text-white hover:bg-[#162D4E] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
