"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  Building,
  Users,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface DepartmentRecord {
  code: string;
  name: string;
  head: string;
  faculty: string;
  programsCount: number;
  programsList: string[];
  teachersCount: number;
  studentsCount: number;
  status: "Active" | "Inactive";
  office?: string;
  email?: string;
}

const initialDepartments: DepartmentRecord[] = [
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    head: "Prof. Dr. Milan Stanković",
    faculty: "Science & Engineering",
    programsCount: 3,
    programsList: ["BSc in Computer Science", "MSc in Data Science", "PhD in Computing"],
    teachersCount: 18,
    studentsCount: 280,
    status: "Active",
    office: "Room 501, Engineering Wing",
    email: "cse@alfa.edu.rs",
  },
  {
    code: "EEE",
    name: "Electrical & Electronic Engineering",
    head: "Dr. Tariqul Islam",
    faculty: "Science & Engineering",
    programsCount: 2,
    programsList: ["BSc in Electrical Engineering", "MSc in Power Systems"],
    teachersCount: 12,
    studentsCount: 140,
    status: "Active",
    office: "Room 312, Circuits Wing",
    email: "eee@alfa.edu.rs",
  },
  {
    code: "BBA",
    name: "Business Administration",
    head: "Prof. Dr. Israt Jahan",
    faculty: "Business Administration",
    programsCount: 3,
    programsList: ["BBA General", "MBA Professional", "Executive MBA"],
    teachersCount: 14,
    studentsCount: 210,
    status: "Active",
    office: "Dean Office, Business Building",
    email: "bba@alfa.edu.rs",
  },
  {
    code: "ENG",
    name: "English Language & Literature",
    head: "Dr. Nabila Yasmin",
    faculty: "Arts & Social Sciences",
    programsCount: 2,
    programsList: ["BA in English Literature", "MA in Applied Linguistics"],
    teachersCount: 9,
    studentsCount: 160,
    status: "Active",
    office: "Room 210, Arts Hall",
    email: "english@alfa.edu.rs",
  },
  {
    code: "ECO",
    name: "Economics & Public Policy",
    head: "Dr. Hasan Mahmud",
    faculty: "Arts & Social Sciences",
    programsCount: 2,
    programsList: ["BSS in Economics", "MSS in Development Policy"],
    teachersCount: 8,
    studentsCount: 130,
    status: "Active",
    office: "Room 205, Social Sciences Block",
    email: "economics@alfa.edu.rs",
  },
  {
    code: "LAW",
    name: "Law & Legal Studies",
    head: "Dr. Syeda Sultana",
    faculty: "Law & Legal Studies",
    programsCount: 2,
    programsList: ["Bachelor of Laws (LL.B)", "Master of Laws (LL.M)"],
    teachersCount: 7,
    studentsCount: 55,
    status: "Active",
    office: "Moot Court Chambers Room 102",
    email: "law@alfa.edu.rs",
  },
  {
    code: "CE",
    name: "Civil Engineering & Architecture",
    head: "Prof. Dr. M. A. Rashid",
    faculty: "Science & Engineering",
    programsCount: 2,
    programsList: ["BSc in Civil Engineering", "MSc in Structural Design"],
    teachersCount: 8,
    studentsCount: 65,
    status: "Active",
    office: "Structures Lab Room 104",
    email: "civil@alfa.edu.rs",
  },
  {
    code: "MNS",
    name: "Mathematics & Natural Sciences",
    head: "Doc. Dr. Jelena Novak",
    faculty: "Science & Engineering",
    programsCount: 1,
    programsList: ["BSc in Applied Mathematics"],
    teachersCount: 6,
    studentsCount: 35,
    status: "Active",
    office: "Room 408, Science Complex",
    email: "mns@alfa.edu.rs",
  },
];

export default function AdminDepartmentsView() {
  const [departments, setDepartments] = useState<DepartmentRecord[]>(initialDepartments);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("All Faculties");
  const [selectedHead, setSelectedHead] = useState("Any Head");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewDept, setViewDept] = useState<DepartmentRecord | null>(null);
  const [editDept, setEditDept] = useState<DepartmentRecord | null>(null);
  const [deleteDeptCode, setDeleteDeptCode] = useState<string | null>(null);

  // Form Data
  const [formData, setFormData] = useState<Partial<DepartmentRecord>>({
    code: "",
    name: "",
    head: "",
    faculty: "Science & Engineering",
    programsCount: 2,
    teachersCount: 10,
    studentsCount: 100,
    status: "Active",
    office: "Faculty Chambers",
    email: "",
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter Logic
  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.head.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFaculty =
        selectedFaculty === "All Faculties" ||
        dept.faculty.toLowerCase().includes(selectedFaculty.toLowerCase());

      const matchesHead =
        selectedHead === "Any Head" ||
        dept.head.toLowerCase().includes(selectedHead.toLowerCase());

      const matchesStatus =
        selectedStatus === "Active Only"
          ? dept.status === "Active"
          : selectedStatus === "Inactive Only"
          ? dept.status === "Inactive"
          : true;

      return matchesSearch && matchesFaculty && matchesHead && matchesStatus;
    });
  }, [departments, searchQuery, selectedFaculty, selectedHead, selectedStatus]);

  const handleAddDepartmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.code) return;

    const newDept: DepartmentRecord = {
      code: formData.code.toUpperCase(),
      name: formData.name,
      head: formData.head || "Appointed HOD",
      faculty: formData.faculty || "Science & Engineering",
      programsCount: Number(formData.programsCount) || 1,
      programsList: [`Bachelor in ${formData.name}`],
      teachersCount: Number(formData.teachersCount) || 5,
      studentsCount: Number(formData.studentsCount) || 50,
      status: formData.status || "Active",
      office: formData.office || "Academic Block",
      email: formData.email || `${formData.code.toLowerCase()}@alfa.edu.rs`,
    };

    setDepartments([newDept, ...departments]);
    setIsAddModalOpen(false);
    showToast(`Department ${newDept.name} (${newDept.code}) created successfully!`);
  };

  const handleEditDepartmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editDept) return;

    setDepartments((prev) =>
      prev.map((d) => (d.code === editDept.code ? (formData as DepartmentRecord) : d))
    );
    setEditDept(null);
    showToast(`Department ${formData.name} updated successfully!`);
  };

  const handleDeleteDepartment = () => {
    if (!deleteDeptCode) return;
    setDepartments((prev) => prev.filter((d) => d.code !== deleteDeptCode));
    showToast(`Department ${deleteDeptCode} removed from university directory.`);
    setDeleteDeptCode(null);
  };

  const openEditModal = (dept: DepartmentRecord) => {
    setEditDept(dept);
    setFormData({ ...dept });
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

      {/* 1. Header Bar: Title + Search + Add Department Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Department Management
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Bar */}
          <div className="relative min-w-[260px] lg:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs"
            />
          </div>

          {/* Add Department Button (Gold) */}
          <button
            type="button"
            onClick={() => {
              setFormData({
                code: "",
                name: "",
                head: "",
                faculty: "Science & Engineering",
                programsCount: 2,
                teachersCount: 10,
                studentsCount: 100,
                status: "Active",
                office: "Faculty Chambers",
                email: "",
              });
              setIsAddModalOpen(true);
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Department</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Bar (Dropdowns matching the user's criteria) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
              <option value="Science & Engineering">Science & Engineering</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Arts & Social Sciences">Arts & Social Sciences</option>
              <option value="Law & Legal Studies">Law & Legal Studies</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Head of Department Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Head of Department
          </span>
          <div className="relative">
            <select
              value={selectedHead}
              onChange={(e) => setSelectedHead(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="Any Head">Any Head (HOD)</option>
              <option value="Milan Stanković">Prof. Dr. Milan Stanković</option>
              <option value="Israt Jahan">Prof. Dr. Israt Jahan</option>
              <option value="Nabila Yasmin">Dr. Nabila Yasmin</option>
              <option value="Syeda Sultana">Dr. Syeda Sultana</option>
              <option value="Tariqul Islam">Dr. Tariqul Islam</option>
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
              <option value="Inactive Only">Inactive Only</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Quick Summary Pill */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Total Active Depts:</span>
            <span className="font-extrabold text-[#0B1E36]">8 Departments</span>
          </div>
        </div>
      </div>

      {/* 3. Main Department Data Table (Same styling as Student/Teacher management) */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Dept Code</th>
                <th className="py-3.5 px-4 sm:px-6">Department Name</th>
                <th className="py-3.5 px-4 sm:px-6">Head of Dept (HOD)</th>
                <th className="py-3.5 px-4 sm:px-6">Faculty</th>
                <th className="py-3.5 px-4 sm:px-6">Programs</th>
                <th className="py-3.5 px-4 sm:px-6">Teachers</th>
                <th className="py-3.5 px-4 sm:px-6">Students</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredDepartments.length > 0 ? (
                filteredDepartments.map((dept) => (
                  <tr
                    key={dept.code}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-[#0B1E36] whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-extrabold text-[11px] border border-slate-200/60">
                        {dept.code}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 whitespace-nowrap">
                      {dept.name}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-800 font-medium whitespace-nowrap">
                      {dept.head}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {dept.faculty}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {dept.programsCount} Programs
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {dept.teachersCount} Teachers
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap font-semibold">
                      {dept.studentsCount} Students
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${
                          dept.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-red-50 text-red-600 border border-red-200/60"
                        }`}
                      >
                        {dept.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View */}
                        <button
                          type="button"
                          onClick={() => setViewDept(dept)}
                          title="View Department Details"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => openEditModal(dept)}
                          title="Edit Department"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteDeptCode(dept.code)}
                          title="Remove Department"
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
                    No departments match the current filter criteria.
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
              {filteredDepartments.length > 0 ? "1" : "0"}-
              {filteredDepartments.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">
              {departments.length}
            </span>{" "}
            entries
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
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
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold text-slate-400 opacity-40 cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* 5. MODALS */}

      {/* View Department Modal */}
      <DashboardModal
        isOpen={!!viewDept}
        onClose={() => setViewDept(null)}
        title={viewDept?.name || "Department Details"}
        subtitle={`Code: ${viewDept?.code || ""}`}
        badge="Academic Division"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <DashboardButton
            variant="secondary"
            size="sm"
            onClick={() => setViewDept(null)}
          >
            Close
          </DashboardButton>
        }
      >
        {viewDept && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-slate-400 block">Faculty Affiliation</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewDept.faculty}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Head of Department (HOD)</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewDept.head}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Teaching Faculty</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewDept.teachersCount} Full-Time Instructors
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Active Student Body</span>
                <span className="font-bold text-emerald-700 text-sm">
                  {viewDept.studentsCount} Students Enrolled
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Departmental Office</span>
                <span className="font-semibold text-slate-800">
                  {viewDept.office}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Contact Email</span>
                <span className="font-semibold text-slate-800">
                  {viewDept.email}
                </span>
              </div>
            </div>

            {/* Programs List */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
              <span className="font-bold text-slate-900 block">
                Offered Degree Programs:
              </span>
              <ul className="space-y-1 text-slate-600 font-medium">
                {viewDept.programsList.map((prog, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C69234]" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* Add / Edit Department Modal */}
      <DashboardModal
        isOpen={isAddModalOpen || !!editDept}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditDept(null);
        }}
        title={editDept ? "Edit Department Information" : "Establish New Department"}
        subtitle={
          editDept
            ? `Updating data for ${editDept.code}`
            : "Register new collegiate department under academic faculty"
        }
        badge="Curricular Division"
        badgeColor="gold"
        maxWidth="lg"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsAddModalOpen(false);
                setEditDept(null);
              }}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="dept-form"
            >
              {editDept ? "Save Changes" : "Confirm Department"}
            </DashboardButton>
          </>
        }
      >
        <form
          id="dept-form"
          onSubmit={editDept ? handleEditDepartmentSubmit : handleAddDepartmentSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Information Systems & Security"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department Code *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. ISS"
                value={formData.code || ""}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Head of Department (HOD) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Farhana Sultana"
                value={formData.head || ""}
                onChange={(e) =>
                  setFormData({ ...formData, head: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Faculty Affiliation
              </label>
              <select
                value={formData.faculty || "Science & Engineering"}
                onChange={(e) =>
                  setFormData({ ...formData, faculty: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Science & Engineering">Science & Engineering</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Arts & Social Sciences">Arts & Social Sciences</option>
                <option value="Law & Legal Studies">Law & Legal Studies</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Departmental Office
              </label>
              <input
                type="text"
                placeholder="e.g. Room 402, Science Complex"
                value={formData.office || ""}
                onChange={(e) =>
                  setFormData({ ...formData, office: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                placeholder="dept@alfa.edu.rs"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* Delete Confirmation Modal */}
      <DashboardModal
        isOpen={!!deleteDeptCode}
        onClose={() => setDeleteDeptCode(null)}
        title="Confirm Department Removal"
        subtitle={`Are you sure you want to delete ${deleteDeptCode}?`}
        badge="Destructive Action"
        badgeColor="red"
        maxWidth="sm"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setDeleteDeptCode(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="danger"
              size="sm"
              onClick={handleDeleteDepartment}
            >
              Delete Department
            </DashboardButton>
          </>
        }
      >
        <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 text-red-800 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>
            This action will decommission the departmental division. Enrolled students
            and faculty rosters must be migrated to another department.
          </span>
        </div>
      </DashboardModal>
    </div>
  );
}
