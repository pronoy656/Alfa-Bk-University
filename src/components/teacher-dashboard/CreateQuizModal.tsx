"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Calendar, FileQuestion } from "lucide-react";
import { TeacherQuiz } from "@/components/dashboard/types";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuizCreated?: (quiz: TeacherQuiz) => void;
}

export default function CreateQuizModal({
  isOpen,
  onClose,
  onQuizCreated,
}: CreateQuizModalProps) {
  const [course, setCourse] = useState("Database Management (CSE-305)");
  const [title, setTitle] = useState("");
  const [quizType, setQuizType] = useState("Multiple Choice (MCQ)");
  const [totalQuestions, setTotalQuestions] = useState("15");
  const [totalMarks, setTotalMarks] = useState("15");
  const [duration, setDuration] = useState("30 mins");
  const [date, setDate] = useState("2026-10-28T10:00");
  const [instructions, setInstructions] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const newQuiz: TeacherQuiz = {
      id: `q-${Date.now()}`,
      title: title || "New Academic Quiz",
      course: course,
      date: formattedDate,
      duration: duration.includes("min") ? duration : `${duration} mins`,
      totalMarks: Number(totalMarks) || 15,
      submissions: "0/45",
      status: "Scheduled",
      quizType: quizType,
      instructions: instructions,
    };

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onQuizCreated) {
        onQuizCreated(newQuiz);
      }
      setTimeout(() => {
        setSuccess(false);
        setTitle("");
        setInstructions("");
        onClose();
      }, 1200);
    }, 600);
  };

  return (
    <DashboardModal
      isOpen={isOpen}
      onClose={onClose}
      badge="Assessment Management"
      badgeColor="gold"
      title="Create New Online Quiz"
      subtitle="Publish timed multiple-choice assessments with automated grading"
      maxWidth="2xl"
    >
      {success ? (
        <div className="py-12 text-center animate-in zoom-in-95 duration-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Quiz Published Successfully!
          </h4>
          <p className="mt-1.5 text-xs text-slate-500 max-w-md mx-auto">
            The quiz schedule has been added for students enrolled in {course}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Course & Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Course <span className="text-red-500">*</span>
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              >
                <option value="Database Management (CSE-305)">Database Management (CSE-305)</option>
                <option value="Software Engineering (CSE-310)">Software Engineering (CSE-310)</option>
                <option value="Cloud Architecture (CSE-440)">Cloud Architecture (CSE-440)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Quiz Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Quiz 03: Transaction ACID Guarantees"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Row 2: Format & Question Count */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Format
              </label>
              <select
                value={quizType}
                onChange={(e) => setQuizType(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              >
                <option value="Multiple Choice (MCQ)">Multiple Choice (MCQ)</option>
                <option value="Short Answer">Short Answer</option>
                <option value="Code Snippet Challenge">Code Snippet Challenge</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Questions Count
              </label>
              <input
                type="number"
                min="5"
                max="50"
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Total Marks
              </label>
              <input
                type="number"
                min="5"
                max="100"
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Row 3: Duration & Scheduled Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Timer Duration</span>
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              >
                <option value="15 mins">15 Minutes</option>
                <option value="20 mins">20 Minutes</option>
                <option value="30 mins">30 Minutes</option>
                <option value="45 mins">45 Minutes</option>
                <option value="60 mins">60 Minutes</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Quiz Open Date & Time</span>
              </label>
              <input
                type="datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Quiz Instructions for Students
            </label>
            <textarea
              rows={3}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Ensure a stable internet connection. No negative marking. You will have 15 minutes once started..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <DashboardButton
              type="button"
              variant="secondary"
              size="sm"
              onClick={onClose}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              type="submit"
              variant="gold"
              size="sm"
              loading={submitting}
            >
              Schedule Quiz
            </DashboardButton>
          </div>
        </form>
      )}
    </DashboardModal>
  );
}
