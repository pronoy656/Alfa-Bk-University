"use client";

import React, { useState } from "react";
import { Bell, Plus, Send, CheckCircle2 } from "lucide-react";

export default function TeacherAnnouncementsPage() {
  const [showCompose, setShowCompose] = useState(false);
  const [course, setCourse] = useState("All My Courses");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const announcements = [
    {
      id: "a-1",
      course: "Database Management (CSE-305)",
      title: "Lab 02 Assignment Deadline Extended to Sunday",
      body: "Due to mid-semester review workshops, the submission portal for Normalization practice will remain open until Sunday, Oct 18, 11:59 PM.",
      date: "Oct 7, 2026",
    },
    {
      id: "a-2",
      course: "Software Engineering (CSE-311)",
      title: "Guest Lecture: Microservices in Production by Tech Lead",
      body: "Next Wednesday we will host an industry speaker from Belgrade Tech Hub. Attendance is mandatory for group project members.",
      date: "Oct 4, 2026",
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setShowCompose(false);
      setTitle("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Class Announcements
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Broadcast notices, room changes, and reminders to enrolled students
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowCompose(!showCompose)}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-3.5 w-3.5" />
          {showCompose ? "Cancel" : "New Announcement"}
        </button>
      </div>

      {showCompose && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs animate-in fade-in duration-200">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Compose Announcement</h3>
          {sent ? (
            <div className="py-6 text-center text-emerald-600 font-bold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Announcement broadcast successfully!
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Recipient Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800"
                >
                  <option>All My Courses (156 students)</option>
                  <option>Database Management (CSE-305)</option>
                  <option>Software Engineering (CSE-311)</option>
                  <option>Data Structures (CSE-201)</option>
                  <option>Computer Architecture (CSE-315)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule Update for Next Week"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message Content
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B1E36] hover:bg-[#152D4D] px-5 py-2 text-xs font-bold text-white transition cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  Broadcast Notice
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <div className="space-y-4">
        {announcements.map((a) => (
          <div key={a.id} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                {a.course}
              </span>
              <span className="text-[11px] text-slate-400">{a.date}</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{a.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
