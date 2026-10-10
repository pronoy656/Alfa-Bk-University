"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  ClipboardCheck,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  AlertTriangle,
  Building,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface ExamRecord {
  id: string;
  courseCode: string;
  courseTitle: string;
  department: string;
  examType: "Final Exam" | "Midterm Exam" | "Supplementary";
  examDate: string;
  timeSlot: string;
  venue: string;
  candidatesCount: number;
  chiefInvigilator: string;
  assistantInvigilator?: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Postponed";
  durationMinutes: number;
  allowedItems?: string[];
  roomAllocation?: string;
}

const initialExams: ExamRecord[] = [
  {
    id: "EX-305",
    courseCode: "CSE-305",
    courseTitle: "Database Management System",
    department: "CSE",
    examType: "Final Exam",
    examDate: "Dec 18, 2026",
    timeSlot: "09:30 AM - 12:30 PM",
    venue: "Exam Hall A (Wing 3)",
    candidatesCount: 42,
    chiefInvigilator: "Dr. Mohammad Rahman",
    assistantInvigilator: "Md. Tanvir Hasan (TA)",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Closed Book", "Scientific Calculator (FX-991)", "Admit Card & ID"],
    roomAllocation: "Hall A · Rows 1 - 5 (Roll: 9001 - 9042)",
  },
  {
    id: "EX-311",
    courseCode: "CSE-311",
    courseTitle: "Software Engineering & Architecture",
    department: "CSE",
    examType: "Final Exam",
    examDate: "Dec 20, 2026",
    timeSlot: "02:00 PM - 05:00 PM",
    venue: "Auditorium West",
    candidatesCount: 38,
    chiefInvigilator: "Kamrul Hasan",
    assistantInvigilator: "Fariha Sultana (Lecturer)",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Closed Book", "Standard Stationery", "Admit Card"],
    roomAllocation: "Auditorium · Left Section (Roll: 9101 - 9138)",
  },
  {
    id: "EX-315",
    courseCode: "CSE-315",
    courseTitle: "Computer Networks & Architecture",
    department: "CSE",
    examType: "Final Exam",
    examDate: "Dec 22, 2026",
    timeSlot: "09:30 AM - 12:30 PM",
    venue: "Room 402 & 404",
    candidatesCount: 41,
    chiefInvigilator: "Ms. Sultana Ahmed",
    assistantInvigilator: "Rafiqul Islam",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Closed Book", "Formula Sheet Provided", "ID Card"],
    roomAllocation: "Room 402 (20 seats), Room 404 (21 seats)",
  },
  {
    id: "EX-101",
    courseCode: "EEE-101",
    courseTitle: "Electrical Circuits I",
    department: "EEE",
    examType: "Final Exam",
    examDate: "Dec 23, 2026",
    timeSlot: "02:00 PM - 05:00 PM",
    venue: "Circuit Complex Hall 1",
    candidatesCount: 35,
    chiefInvigilator: "Mr. Shafiul Alam",
    assistantInvigilator: "Dr. Tariqul Islam",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Scientific Calculator", "Non-programmable instruments"],
    roomAllocation: "Circuits Hall 1 · (Roll: 8801 - 8835)",
  },
  {
    id: "EX-201",
    courseCode: "MGT-201",
    courseTitle: "Principles of Strategic Marketing",
    department: "BBA",
    examType: "Final Exam",
    examDate: "Dec 26, 2026",
    timeSlot: "09:30 AM - 12:30 PM",
    venue: "Business School Hall B",
    candidatesCount: 55,
    chiefInvigilator: "Dr. Farhana Yasmin",
    assistantInvigilator: "Abu Noman",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Case Study Booklet (Provided)", "Pen & Admit Card"],
    roomAllocation: "Hall B · All Rows (Roll: 9201 - 9255)",
  },
  {
    id: "EX-401",
    courseCode: "CSE-401",
    courseTitle: "Artificial Intelligence & Neural Nets",
    department: "CSE",
    examType: "Final Exam",
    examDate: "Dec 28, 2026",
    timeSlot: "02:00 PM - 05:00 PM",
    venue: "Central Seminar Hall",
    candidatesCount: 35,
    chiefInvigilator: "Prof. Dr. Milan Stanković",
    assistantInvigilator: "Dr. Tanvir Anjum",
    status: "Scheduled",
    durationMinutes: 180,
    allowedItems: ["Closed Book", "Calculator allowed"],
    roomAllocation: "Seminar Hall · (Roll: 9301 - 9335)",
  },
  {
    id: "EX-207-MID",
    courseCode: "CSE-207",
    courseTitle: "Data Structures & Algorithms",
    department: "CSE",
    examType: "Midterm Exam",
    examDate: "Oct 28, 2026",
    timeSlot: "11:00 AM - 01:00 PM",
    venue: "Hall 301 & 302",
    candidatesCount: 46,
    chiefInvigilator: "Prof. Dr. Milan Stanković",
    status: "Completed",
    durationMinutes: 120,
    allowedItems: ["Closed Book", "ID Card"],
    roomAllocation: "Hall 301 (23 seats), Hall 302 (23 seats)",
  },
];

export default function AdminExamsView() {
  const [exams, setExams] = useState<ExamRecord[]>(initialExams);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Exam Types");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewExam, setViewExam] = useState<ExamRecord | null>(null);
  const [editExam, setEditExam] = useState<ExamRecord | null>(null);
  const [deleteExamId, setDeleteExamId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<ExamRecord>>({
    courseCode: "CSE-305",
    courseTitle: "Database Management System",
    department: "CSE",
    examType: "Final Exam",
    examDate: "Dec 30, 2026",
    timeSlot: "09:30 AM - 12:30 PM",
    venue: "Exam Hall A",
    candidatesCount: 40,
    chiefInvigilator: "Dr. Mohammad Rahman",
    assistantInvigilator: "Department Assistant",
    status: "Scheduled",
    durationMinutes: 180,
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter Logic
  const filteredExams = useMemo(() => {
    return exams.filter((e) => {
      const matchesSearch =
        e.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.chiefInvigilator.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        selectedDept === "All Departments" || e.department === selectedDept;

      const matchesType =
        selectedType === "All Exam Types" || e.examType === selectedType;

      const matchesStatus =
        selectedStatus === "All Statuses" || e.status === selectedStatus;

      return matchesSearch && matchesDept && matchesType && matchesStatus;
    });
  }, [exams, searchQuery, selectedDept, selectedType, selectedStatus]);

  // Handlers
  const handleOpenAdd = () => {
    setFormData({
      courseCode: "",
      courseTitle: "",
      department: "CSE",
      examType: "Final Exam",
      examDate: "Dec 30, 2026",
      timeSlot: "09:30 AM - 12:30 PM",
      venue: "Exam Hall A",
      candidatesCount: 40,
      chiefInvigilator: "Dr. Mohammad Rahman",
      assistantInvigilator: "Md. Tanvir Hasan",
      status: "Scheduled",
      durationMinutes: 180,
    });
    setIsAddModalOpen(true);
  };

  const handleSaveAdd = () => {
    if (!formData.courseCode || !formData.courseTitle) {
      alert("Please provide Course Code and Course Title.");
      return;
    }

    const newRecord: ExamRecord = {
      id: `EX-${Date.now()}`,
      courseCode: formData.courseCode.toUpperCase(),
      courseTitle: formData.courseTitle,
      department: formData.department || "CSE",
      examType: (formData.examType as ExamRecord["examType"]) || "Final Exam",
      examDate: formData.examDate || "Dec 30, 2026",
      timeSlot: formData.timeSlot || "09:30 AM - 12:30 PM",
      venue: formData.venue || "Exam Hall A",
      candidatesCount: Number(formData.candidatesCount) || 40,
      chiefInvigilator: formData.chiefInvigilator || "Assigned Faculty",
      assistantInvigilator: formData.assistantInvigilator,
      status: (formData.status as ExamRecord["status"]) || "Scheduled",
      durationMinutes: Number(formData.durationMinutes) || 180,
      allowedItems: ["Closed Book", "Calculator allowed", "Admit Card"],
      roomAllocation: `${formData.venue} · All candidates`,
    };

    setExams([newRecord, ...exams]);
    setIsAddModalOpen(false);
    showToast(`Exam schedule for "${newRecord.courseCode}" registered successfully!`);
  };

  const handleOpenEdit = (e: ExamRecord) => {
    setEditExam(e);
    setFormData({ ...e });
  };

  const handleSaveEdit = () => {
    if (!editExam) return;
    setExams(
      exams.map((item) =>
        item.id === editExam.id ? { ...item, ...formData } : item
      )
    );
    setEditExam(null);
    showToast(`Exam schedule for ${editExam.courseCode} updated.`);
  };

  const handleDeleteConfirm = () => {
    if (!deleteExamId) return;
    setExams(exams.filter((e) => e.id !== deleteExamId));
    showToast("Exam session removed.");
    setDeleteExamId(null);
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            Exam Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Schedule, coordinate, and oversee midterm & final examination sessions and seating plans
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by course, venue, invigilator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] shadow-2xs transition"
            />
          </div>

          {/* Add Exam Button */}
          <button
            type="button"
            onClick={handleOpenAdd}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Schedule Exam</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Department Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Department
          </span>
          <div className="relative">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Departments">All Departments</option>
              <option value="CSE">CSE (Computer Science)</option>
              <option value="EEE">EEE (Electrical Eng)</option>
              <option value="BBA">BBA (Business Admin)</option>
              <option value="CE">CE (Civil Eng)</option>
              <option value="ENG">ENG (English & Arts)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Exam Type Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Exam Type
          </span>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Exam Types">All Exam Types</option>
              <option value="Final Exam">Final Exam</option>
              <option value="Midterm Exam">Midterm Exam</option>
              <option value="Supplementary">Supplementary Exam</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Status
          </span>
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Postponed">Postponed</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Total Scheduled Count Pill */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Total Exams:</span>
            <span className="font-extrabold text-[#0B1E36]">
              {exams.length} Slots
            </span>
          </div>
        </div>
      </div>

      {/* 4. Main Examination Schedule Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Code</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Course Title</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Type</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Date & Time</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Exam Venue</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Candidates</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Chief Invigilator</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Status</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredExams.length > 0 ? (
                filteredExams.map((e) => (
                  <tr
                    key={e.id}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    {/* Code Badge */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-[#9E7321] font-extrabold text-[11px] border border-amber-200/60">
                        {e.courseCode}
                      </span>
                    </td>

                    {/* Course Title */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 font-bold text-slate-900">
                      {e.courseTitle}
                    </td>

                    {/* Exam Type */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                          e.examType === "Final Exam"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {e.examType}
                      </span>
                    </td>

                    {/* Date & Time Slot */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap text-[11px]">
                      <div className="font-semibold text-slate-900">{e.examDate}</div>
                      <div className="text-slate-500 font-medium">{e.timeSlot}</div>
                    </td>

                    {/* Exam Venue */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-slate-700 whitespace-nowrap text-[11px]">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        {e.venue}
                      </span>
                    </td>

                    {/* Candidates Count */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap font-bold text-slate-800">
                      {e.candidatesCount} Students
                    </td>

                    {/* Chief Invigilator */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-slate-700 whitespace-nowrap font-medium text-[11px]">
                      {e.chiefInvigilator}
                    </td>

                    {/* Status Pill */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          e.status === "Scheduled"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                            : e.status === "In Progress"
                            ? "bg-amber-50 text-amber-700 border border-amber-200/60 animate-pulse"
                            : e.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-rose-50 text-rose-700 border border-rose-200/60"
                        }`}
                      >
                        {e.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View Hall Seating Plan */}
                        <button
                          type="button"
                          onClick={() => setViewExam(e)}
                          title="View Seating Plan & Invigilator Duty"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(e)}
                          title="Edit Exam Schedule"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteExamId(e.id)}
                          title="Cancel Exam Slot"
                          className="text-red-500 hover:text-red-700 transition p-1 hover:bg-red-50 rounded-lg cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="py-12 text-center text-slate-400 text-xs"
                  >
                    No examination slots match the selected criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 5. Pagination Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div>
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredExams.length > 0 ? "1" : "0"}-
              {Math.min(filteredExams.length, 7)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">
              {exams.length}
            </span>{" "}
            entries
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 font-semibold cursor-pointer text-slate-700"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
                currentPage === 1
                  ? "bg-[#0B1E36] text-white"
                  : "border border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
                currentPage === 2
                  ? "bg-[#0B1E36] text-white"
                  : "border border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              2
            </button>
            <button
              type="button"
              disabled={currentPage === 2}
              onClick={() => setCurrentPage((p) => Math.min(2, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 font-semibold cursor-pointer text-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL 1: SCHEDULE EXAM */}
      <DashboardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Schedule New Examination Slot"
        subtitle="Assign date, shift, exam venue, and chief invigilator"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Course Code *
              </label>
              <input
                type="text"
                placeholder="e.g. CSE-305"
                value={formData.courseCode || ""}
                onChange={(e) =>
                  setFormData({ ...formData, courseCode: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Department
              </label>
              <select
                value={formData.department || "CSE"}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="CE">CE</option>
                <option value="ENG">ENG</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Course Title *
            </label>
            <input
              type="text"
              placeholder="e.g. Database Management System"
              value={formData.courseTitle || ""}
              onChange={(e) =>
                setFormData({ ...formData, courseTitle: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Exam Type
              </label>
              <select
                value={formData.examType || "Final Exam"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    examType: e.target.value as ExamRecord["examType"],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="Final Exam">Final Exam</option>
                <option value="Midterm Exam">Midterm Exam</option>
                <option value="Supplementary">Supplementary</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Exam Date
              </label>
              <input
                type="text"
                placeholder="e.g. Dec 18, 2026"
                value={formData.examDate || ""}
                onChange={(e) =>
                  setFormData({ ...formData, examDate: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Time Slot
              </label>
              <input
                type="text"
                placeholder="e.g. 09:30 AM - 12:30 PM"
                value={formData.timeSlot || ""}
                onChange={(e) =>
                  setFormData({ ...formData, timeSlot: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Venue / Exam Hall
              </label>
              <input
                type="text"
                placeholder="e.g. Exam Hall A (Wing 3)"
                value={formData.venue || ""}
                onChange={(e) =>
                  setFormData({ ...formData, venue: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Number of Candidates
              </label>
              <input
                type="number"
                placeholder="40"
                value={formData.candidatesCount || 40}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    candidatesCount: Number(e.target.value),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Chief Invigilator
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Mohammad Rahman"
                value={formData.chiefInvigilator || ""}
                onChange={(e) =>
                  setFormData({ ...formData, chiefInvigilator: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Assistant Invigilator (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Md. Tanvir Hasan (TA)"
                value={formData.assistantInvigilator || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    assistantInvigilator: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <DashboardButton
              variant="outline"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="primary" onClick={handleSaveAdd}>
              Save Exam Schedule
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>

      {/* MODAL 2: VIEW SEATING PLAN & DUTY */}
      <DashboardModal
        isOpen={!!viewExam}
        onClose={() => setViewExam(null)}
        title={viewExam ? `${viewExam.courseCode} Examination Details` : "Exam Details"}
        subtitle={viewExam?.courseTitle}
        maxWidth="max-w-2xl"
      >
        {viewExam && (
          <div className="space-y-5">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Exam Type
                </span>
                <span className="text-xs font-bold text-[#0B1E36]">
                  {viewExam.examType}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Time Duration
                </span>
                <span className="text-xs font-bold text-[#C69234]">
                  {viewExam.durationMinutes} Minutes (3 Hrs)
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Examinees
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {viewExam.candidatesCount} Students
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Status
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  {viewExam.status}
                </span>
              </div>
            </div>

            {/* Hall Allocation & Seating */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Venue & Seating Allocation</span>
              </h4>
              <p className="text-xs font-semibold text-slate-800">
                {viewExam.venue}
              </p>
              <p className="text-xs text-slate-500">
                {viewExam.roomAllocation || "Hall seating plan arranged alphabetically by student registration ID."}
              </p>
            </div>

            {/* Invigilator Duty */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Invigilation Committee</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="text-xs">
                  <span className="text-slate-400 block text-[11px]">Chief Invigilator:</span>
                  <span className="font-bold text-slate-900">{viewExam.chiefInvigilator}</span>
                </div>
                {viewExam.assistantInvigilator && (
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[11px]">Assistant Invigilator:</span>
                    <span className="font-bold text-slate-900">{viewExam.assistantInvigilator}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Examination Regulations */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Permitted Materials & Guidelines
              </h4>
              <div className="flex flex-wrap gap-2">
                {viewExam.allowedItems?.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-[11px] border border-slate-200/60"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <DashboardButton
                variant="primary"
                onClick={() => setViewExam(null)}
              >
                Close Plan
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 3: EDIT EXAM */}
      <DashboardModal
        isOpen={!!editExam}
        onClose={() => setEditExam(null)}
        title="Edit Exam Schedule"
        subtitle={editExam?.courseCode}
        maxWidth="max-w-2xl"
      >
        {editExam && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Course Code
                </label>
                <input
                  type="text"
                  disabled
                  value={formData.courseCode || ""}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Status
                </label>
                <select
                  value={formData.status || "Scheduled"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as ExamRecord["status"],
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Postponed">Postponed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Course Title
              </label>
              <input
                type="text"
                value={formData.courseTitle || ""}
                onChange={(e) =>
                  setFormData({ ...formData, courseTitle: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Exam Date
                </label>
                <input
                  type="text"
                  value={formData.examDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, examDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Time Slot
                </label>
                <input
                  type="text"
                  value={formData.timeSlot || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, timeSlot: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Venue / Hall
                </label>
                <input
                  type="text"
                  value={formData.venue || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, venue: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chief Invigilator
                </label>
                <input
                  type="text"
                  value={formData.chiefInvigilator || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, chiefInvigilator: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setEditExam(null)}
              >
                Cancel
              </DashboardButton>
              <DashboardButton variant="primary" onClick={handleSaveEdit}>
                Save Changes
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 4: DELETE CONFIRMATION */}
      <DashboardModal
        isOpen={!!deleteExamId}
        onClose={() => setDeleteExamId(null)}
        title="Cancel Exam Slot Confirmation"
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-800">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              Are you sure you want to cancel this scheduled exam slot? Room bookings and invigilation duties will be released.
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <DashboardButton
              variant="outline"
              onClick={() => setDeleteExamId(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="danger" onClick={handleDeleteConfirm}>
              Cancel Exam Slot
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
