"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  Download,
  AlertCircle,
  CheckCircle2,
  Search,
  Printer,
  ChevronRight,
} from "lucide-react";
import { dashboardExamsData } from "@/data";

interface ExamItem {
  id: string;
  course: string;
  code: string;
  date: string;
  time: string;
  room: string;
  seatRange: string;
  building?: string;
  totalSeats?: number;
}

export default function ExamRoutineView() {
  const [activeTab, setActiveTab] = useState<
    "midterm" | "final" | "lab" | "viva"
  >("midterm");
  const [selectedExam, setSelectedExam] = useState<ExamItem | null>(null);
  const [searchFilter, setSearchFilter] = useState("");

  const { midtermExams, finalExams, labExams, vivaExams } =
    dashboardExamsData as {
      midtermExams: ExamItem[];
      finalExams: ExamItem[];
      labExams: ExamItem[];
      vivaExams: ExamItem[];
    };

  const currentList =
    activeTab === "midterm"
      ? midtermExams
      : activeTab === "final"
      ? finalExams
      : activeTab === "lab"
      ? labExams
      : vivaExams;

  const filteredExams = currentList.filter(
    (e) =>
      e.course.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.room.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      {/* 1. Header with Title & Action Tools (Matching Figma Node 463-7013) */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Exam Routine
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            Schedule of midterms, finals and lab tests for current academic term
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => alert("Downloading official Exam Admit Card PDF...")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white text-xs font-bold shadow-xs transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Admit Card</span>
          </button>
        </div>
      </div>

      {/* 2. Tabs Row: Midterm Exam | Final Exam | Practical / Lab | Viva Voce */}
      <div className="w-full border-b border-slate-200 flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
        <button
          type="button"
          onClick={() => setActiveTab("midterm")}
          className={`pb-3 text-xs sm:text-sm transition-colors relative cursor-pointer ${
            activeTab === "midterm"
              ? "font-bold text-[#D5A754]"
              : "font-semibold text-slate-500 hover:text-slate-800"
          }`}
        >
          <span>Midterm Exam</span>
          {activeTab === "midterm" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D5A754] rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("final")}
          className={`pb-3 text-xs sm:text-sm transition-colors relative cursor-pointer ${
            activeTab === "final"
              ? "font-bold text-[#D5A754]"
              : "font-semibold text-slate-500 hover:text-slate-800"
          }`}
        >
          <span>Final Exam</span>
          {activeTab === "final" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D5A754] rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lab")}
          className={`pb-3 text-xs sm:text-sm transition-colors relative cursor-pointer ${
            activeTab === "lab"
              ? "font-bold text-[#D5A754]"
              : "font-semibold text-slate-500 hover:text-slate-800"
          }`}
        >
          <span>Practical / Lab</span>
          {activeTab === "lab" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D5A754] rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("viva")}
          className={`pb-3 text-xs sm:text-sm transition-colors relative cursor-pointer ${
            activeTab === "viva"
              ? "font-bold text-[#D5A754]"
              : "font-semibold text-slate-500 hover:text-slate-800"
          }`}
        >
          <span>Viva Voce</span>
          {activeTab === "viva" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D5A754] rounded-full" />
          )}
        </button>
      </div>

      {/* 3. Main Routine Table (Matching Figma Table exactly) */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  COURSE
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  DATE
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  TIME
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  ROOM
                </th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  SEAT RANGE
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {filteredExams.map((exam) => (
                <tr
                  key={exam.id}
                  onClick={() => setSelectedExam(exam)}
                  className="hover:bg-slate-50/70 transition-colors cursor-pointer group"
                >
                  {/* Course Name & Code */}
                  <td className="py-4 px-6 align-middle">
                    <div className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                      {exam.course}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">
                      {exam.code}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-6 align-middle">
                    <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                      {exam.date}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="py-4 px-6 align-middle">
                    <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                      {exam.time}
                    </span>
                  </td>

                  {/* Room */}
                  <td className="py-4 px-6 align-middle">
                    <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                      {exam.room}
                    </span>
                  </td>

                  {/* Seat Range */}
                  <td className="py-4 px-6 align-middle">
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                      {exam.seatRange}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredExams.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 text-center text-xs text-slate-400"
                  >
                    No examinations found matching your filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Instructions Card */}
      <div className="w-full bg-[#FFFDF8] rounded-2xl border border-[#F5E6CA] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#C58B24] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              Examination Rules & Admit Card Requirement
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Students must arrive at the examination hall at least 15 minutes
              prior to start time with a printed admit card and student ID.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert("Printing rules and exam instructions...")}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#E1CDA8] text-xs font-bold text-slate-800 hover:bg-[#F9EDD6] transition self-start sm:self-auto shrink-0"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Rules</span>
        </button>
      </div>

      {/* 5. Exam Details Modal (on row click) */}
      {selectedExam && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#D5A754] uppercase tracking-wider">
                {selectedExam.code} · Examination Detail
              </span>
              <button
                type="button"
                onClick={() => setSelectedExam(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <h3 className="text-lg font-black text-slate-900 mt-3">
              {selectedExam.course}
            </h3>

            <div className="mt-4 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-semibold">{selectedExam.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{selectedExam.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  {selectedExam.room} · {selectedExam.building}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Assigned Seats: {selectedExam.seatRange}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedExam(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Seat plan confirmed for ${selectedExam.course}`);
                  setSelectedExam(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0B1E36] hover:bg-[#162D4E] text-white transition"
              >
                Confirm Seat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
