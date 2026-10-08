"use client";

import React, { useState } from "react";
import { Download, ChevronDown, ChevronUp, Award, CheckCircle2, FileText } from "lucide-react";

interface CourseGrade {
  name: string;
  code: string;
  credit: number;
  marks: number;
  grade: string;
  gradePoint: string;
}

interface SemesterResult {
  id: string;
  semesterName: string;
  subtext: string;
  gpa?: string;
  isActive?: boolean;
  courses?: CourseGrade[];
}

export default function AcademicResultsView() {
  const [expandedSemesters, setExpandedSemesters] = useState<Record<string, boolean>>({
    "sem-7": true,
    "sem-8": false,
  });

  const toggleSemester = (id: string) => {
    setExpandedSemesters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sem7Courses: CourseGrade[] = [
    {
      name: "Object Oriented Programming (CSE-202)",
      code: "CSE-202",
      credit: 3.0,
      marks: 92,
      grade: "A+",
      gradePoint: "4.00",
    },
    {
      name: "Theory of Computation (CSE-301)",
      code: "CSE-301",
      credit: 3.0,
      marks: 84,
      grade: "A",
      gradePoint: "3.75",
    },
    {
      name: "Microprocessors & Interfacing (CSE-303)",
      code: "CSE-303",
      credit: 3.0,
      marks: 88,
      grade: "A+",
      gradePoint: "4.00",
    },
    {
      name: "Data Communication (CSE-309)",
      code: "CSE-309",
      credit: 3.0,
      marks: 78,
      grade: "A-",
      gradePoint: "3.50",
    },
    {
      name: "Discrete Mathematics (GED-103)",
      code: "GED-103",
      credit: 3.0,
      marks: 89,
      grade: "A+",
      gradePoint: "4.00",
    },
  ];

  const sem8Courses: CourseGrade[] = [
    {
      name: "Database Management System (CSE-305)",
      code: "CSE-305",
      credit: 3.0,
      marks: 94,
      grade: "In Progress",
      gradePoint: "Pending",
    },
    {
      name: "Software Engineering (CSE-310)",
      code: "CSE-310",
      credit: 3.0,
      marks: 88,
      grade: "In Progress",
      gradePoint: "Pending",
    },
    {
      name: "Computer Networking (CSE-320)",
      code: "CSE-320",
      credit: 3.0,
      marks: 85,
      grade: "In Progress",
      gradePoint: "Pending",
    },
    {
      name: "Artificial Intelligence (CSE-401)",
      code: "CSE-401",
      credit: 3.0,
      marks: 90,
      grade: "In Progress",
      gradePoint: "Pending",
    },
    {
      name: "Web Engineering & Design (CSE-315)",
      code: "CSE-315",
      credit: 3.0,
      marks: 91,
      grade: "In Progress",
      gradePoint: "Pending",
    },
    {
      name: "Undergraduate Thesis & Project (CSE-499)",
      code: "CSE-499",
      credit: 3.0,
      marks: 95,
      grade: "In Progress",
      gradePoint: "Pending",
    },
  ];

  const handleDownloadTranscript = () => {
    alert("Generating official Alfa BK University academic transcript PDF...");
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Header with Download Transcript Button (Matching Figma Image 1) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            Academic Results
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            Official grade sheet, GPAs and transcript downloader portal
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownloadTranscript}
          className="inline-flex items-center gap-2 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition active:scale-95 cursor-pointer self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Download Transcript</span>
        </button>
      </div>

      {/* 2. Top 3 Summary Stat Cards (Matching Figma Image 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Cumulative GPA (CGPA) */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
            CUMULATIVE GPA (CGPA)
          </span>
          <div className="mt-2 text-4xl font-black text-slate-900 tracking-tight">
            3.71
          </div>
          <span className="mt-2 block text-xs font-semibold text-emerald-600">
            Excellent Academic Standing
          </span>
        </div>

        {/* Completed Credits */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
            COMPLETED CREDITS
          </span>
          <div className="mt-2 text-4xl font-black text-slate-900 tracking-tight">
            118 / 140
          </div>
          <span className="mt-2 block text-xs font-medium text-slate-500">
            84% of required program completed
          </span>
        </div>

        {/* Current Semester GPA */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
            CURRENT SEMESTER GPA
          </span>
          <div className="mt-2 text-4xl font-black text-slate-900 tracking-tight">
            3.82
          </div>
          <span className="mt-2 block text-xs font-semibold text-[#C69234]">
            Based on 6 active courses
          </span>
        </div>
      </div>

      {/* 3. Semesters Accordion Section (Matching Figma Image 1) */}
      <div className="space-y-4 pt-1">
        {/* Semester 8 (Current Semester) */}
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => toggleSemester("sem-8")}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Semester 8 (Current Semester)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                6 Courses · 18 Credits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-100/80 text-amber-800 border border-amber-200/60 px-3 py-1 text-xs font-bold">
                Active Semester
              </span>
              {expandedSemesters["sem-8"] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </button>

          {expandedSemesters["sem-8"] && (
            <div className="border-t border-slate-100 px-5 pb-5 pt-3">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[11px] font-bold text-slate-400 border-b border-slate-100">
                      <th className="pb-3 uppercase tracking-wider">COURSE NAME</th>
                      <th className="pb-3 uppercase tracking-wider">CREDIT</th>
                      <th className="pb-3 uppercase tracking-wider">STATUS</th>
                      <th className="pb-3 uppercase tracking-wider text-right">ASSESSMENT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100/70">
                    {sem8Courses.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition">
                        <td className="py-3 font-semibold text-slate-800">{c.name}</td>
                        <td className="py-3 text-slate-500 font-medium">{c.credit.toFixed(1)}</td>
                        <td className="py-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                            Enrolled
                          </span>
                        </td>
                        <td className="py-3 text-right font-semibold text-slate-500">Continuous Assessment</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Semester 7 (Spring 2026) - Expanded by default matching Figma */}
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => toggleSemester("sem-7")}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Semester 7 (Spring 2026)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                5 Courses · 15 Credits completed
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">
                GPA: 3.82
              </span>
              {expandedSemesters["sem-7"] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </button>

          {expandedSemesters["sem-7"] && (
            <div className="border-t border-slate-100 p-5 pt-3">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[11px] font-bold text-slate-400 border-b border-slate-100">
                      <th className="pb-3 uppercase tracking-wider">COURSE NAME</th>
                      <th className="pb-3 uppercase tracking-wider">CREDIT</th>
                      <th className="pb-3 uppercase tracking-wider">MARKS</th>
                      <th className="pb-3 uppercase tracking-wider">GRADE</th>
                      <th className="pb-3 uppercase tracking-wider text-right">GRADE POINT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sem7Courses.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 font-bold text-slate-800">
                          {c.name}
                        </td>
                        <td className="py-3.5 text-slate-500 font-medium">
                          {c.credit.toFixed(1)}
                        </td>
                        <td className="py-3.5 text-slate-700 font-semibold">
                          {c.marks}
                        </td>
                        <td className="py-3.5">
                          <span className="font-bold text-emerald-600">
                            {c.grade}
                          </span>
                        </td>
                        <td className="py-3.5 text-right font-bold text-slate-800">
                          {c.gradePoint}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Semester 6 */}
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => toggleSemester("sem-6")}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Semester 6
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Completed · 15 Credits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">
                GPA: 3.68
              </span>
              {expandedSemesters["sem-6"] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </button>
        </div>

        {/* Semester 5 */}
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => toggleSemester("sem-5")}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Semester 5
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Completed · 15 Credits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">
                GPA: 3.68
              </span>
              {expandedSemesters["sem-5"] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </button>
        </div>

        {/* Semester 4 */}
        <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => toggleSemester("sem-4")}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Semester 4
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Completed · 15 Credits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">
                GPA: 3.68
              </span>
              {expandedSemesters["sem-4"] ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
