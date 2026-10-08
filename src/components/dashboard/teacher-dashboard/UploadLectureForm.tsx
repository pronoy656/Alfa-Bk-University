"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";

interface UploadLectureFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function UploadLectureForm({
  onSuccess,
  onCancel,
}: UploadLectureFormProps) {
  const [course, setCourse] = useState("Database Management (CSE-305)");
  const [module, setModule] = useState("Module 01: Relational Model");
  const [title, setTitle] = useState(
    "Lecture 1.4: Schema Refinement and Normal Forms"
  );
  const [notes, setNotes] = useState(
    "In this session, we cover functional dependencies, 1NF, 2NF, 3NF, and BCNF with hands-on decomposition examples."
  );
  const [contentType, setContentType] = useState("video");
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
          Upload New Lecture
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Publish slides, reference files or class recordings
        </p>
      </div>

      {/* Form Card matching Figma */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
        {published ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Lecture Published Successfully!
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Students of {course} can now stream and download materials.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Course & Module */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
                >
                  <option>Database Management (CSE-305)</option>
                  <option>Software Engineering (CSE-311)</option>
                  <option>Data Structures (CSE-201)</option>
                  <option>Computer Architecture (CSE-315)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Module
                </label>
                <select
                  value={module}
                  onChange={(e) => setModule(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
                >
                  <option>Module 01: Relational Model</option>
                  <option>Module 02: Advanced SQL & Schema Design</option>
                  <option>Module 03: Transactions & Concurrency</option>
                </select>
              </div>
            </div>

            {/* Lecture Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Lecture Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter lecture title..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Description / Topic Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Description / Topic Notes
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Provide overview of lecture content..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Content Type Radio Group matching Figma */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Content Type
              </label>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value="video"
                    checked={contentType === "video"}
                    onChange={() => setContentType("video")}
                    className="accent-[#C69234]"
                  />
                  <span>Video Recording</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value="pdf"
                    checked={contentType === "pdf"}
                    onChange={() => setContentType("pdf")}
                    className="accent-[#C69234]"
                  />
                  <span>PDF Document</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value="pptx"
                    checked={contentType === "pptx"}
                    onChange={() => setContentType("pptx")}
                    className="accent-[#C69234]"
                  />
                  <span>PowerPoint Slides</span>
                </label>
              </div>
            </div>

            {/* Drag & Drop Zone matching Figma */}
            <div>
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-8 text-center hover:bg-slate-50 hover:border-slate-400 transition cursor-pointer">
                <UploadCloud className="mx-auto h-8 w-8 text-slate-400" />
                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Drag & drop video/file here, or browse local files
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Supported formats: MP4, PDF, PPTX up to 500MB
                </p>
              </div>
            </div>

            {/* Footer Action Buttons */}
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
                Publish Lecture
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
