"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Eye,
  FileCheck,
  TrendingUp,
  Award,
  BookOpen,
  User,
  Calendar,
  Send,
  X,
  ArrowRight,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface StudentGradeEntry {
  studentId: string;
  studentName: string;
  midterm: number;
  final: number;
  quizzes: number;
  total: number;
  grade: string;
  gpa: number;
}

export interface ResultSubmission {
  id: string;
  courseTitle: string;
  courseCode: string;
  instructor: string;
  semester: string;
  studentsCount: number;
  submittedDate: string;
  status: "Pending Approval" | "Published" | "Returned";
  averageScore: number;
  highestScore: string;
  lowestScore: string;
  passRate: string;
  returnNote?: string;
  publishedDate?: string;
  sampleGrades: StudentGradeEntry[];
}

const mockSubmissions: ResultSubmission[] = [
  {
    id: "sub-1",
    courseTitle: "Database Management",
    courseCode: "CSE-305",
    instructor: "Dr. Mohammad Rahman",
    semester: "Fall 2026",
    studentsCount: 42,
    submittedDate: "Nov 12, 2026",
    status: "Pending Approval",
    averageScore: 78.4,
    highestScore: "98.0 (ID: 9021)",
    lowestScore: "45.0 (ID: 8872)",
    passRate: "95.2% (40/42)",
    sampleGrades: [
      { studentId: "9021", studentName: "Siddiqur Rahman", midterm: 29, final: 49, quizzes: 20, total: 98, grade: "A+", gpa: 4.0 },
      { studentId: "9025", studentName: "Nusrat Jahan", midterm: 27, final: 44, quizzes: 18, total: 89, grade: "A", gpa: 3.75 },
      { studentId: "8990", studentName: "Tariq Aziz", midterm: 24, final: 39, quizzes: 17, total: 80, grade: "B+", gpa: 3.25 },
      { studentId: "9104", studentName: "Anika Tabassum", midterm: 22, final: 36, quizzes: 15, total: 73, grade: "B", gpa: 3.0 },
      { studentId: "8872", studentName: "Kamran Hossain", midterm: 12, final: 23, quizzes: 10, total: 45, grade: "D", gpa: 2.0 },
    ],
  },
  {
    id: "sub-2",
    courseTitle: "Software Engineering",
    courseCode: "CSE-311",
    instructor: "Dr. Kamrul Hasan",
    semester: "Fall 2026",
    studentsCount: 38,
    submittedDate: "Nov 13, 2026",
    status: "Pending Approval",
    averageScore: 81.2,
    highestScore: "96.5 (ID: 9140)",
    lowestScore: "52.0 (ID: 8794)",
    passRate: "97.4% (37/38)",
    sampleGrades: [
      { studentId: "9140", studentName: "Mehedi Hasan", midterm: 28, final: 48.5, quizzes: 20, total: 96.5, grade: "A+", gpa: 4.0 },
      { studentId: "9152", studentName: "Fariha Sultana", midterm: 26, final: 45, quizzes: 19, total: 90, grade: "A", gpa: 3.75 },
      { studentId: "9088", studentName: "Rafiul Alam", midterm: 23, final: 40, quizzes: 18, total: 81, grade: "B+", gpa: 3.25 },
      { studentId: "8794", studentName: "Sayed Mahmud", midterm: 15, final: 25, quizzes: 12, total: 52, grade: "C", gpa: 2.25 },
    ],
  },
  {
    id: "sub-3",
    courseTitle: "Computer Architecture",
    courseCode: "CSE-315",
    instructor: "Ms. Sultana Ahmed",
    semester: "Fall 2026",
    studentsCount: 41,
    submittedDate: "Nov 14, 2026",
    status: "Pending Approval",
    averageScore: 76.8,
    highestScore: "95.0 (ID: 9032)",
    lowestScore: "48.0 (ID: 8911)",
    passRate: "92.7% (38/41)",
    sampleGrades: [
      { studentId: "9032", studentName: "Mahfuzur Rahman", midterm: 28, final: 47, quizzes: 20, total: 95, grade: "A+", gpa: 4.0 },
      { studentId: "9045", studentName: "Sadia Chowdhury", midterm: 25, final: 43, quizzes: 17, total: 85, grade: "A", gpa: 3.75 },
      { studentId: "8911", studentName: "Al-Amin Sheikh", midterm: 14, final: 24, quizzes: 10, total: 48, grade: "D", gpa: 2.0 },
    ],
  },
  {
    id: "sub-4",
    courseTitle: "Electrical Circuits I",
    courseCode: "EEE-101",
    instructor: "Mr. Shafiul Alam",
    semester: "Fall 2026",
    studentsCount: 35,
    submittedDate: "Nov 14, 2026",
    status: "Pending Approval",
    averageScore: 74.5,
    highestScore: "97.0 (ID: 8810)",
    lowestScore: "42.0 (ID: 8945)",
    passRate: "91.4% (32/35)",
    sampleGrades: [
      { studentId: "8810", studentName: "Rakib Hassan", midterm: 29, final: 48, quizzes: 20, total: 97, grade: "A+", gpa: 4.0 },
      { studentId: "8825", studentName: "Tanvir Ahmed", midterm: 23, final: 38, quizzes: 16, total: 77, grade: "B+", gpa: 3.25 },
      { studentId: "8945", studentName: "Shahriar Kabir", midterm: 11, final: 21, quizzes: 10, total: 42, grade: "F", gpa: 0.0 },
    ],
  },
  {
    id: "sub-5",
    courseTitle: "Principles of Marketing",
    courseCode: "MGT-201",
    instructor: "Dr. Farhana Yasmin",
    semester: "Fall 2026",
    studentsCount: 55,
    submittedDate: "Nov 15, 2026",
    status: "Pending Approval",
    averageScore: 83.1,
    highestScore: "99.0 (ID: 9201)",
    lowestScore: "58.0 (ID: 9114)",
    passRate: "98.2% (54/55)",
    sampleGrades: [
      { studentId: "9201", studentName: "Tasnim Ferdous", midterm: 30, final: 49, quizzes: 20, total: 99, grade: "A+", gpa: 4.0 },
      { studentId: "9205", studentName: "Arifur Rahman", midterm: 27, final: 46, quizzes: 19, total: 92, grade: "A", gpa: 3.75 },
      { studentId: "9114", studentName: "Nahian Chowdhury", midterm: 18, final: 28, quizzes: 12, total: 58, grade: "C+", gpa: 2.5 },
    ],
  },
  {
    id: "sub-6",
    courseTitle: "Data Structures & Algorithms",
    courseCode: "CSE-207",
    instructor: "Prof. Dr. Milan Stanković",
    semester: "Spring 2026",
    studentsCount: 46,
    submittedDate: "Jun 18, 2026",
    status: "Published",
    publishedDate: "Jun 20, 2026",
    averageScore: 79.5,
    highestScore: "98.5 (ID: 8750)",
    lowestScore: "50.0 (ID: 8690)",
    passRate: "95.6% (44/46)",
    sampleGrades: [],
  },
  {
    id: "sub-7",
    courseTitle: "Digital Logic Design",
    courseCode: "CSE-209",
    instructor: "Dr. Tariqul Islam",
    semester: "Spring 2026",
    studentsCount: 39,
    submittedDate: "Jun 19, 2026",
    status: "Published",
    publishedDate: "Jun 22, 2026",
    averageScore: 77.2,
    highestScore: "94.0 (ID: 8731)",
    lowestScore: "46.0 (ID: 8645)",
    passRate: "92.3% (36/39)",
    sampleGrades: [],
  },
  {
    id: "sub-8",
    courseTitle: "Differential Equations",
    courseCode: "MAT-201",
    instructor: "Prof. Dr. M. A. Rashid",
    semester: "Fall 2026",
    studentsCount: 40,
    submittedDate: "Nov 10, 2026",
    status: "Returned",
    returnNote: "Grading curve discrepancy: Continuous assessment weight did not reflect approved 40% syllabus policy.",
    averageScore: 68.0,
    highestScore: "91.0 (ID: 9005)",
    lowestScore: "38.0 (ID: 8970)",
    passRate: "82.5% (33/40)",
    sampleGrades: [],
  },
];

export default function AdminResultsView() {
  const [submissions, setSubmissions] = useState<ResultSubmission[]>(mockSubmissions);
  const [activeTab, setActiveTab] = useState<"Pending Approval" | "Published" | "Returned">(
    "Pending Approval"
  );

  // Modals
  const [reviewSubmission, setReviewSubmission] = useState<ResultSubmission | null>(null);
  const [returnSubmission, setReturnSubmission] = useState<ResultSubmission | null>(null);
  const [returnNoteInput, setReturnNoteInput] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Filtered by current tab
  const currentList = submissions.filter((s) => s.status === activeTab);

  const pendingCount = submissions.filter((s) => s.status === "Pending Approval").length;
  const publishedCount = submissions.filter((s) => s.status === "Published").length;
  const returnedCount = submissions.filter((s) => s.status === "Returned").length;

  // Selected item for bottom performance insights card
  const selectedForInsights =
    reviewSubmission ||
    (currentList.length > 0 ? currentList[0] : submissions[0]);

  // Actions
  const handleApprove = (item: ResultSubmission) => {
    setSubmissions(
      submissions.map((s) =>
        s.id === item.id
          ? { ...s, status: "Published", publishedDate: "Today" }
          : s
      )
    );
    setReviewSubmission(null);
    showToast(
      `Results for ${item.courseTitle} (${item.courseCode}) approved and published to transcripts!`
    );
  };

  const handleOpenReturnModal = (item: ResultSubmission) => {
    setReturnSubmission(item);
    setReturnNoteInput(
      "Please re-check final exam marks moderation and update grade sheet."
    );
  };

  const handleConfirmReturn = () => {
    if (!returnSubmission) return;
    setSubmissions(
      submissions.map((s) =>
        s.id === returnSubmission.id
          ? { ...s, status: "Returned", returnNote: returnNoteInput }
          : s
      )
    );
    showToast(
      `Result sheet for ${returnSubmission.courseCode} returned to ${returnSubmission.instructor}.`
    );
    setReturnSubmission(null);
    if (reviewSubmission?.id === returnSubmission.id) {
      setReviewSubmission(null);
    }
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
          Result Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
          Review, endorse, and publish final student semester results submitted by professors
        </p>
      </div>

      {/* 2. Tab Navigation Pills */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("Pending Approval")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === "Pending Approval"
              ? "bg-[#0B1E36] text-white shadow-xs"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
          }`}
        >
          Pending Approval ({pendingCount})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("Published")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === "Published"
              ? "bg-[#0B1E36] text-white shadow-xs"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
          }`}
        >
          Published {publishedCount > 0 && `(${publishedCount})`}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("Returned")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === "Returned"
              ? "bg-[#0B1E36] text-white shadow-xs"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
          }`}
        >
          Returned {returnedCount > 0 && `(${returnedCount})`}
        </button>
      </div>

      {/* 3. Main Results Table Card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/60 border-b border-slate-100 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6">Course Details</th>
                <th className="py-4 px-4 sm:px-6">Instructor</th>
                <th className="py-4 px-4 sm:px-6">Semester</th>
                <th className="py-4 px-4 sm:px-6">Students</th>
                <th className="py-4 px-4 sm:px-6">Submitted Date</th>
                <th className="py-4 px-4 sm:px-6 text-right">Approval Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {currentList.length > 0 ? (
                currentList.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    {/* Course Details */}
                    <td className="py-4.5 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap">
                      {item.courseTitle} ({item.courseCode})
                    </td>

                    {/* Instructor */}
                    <td className="py-4.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {item.instructor}
                    </td>

                    {/* Semester */}
                    <td className="py-4.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {item.semester}
                    </td>

                    {/* Students Count */}
                    <td className="py-4.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {item.studentsCount} Students
                    </td>

                    {/* Submitted Date */}
                    <td className="py-4.5 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {item.submittedDate}
                    </td>

                    {/* Approval Actions */}
                    <td className="py-4.5 px-4 sm:px-6 text-right whitespace-nowrap">
                      {item.status === "Pending Approval" ? (
                        <div className="inline-flex items-center gap-2.5">
                          {/* Review & Approve Button */}
                          <button
                            type="button"
                            onClick={() => setReviewSubmission(item)}
                            className="px-4 py-2 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs font-bold shadow-2xs hover:shadow-xs transition cursor-pointer"
                          >
                            Review & Approve
                          </button>

                          {/* Return Button */}
                          <button
                            type="button"
                            onClick={() => handleOpenReturnModal(item)}
                            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 text-xs font-semibold shadow-2xs transition cursor-pointer"
                          >
                            Return
                          </button>
                        </div>
                      ) : item.status === "Published" ? (
                        <div className="inline-flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-bold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Published
                          </span>
                          <button
                            type="button"
                            onClick={() => setReviewSubmission(item)}
                            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                            title="View Grade Sheet"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 font-bold text-xs">
                            <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
                            Returned for Revision
                          </span>
                          <button
                            type="button"
                            onClick={() => setReviewSubmission(item)}
                            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                            title="View Grade Sheet"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                    No grade submissions in {activeTab}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Performance Insights & Grading Curve Summary Card */}
      {selectedForInsights && (
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              Performance Insights & Grading Curve Summary
            </h3>
            <span className="text-[11px] font-semibold text-slate-400">
              Selected: {selectedForInsights.courseTitle} ({selectedForInsights.courseCode})
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {/* AVERAGE SCORE */}
            <div className="space-y-1">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Average Score
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedForInsights.averageScore.toFixed(1)} / 100
              </p>
            </div>

            {/* HIGHEST SCORE */}
            <div className="space-y-1">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Highest Score
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedForInsights.highestScore}
              </p>
            </div>

            {/* LOWEST SCORE */}
            <div className="space-y-1">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Lowest Score
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedForInsights.lowestScore}
              </p>
            </div>

            {/* PASS RATE */}
            <div className="space-y-1">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Pass Rate
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-600">
                {selectedForInsights.passRate}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: REVIEW & APPROVE GRADE SHEET */}
      <DashboardModal
        isOpen={!!reviewSubmission}
        onClose={() => setReviewSubmission(null)}
        title={
          reviewSubmission
            ? `${reviewSubmission.courseTitle} (${reviewSubmission.courseCode}) Grade Sheet`
            : "Review Results"
        }
        subtitle={
          reviewSubmission
            ? `Submitted by ${reviewSubmission.instructor} · ${reviewSubmission.semester} · ${reviewSubmission.studentsCount} Students`
            : undefined
        }
        maxWidth="max-w-3xl"
      >
        {reviewSubmission && (
          <div className="space-y-5">
            {/* Quick Stats Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Average</span>
                <span className="text-sm font-extrabold text-slate-900">{reviewSubmission.averageScore} / 100</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Highest</span>
                <span className="text-sm font-extrabold text-slate-900">{reviewSubmission.highestScore}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Lowest</span>
                <span className="text-sm font-extrabold text-slate-900">{reviewSubmission.lowestScore}</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="text-[10px] font-semibold text-emerald-600 uppercase block">Pass Rate</span>
                <span className="text-sm font-extrabold text-emerald-700">{reviewSubmission.passRate}</span>
              </div>
            </div>

            {/* Return Note if present */}
            {reviewSubmission.returnNote && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
                <span className="font-bold block mb-1">Previous Return Note:</span>
                <p>{reviewSubmission.returnNote}</p>
              </div>
            )}

            {/* Student Marks Preview Table */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Sample Student Grade Roster ({reviewSubmission.studentsCount} Candidates)
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-100">
                    <tr>
                      <th className="py-2.5 px-3">Student ID</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Midterm (30)</th>
                      <th className="py-2.5 px-3">Final (50)</th>
                      <th className="py-2.5 px-3">Quizzes (20)</th>
                      <th className="py-2.5 px-3">Total (100)</th>
                      <th className="py-2.5 px-3">Grade</th>
                      <th className="py-2.5 px-3 text-right">GPA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {reviewSubmission.sampleGrades.length > 0 ? (
                      reviewSubmission.sampleGrades.map((g) => (
                        <tr key={g.studentId} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-3 font-bold text-slate-900">{g.studentId}</td>
                          <td className="py-2.5 px-3">{g.studentName}</td>
                          <td className="py-2.5 px-3">{g.midterm}</td>
                          <td className="py-2.5 px-3">{g.final}</td>
                          <td className="py-2.5 px-3">{g.quizzes}</td>
                          <td className="py-2.5 px-3 font-bold text-slate-900">{g.total}</td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-[#9E7321] border border-amber-200">
                              {g.grade}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right font-bold text-slate-900">{g.gpa.toFixed(2)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="py-6 text-center text-slate-400 italic">
                          Official ledger marks endorsed and archived.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setReviewSubmission(null)}
              >
                Close
              </DashboardButton>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                {reviewSubmission.status === "Pending Approval" && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleOpenReturnModal(reviewSubmission)}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold cursor-pointer"
                    >
                      Return to Professor
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApprove(reviewSubmission)}
                      className="px-4 py-2 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs font-bold cursor-pointer shadow-xs"
                    >
                      Approve & Publish to Transcripts
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 2: RETURN GRADE SHEET REASON */}
      <DashboardModal
        isOpen={!!returnSubmission}
        onClose={() => setReturnSubmission(null)}
        title="Return Grade Sheet for Moderation"
        subtitle={returnSubmission ? `${returnSubmission.courseTitle} (${returnSubmission.courseCode})` : undefined}
        maxWidth="max-w-lg"
      >
        {returnSubmission && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                Returning this grade sheet will unlock the marks entry portal for{" "}
                <strong className="font-bold">{returnSubmission.instructor}</strong>. Please state the feedback or required correction.
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Feedback & Notes to Professor *
              </label>
              <textarea
                rows={4}
                value={returnNoteInput}
                onChange={(e) => setReturnNoteInput(e.target.value)}
                placeholder="State the reason (e.g. grading curve adjustments, missing marks, moderation policy)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setReturnSubmission(null)}
              >
                Cancel
              </DashboardButton>
              <button
                type="button"
                onClick={handleConfirmReturn}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer"
              >
                Confirm Return
              </button>
            </div>
          </div>
        )}
      </DashboardModal>
    </div>
  );
}
