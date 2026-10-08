"use client";

import React, { useState } from "react";
import {
  Plus,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  Users,
  Search,
  Filter,
  Download,
  ExternalLink,
} from "lucide-react";
import { TeacherAssignment } from "@/components/dashboard/types";
import CreateAssignmentModal from "./CreateAssignmentModal";

export default function TeacherAssignmentsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const [assignments, setAssignments] = useState<TeacherAssignment[]>([
    {
      id: "asg-1",
      title: "Assignment 04: Normalization and BCNF Decomposition",
      course: "Database Management System",
      courseCode: "CSE-305",
      dueDate: "Oct 25, 2026",
      totalMarks: 20,
      submittedCount: 41,
      totalStudents: 45,
      status: "active",
      allowedFormats: [".PDF", ".ZIP"],
      instructions:
        "Please solve the 5 normalization problems attached. Your solution must include functional dependency step tracing, minimal keys proof, and step-by-step 3NF synthesis.",
    },
    {
      id: "asg-2",
      title: "Assignment 03: UML Class Diagram & Architecture Specs",
      course: "Software Engineering",
      courseCode: "CSE-311",
      dueDate: "Oct 18, 2026",
      totalMarks: 25,
      submittedCount: 35,
      totalStudents: 38,
      status: "urgent",
      allowedFormats: [".PDF"],
      instructions:
        "Develop high-fidelity class and sequence diagrams for the university library automated cataloging subsystem.",
    },
    {
      id: "asg-3",
      title: "Programming Task: Red-Black Tree Balancing Implementation",
      course: "Data Structures & Algorithms",
      courseCode: "CSE-201",
      dueDate: "Nov 02, 2026",
      totalMarks: 30,
      submittedCount: 18,
      totalStudents: 52,
      status: "active",
      allowedFormats: [".ZIP", ".CPP"],
      instructions:
        "Complete node left-rotate and right-rotate procedures with full unit test coverage.",
    },
    {
      id: "asg-4",
      title: "Assignment 02: Relational Algebra Query Optimization",
      course: "Database Management System",
      courseCode: "CSE-305",
      dueDate: "Oct 05, 2026",
      totalMarks: 15,
      submittedCount: 45,
      totalStudents: 45,
      status: "graded",
      allowedFormats: [".PDF"],
      instructions:
        "Evaluated query trees and cost projections. All papers have been scored and published.",
    },
  ]);

  const handleAssignmentCreated = (newAssignment: TeacherAssignment) => {
    setAssignments((prev) => [newAssignment, ...prev]);
  };

  const filteredAssignments = assignments.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCourse =
      selectedCourse === "all" || item.courseCode === selectedCourse;

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && (item.status === "active" || item.status === "urgent")) ||
      (statusFilter === "urgent" && item.status === "urgent") ||
      (statusFilter === "graded" && item.status === "graded");

    return matchesSearch && matchesCourse && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* 1. Page Header with "+ Create Assignment" button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Assignments & Coursework
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Monitor student submissions, evaluate deliverables, and configure deadlines
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition active:scale-95 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          Create Assignment
        </button>
      </div>

      {/* 2. Stat Overview Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <span className="text-[11px] font-medium text-slate-500">Total Assignments</span>
          <div className="mt-1 text-2xl font-extrabold text-slate-900">
            {assignments.length}
          </div>
          <span className="text-[10px] text-slate-400">Across 4 courses</span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <span className="text-[11px] font-medium text-slate-500">Active Deadlines</span>
          <div className="mt-1 text-2xl font-extrabold text-blue-600">
            {assignments.filter((a) => a.status !== "graded").length}
          </div>
          <span className="text-[10px] text-slate-400">Open for submissions</span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <span className="text-[11px] font-medium text-slate-500">Total Submitted</span>
          <div className="mt-1 text-2xl font-extrabold text-emerald-600">
            {assignments.reduce((sum, a) => sum + a.submittedCount, 0)}
          </div>
          <span className="text-[10px] text-slate-400">Received deliverables</span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <span className="text-[11px] font-medium text-slate-500">Avg Submission Rate</span>
          <div className="mt-1 text-2xl font-extrabold text-[#C69234]">
            {Math.round(
              (assignments.reduce((sum, a) => sum + a.submittedCount, 0) /
                assignments.reduce((sum, a) => sum + a.totalStudents, 0)) *
                100
            )}%
          </div>
          <span className="text-[10px] text-slate-400">Class engagement</span>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search assignments by title or code..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#C69234]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-hidden"
          >
            <option value="all">All Courses</option>
            <option value="CSE-305">CSE-305 (DBMS)</option>
            <option value="CSE-311">CSE-311 (Software Eng)</option>
            <option value="CSE-201">CSE-201 (Data Structures)</option>
            <option value="CSE-315">CSE-315 (Comp Arch)</option>
          </select>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {["all", "active", "urgent", "graded"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs capitalize font-semibold transition cursor-pointer ${
                  statusFilter === tab
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Assignments Grid List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAssignments.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <FileText className="w-10 h-10 mx-auto text-slate-300 mb-2" />
            <p className="text-sm font-semibold text-slate-700">No assignments found</p>
            <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or click Create Assignment.</p>
          </div>
        ) : (
          filteredAssignments.map((assignment) => {
            const submissionPercent = Math.round(
              (assignment.submittedCount / assignment.totalStudents) * 100
            );

            return (
              <div
                key={assignment.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition duration-200 flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left: Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                      {assignment.courseCode} · {assignment.course}
                    </span>

                    {assignment.status === "urgent" && (
                      <span className="rounded-full bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-0.5 text-[11px] font-bold">
                        Due Soon
                      </span>
                    )}
                    {assignment.status === "active" && (
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-0.5 text-[11px] font-bold">
                        Accepting Submissions
                      </span>
                    )}
                    {assignment.status === "graded" && (
                      <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-0.5 text-[11px] font-bold">
                        Evaluated & Closed
                      </span>
                    )}

                    <span className="text-xs font-bold text-[#C69234]">
                      {assignment.totalMarks} Points
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {assignment.title}
                  </h3>

                  {assignment.instructions && (
                    <p className="text-xs text-slate-500 line-clamp-2 max-w-2xl">
                      {assignment.instructions}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Due: <strong className="text-slate-700">{assignment.dueDate}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      Formats: {assignment.allowedFormats.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Right: Submission progress & actions */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0 shrink-0">
                  {/* Progress Ring / Bar */}
                  <div className="w-full sm:w-44 md:w-36 lg:w-44 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Submissions</span>
                      <span className="font-bold text-slate-800">
                        {assignment.submittedCount}/{assignment.totalStudents} ({submissionPercent}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          submissionPercent >= 80 ? "bg-emerald-500" : "bg-[#C69234]"
                        }`}
                        style={{ width: `${submissionPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        alert(`Viewing all ${assignment.submittedCount} submissions for ${assignment.title}`)
                      }
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      Submissions ({assignment.submittedCount})
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        alert(`Downloading submissions archive for ${assignment.courseCode}`)
                      }
                      title="Download Submissions ZIP"
                      className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 5. Create Assignment Modal */}
      <CreateAssignmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAssignmentCreated={handleAssignmentCreated}
      />
    </div>
  );
}
