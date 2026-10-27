"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Award,
  Shield,
  Zap,
  CheckCircle2,
  X,
  Send,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Search,
  Download,
  Tv,
  Cpu,
  Globe2,
  Activity,
  PenTool,
  MessageSquare,
  Sparkles,
  AlertCircle,
  FileText,
  Lightbulb,
} from "lucide-react";

const syncopate = { className: "font-syncopate" };
const montserrat = { className: "font-montserrat" };

export default function StudentParliamentPage() {
  // Modal states
  const [suggestionModalOpen, setSuggestionModalOpen] = useState(false);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  const [clubModalOpen, setClubModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [clubJoined, setClubJoined] = useState(false);

  // Form states for Section 7: Voice Room
  const [voiceCategory, setVoiceCategory] = useState("Send a suggestion");
  const [voiceName, setVoiceName] = useState("");
  const [voiceFaculty, setVoiceFaculty] = useState("");
  const [voiceDetails, setVoiceDetails] = useState("");
  const [voiceAnonymous, setVoiceAnonymous] = useState(false);
  const [voiceSubmitted, setVoiceSubmitted] = useState(false);

  // Filter state for Section 4: Live Announcements
  const [activeAlertFilter, setActiveAlertFilter] = useState("All Alerts");

  // Search state for Section 5: Transparency Archive
  const [searchQuery, setSearchQuery] = useState("");

  const aboutCards = [
    {
      icon: <Users className="w-5 h-5 text-slate-700" />,
      title: "WHAT IS THE PARLIAMENT",
      desc: "The supreme representative organ of students at Alfa BK, comprised of elected representatives across all faculties.",
    },
    {
      icon: <Award className="w-5 h-5 text-slate-700" />,
      title: "ROLES & RESPONSIBILITIES",
      desc: "Protecting student rights, voting on academic senate reforms, and allocating the annual extracurricular clubs budget.",
    },
    {
      icon: <Shield className="w-5 h-5 text-slate-700" />,
      title: "HOW IT REPRESENTS YOU",
      desc: "Through bi-weekly sessions where student feedback is consolidated and directly presented to the rectorate.",
    },
    {
      icon: <Zap className="w-5 h-5 text-slate-700" />,
      title: "GET INVOLVED",
      desc: "Attend open public sessions, apply to join student task forces, or stand as an official candidate in the next elections.",
    },
  ];

  const parliamentLeadership = [
    {
      name: "ANA PETROVIĆ",
      role: "President",
      faculty: "FACULTY OF FINANCE, TRADE & BANKING",
      image: "/d51b39cf482c946028913aa1dcd650b60234b40e.jpg",
    },
    {
      name: "MARKO NIKOLIĆ",
      role: "Vice President",
      faculty: "FACULTY OF INFORMATION TECHNOLOGY",
      image: "/d8cfd35298abf018885901538bce6a11c882ea4e.jpg",
    },
    {
      name: "JOVANA ĐORĐEVIĆ",
      role: "Secretary",
      faculty: "FACULTY OF LAW",
      image: "/8fd272653a20ef37c1e2c830af7a5638e9445685.jpg",
    },
  ];

  const facultyRepresentatives = [
    {
      name: "MILICA JOVANOVIĆ",
      role: "Representative",
      faculty: "FACULTY OF LAW",
      image: "/006cc1cfa442fbac675b6f6549e2b7458668d501.jpg",
    },
    {
      name: "NIKOLA TASIĆ",
      role: "Representative",
      faculty: "FACULTY OF INFORMATION TECHNOLOGY",
      image: "/0c2239dd77e20bfac14116b810004a66b2b082b7.jpg",
    },
    {
      name: "ELENA KOSTIĆ",
      role: "Representative",
      faculty: "FACULTY OF ART & DESIGN",
      image: "/d51b39cf482c946028913aa1dcd650b60234b40e.jpg",
    },
    {
      name: "FILIP VUKOVIĆ",
      role: "Representative",
      faculty: "FACULTY OF FINANCE",
      image: "/d8cfd35298abf018885901538bce6a11c882ea4e.jpg",
    },
    {
      name: "SOFIJA NEDIĆ",
      role: "Representative",
      faculty: "FACULTY OF FOREIGN LANGUAGES",
      image: "/8fd272653a20ef37c1e2c830af7a5638e9445685.jpg",
    },
    {
      name: "LUKA BABIĆ",
      role: "Representative",
      faculty: "FACULTY OF TRADE & BANKING",
      image: "/006cc1cfa442fbac675b6f6549e2b7458668d501.jpg",
    },
  ];

  const announcements = [
    {
      category: "Meetings",
      date: "Oct 10, 2025",
      badge: "MEETING",
      title: "NEXT PARLIAMENT SESSION - OCTOBER 15, 2025",
      desc: "All students are welcome to attend the next open session at 14:00. The key agenda is budget allocation for winter sports tournaments.",
    },
    {
      category: "Initiatives",
      date: "Oct 08, 2025",
      badge: "INITIATIVE",
      title: "STUDENT CLUB APPLICATIONS NOW OPEN",
      desc: "Have a club idea? You can formally apply for official university club status and secure starting equipment funding. Submissions close Nov 15.",
    },
    {
      category: "Elections",
      date: "Oct 05, 2025",
      badge: "ELECTIONS",
      title: "ELECTION RESULTS PUBLISHED",
      desc: "The validated voting logs and final representative selection outcomes for the 2025/2026 Academic Year mandate are now officially online.",
    },
    {
      category: "Initiatives",
      date: "Oct 01, 2025",
      badge: "INITIATIVE",
      title: "NEW INITIATIVE: CAMPUS GREEN WEEK",
      desc: "We are partnering with ecology groups for a week-long recycling and green campus upgrade project. Tree planting happens on Tuesday.",
    },
    {
      category: "Deadlines",
      date: "Sep 28, 2025",
      badge: "DEADLINE",
      title: "IMPORTANT: SCHOLARSHIP DEADLINE APPROACHING",
      desc: "Ensure you verify your semester grades average and submit standard state grant support files before the upcoming official extension closes.",
    },
  ];

  const filteredAnnouncements =
    activeAlertFilter === "All Alerts"
      ? announcements
      : announcements.filter((a) => a.category === activeAlertFilter);

  const meetingRecords = [
    {
      number: "MEETING #12: WINTER BUDGET PLANNING",
      date: "Held on September 15, 2025",
      file: "Minutes & Decisions.pdf",
      agenda:
        "Extracurricular funds allocation, student green projects sponsorship limits, IT equipment upgrades proposal review.",
      decisions:
        "Approved 120,000 RSD funding for E-Gaming Club rigs; approved pilot recycling bins initiative across the main hall.",
    },
    {
      number: "MEETING #11: CLUB FUNDING & CHARTERS",
      date: "Held on June 18, 2025",
      file: "Minutes & Decisions.pdf",
      agenda:
        "Charter review for the newly proposed Korea Culture Club and Robotics Club. Event calendar synchronization for Autumn semester.",
      decisions:
        "Officially chartered the Robotics Club with starting equipment grant; locked September 20th for Campus Welcome Week.",
    },
    {
      number: "MEETING #10: CURRICULUM FEEDBACK ANALYSIS",
      date: "Held on May 10, 2025",
      file: "Minutes & Decisions.pdf",
      agenda:
        "Consolidated student critique regarding hybrid class schedules and mid-term exam clustering. Presentation preparation for Faculty Board.",
      decisions:
        "Delivered official 14-page recommendation report to the Academic Senate on restructuring final examination spacing.",
    },
  ];

  const studentClubs = [
    {
      icon: <Tv className="w-5 h-5 text-slate-700" />,
      title: "E-GAMING CLUB",
      desc: "Connect with competitive and casual gamers. We host campus-wide league tournaments, training sessions, and stream live finals.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-slate-700" />,
      title: "ROBOTICS CLUB",
      desc: "Build, program, and test autonomous robots. Weekly workshops on Arduino hardware and regional engineering competitions.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-slate-700" />,
      title: "KOREA CULTURE CLUB",
      desc: "Explore languages, cuisine, history, and media. Organizing K-Pop dance sessions, food tasting festivals, and language exchange circles.",
    },
    {
      icon: <Activity className="w-5 h-5 text-slate-700" />,
      title: "SPORTS CLUB",
      desc: "Intramural leagues for basketball, futsal, and volleyball. Weekly casual practices for all fitness levels on campus grounds.",
    },
    {
      icon: <PenTool className="w-5 h-5 text-slate-700" />,
      title: "CREATIVE & CRAFT CLUB",
      desc: "A hub for design, illustration, sewing, and craft. Learn new artistic techniques and participate in campus decoration drives.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-slate-700" />,
      title: "DEBATE SOCIETY",
      desc: "Master public speaking, structured argumentation, and global affairs analysis. Prep sessions for mock UN trials and inter-university meets.",
    },
  ];

  const activities = [
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/cleanup-day.jpg",
      date: "May 14, 2025",
      title: "CAMPUS CLEANUP DAY",
      desc: "Our annual environmental drive to plant trees and refresh recycling setups on faculty grounds.",
    },
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/welcome-week.jpg",
      date: "Sep 20, 2025",
      title: "STUDENT WELCOME WEEK",
      desc: "Concerts, faculty orientation booths, and casual evening meetups welcoming new freshmen.",
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/career-fair.jpg",
      date: "Nov 12, 2025",
      title: "CAREER FAIR 2025",
      desc: "Connecting 30+ regional employers with students looking for internships and entry-level positions.",
    },
    {
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/basketball.jpg",
      date: "Dec 05, 2025",
      title: "CHARITY BASKETBALL TOURNAMENT",
      desc: "An annual tournament raising funds for local children's shelters. 12 faculty teams competed.",
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/international-meetup.jpg",
      date: "Oct 22, 2025",
      title: "INTERNATIONAL STUDENT MEETUP",
      desc: "A cultural food and language exchange day celebrating our diverse student body.",
    },
    {
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=85",
      fallbackImage: "/student-parliament/portfolio/cv-writing.jpg",
      date: "Feb 15, 2026",
      title: "WORKSHOP: CV WRITING",
      desc: "Interactive training session helping final-year students build premium CVs and LinkedIn profiles.",
    },
  ];

  const handleVoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVoiceSubmitted(true);
  };

  return (
    <div className={`${montserrat.className} bg-[#FAF8F5] text-slate-900 min-h-screen`}>
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Exact Match with Image) */}
      {/* ========================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0B1E36] text-white overflow-hidden">
        {/* Background photo: University campus students gathering outdoors */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/student-group.jpg'), url('/student%20group.jpg')",
          }}
        />

        {/* Soft, lighter navy gradient overlays */}
        <div className="absolute inset-0 bg-[#0B1E36]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/80 via-[#0B1E36]/45 to-[#0B1E36]/15" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Pill: CURRENT MANDATE */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D5A754]/80 text-[#D5A754] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6">
              CURRENT MANDATE: ACADEMIC YEAR 2025/2026
            </div>

            {/* Headline */}
            <h1
              className={`${syncopate.className} text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase tracking-[0%] leading-[105%]`}
            >
              <span className="block text-white">YOUR VOICE.</span>
              <span className="block text-[#D5A754]">YOUR UNIVERSITY.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className={`${montserrat.className} mt-6 text-sm sm:text-[16px] text-slate-200/95 leading-[150%] tracking-[0%] max-w-2xl font-normal`}>
              Welcome to the official digital hub of the Student Parliament at
              Alfa BK University. We stand at the intersection of student
              ambition and university leadership — advocating for your academic
              rights, supporting club initiatives, and building an energetic
              community.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#voice-room"
                className={`${montserrat.className} inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0B1E36] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 rounded-lg shadow-lg shadow-black/20 transition cursor-pointer`}
              >
                Submit suggestions
              </a>
              <a
                href="#activities"
                className={`${montserrat.className} inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 rounded-lg hover:bg-white/10 transition cursor-pointer`}
              >
                Explore activities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT US SECTION (Exact Match with Image) */}
      {/* ========================================================= */}
      <section id="about" className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Left Title + Right Contact Info */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12">
            {/* Left Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                  ABOUT US
                </span>
              </div>
              <h2
                className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
              >
                ADVOCATING, ORGANIZING, AND
                <br />
                REPRESENTING SINCE DAY ONE
              </h2>
            </div>

            {/* Right Contact Info */}
            <div className="text-left lg:text-right flex flex-col justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
              <p className={`${syncopate.className} text-xs font-bold uppercase tracking-[0%] leading-[100%] text-[#0B1E36]`}>
                CONTACT OFFICE
              </p>
              <a
                href="mailto:parlament@alfa.edu.rs"
                className={`${montserrat.className} text-xs sm:text-[15px] leading-[150%] text-slate-500 hover:text-blue-700 transition mt-1`}
              >
                parlament@alfa.edu.rs
              </a>
              <p className={`${montserrat.className} text-xs text-slate-400 mt-0.5 leading-[150%]`}>
                Current Mandate: 2025/2026
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-md hover:border-[#BE9F5A]/40 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className={`${montserrat.className} mt-3 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR TEAM - MEET YOUR ELECTED REPRESENTATIVES */}
      {/* ========================================================= */}
      <section id="representatives" className="py-20 lg:py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                  OUR TEAM
                </span>
              </div>
              <h2
                className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
              >
                MEET YOUR ELECTED REPRESENTATIVES
              </h2>
              <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] font-normal`}>
                Elected students working hard to voice your concerns, support ideas, and create campus life
              </p>
            </div>
            <div className={`${montserrat.className} border border-slate-200/90 bg-white rounded-lg px-4 py-2 text-xs font-semibold text-slate-600 shadow-2xs self-start sm:self-auto`}>
              Inquiries: <a href="mailto:parlament@alfa.edu.rs" className="text-[#0B1E36] font-bold hover:underline">parlament@alfa.edu.rs</a>
            </div>
          </div>

          {/* Subsection 1: PARLIAMENT LEADERSHIP */}
          <div className="mb-12">
            <p className={`${syncopate.className} text-xs font-bold uppercase tracking-[0%] leading-[100%] text-slate-500 mb-5`}>
              PARLIAMENT LEADERSHIP
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {parliamentLeadership.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs hover:shadow-md transition duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3.8] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/d51b39cf482c946028913aa1dcd650b60234b40e.jpg";
                      }}
                      className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-1.5 pb-2">
                    <h3
                      className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                    >
                      {item.name}
                    </h3>
                    <p className={`${montserrat.className} text-xs font-bold text-[#BE9F5A] mt-1.5 leading-[150%]`}>
                      {item.role}
                    </p>
                    <p className={`${montserrat.className} text-[11px] font-semibold text-slate-400 uppercase tracking-wide mt-1 leading-[150%]`}>
                      {item.faculty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 2: FACULTY REPRESENTATIVES */}
          <div>
            <p className={`${syncopate.className} text-xs font-bold uppercase tracking-[0%] leading-[100%] text-slate-500 mb-5`}>
              FACULTY REPRESENTATIVES
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {facultyRepresentatives.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs hover:shadow-md transition duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3.8] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/d51b39cf482c946028913aa1dcd650b60234b40e.jpg";
                      }}
                      className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-1.5 pb-2">
                    <h3
                      className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                    >
                      {item.name}
                    </h3>
                    <p className={`${montserrat.className} text-xs font-bold text-[#BE9F5A] mt-1.5 leading-[150%]`}>
                      {item.role}
                    </p>
                    <p className={`${montserrat.className} text-[11px] font-semibold text-slate-400 uppercase tracking-wide mt-1 leading-[150%]`}>
                      {item.faculty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BROADCAST ROOM - LIVE ANNOUNCEMENTS & UPDATES */}
      {/* ========================================================= */}
      <section id="broadcast" className="py-20 lg:py-24 bg-white border-t border-b border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                BROADCAST ROOM
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              LIVE ANNOUNCEMENTS & UPDATES
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] font-normal`}>
              Stay informed on direct initiatives, scholarship deadlines, meeting outcomes, and university news
            </p>
          </div>

          {/* Urgent Banner */}
          <div className="bg-[#0B1E36] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-3.5 text-white mb-8 shadow-xs">
            <span className={`${syncopate.className} bg-[#BE9F5A] text-[#0B1E36] font-bold text-[10px] uppercase tracking-[0%] px-2.5 py-1 rounded w-fit shrink-0`}>
              URGENT
            </span>
            <p className={`${montserrat.className} text-xs sm:text-sm text-slate-200 font-medium leading-relaxed`}>
              Important Notice: Scholarship Application Deadline has been extended to November 1st, 2025. Submit all documents online or at Office 204.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {["All Alerts", "Meetings", "Elections", "Initiatives", "Deadlines"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveAlertFilter(filter)}
                  className={`${montserrat.className} text-xs font-semibold px-4 py-2 rounded-full border transition cursor-pointer ${
                    activeAlertFilter === filter
                      ? "bg-[#0B1E36] border-[#0B1E36] text-white shadow-2xs"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {/* Announcements Grid (5 cards across 3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnnouncements.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${montserrat.className} text-xs font-medium text-slate-500`}>
                      {item.date}
                    </span>
                    <span className={`${syncopate.className} text-[10px] font-bold tracking-[0%] uppercase px-2 py-0.5 rounded bg-[#FDF4EA] text-[#C28C38]`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[115%]`}
                  >
                    {item.title}
                  </h3>
                  <p className={`${montserrat.className} mt-3 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TRANSPARENCY ARCHIVE - PARLIAMENT MEETINGS & VOTING RECORDS */}
      {/* ========================================================= */}
      <section id="transparency" className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                TRANSPARENCY ARCHIVE
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              PARLIAMENT MEETINGS & VOTING RECORDS
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] font-normal`}>
              We believe in total transparency. Search past session logs, read agendas, and download PDF transcripts of decisions.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-1.5 sm:p-2 shadow-2xs mb-8">
            <div className="relative flex-1 flex items-center pl-2.5 sm:pl-3">
              <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Search documents by keywords, session numbers or specific academic years..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${montserrat.className} w-full text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 bg-transparent focus:outline-none`}
              />
            </div>
            <button
              onClick={() => {
                alert("Filter modal: Filtering archives by academic semester & date.");
              }}
              className={`${montserrat.className} bg-[#0B1E36] hover:bg-[#153457] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-lg shadow-xs transition cursor-pointer shrink-0`}
            >
              FILTER BY DATE
            </button>
          </div>

          {/* Meeting Record Stack */}
          <div className="space-y-5">
            {meetingRecords
              .filter(
                (item) =>
                  !searchQuery ||
                  item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.agenda.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.decisions.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition"
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
                    <div>
                      <h3
                        className={`${syncopate.className} text-[16px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[115%]`}
                      >
                        {item.number}
                      </h3>
                      <p className={`${montserrat.className} text-xs text-slate-400 mt-1`}>{item.date}</p>
                    </div>
                    <button
                      onClick={() => {
                        alert(`Downloading ${item.file}`);
                      }}
                      className={`${montserrat.className} inline-flex items-center gap-1.5 text-xs font-bold text-[#BE9F5A] hover:text-[#997939] transition cursor-pointer self-start sm:self-auto`}
                    >
                      <Download className="w-4 h-4" />
                      <span>{item.file}</span>
                    </button>
                  </div>

                  {/* Agenda & Key Decisions 2-cols */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
                    <div>
                      <h4 className={`${syncopate.className} text-[11px] font-bold uppercase tracking-[0%] text-slate-900 mb-1.5`}>
                        AGENDA
                      </h4>
                      <p className={`${montserrat.className} text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                        {item.agenda}
                      </p>
                    </div>
                    <div>
                      <h4 className={`${syncopate.className} text-[11px] font-bold uppercase tracking-[0%] text-slate-900 mb-1.5`}>
                        KEY DECISIONS
                      </h4>
                      <p className={`${montserrat.className} text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                        {item.decisions}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CAMPUS CULTURE - JOIN A STUDENT CLUB (Image 3) */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                CAMPUS CULTURE
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              JOIN A STUDENT CLUB
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] font-normal`}>
              Pursue your passions, gain practical skills, and build lifelong friendships beyond class boundaries.
            </p>
          </div>

          {/* 6 Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {studentClubs.map((club, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {club.icon}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedClub(club.title);
                        setClubModalOpen(true);
                      }}
                      className={`${montserrat.className} bg-[#0B1E36] hover:bg-[#183a60] text-white text-[11px] font-bold uppercase px-3.5 py-1.5 rounded-lg shadow-2xs transition cursor-pointer`}
                    >
                      JOIN
                    </button>
                  </div>
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                  >
                    {club.title}
                  </h3>
                  <p className={`${montserrat.className} mt-2.5 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    {club.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Start Your Own Club Banner */}
          <div className="rounded-3xl bg-[#113565] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3
                className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase tracking-[0%] leading-[115%]`}
              >
                DON&apos;T SEE YOUR NICHE?{" "}
                <span className="text-[#D5A754]">START YOUR OWN CLUB.</span>
              </h3>
              <p className={`${montserrat.className} mt-4 text-xs sm:text-[16px] text-slate-300 leading-[150%] tracking-[0%] font-normal`}>
                The Student Parliament is always ready to sponsor fresh ideas. If you have 5 other students interested in a topic, we&apos;ll help write your charter, allocate starting budget, and assist in reserving faculty halls.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => {
                    setSelectedClub("Start New Club");
                    setClubModalOpen(true);
                  }}
                  className={`${montserrat.className} bg-[#C69A4C] hover:bg-[#b08539] text-[#0B1E36] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition cursor-pointer`}
                >
                  SUBMIT YOUR CLUB IDEA
                </button>
              </div>
            </div>

            {/* Illustration Graphic Box matching image */}
            <div className="w-full sm:w-auto shrink-0 flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2 sm:p-3 max-w-[280px]">
                <img
                  src="/student-parliament/club-ideas.png"
                  alt="Start Your Own Club Ideas"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. VOICE ROOM - YOUR VOICE MATTERS (Reference Mockup) */}
      {/* ========================================================= */}
      <section id="voice-room" className="py-16 lg:py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                VOICE ROOM
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              YOUR VOICE MATTERS
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] max-w-4xl`}>
              Have an issue to report, a course schedule suggestion, or an exciting project idea? Tell us directly. We route every submission directly to the respective representatives.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-[#FAF8F5] p-7 sm:p-10 shadow-xs">
            {voiceSubmitted ? (
              <div className="py-10 text-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`${syncopate.className} text-xl font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}>
                  Submission Received!
                </h3>
                <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] max-w-md mx-auto`}>
                  Thank you. Your message has been logged in docket #{Math.floor(1000 + Math.random() * 9000)} and routed directly to the Student Parliament executive committee.
                </p>
                <button
                  onClick={() => {
                    setVoiceSubmitted(false);
                    setVoiceDetails("");
                  }}
                  className={`${montserrat.className} mt-6 inline-flex items-center justify-center bg-[#0B1E36] text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg hover:bg-[#183a60] transition cursor-pointer`}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleVoiceSubmit} className="space-y-6">
                {/* Row 1: Full name + Faculty */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`${syncopate.className} block text-[11px] font-bold uppercase tracking-[0%] text-slate-800 mb-2 leading-[100%]`}>
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name.."
                      disabled={voiceAnonymous}
                      value={voiceName}
                      onChange={(e) => setVoiceName(e.target.value)}
                      className={`${montserrat.className} w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0B1E36] transition text-slate-800 placeholder:text-slate-400`}
                    />
                  </div>
                  <div>
                    <label className={`${syncopate.className} block text-[11px] font-bold uppercase tracking-[0%] text-slate-800 mb-2 leading-[100%]`}>
                      FACULTY / PROGRAM
                    </label>
                    <select
                      value={voiceFaculty}
                      onChange={(e) => setVoiceFaculty(e.target.value)}
                      className={`${montserrat.className} w-full text-xs sm:text-sm px-3.5 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0B1E36] transition text-slate-700`}
                    >
                      <option value="">Select Faculty...</option>
                      <option>Faculty of Information Technologies</option>
                      <option>Faculty of Finance, Banking and Auditing</option>
                      <option>Faculty of Mathematics and Computer Science</option>
                      <option>Faculty of Foreign Languages</option>
                      <option>Faculty of Management in Sport</option>
                      <option>Faculty of Arts</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Choose a Category Pills */}
                <div>
                  <label className={`${syncopate.className} block text-[11px] font-bold uppercase tracking-[0%] text-slate-800 mb-2.5 leading-[100%]`}>
                    CHOOSE A CATEGORY
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      "Send a suggestion",
                      "Propose an initiative",
                      "Suggest a topic",
                      "Ask a question",
                      "Report an issue",
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setVoiceCategory(cat)}
                        className={`${montserrat.className} text-xs font-medium px-4 py-2 rounded-lg border transition cursor-pointer ${
                          voiceCategory === cat
                            ? "bg-[#0B1E36] border-[#0B1E36] text-white shadow-xs"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 3: Submission Details */}
                <div>
                  <label className={`${syncopate.className} block text-[11px] font-bold uppercase tracking-[0%] text-slate-800 mb-2 leading-[100%]`}>
                    YOUR SUBMISSION DETAILS
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your thoughts or issues in detail here..."
                    value={voiceDetails}
                    onChange={(e) => setVoiceDetails(e.target.value)}
                    className={`${montserrat.className} w-full text-xs sm:text-sm p-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0B1E36] transition text-slate-800 placeholder:text-slate-400`}
                  />
                </div>

                {/* Row 4: Anonymous Checkbox + Submit Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <label className={`${montserrat.className} flex items-center gap-2 cursor-pointer text-xs text-slate-600`}>
                    <input
                      type="checkbox"
                      checked={voiceAnonymous}
                      onChange={(e) => setVoiceAnonymous(e.target.checked)}
                      className="rounded border-slate-300 text-[#0B1E36] focus:ring-0"
                    />
                    <span>Submissions can be sent anonymously by checking the box.</span>
                  </label>

                  <button
                    type="submit"
                    className={`${syncopate.className} bg-[#C69A4C] hover:bg-[#b08539] text-white font-bold text-xs uppercase tracking-[0%] px-8 py-3 rounded-lg shadow-xs transition cursor-pointer self-start sm:self-auto leading-[100%]`}
                  >
                    SUBMIT TO PARLIAMENT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. STUDENT VOICE - STUDENT PARLIAMENT ELECTIONS (Reference Mockup) */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                STUDENT VOICE
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              STUDENT PARLIAMENT ELECTIONS
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] max-w-4xl`}>
              Elections are held annually every October. Every student has the right to vote and the right to stand as a candidate.
            </p>
          </div>

          {/* Split: Process Steps (Left) & Active Status (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left 3 Process Steps (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`${syncopate.className} w-8 h-8 rounded-full bg-[#C69A4C] text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                  1
                </div>
                <div>
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                  >
                    CANDIDATE NOMINATIONS
                  </h3>
                  <p className={`${montserrat.className} mt-1.5 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    Submit your profile, faculty endorsement forms, and a brief statement of purpose to the election committee.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`${syncopate.className} w-8 h-8 rounded-full bg-[#C69A4C] text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                  2
                </div>
                <div>
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                  >
                    ACTIVE CAMPAIGNING
                  </h3>
                  <p className={`${montserrat.className} mt-1.5 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    Candidate profiles are published online. Host debates, hold Q&As, and share your vision across the campus.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className={`${syncopate.className} w-8 h-8 rounded-full bg-[#C69A4C] text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                  3
                </div>
                <div>
                  <h3
                    className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}
                  >
                    VOTING DAY
                  </h3>
                  <p className={`${montserrat.className} mt-1.5 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                    Digital and physical voting booths open across all faculties. Cast your ballot using your student card ID.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Status Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-2xl bg-[#0B1E36] p-7 sm:p-9 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <span className={`${syncopate.className} inline-block text-[10px] font-bold uppercase tracking-[0%] text-white bg-[#C69A4C] px-3 py-1 rounded leading-[100%]`}>
                    ELECTION STATUS
                  </span>
                  <h3
                    className={`${syncopate.className} text-xl sm:text-[26px] lg:text-[28px] font-bold uppercase tracking-[0%] text-white mt-6 leading-[115%]`}
                  >
                    NO ACTIVE ELECTION RIGHT NOW.
                  </h3>
                  <p className={`${montserrat.className} mt-4 text-xs sm:text-[14px] text-slate-300 leading-[150%] font-normal`}>
                    The election cycle for the 2025/2026 Mandate was completed in October 2025. The next call for nominations will open in September 2026.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      alert("Opening validated election logs and voting archives.");
                    }}
                    className={`${montserrat.className} text-xs font-bold text-[#C69A4C] hover:text-amber-300 transition cursor-pointer flex items-center gap-1.5`}
                  >
                    <span>Browse the Election Archive & Logs</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. OUR PORTFOLIO - ACTIVITIES & PROJECTS (Reference Mockup) */}
      {/* ========================================================= */}
      <section id="activities" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#BE9F5A] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE9F5A]">
                OUR PORTFOLIO
              </span>
            </div>
            <h2
              className={`${syncopate.className} text-xl sm:text-[28px] lg:text-[32px] font-bold uppercase text-[#0B1E36] tracking-[0%] leading-[100%]`}
            >
              ACTIVITIES & PROJECTS
            </h2>
            <p className={`${montserrat.className} mt-2 text-sm sm:text-[16px] text-slate-600 leading-[150%] tracking-[0%] max-w-4xl`}>
              Take a look at standard student life events organized and executed by the Parliament team.
            </p>
          </div>

          {/* 6 Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {activities.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = item.fallbackImage;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className={`${montserrat.className} text-xs font-bold text-[#BE9F5A] mb-2`}>
                      {item.date}
                    </p>
                    <h3
                      className={`${syncopate.className} text-[17px] sm:text-[20px] font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[115%]`}
                    >
                      {item.title}
                    </h3>
                    <p className={`${montserrat.className} mt-2 text-xs sm:text-[14px] text-slate-600 leading-[150%] font-normal`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CLUB JOIN MODAL */}
      {/* ========================================================= */}
      {clubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-7 relative">
            <button
              onClick={() => {
                setClubModalOpen(false);
                setClubJoined(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {clubJoined ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className={`${syncopate.className} text-base font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}>
                  Application Sent!
                </h3>
                <p className={`${montserrat.className} text-xs text-slate-500 mt-2 leading-[150%]`}>
                  The coordinator for {selectedClub} will reach out to your university email within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setClubModalOpen(false);
                    setClubJoined(false);
                  }}
                  className={`${syncopate.className} mt-5 bg-[#0B1E36] text-white text-xs font-bold uppercase tracking-[0%] px-5 py-2.5 rounded-lg leading-[100%]`}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <h3 className={`${syncopate.className} text-base font-bold text-[#0B1E36] uppercase tracking-[0%] leading-[100%]`}>
                  Join {selectedClub}
                </h3>
                <p className={`${montserrat.className} text-xs text-slate-500 mt-2 leading-[150%]`}>
                  Connect with fellow members and participate in upcoming activities.
                </p>
                <div className={`${montserrat.className} mt-4 space-y-3`}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full text-xs p-3 rounded-lg border border-slate-200"
                  />
                  <input
                    type="text"
                    placeholder="Student ID / Index"
                    className="w-full text-xs p-3 rounded-lg border border-slate-200"
                  />
                  <input
                    type="email"
                    placeholder="University Email (@alfa.edu.rs)"
                    className="w-full text-xs p-3 rounded-lg border border-slate-200"
                  />
                  <button
                    onClick={() => setClubJoined(true)}
                    className={`${syncopate.className} w-full bg-[#0B1E36] text-white text-xs font-bold uppercase py-3 rounded-lg shadow cursor-pointer mt-2 tracking-[0%] leading-[100%]`}
                  >
                    Confirm Registration
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
