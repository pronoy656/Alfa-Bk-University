"use client";

import React, { useState } from "react";
import { CheckCircle2, UploadCloud, Video, FileText } from "lucide-react";
import { LectureItem } from "@/components/dashboard/types";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

interface UploadLectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  defaultModule?: string;
  onLectureUploaded?: (lecture: LectureItem, moduleTitle: string) => void;
}

export default function UploadLectureModal({
  isOpen,
  onClose,
  defaultCourse = "Database Management System (CSE-305)",
  defaultModule = "Module 01: Relational Model",
  onLectureUploaded,
}: UploadLectureModalProps) {
  const [course, setCourse] = useState(defaultCourse);
  const [module, setModule] = useState(defaultModule);
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState<"video" | "pdf" | "slides">("video");
  const [duration, setDuration] = useState("45 mins");
  const [videoUrl, setVideoUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const typeLabel =
      contentType === "video"
        ? "Video + PPT"
        : contentType === "pdf"
        ? "PDF Notes"
        : "Slides Only";

    const newLecture: LectureItem = {
      id: `lec-${Date.now()}`,
      title: title || "New Lecture Session",
      duration: duration || "40 mins",
      type: typeLabel,
    };

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onLectureUploaded) {
        onLectureUploaded(newLecture, module);
      }
      setTimeout(() => {
        setSuccess(false);
        setTitle("");
        setVideoUrl("");
        setNotes("");
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <DashboardModal
      isOpen={isOpen}
      onClose={onClose}
      badge="Lecture Curation"
      badgeColor="gold"
      title="Add New Lecture"
      subtitle="Upload recordings, presentation decks, or study material to syllabus modules"
      maxWidth="2xl"
    >
      {success ? (
        <div className="py-12 text-center animate-in zoom-in-95 duration-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Lecture Added Successfully!
          </h4>
          <p className="mt-1.5 text-xs text-slate-500 max-w-md mx-auto">
            The lecture has been appended to <span className="font-semibold text-slate-700">{module}</span> for students of {course}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Course and Module Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Course <span className="text-red-500">*</span>
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

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Syllabus Module <span className="text-red-500">*</span>
              </label>
              <select
                value={module}
                onChange={(e) => setModule(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              >
                <option value="Module 01: Relational Model & Calculus">Module 01: Relational Model & Calculus</option>
                <option value="Module 02: Advanced SQL & Optimization">Module 02: Advanced SQL & Optimization</option>
                <option value="Module 03: Normalization & Functional Dependency">Module 03: Normalization & Functional Dependency</option>
                <option value="Module 04: Transaction Processing & ACID">Module 04: Transaction Processing & ACID</option>
              </select>
            </div>
          </div>

          {/* Row 2: Title and Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Lecture Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Lecture 07: BCNF Decomposition & Minimal Cover"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Estimated Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 45 mins"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Content Type Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Delivery Format
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "video", label: "Video Recording", icon: Video },
                { id: "pdf", label: "Lecture Notes (PDF)", icon: FileText },
                { id: "slides", label: "Slide Deck (PPT)", icon: FileText },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = contentType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setContentType(item.id as any)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition cursor-pointer ${
                      isSelected
                        ? "border-[#C69234] bg-[#FFF8ED] text-[#C69234] font-bold shadow-2xs"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[11px]">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video URL or File Upload */}
          {contentType === "video" && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Stream Video Link (YouTube, Vimeo, or S3 CDN)
              </label>
              <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://streams.alfa.edu.rs/courses/cse305/lec07.mp4"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] focus:outline-hidden"
              />
            </div>
          )}

          {/* File Dropzone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Upload Slide Deck / Attachment
            </label>
            <div className="border-2 border-dashed border-slate-200 hover:border-[#C69234] rounded-2xl p-6 text-center cursor-pointer bg-slate-50/60 transition group">
              <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-[#C69234] mx-auto mb-2 transition" />
              <p className="text-xs text-slate-600 font-medium">
                Drag and drop file here, or <span className="text-[#C69234] font-semibold underline">browse files</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1">Supported formats: MP4, PDF, PPTX, ZIP (Up to 500MB)</p>
            </div>
          </div>

          {/* Lecture Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Session Notes & Outline
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Outline key concepts, required readings, and discussion topics for students..."
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
              Publish Lecture
            </DashboardButton>
          </div>
        </form>
      )}
    </DashboardModal>
  );
}
