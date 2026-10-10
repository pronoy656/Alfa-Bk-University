"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Calendar, Clock, Award, FileQuestion } from "lucide-react";
import CreateQuizModal from "@/components/dashboard/teacher-dashboard/CreateQuizModal";
import { TeacherQuiz } from "@/components/dashboard/types";

export default function TeacherQuizzesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizzes, setQuizzes] = useState<TeacherQuiz[]>([
    {
      id: "q-1",
      title: "Quiz 01: Relational Algebra & SQL Basics",
      course: "Database Management (CSE-305)",
      date: "Oct 18, 2026",
      duration: "30 mins",
      totalMarks: 15,
      submissions: "42/45",
      status: "Scheduled",
    },
    {
      id: "q-2",
      title: "Mid-Term Assessment: Object-Oriented Modeling",
      course: "Software Engineering (CSE-311)",
      date: "Oct 22, 2026",
      duration: "45 mins",
      totalMarks: 25,
      submissions: "Upcoming",
      status: "Draft",
    },
    {
      id: "q-3",
      title: "Quiz 02: Binary Search Trees & AVL Balancing",
      course: "Data Structures & Algorithms (CSE-201)",
      date: "Oct 29, 2026",
      duration: "40 mins",
      totalMarks: 20,
      submissions: "Upcoming",
      status: "Scheduled",
    },
  ]);

  const handleQuizCreated = (newQuiz: TeacherQuiz) => {
    setQuizzes((prev) => [newQuiz, ...prev]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Quizzes & Online Assessments
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Manage automated multiple-choice tests, coding tasks, and timed exams
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition active:scale-95 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-3.5 w-3.5" />
          Create New Quiz
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                {quiz.course}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                  quiz.status === "Scheduled"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {quiz.status}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900">{quiz.title}</h3>

            <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-xs text-slate-600">
              <div>
                <span className="block text-[10px] text-slate-400">Date</span>
                <span className="font-semibold">{quiz.date}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400">Duration</span>
                <span className="font-semibold">{quiz.duration}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400">Marks</span>
                <span className="font-semibold">{quiz.totalMarks} pts</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-400">
                Submissions: <strong className="text-slate-700">{quiz.submissions}</strong>
              </span>
              <button
                type="button"
                className="font-bold text-[#0B1E36] hover:underline cursor-pointer"
              >
                Manage Questions →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Quiz Modal */}
      <CreateQuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onQuizCreated={handleQuizCreated}
      />
    </div>
  );
}
