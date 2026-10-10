"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface TeacherRecord {
  id: string;
  name: string;
  department: string;
  designation: string;
  faculty: string;
  experience: string;
  status: "Active" | "Inactive" | "On Leave";
  email?: string;
  phone?: string;
  office?: string;
  coursesCount?: number;
}

const initialTeachers: TeacherRecord[] = [
  {
    id: "FAC-2026-001",
    name: "Dr. Mohammad Rahman",
    department: "CSE",
    designation: "Associate Professor",
    faculty: "Science & Eng",
    experience: "8 Years",
    status: "Active",
    email: "rahman@alfa.edu.rs",
    phone: "+381 64 111 2233",
    office: "Room 412, Science Complex",
    coursesCount: 3,
  },
  {
    id: "FAC-2026-002",
    name: "Prof. Dr. Milan Stanković",
    department: "CSE",
    designation: "Professor & Chair",
    faculty: "Science & Eng",
    experience: "14 Years",
    status: "Active",
    email: "milan.stankovic@alfa.edu.rs",
    phone: "+381 64 222 3344",
    office: "Room 501, Engineering Wing",
    coursesCount: 2,
  },
  {
    id: "FAC-2026-003",
    name: "Doc. Dr. Jelena Novak",
    department: "CSE",
    designation: "Assistant Professor",
    faculty: "Science & Eng",
    experience: "5 Years",
    status: "Active",
    email: "jelena.novak@alfa.edu.rs",
    phone: "+381 64 333 4455",
    office: "Room 408, Science Complex",
    coursesCount: 3,
  },
  {
    id: "FAC-2026-004",
    name: "Dr. Hasan Mahmud",
    department: "CSE",
    designation: "Associate Professor",
    faculty: "Science & Eng",
    experience: "9 Years",
    status: "Active",
    email: "hasan.mahmud@alfa.edu.rs",
    phone: "+381 64 444 5566",
    office: "Room 415, Science Complex",
    coursesCount: 4,
  },
  {
    id: "FAC-2026-005",
    name: "Ms. Farhana Sultana",
    department: "CSE",
    designation: "Senior Lecturer",
    faculty: "Science & Eng",
    experience: "4 Years",
    status: "Active",
    email: "farhana.sultana@alfa.edu.rs",
    phone: "+381 64 555 6677",
    office: "Room 304, Academic Block",
    coursesCount: 3,
  },
  {
    id: "FAC-2026-006",
    name: "Prof. Dr. Israt Jahan",
    department: "BBA",
    designation: "Professor & Dean",
    faculty: "Business Admin",
    experience: "16 Years",
    status: "Active",
    email: "israt.jahan@alfa.edu.rs",
    phone: "+381 64 666 7788",
    office: "Dean Office, Business Building",
    coursesCount: 2,
  },
  {
    id: "FAC-2026-007",
    name: "Dr. Tanvir Anjum",
    department: "ENG",
    designation: "Associate Professor",
    faculty: "Arts & Social Sci",
    experience: "7 Years",
    status: "Active",
    email: "tanvir.anjum@alfa.edu.rs",
    phone: "+381 64 777 8899",
    office: "Room 210, Arts Hall",
    coursesCount: 3,
  },
  {
    id: "FAC-2026-008",
    name: "Dr. Syeda Sultana",
    department: "LAW",
    designation: "Assistant Professor",
    faculty: "Law & Legal",
    experience: "6 Years",
    status: "Active",
    email: "syeda.sultana@alfa.edu.rs",
    phone: "+381 64 888 9900",
    office: "Moot Court Chambers Room 102",
    coursesCount: 2,
  },
  {
    id: "FAC-2026-009",
    name: "Mr. Tariqul Islam",
    department: "EEE",
    designation: "Assistant Professor",
    faculty: "Science & Eng",
    experience: "3 Years",
    status: "On Leave",
    email: "tariqul.islam@alfa.edu.rs",
    phone: "+381 64 999 0011",
    office: "Room 312, Circuits Wing",
    coursesCount: 0,
  },
  {
    id: "FAC-2026-010",
    name: "Dr. Nusrat Jahan",
    department: "BBA",
    designation: "Assistant Professor",
    faculty: "Business Admin",
    experience: "5 Years",
    status: "Active",
    email: "nusrat.jahan@alfa.edu.rs",
    phone: "+381 64 000 1122",
    office: "Room 205, Business Building",
    coursesCount: 3,
  },
];

export default function AdminTeachersView() {
  const [teachers, setTeachers] = useState<TeacherRecord[]>(initialTeachers);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedDesignation, setSelectedDesignation] = useState("All Designations");
  const [selectedFaculty, setSelectedFaculty] = useState("All Faculties");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewTeacher, setViewTeacher] = useState<TeacherRecord | null>(null);
  const [editTeacher, setEditTeacher] = useState<TeacherRecord | null>(null);
  const [deleteTeacherId, setDeleteTeacherId] = useState<string | null>(null);

  // Form Data
  const [formData, setFormData] = useState<Partial<TeacherRecord>>({
    id: "",
    name: "",
    department: "CSE",
    designation: "Assistant Professor",
    faculty: "Science & Eng",
    experience: "3 Years",
    status: "Active",
    email: "",
    phone: "",
    office: "Room 402, Science Complex",
    coursesCount: 2,
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter logic
  const filteredTeachers = useMemo(() => {
    return teachers.filter((tch) => {
      const matchesSearch =
        tch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tch.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tch.email && tch.email.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDept =
        selectedDept === "All Departments" || tch.department === selectedDept;

      const matchesDesignation =
        selectedDesignation === "All Designations" ||
        tch.designation.toLowerCase().includes(selectedDesignation.toLowerCase());

      const matchesFaculty =
        selectedFaculty === "All Faculties" ||
        tch.faculty.toLowerCase().includes(selectedFaculty.toLowerCase());

      const matchesStatus =
        selectedStatus === "Active Only"
          ? tch.status === "Active"
          : selectedStatus === "Inactive Only"
          ? tch.status === "Inactive"
          : selectedStatus === "On Leave"
          ? tch.status === "On Leave"
          : true;

      return (
        matchesSearch &&
        matchesDept &&
        matchesDesignation &&
        matchesFaculty &&
        matchesStatus
      );
    });
  }, [
    teachers,
    searchQuery,
    selectedDept,
    selectedDesignation,
    selectedFaculty,
    selectedStatus,
  ]);

  const handleAddTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    const newId =
      formData.id?.trim() ||
      `FAC-2026-${String(teachers.length + 1).padStart(3, "0")}`;

    const newTeacher: TeacherRecord = {
      id: newId,
      name: formData.name,
      department: formData.department || "CSE",
      designation: formData.designation || "Assistant Professor",
      faculty: formData.faculty || "Science & Eng",
      experience: formData.experience || "1 Year",
      status: formData.status || "Active",
      email: formData.email || `${newId.toLowerCase()}@alfa.edu.rs`,
      phone: formData.phone || "+381 64 000 0000",
      office: formData.office || "Faculty Chambers",
      coursesCount: formData.coursesCount || 2,
    };

    setTeachers([newTeacher, ...teachers]);
    setIsAddModalOpen(false);
    showToast(`Teacher ${newTeacher.name} (${newTeacher.id}) registered!`);
  };

  const handleEditTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTeacher) return;

    setTeachers((prev) =>
      prev.map((t) => (t.id === editTeacher.id ? (formData as TeacherRecord) : t))
    );
    setEditTeacher(null);
    showToast(`Faculty record for ${formData.name} updated!`);
  };

  const handleDeleteTeacher = () => {
    if (!deleteTeacherId) return;
    setTeachers((prev) => prev.filter((t) => t.id !== deleteTeacherId));
    showToast(`Teacher ${deleteTeacherId} removed from roster.`);
    setDeleteTeacherId(null);
  };

  const openEditModal = (tch: TeacherRecord) => {
    setEditTeacher(tch);
    setFormData({ ...tch });
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

      {/* 1. Header Bar: Title + Search + Add Teacher Button (Exact Match with Student Management) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Teacher Management
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Bar */}
          <div className="relative min-w-[260px] lg:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, ID or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs"
            />
          </div>

          {/* Add Teacher Button (Gold) */}
          <button
            type="button"
            onClick={() => {
              setFormData({
                id: `FAC-2026-${String(teachers.length + 1).padStart(3, "0")}`,
                name: "",
                department: "CSE",
                designation: "Assistant Professor",
                faculty: "Science & Eng",
                experience: "3 Years",
                status: "Active",
                email: "",
                phone: "",
                office: "Room 402, Science Complex",
                coursesCount: 2,
              });
              setIsAddModalOpen(true);
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Teacher</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Bar (5 Dropdown Filters matching Student Management) */}
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
              <option value="LAW">LAW</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Designation Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Designation
          </span>
          <div className="relative">
            <select
              value={selectedDesignation}
              onChange={(e) => setSelectedDesignation(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Designations">All Designations</option>
              <option value="Professor">Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Senior Lecturer">Senior Lecturer</option>
              <option value="Lecturer">Lecturer</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Faculty Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Faculty
          </span>
          <div className="relative">
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Faculties">All Faculties</option>
              <option value="Science & Eng">Science & Eng</option>
              <option value="Business Admin">Business Admin</option>
              <option value="Arts & Social Sci">Arts & Social Sci</option>
              <option value="Law & Legal">Law & Legal</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Employment Type
          </span>
          <div className="relative">
            <select
              defaultValue="All"
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Full-Time">Full-Time Permanent</option>
              <option value="Adjunct">Adjunct Faculty</option>
              <option value="Visiting">Visiting Scholar</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Status Filter */}
        <div className="col-span-2 sm:col-span-1">
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
              <option value="On Leave">On Leave</option>
              <option value="Inactive Only">Inactive Only</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Main Teacher Data Table (Exact format as Student Management) */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Teacher ID</th>
                <th className="py-3.5 px-4 sm:px-6">Name</th>
                <th className="py-3.5 px-4 sm:px-6">Department</th>
                <th className="py-3.5 px-4 sm:px-6">Designation</th>
                <th className="py-3.5 px-4 sm:px-6">Faculty</th>
                <th className="py-3.5 px-4 sm:px-6">Experience</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((tch) => (
                  <tr
                    key={tch.id}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap">
                      {tch.id}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 whitespace-nowrap">
                      {tch.name}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">
                      {tch.department}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {tch.designation}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {tch.faculty}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {tch.experience}
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${
                          tch.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : tch.status === "On Leave"
                            ? "bg-amber-50 text-amber-800 border border-amber-200/60"
                            : "bg-red-50 text-red-600 border border-red-200/60"
                        }`}
                      >
                        {tch.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View */}
                        <button
                          type="button"
                          onClick={() => setViewTeacher(tch)}
                          title="View Profile"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => openEditModal(tch)}
                          title="Edit Details"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteTeacherId(tch.id)}
                          title="Remove Teacher"
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
                    colSpan={8}
                    className="py-12 text-center text-slate-400 text-xs"
                  >
                    No teachers match the current filter criteria.
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
              {filteredTeachers.length > 0 ? "1" : "0"}-
              {Math.min(filteredTeachers.length, 10)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">68</span> entries
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
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold cursor-pointer text-slate-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* 5. MODALS */}

      {/* View Teacher Modal */}
      <DashboardModal
        isOpen={!!viewTeacher}
        onClose={() => setViewTeacher(null)}
        title={viewTeacher?.name || "Teacher Profile"}
        subtitle={`Faculty ID: ${viewTeacher?.id || ""}`}
        badge="Academic Staff"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <DashboardButton
            variant="secondary"
            size="sm"
            onClick={() => setViewTeacher(null)}
          >
            Close
          </DashboardButton>
        }
      >
        {viewTeacher && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-slate-400 block">Department</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewTeacher.department}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Designation</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewTeacher.designation}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Faculty Wing</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewTeacher.faculty}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Teaching Experience</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewTeacher.experience}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Academic Office</span>
                <span className="font-semibold text-slate-800">
                  {viewTeacher.office}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Assigned Courses</span>
                <span className="font-semibold text-slate-800">
                  {viewTeacher.coursesCount} Courses This Term
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Institutional Email</span>
                <span className="font-semibold text-slate-800">
                  {viewTeacher.email}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Contact Phone</span>
                <span className="font-semibold text-slate-800">
                  {viewTeacher.phone}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-blue-200/60 bg-blue-50/50 flex items-center justify-between">
              <div>
                <span className="font-bold text-blue-900 block">
                  Faculty Status: {viewTeacher.status}
                </span>
                <span className="text-blue-700 text-[11px]">
                  Authorized for course delivery, grade submissions, and student advising.
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
            </div>
          </div>
        )}
      </DashboardModal>

      {/* Add / Edit Teacher Modal */}
      <DashboardModal
        isOpen={isAddModalOpen || !!editTeacher}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditTeacher(null);
        }}
        title={editTeacher ? "Edit Teacher Information" : "Add Faculty Teacher"}
        subtitle={
          editTeacher
            ? `Updating data for ${editTeacher.id}`
            : "Register new professor or lecturer to university teaching staff"
        }
        badge="Faculty Registry"
        badgeColor="gold"
        maxWidth="lg"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsAddModalOpen(false);
                setEditTeacher(null);
              }}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="teacher-form"
            >
              {editTeacher ? "Save Changes" : "Confirm Teacher"}
            </DashboardButton>
          </>
        }
      >
        <form
          id="teacher-form"
          onSubmit={editTeacher ? handleEditTeacherSubmit : handleAddTeacherSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Mohammad Rahman"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Teacher ID *
              </label>
              <input
                type="text"
                required
                placeholder="FAC-2026-001"
                value={formData.id || ""}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
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
                <option value="LAW">LAW</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Designation
              </label>
              <select
                value={formData.designation || "Assistant Professor"}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Professor">Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Senior Lecturer">Senior Lecturer</option>
                <option value="Lecturer">Lecturer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Faculty Wing
              </label>
              <select
                value={formData.faculty || "Science & Eng"}
                onChange={(e) =>
                  setFormData({ ...formData, faculty: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Science & Eng">Science & Eng</option>
                <option value="Business Admin">Business Admin</option>
                <option value="Arts & Social Sci">Arts & Social Sci</option>
                <option value="Law & Legal">Law & Legal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Experience
              </label>
              <input
                type="text"
                placeholder="e.g. 8 Years"
                value={formData.experience || ""}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="faculty@alfa.edu.rs"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
                    status: e.target.value as "Active" | "Inactive" | "On Leave",
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* Delete Confirmation Modal */}
      <DashboardModal
        isOpen={!!deleteTeacherId}
        onClose={() => setDeleteTeacherId(null)}
        title="Confirm Teacher Removal"
        subtitle={`Are you sure you want to delete ${deleteTeacherId}?`}
        badge="Destructive Action"
        badgeColor="red"
        maxWidth="sm"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setDeleteTeacherId(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="danger"
              size="sm"
              onClick={handleDeleteTeacher}
            >
              Delete Record
            </DashboardButton>
          </>
        }
      >
        <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 text-red-800 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>
            This action will remove the teacher from academic scheduling and grade
            dispatch. Any active class routines must be reassigned.
          </span>
        </div>
      </DashboardModal>
    </div>
  );
}
