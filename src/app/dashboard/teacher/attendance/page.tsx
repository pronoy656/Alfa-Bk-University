"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, Clock, Calendar, Users, Filter } from "lucide-react";

export default function TeacherAttendancePage() {
  const [selectedCourse, setSelectedCourse] = useState("Database Management (CSE-305)");
  const [selectedSession, setSelectedSession] = useState("Today — Oct 8, 2026 (09:00 AM)");

  const students = [
    { id: "STU-0451", name: "Shahriar Kabir", roll: "2024-0451", status: "present" },
    { id: "STU-0452", name: "Tania Ahmed", roll: "2024-0452", status: "present" },
    { id: "STU-0453", name: "Marko Petrovic", roll: "2024-0453", status: "late" },
    { id: "STU-0454", name: "Elena Ivanova", roll: "2024-0454", status: "present" },
    { id: "STU-0455", name: "Nikola Jovanovic", roll: "2024-0455", status: "absent" },
    { id: "STU-0456", name: "Sara Milic", roll: "2024-0456", status: "present" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Attendance Log & Roster
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Record lecture presence, track leaves, and review semester eligibility
          </p>
        </div>
        <button
          type="button"
          onClick={() => alert("Attendance submitted and synced with Registrar.")}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition cursor-pointer self-start sm:self-auto"
        >
          Save Attendance
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs flex flex-col sm:flex-row items-center gap-3">
        <div className="w-full sm:w-1/2">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
            Course Section
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
          >
            <option>Database Management (CSE-305)</option>
            <option>Software Engineering (CSE-311)</option>
            <option>Data Structures (CSE-201)</option>
            <option>Computer Architecture (CSE-315)</option>
          </select>
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
            Session Date & Time
          </label>
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
          >
            <option>Today — Oct 8, 2026 (09:00 AM)</option>
            <option>Oct 6, 2026 (09:00 AM)</option>
            <option>Oct 1, 2026 (09:00 AM)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3.5 px-4">Student Name</th>
              <th className="py-3.5 px-4">Roll ID</th>
              <th className="py-3.5 px-4">Attendance Status</th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((st) => (
              <tr key={st.id} className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-bold text-slate-900">{st.name}</td>
                <td className="py-3 px-4 text-slate-500">{st.roll}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      st.status === "present"
                        ? "bg-emerald-50 text-emerald-700"
                        : st.status === "late"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {st.status.toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    className="font-bold text-[#0B1E36] hover:underline cursor-pointer"
                  >
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
