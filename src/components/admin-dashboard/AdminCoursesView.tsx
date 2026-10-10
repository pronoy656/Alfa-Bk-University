"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  BookMarked,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  GraduationCap,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface CourseRecord {
  code: string;
  title: string;
  department: string;
  credits: number;
  term: string;
  instructor: string;
  enrolled: number;
  status: "Active" | "Archived";
  syllabus?: string;
  schedule?: string;
  room?: string;
}

const initialCourses: CourseRecord[] = [
  {
    code: "CSE-305",
    title: "Database Management System",
    department: "CSE",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Dr. Mohammad Rahman",
    enrolled: 42,
    status: "Active",
    schedule: "Sun & Tue · 09:00 AM - 10:30 AM",
    room: "Room 402",
  },
  {
    code: "CSE-311",
    title: "Software Engineering & Architecture",
    department: "CSE",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Kamrul Hasan",
    enrolled: 38,
    status: "Active",
    schedule: "Mon & Wed · 10:00 AM - 11:30 AM",
    room: "Room 302",
  },
  {
    code: "CSE-315",
    title: "Computer Networks & Architecture",
    department: "CSE",
    credits: 3.0,
    term: "Fall 25",
    instructor: "Ms. Sultana Ahmed",
    enrolled: 45,
    status: "Active",
    schedule: "Sun & Tue · 11:30 AM - 01:00 PM",
    room: "Lab C",
  },
  {
    code: "ENG-101",
    title: "English Composition & Literature",
    department: "ENG",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Farhana Yasmin",
    enrolled: 28,
    status: "Active",
    schedule: "Mon & Wed · 08:30 AM - 10:00 AM",
    room: "Arts Hall 204",
  },
  {
    code: "CSE-401",
    title: "Artificial Intelligence & Neural Networks",
    department: "CSE",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Prof. Dr. Milan Stanković",
    enrolled: 35,
    status: "Active",
    schedule: "Tue & Thu · 01:00 PM - 02:30 PM",
    room: "Room 501",
  },
  {
    code: "CSE-602",
    title: "Strategic Algorithm Analysis",
    department: "CSE",
    credits: 3.0,
    term: "Spring 26",
    instructor: "Mr. Shafiul Alam",
    enrolled: 22,
    status: "Archived",
    schedule: "Saturday · 03:00 PM - 06:00 PM",
    room: "Seminar Room A",
  },
  {
    code: "EEE-203",
    title: "Electric Circuits & Signal Analysis",
    department: "EEE",
    credits: 3.0,
    term: "Fall 25",
    instructor: "Dr. Tariqul Islam",
    enrolled: 30,
    status: "Active",
    schedule: "Mon & Wed · 01:00 PM - 02:30 PM",
    room: "Circuits Lab 1",
  },
  {
    code: "MGT-201",
    title: "Principles of Strategic Marketing",
    department: "BBA",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Mr. Abu Noman",
    enrolled: 40,
    status: "Active",
    schedule: "Friday · 08:30 AM - 11:30 AM",
    room: "Online Seminar",
  },
  {
    code: "CE-201",
    title: "Structural Mechanics & Surveying",
    department: "CE",
    credits: 4.0,
    term: "Spring 26",
    instructor: "Prof. Dr. M. A. Rashid",
    enrolled: 25,
    status: "Active",
    schedule: "Tue & Thu · 09:00 AM - 11:00 AM",
    room: "Structures Hall 104",
  },
  {
    code: "CSE-499",
    title: "Undergraduate Thesis & Project",
    department: "CSE",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Dr. Tanvir Anjum",
    enrolled: 18,
    status: "Active",
    schedule: "Flexible Advising Hours",
    room: "Research Lab 304",
  },
];

export default function AdminCoursesView() {
  const [courses, setCourses] = useState<CourseRecord[]>(initialCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedCredits, setSelectedCredits] = useState("All Credits");
  const [selectedTerm, setSelectedTerm] = useState("All Terms");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewCourse, setViewCourse] = useState<CourseRecord | null>(null);
  const [editCourse, setEditCourse] = useState<CourseRecord | null>(null);
  const [deleteCourseCode, setDeleteCourseCode] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<CourseRecord>>({
    code: "",
    title: "",
    department: "CSE",
    credits: 3.0,
    term: "Fall 26",
    instructor: "Dr. Mohammad Rahman",
    enrolled: 30,
    status: "Active",
    room: "Room 302",
    schedule: "Mon & Wed · 10:00 AM - 11:30 AM",
  });

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

      const matchesCredits =
        selectedCredits === "All Credits" ||
        String(c.credits) === selectedCredits.replace(" Credits", "");

      const matchesTerm =
        selectedTerm === "All Terms" || c.term === selectedTerm;

      const matchesStatus =
        selectedStatus === "Active Only"
          ? c.status === "Active"
          : selectedStatus === "Archived Only"
          ? c.status === "Archived"
          : true;

      return (
        matchesSearch && matchesDept && matchesCredits && matchesTerm && matchesStatus
      );
    });
  }, [courses, searchQuery, selectedDept, selectedCredits, selectedTerm, selectedStatus]);

  const handleAddCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code || !formData.title) return;

    const newCourse: CourseRecord = {
      code: formData.code.toUpperCase(),
      title: formData.title,
      department: formData.department || "CSE",
      credits: Number(formData.credits) || 3.0,
      term: formData.term || "Fall 26",
      instructor: formData.instructor || "Assigned Faculty",
      enrolled: Number(formData.enrolled) || 0,
      status: formData.status || "Active",
      schedule: formData.schedule || "TBA",
      room: formData.room || "Room 402",
    };

    setCourses([newCourse, ...courses]);
    setIsAddModalOpen(false);
    showToast(`Course ${newCourse.code} (${newCourse.title}) added to catalog!`);
  };

  const handleEditCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editCourse) return;

    setCourses((prev) =>
      prev.map((c) => (c.code === editCourse.code ? (formData as CourseRecord) : c))
    );
    setEditCourse(null);
    showToast(`Course details for ${formData.code} updated!`);
  };

  const handleDeleteCourse = () => {
    if (!deleteCourseCode) return;
    setCourses((prev) => prev.filter((c) => c.code !== deleteCourseCode));
    showToast(`Course ${deleteCourseCode} removed from syllabus.`);
    setDeleteCourseCode(null);
  };

  const openEditModal = (c: CourseRecord) => {
    setEditCourse(c);
    setFormData({ ...c });
  };

  return (
    <div className="w-full space-y-5">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-8 z-50 rounded-2xl bg-emerald-600 text-white px-5 py-3 shadow-lg flex items-center gap-2 text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5" />
          <span>{notification}</span>
        </div>
      )}

      {/* 1. Header Bar: Title + Search + Add Course Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Course Management
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Bar */}
          <div className="relative min-w-[260px] lg:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by course name, code or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs"
            />
          </div>

          {/* Add Course Button (Gold) */}
          <button
            type="button"
            onClick={() => {
              setFormData({
                code: "",
                title: "",
                department: "CSE",
                credits: 3.0,
                term: "Fall 26",
                instructor: "Dr. Mohammad Rahman",
                enrolled: 30,
                status: "Active",
                room: "Room 302",
                schedule: "Mon & Wed · 10:00 AM - 11:30 AM",
              });
              setIsAddModalOpen(true);
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Course</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Bar (Dropdowns matching the user's criteria) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="BBA">BBA</option>
              <option value="ENG">ENG</option>
              <option value="CE">CE</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Credits Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Credits
          </span>
          <div className="relative">
            <select
              value={selectedCredits}
              onChange={(e) => setSelectedCredits(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Credits">All Credits</option>
              <option value="3.0">3.0 Credits</option>
              <option value="4.0">4.0 Credits</option>
              <option value="1.5">1.5 Credits</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Term / Semester Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Term / Batch
          </span>
          <div className="relative">
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Terms">All Terms</option>
              <option value="Fall 26">Fall 26</option>
              <option value="Spring 26">Spring 26</option>
              <option value="Fall 25">Fall 25</option>
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
              <option value="All">All Statuses</option>
              <option value="Active Only">Active Only</option>
              <option value="Archived Only">Archived Only</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Summary Counter Pill */}
        <div className="col-span-2 sm:col-span-1 flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Total Catalog:</span>
            <span className="font-extrabold text-[#0B1E36]">156 Courses</span>
          </div>
        </div>
      </div>

      {/* 3. Main Course Data Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Course Code</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Course Title</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Department</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Credits</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Term</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Instructor</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Enrolled</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5">Status</th>
                <th className="py-3 px-2.5 sm:px-3 lg:px-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((c) => (
                  <tr
                    key={c.code}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-[#9E7321] font-extrabold text-[11px] border border-amber-200/60">
                        {c.code}
                      </span>
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 font-bold text-slate-900">
                      {c.title}
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 text-slate-600 font-semibold whitespace-nowrap">
                      {c.department}
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 text-slate-700 whitespace-nowrap">
                      {c.credits.toFixed(1)} Credits
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 text-slate-600 whitespace-nowrap">
                      {c.term}
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 text-slate-800 font-medium whitespace-nowrap">
                      {c.instructor}
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 whitespace-nowrap font-semibold text-slate-800">
                      {c.enrolled} Students
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          c.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-2.5 sm:px-3 lg:px-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View */}
                        <button
                          type="button"
                          onClick={() => setViewCourse(c)}
                          title="View Course Syllabus"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => openEditModal(c)}
                          title="Edit Course"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteCourseCode(c.code)}
                          title="Remove Course"
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
                    No courses match the current filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 4. Table Pagination Footer (Showing 1-10 of 156 entries) */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div>
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredCourses.length > 0 ? "1" : "0"}-
              {Math.min(filteredCourses.length, 10)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">156</span> entries
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
              onClick={() => setCurrentPage(3)}
              className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer ${
                currentPage === 3
                  ? "bg-[#0B1E36] text-white"
                  : "border border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold cursor-pointer text-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* 5. MODALS */}

      {/* View Course Modal */}
      <DashboardModal
        isOpen={!!viewCourse}
        onClose={() => setViewCourse(null)}
        title={viewCourse?.title || "Course Details"}
        subtitle={`Code: ${viewCourse?.code || ""} · ${viewCourse?.credits} Credit Units`}
        badge="Curricular Catalog"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <DashboardButton
            variant="secondary"
            size="sm"
            onClick={() => setViewCourse(null)}
          >
            Close
          </DashboardButton>
        }
      >
        {viewCourse && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-slate-400 block">Department</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewCourse.department}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Academic Term</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewCourse.term}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Assigned Faculty</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewCourse.instructor}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Enrollment Roster</span>
                <span className="font-bold text-emerald-700 text-sm">
                  {viewCourse.enrolled} Students Enrolled
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Allocated Venue</span>
                <span className="font-semibold text-slate-800">
                  {viewCourse.room}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Weekly Slot</span>
                <span className="font-semibold text-slate-800">
                  {viewCourse.schedule}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-blue-200/60 bg-blue-50/50 flex items-center justify-between">
              <div>
                <span className="font-bold text-blue-900 block">
                  Status: {viewCourse.status}
                </span>
                <span className="text-blue-700 text-[11px]">
                  Course syllabus is approved by academic board for university exams.
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
            </div>
          </div>
        )}
      </DashboardModal>

      {/* Add / Edit Course Modal */}
      <DashboardModal
        isOpen={isAddModalOpen || !!editCourse}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditCourse(null);
        }}
        title={editCourse ? "Edit Course Information" : "Add Course to Catalog"}
        subtitle={
          editCourse
            ? `Updating data for ${editCourse.code}`
            : "Catalog new accredited course under academic syllabus"
        }
        badge="Academic Registry"
        badgeColor="gold"
        maxWidth="lg"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsAddModalOpen(false);
                setEditCourse(null);
              }}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="course-form"
            >
              {editCourse ? "Save Changes" : "Confirm Course"}
            </DashboardButton>
          </>
        }
      >
        <form
          id="course-form"
          onSubmit={editCourse ? handleEditCourseSubmit : handleAddCourseSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Code *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. CSE-305"
                value={formData.code || ""}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Database Management System"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department
              </label>
              <select
                value={formData.department || "CSE"}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="ENG">ENG</option>
                <option value="CE">CE</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Credits
              </label>
              <select
                value={formData.credits || 3.0}
                onChange={(e) =>
                  setFormData({ ...formData, credits: Number(e.target.value) })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value={3.0}>3.0 Credits</option>
                <option value={4.0}>4.0 Credits</option>
                <option value={1.5}>1.5 Credits</option>
                <option value={2.0}>2.0 Credits</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Term / Batch
              </label>
              <select
                value={formData.term || "Fall 26"}
                onChange={(e) =>
                  setFormData({ ...formData, term: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Fall 26">Fall 26</option>
                <option value="Spring 26">Spring 26</option>
                <option value="Fall 25">Fall 25</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Instructor
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Mohammad Rahman"
                value={formData.instructor || ""}
                onChange={(e) =>
                  setFormData({ ...formData, instructor: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Allocated Room
              </label>
              <input
                type="text"
                placeholder="e.g. Room 402"
                value={formData.room || ""}
                onChange={(e) =>
                  setFormData({ ...formData, room: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Status
              </label>
              <select
                value={formData.status || "Active"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as "Active" | "Archived",
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Active">Active</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* Delete Confirmation Modal */}
      <DashboardModal
        isOpen={!!deleteCourseCode}
        onClose={() => setDeleteCourseCode(null)}
        title="Confirm Course Removal"
        subtitle={`Are you sure you want to delete ${deleteCourseCode}?`}
        badge="Destructive Action"
        badgeColor="red"
        maxWidth="sm"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setDeleteCourseCode(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="danger"
              size="sm"
              onClick={handleDeleteCourse}
            >
              Delete Course
            </DashboardButton>
          </>
        }
      >
        <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 text-red-800 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>
            This action will remove the course from the academic catalog and student
            enrollment schedules.
          </span>
        </div>
      </DashboardModal>
    </div>
  );
}
