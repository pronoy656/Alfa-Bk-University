"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  BookOpen,
  Filter,
  Download,
  Info,
} from "lucide-react";

interface RoutineSlot {
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday";
  time: string; // e.g. "09:00 AM"
  subject: string;
  code: string;
  instructor: string;
  room: string;
  bgColor: string; // Tailored color matching Figma
  roomColor?: string;
  type?: string;
}

const routineSchedule: RoutineSlot[] = [
  // Sunday
  {
    day: "Sunday",
    time: "09:00 AM",
    subject: "DBMS",
    code: "CSE-305",
    instructor: "Dr. Rahman",
    room: "Room 302",
    bgColor: "bg-[#131F33] hover:bg-[#1a2b47]",
    roomColor: "text-[#D5A754]",
    type: "Theory Lecture",
  },
  {
    day: "Sunday",
    time: "11:00 AM",
    subject: "Software Eng.",
    code: "CSE-310",
    instructor: "Dr. Hasan",
    room: "Room 204",
    bgColor: "bg-[#1B4D3E] hover:bg-[#236350]",
    roomColor: "text-emerald-300",
    type: "Theory Lecture",
  },
  {
    day: "Sunday",
    time: "02:00 PM",
    subject: "AI Class",
    code: "CSE-401",
    instructor: "Dr. Farah",
    room: "Room 312",
    bgColor: "bg-[#2D4F50] hover:bg-[#386263]",
    roomColor: "text-teal-300",
    type: "Interactive Workshop",
  },

  // Monday
  {
    day: "Monday",
    time: "10:00 AM",
    subject: "OS",
    code: "CSE-322",
    instructor: "Dr. Arif",
    room: "Room 101",
    bgColor: "bg-[#2E5E8A] hover:bg-[#3974aa]",
    roomColor: "text-sky-300",
    type: "Theory Lecture",
  },
  {
    day: "Monday",
    time: "02:00 PM",
    subject: "Networking",
    code: "CSE-320",
    instructor: "Ms. Nusrat",
    room: "Lab 3",
    bgColor: "bg-[#8C5326] hover:bg-[#a6622d]",
    roomColor: "text-amber-300",
    type: "Practical Lab",
  },

  // Tuesday
  {
    day: "Tuesday",
    time: "09:00 AM",
    subject: "DBMS",
    code: "CSE-305",
    instructor: "Dr. Rahman",
    room: "Room 302",
    bgColor: "bg-[#131F33] hover:bg-[#1a2b47]",
    roomColor: "text-[#D5A754]",
    type: "Theory Lecture",
  },
  {
    day: "Tuesday",
    time: "11:00 AM",
    subject: "Software Eng.",
    code: "CSE-310",
    instructor: "Dr. Hasan",
    room: "Room 204",
    bgColor: "bg-[#1B4D3E] hover:bg-[#236350]",
    roomColor: "text-emerald-300",
    type: "Project Discussion",
  },

  // Wednesday
  {
    day: "Wednesday",
    time: "10:00 AM",
    subject: "OS",
    code: "CSE-322",
    instructor: "Dr. Arif",
    room: "Room 101",
    bgColor: "bg-[#2E5E8A] hover:bg-[#3974aa]",
    roomColor: "text-sky-300",
    type: "Theory Lecture",
  },
  {
    day: "Wednesday",
    time: "02:00 PM",
    subject: "Networking",
    code: "CSE-320",
    instructor: "Ms. Nusrat",
    room: "Lab 3",
    bgColor: "bg-[#8C5326] hover:bg-[#a6622d]",
    roomColor: "text-amber-300",
    type: "Practical Lab",
  },

  // Thursday
  {
    day: "Thursday",
    time: "12:00 PM",
    subject: "Tech Writing",
    code: "GED-201",
    instructor: "Ms. Tania",
    room: "Room 405",
    bgColor: "bg-[#5E358A] hover:bg-[#7342a8]",
    roomColor: "text-purple-300",
    type: "Seminar",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
];

const days: Array<"Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday"> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

export default function ClassRoutineView() {
  const [viewMode, setViewMode] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );
  const [selectedSlot, setSelectedSlot] = useState<RoutineSlot | null>(null);

  const getSlot = (day: string, time: string) => {
    return routineSchedule.find((s) => s.day === day && s.time === time);
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Header with Title & View Switcher (Matching Figma Node 463-6805) */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Class Routine
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            Your scheduled academic routine for Fall semester 2026
          </p>
        </div>

        {/* View Switcher: Daily | Weekly | Monthly */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto shadow-2xs border border-slate-200/60">
          <button
            type="button"
            onClick={() => setViewMode("daily")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === "daily"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Daily
          </button>
          <button
            type="button"
            onClick={() => setViewMode("weekly")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === "weekly"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setViewMode("monthly")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === "monthly"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* 2. Main Timetable Grid (Weekly View - Exact Figma Design) */}
      {viewMode === "weekly" && (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse table-fixed">
              {/* Header: TIME + 5 Days */}
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="w-24 sm:w-28 py-4 px-3 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    TIME
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="py-4 px-3 text-center text-xs sm:text-sm font-bold text-slate-800 border-l border-slate-100"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body: Time Rows */}
              <tbody className="divide-y divide-slate-100">
                {timeSlots.map((time) => (
                  <tr key={time} className="h-28">
                    {/* Time Column */}
                    <td className="py-3 px-2 text-center text-[11px] font-semibold text-slate-500 align-top pt-4 whitespace-nowrap bg-slate-50/30">
                      {time}
                    </td>

                    {/* Day Slots */}
                    {days.map((day) => {
                      const slot = getSlot(day, time);
                      return (
                        <td
                          key={`${day}-${time}`}
                          className="p-1.5 border-l border-slate-100 align-top h-28"
                        >
                          {slot ? (
                            <button
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`w-full h-full min-h-[96px] rounded-xl p-3 text-left text-white shadow-2xs transition-all duration-150 transform hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${slot.bgColor}`}
                            >
                              <div>
                                <div className="flex items-center justify-between">
                                  <span className="font-extrabold text-xs tracking-tight">
                                    {slot.subject}
                                  </span>
                                </div>
                                <p className="text-[10px] text-white/80 font-medium mt-0.5">
                                  {slot.instructor}
                                </p>
                              </div>

                              <div className="pt-2 flex items-center justify-between">
                                <span
                                  className={`text-[10px] font-bold ${
                                    slot.roomColor || "text-white/90"
                                  }`}
                                >
                                  {slot.room}
                                </span>
                              </div>
                            </button>
                          ) : (
                            <div className="w-full h-full min-h-[96px] rounded-xl hover:bg-slate-50/50 transition-colors" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. Daily View (Alternative View Mode) */}
      {viewMode === "daily" && (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#D5A754]" />
              <span>Today&apos;s Class Schedule (Sunday)</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              3 classes scheduled
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {routineSchedule
              .filter((s) => s.day === "Sunday")
              .map((slot, idx) => (
                <div
                  key={idx}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 ${slot.bgColor}`}
                    >
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {slot.subject} ({slot.code})
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {slot.instructor} · {slot.room}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-xs font-bold text-[#C58B24] bg-amber-50 px-3 py-1 rounded-full">
                      {slot.time}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1 rounded-lg hover:bg-slate-50 transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* 4. Monthly View (Alternative View Mode) */}
      {viewMode === "monthly" && (
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-8 text-center shadow-2xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C58B24] flex items-center justify-center mx-auto">
            <CalendarIcon className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            Monthly Academic Calendar
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Classes are held weekly according to the semester schedule from
            Sunday to Thursday. Exam breaks and university holidays are marked in
            the official academic calendar.
          </p>
          <button
            type="button"
            onClick={() => setViewMode("weekly")}
            className="px-4 py-2 rounded-xl bg-[#0B1E36] text-white text-xs font-bold hover:bg-[#162D4E] transition"
          >
            Switch to Weekly Routine
          </button>
        </div>
      )}

      {/* 5. Class Details Modal (when user clicks any class block) */}
      {selectedSlot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-[#D5A754] uppercase tracking-wider">
                {selectedSlot.code} · {selectedSlot.type}
              </span>
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-black text-slate-900 mt-3">
              {selectedSlot.subject}
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  {selectedSlot.day}, {selectedSlot.time} (90 mins)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Instructor: {selectedSlot.instructor}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Location: {selectedSlot.room} (Faculty Campus)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Accessing course materials for ${selectedSlot.subject}`);
                  setSelectedSlot(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0B1E36] hover:bg-[#162D4E] text-white transition"
              >
                Course Materials
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
