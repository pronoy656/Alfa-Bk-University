"use client";

import React, { useState } from "react";
import {
  Plus,
  ChevronDown,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Calendar,
  X,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

interface RoutineSlot {
  code?: string;
  name?: string;
  room?: string;
  type: "blue" | "green" | "yellow" | "purple" | "conflict" | "empty";
  conflictMsg?: string;
}

export default function AdminRoutineView() {
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [selectedProgram, setSelectedProgram] = useState("BSc-CSE");
  const [selectedSemester, setSelectedSemester] = useState("Fall 2026");
  const [selectedSection, setSelectedSection] = useState("A");

  // Modals
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeConflict, setActiveConflict] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form
  const [formData, setFormData] = useState({
    day: "Monday",
    timeWindow: "08:30 - 10:00",
    courseCode: "CSE-305",
    courseName: "Database Systems",
    room: "Room 402",
    instructor: "Dr. Mohammad Rahman",
  });

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      `Schedule created for ${formData.courseCode} on ${formData.day} (${formData.timeWindow})!`
    );
    setIsCreateModalOpen(false);
  };

  // Schedule matrix matching Image 4
  const timeWindows = [
    "08:30 - 10:00",
    "10:00 - 11:30",
    "11:30 - 13:00",
    "13:00 - 14:30",
    "14:30 - 16:00",
  ];

  const getSlot = (time: string, day: string): RoutineSlot => {
    if (day === "Thursday") {
      return { type: "empty" };
    }

    if (day === "Tuesday" && time === "10:00 - 11:30") {
      return {
        type: "conflict",
        conflictMsg: "Conflict: Hall 301",
        code: "CE-101 / EEE-101",
        name: "Double Room Booking",
      };
    }

    if (day === "Monday") {
      return {
        type: "blue",
        code: "CSE-305",
        name: "Database Systems",
        room: "Room 402",
      };
    }

    if (day === "Tuesday") {
      return {
        type: "green",
        code: "CSE-311",
        name: "Software Eng.",
        room: "Room 302",
      };
    }

    if (day === "Wednesday") {
      return {
        type: "yellow",
        code: "EEE-101",
        name: "Electric Circuits",
        room: "Lab C",
      };
    }

    if (day === "Friday") {
      return {
        type: "purple",
        code: "MGT-201",
        name: "Marketing",
        room: "Online Sem.",
      };
    }

    return { type: "empty" };
  };

  return (
    <div className="w-full space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-8 z-50 rounded-2xl bg-emerald-600 text-white px-5 py-3 shadow-lg flex items-center gap-2 text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5" />
          <span>{notification}</span>
        </div>
      )}

      {/* 1. Header with Title, Subtitle, and Create Schedule Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            Routine Management
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            Weekly master scheduling matrix for academic halls and online lectures
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Create Schedule</span>
        </button>
      </div>

      {/* 2. Inline Pill Filter Badges (Exact match with Image 4) */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Department Filter */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2 pr-8 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-hidden focus:border-[#C69234] cursor-pointer"
          >
            <option value="CSE">Department: CSE</option>
            <option value="EEE">Department: EEE</option>
            <option value="BBA">Department: BBA</option>
            <option value="ENG">Department: ENG</option>
            <option value="LAW">Department: LAW</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* Program Filter */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2 pr-8 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-hidden focus:border-[#C69234] cursor-pointer"
          >
            <option value="BSc-CSE">Program: BSc-CSE</option>
            <option value="BSc-EEE">Program: BSc-EEE</option>
            <option value="BBA">Program: BBA</option>
            <option value="BA-ENG">Program: BA-ENG</option>
            <option value="LLB">Program: LLB</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* Semester Filter */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2 pr-8 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-hidden focus:border-[#C69234] cursor-pointer"
          >
            <option value="Fall 2026">Semester: Fall 2026</option>
            <option value="Spring 2026">Semester: Spring 2026</option>
            <option value="Fall 2025">Semester: Fall 2025</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* Section Filter */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2 pr-8 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-hidden focus:border-[#C69234] cursor-pointer"
          >
            <option value="A">Section: A</option>
            <option value="B">Section: B</option>
            <option value="C">Section: C</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>
      </div>

      {/* 3. Timetable Master Grid (Matching Image 4) */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[840px]">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-bold text-slate-700">
                <th className="py-4 px-4 text-left w-36 text-slate-500">
                  Time Window
                </th>
                <th className="py-4 px-3 w-1/5">Monday</th>
                <th className="py-4 px-3 w-1/5">Tuesday</th>
                <th className="py-4 px-3 w-1/5">Wednesday</th>
                <th className="py-4 px-3 w-1/5">Thursday</th>
                <th className="py-4 px-3 w-1/5">Friday</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {timeWindows.map((tw) => (
                <tr key={tw} className="hover:bg-slate-50/30 transition">
                  {/* Time Window Label */}
                  <td className="py-4 px-4 text-left font-bold text-xs text-slate-800 whitespace-nowrap">
                    {tw}
                  </td>

                  {/* Days */}
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => {
                      const slot = getSlot(tw, day);

                      // Blue Card (CSE-305)
                      if (slot.type === "blue") {
                        return (
                          <td key={day} className="p-2 sm:p-2.5">
                            <div className="rounded-xl p-3 bg-[#EAF5FC] border border-[#D5EBF9] text-center space-y-0.5 hover:shadow-2xs transition">
                              <span className="block text-xs font-extrabold text-[#2377A6]">
                                {slot.code}
                              </span>
                              <span className="block text-xs font-bold text-slate-900 leading-tight">
                                {slot.name}
                              </span>
                              <span className="block text-[11px] font-medium text-slate-500">
                                {slot.room}
                              </span>
                            </div>
                          </td>
                        );
                      }

                      // Green Card (CSE-311)
                      if (slot.type === "green") {
                        return (
                          <td key={day} className="p-2 sm:p-2.5">
                            <div className="rounded-xl p-3 bg-[#EDF8F0] border border-[#D6F0DD] text-center space-y-0.5 hover:shadow-2xs transition">
                              <span className="block text-xs font-extrabold text-[#24854B]">
                                {slot.code}
                              </span>
                              <span className="block text-xs font-bold text-slate-900 leading-tight">
                                {slot.name}
                              </span>
                              <span className="block text-[11px] font-medium text-slate-500">
                                {slot.room}
                              </span>
                            </div>
                          </td>
                        );
                      }

                      // Yellow Card (EEE-101)
                      if (slot.type === "yellow") {
                        return (
                          <td key={day} className="p-2 sm:p-2.5">
                            <div className="rounded-xl p-3 bg-[#FFF9E6] border border-[#FFE8A3] text-center space-y-0.5 hover:shadow-2xs transition">
                              <span className="block text-xs font-extrabold text-[#B3791B]">
                                {slot.code}
                              </span>
                              <span className="block text-xs font-bold text-slate-900 leading-tight">
                                {slot.name}
                              </span>
                              <span className="block text-[11px] font-medium text-slate-500">
                                {slot.room}
                              </span>
                            </div>
                          </td>
                        );
                      }

                      // Purple Card (MGT-201)
                      if (slot.type === "purple") {
                        return (
                          <td key={day} className="p-2 sm:p-2.5">
                            <div className="rounded-xl p-3 bg-[#F4EDFC] border border-[#E3D1FA] text-center space-y-0.5 hover:shadow-2xs transition">
                              <span className="block text-xs font-extrabold text-[#7E42C4]">
                                {slot.code}
                              </span>
                              <span className="block text-xs font-bold text-slate-900 leading-tight">
                                {slot.name}
                              </span>
                              <span className="block text-[11px] font-medium text-slate-500">
                                {slot.room}
                              </span>
                            </div>
                          </td>
                        );
                      }

                      // Red Outlined Conflict Card
                      if (slot.type === "conflict") {
                        return (
                          <td key={day} className="p-2 sm:p-2.5">
                            <button
                              type="button"
                              onClick={() => setActiveConflict(true)}
                              className="w-full rounded-xl p-2.5 bg-[#FFF2F2] border-2 border-[#FFA3A3] text-center space-y-0.5 hover:border-red-400 transition cursor-pointer"
                            >
                              <span className="block text-[11px] font-extrabold text-[#D93838]">
                                {slot.conflictMsg}
                              </span>
                              <span className="block text-xs font-bold text-slate-900 leading-tight">
                                {slot.code}
                              </span>
                              <span className="block text-[10px] font-semibold text-[#D93838]">
                                {slot.name}
                              </span>
                            </button>
                          </td>
                        );
                      }

                      // No Class / Empty Card
                      return (
                        <td key={day} className="p-2 sm:p-2.5">
                          <div className="rounded-xl p-4 bg-slate-50/70 border border-slate-100 text-center flex items-center justify-center">
                            <span className="text-xs font-semibold text-slate-400">
                              No Class
                            </span>
                          </div>
                        </td>
                      );
                    }
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. MODALS */}

      {/* Create Schedule Modal */}
      <DashboardModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Timetable Schedule"
        subtitle="Reserve lecture hall and allocate weekly time window"
        badge="Scheduling Matrix"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="create-schedule-form"
            >
              Confirm & Book Hall
            </DashboardButton>
          </>
        }
      >
        <form
          id="create-schedule-form"
          onSubmit={handleCreateSchedule}
          className="space-y-4 text-xs"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Day of Week *
              </label>
              <select
                value={formData.day}
                onChange={(e) =>
                  setFormData({ ...formData, day: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white font-semibold"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Time Window *
              </label>
              <select
                value={formData.timeWindow}
                onChange={(e) =>
                  setFormData({ ...formData, timeWindow: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white font-semibold"
              >
                {timeWindows.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Course Code *
              </label>
              <input
                type="text"
                required
                value={formData.courseCode}
                onChange={(e) =>
                  setFormData({ ...formData, courseCode: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div className="col-span-2">
              <label className="block font-bold text-slate-700 mb-1">
                Course Name *
              </label>
              <input
                type="text"
                required
                value={formData.courseName}
                onChange={(e) =>
                  setFormData({ ...formData, courseName: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Room / Venue *
              </label>
              <input
                type="text"
                required
                value={formData.room}
                onChange={(e) =>
                  setFormData({ ...formData, room: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Faculty Instructor
              </label>
              <input
                type="text"
                value={formData.instructor}
                onChange={(e) =>
                  setFormData({ ...formData, instructor: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* Conflict Resolution Modal */}
      <DashboardModal
        isOpen={activeConflict}
        onClose={() => setActiveConflict(false)}
        title="Schedule Conflict Detected"
        subtitle="Double Room Booking in Hall 301 on Tuesday (10:00 - 11:30)"
        badge="Hall Clash Alert"
        badgeColor="red"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setActiveConflict(false)}
            >
              Dismiss
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              onClick={() => {
                showToast("Conflict resolved: CE-101 moved to Hall 204.");
                setActiveConflict(false);
              }}
            >
              Reassign to Hall 204
            </DashboardButton>
          </>
        }
      >
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Double Booking Collision</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Two courses are booked for <strong>Hall 301</strong> at the same time:
            </p>
            <ul className="list-disc list-inside text-[11px] font-semibold space-y-0.5 pt-1">
              <li>CE-101: Surveying & Field Work (Dept. Of Civil Eng.)</li>
              <li>EEE-101: Electric Circuit Analysis (Dept. Of EEE)</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="font-bold text-slate-800 block">
              Suggested Alternate Venues:
            </span>
            <div className="grid grid-cols-2 gap-2 text-slate-700 font-semibold text-[11px]">
              <span className="p-2 rounded-lg bg-white border border-slate-200">
                ✅ Hall 204 (Vacant)
              </span>
              <span className="p-2 rounded-lg bg-white border border-slate-200">
                ✅ Room 408 (Vacant)
              </span>
            </div>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
