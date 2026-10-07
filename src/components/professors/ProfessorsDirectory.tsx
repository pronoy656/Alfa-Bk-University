"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Building2,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Globe,
  Code,
  Scale,
  Settings,
  Calculator,
  Landmark,
  LucideIcon,
} from "lucide-react";
import { professorsData, ProfessorItem } from "@/components/data";
import UniversityGradient from "@/components/shared/UniversityGradient";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Briefcase,
  Globe,
  Code,
  Scale,
  Settings,
  Calculator,
  Landmark,
};

export default function ProfessorsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFaculty, setSelectedFaculty] = useState("All Faculties");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");

  const { spotlight, categories, departments, positions, professors } =
    professorsData;

  const filteredProfessors = useMemo(() => {
    return professors.filter((prof) => {
      // Category pill filter
      if (selectedCategory !== "all" && prof.facultyId !== selectedCategory) {
        return false;
      }

      // Dropdown faculty filter
      if (
        selectedFaculty !== "All Faculties" &&
        !prof.faculty.toLowerCase().includes(selectedFaculty.toLowerCase())
      ) {
        return false;
      }

      // Dropdown department filter
      if (
        selectedDepartment !== "All Departments" &&
        prof.department !== selectedDepartment
      ) {
        return false;
      }

      // Dropdown position filter
      if (
        selectedPosition !== "All Positions" &&
        prof.role !== selectedPosition
      ) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = prof.name.toLowerCase().includes(q);
        const matchesDept = prof.department.toLowerCase().includes(q);
        const matchesFaculty = prof.faculty.toLowerCase().includes(q);
        const matchesTags = prof.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDept && !matchesFaculty && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [
    professors,
    selectedCategory,
    selectedFaculty,
    selectedDepartment,
    selectedPosition,
    searchQuery,
  ]);

  return (
    <div className="bg-[#FAF9F6]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white">
        {/* Background photo overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/90 to-[#0B1E36]/75" />

        <div className="container relative mx-auto px-4 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E5A83B] uppercase">
              FACULTY
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Professors & Teaching Assistants
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Meet the experienced educators and research experts who inspire,
              mentor and guide our students toward a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CARD (Overlapping Hero) */}
      <div className="container relative mx-auto -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-lg lg:p-5">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
            {/* Search Input */}
            <div className="relative lg:col-span-6">
              <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, department, or interest..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pr-4 pl-10 text-xs text-slate-800 placeholder-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-hidden"
              />
            </div>

            {/* Faculty Dropdown */}
            <div className="relative lg:col-span-2">
              <label className="mb-1 block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                FACULTY
              </label>
              <div className="relative">
                <select
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-3 text-xs font-medium text-slate-700 transition focus:border-blue-500 focus:outline-hidden"
                >
                  <option value="All Faculties">All Faculties</option>
                  <option value="Finance">Finance, Trade & Accounting</option>
                  <option value="Foreign Languages">Foreign Languages</option>
                  <option value="Sports">Management in Sports</option>
                  <option value="Information Technologies">
                    Information Technologies
                  </option>
                  <option value="Mathematics">
                    Mathematics and Computer Science
                  </option>
                  <option value="Psychology">Psychology</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="relative lg:col-span-2">
              <label className="mb-1 block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                DEPARTMENT
              </label>
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-3 text-xs font-medium text-slate-700 transition focus:border-blue-500 focus:outline-hidden"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Position Dropdown */}
            <div className="relative lg:col-span-2">
              <label className="mb-1 block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                POSITION
              </label>
              <div className="relative">
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-3 text-xs font-medium text-slate-700 transition focus:border-blue-500 focus:outline-hidden"
                >
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* 3. PROFESSOR SPOTLIGHT CARD */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Column 1: Photo & Featured Tag */}
            <div className="relative lg:col-span-4">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={spotlight.photo}
                  alt={spotlight.name}
                  className="h-full w-full object-cover object-top"
                />
                <span className="absolute top-3.5 left-3.5 rounded-md bg-[#10B981] px-2.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-xs">
                  FEATURED
                </span>
              </div>
            </div>

            {/* Column 2: Details & Bio */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  PROFESSOR SPOTLIGHT
                </span>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  {spotlight.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {spotlight.role}
                </p>

                <div className="mt-5 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        {spotlight.faculty}
                      </p>
                      <p className="text-slate-500">{spotlight.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-4 w-4 shrink-0 text-slate-400" />
                    <span>{spotlight.degree}</span>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-600">
                  {spotlight.bio}
                </p>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href="/university/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 transition hover:text-blue-600"
                >
                  View Full Profile
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 3: Also Teaches In & Courses */}
            <div className="border-t border-slate-100 pt-6 lg:col-span-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <h3 className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  <span className="h-2.5 w-1 rounded-full bg-blue-600" />
                  ALSO TEACHES IN
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spotlight.alsoTeachesIn.map((fac) => (
                    <span
                      key={fac}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  <span className="h-2.5 w-1 rounded-full bg-blue-600" />
                  COURSES
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  {spotlight.courses.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FACULTY FILTER PILLS */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 5. PROFESSORS CARDS GRID */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProfessors.map((prof: ProfessorItem) => {
            const Icon = iconMap[prof.icon] || Building2;
            return (
              <div
                key={prof.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div>
                  {/* Avatar & Type Badge */}
                  <div className="flex items-center justify-between">
                    <img
                      src={prof.photo}
                      alt={prof.name}
                      className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
                    />
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {prof.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900 transition group-hover:text-blue-600">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-slate-500">{prof.role}</p>

                  {/* Faculty & Department */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-slate-600">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${prof.iconBg}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 line-clamp-1">
                        {prof.faculty}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {prof.department}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prof.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="mt-6 border-t border-slate-100 pt-3 text-right">
                  <Link
                    href="/university/contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 transition hover:text-blue-600"
                  >
                    View Profile
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProfessors.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-sm font-semibold text-slate-600">
              No faculty members found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedFaculty("All Faculties");
                setSelectedDepartment("All Departments");
                setSelectedPosition("All Positions");
              }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* 6. BECOME PART OF ALFA BK UNIVERSITY BANNER */}
        <div className="mt-16">
          <UniversityGradient className="relative overflow-hidden rounded-2xl p-8 text-white shadow-md sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#E5A83B] uppercase">
                  WANT TO JOIN OUR TEAM?
                </span>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl lg:text-4xl">
                  Become Part of Alfa BK University
                </h3>
                <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                  We are always looking for passionate educators, researchers
                  and professionals who share our vision.
                </p>

                <div className="mt-6">
                  <Link
                    href="/apply-now"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
                  >
                    Apply
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right decorative visual with handwritten script */}
              <div className="relative flex justify-center lg:col-span-4 lg:justify-end">
                <div className="relative h-44 w-60 overflow-hidden rounded-xl shadow-lg sm:h-48 sm:w-72">
                  <img
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                    alt="University library books"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <div className="absolute top-4 right-4 text-right">
                    <span
                      className="block text-2xl font-normal text-[#FDE68A] italic select-none"
                      style={{
                        fontFamily:
                          "'Brush Script MT', 'Dancing Script', cursive",
                        textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                      }}
                    >
                      Make an
                    </span>
                    <span
                      className="block text-3xl font-bold text-[#FDE68A] italic select-none"
                      style={{
                        fontFamily:
                          "'Brush Script MT', 'Dancing Script', cursive",
                        textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                      }}
                    >
                      Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </UniversityGradient>
        </div>
      </div>
    </div>
  );
}
