"use client";

import React, { useState } from "react";
import { Bell, Calendar, ArrowRight, X, FileText, Download } from "lucide-react";

interface NoticeItem {
  id: string;
  category: "University" | "Academic" | "Department" | "Exam" | "Holiday";
  date: string;
  title: string;
  description: string;
  publisher: string;
  fullBody?: string;
}

export default function NoticesAnnouncementsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

  const categories = [
    "All",
    "University",
    "Academic",
    "Department",
    "Exam",
    "Holiday",
  ];

  const notices: NoticeItem[] = [
    {
      id: "n-1",
      category: "Exam",
      date: "Oct 24, 2026",
      title: "Final Examination Schedule Fall 2026",
      description:
        "The draft schedule for Fall 2026 final exams has been published. Please review and report any clashes by November 2nd.",
      publisher: "Office of the Controller of Exams",
      fullBody:
        "The Controller of Examinations hereby notifies all undergraduate and post-graduate students of Alfa BK University that the official Fall 2026 semester final examination routines have been dispatched. Students must verify their enrolled course codes, invigilation hall allocations, and slot sequences. In case of dual course exam clashes, notify the academic desk before November 2nd.",
    },
    {
      id: "n-2",
      category: "Holiday",
      date: "Oct 22, 2026",
      title: "University Closed for Eid-ul-Adha Holiday",
      description:
        "All academic and administrative operations will remain closed from October 28th to November 4th in observation of Eid-ul-Adha.",
      publisher: "Registrar Office",
      fullBody:
        "In commemoration of Eid-ul-Adha, Alfa BK University academic faculties, administrative units, research centers, and central library services will be closed from October 28th through November 4th. Standard educational lectures, online laboratories, and student advising hours will resume as scheduled on Wednesday, November 5th.",
    },
    {
      id: "n-3",
      category: "University",
      date: "Oct 19, 2026",
      title: "New Library Hours and Extended Night Access",
      description:
        "Starting next semester, the central library will remain open until 10:00 PM on weekdays with strict quiet study rules.",
      publisher: "Chief Librarian",
      fullBody:
        "To assist students in mid-term preparation and collaborative thesis research, the Central University Library announces extended operational hours. Study halls on the 2nd and 3rd floors will remain accessible until 10:00 PM Monday through Friday. Digital database access and EBSCO borrowing kiosks will remain accessible 24/7.",
    },
    {
      id: "n-4",
      category: "Department",
      date: "Oct 15, 2026",
      title: "Inter-Department Programming Contest Registration",
      description:
        "Registration is now open for the annual ABK Hackathon. Form a team of 3 and register before the end of this week.",
      publisher: "Department of CSE",
      fullBody:
        "The Department of Computer Science & Engineering invites all software enthusiasts, coders, and designers to participate in the Annual ABK Hackathon & Competitive Programming Sprint. Teams of three students may enter. Cash prizes, trophy awards, and industry internship placements will be awarded to top podium finishes.",
    },
    {
      id: "n-5",
      category: "Academic",
      date: "Oct 10, 2026",
      title: "Course Registration Guidelines for Spring 2027",
      description:
        "Please clear any outstanding tuition fees to ensure smooth online course advising and registration for Spring 2027.",
      publisher: "Office of the Registrar",
      fullBody:
        "Pre-registration advising windows for the Spring 2027 academic session will officially open next month. Students must consult with their faculty advisors to finalize their prerequisite clearance, major electives, and credit limits. Ensure all semester tuition balances are reconciled to prevent portal access holds.",
    },
    {
      id: "n-6",
      category: "Academic",
      date: "Oct 05, 2026",
      title: "Post-Graduate Scholarship Application Briefing",
      description:
        "A seminar on global research scholarships will be hosted at the central auditorium on Monday at 3:00 PM.",
      publisher: "International Affairs Division",
      fullBody:
        "The International Affairs Division is pleased to present an informative briefing on Erasmus+ scholarships, DAAD international fellowships, and research bursaries for senior undergraduate scholars. The session will feature guest speakers from partner universities across Europe.",
    },
  ];

  const filteredNotices = notices.filter(
    (n) => selectedCategory === "All" || n.category === selectedCategory
  );

  return (
    <div className="w-full space-y-6">
      {/* 1. Header (Matching Figma Image 2) */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Notices & Announcements
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Stay updated with the latest university events, holiday declarations, and schedules.
        </p>
      </div>

      {/* 2. Filter Tabs (Matching Figma Image 2) */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                isActive
                  ? "bg-[#C69234] text-white shadow-2xs"
                  : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3. Notices 2-Column Grid (Matching Figma Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs hover:border-slate-300 transition duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Category Tag & Date */}
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 px-2.5 py-1 text-[11px] font-bold">
                  {notice.category}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {notice.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {notice.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                {notice.description}
              </p>
            </div>

            {/* Footer Row: Publisher + Read More */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <span className="font-medium text-slate-500 truncate">
                {notice.publisher}
              </span>
              <button
                type="button"
                onClick={() => setActiveNotice(notice)}
                className="text-[#C69234] hover:text-[#B87A1E] font-bold inline-flex items-center gap-1 transition cursor-pointer shrink-0"
              >
                <span>Read More</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Notice Detail Modal */}
      {activeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 flex flex-col">
            <div className="bg-[#0B1E36] p-6 text-white relative">
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="text-[10px] font-bold tracking-widest text-[#D5A754] uppercase">
                {activeNotice.category} NOTICE · {activeNotice.date}
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold leading-snug text-white pr-6">
                {activeNotice.title}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Issued by {activeNotice.publisher}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeNotice.fullBody || activeNotice.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => alert(`Downloading circular PDF for: ${activeNotice.title}`)}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 text-xs font-semibold transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-slate-600" />
                  <span>Download Circular PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white px-5 py-2.5 text-xs font-bold transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
