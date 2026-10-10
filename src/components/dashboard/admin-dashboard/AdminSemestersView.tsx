"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  CalendarRange,
  Calendar,
  Clock,
  BookOpen,
  Users,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface SemesterMilestone {
  event: string;
  date: string;
  type: "academic" | "exam" | "deadline";
}

export interface SemesterRecord {
  code: string;
  name: string;
  academicYear: string;
  termType: "Fall" | "Spring" | "Summer";
  startDate: string;
  endDate: string;
  regStart: string;
  regEnd: string;
  coursesCount: number;
  studentsCount: number;
  status: "Ongoing" | "Upcoming" | "Completed";
  examStart?: string;
  examEnd?: string;
  milestones?: SemesterMilestone[];
  isCurrent?: boolean;
}

const initialSemesters: SemesterRecord[] = [
  {
    code: "FALL-2026",
    name: "Fall Semester 2026",
    academicYear: "2026 - 2027",
    termType: "Fall",
    startDate: "Sep 01, 2026",
    endDate: "Jan 15, 2027",
    regStart: "Aug 15, 2026",
    regEnd: "Aug 31, 2026",
    coursesCount: 156,
    studentsCount: 1245,
    status: "Ongoing",
    isCurrent: true,
    examStart: "Dec 18, 2026",
    examEnd: "Jan 05, 2027",
    milestones: [
      { event: "Orientation & Induction", date: "Sep 01, 2026", type: "academic" },
      { event: "Classes Commencement", date: "Sep 03, 2026", type: "academic" },
      { event: "Last Date for Course Add/Drop", date: "Sep 15, 2026", type: "deadline" },
      { event: "Midterm Examinations", date: "Oct 24 - Nov 02, 2026", type: "exam" },
      { event: "Final Course Withdrawal Deadline", date: "Nov 20, 2026", type: "deadline" },
      { event: "Final Examinations Period", date: "Dec 18 - Jan 05, 2027", type: "exam" },
      { event: "Official Grade Publishing", date: "Jan 15, 2027", type: "deadline" },
    ],
  },
  {
    code: "SPRING-2027",
    name: "Spring Semester 2027",
    academicYear: "2026 - 2027",
    termType: "Spring",
    startDate: "Feb 01, 2027",
    endDate: "Jun 20, 2027",
    regStart: "Jan 10, 2027",
    regEnd: "Jan 25, 2027",
    coursesCount: 148,
    studentsCount: 1290,
    status: "Upcoming",
    isCurrent: false,
    examStart: "May 25, 2027",
    examEnd: "Jun 12, 2027",
    milestones: [
      { event: "Course Registration Window", date: "Jan 10 - Jan 25, 2027", type: "deadline" },
      { event: "First Day of Lectures", date: "Feb 01, 2027", type: "academic" },
      { event: "Midterm Examinations", date: "Mar 22 - Mar 31, 2027", type: "exam" },
      { event: "Final Examinations", date: "May 25 - Jun 12, 2027", type: "exam" },
    ],
  },
  {
    code: "SUMMER-2027",
    name: "Summer Session 2027",
    academicYear: "2026 - 2027",
    termType: "Summer",
    startDate: "Jul 01, 2027",
    endDate: "Aug 25, 2027",
    regStart: "Jun 20, 2027",
    regEnd: "Jun 28, 2027",
    coursesCount: 45,
    studentsCount: 380,
    status: "Upcoming",
    isCurrent: false,
    examStart: "Aug 15, 2027",
    examEnd: "Aug 22, 2027",
    milestones: [
      { event: "Summer Registration", date: "Jun 20 - Jun 28, 2027", type: "deadline" },
      { event: "Intensive Classes Begin", date: "Jul 01, 2027", type: "academic" },
      { event: "Summer Term Final Exams", date: "Aug 15 - Aug 22, 2027", type: "exam" },
    ],
  },
  {
    code: "SPRING-2026",
    name: "Spring Semester 2026",
    academicYear: "2025 - 2026",
    termType: "Spring",
    startDate: "Feb 01, 2026",
    endDate: "Jun 18, 2026",
    regStart: "Jan 12, 2026",
    regEnd: "Jan 27, 2026",
    coursesCount: 152,
    studentsCount: 1195,
    status: "Completed",
    isCurrent: false,
    examStart: "May 20, 2026",
    examEnd: "Jun 10, 2026",
    milestones: [
      { event: "Term Completed & Grades Archived", date: "Jun 25, 2026", type: "deadline" },
    ],
  },
  {
    code: "FALL-2025",
    name: "Fall Semester 2025",
    academicYear: "2025 - 2026",
    termType: "Fall",
    startDate: "Sep 01, 2025",
    endDate: "Jan 14, 2026",
    regStart: "Aug 18, 2025",
    regEnd: "Aug 30, 2025",
    coursesCount: 144,
    studentsCount: 1120,
    status: "Completed",
    isCurrent: false,
    examStart: "Dec 15, 2025",
    examEnd: "Jan 04, 2026",
    milestones: [
      { event: "Term Completed & Grades Archived", date: "Jan 20, 2026", type: "deadline" },
    ],
  },
  {
    code: "SUMMER-2026",
    name: "Summer Session 2026",
    academicYear: "2025 - 2026",
    termType: "Summer",
    startDate: "Jul 01, 2026",
    endDate: "Aug 24, 2026",
    regStart: "Jun 18, 2026",
    regEnd: "Jun 27, 2026",
    coursesCount: 38,
    studentsCount: 310,
    status: "Completed",
    isCurrent: false,
    examStart: "Aug 16, 2026",
    examEnd: "Aug 22, 2026",
    milestones: [
      { event: "Summer Term Closed", date: "Aug 28, 2026", type: "deadline" },
    ],
  },
];

export default function AdminSemestersView() {
  const [semesters, setSemesters] = useState<SemesterRecord[]>(initialSemesters);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Academic Years");
  const [selectedType, setSelectedType] = useState("All Term Types");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewSemester, setViewSemester] = useState<SemesterRecord | null>(null);
  const [editSemester, setEditSemester] = useState<SemesterRecord | null>(null);
  const [deleteSemesterCode, setDeleteSemesterCode] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<SemesterRecord>>({
    code: "",
    name: "",
    academicYear: "2026 - 2027",
    termType: "Fall",
    startDate: "Sep 01, 2027",
    endDate: "Jan 15, 2028",
    regStart: "Aug 15, 2027",
    regEnd: "Aug 31, 2027",
    coursesCount: 150,
    studentsCount: 1200,
    status: "Upcoming",
    examStart: "Dec 18, 2027",
    examEnd: "Jan 05, 2028",
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Find active ongoing semester
  const activeSemester = useMemo(() => {
    return semesters.find((s) => s.isCurrent) || semesters[0];
  }, [semesters]);

  // Filter Logic
  const filteredSemesters = useMemo(() => {
    return semesters.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.academicYear.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear =
        selectedYear === "All Academic Years" || s.academicYear === selectedYear;

      const matchesType =
        selectedType === "All Term Types" || s.termType === selectedType;

      const matchesStatus =
        selectedStatus === "All Statuses" || s.status === selectedStatus;

      return matchesSearch && matchesYear && matchesType && matchesStatus;
    });
  }, [semesters, searchQuery, selectedYear, selectedType, selectedStatus]);

  // Handlers
  const handleOpenAdd = () => {
    setFormData({
      code: "",
      name: "",
      academicYear: "2026 - 2027",
      termType: "Fall",
      startDate: "Sep 01, 2027",
      endDate: "Jan 15, 2028",
      regStart: "Aug 15, 2027",
      regEnd: "Aug 31, 2027",
      coursesCount: 150,
      studentsCount: 0,
      status: "Upcoming",
      examStart: "Dec 18, 2027",
      examEnd: "Jan 05, 2028",
    });
    setIsAddModalOpen(true);
  };

  const handleSaveAdd = () => {
    if (!formData.code || !formData.name) {
      alert("Please provide Semester Code and Name.");
      return;
    }

    const newRecord: SemesterRecord = {
      code: formData.code.toUpperCase(),
      name: formData.name,
      academicYear: formData.academicYear || "2026 - 2027",
      termType: (formData.termType as SemesterRecord["termType"]) || "Fall",
      startDate: formData.startDate || "Sep 01, 2027",
      endDate: formData.endDate || "Jan 15, 2028",
      regStart: formData.regStart || "Aug 15, 2027",
      regEnd: formData.regEnd || "Aug 31, 2027",
      coursesCount: Number(formData.coursesCount) || 120,
      studentsCount: Number(formData.studentsCount) || 0,
      status: (formData.status as SemesterRecord["status"]) || "Upcoming",
      examStart: formData.examStart || "Dec 18, 2027",
      examEnd: formData.examEnd || "Jan 05, 2028",
      milestones: [
        { event: "Orientation & Classes Begin", date: formData.startDate || "", type: "academic" },
        { event: "Final Examinations", date: `${formData.examStart} - ${formData.examEnd}`, type: "exam" },
      ],
    };

    setSemesters([newRecord, ...semesters]);
    setIsAddModalOpen(false);
    showToast(`Semester "${newRecord.code}" created successfully!`);
  };

  const handleOpenEdit = (s: SemesterRecord) => {
    setEditSemester(s);
    setFormData({ ...s });
  };

  const handleSaveEdit = () => {
    if (!editSemester) return;
    setSemesters(
      semesters.map((item) =>
        item.code === editSemester.code ? { ...item, ...formData } : item
      )
    );
    setEditSemester(null);
    showToast(`Semester "${editSemester.code}" updated.`);
  };

  const handleDeleteConfirm = () => {
    if (!deleteSemesterCode) return;
    setSemesters(semesters.filter((s) => s.code !== deleteSemesterCode));
    showToast(`Semester "${deleteSemesterCode}" removed.`);
    setDeleteSemesterCode(null);
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
            Semester Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Plan academic terms, registration deadlines, exam periods, and session calendars
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by code, term, or academic year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] shadow-2xs transition"
            />
          </div>

          {/* Add Semester Button */}
          <button
            type="button"
            onClick={handleOpenAdd}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Create Semester</span>
          </button>
        </div>
      </div>

      {/* 2. Active Ongoing Term Spotlight Banner */}
      {activeSemester && (
        <div className="rounded-2xl bg-gradient-to-r from-[#0B1E36] via-[#102A4C] to-[#0B1E36] p-5 sm:p-6 text-white shadow-sm border border-slate-700/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#C69234]/10 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Academic Term
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {activeSemester.academicYear}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {activeSemester.name} ({activeSemester.code})
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-[#D5A754]" />
                <span>
                  {activeSemester.startDate} — {activeSemester.endDate}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-[#D5A754] font-semibold">Week 8 of 16</span>
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Registration Window
                </span>
                <span className="text-xs font-bold text-emerald-300 mt-0.5 block">
                  Closed (Archived)
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Offered Courses
                </span>
                <span className="text-sm font-extrabold text-[#D5A754] mt-0.5 block">
                  {activeSemester.coursesCount} Courses
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Enrolled Students
                </span>
                <span className="text-sm font-extrabold text-white mt-0.5 block">
                  {activeSemester.studentsCount.toLocaleString()} Students
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Filter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Academic Year Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Academic Year
          </span>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Academic Years">All Academic Years</option>
              <option value="2026 - 2027">2026 - 2027</option>
              <option value="2025 - 2026">2025 - 2026</option>
              <option value="2024 - 2025">2024 - 2025</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Term Type Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Term Type
          </span>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Term Types">All Term Types</option>
              <option value="Fall">Fall Semester</option>
              <option value="Spring">Spring Semester</option>
              <option value="Summer">Summer Session</option>
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
              <option value="Ongoing">Ongoing (Active)</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed / Archived</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Total Count Pill */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Total Terms:</span>
            <span className="font-extrabold text-[#0B1E36]">
              {semesters.length} Semesters
            </span>
          </div>
        </div>
      </div>

      {/* 4. Main Semesters Data Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Term Code</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Semester Name</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Academic Year</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Term Duration</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Registration Window</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Courses</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Enrolled</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3">Status</th>
                <th className="py-3 px-2 sm:px-2.5 lg:px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredSemesters.length > 0 ? (
                filteredSemesters.map((s) => (
                  <tr
                    key={s.code}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    {/* Code Badge */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-[#9E7321] font-extrabold text-[11px] border border-amber-200/60">
                        {s.code}
                      </span>
                    </td>

                    {/* Semester Name & Type */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 font-bold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{s.name}</span>
                        {s.isCurrent && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                            Current
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Academic Year */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-slate-600 font-semibold whitespace-nowrap">
                      {s.academicYear}
                    </td>

                    {/* Term Duration */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-slate-700 whitespace-nowrap text-[11px]">
                      <div className="font-semibold text-slate-800">{s.startDate}</div>
                      <div className="text-slate-400 font-medium">to {s.endDate}</div>
                    </td>

                    {/* Registration Window */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-slate-600 whitespace-nowrap text-[11px]">
                      <div className="font-semibold text-slate-800">{s.regStart}</div>
                      <div className="text-slate-400 font-medium">to {s.regEnd}</div>
                    </td>

                    {/* Courses Count */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap font-bold text-slate-800">
                      {s.coursesCount} Courses
                    </td>

                    {/* Enrolled Students */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap font-semibold text-slate-800">
                      {s.studentsCount.toLocaleString()} Students
                    </td>

                    {/* Status Pill */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          s.status === "Ongoing"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : s.status === "Upcoming"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-2 sm:px-2.5 lg:px-3 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View Calendar & Milestones */}
                        <button
                          type="button"
                          onClick={() => setViewSemester(s)}
                          title="View Calendar & Academic Milestones"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(s)}
                          title="Edit Semester"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteSemesterCode(s.code)}
                          title="Remove Semester"
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
                    No semesters match the current filter selection.
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
              {filteredSemesters.length > 0 ? "1" : "0"}-
              {Math.min(filteredSemesters.length, 6)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">
              {semesters.length}
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

      {/* MODAL 1: CREATE SEMESTER */}
      <DashboardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Create New Academic Semester"
        subtitle="Configure term dates, registration deadlines, and examination schedules"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Semester Code *
              </label>
              <input
                type="text"
                placeholder="e.g. FALL-2027, SPRING-2028"
                value={formData.code || ""}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Academic Year *
              </label>
              <input
                type="text"
                placeholder="e.g. 2027 - 2028"
                value={formData.academicYear || "2026 - 2027"}
                onChange={(e) =>
                  setFormData({ ...formData, academicYear: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Semester Display Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Fall Semester 2027"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Term Type
              </label>
              <select
                value={formData.termType || "Fall"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    termType: e.target.value as SemesterRecord["termType"],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="Fall">Fall Semester</option>
                <option value="Spring">Spring Semester</option>
                <option value="Summer">Summer Session</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Classes Start Date
              </label>
              <input
                type="text"
                placeholder="e.g. Sep 01, 2027"
                value={formData.startDate || ""}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Classes End Date
              </label>
              <input
                type="text"
                placeholder="e.g. Jan 15, 2028"
                value={formData.endDate || ""}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Course Registration Opens
              </label>
              <input
                type="text"
                placeholder="e.g. Aug 15, 2027"
                value={formData.regStart || ""}
                onChange={(e) =>
                  setFormData({ ...formData, regStart: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Registration Deadline
              </label>
              <input
                type="text"
                placeholder="e.g. Aug 31, 2027"
                value={formData.regEnd || ""}
                onChange={(e) =>
                  setFormData({ ...formData, regEnd: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Expected Courses
              </label>
              <input
                type="number"
                placeholder="150"
                value={formData.coursesCount || 150}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    coursesCount: Number(e.target.value),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Exam Start Date
              </label>
              <input
                type="text"
                placeholder="e.g. Dec 18, 2027"
                value={formData.examStart || ""}
                onChange={(e) =>
                  setFormData({ ...formData, examStart: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Status
              </label>
              <select
                value={formData.status || "Upcoming"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as SemesterRecord["status"],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing (Active)</option>
                <option value="Completed">Completed</option>
              </select>
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
              Create Semester
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>

      {/* MODAL 2: VIEW CALENDAR & MILESTONES */}
      <DashboardModal
        isOpen={!!viewSemester}
        onClose={() => setViewSemester(null)}
        title={viewSemester ? `${viewSemester.code} Academic Milestones` : "Semester Calendar"}
        subtitle={viewSemester?.name}
        maxWidth="max-w-2xl"
      >
        {viewSemester && (
          <div className="space-y-5">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Academic Year
                </span>
                <span className="text-xs font-bold text-[#0B1E36]">
                  {viewSemester.academicYear}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Term Status
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  {viewSemester.status}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Total Courses
                </span>
                <span className="text-xs font-bold text-[#C69234]">
                  {viewSemester.coursesCount} Courses
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Student Enrollment
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {viewSemester.studentsCount.toLocaleString()} Students
                </span>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Key Academic Milestones & Deadlines</span>
              </h4>

              <div className="space-y-2.5">
                {viewSemester.milestones && viewSemester.milestones.length > 0 ? (
                  viewSemester.milestones.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50/70 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            m.type === "exam"
                              ? "bg-amber-100 text-amber-800"
                              : m.type === "deadline"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">
                            {m.event}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 capitalize">
                            Category: {m.type}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-extrabold text-[#0B1E36] bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/60">
                        {m.date}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic py-2">
                    Standard semester milestones scheduled according to the academic Senate calendar.
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <DashboardButton
                variant="primary"
                onClick={() => setViewSemester(null)}
              >
                Close Calendar
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 3: EDIT SEMESTER */}
      <DashboardModal
        isOpen={!!editSemester}
        onClose={() => setEditSemester(null)}
        title="Edit Semester Details"
        subtitle={editSemester?.code}
        maxWidth="max-w-2xl"
      >
        {editSemester && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Semester Code
                </label>
                <input
                  type="text"
                  disabled
                  value={formData.code || ""}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Status
                </label>
                <select
                  value={formData.status || "Upcoming"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as SemesterRecord["status"],
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                >
                  <option value="Ongoing">Ongoing (Active)</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Completed">Completed / Archived</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Semester Display Name
              </label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Classes Start Date
                </label>
                <input
                  type="text"
                  value={formData.startDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Classes End Date
                </label>
                <input
                  type="text"
                  value={formData.endDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Registration Window
                </label>
                <input
                  type="text"
                  value={`${formData.regStart || ""} — ${formData.regEnd || ""}`}
                  onChange={(e) => {
                    const parts = e.target.value.split("—");
                    setFormData({
                      ...formData,
                      regStart: parts[0]?.trim(),
                      regEnd: parts[1]?.trim() || "",
                    });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Total Courses
                </label>
                <input
                  type="number"
                  value={formData.coursesCount || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      coursesCount: Number(e.target.value),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setEditSemester(null)}
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
        isOpen={!!deleteSemesterCode}
        onClose={() => setDeleteSemesterCode(null)}
        title="Remove Semester Confirmation"
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-800">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              Are you sure you want to remove semester{" "}
              <strong className="font-bold">{deleteSemesterCode}</strong>? Registered
              course schedules and enrollment records tied to this term will be archived.
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <DashboardButton
              variant="outline"
              onClick={() => setDeleteSemesterCode(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="danger" onClick={handleDeleteConfirm}>
              Remove Semester
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
