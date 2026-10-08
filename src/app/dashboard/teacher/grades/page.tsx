"use client";

import React, { useState } from "react";
import { TrendingUp, Download, Check, Save } from "lucide-react";

export default function TeacherGradesPage() {
  const [selectedCourse, setSelectedCourse] = useState("Database Management (CSE-305)");

  const gradeRows = [
    { id: "1", name: "Shahriar Kabir", roll: "2024-0451", quiz: 14, midterm: 27, final: 42, total: 83, grade: "A" },
    { id: "2", name: "Tania Ahmed", roll: "2024-0452", quiz: 15, midterm: 29, final: 45, total: 89, grade: "A+" },
    { id: "3", name: "Marko Petrovic", roll: "2024-0453", quiz: 11, midterm: 22, final: 38, total: 71, grade: "B" },
    { id: "4", name: "Elena Ivanova", roll: "2024-0454", quiz: 13, midterm: 26, final: 40, total: 79, grade: "B+" },
    { id: "5", name: "Nikola Jovanovic", roll: "2024-0455", quiz: 9, midterm: 18, final: 32, total: 59, grade: "C" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Gradebook & Evaluation
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Enter marks, calculate GPA weights, and publish official grades
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => alert("Grades exported as CSV.")}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={() => alert("Grades published successfully.")}
            className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2 text-xs font-bold text-white shadow-2xs transition cursor-pointer"
          >
            Submit Final Grades
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900">
            {selectedCourse} — Continuous Assessment
          </span>
          <span className="text-xs text-slate-400">Total Enrolled: 45 Students</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Roll ID</th>
              <th className="py-3 px-4 text-center">Quiz (15)</th>
              <th className="py-3 px-4 text-center">Midterm (30)</th>
              <th className="py-3 px-4 text-center">Final (50)</th>
              <th className="py-3 px-4 text-center">Total (100)</th>
              <th className="py-3 px-4 text-center">Letter Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {gradeRows.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-bold text-slate-900">{r.name}</td>
                <td className="py-3 px-4 text-slate-500">{r.roll}</td>
                <td className="py-3 px-4 text-center font-semibold">{r.quiz}</td>
                <td className="py-3 px-4 text-center font-semibold">{r.midterm}</td>
                <td className="py-3 px-4 text-center font-semibold">{r.final}</td>
                <td className="py-3 px-4 text-center font-extrabold text-[#0B1E36]">
                  {r.total}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                    {r.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
