"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ArrowRight,
  Download,
  FileText,
  User,
  Briefcase,
  Building2,
  TrendingUp,
  Scale,
  Calculator,
  Info,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { programsData, getProgramBySlug } from "@/components/data";

export default function ProgramDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = (params?.slug as string) || "economics-finance";
  const initialTab = searchParams.get("tab") || "overview";

  const program = getProgramBySlug(slug);
  const [activeTab, setActiveTab] = useState(initialTab);

  const careerIcons: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="h-4 w-4 text-slate-600" />,
    Landmark: <Building2 className="h-4 w-4 text-slate-600" />,
    TrendingUp: <TrendingUp className="h-4 w-4 text-slate-600" />,
    Scale: <Scale className="h-4 w-4 text-slate-600" />,
    Calculator: <Calculator className="h-4 w-4 text-slate-600" />,
  };

  const defaultLecturers = [
    {
      name: "Prof. Sarah Chen",
      role: "Professor of International Finance",
      bio: "Prof. Sarah Chen is combining economic theory with finance, preparing graduates for careers in banking, finance, and business consulting.",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. David Miller",
      role: "Professor of International Finance",
      bio: "Dr. David Miller is a comprehensive professor of international finance preparing graduates for careers in banking, finance, and business consulting.",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Sarai Dinso",
      role: "Professor of International Finance",
      bio: "Dr. David Miller is conducting economic theory with financial practice, preparing graduates for careers in banking, finance, and best consulting.",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Prof. John Coe",
      role: "Professor of International Finance",
      bio: "Dr. David Miller is a marketing economic economic financial practice, preparing graduates for careers in banking, finance, and best consulting.",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. David Miller",
      role: "Professor of International Finance",
      bio: "Dr. David Miller is a comprehensive professor of international finance graduates for career in finance, banking and business consulting.",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Dara Miller",
      role: "Professor of International Finance",
      bio: "Prof. Sarah Chen is combining economic economic theory with mechanics, preparing graduates for careers in in banking, finance, and business consulting.",
      photo:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const lecturers = program.lecturers || defaultLecturers;

  const defaultStudyStructure = [
    {
      yearNumber: 1,
      yearTitle: "YEAR 1 – FOUNDATIONAL PRINCIPLES",
      semesters: [
        {
          number: 1,
          title: "Semester 1 • Winter",
          courses: [
            "Introduction to Economics",
            "Mathematics I",
            "Informatics in Economics",
            "Business Communication",
            "Foreign Language II",
          ],
        },
        {
          number: 2,
          title: "Semester 2 • Winter",
          courses: [
            "Microeconomics",
            "Mathematics II",
            "Business Law",
            "Fundamentals of Accounting",
            "Foreign Language II",
          ],
        },
      ],
    },
    {
      yearNumber: 2,
      yearTitle: "YEAR 2 – CORE DISCIPLINE",
      semesters: [
        {
          number: 3,
          title: "Semester 3 • Winter",
          courses: [
            "Macroeconomics",
            "Statistics",
            "Financial Accounting",
            "Business Finance",
            "Marketing",
          ],
        },
        {
          number: 4,
          title: "Semester 4 • Summer",
          courses: [
            "Corporate Finance",
            "Banking and Banking Operations",
            "Tax Law and Fiscal System",
            "Management",
            "Research Methodology",
          ],
        },
      ],
    },
    {
      yearNumber: 3,
      yearTitle: "YEAR 3 – ADVANCED SPECIALIZATION",
      semesters: [
        {
          number: 5,
          title: "Semester 5 • Winter",
          courses: [
            "Financial Analysis",
            "International Finance",
            "Investment and Portfolio Management",
            "Audit Fundamentals",
          ],
        },
        {
          number: 6,
          title: "Semester 6 • Summer",
          courses: [
            "Bachelor Thesis",
            "Professional Practice",
            "Elective II",
            "Elective III",
          ],
        },
      ],
    },
  ];

  const studyStructure = program.studyStructure || defaultStudyStructure;

  const defaultDocuments = [
    {
      id: "book-of-subjects",
      title: "Book of Subjects",
      subtitle: `${program.title} — ${program.level}`,
      fileUrl: "/docs/book-of-subjects.pdf",
    },
    {
      id: "study-subjects",
      title: "Study Subjects by Semesters and Training Courses",
      subtitle: `${program.title} — ${program.level}`,
      fileUrl: "/docs/study-subjects.pdf",
    },
    {
      id: "tutors-book",
      title: "Tutor's Book",
      subtitle: `${program.title} — ${program.level}`,
      fileUrl: "/docs/tutors-book.pdf",
    },
  ];

  const documents = program.documents || defaultDocuments;

  const defaultCareers = [
    { title: "Financial Analyst", icon: "Briefcase" },
    { title: "Bank Officer", icon: "Landmark" },
    { title: "Investment Advisor", icon: "TrendingUp" },
    { title: "Business Consultant", icon: "Briefcase" },
    { title: "Tax Advisor", icon: "Scale" },
    { title: "Accountant", icon: "Calculator" },
  ];

  const careerOpportunities =
    program.careerOpportunities || defaultCareers;

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1E36] text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Back to Faculty link */}
            <Link
              href={`/faculties/${program.facultySlug}`}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {program.faculty}
            </Link>

            {/* Study Level Pill */}
            <div className="mt-4">
              <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
                {program.level}
              </span>
            </div>

            {/* Program Title */}
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white">
              {program.title}
            </h1>

            {/* Faculty Name */}
            <p className="mt-1.5 text-xs font-medium text-[#E5A83B]">
              {program.faculty}
            </p>

            {/* Program Subtitle/Description */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-2xl">
              {program.overview}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 rounded-lg bg-[#E5A83B] px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-[#d4992f]"
              >
                Apply Now
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-slate-800"
              >
                Admission Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB NAVIGATION */}
      <section className="sticky top-20 z-20 border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto text-xs font-medium scrollbar-none">
            {[
              { id: "overview", label: "Overview" },
              { id: "study-structure", label: "Study Structure" },
              { id: "documents", label: "Documents" },
              { id: "career-opportunities", label: "Career Opportunities" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? "border-b-2 border-slate-900 font-bold text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TAB CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: Overview & Lecturers */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Program Overview
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {program.overview}
                  </p>
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-900 mb-5">
                    Lecturers
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {lecturers.map((lect, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={lect.photo}
                            alt={lect.name}
                            className="h-11 w-11 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">
                              {lect.name}
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              {lect.role}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
                          {lect.bio}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Program Details Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <div className="bg-[#0B1E36] py-3 text-center text-xs font-bold tracking-wider text-white uppercase">
                    PROGRAM DETAILS
                  </div>
                  <div className="p-4 space-y-3.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Study Level</span>
                      <span className="font-semibold text-slate-900">
                        {program.details?.studyLevel || program.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Duration</span>
                      <span className="font-semibold text-slate-900">
                        {program.details?.duration || program.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">ECTS Credits</span>
                      <span className="font-semibold text-slate-900">
                        {program.details?.ectsCredits || 180}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Language</span>
                      <span className="font-semibold text-slate-900">
                        {program.details?.language || "Serbian"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Mode</span>
                      <span className="font-semibold text-slate-900">
                        {program.details?.mode || "Full-time"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Faculty</span>
                      <span className="font-semibold text-slate-900 text-right">
                        {program.details?.faculty || "Finance, Trade & Accounting"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">Accreditation</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        {program.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Resource Downloads */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
                  <h4 className="text-xs font-bold text-slate-900 mb-3">
                    Quick Resource Downloads
                  </h4>
                  <div className="space-y-2 text-xs">
                    <a
                      href="#schedule"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                    >
                      <FileText className="h-3.5 w-3.5 text-slate-400" />
                      Class schedule (PDF)
                    </a>
                    <a
                      href="#consultation"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                    >
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      Consultation hours (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDY STRUCTURE */}
          {activeTab === "study-structure" && (
            <div className="max-w-4xl space-y-10">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Study Structure
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  3 years • 6 semesters • 180 ECTS total
                </p>
              </div>

              <div className="space-y-10">
                {studyStructure.map((year) => (
                  <div key={year.yearNumber} className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                        {year.yearTitle}
                      </h3>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                        {year.yearNumber}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {year.semesters.map((sem) => (
                        <div
                          key={sem.number}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs"
                        >
                          <div className="bg-[#B87A1E] px-4 py-2.5 text-xs font-bold text-white flex items-center gap-2">
                            <span>⚙️</span>
                            <span>{sem.title}</span>
                          </div>
                          <div className="p-4 space-y-2.5 text-xs text-slate-700">
                            {sem.courses.map((course, cIdx) => (
                              <div
                                key={cIdx}
                                className="flex items-center justify-between py-1 border-b border-slate-50 last:border-none"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="text-slate-400">📄</span>
                                  <span>{course}</span>
                                </span>
                                {course.includes("Informatics") && (
                                  <Info className="h-3.5 w-3.5 text-slate-400" />
                                )}
                              </div>
                            ))}

                            <div className="pt-2 text-right">
                              <a
                                href="#syllabus"
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-blue-600"
                              >
                                📄 Full Syllabus (PDF)
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === "documents" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Program Documents
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  The following documents are legally required to be publicly available for every accredited program in Serbia.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#0B1E36]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {doc.title}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          {doc.subtitle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={doc.fileUrl}
                      download
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0B1E36] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#152B4D] whitespace-nowrap"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>

              {/* Note banner */}
              <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-900">
                <span className="font-semibold">Note:</span> Documents are managed by the faculty administration and updated annually. For the latest version, contact the student service office.
              </div>
            </div>
          )}

          {/* TAB 4: CAREER OPPORTUNITIES */}
          {activeTab === "career-opportunities" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Career Opportunities
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Graduates of this program work across a range of roles in Serbia, the region, and internationally.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                {careerOpportunities.map((career, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600">
                      {careerIcons[career.icon] || (
                        <Briefcase className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-900">
                      {career.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Graduate Employment Rate Banner */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
                <div className="text-4xl font-black text-[#EAB308]">
                  {program.employmentRate?.percentage || "97%"}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {program.employmentRate?.label || "Graduate Employment Rate"}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {program.employmentRate?.description ||
                      "of Alfa BK graduates find employment within 12 months of graduation"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
