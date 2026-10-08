"use client";

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { DashboardNavItem, DashboardUser } from "./types";

interface DashboardLayoutProps {
  portalTitle?: string;
  user: DashboardUser;
  navItems: DashboardNavItem[];
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onNotificationClick?: () => void;
  onMessageClick?: () => void;
  unreadNotifications?: number;
  unreadMessages?: number;
  universityHomeHref?: string;
  children: React.ReactNode;
}

export default function DashboardLayout({
  portalTitle = "ABK e-Learning",
  user,
  navItems,
  activeTab,
  onSelectTab,
  onNotificationClick,
  onMessageClick,
  unreadNotifications = 2,
  unreadMessages = 1,
  universityHomeHref = "/",
  children,
}: DashboardLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#F4F6F9] flex flex-col font-sans">
      {/* 1. Header (Full Width) */}
      <DashboardHeader
        portalTitle={portalTitle}
        user={user}
        mobileSidebarOpen={mobileSidebarOpen}
        onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        onNotificationClick={onNotificationClick}
        onMessageClick={onMessageClick}
        unreadNotifications={unreadNotifications}
        unreadMessages={unreadMessages}
      />

      {/* 2. Body Container with Left Sidebar & Full-Width Main Area */}
      <div className="flex-1 w-full flex overflow-hidden">
        {/* Sidebar */}
        <DashboardSidebar
          items={navItems}
          activeTab={activeTab}
          onSelectTab={onSelectTab}
          mobileSidebarOpen={mobileSidebarOpen}
          onCloseMobileSidebar={() => setMobileSidebarOpen(false)}
          universityHomeHref={universityHomeHref}
        />

        {/* Full Width Main Content (No max-w restriction) */}
        <main className="flex-1 w-full overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="w-full space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
