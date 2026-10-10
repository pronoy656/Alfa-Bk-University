"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Layers,
  Clock,
  Users,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export interface ProgramRecord {
  code: string;
  name: string;
  degreeLevel: "Bachelors" | "Masters" | "Doctorate";
  department: string;
  totalCredits: number;
  durationSemesters: number;
  enrolled: number;
  status: "Active" | "Upcoming" | "Archived";
  tracks: string[];
  description?: string;
  coordinator?: string;
  minCgpa?: number;
}

const initialPrograms: ProgramRecord[] = [
  {
    code: "BSC-CSE",
    name: "BSc in Computer Science & Engineering",
    degreeLevel: "Bachelors",
    department: "CSE",
    totalCredits: 140,
    durationSemesters: 8,
    enrolled: 420,
    status: "Active",
    tracks: ["Software Engineering", "Artificial Intelligence", "Cybersecurity"],
    coordinator: "Prof. Dr. Milan Stanković",
    description:
      "Comprehensive four-year curriculum designed to provide rigorous training in software architecture, algorithms, and applied machine learning.",
    minCgpa: 2.5,
  },
  {
    code: "MSC-CSE",
    name: "MSc in Computer Science",
    degreeLevel: "Masters",
    department: "CSE",
    totalCredits: 60,
    durationSemesters: 4,
    enrolled: 68,
    status: "Active",
    tracks: ["Intelligent Systems", "Cloud Computing & Distributed Systems"],
    coordinator: "Dr. Mohammad Rahman",
    description:
      "Advanced graduate program focusing on research methodologies, deep neural networks, and scalable distributed enterprise applications.",
    minCgpa: 3.0,
  },
  {
    code: "MBA-REG",
    name: "Master of Business Administration (Regular)",
    degreeLevel: "Masters",
    department: "BBA",
    totalCredits: 60,
    durationSemesters: 4,
    enrolled: 180,
    status: "Active",
    tracks: ["Marketing Strategy", "Corporate Finance", "Human Resource Leadership"],
    coordinator: "Mr. Abu Noman",
    description:
      "Executive and graduate management track developing strategic problem solving, market analytics, and corporate decision making.",
    minCgpa: 2.75,
  },
  {
    code: "BBA-GEN",
    name: "Bachelor of Business Administration",
    degreeLevel: "Bachelors",
    department: "BBA",
    totalCredits: 130,
    durationSemesters: 8,
    enrolled: 310,
    status: "Active",
    tracks: ["Strategic Management", "Digital Marketing", "Supply Chain"],
    coordinator: "Sultana Ahmed",
    description:
      "Undergraduate curriculum emphasizing foundational business administration, accounting principles, and entrepreneurship.",
    minCgpa: 2.5,
  },
  {
    code: "BSC-EEE",
    name: "BSc in Electrical & Electronic Engineering",
    degreeLevel: "Bachelors",
    department: "EEE",
    totalCredits: 144,
    durationSemesters: 8,
    enrolled: 195,
    status: "Active",
    tracks: ["Power Systems & Energy", "Telecommunications", "Embedded Systems"],
    coordinator: "Dr. Tariqul Islam",
    description:
      "Engineering accreditation track focusing on electric circuits, control systems, and microchip architecture.",
    minCgpa: 2.5,
  },
  {
    code: "BSC-CE",
    name: "BSc in Civil Engineering",
    degreeLevel: "Bachelors",
    department: "CE",
    totalCredits: 142,
    durationSemesters: 8,
    enrolled: 160,
    status: "Active",
    tracks: ["Structural Engineering", "Geotechnical & Surveying", "Environmental Engineering"],
    coordinator: "Prof. Dr. M. A. Rashid",
    description:
      "Rigorous curriculum spanning structural mechanics, concrete structures, transportation planning, and hydrology.",
    minCgpa: 2.5,
  },
  {
    code: "BA-ENG",
    name: "BA in English Literature & Linguistics",
    degreeLevel: "Bachelors",
    department: "ENG",
    totalCredits: 124,
    durationSemesters: 8,
    enrolled: 110,
    status: "Active",
    tracks: ["Applied Linguistics", "World English Literature", "Critical Literary Theory"],
    coordinator: "Farhana Yasmin",
    description:
      "Interdisciplinary studies covering classical literature, modern literary critique, phonetics, and academic writing.",
    minCgpa: 2.25,
  },
  {
    code: "MSC-DS",
    name: "MSc in Data Science & Big Data",
    degreeLevel: "Masters",
    department: "CSE",
    totalCredits: 60,
    durationSemesters: 4,
    enrolled: 0,
    status: "Upcoming",
    tracks: ["Big Data Analytics", "Deep Learning", "Statistical Modeling"],
    coordinator: "Dr. Tanvir Anjum",
    description:
      "New graduate curriculum launching in Spring 2027 focusing on modern data engineering pipelines and statistical AI.",
    minCgpa: 3.0,
  },
  {
    code: "LL.B-HONS",
    name: "Bachelor of Laws (LL.B Hons)",
    degreeLevel: "Bachelors",
    department: "LAW",
    totalCredits: 136,
    durationSemesters: 8,
    enrolled: 95,
    status: "Active",
    tracks: ["Corporate Jurisprudence", "Criminal Law", "Constitutional Law"],
    coordinator: "Barrister Rafiqul Haque",
    description:
      "Four-year law curriculum preparing future advocates in procedural law, legal ethics, international arbitration, and jurisprudence.",
    minCgpa: 2.75,
  },
  {
    code: "BSS-ECO",
    name: "BSS in Economics & Public Policy",
    degreeLevel: "Bachelors",
    department: "ECO",
    totalCredits: 128,
    durationSemesters: 8,
    enrolled: 45,
    status: "Archived",
    tracks: ["Econometrics", "Macroeconomic Policy"],
    coordinator: "Dr. Selim Jahan",
    description:
      "Prior curriculum for applied economics, development policies, and quantitative statistical research.",
    minCgpa: 2.5,
  },
];

export default function AdminProgramsView() {
  const [programs, setPrograms] = useState<ProgramRecord[]>(initialPrograms);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewProgram, setViewProgram] = useState<ProgramRecord | null>(null);
  const [editProgram, setEditProgram] = useState<ProgramRecord | null>(null);
  const [deleteProgramCode, setDeleteProgramCode] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<ProgramRecord>>({
    code: "",
    name: "",
    degreeLevel: "Bachelors",
    department: "CSE",
    totalCredits: 140,
    durationSemesters: 8,
    enrolled: 0,
    status: "Active",
    tracks: ["Software Engineering"],
    coordinator: "Prof. Dr. Milan Stanković",
    description: "",
  });

  const [tracksInput, setTracksInput] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter Logic
  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tracks.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDept =
        selectedDept === "All Departments" || p.department === selectedDept;

      const matchesLevel =
        selectedLevel === "All Levels" || p.degreeLevel === selectedLevel;

      const matchesStatus =
        selectedStatus === "All Statuses" || p.status === selectedStatus;

      return matchesSearch && matchesDept && matchesLevel && matchesStatus;
    });
  }, [programs, searchQuery, selectedDept, selectedLevel, selectedStatus]);

  // Handlers
  const handleOpenAdd = () => {
    setFormData({
      code: "",
      name: "",
      degreeLevel: "Bachelors",
      department: "CSE",
      totalCredits: 140,
      durationSemesters: 8,
      enrolled: 0,
      status: "Active",
      tracks: ["Software Engineering"],
      coordinator: "Prof. Dr. Milan Stanković",
      description: "",
    });
    setTracksInput("Software Engineering, Artificial Intelligence");
    setIsAddModalOpen(true);
  };

  const handleSaveAdd = () => {
    if (!formData.code || !formData.name) {
      alert("Please enter program code and name");
      return;
    }
    const newTracks = tracksInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const newRecord: ProgramRecord = {
      code: formData.code.toUpperCase(),
      name: formData.name,
      degreeLevel: (formData.degreeLevel as ProgramRecord["degreeLevel"]) || "Bachelors",
      department: formData.department || "CSE",
      totalCredits: Number(formData.totalCredits) || 140,
      durationSemesters: Number(formData.durationSemesters) || 8,
      enrolled: Number(formData.enrolled) || 0,
      status: (formData.status as ProgramRecord["status"]) || "Active",
      tracks: newTracks.length > 0 ? newTracks : ["General Track"],
      coordinator: formData.coordinator || "Department Chair",
      description: formData.description || "Curriculum track registered in university portal.",
    };

    setPrograms([newRecord, ...programs]);
    setIsAddModalOpen(false);
    showToast(`Program "${newRecord.code}" created successfully!`);
  };

  const handleOpenEdit = (p: ProgramRecord) => {
    setEditProgram(p);
    setFormData({ ...p });
    setTracksInput(p.tracks.join(", "));
  };

  const handleSaveEdit = () => {
    if (!editProgram) return;
    const newTracks = tracksInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    setPrograms(
      programs.map((item) =>
        item.code === editProgram.code
          ? {
              ...item,
              ...formData,
              tracks: newTracks.length > 0 ? newTracks : item.tracks,
            }
          : item
      )
    );
    setEditProgram(null);
    showToast(`Program "${editProgram.code}" updated successfully!`);
  };

  const handleDeleteConfirm = () => {
    if (!deleteProgramCode) return;
    setPrograms(programs.filter((p) => p.code !== deleteProgramCode));
    showToast(`Program "${deleteProgramCode}" removed.`);
    setDeleteProgramCode(null);
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
            Program Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Configure academic program curriculums, requirements, and tracks
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by code, title, or track..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#C69234] focus:ring-1 focus:ring-[#C69234] shadow-2xs transition"
            />
          </div>

          {/* Add Program Button */}
          <button
            type="button"
            onClick={handleOpenAdd}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#b58328] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Program</span>
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
              <option value="BBA">BBA (Business Admin)</option>
              <option value="EEE">EEE (Electrical Eng)</option>
              <option value="CE">CE (Civil Eng)</option>
              <option value="ENG">ENG (English & Arts)</option>
              <option value="LAW">LAW (School of Law)</option>
              <option value="ECO">ECO (Economics)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Degree Level Filter */}
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 mb-1 ml-0.5">
            Degree Level
          </span>
          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-hidden focus:border-[#C69234] cursor-pointer"
            >
              <option value="All Levels">All Levels</option>
              <option value="Bachelors">Bachelors (Undergraduate)</option>
              <option value="Masters">Masters (Graduate)</option>
              <option value="Doctorate">Doctorate (PhD)</option>
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
              <option value="Active">Active</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Archived">Archived</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Total Catalog Pill */}
        <div className="flex items-end">
          <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 flex items-center justify-between">
            <span>Total Programs:</span>
            <span className="font-extrabold text-[#0B1E36]">
              {programs.length} Programs
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Programs Data Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-5">Code</th>
                <th className="py-3.5 px-4 sm:px-5">Program Name</th>
                <th className="py-3.5 px-4 sm:px-5">Degree Level</th>
                <th className="py-3.5 px-4 sm:px-5">Department</th>
                <th className="py-3.5 px-4 sm:px-5">Credits</th>
                <th className="py-3.5 px-4 sm:px-5">Duration</th>
                <th className="py-3.5 px-4 sm:px-5">Status</th>
                <th className="py-3.5 px-4 sm:px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((p) => (
                  <tr
                    key={p.code}
                    className="hover:bg-slate-50/60 transition group"
                  >
                    {/* Code Badge */}
                    <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-[#9E7321] font-extrabold text-[11px] border border-amber-200/60">
                        {p.code}
                      </span>
                    </td>

                    {/* Program Name (Clean Title Only) */}
                    <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 whitespace-nowrap">
                      {p.name}
                    </td>

                    {/* Degree Level (Clean Text Only, No Icon) */}
                    <td className="py-4 px-4 sm:px-5 text-slate-700 font-semibold whitespace-nowrap">
                      {p.degreeLevel}
                    </td>

                    {/* Department */}
                    <td className="py-4 px-4 sm:px-5 text-slate-600 font-semibold whitespace-nowrap">
                      {p.department}
                    </td>

                    {/* Credits */}
                    <td className="py-4 px-4 sm:px-5 text-slate-800 font-bold whitespace-nowrap">
                      {p.totalCredits} Credits
                    </td>

                    {/* Duration / Semesters */}
                    <td className="py-4 px-4 sm:px-5 text-slate-600 whitespace-nowrap">
                      {p.durationSemesters} Semesters
                    </td>

                    {/* Status Pill */}
                    <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          p.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : p.status === "Upcoming"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        {/* Eye: View Tracks / Curriculum */}
                        <button
                          type="button"
                          onClick={() => setViewProgram(p)}
                          title="View Program Curriculum & Tracks"
                          className="text-[#C69234] hover:text-[#9E7321] transition p-1 hover:bg-amber-50 rounded-lg cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {/* Pencil: Edit */}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(p)}
                          title="Edit Program"
                          className="text-slate-500 hover:text-slate-800 transition p-1 hover:bg-slate-100 rounded-lg cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        {/* Trash: Delete */}
                        <button
                          type="button"
                          onClick={() => setDeleteProgramCode(p.code)}
                          title="Remove Program"
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
                    No programs match the selected filter criteria.
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
              {filteredPrograms.length > 0 ? "1" : "0"}-
              {Math.min(filteredPrograms.length, 8)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-800">
              {programs.length}
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

      {/* MODAL 1: ADD PROGRAM */}
      <DashboardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Create New Academic Program"
        subtitle="Define degree tracks, credits, and accreditation requirements"
        maxWidth="2xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Program Code *
              </label>
              <input
                type="text"
                placeholder="e.g. BSC-CSE, MBA-REG"
                value={formData.code || ""}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Degree Level *
              </label>
              <select
                value={formData.degreeLevel || "Bachelors"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    degreeLevel: e.target.value as ProgramRecord["degreeLevel"],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="Bachelors">Bachelors (Undergraduate)</option>
                <option value="Masters">Masters (Graduate)</option>
                <option value="Doctorate">Doctorate (PhD)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Program Name *
            </label>
            <input
              type="text"
              placeholder="e.g. BSc in Computer Science & Engineering"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                <option value="BBA">BBA</option>
                <option value="EEE">EEE</option>
                <option value="CE">CE</option>
                <option value="ENG">ENG</option>
                <option value="LAW">LAW</option>
                <option value="ECO">ECO</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Total Credits
              </label>
              <input
                type="number"
                placeholder="140"
                value={formData.totalCredits || 140}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    totalCredits: Number(e.target.value),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Duration (Semesters)
              </label>
              <input
                type="number"
                placeholder="8"
                value={formData.durationSemesters || 8}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    durationSemesters: Number(e.target.value),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Curriculum Tracks & Specializations (comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Software Engineering, Artificial Intelligence, Data Science"
              value={tracksInput}
              onChange={(e) => setTracksInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Program Coordinator / Lead
              </label>
              <input
                type="text"
                placeholder="e.g. Prof. Dr. Milan Stanković"
                value={formData.coordinator || ""}
                onChange={(e) =>
                  setFormData({ ...formData, coordinator: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Initial Status
              </label>
              <select
                value={formData.status || "Active"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as ProgramRecord["status"],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              >
                <option value="Active">Active</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Program Description & Outcomes
            </label>
            <textarea
              rows={3}
              placeholder="Enter curriculum objectives and graduation requirements..."
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#C69234]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <DashboardButton
              variant="outline"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="primary" onClick={handleSaveAdd}>
              Create Program
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>

      {/* MODAL 2: VIEW PROGRAM CURRICULUM */}
      <DashboardModal
        isOpen={!!viewProgram}
        onClose={() => setViewProgram(null)}
        title={viewProgram ? `${viewProgram.code} Curriculum & Tracks` : "Program Details"}
        subtitle={viewProgram?.name}
        maxWidth="2xl"
      >
        {viewProgram && (
          <div className="space-y-5">
            {/* Summary Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Degree Level
                </span>
                <span className="text-xs font-bold text-[#0B1E36]">
                  {viewProgram.degreeLevel}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Required Credits
                </span>
                <span className="text-xs font-bold text-[#C69234]">
                  {viewProgram.totalCredits} Credits
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Duration
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {viewProgram.durationSemesters} Semesters
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  Current Enrollment
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {viewProgram.enrolled} Students
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Curriculum Overview
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                {viewProgram.description ||
                  "A multi-disciplinary undergraduate/graduate curriculum designed in accordance with global accreditation standards."}
              </p>
            </div>

            {/* Specialization Tracks */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C69234]" />
                <span>Specialization Tracks & Pathways</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {viewProgram.tracks.map((track, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border border-slate-200/80 bg-white flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-50 text-[#C69234] font-bold text-[10px] flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {track}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Accredited
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinator Info */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <span className="text-slate-500 font-medium">Program Coordinator:</span>
              <span className="font-bold text-slate-800">
                {viewProgram.coordinator || "Department Board"}
              </span>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <DashboardButton
                variant="primary"
                onClick={() => setViewProgram(null)}
              >
                Close
              </DashboardButton>
            </div>
          </div>
        )}
      </DashboardModal>

      {/* MODAL 3: EDIT PROGRAM */}
      <DashboardModal
        isOpen={!!editProgram}
        onClose={() => setEditProgram(null)}
        title="Edit Academic Program"
        subtitle={editProgram?.code}
        maxWidth="2xl"
      >
        {editProgram && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Program Code
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
                  value={formData.status || "Active"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as ProgramRecord["status"],
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                >
                  <option value="Active">Active</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Program Name
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Department
                </label>
                <input
                  type="text"
                  value={formData.department || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Total Credits
                </label>
                <input
                  type="number"
                  value={formData.totalCredits || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      totalCredits: Number(e.target.value),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Duration (Semesters)
                </label>
                <input
                  type="number"
                  value={formData.durationSemesters || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      durationSemesters: Number(e.target.value),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Curriculum Tracks (comma-separated)
              </label>
              <input
                type="text"
                value={tracksInput}
                onChange={(e) => setTracksInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Program Coordinator
              </label>
              <input
                type="text"
                value={formData.coordinator || ""}
                onChange={(e) =>
                  setFormData({ ...formData, coordinator: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#C69234]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <DashboardButton
                variant="outline"
                onClick={() => setEditProgram(null)}
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
        isOpen={!!deleteProgramCode}
        onClose={() => setDeleteProgramCode(null)}
        title="Remove Program Confirmation"
        maxWidth="md"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-800">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              Are you sure you want to remove program{" "}
              <strong className="font-bold">{deleteProgramCode}</strong>? Existing
              curriculums and student records may be archived.
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <DashboardButton
              variant="outline"
              onClick={() => setDeleteProgramCode(null)}
            >
              Cancel
            </DashboardButton>
            <DashboardButton variant="danger" onClick={handleDeleteConfirm}>
              Remove Program
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
