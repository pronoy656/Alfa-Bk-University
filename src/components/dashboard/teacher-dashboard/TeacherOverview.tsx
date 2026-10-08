"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Users,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  PlusCircle,
  UploadCloud,
  CheckSquare,
  Award,
} from "lucide-react";
import { TeacherRecentActivity } from "@/components/dashboard/types";
import CreateAssignmentModal from "./CreateAssignmentModal";
import UploadLectureModal from "./UploadLectureModal";

interface TeacherOverviewProps {
  onNavigateTab: (tabId: string) => void;
}

export default function TeacherOverview({ onNavigateTab }: TeacherOverviewProps) {
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [isLectureModalOpen, setIsLectureModalOpen] = useState(false);
  const stats = [
    {
      label: "Total Courses",
      value: "4",
      subtext: "All semesters",
    },
    {
      label: "Total Students",
      value: "156",
      subtext: "Across 4 batches",
    },
    {
      label: "Pending Assignments",
      value: "12",
      subtext: "Unsubmitted by students",
    },
    {
      label: "Pending Grading",
      value: "8",
      subtext: "Needs evaluation",
    },
  ];

  const todayClasses = [
    {
      id: "cls-1",
      title: "Database Management",
      codeRoom: "CSE-305 · Room 302",
      time: "09:00 AM",
    },
    {
      id: "cls-2",
      title: "Software Engineering",
      codeRoom: "CSE-311 · Room 204",
      time: "11:00 AM",
    },
    {
      id: "cls-3",
      title: "Computer Architecture",
      codeRoom: "CSE-315 · Lab 3",
      time: "02:00 PM",
    },
  ];

  const recentActivities: TeacherRecentActivity[] = [
    {
      id: "act-1",
      title: "Shahriar Kabir submitted ER Diagram Assignment",
      timeAgo: "10 mins ago",
      isHighlight: true,
    },
    {
      id: "act-2",
      title: "Tania Ahmed posted a comment in Software Eng.",
      timeAgo: "45 mins ago",
    },
    {
      id: "act-3",
      title: "You scheduled an upcoming Quiz on CSE-311",
      timeAgo: "2 hours ago",
    },
    {
      id: "act-4",
      title: "System Auto-Attendance file processed successfully",
      timeAgo: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. HERO BANNER MATCHING FIGMA */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0B1E36] p-6 sm:p-8 text-white shadow-xs">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Good Morning, Dr. Rahman 👋
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Department of Computer Science & Engineering
            </p>
          </div>
          <div className="self-start sm:self-auto">
            <span className="rounded-full bg-[#C69234] px-3.5 py-1 text-xs font-semibold text-white shadow-2xs">
              Fall 2026 · Faculty
            </span>
          </div>
        </div>

        {/* Decorative ambient background */}
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#C69234]/15 blur-2xl" />
      </div>

      {/* 2. FOUR STAT CARDS ROW MATCHING FIGMA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition hover:shadow-xs"
          >
            <span className="text-xs font-medium text-slate-500">{st.label}</span>
            <div className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              {st.value}
            </div>
            <span className="mt-1 block text-[11px] text-slate-400">{st.subtext}</span>
          </div>
        ))}
      </div>

      {/* 3. TWO COLUMN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (lg:col-span-8): Today's Classes + Quick Actions */}
        <div className="lg:col-span-8 space-y-6">
          {/* Today's Classes Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">Today&apos;s Classes</h3>

            <div className="mt-4 divide-y divide-slate-100">
              {todayClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{cls.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{cls.codeRoom}</p>
                  </div>
                  <span className="text-xs font-bold text-[#C69234] shrink-0">
                    {cls.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">Quick Actions</h3>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setIsAssignmentModalOpen(true)}
                className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition active:scale-95 cursor-pointer text-center"
              >
                Create Assignment
              </button>

              <button
                type="button"
                onClick={() => setIsLectureModalOpen(true)}
                className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition active:scale-95 cursor-pointer text-center"
              >
                Upload Lecture
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("attendance")}
                className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition active:scale-95 cursor-pointer text-center"
              >
                Take Attendance
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("grades")}
                className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-semibold text-white shadow-2xs transition active:scale-95 cursor-pointer text-center"
              >
                Enter Marks
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (lg:col-span-4): Recent Activity Card */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>

            <div className="mt-5 space-y-5">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                      act.isHighlight ? "bg-[#C69234]" : "bg-slate-300"
                    }`}
                  />
                  <div>
                    <p className="text-xs font-medium text-slate-800 leading-snug">
                      {act.title}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      {act.timeAgo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Modals */}
      <CreateAssignmentModal
        isOpen={isAssignmentModalOpen}
        onClose={() => setIsAssignmentModalOpen(false)}
      />
      <UploadLectureModal
        isOpen={isLectureModalOpen}
        onClose={() => setIsLectureModalOpen(false)}
      />
    </div>
  );
}
