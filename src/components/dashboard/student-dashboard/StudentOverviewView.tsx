"use client";

import React from "react";
import Link from "next/link";
import {
  DashboardBanner,
  DashboardStatsGrid,
  DashboardCard,
  TodayClassesList,
  UpcomingAssignmentsList,
  DashboardStat,
  ClassScheduleItem,
  AssignmentItem,
} from "@/components/dashboard";
import { ArrowRight, BookOpen } from "lucide-react";

export default function StudentOverviewView() {
  const academicStats: DashboardStat[] = [
    {
      label: "Current GPA",
      value: "3.82",
      subtext: "This semester",
    },
    {
      label: "CGPA",
      value: "3.71",
      subtext: "Cumulative standing",
    },
    {
      label: "Total Credits",
      value: "118 / 140",
      subtext: "84% completed",
    },
    {
      label: "Attendance",
      value: "86%",
      subtext: "Overall eligible",
    },
  ];

  const todayClasses: ClassScheduleItem[] = [
    {
      title: "Database Management",
      instructor: "Dr. Rahman",
      room: "Room 302",
      time: "09:00 AM",
      code: "CSE-305",
    },
    {
      title: "Software Engineering",
      instructor: "Dr. Hasan",
      room: "Room 204",
      time: "11:00 AM",
      code: "CSE-310",
    },
    {
      title: "Computer Architecture",
      instructor: "Prof. Milan",
      room: "Lab 3",
      time: "02:00 PM",
      code: "CSE-315",
    },
  ];

  const upcomingAssignments: AssignmentItem[] = [
    {
      title: "Assignment 04: Normalization Practice",
      course: "Database Management (CSE-305)",
      due: "Due Oct 25, 11:59 PM",
      status: "3 Days Left",
      statusType: "urgent",
    },
    {
      title: "UML Architecture & Class Diagrams",
      course: "Software Engineering (CSE-310)",
      due: "Due Oct 30, 11:59 PM",
      status: "Pending",
      statusType: "pending",
    },
    {
      title: "Packet Trace Routing Lab Analysis",
      course: "Computer Networking (CSE-320)",
      due: "Due Nov 05, 05:00 PM",
      status: "Submitted",
      statusType: "completed",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* 1. Full-width Greeting Banner */}
      <DashboardBanner
        greeting="Good Morning, Shahriar 👋"
        subtext="BSc in Computer Science & Engineering · 8th Semester · ID: STU-2024-0451"
        statusBadgeText="Fall 2026 · Active Regular"
        statusBadgeColor="bg-[#D5A754] text-slate-950 font-bold"
      />

      {/* 2. Stat Cards Grid */}
      <DashboardStatsGrid stats={academicStats} />

      {/* 3. Two-Column Core Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Classes Card */}
        <DashboardCard
          title="Today's Classes"
          actionText="View Routine →"
          actionHref="/dashboard/student/class-routine"
        >
          <TodayClassesList classes={todayClasses} />
        </DashboardCard>

        {/* Upcoming Assignments Card */}
        <DashboardCard
          title="Upcoming Assignments"
          actionText="View All →"
          actionHref="/dashboard/student/assignments"
        >
          <UpcomingAssignmentsList assignments={upcomingAssignments} />
        </DashboardCard>
      </div>

      {/* 4. Quick Nav Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link
          href="/dashboard/student/result"
          className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition group flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-bold text-[#C69234] uppercase tracking-wider">
              OFFICIAL GRADES
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
              Academic Results
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              CGPA 3.71 · Download Transcript
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="/dashboard/student/notices"
          className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition group flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-bold text-[#C69234] uppercase tracking-wider">
              CAMPUS BULLETINS
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
              Notices & Circulars
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              6 new circulars this month
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="/dashboard/student/messages"
          className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:border-slate-300 transition group flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-bold text-[#C69234] uppercase tracking-wider">
              FACULTY INBOX
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
              Messages & Advising
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              1 unread from Dr. Rahman
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}
