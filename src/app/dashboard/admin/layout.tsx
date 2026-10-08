"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { adminUser, adminNavItems } from "@/components/admin-dashboard/navItems";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine active nav item from current URL pathname
  const getActiveTab = () => {
    if (!pathname || pathname === "/dashboard/admin" || pathname === "/dashboard/admin/") {
      return "dashboard";
    }
    const segment = pathname.replace("/dashboard/admin/", "").split("/")[0];
    return segment || "dashboard";
  };

  return (
    <DashboardLayout
      portalTitle="ABK Administration"
      user={adminUser}
      navItems={adminNavItems}
      activeTab={getActiveTab()}
      onSelectTab={() => {}}
    >
      <div className="w-full">{children}</div>
    </DashboardLayout>
  );
}
