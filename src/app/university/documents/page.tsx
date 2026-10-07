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
  Settings,
  Scale,
} from "lucide-react";
import { universityData } from "@/components/data";

interface DocItem {
  id: string;
  title: string;
  category: string;
  filterCategory?: string;
  subCategory?: string;
  date: string;
  lang: string;
  badgeColor?: string;
  btnColor?: string;
}

export default function DocumentLibraryPage() {
  const { documents } = universityData;
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categoryIcons: Record<string, React.ReactNode> = {
    "University Documents": <FileText className="h-3.5 w-3.5" />,
    "Accreditation": <Award className="h-3.5 w-3.5" />,
    "Program Documents": <BookOpen className="h-3.5 w-3.5" />,
    "Student Documents": <GraduationCap className="h-3.5 w-3.5" />,
    "Faculty Documents": <Users className="h-3.5 w-3.5" />,
    "Admin Documents": <Settings className="h-3.5 w-3.5" />,
    "Legal Documents": <Scale className="h-3.5 w-3.5" />,
  };

  const getDocIcon = (category: string) => {
    switch (category) {
      case "University Documents":
        return <FileText className="h-5 w-5 text-[#0B1E36]" />;
      case "Accreditation":
        return <Award className="h-5 w-5 text-[#8B1D2C]" />;
      case "Faculty Documents":
        return <Users className="h-5 w-5 text-[#15803D]" />;
      case "Program Documents":
        return <BookOpen className="h-5 w-5 text-[#047857]" />;
      case "Enrollment Documents":
      case "Student Documents":
        return <GraduationCap className="h-5 w-5 text-[#0B1E36]" />;
      case "Legal Documents":
        return <Scale className="h-5 w-5 text-[#2563EB]" />;
      default:
        return <FileText className="h-5 w-5 text-[#0B1E36]" />;
    }
  };

  const getDocIconBg = (category: string) => {
    switch (category) {
      case "University Documents":
        return "bg-slate-100";
      case "Accreditation":
        return "bg-rose-50";
      case "Faculty Documents":
        return "bg-emerald-50";
      case "Program Documents":
        return "bg-teal-50";
      case "Enrollment Documents":
      case "Student Documents":
        return "bg-slate-100";
      case "Legal Documents":
        return "bg-blue-50";
      default:
        return "bg-slate-100";
    }
  };

  const getDocColor = (doc: DocItem) => {
    if (doc.badgeColor) return doc.badgeColor;
    switch (doc.category) {
      case "University Documents":
        return "#0B1E36";
      case "Accreditation":
        return "#8B1D2C";
      case "Enrollment Documents":
        return "#0B1E36";
      case "Faculty Documents":
        return "#15803D";
      case "Program Documents":
        return "#047857";
      case "Student Documents":
        return "#047857";
      case "Legal Documents":
        return "#2563EB";
      default:
        return "#0B1E36";
    }
  };

  const getDocBtnColor = (doc: DocItem) => {
    if (doc.btnColor) return doc.btnColor;
    switch (doc.category) {
      case "Accreditation":
        return "bg-[#8B1D2C] hover:bg-[#721723]";
      case "Faculty Documents":
        return "bg-[#15803D] hover:bg-[#166534]";
      case "Program Documents":
        return "bg-[#0B1E36] hover:bg-[#152B4D]";
      case "Student Documents":
        return "bg-[#047857] hover:bg-[#065F46]";
      case "Legal Documents":
        return "bg-[#2563EB] hover:bg-[#1D4ED8]";
      default:
        return "bg-[#0B1E36] hover:bg-[#152B4D]";
    }
  };

  const filteredDocs = useMemo(() => {
    return (documents.items as DocItem[]).filter((doc) => {
      // Category match
      if (selectedCategory !== "All Categories") {
        const matchesCategory =
          doc.category === selectedCategory ||
          doc.filterCategory === selectedCategory;
        if (!matchesCategory) return false;
      }

      // Search match
      if (search.trim() !== "") {
        const q = search.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesCat = doc.category.toLowerCase().includes(q);
        const matchesSub = doc.subCategory?.toLowerCase().includes(q) || false;
        const matchesDate = doc.date.toLowerCase().includes(q);
        return matchesTitle || matchesCat || matchesSub || matchesDate;
      }
      return true;
    });
  }, [documents.items, selectedCategory, search]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/90 to-[#102444]/80" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
              DOCUMENTS
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {documents.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base max-w-2xl">
              {documents.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pr-4 pl-11 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-2xs focus:border-[#0B1E36] focus:outline-hidden"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {documents.categories.map((cat: { id: string; name: string; color?: string }) => {
                const isSelected = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1E36] text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {cat.color && !isSelected && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                    )}
                    {categoryIcons[cat.name] && isSelected && categoryIcons[cat.name]}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Results Counter */}
            <div className="pt-2 text-xs text-slate-400 font-medium">
              {filteredDocs.length} {filteredDocs.length === 1 ? "document" : "documents"} found
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOCUMENT ITEMS LIST */}
      <section className="pt-2 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-3">
            {filteredDocs.map((doc) => {
              const docColor = getDocColor(doc);
              const btnClass = getDocBtnColor(doc);

              return (
                <div
                  key={doc.id}
                  className="group flex flex-col justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs transition hover:border-slate-300 hover:shadow-xs sm:flex-row sm:items-center sm:p-5"
                  style={{
                    borderLeftWidth: "5px",
                    borderLeftColor: docColor,
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Circular Icon Badge matching category color */}
                    <div
                      className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-white shadow-2xs"
                      style={{ backgroundColor: docColor }}
                    >
                      <FileText className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 sm:text-base leading-snug">
                        {doc.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                        <span className="font-normal text-slate-500">{doc.category}</span>
                        {doc.subCategory && (
                          <>
                            <span>·</span>
                            <span className="text-slate-500">{doc.subCategory}</span>
                          </>
                        )}
                        <span>·</span>
                        <span>{doc.date}</span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 uppercase ml-1">
                          {doc.lang}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1 sm:pt-0">
                    <a
                      href={`/docs/${doc.id}.pdf`}
                      download
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90 sm:w-auto ${btnClass}`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              );
            })}

            {filteredDocs.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
                <p className="text-sm font-semibold">No documents found matching your search.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All Categories");
                  }}
                  className="mt-3 text-xs font-bold text-[#0B1E36] hover:underline cursor-pointer"
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
