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

  // Midterm Exam Schedule (Matching Figma Node 463-7013 exactly)
  const midtermExams: ExamItem[] = [
    {
      id: "ex-1",
      course: "Database Management System",
      code: "CSE-305",
      date: "Oct 12, 2026",
      time: "10:00 AM - 12:00 PM",
      room: "Exam Hall A",
      seatRange: "STU-0400 to STU-0480",
      building: "Academic Block 1, 2nd Floor",
      totalSeats: 80,
    },
    {
      id: "ex-2",
      course: "Software Engineering",
      code: "CSE-311",
      date: "Oct 14, 2026",
      time: "10:00 AM - 12:00 PM",
      room: "Room 302",
      seatRange: "STU-0420 to STU-0465",
      building: "Academic Block 2, 3rd Floor",
      totalSeats: 45,
    },
    {
      id: "ex-3",
      course: "Computer Networking",
      code: "CSE-318",
      date: "Oct 16, 2026",
      time: "02:00 PM - 04:00 PM",
      room: "Exam Hall B",
      seatRange: "STU-0380 to STU-0470",
      building: "Academic Block 1, 1st Floor",
      totalSeats: 90,
    },
    {
      id: "ex-4",
      course: "Operating Systems",
      code: "CSE-322",
      date: "Oct 19, 2026",
      time: "10:00 AM - 12:00 PM",
      room: "Exam Hall A",
      seatRange: "STU-0410 to STU-0490",
      building: "Academic Block 1, 2nd Floor",
      totalSeats: 80,
    },
    {
      id: "ex-5",
      course: "Artificial Intelligence",
      code: "CSE-330",
      date: "Oct 21, 2026",
      time: "02:00 PM - 04:00 PM",
      room: "Room 204",
      seatRange: "STU-0430 to STU-0460",
      building: "Academic Block 2, 2nd Floor",
      totalSeats: 30,
    },
    {
      id: "ex-6",
      course: "Technical Writing",
      code: "GED-201",
      date: "Oct 23, 2026",
      time: "10:00 AM - 12:00 PM",
      room: "Room 101",
      seatRange: "STU-0400 to STU-0500",
      building: "Main Administration Block, Ground Floor",
      totalSeats: 100,
    },
  ];

  // Final Exam Schedule
  const finalExams: ExamItem[] = [
    {
      id: "fn-1",
      course: "Database Management System",
      code: "CSE-305",
      date: "Dec 14, 2026",
      time: "09:00 AM - 12:00 PM",
      room: "Auditorium Main",
      seatRange: "STU-0400 to STU-0490",
      building: "Central Hall",
      totalSeats: 90,
    },
    {
      id: "fn-2",
      course: "Software Engineering",
      code: "CSE-311",
      date: "Dec 16, 2026",
      time: "09:00 AM - 12:00 PM",
      room: "Exam Hall A",
      seatRange: "STU-0410 to STU-0480",
      building: "Academic Block 1",
      totalSeats: 70,
    },
    {
      id: "fn-3",
      course: "Computer Networking",
      code: "CSE-318",
      date: "Dec 18, 2026",
      time: "01:30 PM - 04:30 PM",
      room: "Exam Hall B",
      seatRange: "STU-0390 to STU-0470",
      building: "Academic Block 1",
      totalSeats: 80,
    },
    {
      id: "fn-4",
      course: "Operating Systems",
      code: "CSE-322",
      date: "Dec 21, 2026",
      time: "09:00 AM - 12:00 PM",
      room: "Auditorium Main",
      seatRange: "STU-0400 to STU-0485",
      building: "Central Hall",
      totalSeats: 85,
    },
  ];

  // Practical / Lab tests
  const labExams: ExamItem[] = [
    {
      id: "lb-1",
      course: "Database Management Lab",
      code: "CSE-306",
      date: "Nov 02, 2026",
      time: "10:00 AM - 01:00 PM",
      room: "Computer Lab 4",
      seatRange: "Batch A (STU-0400 - 0430)",
      building: "IT Building, 2nd Floor",
      totalSeats: 30,
    },
    {
      id: "lb-2",
      course: "Computer Networking Lab",
      code: "CSE-319",
      date: "Nov 04, 2026",
      time: "02:00 PM - 05:00 PM",
      room: "Hardware Lab 2",
      seatRange: "Batch A (STU-0400 - 0430)",
      building: "IT Building, 1st Floor",
      totalSeats: 30,
    },
  ];

  // Viva Voce
  const vivaExams: ExamItem[] = [
    {
      id: "vv-1",
      course: "Software Engineering Defense",
      code: "CSE-311V",
      date: "Nov 09, 2026",
      time: "09:00 AM - 03:00 PM",
      room: "Conference Hall 1",
      seatRange: "Individual slots",
      building: "Faculty Wing, 4th Floor",
      totalSeats: 45,
    },
  ];

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
