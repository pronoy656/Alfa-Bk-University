"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { studentUser, studentNavItems } from "@/components/dashboard/student-dashboard/navItems";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine active nav item from current URL pathname
  const getActiveTab = () => {
    if (!pathname || pathname === "/dashboard/student" || pathname === "/dashboard/student/") {
      return "dashboard";
    }
    const segment = pathname.replace("/dashboard/student/", "").split("/")[0];
    if (segment === "results") return "result";
    return segment || "dashboard";
  };

  return (
    <DashboardLayout
      portalTitle="ABK e-Learning"
      user={studentUser}
      navItems={studentNavItems}
      activeTab={getActiveTab()}
      onSelectTab={() => {}}
      unreadNotifications={2}
      unreadMessages={1}
    >
      <div className="w-full">{children}</div>
    </DashboardLayout>
  );
}
