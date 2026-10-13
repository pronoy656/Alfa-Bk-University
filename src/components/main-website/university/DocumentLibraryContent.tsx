"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Search,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Scale,
  AlertCircle,
} from "lucide-react";

interface DocumentItem {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  date: string;
  lang: string;
  isProvisional?: boolean;
}

interface CategoryConfig {
  name: string;
  dotColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  btnHover: string;
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: Record<string, CategoryConfig> = {
  "University Documents": {
    name: "University Documents",
    dotColor: "bg-[#113565]",
    borderColor: "border-l-[#113565]",
    badgeBg: "bg-[#113565]",
    badgeText: "text-white",
    btnBg: "bg-[#113565]",
    btnHover: "hover:bg-[#0c274d]",
    iconBg: "bg-slate-100",
    iconColor: "text-[#113565]",
    icon: FileText,
  },
  "Accreditation": {
    name: "Accreditation",
    dotColor: "bg-[#A2302F]",
    borderColor: "border-l-[#A2302F]",
    badgeBg: "bg-[#A2302F]",
    badgeText: "text-white",
    btnBg: "bg-[#A2302F]",
    btnHover: "hover:bg-[#7f2424]",
    iconBg: "bg-rose-50",
    iconColor: "text-[#A2302F]",
    icon: Award,
  },
  "Enrollment Documents": {
    name: "Enrollment Documents",
    dotColor: "bg-[#0D825E]",
    borderColor: "border-l-[#0D825E]",
    badgeBg: "bg-[#0D825E]",
    badgeText: "text-white",
    btnBg: "bg-[#0D825E]",
    btnHover: "hover:bg-[#096347]",
    iconBg: "bg-emerald-50",
    iconColor: "text-[#0D825E]",
    icon: Users,
  },
  "Faculty Documents": {
    name: "Faculty Documents",
    dotColor: "bg-[#6B21A8]",
    borderColor: "border-l-[#6B21A8]",
    badgeBg: "bg-[#6B21A8]",
    badgeText: "text-white",
    btnBg: "bg-[#6B21A8]",
    btnHover: "hover:bg-[#531885]",
    iconBg: "bg-purple-50",
    iconColor: "text-[#6B21A8]",
    icon: BookOpen,
  },
  "Program Documents": {
    name: "Program Documents",
    dotColor: "bg-[#C27803]",
    borderColor: "border-l-[#C27803]",
    badgeBg: "bg-[#C27803]",
    badgeText: "text-white",
    btnBg: "bg-[#C27803]",
    btnHover: "hover:bg-[#9d6002]",
    iconBg: "bg-amber-50",
    iconColor: "text-[#C27803]",
    icon: BookOpen,
  },
  "Student Documents": {
    name: "Student Documents",
    dotColor: "bg-[#059669]",
    borderColor: "border-l-[#059669]",
    badgeBg: "bg-[#059669]",
    badgeText: "text-white",
    btnBg: "bg-[#059669]",
    btnHover: "hover:bg-[#047857]",
    iconBg: "bg-emerald-50",
    iconColor: "text-[#059669]",
    icon: GraduationCap,
  },
  "Legal Documents": {
    name: "Legal Documents",
    dotColor: "bg-[#2563EB]",
    borderColor: "border-l-[#2563EB]",
    badgeBg: "bg-[#2563EB]",
    badgeText: "text-white",
    btnBg: "bg-[#2563EB]",
    btnHover: "hover:bg-[#1d4ed8]",
    iconBg: "bg-blue-50",
    iconColor: "text-[#2563EB]",
    icon: Scale,
  },
};

const ALL_DOCUMENTS: DocumentItem[] = [
  // University Documents
  {
    id: "univ-1",
    title: "University Statute",
    category: "University Documents",
    date: "Jan 2026",
    lang: "SR / EN",
  },
  {
    id: "univ-2",
    title: "Academic Calendar 2026/2027",
    category: "University Documents",
    date: "Aug 2026",
    lang: "SR",
  },
  {
    id: "univ-3",
    title: "University Development Strategy 2024-2030",
    category: "University Documents",
    date: "Mar 2024",
    lang: "SR",
  },
  {
    id: "univ-4",
    title: "Quality Assurance Policy",
    category: "University Documents",
    date: "Sep 2025",
    lang: "SR / EN",
  },

  // Accreditation
  {
    id: "acc-1",
    title: "Accreditation Certificate - Alfa BK University",
    category: "Accreditation",
    date: "2022",
    lang: "SR",
  },
  {
    id: "acc-2",
    title: "Accreditation Report - Faculty of Finance, Trade and Accounting",
    category: "Accreditation",
    subCategory: "Finance, Trade & Accounting",
    date: "2022",
    lang: "SR",
  },
  {
    id: "acc-3",
    title: "Accreditation Report - Faculty of Information Technologies",
    category: "Accreditation",
    subCategory: "Information Technologies",
    date: "2022",
    lang: "SR",
  },
  {
    id: "acc-4",
    title: "Accreditation Report - Faculty of Mathematics and Computer Sciences",
    category: "Accreditation",
    subCategory: "Mathematics & CS",
    date: "2022",
    lang: "SR",
  },

  // Enrollment Documents
  {
    id: "enr-1",
    title: "Enrollment Requirements 2026/2027",
    category: "Enrollment Documents",
    date: "Jul 2026",
    lang: "SR / EN / RU",
  },
  {
    id: "enr-2",
    title: "Required Documents for Enrollment - Checklist",
    category: "Enrollment Documents",
    date: "Jul 2026",
    lang: "SR / EN",
  },
  {
    id: "enr-3",
    title: "Tuition Payment Information",
    category: "Enrollment Documents",
    date: "Aug 2026",
    lang: "SR",
  },

  // Faculty Documents
  {
    id: "fac-1",
    title: "Faculty Guide - Finance, Trade and Accounting",
    category: "Faculty Documents",
    subCategory: "Finance, Trade & Accounting",
    date: "Sep 2026",
    lang: "SR",
  },
  {
    id: "fac-2",
    title: "Faculty Guide - Information Technologies",
    category: "Faculty Documents",
    subCategory: "Information Technologies",
    date: "Sep 2026",
    lang: "SR",
  },
  {
    id: "fac-3",
    title: "Faculty Guide - Mathematics and Computer Sciences",
    category: "Faculty Documents",
    subCategory: "Mathematics & CS",
    date: "Sep 2026",
    lang: "SR",
  },

  // Program Documents
  {
    id: "prg-1",
    title: "Book of Subjects - Economics and Finance (BSc)",
    category: "Program Documents",
    subCategory: "Finance, Trade & Accounting",
    date: "Sep 2026",
    lang: "SR",
  },
  {
    id: "prg-2",
    title: "Study Plan - Information Technologies (BSc)",
    category: "Program Documents",
    subCategory: "Information Technologies",
    date: "Sep 2026",
    lang: "SR",
  },
  {
    id: "prg-3",
    title: "Study Plan - Computer Sciences (BSc)",
    category: "Program Documents",
    subCategory: "Mathematics & CS",
    date: "Sep 2026",
    lang: "SR",
  },
  {
    id: "prg-4",
    title: "Tutor's Book - Anglistics (BSc)",
    category: "Program Documents",
    subCategory: "Foreign Languages",
    date: "Sep 2026",
    lang: "SR",
  },

  // Student Documents
  {
    id: "stu-1",
    title: "Student Rights and Obligations",
    category: "Student Documents",
    date: "Sep 2025",
    lang: "SR",
  },
  {
    id: "stu-2",
    title: "Code of Student Conduct",
    category: "Student Documents",
    date: "Jan 2024",
    lang: "SR",
  },
  {
    id: "stu-3",
    title: "Student Complaint Procedure",
    category: "Student Documents",
    date: "Jan 2024",
    lang: "SR / EN",
  },

  // Legal Documents
  {
    id: "leg-1",
    title: "Higher Education Law of the Republic of Serbia",
    category: "Legal Documents",
    date: "2021",
    lang: "SR",
  },
  {
    id: "leg-2",
    title: "Privacy Policy",
    category: "Legal Documents",
    date: "Jan 2026",
    lang: "SR / EN",
  },
  {
    id: "leg-3",
    title: "Anti-Corruption Policy",
    category: "Legal Documents",
    date: "Mar 2025",
    lang: "SR",
  },
];

const CATEGORY_KEYS = [
  "University Documents",
  "Accreditation",
  "Enrollment Documents",
  "Faculty Documents",
  "Program Documents",
  "Student Documents",
  "Legal Documents",
];

export default function DocumentLibraryContent() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Date - Newest");

  // Filtered documents
  const filteredDocs = useMemo(() => {
    const query = search.trim().toLowerCase();
    const sorted = [...ALL_DOCUMENTS];

    if (sortBy === "Title A-Z") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted.filter((doc) => {
      const matchesCategory =
        selectedCategory === "All Categories" || doc.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        doc.title.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query) ||
        (doc.subCategory && doc.subCategory.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory, sortBy]);

  // Group by category
  const groupedDocs = useMemo(() => {
    const groups: Record<string, DocumentItem[]> = {};

    CATEGORY_KEYS.forEach((cat) => {
      groups[cat] = [];
    });

    filteredDocs.forEach((doc) => {
      if (!groups[doc.category]) {
        groups[doc.category] = [];
      }
      groups[doc.category].push(doc);
    });

    return groups;
  }, [filteredDocs]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      {/* =========================================================================
          1. HERO BANNER
          ========================================================================= */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-[#0A1F3B] text-white">
        {/* Background photo of academic library */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/docs-hero.jpg')",
          }}
        />
        {/* Soft navy overlay keeping photo clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172B]/85 via-[#0A1F3B]/65 to-[#0A1F3B]/35" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Tag */}
            <p className="text-xs font-bold tracking-[0.25em] text-[#D5A754] uppercase mb-4">
              — ACADEMIC RESOURCES · OFFICIAL PUBLICATIONS —
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              DOCUMENT <br />
              <span className="text-[#D5A754]">LIBRARY.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl font-normal">
              University statutes, accreditation certificates, program documents, enrollment guides,
              and legally required publications. All documents are official unless marked provisional.
            </p>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">24</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  DOCUMENTS AVAILABLE
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">7</p>
                <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  CATEGORIES
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs font-bold text-[#D5A754] uppercase tracking-wider mt-2 sm:mt-0">
                  LAST UPDATED:
                </p>
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                  JANUARY 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEARCH & FILTER CONTROLS (White Container)
          ========================================================================= */}
      <section className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Box */}
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-4xl">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents by name, category, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-[#FBFBFA] pl-11 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#113565] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#113565]"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xs transition"
            >
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              FILTER:
            </span>

            <button
              type="button"
              onClick={() => setSelectedCategory("All Categories")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                selectedCategory === "All Categories"
                  ? "bg-[#113565] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>

            {CATEGORY_KEYS.map((catKey) => {
              const cfg = CATEGORIES[catKey];
              const isSelected = selectedCategory === catKey;

              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setSelectedCategory(catKey)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    isSelected
                      ? "bg-[#113565] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${cfg.dotColor}`} />
                  <span>{catKey}</span>
                </button>
              );
            })}
          </div>

          {/* Results Status & Sorting */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
            <p className="text-slate-600 font-medium">
              Showing <span className="font-bold text-[#113565]">{filteredDocs.length} documents</span>{" "}
              {selectedCategory === "All Categories" ? "across all categories" : `in ${selectedCategory}`}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#113565]"
              >
                <option value="Date - Newest">Date - Newest</option>
                <option value="Title A-Z">Title A-Z</option>
                <option value="Category">Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Disclaimer Banner */}
      <div className="bg-[#FFF8E7] border-b border-[#F6E3B8] py-3 text-xs text-[#8F6616]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 font-medium">
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-[#C27803]" />
          <span>
            <strong>Note:</strong> Documents marked with ⚠️ are provisional. Data displayed reflects the
            most recent available records; please contact the Registrar&apos;s Office to verify current validity.
          </span>
        </div>
      </div>

      {/* =========================================================================
          3. DOCUMENTS GROUPED BY CATEGORY
          ========================================================================= */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {CATEGORY_KEYS.map((catKey) => {
            const docs = groupedDocs[catKey] || [];
            if (docs.length === 0) return null;

            const cfg = CATEGORIES[catKey];

            return (
              <div key={catKey}>
                {/* Category Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${cfg.dotColor}`} />
                    <h2 className="text-sm font-black tracking-widest text-[#0B1E36] uppercase">
                      {catKey}
                    </h2>
                  </div>
                  <span
                    className={`h-5 w-5 rounded-full ${cfg.badgeBg} ${cfg.badgeText} text-[10px] font-bold flex items-center justify-center`}
                  >
                    {docs.length}
                  </span>
                </div>

                {/* Document Items List */}
                <div className="space-y-3.5">
                  {docs.map((item) => {
                    const Icon = cfg.icon;

                    return (
                      <div
                        key={item.id}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all border-l-4 ${cfg.borderColor}`}
                      >
                        {/* Left: Icon & Info */}
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                          <div
                            className={`w-10 h-10 rounded-lg ${cfg.iconBg} ${cfg.iconColor} flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold text-[#0B1E36] hover:text-[#113565] transition-colors leading-snug">
                              {item.title}
                            </h3>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                              <span>{item.category}</span>
                              {item.subCategory && (
                                <>
                                  <span>·</span>
                                  <span className="text-slate-600">{item.subCategory}</span>
                                </>
                              )}
                              <span>·</span>
                              <span>{item.date}</span>
                              <span>·</span>
                              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                                {item.lang}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right: Download Button */}
                        <div className="flex-shrink-0 self-end sm:self-center">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              alert(`Downloading ${item.title}...`);
                            }}
                            className={`inline-flex items-center gap-2 rounded-lg ${cfg.btnBg} ${cfg.btnHover} text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 shadow-2xs transition`}
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span>Download PDF</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
