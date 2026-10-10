"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  User,
  Layers,
  Bookmark,
  PlusCircle,
  Bell,
  CheckCircle2,
  Clock,
  ArrowRight,
  Plus,
  X,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export default function AdminOverviewView() {
  // Modal states for Quick Actions
  const [activeModal, setActiveModal] = useState<
    "student" | "teacher" | "course" | "notice" | null
  >(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    department: "CSE",
    email: "",
    title: "",
    code: "",
    noticeText: "",
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleQuickActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeModal === "student") {
      showNotification(`Student ${formData.name || "STU-NEW"} added successfully!`);
    } else if (activeModal === "teacher") {
      showNotification(`Teacher ${formData.name || "FAC-NEW"} added successfully!`);
    } else if (activeModal === "course") {
      showNotification(`Course ${formData.code || "NEW-101"} created successfully!`);
    } else if (activeModal === "notice") {
      showNotification("System announcement published to campus boards!");
    }
    setActiveModal(null);
    setFormData({
      name: "",
      id: "",
      department: "CSE",
      email: "",
      title: "",
      code: "",
      noticeText: "",
    });
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

      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-[#0B1E36] p-6 sm:p-8 text-white shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span>Admin Control Panel</span>
            <span className="text-2xl">👋</span>
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-medium">
            System Health: Excellent · Active Users: 1,313 · Server Load: 14%
          </p>
        </div>

        <div className="self-start md:self-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#D5A754] text-[#0B1E36] shadow-2xs">
            Academic Year 2026/27 · Active
          </span>
        </div>
      </div>

      {/* 2. First Row: 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Card 1: Total Students */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Total Students
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[#C69234]">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1,245
            </p>
            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
              Active Enrollments
            </span>
          </div>
        </div>

        {/* Card 2: Total Teachers */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Total Teachers
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[#C69234]">
              <User className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              68
            </p>
            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
              Across Faculties
            </span>
          </div>
        </div>

        {/* Card 3: Departments */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Departments
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[#C69234]">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              8
            </p>
            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
              Fully Functional
            </span>
          </div>
        </div>

        {/* Card 4: Active Courses */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Active Courses
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[#C69234]">
              <Bookmark className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              156
            </p>
            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
              Running This Semester
            </span>
          </div>
        </div>
      </div>

      {/* 3. Second Row: 4 Alert / Status Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Pending Results */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 block mb-2">
            Pending Results
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-slate-900">4</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C69234]/15 text-[#9E7321] border border-[#C69234]/30">
              Awaiting Approval
            </span>
          </div>
        </div>

        {/* Attendance Alerts */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 block mb-2">
            Attendance Alerts
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-slate-900">12</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DC2626] text-white shadow-2xs">
              Low Attendance Flags
            </span>
          </div>
        </div>

        {/* New Registrations */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 block mb-2">
            New Registrations
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-slate-900">23</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B1E36] text-white shadow-2xs">
              Needs Verification
            </span>
          </div>
        </div>

        {/* System Notices */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 block mb-2">
            System Notices
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-slate-900">5</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              Broadcasting Active
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Area: Two Columns (Recent System Activity + Quick Actions) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 spans): Recent System Activity */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-2xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-5">
            Recent System Activity
          </h2>

          <div className="space-y-5">
            {[
              {
                text: "Admin added a new Course: UX Research Methods",
                time: "10 mins ago",
              },
              {
                text: "Dr. Mohammad Rahman posted marks for Database Systems",
                time: "45 mins ago",
              },
              {
                text: "New Student Register request submitted (ID: STU-2026-9041)",
                time: "2 hours ago",
              },
              {
                text: "Attendance summary for computer architecture compiled",
                time: "Yesterday",
              },
              {
                text: "Routine change updated for CSE Department Room 302",
                time: "Yesterday",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#C69234] mt-1 shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {activity.text}
                  </p>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (1 span): Quick Actions */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-2xs flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-5">
              Quick Actions
            </h2>

            <div className="space-y-3">
              {/* Action 1: Add Student */}
              <button
                type="button"
                onClick={() => setActiveModal("student")}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition text-left cursor-pointer active:scale-[0.99]"
              >
                <PlusCircle className="w-4 h-4 text-[#C69234] shrink-0" />
                <span>Add Student</span>
              </button>

              {/* Action 2: Add Teacher */}
              <button
                type="button"
                onClick={() => setActiveModal("teacher")}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition text-left cursor-pointer active:scale-[0.99]"
              >
                <PlusCircle className="w-4 h-4 text-[#C69234] shrink-0" />
                <span>Add Teacher</span>
              </button>

              {/* Action 3: Create Course */}
              <button
                type="button"
                onClick={() => setActiveModal("course")}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition text-left cursor-pointer active:scale-[0.99]"
              >
                <PlusCircle className="w-4 h-4 text-[#C69234] shrink-0" />
                <span>Create Course</span>
              </button>

              {/* Action 4: Publish Notice */}
              <button
                type="button"
                onClick={() => setActiveModal("notice")}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition text-left cursor-pointer active:scale-[0.99]"
              >
                <Bell className="w-4 h-4 text-[#C69234] shrink-0" />
                <span>Publish Notice</span>
              </button>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Admin Clearance Level 4</span>
            <Link
              href="/dashboard/admin/settings"
              className="text-[#C69234] hover:underline"
            >
              Control Logs →
            </Link>
          </div>
        </div>
      </div>

      {/* QUICK ACTION MODALS */}
      {/* 1. Add Student Modal */}
      <DashboardModal
        isOpen={activeModal === "student"}
        onClose={() => setActiveModal(null)}
        title="Add New Student"
        subtitle="Register and allocate student ID for academic intake"
        badge="Quick Action"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setActiveModal(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="quick-add-student-form"
            >
              Confirm & Enroll
            </DashboardButton>
          </>
        }
      >
        <form
          id="quick-add-student-form"
          onSubmit={handleQuickActionSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Shahriar Kabir"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Student ID *
              </label>
              <input
                type="text"
                required
                placeholder="STU-2026-045"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="ENG">ENG</option>
                <option value="LAW">LAW</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Institutional Email
            </label>
            <input
              type="email"
              placeholder="student@alfa.edu.rs"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>
        </form>
      </DashboardModal>

      {/* 2. Add Teacher Modal */}
      <DashboardModal
        isOpen={activeModal === "teacher"}
        onClose={() => setActiveModal(null)}
        title="Add Faculty Teacher"
        subtitle="Onboard lecturer or professor into departmental roster"
        badge="Faculty Roster"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setActiveModal(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="quick-add-teacher-form"
            >
              Approve Teacher
            </DashboardButton>
          </>
        }
      >
        <form
          id="quick-add-teacher-form"
          onSubmit={handleQuickActionSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Teacher Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Mohammad Rahman"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Teacher ID *
              </label>
              <input
                type="text"
                required
                placeholder="FAC-CSE-018"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="ENG">ENG</option>
                <option value="LAW">LAW</option>
              </select>
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* 3. Create Course Modal */}
      <DashboardModal
        isOpen={activeModal === "course"}
        onClose={() => setActiveModal(null)}
        title="Create New Course"
        subtitle="Catalog study module and allocate credit units"
        badge="Curriculum"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setActiveModal(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="quick-add-course-form"
            >
              Create Course
            </DashboardButton>
          </>
        }
      >
        <form
          id="quick-add-course-form"
          onSubmit={handleQuickActionSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Code *
              </label>
              <input
                type="text"
                required
                placeholder="CSE-320"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Title *
              </label>
              <input
                type="text"
                required
                placeholder="Computer Networking"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* 4. Publish Notice Modal */}
      <DashboardModal
        isOpen={activeModal === "notice"}
        onClose={() => setActiveModal(null)}
        title="Publish System Notice"
        subtitle="Broadcast administrative memo to student & faculty dashboards"
        badge="University Broadcast"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setActiveModal(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="quick-publish-notice-form"
            >
              Broadcast Now
            </DashboardButton>
          </>
        }
      >
        <form
          id="quick-publish-notice-form"
          onSubmit={handleQuickActionSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Notice Headline *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Fall 2026 Mid-Term Examination Schedule Finalized"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Notice Content
            </label>
            <textarea
              rows={3}
              placeholder="Detailed instructions for faculty and students..."
              value={formData.noticeText}
              onChange={(e) =>
                setFormData({ ...formData, noticeText: e.target.value })
              }
              className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] resize-none"
            />
          </div>
        </form>
      </DashboardModal>
    </div>
  );
}
