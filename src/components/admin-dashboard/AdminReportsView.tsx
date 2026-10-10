"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  FileSpreadsheet,
  Building2,
  GraduationCap,
  Bell,
  ShieldCheck,
  CheckCircle2,
  X,
  Upload,
  Save,
  Sliders,
  Check,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { DashboardModal, DashboardButton } from "@/components/dashboard/shared";

export default function AdminReportsView() {
  const [activeModal, setActiveModal] = useState<
    "university" | "grading" | "notifications" | "access" | null
  >(null);

  const [notification, setNotification] = useState<string | null>(null);

  // Animation trigger on component mount
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const [hoveredGpaIndex, setHoveredGpaIndex] = useState<number | null>(null);
  const [hoveredTermIndex, setHoveredTermIndex] = useState<number | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // State for University Settings
  const [uniInfo, setUniInfo] = useState({
    name: "Alfa BK University",
    code: "ABK-UNIV",
    website: "https://alfa.edu.rs",
    email: "info@alfa.edu.rs",
    phone: "+381 11 324 0000",
    address: "Palmoticeva 30, Belgrade, Serbia",
  });

  // State for Grading Settings
  const [minPassingGpa, setMinPassingGpa] = useState("2.00");
  const [maxSemesterCredits, setMaxSemesterCredits] = useState("21");

  // State for Notification Policies
  const [policies, setPolicies] = useState({
    lowAttendance: true,
    examPublished: true,
    gradeDeadlines: true,
    systemAnnouncements: true,
    emailChannel: true,
    smsChannel: false,
  });

  // State for User Access
  const [roles, setRoles] = useState([
    { role: "Super Admin", users: 3, manageCurriculum: true, approveGrades: true, editUsers: true, systemLogs: true },
    { role: "Registrar Officer", users: 8, manageCurriculum: true, approveGrades: true, editUsers: false, systemLogs: true },
    { role: "Department Head", users: 12, manageCurriculum: true, approveGrades: false, editUsers: false, systemLogs: false },
    { role: "Faculty Member", users: 145, manageCurriculum: false, approveGrades: false, editUsers: false, systemLogs: false },
    { role: "Academic Operator", users: 14, manageCurriculum: false, approveGrades: false, editUsers: false, systemLogs: false },
  ]);

  const handleExport = (type: "PDF" | "Excel") => {
    showNotification(`Generating ${type} report for Q3-2026 Academic Workspace...`);
    setTimeout(() => {
      showNotification(`${type} report downloaded successfully.`);
    }, 1500);
  };

  // GPA Distribution Data for animated histogram
  const gpaData = [
    { range: "< 2.5", label: "< 2.5", height: 22, students: "85 Students", pct: "6.8%" },
    { range: "2.5 - 2.9", label: "2.8", height: 42, students: "190 Students", pct: "15.2%" },
    { range: "3.0 - 3.2", label: "3.0", height: 78, students: "360 Students", pct: "28.9%" },
    { range: "3.25 - 3.4", label: "3.24", height: 98, students: "420 Students", pct: "33.7%", isPeak: true },
    { range: "3.5 - 3.7", label: "3.6", height: 65, students: "290 Students", pct: "23.3%" },
    { range: "3.8 - 4.0", label: "4.0", height: 34, students: "145 Students", pct: "11.6%" },
  ];

  // Historical Enrollment Data for area graph nodes
  const enrollmentPoints = [
    { term: "Fall '24", count: "980", change: "Base", cx: 18, cy: 62 },
    { term: "Spring '25", count: "1,040", change: "+6.1%", cx: 88, cy: 51 },
    { term: "Summer '25", count: "1,110", change: "+6.7%", cx: 158, cy: 39 },
    { term: "Fall '25", count: "1,190", change: "+7.2%", cx: 228, cy: 25 },
    { term: "Active", count: "1,245", change: "+12.0%", cx: 298, cy: 14, isCurrent: true },
  ];

  const activePoint =
    hoveredTermIndex !== null
      ? enrollmentPoints[hoveredTermIndex]
      : enrollmentPoints[enrollmentPoints.length - 1];

  return (
    <div className="space-y-6">
      {/* Global Embedded Styles for Micro-Animations */}
      <style>{`
        @keyframes shimmerGlow {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(300%) skewX(-20deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes radarPing {
          0% { r: 4px; opacity: 0.9; }
          100% { r: 12px; opacity: 0; }
        }
      `}</style>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 bg-[#0B1E36] text-white px-5 py-3 rounded-xl shadow-xl border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-[#0B1E36] tracking-tight">
            Reports &amp; Analytics Workspace
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Platform operational metrics, system usage patterns, and grading curves
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => handleExport("PDF")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            Export PDF
          </button>
          <button
            type="button"
            onClick={() => handleExport("Excel")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Row 1: 3 KPI Metric Cards with Rich Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: TOTAL ENROLLMENTS - SLEEK GLASS/AREA GRAPH */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_16px_rgba(11,30,54,0.05)] hover:shadow-[0_8px_24px_rgba(11,30,54,0.08)] hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          {/* Subtle decorative background ambient glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  TOTAL ENROLLMENTS
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full shadow-2xs transition-all duration-200">
                <TrendingUp className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                <span>
                  {hoveredTermIndex !== null
                    ? `${activePoint.term}: ${activePoint.change}`
                    : "↑ 12% vs last term"}
                </span>
              </span>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[30px] font-extrabold text-[#0B1E36] tracking-tight transition-all duration-150">
                  {activePoint.count}
                </span>
                <span className="text-xs font-semibold text-slate-500">Students</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                {hoveredTermIndex !== null ? (
                  <span className="text-emerald-600 font-bold bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-100 animate-in fade-in duration-150">
                    {activePoint.term}
                  </span>
                ) : (
                  "Record High"
                )}
              </span>
            </div>
          </div>

          {/* Animated Area Graph */}
          <div className="mt-4 pt-1 relative">
            <div className="relative h-24 w-full">
              <svg
                viewBox="0 0 316 88"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Premium Emerald to Dark Navy Gradient Area */}
                  <linearGradient id="enrollmentAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.36" />
                    <stop offset="45%" stopColor="#059669" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Gradient Stroke */}
                  <linearGradient id="enrollmentLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>

                  {/* Glow Filter */}
                  <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10B981" floodOpacity="0.45" />
                  </filter>
                </defs>

                {/* Subtle horizontal grid lines */}
                <line x1="10" y1="22" x2="306" y2="22" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="10" y1="48" x2="306" y2="48" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="10" y1="78" x2="306" y2="78" stroke="#E2E8F0" strokeWidth="1" />

                {/* Area under curve with smooth reveal */}
                <path
                  d="M 18,78 L 18,62 C 48,60 62,53 88,51 C 114,49 132,41 158,39 C 184,37 202,27 228,25 C 254,23 274,15 298,14 L 298,78 Z"
                  fill="url(#enrollmentAreaGrad)"
                  className="transition-opacity duration-1000 ease-out"
                  style={{ opacity: isAnimated ? 1 : 0 }}
                />

                {/* Ambient glow stroke behind main line */}
                <path
                  d="M 18,62 C 48,60 62,53 88,51 C 114,49 132,41 158,39 C 184,37 202,27 228,25 C 254,23 274,15 298,14"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#emeraldGlow)"
                  opacity={isAnimated ? 0.35 : 0}
                  className="transition-opacity duration-700"
                />

                {/* Curve stroke with stroke-dashoffset draw-in animation */}
                <path
                  d="M 18,62 C 48,60 62,53 88,51 C 114,49 132,41 158,39 C 184,37 202,27 228,25 C 254,23 274,15 298,14"
                  fill="none"
                  stroke="url(#enrollmentLineGrad)"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 380,
                    strokeDashoffset: isAnimated ? 0 : 380,
                    transition: "stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />

                {/* Vertical Cursor Crosshair Line when hovered */}
                {hoveredTermIndex !== null && (
                  <line
                    x1={activePoint.cx}
                    y1="8"
                    x2={activePoint.cx}
                    y2="78"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                    className="animate-in fade-in duration-150"
                  />
                )}

                {/* Interactive Points / Nodes */}
                {enrollmentPoints.map((pt, idx) => {
                  const isHovered = hoveredTermIndex === idx;
                  const isCurrent = pt.isCurrent;

                  return (
                    <g
                      key={idx}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredTermIndex(idx)}
                      onMouseLeave={() => setHoveredTermIndex(null)}
                    >
                      {/* Invisible wider target for effortless hovering */}
                      <circle cx={pt.cx} cy={pt.cy} r="16" fill="transparent" />

                      {/* Pulsing ring for active node when not hovering another node */}
                      {isCurrent && hoveredTermIndex === null && (
                        <>
                          <circle
                            cx={pt.cx}
                            cy={pt.cy}
                            r="11"
                            fill="#10B981"
                            fillOpacity="0.25"
                            className="animate-ping"
                            style={{ transformOrigin: `${pt.cx}px ${pt.cy}px` }}
                          />
                          <circle
                            cx={pt.cx}
                            cy={pt.cy}
                            r="7"
                            fill="#10B981"
                            fillOpacity="0.35"
                          />
                        </>
                      )}

                      {/* Hover Halo Ring */}
                      {isHovered && (
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r="10"
                          fill="#10B981"
                          fillOpacity="0.25"
                          className="animate-pulse"
                        />
                      )}

                      {/* Main Node Point */}
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isHovered ? 5.5 : isCurrent ? 4.5 : 3.5}
                        fill={isHovered || isCurrent ? "#ffffff" : "#D1FAE5"}
                        stroke={isHovered ? "#047857" : isCurrent ? "#10B981" : "#059669"}
                        strokeWidth={isHovered ? 2.5 : 2}
                        className="transition-all duration-200"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Floating Dynamic Tooltip for Hovered Node */}
              {hoveredTermIndex !== null ? (
                <div
                  className="absolute pointer-events-none z-30 transition-all duration-150 ease-out"
                  style={{
                    left: `${(activePoint.cx / 316) * 100}%`,
                    top: `${Math.max(0, (activePoint.cy / 88) * 100 - 40)}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="bg-[#0B1E36]/95 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl shadow-xl border border-slate-700/80 text-[10px] whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-slate-300">{activePoint.term}:</span>
                    <span className="font-bold text-white">{activePoint.count}</span>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/70 px-1 py-0.5 rounded">
                      {activePoint.change}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#0B1E36] rotate-45 mx-auto -mt-1 border-r border-b border-slate-700" />
                </div>
              ) : (
                /* Sleek current term status badge when idle */
                <div
                  className="absolute right-0 top-1 pointer-events-none bg-[#0B1E36]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg shadow-sm text-[10px] font-semibold flex items-center gap-1.5 border border-slate-700/70 transition-all duration-700 ease-out"
                  style={{
                    opacity: isAnimated ? 1 : 0,
                    animation: isAnimated ? "floatBadge 3.2s ease-in-out infinite" : "none",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">Active:</span>
                  <span className="text-emerald-400 font-bold">1,245 Students</span>
                </div>
              )}
            </div>

            {/* Interactive Timeline Benchmarks */}
            <div className="flex items-center justify-between text-[10px] mt-2 pt-2 border-t border-slate-100">
              {enrollmentPoints.map((pt, idx) => {
                const isSelected =
                  hoveredTermIndex === idx ||
                  (hoveredTermIndex === null && pt.isCurrent);

                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setHoveredTermIndex(idx)}
                    onMouseLeave={() => setHoveredTermIndex(null)}
                    onClick={() =>
                      setHoveredTermIndex(hoveredTermIndex === idx ? null : idx)
                    }
                    className={`px-1.5 py-1 rounded-md transition-all duration-150 flex flex-col items-center gap-0.5 cursor-pointer ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-800 font-bold shadow-2xs border border-emerald-200/60"
                        : "text-slate-400 hover:text-slate-700 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span>{pt.term}</span>
                    <span
                      className={`w-1 h-1 rounded-full transition-all ${
                        pt.isCurrent
                          ? "bg-emerald-500 ring-2 ring-emerald-200"
                          : isSelected
                          ? "bg-emerald-400"
                          : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 2: GPA DISTRIBUTION - ANIMATED BAR HISTOGRAM */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                GPA DISTRIBUTION
              </span>
              <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full transition-transform group-hover:scale-105">
                Bell Curve
              </span>
            </div>
            <div className="text-2xl sm:text-[28px] font-bold text-[#0B1E36] tracking-tight">
              3.24 Avg. GPA
            </div>
          </div>

          {/* Animated Bar Chart Illustration */}
          <div className="mt-4 pt-2">
            <div className="relative h-20 w-full flex items-end justify-center gap-2 sm:gap-2.5 px-3 border-b border-slate-100 pb-1">
              {/* Subtle background horizontal guidelines */}
              <div className="absolute inset-x-0 top-3 border-b border-dashed border-slate-100 pointer-events-none" />
              <div className="absolute inset-x-0 top-10 border-b border-dashed border-slate-100 pointer-events-none" />

              {/* Render Animated Bars with Staggered Height Growth */}
              {gpaData.map((bar, idx) => {
                const isHovered = hoveredGpaIndex === idx;
                const isPeak = bar.isPeak;

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center flex-1 h-full justify-end relative cursor-pointer"
                    onMouseEnter={() => setHoveredGpaIndex(idx)}
                    onMouseLeave={() => setHoveredGpaIndex(null)}
                  >
                    {/* Hover Tooltip Popup */}
                    {isHovered && (
                      <div className="absolute -top-7 z-20 whitespace-nowrap bg-[#0B1E36] text-white text-[9px] font-semibold px-2 py-0.5 rounded shadow-md pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                        {bar.students} ({bar.pct})
                      </div>
                    )}

                    {/* Peak Marker Dot */}
                    {isPeak && !isHovered && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-1 animate-pulse" />
                    )}

                    {/* The Animated Bar */}
                    <div
                      className={`w-full max-w-[20px] rounded-t-[3px] transition-all ${
                        isPeak
                          ? "bg-[#2563EB] shadow-sm"
                          : idx < 2
                          ? "bg-sky-400 hover:bg-blue-500"
                          : "bg-blue-500 hover:bg-blue-600"
                      } ${isHovered ? "brightness-110 -translate-y-1 scale-x-105" : ""}`}
                      style={{
                        height: isAnimated ? `${bar.height}%` : "0%",
                        transition: `height 0.85s cubic-bezier(0.34, 1.3, 0.64, 1) ${
                          idx * 85
                        }ms, transform 0.2s ease, background-color 0.2s ease`,
                      }}
                      title={`${bar.range}: ${bar.students}`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 px-2">
              {gpaData.map((bar, idx) => (
                <span
                  key={idx}
                  className={`transition-colors cursor-pointer ${
                    bar.isPeak
                      ? "font-semibold text-blue-600"
                      : hoveredGpaIndex === idx
                      ? "text-[#0B1E36] font-bold"
                      : "hover:text-slate-600"
                  }`}
                  onMouseEnter={() => setHoveredGpaIndex(idx)}
                  onMouseLeave={() => setHoveredGpaIndex(null)}
                >
                  {bar.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: ATTENDANCE OVERVIEW - ANIMATED PROGRESS & SHIMMER */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                ATTENDANCE OVERVIEW
              </span>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full transition-transform group-hover:scale-105">
                Optimal
              </span>
            </div>
            <div className="text-2xl sm:text-[28px] font-bold text-[#0B1E36] tracking-tight">
              94.8% Active
            </div>
          </div>

          {/* Animated Progress Bar & Shimmer Sheen */}
          <div className="mt-4 pt-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span className="font-medium text-slate-500">Track &amp; Benchmarks</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                +9.8% above target
              </span>
            </div>

            {/* Main horizontal rounded progress track */}
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 relative">
              {/* Target Marker Tick at 85% */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-slate-300 z-10"
                style={{ left: "85%" }}
                title="Target: 85%"
              />

              {/* Animated Progress Bar with Emerald Gradient and Shimmer Overlay */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm relative overflow-hidden"
                style={{
                  width: isAnimated ? "94.8%" : "0%",
                  transition: "width 1.25s cubic-bezier(0.25, 1, 0.5, 1) 150ms",
                }}
              >
                {/* Moving light shimmer effect traveling across the progress bar */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "shimmerGlow 2.4s infinite cubic-bezier(0.4, 0, 0.6, 1)",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
              <span>Min Required (75%)</span>
              <span className="text-slate-500 font-medium">Univ Target (85%)</span>
              <span className="font-bold text-[#0B1E36]">94.8%</span>
            </div>
          </div>
        </div>
      </div>


      {/* Row 2: Platform Configurations & Quick Settings */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <h2 className="text-base sm:text-lg font-bold text-[#0B1E36] mb-5 tracking-tight">
          Platform Configurations &amp; Quick Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: University Information */}
          <div
            onClick={() => setActiveModal("university")}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-slate-50/80 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
          >
            <h3 className="font-semibold text-sm text-[#0B1E36] mb-1.5 group-hover:text-[#C69234] transition-colors">
              University Information
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Update institution logo, contact parameters, and addresses.
            </p>
          </div>

          {/* Card 2: Grading System Scheme */}
          <div
            onClick={() => setActiveModal("grading")}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-slate-50/80 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
          >
            <h3 className="font-semibold text-sm text-[#0B1E36] mb-1.5 group-hover:text-[#C69234] transition-colors">
              Grading System Scheme
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Configure grade thresholds (A+, A, B) and credit scale variables.
            </p>
          </div>

          {/* Card 3: Notification Policies */}
          <div
            onClick={() => setActiveModal("notifications")}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-slate-50/80 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
          >
            <h3 className="font-semibold text-sm text-[#0B1E36] mb-1.5 group-hover:text-[#C69234] transition-colors">
              Notification Policies
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Broadcast settings, automated alerts for attendance boundaries.
            </p>
          </div>

          {/* Card 4: User Access Controls (Sits on row 2, col 1 matching screenshot) */}
          <div
            onClick={() => setActiveModal("access")}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-slate-50/80 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
          >
            <h3 className="font-semibold text-sm text-[#0B1E36] mb-1.5 group-hover:text-[#C69234] transition-colors">
              User Access Controls
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Set access privileges for registrars, faculty and operators.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: University Information */}
      {/* ======================================================== */}
      <DashboardModal
        isOpen={activeModal === "university"}
        onClose={() => setActiveModal(null)}
        title="University Information & Branding"
        subtitle="Configure institution credentials, public identity, and contact endpoints"
        maxWidth="xl"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setActiveModal(null);
            showNotification("University information updated successfully!");
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Institution Name
              </label>
              <input
                type="text"
                value={uniInfo.name}
                onChange={(e) => setUniInfo({ ...uniInfo, name: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Institution Code
              </label>
              <input
                type="text"
                value={uniInfo.code}
                onChange={(e) => setUniInfo({ ...uniInfo, code: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={uniInfo.email}
                onChange={(e) => setUniInfo({ ...uniInfo, email: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={uniInfo.phone}
                onChange={(e) => setUniInfo({ ...uniInfo, phone: e.target.value })}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Website URL
            </label>
            <input
              type="url"
              value={uniInfo.website}
              onChange={(e) => setUniInfo({ ...uniInfo, website: e.target.value })}
              className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Campus Address
            </label>
            <textarea
              rows={2}
              value={uniInfo.address}
              onChange={(e) => setUniInfo({ ...uniInfo, address: e.target.value })}
              className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
              required
            />
          </div>

          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <DashboardButton variant="gold" size="sm" type="submit">
              Save Changes
            </DashboardButton>
          </div>
        </form>
      </DashboardModal>

      {/* ======================================================== */}
      {/* MODAL 2: Grading System Scheme */}
      {/* ======================================================== */}
      <DashboardModal
        isOpen={activeModal === "grading"}
        onClose={() => setActiveModal(null)}
        title="Grading System Scheme"
        subtitle="Manage grade thresholds, GPA points, and credit boundaries"
        maxWidth="2xl"
      >
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1E36] text-white font-semibold">
                <tr>
                  <th className="py-2.5 px-4">Letter Grade</th>
                  <th className="py-2.5 px-4">Marks Range</th>
                  <th className="py-2.5 px-4">Grade Point</th>
                  <th className="py-2.5 px-4">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-emerald-600">A+</td>
                  <td className="py-2 px-4">80% – 100%</td>
                  <td className="py-2 px-4 font-semibold">4.00</td>
                  <td className="py-2 px-4 text-slate-500">Outstanding</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-emerald-600">A</td>
                  <td className="py-2 px-4">75% – 79%</td>
                  <td className="py-2 px-4 font-semibold">3.75</td>
                  <td className="py-2 px-4 text-slate-500">Excellent</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-blue-600">A-</td>
                  <td className="py-2 px-4">70% – 74%</td>
                  <td className="py-2 px-4 font-semibold">3.50</td>
                  <td className="py-2 px-4 text-slate-500">Very Good</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-blue-600">B+</td>
                  <td className="py-2 px-4">65% – 69%</td>
                  <td className="py-2 px-4 font-semibold">3.25</td>
                  <td className="py-2 px-4 text-slate-500">Good</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-amber-600">B</td>
                  <td className="py-2 px-4">60% – 64%</td>
                  <td className="py-2 px-4 font-semibold">3.00</td>
                  <td className="py-2 px-4 text-slate-500">Satisfactory</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-2 px-4 font-bold text-amber-600">C</td>
                  <td className="py-2 px-4">50% – 59%</td>
                  <td className="py-2 px-4 font-semibold">2.50</td>
                  <td className="py-2 px-4 text-slate-500">Pass</td>
                </tr>
                <tr className="hover:bg-slate-50/60 bg-rose-50/30">
                  <td className="py-2 px-4 font-bold text-rose-600">F</td>
                  <td className="py-2 px-4">Below 40%</td>
                  <td className="py-2 px-4 font-semibold">0.00</td>
                  <td className="py-2 px-4 text-rose-500">Fail</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Minimum Passing CGPA Threshold
              </label>
              <input
                type="text"
                value={minPassingGpa}
                onChange={(e) => setMinPassingGpa(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Max Semester Credit Load
              </label>
              <input
                type="text"
                value={maxSemesterCredits}
                onChange={(e) => setMaxSemesterCredits(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C69234]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <DashboardButton
              variant="gold"
              size="sm"
              onClick={() => {
                setActiveModal(null);
                showNotification("Grading scheme updated successfully!");
              }}
            >
              Save Grading Rules
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>

      {/* ======================================================== */}
      {/* MODAL 3: Notification Policies */}
      {/* ======================================================== */}
      <DashboardModal
        isOpen={activeModal === "notifications"}
        onClose={() => setActiveModal(null)}
        title="Notification Policies & Alerts"
        subtitle="Broadcast triggers, automated thresholds, and communication channels"
        maxWidth="lg"
      >
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-xs font-semibold text-[#0B1E36]">
                  Automated Attendance Warning
                </div>
                <div className="text-[11px] text-slate-500">
                  Trigger alert when student attendance drops below 75%
                </div>
              </div>
              <input
                type="checkbox"
                checked={policies.lowAttendance}
                onChange={(e) => setPolicies({ ...policies, lowAttendance: e.target.checked })}
                className="w-4 h-4 accent-[#0B1E36] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-xs font-semibold text-[#0B1E36]">
                  Exam Routine Broadcasts
                </div>
                <div className="text-[11px] text-slate-500">
                  Instant push notification when semester schedule is finalized
                </div>
              </div>
              <input
                type="checkbox"
                checked={policies.examPublished}
                onChange={(e) => setPolicies({ ...policies, examPublished: e.target.checked })}
                className="w-4 h-4 accent-[#0B1E36] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-xs font-semibold text-[#0B1E36]">
                  Grade Submission Deadline Alerts
                </div>
                <div className="text-[11px] text-slate-500">
                  Send reminder to instructors 48h before portal lock
                </div>
              </div>
              <input
                type="checkbox"
                checked={policies.gradeDeadlines}
                onChange={(e) => setPolicies({ ...policies, gradeDeadlines: e.target.checked })}
                className="w-4 h-4 accent-[#0B1E36] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-xs font-semibold text-[#0B1E36]">
                  Campus-Wide Broadcast Notices
                </div>
                <div className="text-[11px] text-slate-500">
                  Pin administrative circulars directly to student dashboards
                </div>
              </div>
              <input
                type="checkbox"
                checked={policies.systemAnnouncements}
                onChange={(e) => setPolicies({ ...policies, systemAnnouncements: e.target.checked })}
                className="w-4 h-4 accent-[#0B1E36] cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-700 block mb-2">Delivery Gateways</span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={policies.emailChannel}
                  onChange={(e) => setPolicies({ ...policies, emailChannel: e.target.checked })}
                  className="w-3.5 h-3.5 accent-[#0B1E36]"
                />
                Email Notifications (SMTP)
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={policies.smsChannel}
                  onChange={(e) => setPolicies({ ...policies, smsChannel: e.target.checked })}
                  className="w-3.5 h-3.5 accent-[#0B1E36]"
                />
                SMS Gateway (Twilio / Bulk SMS)
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <DashboardButton
              variant="gold"
              size="sm"
              onClick={() => {
                setActiveModal(null);
                showNotification("Notification policies updated successfully!");
              }}
            >
              Save Policies
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>

      {/* ======================================================== */}
      {/* MODAL 4: User Access Controls */}
      {/* ======================================================== */}
      <DashboardModal
        isOpen={activeModal === "access"}
        onClose={() => setActiveModal(null)}
        title="User Access Controls"
        subtitle="Manage administrative privilege scopes and departmental authorities"
        maxWidth="2xl"
      >
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1E36] text-white font-semibold">
                <tr>
                  <th className="py-2.5 px-4">Role Title</th>
                  <th className="py-2.5 px-3 text-center">Users</th>
                  <th className="py-2.5 px-3 text-center">Curriculum</th>
                  <th className="py-2.5 px-3 text-center">Grade Approval</th>
                  <th className="py-2.5 px-3 text-center">User Management</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roles.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="py-2.5 px-4 font-semibold text-[#0B1E36]">
                      {r.role}
                    </td>
                    <td className="py-2.5 px-3 text-center font-medium text-slate-500">
                      {r.users}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <input
                        type="checkbox"
                        checked={r.manageCurriculum}
                        disabled={r.role === "Super Admin"}
                        onChange={(e) => {
                          const updated = [...roles];
                          updated[idx].manageCurriculum = e.target.checked;
                          setRoles(updated);
                        }}
                        className="w-3.5 h-3.5 accent-[#0B1E36]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <input
                        type="checkbox"
                        checked={r.approveGrades}
                        disabled={r.role === "Super Admin"}
                        onChange={(e) => {
                          const updated = [...roles];
                          updated[idx].approveGrades = e.target.checked;
                          setRoles(updated);
                        }}
                        className="w-3.5 h-3.5 accent-[#0B1E36]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <input
                        type="checkbox"
                        checked={r.editUsers}
                        disabled={r.role === "Super Admin"}
                        onChange={(e) => {
                          const updated = [...roles];
                          updated[idx].editUsers = e.target.checked;
                          setRoles(updated);
                        }}
                        className="w-3.5 h-3.5 accent-[#0B1E36]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <DashboardButton
              variant="gold"
              size="sm"
              onClick={() => {
                setActiveModal(null);
                showNotification("User access privileges saved successfully!");
              }}
            >
              Save Privileges
            </DashboardButton>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
}
