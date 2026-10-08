"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  Tag,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { newsEventsData } from "@/components/data";
import { AllEventItem, getBadgeColorClass } from "./types";

interface AllEventsViewProps {
  onOpenArticle?: (event: AllEventItem) => void;
}

export default function AllEventsView({ onOpenArticle }: AllEventsViewProps) {
  const { allEvents } = newsEventsData as { allEvents: AllEventItem[] };

  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [selectedType, setSelectedType] = useState("All Event Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [currentPage, setCurrentPage] = useState(1);

  // Available Filter Options
  const eventTypes = [
    "All Event Types",
    "Achievements",
    "Research",
    "Admissions",
    "Announcements",
    "Career Fair",
    "Events",
    "Sports",
    "Workshops",
  ];

  const locations = [
    "All Locations",
    "Main Campus Auditorium",
    "Innovation Hub",
    "Admissions Office",
    "International Relations Office",
    "Sports & Events Arena",
    "Campus-wide",
    "Business Incubation Center",
  ];

  const dateOptions = [
    "All Dates",
    "This Month",
    "Upcoming (2026)",
    "Summer 2026",
    "Fall 2026",
  ];

  // Filter Logic
  const filteredEvents = useMemo(() => {
    return allEvents.filter((evt) => {
      // Search text
      const matchesSearch =
        search.trim() === "" ||
        evt.title.toLowerCase().includes(search.toLowerCase()) ||
        evt.description.toLowerCase().includes(search.toLowerCase()) ||
        evt.badge.toLowerCase().includes(search.toLowerCase()) ||
        evt.location.toLowerCase().includes(search.toLowerCase());

      // Type filter
      const matchesType =
        selectedType === "All Event Types" ||
        evt.badge.toLowerCase() === selectedType.toLowerCase();

      // Location filter
      const matchesLocation =
        selectedLocation === "All Locations" ||
        evt.location.toLowerCase() === selectedLocation.toLowerCase();

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [allEvents, search, selectedType, selectedLocation]);

  return (
    <div className="bg-[#FAF9F6] pb-24">
      {/* 1. FLOATING SEARCH & FILTER BAR MATCHING FIGMA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-7 sm:-mt-9 z-20 mx-auto max-w-6xl rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search Input Box with Search Button */}
            <div className="relative flex flex-1 items-center">
              <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events, topics, or keywords..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-24 pl-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0B1E36] focus:outline-hidden"
              />
              <button
                type="button"
                className="absolute right-1.5 rounded-lg bg-[#0B1E36] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#152D4D] cursor-pointer"
              >
                Search
              </button>
            </div>

            {/* Filter Dropdowns Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 lg:w-auto">
              {/* All Dates Dropdown */}
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-9 text-xs font-medium text-slate-700 hover:border-slate-300 focus:border-[#0B1E36] focus:outline-hidden cursor-pointer"
                >
                  {dateOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>

              {/* All Event Types Dropdown */}
              <div className="relative">
                <Tag className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-9 text-xs font-medium text-slate-700 hover:border-slate-300 focus:border-[#0B1E36] focus:outline-hidden cursor-pointer"
                >
                  {eventTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>

              {/* All Locations Dropdown */}
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pr-8 pl-9 text-xs font-medium text-slate-700 hover:border-slate-300 focus:border-[#0B1E36] focus:outline-hidden cursor-pointer"
                >
                  {locations.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 9 EVENTS GRID (3x3 matching Figma) */}
      <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {filteredEvents.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-sm font-semibold text-slate-600">
                No events found matching your search or filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedType("All Event Types");
                  setSelectedLocation("All Locations");
                }}
                className="mt-3 text-xs font-bold text-[#0B1E36] hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  onClick={() => onOpenArticle && onOpenArticle(evt)}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition duration-300 hover:border-slate-300 hover:shadow-md cursor-pointer"
                >
                  <div>
                    {/* Event Image Banner with Optional Featured Badge */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {evt.featured && (
                        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-[#D5A754] px-2.5 py-0.5 text-[10px] font-extrabold text-slate-950 shadow-xs">
                          <span>★</span>
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      {/* Badge and Date */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${getBadgeColorClass(
                            evt.badge
                          )}`}
                        >
                          {evt.badge}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-400">
                        <Calendar className="h-3 w-3" />
                        <span>{evt.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 text-sm sm:text-base font-bold leading-snug text-slate-900 group-hover:text-blue-700 transition line-clamp-2">
                        {evt.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                        {evt.description}
                      </p>

                      {/* Location */}
                      <div className="mt-3.5 flex items-center gap-1.5 text-[11px] text-slate-500">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read full story link at bottom */}
                  <div className="p-4 sm:p-5 pt-0">
                    <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition">
                      <span className="inline-flex items-center gap-1">
                        Read full story
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. PAGINATION MATCHING FIGMA */}
          <div className="mt-14 flex items-center justify-center gap-1.5">
            {/* Prev */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page 1 (Active) */}
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 1
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 2
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 3
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              3
            </button>

            {/* Page 4 */}
            <button
              type="button"
              onClick={() => setCurrentPage(4)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 4
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              4
            </button>

            {/* Page 5 */}
            <button
              type="button"
              onClick={() => setCurrentPage(5)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 5
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              5
            </button>

            {/* Ellipsis */}
            <span className="px-1 text-xs text-slate-400">...</span>

            {/* Page 12 */}
            <button
              type="button"
              onClick={() => setCurrentPage(12)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition cursor-pointer ${
                currentPage === 12
                  ? "bg-[#0B1E36] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              12
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
              disabled={currentPage === 12}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
