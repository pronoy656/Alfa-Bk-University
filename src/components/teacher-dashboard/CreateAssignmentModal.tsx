"use client";

import React, { useState } from "react";
import { CheckCircle2, UploadCloud, Calendar } from "lucide-react";
import { TeacherAssignment } from "@/components/dashboard/types";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

interface CreateAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssignmentCreated?: (assignment: TeacherAssignment) => void;
}

export default function CreateAssignmentModal({
  isOpen,
  onClose,
  onAssignmentCreated,
}: CreateAssignmentModalProps) {
  const [course, setCourse] = useState("Database Management System (CSE-305)");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("2026-10-25T23:59");
  const [totalMarks, setTotalMarks] = useState("25");
  const [allowLate, setAllowLate] = useState(true);

  const [formatPdf, setFormatPdf] = useState(true);
  const [formatDocx, setFormatDocx] = useState(false);
  const [formatZip, setFormatZip] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const codeMatch = course.match(/\((.*?)\)/);
    const courseCode = codeMatch ? codeMatch[1] : "CSE-305";

    const formats = [];
    if (formatPdf) formats.push(".PDF");
    if (formatDocx) formats.push(".DOCX");
    if (formatZip) formats.push(".ZIP");

    const newAssignment: TeacherAssignment = {
      id: `asg-${Date.now()}`,
      title: title || "New Assignment Coursework",
      course: course.replace(/\s*\(.*?\)/, ""),
      courseCode: courseCode,
      dueDate: new Date(deadline).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      totalMarks: Number(totalMarks) || 20,
      submittedCount: 0,
      totalStudents: 45,
      status: "active",
      allowedFormats: formats.length > 0 ? formats : [".PDF"],
    };

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onAssignmentCreated) {
        onAssignmentCreated(newAssignment);
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
      badge="Assignment Builder"
      badgeColor="gold"
      title="Create New Assignment"
      subtitle="Distribute homework, case studies, or programming projects to enrolled students"
      maxWidth="2xl"
    >
      {success ? (
        <div className="py-12 text-center animate-in zoom-in-95 duration-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Assignment Published!
          </h4>
          <p className="mt-1.5 text-xs text-slate-500 max-w-md mx-auto">
            Your assignment deliverable has been scheduled for students enrolled in {course}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Course Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Target Course <span className="text-red-500">*</span>
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
            >
              <option value="Database Management System (CSE-305)">Database Management System (CSE-305)</option>
              <option value="Software Engineering & Design (CSE-310)">Software Engineering & Design (CSE-310)</option>
              <option value="Distributed Cloud Architectures (CSE-440)">Distributed Cloud Architectures (CSE-440)</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Assignment Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Assignment 04: Normalization and BCNF Decomposition"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Task Instructions & Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              required
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Provide complete submission guidelines, requirements, grading rubrics, and references..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden resize-none"
            />
          </div>

          {/* Deadline & Marks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Due Date & Time <span className="text-red-500">*</span></span>
              </label>
              <input
                type="datetime-local"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Total Assessment Marks <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min="5"
                max="100"
                required
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>

          {/* File Attachments */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Attach Assignment Problem Sheet (PDF/ZIP)
            </label>
            <div className="border-2 border-dashed border-slate-200 hover:border-[#C69234] rounded-2xl p-5 text-center cursor-pointer bg-slate-50/60 transition group">
              <UploadCloud className="w-7 h-7 text-slate-400 group-hover:text-[#C69234] mx-auto mb-1.5 transition" />
              <p className="text-xs text-slate-600 font-medium">
                Click or drag questions PDF file here
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Maximum file size: 50MB</p>
            </div>
          </div>

          {/* Allowed Submissions and Late Policy */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-3">
            <label className="block text-xs font-bold text-slate-700">
              Accepted Submission Formats
            </label>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formatPdf}
                  onChange={(e) => setFormatPdf(e.target.checked)}
                  className="rounded text-[#C69234] focus:ring-[#C69234]"
                />
                <span>PDF Document (.pdf)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formatDocx}
                  onChange={(e) => setFormatDocx(e.target.checked)}
                  className="rounded text-[#C69234] focus:ring-[#C69234]"
                />
                <span>Word Document (.docx)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formatZip}
                  onChange={(e) => setFormatZip(e.target.checked)}
                  className="rounded text-[#C69234] focus:ring-[#C69234]"
                />
                <span>Archive (.zip / .tar)</span>
              </label>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-800">
                <input
                  type="checkbox"
                  checked={allowLate}
                  onChange={(e) => setAllowLate(e.target.checked)}
                  className="rounded text-[#C69234] focus:ring-[#C69234]"
                />
                <span>Allow Late Submissions (marks penalized by 10% per day)</span>
              </label>
            </div>
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
              Publish Assignment
            </DashboardButton>
          </div>
        </form>
      )}
    </DashboardModal>
  );
}
