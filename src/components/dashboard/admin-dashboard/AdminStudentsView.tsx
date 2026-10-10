"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  AlertTriangle,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface StudentRecord {
  id: string;
  name: string;
  department: string;
  program: string;
  batch: string;
  semester: string;
  status: "Active" | "Inactive";
  email?: string;
  phone?: string;
  cgpa?: string;
}

const initialStudents: StudentRecord[] = [
  {
    id: "STU-2026-001",
    name: "Shahriar Kabir",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 26",
    semester: "6th",
    status: "Active",
    email: "shahriar.kabir@alfa.edu.rs",
    phone: "+381 64 123 4567",
    cgpa: "3.85",
  },
  {
    id: "STU-2026-002",
    name: "Emma Wilson",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 26",
    semester: "8th",
    status: "Active",
    email: "emma.wilson@alfa.edu.rs",
    phone: "+381 64 234 5678",
    cgpa: "3.92",
  },
  {
    id: "STU-2026-003",
    name: "Sarah Chen",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 25",
    semester: "6th",
    status: "Active",
    email: "sarah.chen@alfa.edu.rs",
    phone: "+381 64 345 6789",
    cgpa: "3.78",
  },
  {
    id: "STU-2026-004",
    name: "James Park",
    department: "EEE",
    program: "BSc EE",
    batch: "Fall 25",
    semester: "6th",
    status: "Active",
    email: "james.park@alfa.edu.rs",
    phone: "+381 64 456 7890",
    cgpa: "3.65",
  },
  {
    id: "STU-2026-005",
    name: "Michael Torres",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 24",
    semester: "4th",
    status: "Active",
    email: "michael.torres@alfa.edu.rs",
    phone: "+381 64 567 8901",
    cgpa: "3.71",
  },
  {
    id: "STU-2026-006",
    name: "Lisa Anderson",
    department: "BBA",
    program: "BBA",
    batch: "Spring 26",
    semester: "2nd",
    status: "Active",
    email: "lisa.anderson@alfa.edu.rs",
    phone: "+381 64 678 9012",
    cgpa: "3.88",
  },
  {
    id: "STU-2026-007",
    name: "Tania Ahmed",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 26",
    semester: "8th",
    status: "Active",
    email: "tania.ahmed@alfa.edu.rs",
    phone: "+381 64 789 0123",
    cgpa: "3.95",
  },
  {
    id: "STU-2026-008",
    name: "Rahat Khan",
    department: "BBA",
    program: "BBA",
    batch: "Fall 23",
    semester: "7th",
    status: "Inactive",
    email: "rahat.khan@alfa.edu.rs",
    phone: "+381 64 890 1234",
    cgpa: "3.20",
  },
  {
    id: "STU-2026-009",
    name: "Nabila Yasmin",
    department: "ENG",
    program: "BA Eng",
    batch: "Fall 25",
    semester: "5th",
    status: "Active",
    email: "nabila.yasmin@alfa.edu.rs",
    phone: "+381 64 901 2345",
    cgpa: "3.82",
  },
  {
    id: "STU-2026-010",
    name: "Aurnab Sen",
    department: "EEE",
    program: "BSc EE",
    batch: "Spring 25",
    semester: "3rd",
    status: "Active",
    email: "aurnab.sen@alfa.edu.rs",
    phone: "+381 64 012 3456",
    cgpa: "3.60",
  },
];

export default function AdminStudentsView() {
  const [students, setStudents] = useState<StudentRecord[]>(initialStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [selectedBatch, setSelectedBatch] = useState("All Batches");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewStudent, setViewStudent] = useState<StudentRecord | null>(null);
  const [editStudent, setEditStudent] = useState<StudentRecord | null>(null);
  const [deleteStudentId, setDeleteStudentId] = useState<string | null>(null);

  // Form states for Add / Edit
  const [formData, setFormData] = useState<Partial<StudentRecord>>({
    id: "",
    name: "",
    department: "CSE",
    program: "BSc CS",
    batch: "Fall 26",
    semester: "1st",
    status: "Active",
    email: "",
    phone: "",
    cgpa: "3.75",
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter logic
  const filteredStudents = useMemo(() => {
    return students.filter((stu) => {
      // Search
      const matchesSearch =
        stu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stu.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (stu.email && stu.email.toLowerCase().includes(searchQuery.toLowerCase()));

      // Department
      const matchesDept =
        selectedDept === "All Departments" || stu.department === selectedDept;

      // Program
      const matchesProgram =
        selectedProgram === "All Programs" || stu.program === selectedProgram;

      // Batch
      const matchesBatch =
        selectedBatch === "All Batches" || stu.batch === selectedBatch;

      // Semester
      const matchesSemester =
        selectedSemester === "All Semesters" || stu.semester === selectedSemester;

      // Status
      const matchesStatus =
        selectedStatus === "Active Only"
          ? stu.status === "Active"
          : selectedStatus === "Inactive Only"
          ? stu.status === "Inactive"
          : true;

      return (
        matchesSearch &&
        matchesDept &&
        matchesProgram &&
        matchesBatch &&
        matchesSemester &&
        matchesStatus
      );
    });
  }, [
    students,
    searchQuery,
    selectedDept,
    selectedProgram,
    selectedBatch,
    selectedSemester,
    selectedStatus,
  ]);

  const handleAddStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    const newId =
      formData.id?.trim() || `STU-2026-${String(students.length + 1).padStart(3, "0")}`;

    const newStudent: StudentRecord = {
      id: newId,
      name: formData.name,
      department: formData.department || "CSE",
      program: formData.program || "BSc CS",
      batch: formData.batch || "Fall 26",
      semester: formData.semester || "1st",
      status: formData.status || "Active",
      email: formData.email || `${newId.toLowerCase()}@alfa.edu.rs`,
      phone: formData.phone || "+381 64 000 0000",
      cgpa: formData.cgpa || "3.75",
    };

    setStudents([newStudent, ...students]);
    setIsAddModalOpen(false);
    showToast(`Student ${newStudent.name} (${newStudent.id}) added successfully!`);
    setFormData({
      id: "",
      name: "",
      department: "CSE",
      program: "BSc CS",
      batch: "Fall 26",
      semester: "1st",
      status: "Active",
      email: "",
      phone: "",
      cgpa: "3.75",
    });
  };

  const handleEditStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editStudent) return;

    setStudents((prev) =>
      prev.map((s) => (s.id === editStudent.id ? (formData as StudentRecord) : s))
    );
    setEditStudent(null);
    showToast(`Student record for ${formData.name} updated!`);
  };

  const handleDeleteStudent = () => {
    if (!deleteStudentId) return;
    setStudents((prev) => prev.filter((s) => s.id !== deleteStudentId));
    showToast(`Student ${deleteStudentId} removed from roster.`);
    setDeleteStudentId(null);
  };

  const openEditModal = (stu: StudentRecord) => {
    setEditStudent(stu);
    setFormData({ ...stu });
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

      {/* 1. Header Bar: Title + Search + Add Student Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Student Management
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

          {/* Add Student Button (Gold) */}
          <button
            type="button"
            onClick={() => {
              setFormData({
                id: `STU-2026-${String(students.length + 1).padStart(3, "0")}`,
                name: "",
                department: "CSE",
                program: "BSc CS",
                batch: "Fall 26",
                semester: "1st",
                status: "Active",
                email: "",
                phone: "",
                cgpa: "3.75",
              });
              setIsAddModalOpen(true);
            }}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* 2. Filter Bar (5 Dropdown Filters) */}
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

        {/* Program Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Program
          </span>
          <div className="relative">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Programs">All Programs</option>
              <option value="BSc CS">BSc CS</option>
              <option value="BSc EE">BSc EE</option>
              <option value="BBA">BBA</option>
              <option value="BA Eng">BA Eng</option>
              <option value="LLB">LLB</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Batch Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Batch
          </span>
          <div className="relative">
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Batches">All Batches</option>
              <option value="Fall 26">Fall 26</option>
              <option value="Spring 26">Spring 26</option>
              <option value="Fall 25">Fall 25</option>
              <option value="Spring 25">Spring 25</option>
              <option value="Fall 24">Fall 24</option>
              <option value="Fall 23">Fall 23</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Semester Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Semester
          </span>
          <div className="relative">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Semesters">All Semesters</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
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
              <option value="All">All</option>
              <option value="Active Only">Active Only</option>
              <option value="Inactive Only">Inactive Only</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Main Student Data Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Student ID</th>
                <th className="py-3.5 px-4 sm:px-6">Name</th>
                <th className="py-3.5 px-4 sm:px-6">Department</th>
                <th className="py-3.5 px-4 sm:px-6">Program</th>
                <th className="py-3.5 px-4 sm:px-6">Batch</th>
                <th className="py-3.5 px-4 sm:px-6">Semester</th>
                <th className="py-3.5 px-4 sm:px-6">Status</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((stu) => (
                  <tr
                    key={stu.id}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap">
                      {stu.id}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 whitespace-nowrap">
                      {stu.name}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">
                      {stu.department}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {stu.program}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {stu.batch}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 whitespace-nowrap">
                      {stu.semester}
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${
                          stu.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-red-50 text-red-600 border border-red-200/60"
                        }`}
                      >
                        {stu.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View */}
                        <button
                          type="button"
                          onClick={() => setViewStudent(stu)}
                          title="View Profile"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => openEditModal(stu)}
                          title="Edit Details"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteStudentId(stu.id)}
                          title="Remove Student"
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
                    No students match the current filter criteria.
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
              {filteredStudents.length > 0 ? "1" : "0"}-
              {Math.min(filteredStudents.length, 10)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">1245</span> entries
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

      {/* View Student Modal */}
      <DashboardModal
        isOpen={!!viewStudent}
        onClose={() => setViewStudent(null)}
        title={viewStudent?.name || "Student Record"}
        subtitle={`Student ID: ${viewStudent?.id || ""}`}
        badge="Official Dossier"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <DashboardButton
            variant="secondary"
            size="sm"
            onClick={() => setViewStudent(null)}
          >
            Close
          </DashboardButton>
        }
      >
        {viewStudent && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-slate-400 block">Department</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewStudent.department}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Program</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewStudent.program}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Batch & Semester</span>
                <span className="font-bold text-slate-900 text-sm">
                  {viewStudent.batch} · {viewStudent.semester} Semester
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">CGPA Standing</span>
                <span className="font-bold text-emerald-700 text-sm">
                  {viewStudent.cgpa} / 4.00
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Institutional Email</span>
                <span className="font-semibold text-slate-800">
                  {viewStudent.email}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Contact Phone</span>
                <span className="font-semibold text-slate-800">
                  {viewStudent.phone}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-200/60 bg-emerald-50/50 flex items-center justify-between">
              <div>
                <span className="font-bold text-emerald-900 block">
                  Enrolled Status: {viewStudent.status}
                </span>
                <span className="text-emerald-700 text-[11px]">
                  All semester fee dues cleared & registered for Fall 2026 term.
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            </div>
          </div>
        )}
      </DashboardModal>

      {/* Add / Edit Student Modal */}
      <DashboardModal
        isOpen={isAddModalOpen || !!editStudent}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditStudent(null);
        }}
        title={editStudent ? "Edit Student Information" : "Enroll New Student"}
        subtitle={
          editStudent
            ? `Updating data for ${editStudent.id}`
            : "Register new candidate into university student database"
        }
        badge="Admissions Registry"
        badgeColor="gold"
        maxWidth="lg"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsAddModalOpen(false);
                setEditStudent(null);
              }}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="student-form"
            >
              {editStudent ? "Save Changes" : "Confirm Enrollment"}
            </DashboardButton>
          </>
        }
      >
        <form
          id="student-form"
          onSubmit={editStudent ? handleEditStudentSubmit : handleAddStudentSubmit}
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
                placeholder="e.g. Shahriar Kabir"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Student ID *
              </label>
              <input
                type="text"
                required
                placeholder="STU-2026-001"
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
                Program
              </label>
              <select
                value={formData.program || "BSc CS"}
                onChange={(e) =>
                  setFormData({ ...formData, program: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="BSc CS">BSc CS</option>
                <option value="BSc EE">BSc EE</option>
                <option value="BBA">BBA</option>
                <option value="BA Eng">BA Eng</option>
                <option value="LLB">LLB</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Batch
              </label>
              <select
                value={formData.batch || "Fall 26"}
                onChange={(e) =>
                  setFormData({ ...formData, batch: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Fall 26">Fall 26</option>
                <option value="Spring 26">Spring 26</option>
                <option value="Fall 25">Fall 25</option>
                <option value="Spring 25">Spring 25</option>
                <option value="Fall 24">Fall 24</option>
                <option value="Fall 23">Fall 23</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Semester
              </label>
              <select
                value={formData.semester || "1st"}
                onChange={(e) =>
                  setFormData({ ...formData, semester: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="student@alfa.edu.rs"
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
                    status: e.target.value as "Active" | "Inactive",
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] bg-white"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </form>
      </DashboardModal>

      {/* Delete Confirmation Modal */}
      <DashboardModal
        isOpen={!!deleteStudentId}
        onClose={() => setDeleteStudentId(null)}
        title="Confirm Student Removal"
        subtitle={`Are you sure you want to delete ${deleteStudentId}?`}
        badge="Destructive Action"
        badgeColor="red"
        maxWidth="sm"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setDeleteStudentId(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="danger"
              size="sm"
              onClick={handleDeleteStudent}
            >
              Delete Record
            </DashboardButton>
          </>
        }
      >
        <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 text-red-800 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>
            This action will remove the student profile from university registers.
            Course enrollments and grades associated with this ID may require archive
            restoration.
          </span>
        </div>
      </DashboardModal>
    </div>
  );
}
