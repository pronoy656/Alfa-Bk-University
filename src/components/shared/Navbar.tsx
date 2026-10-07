"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUniversityOpen, setMobileUniversityOpen] = useState(false);
  const [mobileFacultiesOpen, setMobileFacultiesOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const pathname = usePathname();

  const universityLinks = [
    { label: "About University", href: "/university/about" },
    { label: "Our History", href: "/university/history" },
    { label: "Rector & Leadership", href: "/university/rector-leadership" },
    { label: "International Cooperation", href: "/university/international-cooperation" },
    { label: "Alumni Association", href: "/university/alumni" },
    { label: "Institute Petar Karić", href: "/university/institute-karic" },
    { label: "Document Library", href: "/university/documents" },
    { label: "Contact Us", href: "/university/contact" },
  ];

  const facultyLinks = [
    {
      label: "Faculty of Finance, Trade and Accounting",
      href: "/faculties/finance-trade-accounting",
    },
    {
      label: "Faculty of Foreign Languages",
      href: "/faculties/foreign-languages",
    },
    {
      label: "Faculty of Management in Sports",
      href: "/faculties/management-sports",
    },
    {
      label: "Faculty of Information Technologies",
      href: "/faculties/information-technologies",
    },
    {
      label: "Faculty of Mathematics and Computer Science",
      href: "/faculties/mathematics-computer-science",
    },
    {
      label: "Faculty of Psychology",
      href: "/faculties/psychology",
    },
    {
      label: "Professors & Teaching Assistants",
      href: "/professors",
    },
  ];

  const programLinks = [
    { label: "All Study Programs", href: "/programs" },
    { label: "Basic Higher Education (Bachelor)", href: "/programs?level=undergraduate" },
    { label: "Master Academic Studies", href: "/programs?level=master" },
    { label: "Doctoral Studies (PhD)", href: "/programs?level=doctoral" },
    { label: "Distance Learning (Online)", href: "/e-learning" },
  ];

  const portalLinks = [
    { label: "e-employee", href: "/e-employee" },
    { label: "e-student", href: "/e-student" },
    { label: "e-learning (Moodle)", href: "/e-learning" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-slate-100">
      {/* Full-width Main Navigation Bar */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0B1E36] text-[#D5A754] flex items-center justify-center font-black text-sm shadow-md group-hover:scale-105 transition-transform duration-200">
              ABK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#0B1E36] leading-none">
                Alfa BK University
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
                Belgrade
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Consistent across all desktop sizes from lg and up) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
            {/* University Dropdown */}
            <div className="relative group">
              <Link
                href="/university/about"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-blue-700 ${
                  pathname.startsWith("/university")
                    ? "text-blue-700 bg-blue-50/60"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>University</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-blue-700" />
              </Link>

              {/* Hover Dropdown Menu */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 absolute left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                <div className="space-y-0.5">
                  {universityLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Faculties Dropdown */}
            <div className="relative group">
              <Link
                href="/faculties/finance-trade-accounting"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-blue-700 ${
                  pathname.startsWith("/faculties") || pathname.startsWith("/professors")
                    ? "text-blue-700 bg-blue-50/60"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>Faculties</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-blue-700" />
              </Link>

              {/* Hover Dropdown Menu */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 absolute left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                <div className="space-y-0.5">
                  {facultyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative group">
              <Link
                href="/programs"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-blue-700 ${
                  pathname === "/programs"
                    ? "text-blue-700 bg-blue-50/60"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-blue-700" />
              </Link>

              {/* Hover Dropdown Menu */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 absolute left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                <div className="space-y-0.5">
                  {programLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Admissions */}
            <Link
              href="/admissions"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/admissions"
                  ? "text-blue-700 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Admissions
            </Link>

            {/* Students */}
            <Link
              href="/students"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/students"
                  ? "text-blue-700 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Students
            </Link>

            {/* Research */}
            <Link
              href="/university/international-cooperation"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname.includes("research") || pathname.includes("cooperation")
                  ? "text-blue-700 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Research
            </Link>

            {/* News & Events */}
            <Link
              href="/news-events"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/news-events"
                  ? "text-blue-700 bg-blue-50/60"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              News & Events
            </Link>

            {/* Portals Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors group-hover:text-blue-700"
              >
                <span>Portals</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-blue-700" />
              </button>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 absolute left-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                <div className="space-y-0.5">
                  {portalLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Action: Language + Login + Apply Button (Matches Figma) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-100 transition"
              title="Serbian / English"
            >
              <span className="text-base leading-none">🇷🇸</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Login Link */}
            <Link
              href="/e-student"
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg transition"
            >
              Login
            </Link>

            {/* Apply Now Button */}
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-xs px-4 py-2 rounded-lg shadow-xs transition"
            >
              <span>Apply Now</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger (< lg screens) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/apply-now"
              className="bg-[#D5A754] text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
          {/* University Accordion */}
          <div>
            <button
              onClick={() => setMobileUniversityOpen(!mobileUniversityOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
            >
              <span>University</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileUniversityOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileUniversityOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-200 ml-2">
                {universityLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-blue-700 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Faculties Accordion */}
          <div>
            <button
              onClick={() => setMobileFacultiesOpen(!mobileFacultiesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
            >
              <span>Faculties</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileFacultiesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileFacultiesOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-200 ml-2">
                {facultyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-blue-700 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Programs Accordion */}
          <div>
            <button
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
            >
              <span>Programs</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileProgramsOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-200 ml-2">
                {programLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-blue-700 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800"
          >
            Admissions
          </Link>
          <Link
            href="/students"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800"
          >
            Students
          </Link>
          <Link
            href="/university/international-cooperation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800"
          >
            Research
          </Link>
          <Link
            href="/news-events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800"
          >
            News & Events
          </Link>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-500">
            {portalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 bg-slate-100 rounded hover:bg-slate-200 text-slate-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/e-student"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
