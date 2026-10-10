"use client";

import React, { useState } from "react";
import {
  Bell,
  Plus,
  Folder,
  Download,
  Trash2,
  ChevronDown,
  CheckCircle2,
  FileText,
  Upload,
  X,
  Sparkles,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface DocumentItem {
  id: string;
  name: string;
  size: string;
  category: string;
  uploadedDate: string;
  fileType: "pdf" | "docx";
}

const initialDocuments: DocumentItem[] = [
  {
    id: "doc-1",
    name: "Academic Calendar 2026-27.pdf",
    size: "2.4 MB",
    category: "Academic Calendar",
    uploadedDate: "Aug 15, 2026",
    fileType: "pdf",
  },
  {
    id: "doc-2",
    name: "University Regulations & Code.pdf",
    size: "1.8 MB",
    category: "Regulations",
    uploadedDate: "Jul 10, 2026",
    fileType: "pdf",
  },
  {
    id: "doc-3",
    name: "Course Drop & Add Form.docx",
    size: "450 KB",
    category: "Forms",
    uploadedDate: "Sep 02, 2026",
    fileType: "docx",
  },
  {
    id: "doc-4",
    name: "Grading Scale & Policies.pdf",
    size: "1.2 MB",
    category: "Policies",
    uploadedDate: "Sep 20, 2026",
    fileType: "pdf",
  },
];

export default function AdminAnnouncementsDocumentsView() {
  // Announcement Form State
  const [recipient, setRecipient] = useState("Everyone (Students & Faculty)");
  const [title, setTitle] = useState("Final Exam Scheduling Notice - Fall 2026 Term");
  const [message, setMessage] = useState(
    "Dear Students and Faculty, the final exam routines for the Fall 2026 semester are compiled and available in the central Routine Panel. Please review room assignments."
  );

  // Documents State
  const [documents, setDocuments] = useState<DocumentItem[]>(initialDocuments);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newDocName, setNewDocName] = useState("");
  const [newDocCategory, setNewDocCategory] = useState("Policies");
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handlePublishAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) {
      alert("Please fill in both announcement title and message body.");
      return;
    }
    showToast(`Broadcast "${title}" published successfully to ${recipient}!`);
  };

  const handleSaveUpload = () => {
    if (!newDocName.trim()) {
      alert("Please enter a document name.");
      return;
    }

    const doc: DocumentItem = {
      id: `doc-${Date.now()}`,
      name: newDocName.endsWith(".pdf") || newDocName.endsWith(".docx")
        ? newDocName
        : `${newDocName}.pdf`,
      size: "1.5 MB",
      category: newDocCategory,
      uploadedDate: "Today",
      fileType: newDocName.endsWith(".docx") ? "docx" : "pdf",
    };

    setDocuments([...documents, doc]);
    setIsUploadModalOpen(false);
    setNewDocName("");
    showToast(`Document "${doc.name}" uploaded to repository!`);
  };

  const handleDeleteDocument = (id: string, name: string) => {
    setDocuments(documents.filter((d) => d.id !== id));
    showToast(`"${name}" removed from repository.`);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#0B1E36] text-white text-xs font-semibold rounded-xl shadow-lg border border-[#C69234]/30 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-[#C69234]" />
          <span>{notification}</span>
        </div>
      )}

      {/* 1. Header Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Announcements & Document Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
          Broadcast vital notices and manage the global student-teacher document repository
        </p>
      </div>

      {/* 2. Main Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Column: Publish New Announcement Card */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0B1E36] tracking-tight">
              Publish New Announcement
            </h2>
            <div className="p-2 rounded-xl text-slate-400">
              <Bell className="w-5 h-5 text-slate-400 stroke-[1.8]" />
            </div>
          </div>

          <form onSubmit={handlePublishAnnouncement} className="space-y-4.5">
            {/* Field 1: RECIPIENTS */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Recipients
              </label>
              <div className="relative">
                <select
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
                >
                  <option value="Everyone (Students & Faculty)">
                    Everyone (Students & Faculty)
                  </option>
                  <option value="Students Only">Students Only</option>
                  <option value="Faculty Only">Faculty Only</option>
                  <option value="Department Chairs & HODs">
                    Department Chairs & HODs
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: ANNOUNCEMENT TITLE */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Announcement Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter notice headline..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs transition"
              />
            </div>

            {/* Field 3: MESSAGE BODY */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Message Body
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Compose announcement text..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs transition leading-relaxed resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#0B1E36] hover:bg-[#122844] text-white text-xs sm:text-sm font-bold tracking-wide shadow-xs hover:shadow-md transition cursor-pointer"
            >
              Publish Broadcast
            </button>
          </form>
        </div>

        {/* Right Column: Document Library Card */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold text-[#0B1E36] tracking-tight">
              Document Library
            </h2>

            <button
              type="button"
              onClick={() => setIsUploadModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs font-bold shadow-xs transition cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Upload New</span>
            </button>
          </div>

          {/* List of Documents */}
          <div className="space-y-3 pt-1">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-2xs transition group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Folder Icon with Gold Accent */}
                  <div className="w-9 h-9 rounded-lg bg-amber-50/80 border border-amber-200/50 flex items-center justify-center shrink-0">
                    <Folder className="w-4 h-4 text-[#C69234] fill-[#C69234]/15" />
                  </div>

                  {/* Document Details */}
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {doc.size} &nbsp;&nbsp;{" "}
                      <span className="text-[#C69234] font-semibold">
                        {doc.category}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Document Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      showToast(`Downloading "${doc.name}"...`)
                    }
                    title="Download document"
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteDocument(doc.id, doc.name)}
                    title="Remove document"
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL: UPLOAD NEW DOCUMENT */}
      <DashboardModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Document to Library"
        subtitle="Make policies, forms, and calendars available to the campus community"
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Document Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Examination Guidelines 2026.pdf"
              value={newDocName}
              onChange={(e) => setNewDocName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Document Category
            </label>
            <select
              value={newDocCategory}
              onChange={(e) => setNewDocCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
            >
              <option value="Academic Calendar">Academic Calendar</option>
              <option value="Regulations">Regulations</option>
              <option value="Forms">Forms</option>
              <option value="Policies">Policies</option>
              <option value="Syllabus">Syllabus</option>
            </select>
          </div>

          {/* Drag & Drop Simulation */}
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-5 text-center bg-slate-50/50 hover:bg-slate-50 transition">
            <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-slate-700">
              Drag and drop your file here, or browse
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Supports PDF, DOCX, XLSX (up to 25MB)
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
            <DashboardButton
              variant="outline"
              onClick={() => setIsUploadModalOpen(false)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="primary" onClick={handleSaveUpload}>
              Upload Document
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
