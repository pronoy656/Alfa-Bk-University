"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  PlayCircle,
  Plus,
  Trash2,
  Edit2,
  FileText,
  Video,
} from "lucide-react";
import { LectureModule, LectureItem } from "@/components/dashboard/types";
import UploadLectureModal from "./UploadLectureModal";

interface CourseDetailModulesProps {
  onAddLectureClick?: () => void;
  onBackToCourses: () => void;
}

export default function CourseDetailModules({
  onAddLectureClick,
  onBackToCourses,
}: CourseDetailModulesProps) {
  const [activeTab, setActiveTab] = useState("Lectures");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "mod-1": true,
    "mod-2": false,
  });

  const tabs = [
    "Overview",
    "Lectures",
    "Materials",
    "Assignments",
    "Quizzes",
    "Students",
    "Attendance",
    "Grades",
  ];

  const initialModules: LectureModule[] = [
    {
      id: "mod-1",
      title: "Module 01: Introduction to Relational Databases",
      lecturesCount: 3,
      totalDuration: "120 mins total",
      lectures: [
        {
          id: "lec-1-1",
          title: "Lecture 1.1: What is a Database?",
          duration: "45 mins",
          type: "Video + PPT",
        },
        {
          id: "lec-1-2",
          title: "Lecture 1.2: Relational Model Concepts",
          duration: "40 mins",
          type: "PDF Notes",
        },
        {
          id: "lec-1-3",
          title: "Lecture 1.3: Introduction to SQL Queries",
          duration: "35 mins",
          type: "Video Only",
        },
      ],
    },
    {
      id: "mod-2",
      title: "Module 02: Advanced SQL & Schema Design",
      lecturesCount: 4,
      totalDuration: "Collapsed",
      collapsed: true,
      lectures: [
        {
          id: "lec-2-1",
          title: "Lecture 2.1: Complex Joins and Aggregations",
          duration: "50 mins",
          type: "Video + Code",
        },
        {
          id: "lec-2-2",
          title: "Lecture 2.2: Subqueries and CTEs",
          duration: "45 mins",
          type: "Video + Practice",
        },
        {
          id: "lec-2-3",
          title: "Lecture 2.3: Indexing and Query Performance",
          duration: "40 mins",
          type: "PDF Notes",
        },
        {
          id: "lec-2-4",
          title: "Lecture 2.4: Normalization (1NF, 2NF, 3NF)",
          duration: "55 mins",
          type: "Video + Slides",
        },
      ],
    },
  ];

  const [modules, setModules] = useState<LectureModule[]>(initialModules);

  const handleLectureUploaded = (newLecture: LectureItem, moduleTitle: string) => {
    setModules((prev) =>
      prev.map((m) => {
        if (m.title.toLowerCase().includes("01") || m.title === moduleTitle) {
          return {
            ...m,
            lecturesCount: m.lecturesCount + 1,
            lectures: [...m.lectures, newLecture],
          };
        }
        return m;
      })
    );
    setExpandedModules((prev) => ({ ...prev, "mod-1": true }));
  };

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP COURSE BANNER MATCHING FIGMA */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0B1E36] p-6 sm:p-7 text-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onBackToCourses}
                className="text-xs text-slate-300 hover:text-white transition cursor-pointer mb-1 inline-flex items-center gap-1"
              >
                ← Back to Courses
              </button>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Database Management System
            </h1>
            <p className="mt-1 text-xs text-slate-300">
              Fall 2026 Semester · 45 Enrolled Students
            </p>
          </div>
          <div className="self-start sm:self-auto">
            <span className="rounded-full bg-[#C69234] px-3.5 py-1 text-xs font-semibold text-white shadow-2xs">
              CSE-305 · 3 Credits
            </span>
          </div>
        </div>
      </div>

      {/* 2. SECONDARY TAB NAVIGATION MATCHING FIGMA */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none text-xs sm:text-sm font-medium">
          {tabs.map((t) => {
            const isActive = activeTab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(t)}
                className={`pb-3 border-b-2 whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "border-[#C69234] text-[#C69234] font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. LECTURES HEADER & "+ Add Lecture" BUTTON */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Course Lectures & Modules
        </h2>
        <button
          type="button"
          onClick={() => {
            if (onAddLectureClick) {
              onAddLectureClick();
            } else {
              setIsUploadModalOpen(true);
            }
          }}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2 text-xs font-bold text-white shadow-2xs transition active:scale-95 cursor-pointer"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Lecture
        </button>
      </div>

      {/* 4. MODULES ACCORDION LIST MATCHING FIGMA */}
      <div className="space-y-4">
        {modules.map((mod) => {
          const isExpanded = !!expandedModules[mod.id];

          return (
            <div
              key={mod.id}
              className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition"
            >
              {/* Module Header Bar */}
              <button
                type="button"
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  )}
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {mod.title}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-normal">
                  {isExpanded
                    ? `${mod.lecturesCount} Lectures · ${mod.totalDuration}`
                    : `${mod.lecturesCount} Lectures · Collapsed`}
                </span>
              </button>

              {/* Expanded Lectures List */}
              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 space-y-2.5">
                  {mod.lectures.map((lec) => (
                    <div
                      key={lec.id}
                      className="flex items-center justify-between gap-3 rounded-xl bg-slate-50/80 p-3.5 border border-slate-100 hover:bg-slate-100/60 transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <PlayCircle className="h-4 w-4 text-slate-600 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">
                            {lec.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 shrink-0 hidden sm:inline">
                          {lec.duration} · {lec.type}
                        </span>
                      </div>

                      {/* Edit & Delete Action Buttons matching Figma */}
                      <div className="flex items-center gap-3 shrink-0 text-xs">
                        <button
                          type="button"
                          className="font-medium text-slate-500 hover:text-slate-800 transition cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="font-medium text-red-500 hover:text-red-700 transition cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Upload Lecture Modal */}
      <UploadLectureModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        defaultCourse="Database Management System (CSE-305)"
        onLectureUploaded={handleLectureUploaded}
      />
    </div>
  );
}
