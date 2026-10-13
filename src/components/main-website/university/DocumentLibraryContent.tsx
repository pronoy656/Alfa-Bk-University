"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { PageHero } from "@/components/shared";
import {
  hero,
  categoryKeys,
  categories,
  documents,
  DocumentItem,
} from "@/data/documentLibrary";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Scale,
};

export default function DocumentLibraryContent() {
  const [data, setData] = useState({
    hero,
    categoryKeys,
    categories,
    documents,
  });

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Date - Newest");

  useEffect(() => {
    // Dynamic data binding lifecycle
    setData({
      hero,
      categoryKeys,
      categories,
      documents,
    });
  }, []);

  // Filtered documents
  const filteredDocs = useMemo(() => {
    const query = search.trim().toLowerCase();
    const sorted = [...data.documents];

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
  }, [data.documents, search, selectedCategory, sortBy]);

  // Group by category
  const groupedDocs = useMemo(() => {
    const groups: Record<string, DocumentItem[]> = {};

    data.categoryKeys.forEach((cat) => {
      groups[cat] = [];
    });

    filteredDocs.forEach((doc) => {
      if (!groups[doc.category]) {
        groups[doc.category] = [];
      }
      groups[doc.category].push(doc);
    });

    return groups;
  }, [data.categoryKeys, filteredDocs]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800">
      {/* 1. HERO BANNER */}
      <PageHero
        kicker={data.hero.kicker}
        title={
          <>
            {data.hero.titlePrefix} <br />
            <span className="text-[#D5A754]">{data.hero.titleHighlight}</span>
          </>
        }
        description={data.hero.description}
        bgImage={data.hero.bgImage}
        stats={data.hero.stats}
      />

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
              className="w-full sm:w-auto bg-[#113565] hover:bg-[#0c274d] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xs transition cursor-pointer"
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
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                selectedCategory === "All Categories"
                  ? "bg-[#113565] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>

            {data.categoryKeys.map((catKey) => {
              const cfg = data.categories[catKey];
              if (!cfg) return null;
              const isSelected = selectedCategory === catKey;

              return (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setSelectedCategory(catKey)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
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
          {data.categoryKeys.map((catKey) => {
            const docs = groupedDocs[catKey] || [];
            if (docs.length === 0) return null;

            const cfg = data.categories[catKey];
            if (!cfg) return null;

            const Icon = iconMap[cfg.icon] || FileText;

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
                  {docs.map((item) => (
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
