"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  ChevronDown,
  UserCheck,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  AlertTriangle,
  Download,
  AlertCircle,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface StudentAttendanceEntry {
  studentId: string;
  name: string;
  attended: number;
  total: number;
  percentage: number;
  eligible: boolean;
}

export interface CourseAttendanceRecord {
  code: string;
  title: string;
  department: string;
  instructor: string;
  totalSessions: number;
  conductedSessions: number;
  enrolledStudents: number;
  averageRate: number;
  atRiskCount: number;
  status: "Optimal" | "Warning" | "Critical";
  students: StudentAttendanceEntry[];
}

const initialAttendanceData: CourseAttendanceRecord[] = [
  {
    code: "CSE-305",
    title: "Database Management System",
    department: "CSE",
    instructor: "Dr. Mohammad Rahman",
    totalSessions: 28,
    conductedSessions: 22,
    enrolledStudents: 42,
    averageRate: 88.5,
    atRiskCount: 2,
    status: "Optimal",
    students: [
      { studentId: "9021", name: "Siddiqur Rahman", attended: 22, total: 22, percentage: 100, eligible: true },
      { studentId: "9025", name: "Nusrat Jahan", attended: 21, total: 22, percentage: 95.5, eligible: true },
      { studentId: "8990", name: "Tariq Aziz", attended: 19, total: 22, percentage: 86.4, eligible: true },
      { studentId: "9104", name: "Anika Tabassum", attended: 16, total: 22, percentage: 72.7, eligible: false },
      { studentId: "8872", name: "Kamran Hossain", attended: 14, total: 22, percentage: 63.6, eligible: false },
    ],
  },
  {
    code: "CSE-311",
    title: "Software Engineering & Architecture",
    department: "CSE",
    instructor: "Dr. Kamrul Hasan",
    totalSessions: 28,
    conductedSessions: 23,
    enrolledStudents: 38,
    averageRate: 91.2,
    atRiskCount: 1,
    status: "Optimal",
    students: [
      { studentId: "9140", name: "Mehedi Hasan", attended: 23, total: 23, percentage: 100, eligible: true },
      { studentId: "9152", name: "Fariha Sultana", attended: 22, total: 23, percentage: 95.7, eligible: true },
      { studentId: "8794", name: "Sayed Mahmud", attended: 16, total: 23, percentage: 69.6, eligible: false },
    ],
  },
  {
    code: "CSE-315",
    title: "Computer Networks & Architecture",
    department: "CSE",
    instructor: "Ms. Sultana Ahmed",
    totalSessions: 28,
    conductedSessions: 21,
    enrolledStudents: 41,
    averageRate: 84.0,
    atRiskCount: 4,
    status: "Warning",
    students: [
      { studentId: "9032", name: "Mahfuzur Rahman", attended: 20, total: 21, percentage: 95.2, eligible: true },
      { studentId: "9045", name: "Sadia Chowdhury", attended: 18, total: 21, percentage: 85.7, eligible: true },
      { studentId: "8911", name: "Al-Amin Sheikh", attended: 15, total: 21, percentage: 71.4, eligible: false },
    ],
  },
  {
    code: "EEE-101",
    title: "Electrical Circuits I",
    department: "EEE",
    instructor: "Mr. Shafiul Alam",
    totalSessions: 28,
    conductedSessions: 20,
    enrolledStudents: 35,
    averageRate: 79.5,
    atRiskCount: 5,
    status: "Warning",
    students: [
      { studentId: "8810", name: "Rakib Hassan", attended: 19, total: 20, percentage: 95.0, eligible: true },
      { studentId: "8825", name: "Tanvir Ahmed", attended: 16, total: 20, percentage: 80.0, eligible: true },
      { studentId: "8945", name: "Shahriar Kabir", attended: 13, total: 20, percentage: 65.0, eligible: false },
    ],
  },
  {
    code: "MGT-201",
    title: "Principles of Strategic Marketing",
    department: "BBA",
    instructor: "Dr. Farhana Yasmin",
    totalSessions: 28,
    conductedSessions: 24,
    enrolledStudents: 55,
    averageRate: 93.8,
    atRiskCount: 0,
    status: "Optimal",
    students: [
      { studentId: "9201", name: "Tasnim Ferdous", attended: 24, total: 24, percentage: 100, eligible: true },
      { studentId: "9205", name: "Arifur Rahman", attended: 23, total: 24, percentage: 95.8, eligible: true },
    ],
  },
  {
    code: "CE-201",
    title: "Structural Mechanics & Surveying",
    department: "CE",
    instructor: "Prof. Dr. M. A. Rashid",
    totalSessions: 28,
    conductedSessions: 22,
    enrolledStudents: 32,
    averageRate: 86.4,
    atRiskCount: 3,
    status: "Optimal",
    students: [
      { studentId: "8601", name: "Sabbir Hossain", attended: 21, total: 22, percentage: 95.5, eligible: true },
      { studentId: "8615", name: "Monirul Islam", attended: 15, total: 22, percentage: 68.2, eligible: false },
    ],
  },
  {
    code: "ENG-101",
    title: "English Composition & Literature",
    department: "ENG",
    instructor: "Farhana Yasmin",
    totalSessions: 28,
    conductedSessions: 23,
    enrolledStudents: 28,
    averageRate: 89.0,
    atRiskCount: 1,
    status: "Optimal",
    students: [
      { studentId: "9401", name: "Lamia Haque", attended: 22, total: 23, percentage: 95.7, eligible: true },
    ],
  },
  {
    code: "CSE-401",
    title: "Artificial Intelligence & Neural Nets",
    department: "CSE",
    instructor: "Prof. Dr. Milan Stanković",
    totalSessions: 28,
    conductedSessions: 21,
    enrolledStudents: 35,
    averageRate: 72.1,
    atRiskCount: 8,
    status: "Critical",
    students: [
      { studentId: "9301", name: "Wasim Akram", attended: 19, total: 21, percentage: 90.5, eligible: true },
      { studentId: "9312", name: "Sohanur Rahman", attended: 14, total: 21, percentage: 66.7, eligible: false },
      { studentId: "9319", name: "Kazi Nabil", attended: 13, total: 21, percentage: 61.9, eligible: false },
    ],
  },
];

export default function AdminAttendanceView() {
  const [courses, setCourses] = useState<CourseAttendanceRecord[]>(initialAttendanceData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [viewRecord, setViewRecord] = useState<CourseAttendanceRecord | null>(null);
  const [recordSessionRecord, setRecordSessionRecord] = useState<CourseAttendanceRecord | null>(null);
  const [sessionDate, setSessionDate] = useState("Today (Nov 16, 2026)");
  const [sessionTopic, setSessionTopic] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        selectedDept === "All Departments" || c.department === selectedDept;

      const matchesStatus =
        selectedStatus === "All Statuses" || c.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [courses, searchQuery, selectedDept, selectedStatus]);

  // Handle Log Session
  const handleSaveSession = () => {
    if (!recordSessionRecord) return;
    setCourses(
      courses.map((item) =>
        item.code === recordSessionRecord.code
          ? {
              ...item,
              conductedSessions: Math.min(item.totalSessions, item.conductedSessions + 1),
            }
          : item
      )
    );
    showToast(`New attendance session recorded for ${recordSessionRecord.code}`);
    setRecordSessionRecord(null);
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
            Attendance Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Monitor class attendance rates, exam eligibility thresholds, and session records
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by course code, title, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] shadow-2xs transition"
            />
          </div>

          {/* Export Report Action */}
          <button
            type="button"
            onClick={() => showToast("Exporting attendance summary report (CSV)...")}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold shadow-2xs transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
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

        {/* Status Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Eligibility Status
          </span>
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Optimal">Optimal (&gt;85%)</option>
              <option value="Warning">Warning (75% - 85%)</option>
              <option value="Critical">Critical (&lt;75%)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Minimum Threshold Info */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs font-semibold text-amber-900 flex items-center justify-between">
            <span>Exam Threshold:</span>
            <span className="font-extrabold">Min 75%</span>
          </div>
        </div>

        {/* Total Courses Pill */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Active Courses:</span>
            <span className="font-extrabold text-[#0B1E36]">
              {courses.length} Courses
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Attendance Data Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-2 sm:px-2.5">Code</th>
                <th className="py-3 px-2 sm:px-2.5">Course Title</th>
                <th className="py-3 px-2 sm:px-2.5">Department</th>
                <th className="py-3 px-2 sm:px-2.5">Instructor</th>
                <th className="py-3 px-2 sm:px-2.5">Conducted</th>
                <th className="py-3 px-2 sm:px-2.5">Avg Attendance</th>
                <th className="py-3 px-2 sm:px-2.5">At-Risk (&lt;75%)</th>
                <th className="py-3 px-2 sm:px-2.5">Status</th>
                <th className="py-3 px-2 sm:px-2.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((c) => (
                  <tr
                    key={c.code}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    {/* Course Code */}
                    <td className="py-3.5 px-2 sm:px-2.5 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-[#9E7321] font-extrabold text-[11px] border border-amber-200/60">
                        {c.code}
                      </span>
                    </td>

                    {/* Course Title */}
                    <td className="py-3.5 px-2 sm:px-2.5 font-bold text-slate-900 max-w-[200px] sm:max-w-none">
                      {c.title}
                    </td>

                    {/* Department */}
                    <td className="py-3.5 px-2 sm:px-2.5 text-slate-600 font-semibold whitespace-nowrap">
                      {c.department}
                    </td>

                    {/* Instructor */}
                    <td className="py-3.5 px-2 sm:px-2.5 text-slate-700 whitespace-nowrap text-[11px]">
                      {c.instructor}
                    </td>

                    {/* Conducted Sessions */}
                    <td className="py-3.5 px-2 sm:px-2.5 whitespace-nowrap text-slate-700 text-[11px]">
                      <span className="font-bold text-slate-900">{c.conductedSessions}</span>
                      <span className="text-slate-400">/{c.totalSessions} Sessions</span>
                    </td>

                    {/* Average Attendance Rate */}
                    <td className="py-3.5 px-2 sm:px-2.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 min-w-9 text-xs">
                          {c.averageRate.toFixed(1)}%
                        </span>
                        <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              c.averageRate >= 85
                                ? "bg-emerald-500"
                                : c.averageRate >= 75
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}
                            style={{ width: `${Math.min(100, c.averageRate)}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* At-Risk Students Count */}
                    <td className="py-3.5 px-2 sm:px-2.5 whitespace-nowrap">
                      {c.atRiskCount > 0 ? (
                        <span className="inline-flex items-center gap-1 font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/60 text-[11px]">
                          <AlertCircle className="w-3 h-3 text-rose-500" />
                          {c.atRiskCount} Students
                        </span>
                      ) : (
                        <span className="text-slate-400 font-medium text-[11px]">None (0)</span>
                      )}
                    </td>

                    {/* Status Pill */}
                    <td className="py-3.5 px-2 sm:px-2.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${
                          c.status === "Optimal"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : c.status === "Warning"
                            ? "bg-amber-50 text-amber-700 border border-amber-200/60"
                            : "bg-rose-50 text-rose-700 border border-rose-200/60"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-2 sm:px-2.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View Student Attendance Roster */}
                        <button
                          type="button"
                          onClick={() => setViewRecord(c)}
                          title="View Attendance Roster & Eligibility"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Pencil: Record Session */}
                        <button
                          type="button"
                          onClick={() => {
                            setRecordSessionRecord(c);
                            setSessionTopic("");
                          }}
                          title="Record New Session"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
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
                    No course attendance records match the selected criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 4. Table Pagination Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div>
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredCourses.length > 0 ? "1" : "0"}-
              {filteredCourses.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">
              {courses.length}
            </span>{" "}
            entries
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 font-semibold cursor-pointer text-slate-700"
            >
              Previous
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center bg-[#0B1E36] text-white cursor-pointer"
            >
              1
            </button>
            <button
              type="button"
              disabled
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 font-semibold cursor-pointer text-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL 1: VIEW STUDENT ATTENDANCE ROSTER */}
      <DashboardModal
        isOpen={!!viewRecord}
        onClose={() => setViewRecord(null)}
        title={viewRecord ? `${viewRecord.code} Attendance Roster` : "Attendance Roster"}
        subtitle={viewRecord ? `${viewRecord.title} · ${viewRecord.instructor} (${viewRecord.enrolledStudents} Students)` : undefined}
        maxWidth="max-w-2xl"
      >
        {viewRecord && (
          <div className="space-y-4">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Conducted</span>
                <span className="text-sm font-extrabold text-slate-900">{viewRecord.conductedSessions} Sessions</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Average Rate</span>
                <span className="text-sm font-extrabold text-slate-900">{viewRecord.averageRate.toFixed(1)}%</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
                <span className="text-[10px] font-semibold text-rose-600 uppercase block">At-Risk (&lt;75%)</span>
                <span className="text-sm font-extrabold text-rose-700">{viewRecord.atRiskCount} Students</span>
              </div>
            </div>

            {/* Students Table */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Student Attendance & Examination Eligibility
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-100">
                    <tr>
                      <th className="py-2.5 px-3">Student ID</th>
                      <th className="py-2.5 px-3">Student Name</th>
                      <th className="py-2.5 px-3">Attended</th>
                      <th className="py-2.5 px-3">Percentage</th>
                      <th className="py-2.5 px-3 text-right">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {viewRecord.students.map((st) => (
                      <tr key={st.studentId} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3 font-bold text-slate-900">{st.studentId}</td>
                        <td className="py-2.5 px-3">{st.name}</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {st.attended} / {st.total}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          {st.percentage.toFixed(1)}%
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                              st.eligible
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                                : "bg-rose-50 text-rose-700 border border-rose-200/60"
                            }`}
                          >
                            {st.eligible ? "Eligible" : "Below 75%"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <DashboardButton variant="primary" onClick={() => setViewRecord(null)}>
                Close Roster
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 2: RECORD NEW ATTENDANCE SESSION */}
      <DashboardModal
        isOpen={!!recordSessionRecord}
        onClose={() => setRecordSessionRecord(null)}
        title="Record Class Attendance Session"
        subtitle={recordSessionRecord ? `${recordSessionRecord.title} (${recordSessionRecord.code})` : undefined}
        maxWidth="max-w-md"
      >
        {recordSessionRecord && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Session Date
              </label>
              <input
                type="text"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Lecture Topic / Chapter
              </label>
              <input
                type="text"
                placeholder="e.g. Relational Algebra & Query Optimization"
                value={sessionTopic}
                onChange={(e) => setSessionTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
              <span className="font-semibold block mb-1">Session Number:</span>
              <span>
                Session {recordSessionRecord.conductedSessions + 1} of {recordSessionRecord.totalSessions} scheduled lectures.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setRecordSessionRecord(null)}
              >
                Cancel
              </DashboardButton>
              <DashboardButton variant="primary" onClick={handleSaveSession}>
                Submit Attendance Log
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>
    </div>
  );
}
