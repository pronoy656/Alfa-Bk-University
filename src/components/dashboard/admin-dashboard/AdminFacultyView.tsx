"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  Landmark,
  Building,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

interface DepartmentInfo {
  code: string;
  name: string;
  head: string;
  students: number;
  courses: number;
}

interface FacultyRecord {
  id: string;
  shortCode: string;
  name: string;
  dean: string;
  departmentCount: number;
  studentCount: number;
  coursesCount: number;
  departments: DepartmentInfo[];
}

const initialFaculties: FacultyRecord[] = [
  {
    id: "fac-1",
    shortCode: "FSE",
    name: "Faculty of Science & Engineering",
    dean: "Dean: Prof. Dr. M. A. Rashid",
    departmentCount: 4,
    studentCount: 520,
    coursesCount: 84,
    departments: [
      {
        code: "CSE",
        name: "Dept. of Computer Science & Engineering",
        head: "Prof. Dr. Milan Stanković",
        students: 280,
        courses: 42,
      },
      {
        code: "EEE",
        name: "Dept. of Electrical & Electronic Engineering",
        head: "Dr. Tariqul Islam",
        students: 140,
        courses: 24,
      },
      {
        code: "CE",
        name: "Dept. of Civil Engineering",
        head: "Prof. Dr. M. A. Rashid",
        students: 65,
        courses: 12,
      },
      {
        code: "MNS",
        name: "Dept. of Mathematics & Natural Sciences",
        head: "Doc. Dr. Jelena Novak",
        students: 35,
        courses: 6,
      },
    ],
  },
  {
    id: "fac-2",
    shortCode: "FBA",
    name: "Faculty of Business Administration",
    dean: "Dean: Prof. Dr. Israt Jahan",
    departmentCount: 2,
    studentCount: 380,
    coursesCount: 42,
    departments: [
      {
        code: "MGT",
        name: "Dept. of Management & Marketing",
        head: "Prof. Dr. Israt Jahan",
        students: 210,
        courses: 24,
      },
      {
        code: "ACT",
        name: "Dept. of Accounting & Finance",
        head: "Dr. Nusrat Jahan",
        students: 170,
        courses: 18,
      },
    ],
  },
  {
    id: "fac-3",
    shortCode: "FASS",
    name: "Faculty of Arts & Social Sciences",
    dean: "Dean: Prof. Dr. Tanvir Anjum",
    departmentCount: 2,
    studentCount: 290,
    coursesCount: 30,
    departments: [
      {
        code: "ENG",
        name: "Dept. of English & Modern Languages",
        head: "Dr. Tanvir Anjum",
        students: 160,
        courses: 18,
      },
      {
        code: "ECO",
        name: "Dept. of Economics & Governance",
        head: "Dr. Hasan Mahmud",
        students: 130,
        courses: 12,
      },
    ],
  },
  {
    id: "fac-4",
    shortCode: "FLS",
    name: "Faculty of Law & Legal Studies",
    dean: "Dean: Dr. Syeda Sultana",
    departmentCount: 1,
    studentCount: 55,
    coursesCount: 14,
    departments: [
      {
        code: "LAW",
        name: "Dept. of Law & Jurisprudence",
        head: "Dr. Syeda Sultana",
        students: 55,
        courses: 14,
      },
    ],
  },
];

export default function AdminFacultyView() {
  const [faculties, setFaculties] = useState<FacultyRecord[]>(initialFaculties);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFacultyId, setExpandedFacultyId] = useState<string | null>(null);

  // Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    shortCode: "",
    dean: "",
    departmentCount: 1,
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredFaculties = faculties.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.dean.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedFacultyId((prev) => (prev === id ? null : id));
  };

  const handleAddFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    const newFaculty: FacultyRecord = {
      id: `fac-${Date.now()}`,
      shortCode: formData.shortCode || "NEW",
      name: formData.name,
      dean: formData.dean.startsWith("Dean:") ? formData.dean : `Dean: ${formData.dean}`,
      departmentCount: Number(formData.departmentCount) || 1,
      studentCount: 0,
      coursesCount: 0,
      departments: [],
    };

    setFaculties([...faculties, newFaculty]);
    setIsAddModalOpen(false);
    showToast(`Faculty "${newFaculty.name}" added successfully!`);
    setFormData({ name: "", shortCode: "", dean: "", departmentCount: 1 });
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

      {/* 1. Header Bar: Title + Search + Add Faculty Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Faculty Management
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Bar */}
          <div className="relative min-w-[260px] lg:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#C69234] shadow-2xs"
            />
          </div>

          {/* Add Faculty Button (Gold) */}
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add Faculty</span>
          </button>
        </div>
      </div>

      {/* 2. Faculty Cards List (Exact Match with Image 3) */}
      <div className="space-y-4">
        {filteredFaculties.map((fac) => {
          const isExpanded = expandedFacultyId === fac.id;
          return (
            <div
              key={fac.id}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition space-y-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                {/* Left Side: Short Code Badge + Faculty Info */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF8ED] border border-[#EEDBBA] text-[#A06E1A] font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 tracking-wide">
                    {fac.shortCode}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {fac.name}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {fac.dean}
                    </p>
                  </div>
                </div>

                {/* Right Side: Metrics + Expand Button */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 justify-between lg:justify-end">
                  {/* Metric 1: Departments */}
                  <div className="text-left sm:text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {fac.departmentCount}{" "}
                      {fac.departmentCount === 1 ? "Department" : "Departments"}
                    </p>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Departments
                    </span>
                  </div>

                  {/* Metric 2: Enrollment */}
                  <div className="text-left sm:text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {fac.studentCount} Students
                    </p>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Enrollment
                    </span>
                  </div>

                  {/* Metric 3: Active Courses */}
                  <div className="text-left sm:text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {fac.coursesCount} Courses
                    </p>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Active Courses
                    </span>
                  </div>

                  {/* Expand Departments Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(fac.id)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <span>
                      {isExpanded ? "Collapse" : "Expand Departments"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible Departments Nested View */}
              {isExpanded && (
                <div className="pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Constituent Departments ({fac.departments.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {fac.departments.map((dept, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#0B1E36] text-white font-bold text-[10px]">
                              {dept.code}
                            </span>
                            <h4 className="font-bold text-slate-900">{dept.name}</h4>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            Head: <strong>{dept.head}</strong>
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-slate-800 block">
                            {dept.students} Students
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            {dept.courses} Courses
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Faculty Modal */}
      <DashboardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Register New Academic Faculty"
        subtitle="Establish collegiate division and designate dean chair"
        badge="Institutional Charter"
        badgeColor="gold"
        maxWidth="md"
        footerActions={
          <>
            <DashboardButton
              variant="secondary"
              size="sm"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton
              variant="gold"
              size="sm"
              type="submit"
              form="add-faculty-form"
            >
              Establish Faculty
            </DashboardButton>
          </>
        }
      >
        <form
          id="add-faculty-form"
          onSubmit={handleAddFaculty}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Faculty Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Faculty of Allied Health Sciences"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Short Code *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. FAHS"
                value={formData.shortCode}
                onChange={(e) =>
                  setFormData({ ...formData, shortCode: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Department Count
              </label>
              <input
                type="number"
                min={1}
                value={formData.departmentCount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    departmentCount: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Designated Dean Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Prof. Dr. Farzana Chowdhury"
              value={formData.dean}
              onChange={(e) => setFormData({ ...formData, dean: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234]"
            />
          </div>
        </form>
      </DashboardModal>
    </div>
  );
}
