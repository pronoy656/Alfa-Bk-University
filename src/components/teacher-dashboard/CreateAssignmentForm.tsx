"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

interface CreateAssignmentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function CreateAssignmentForm({
  onSuccess,
  onCancel,
}: CreateAssignmentFormProps) {
  const [course, setCourse] = useState(
    "Database Management System (CSE-305)"
  );
  const [title, setTitle] = useState(
    "Assignment 04: Normalization and Functional Dependencies Practice"
  );
  const [instructions, setInstructions] = useState(
    "Please solve the 5 normalization problems attached. Your solution must include: functional dependency step tracing, minimal keys proof, and step-by-step 3NF synthesis."
  );
  const [deadline, setDeadline] = useState("Oct 15, 2026, 11:59 PM");
  const [totalMarks, setTotalMarks] = useState("20");
  const [allowLate, setAllowLate] = useState(true);

  const [formatPdf, setFormatPdf] = useState(true);
  const [formatDocx, setFormatDocx] = useState(false);
  const [formatZip, setFormatZip] = useState(false);

  const [published, setPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPublished(true);
    setTimeout(() => {
      onSuccess?.();
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Create New Assignment
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Set grades, formats, deadlines, and requirements
        </p>
      </div>

      {/* Form Card matching Figma Screenshot 5 */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
        {published ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Assignment Published Successfully!
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Enrolled students of {course} have received notifications.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Assign to Course */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Assign to Course
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
              >
                <option>Database Management System (CSE-305)</option>
                <option>Software Engineering (CSE-311)</option>
                <option>Data Structures (CSE-201)</option>
                <option>Computer Architecture (CSE-315)</option>
              </select>
            </div>

            {/* Assignment Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Assignment Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter assignment title..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Detailed Instructions */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Detailed Instructions (Supports Markdown/Plaintext)
              </label>
              <textarea
                rows={4}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Write instructions, grading rubrics, questions..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Deadline Date & Total Marks Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Deadline Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
                  />
                  <Calendar className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Marks
                </label>
                <input
                  type="number"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Submission Format Allowed Checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Submission Format Allowed
              </label>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formatPdf}
                    onChange={(e) => setFormatPdf(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#C69234]"
                  />
                  <span>PDF Document</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formatDocx}
                    onChange={(e) => setFormatDocx(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#C69234]"
                  />
                  <span>Word Doc (DOCX)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formatZip}
                    onChange={(e) => setFormatZip(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#C69234]"
                  />
                  <span>ZIP/Source Code File</span>
                </label>
              </div>
            </div>

            {/* Allow Late Submissions Toggle Switch matching Figma */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <span className="block text-xs font-semibold text-slate-800">
                  Allow Late Submissions
                </span>
                <span className="text-[11px] text-slate-400">
                  Enables submission past deadline; marked late on grader panel
                </span>
              </div>

              <button
                type="button"
                onClick={() => setAllowLate(!allowLate)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  allowLate ? "bg-[#C69234]" : "bg-slate-200"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    allowLate ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-6 py-2.5 text-xs font-bold text-white shadow-sm transition active:scale-95 cursor-pointer"
              >
                Publish Assignment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
