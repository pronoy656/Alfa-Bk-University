"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { teacherUser, teacherNavItems } from "@/components/dashboard/teacher-dashboard/navItems";

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine active nav item from current URL path
  const getActiveTab = () => {
    if (pathname === "/dashboard/teacher" || pathname === "/dashboard/teacher/") {
      return "dashboard";
    }
    if (pathname?.includes("/dashboard/teacher/courses") || pathname?.includes("/dashboard/teacher/upload-lecture")) {
      return "courses";
    }
    if (pathname?.includes("/dashboard/teacher/assignments")) {
      return "assignments";
    }
    if (pathname?.includes("/dashboard/teacher/quizzes")) {
      return "quizzes";
    }
    if (pathname?.includes("/dashboard/teacher/attendance")) {
      return "attendance";
    }
    if (pathname?.includes("/dashboard/teacher/grades")) {
      return "grades";
    }
    if (pathname?.includes("/dashboard/teacher/routine")) {
      return "routine";
    }
    if (pathname?.includes("/dashboard/teacher/announcements")) {
      return "announcements";
    }
    return "dashboard";
  };

  return (
    <DashboardLayout
      portalTitle="ABK e-Learning"
      user={teacherUser}
      navItems={teacherNavItems}
      activeTab={getActiveTab()}
      onSelectTab={() => {}}
    >
      <div className="w-full">{children}</div>
    </DashboardLayout>
  );
}
