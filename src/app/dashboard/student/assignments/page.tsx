"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, FileText, CheckCircle2, Upload, AlertCircle } from "lucide-react";
import { AssignmentItem } from "@/components/dashboard/types";

export default function StudentAssignmentsPage() {
  const [selectedAssignment, setSelectedAssignment] = useState<AssignmentItem | null>(null);

  const assignments: AssignmentItem[] = [
    {
      id: "asg-1",
      title: "Assignment 04: Normalization and Functional Dependencies",
      course: "Database Management (CSE-305)",
      due: "Due Oct 25, 2026, 11:59 PM",
      status: "3 Days Remaining",
      statusType: "urgent",
    },
    {
      id: "asg-2",
      title: "UML Architecture & Class Diagrams Specification",
      course: "Software Engineering (CSE-310)",
      due: "Due Oct 30, 2026, 11:59 PM",
      status: "Open for Submission",
      statusType: "pending",
    },
    {
      id: "asg-3",
      title: "Packet Trace Routing & Wireshark Lab Analysis",
      course: "Computer Networking (CSE-320)",
      due: "Submitted on Oct 14",
      status: "Submitted (Graded: 19/20)",
      statusType: "completed",
    },
    {
      id: "asg-4",
      title: "A* Algorithm Graph Search Implementation",
      course: "Artificial Intelligence (CSE-401)",
      due: "Due Nov 05, 2026, 05:00 PM",
      status: "Upcoming",
      statusType: "pending",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            Assignments & Submissions
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            Track coursework deadlines, submit homework solutions, and review evaluation feedback
          </p>
        </div>
        <Link
          href="/dashboard/student"
          className="text-xs font-bold text-[#C69234] hover:underline self-start sm:self-auto"
        >
          ← Back to Overview
        </Link>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((a) => (
          <div
            key={a.id}
            className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition flex flex-col md:flex-row md:items-center justify-between gap-5"
          >
            <div className="space-y-2 flex-1">
              <span className="text-[11px] font-bold text-[#C69234] uppercase tracking-wider block">
                {a.course}
              </span>
              <h2 className="text-base font-bold text-slate-900 leading-snug">
                {a.title}
              </h2>
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{a.due}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  a.statusType === "urgent"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : a.statusType === "completed"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {a.status}
              </span>

              {a.statusType === "completed" ? (
                <button
                  type="button"
                  onClick={() => alert(`Reviewing submission for: ${a.title}`)}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition cursor-pointer"
                >
                  View Feedback
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedAssignment(a)}
                  className="px-5 py-2 rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white text-xs font-bold transition active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Submit Task</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Submission Dialog Mock */}
      {selectedAssignment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5">
            <div>
              <span className="text-[10px] font-bold text-[#C69234] uppercase tracking-wider">
                {selectedAssignment.course}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Submit: {selectedAssignment.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Upload your solution file (.pdf or .zip).
              </p>
            </div>

            <div className="border-2 border-dashed border-slate-200 hover:border-[#C69234] rounded-2xl p-6 text-center cursor-pointer bg-slate-50/50">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">
                Click or drag & drop files here to upload
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Maximum size 25MB</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedAssignment(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("Solution submitted successfully!");
                  setSelectedAssignment(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold cursor-pointer"
              >
                Upload & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
