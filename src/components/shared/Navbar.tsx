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
    { label: "University Library", href: "/library" },
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


  return (
    <header className="sticky top-0 z-50 w-full bg-[#113565] shadow-md border-b border-white/10">
      {/* Full-width Main Navigation Bar */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center group focus:outline-none shrink-0 py-1">
            <img
              src="/University-logo.png"
              alt="Alfa BK University"
              className="h-12 md:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links (Consistent across all desktop sizes from lg and up) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
            {/* University Dropdown */}
            <div className="relative group">
              <Link
                href="/university/about"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-white ${
                  pathname.startsWith("/university")
                    ? "text-white bg-white/15"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>University</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-300 group-hover:text-white" />
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
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-white ${
                  pathname.startsWith("/faculties") || pathname.startsWith("/professors")
                    ? "text-white bg-white/15"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>Faculties</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-300 group-hover:text-white" />
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
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors group-hover:text-white ${
                  pathname === "/programs"
                    ? "text-white bg-white/15"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-300 group-hover:text-white" />
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
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Admissions
            </Link>

            {/* Students */}
            <Link
              href="/students"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/students"
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Students
            </Link>

            {/* Research */}
            <Link
              href="/university/international-cooperation"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname.includes("research") || pathname.includes("cooperation")
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Research
            </Link>

            {/* Career & Industry */}
            <Link
              href="/career-industry"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/career-industry"
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Career & Industry
            </Link>

            {/* News & Events */}
            <Link
              href="/news-events"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/news-events" || pathname === "/events"
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              News & Events
            </Link>

            {/* E-Learning */}
            <Link
              href="/e-learning"
              className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors ${
                pathname === "/e-learning"
                  ? "text-white bg-white/15"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              E-Learning
            </Link>
          </nav>

          {/* Right Action: Language + Login + Apply Button */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-slate-200 rounded-lg hover:bg-white/10 transition"
              title="Serbian / English"
            >
              <span className="text-base leading-none">🇷🇸</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
            </button>

            {/* Login Link */}
            <Link
              href="/login"
              className="px-3.5 py-2 text-xs font-semibold text-white hover:text-amber-300 border border-white/20 hover:bg-white/10 rounded-lg transition"
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
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#113565] px-4 pt-4 pb-8 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* University Accordion */}
          <div>
            <button
              onClick={() => setMobileUniversityOpen(!mobileUniversityOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white"
            >
              <span>University</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-300 transition-transform ${
                  mobileUniversityOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileUniversityOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-white/20 ml-2">
                {universityLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-200 hover:text-white py-1"
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
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white"
            >
              <span>Faculties</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-300 transition-transform ${
                  mobileFacultiesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileFacultiesOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-white/20 ml-2">
                {facultyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-200 hover:text-white py-1"
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
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white"
            >
              <span>Programs</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-300 transition-transform ${
                  mobileProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileProgramsOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-white/20 ml-2">
                {programLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-200 hover:text-white py-1"
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
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            Admissions
          </Link>
          <Link
            href="/students"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            Students
          </Link>
          <Link
            href="/university/international-cooperation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            Research
          </Link>
          <Link
            href="/career-industry"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            Career & Industry
          </Link>
          <Link
            href="/news-events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            News & Events
          </Link>
          <Link
            href="/e-learning"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white hover:text-amber-300"
          >
            E-Learning
          </Link>

          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
