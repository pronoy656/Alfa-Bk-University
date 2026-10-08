"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { TeacherCourse } from "@/components/dashboard/types";
import UploadLectureModal from "./UploadLectureModal";

interface TeacherCoursesListProps {
  onSelectCourse: (courseId: string) => void;
}

export default function TeacherCoursesList({
  onSelectCourse,
}: TeacherCoursesListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseForLecture, setSelectedCourseForLecture] = useState(
    "Database Management System (CSE-305)"
  );
  const courses: TeacherCourse[] = [
    {
      id: "cse-305",
      code: "CSE-305",
      credits: 3,
      title: "Database Management System",
      enrolled: 45,
      progress: 62,
      lastActive: "Today, 09:00 AM",
    },
    {
      id: "cse-311",
      code: "CSE-311",
      credits: 3,
      title: "Software Engineering",
      enrolled: 38,
      progress: 45,
      lastActive: "Yesterday",
    },
    {
      id: "cse-201",
      code: "CSE-201",
      credits: 4,
      title: "Data Structures",
      enrolled: 52,
      progress: 85,
      lastActive: "2 days ago",
    },
    {
      id: "cse-315",
      code: "CSE-315",
      credits: 3,
      title: "Computer Architecture",
      enrolled: 41,
      progress: 30,
      lastActive: "1 week ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            My Courses
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            4 active courses this semester · Fall 2026 Semester
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedCourseForLecture("Database Management System (CSE-305)");
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition active:scale-95 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Lecture
        </button>
      </div>

      {/* 2x2 Grid of Course Cards matching Figma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition duration-300 hover:border-slate-300 hover:shadow-xs cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Code Badge + Enrolled Count */}
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {course.code} · {course.credits} Credits
                </span>
                <span className="text-xs font-bold text-[#C69234]">
                  {course.enrolled} Students Enrolled
                </span>
              </div>

              {/* Course Title */}
              <h2 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                {course.title}
              </h2>

              {/* Progress Bar in Gold matching Figma */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Syllabus Progress</span>
                  <span className="font-bold text-slate-800">{course.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#C69234] transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Last active: {course.lastActive}</span>
              <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition">
                Manage Course →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Lecture Modal */}
      <UploadLectureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={selectedCourseForLecture}
      />
    </div>
  );
}
