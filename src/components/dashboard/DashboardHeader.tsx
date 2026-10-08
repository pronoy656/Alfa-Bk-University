"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, Mail, LogOut, Menu, X, BookOpen, Settings, ChevronDown } from "lucide-react";
import { DashboardUser } from "./types";

interface DashboardHeaderProps {
  portalTitle?: string;
  user: DashboardUser;
  mobileSidebarOpen: boolean;
  onToggleMobileSidebar: () => void;
  onNotificationClick?: () => void;
  onMessageClick?: () => void;
  unreadNotifications?: number;
  unreadMessages?: number;
}

export default function DashboardHeader({
  portalTitle = "ABK e-Learning",
  user,
  mobileSidebarOpen,
  onToggleMobileSidebar,
  onNotificationClick,
  onMessageClick,
  unreadNotifications = 2,
  unreadMessages = 1,
}: DashboardHeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSettingsHref = () => {
    if (user.role?.toLowerCase().includes("admin") || user.id.startsWith("ADM")) {
      return "/dashboard/admin/settings";
    }
    if (user.role?.toLowerCase().includes("teacher") || user.id.startsWith("FAC")) {
      return "/dashboard/teacher";
    }
    return "/dashboard/student/settings";
  };

  return (
    <header className="h-16 w-full bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Left: Mobile Toggle & Brand Badge */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
          aria-label="Toggle Navigation"
        >
          {mobileSidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        <Link
          href={
            user.role?.toLowerCase().includes("admin") || user.id.startsWith("ADM")
              ? "/dashboard/admin"
              : user.role?.toLowerCase().includes("professor") ||
                user.role?.toLowerCase().includes("faculty") ||
                user.role?.toLowerCase().includes("teacher") ||
                user.id.startsWith("FAC")
              ? "/dashboard/teacher"
              : "/dashboard/student"
          }
          className="flex items-center gap-2.5 group select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#C69234] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-900 text-sm tracking-tight hidden sm:inline">
            {portalTitle}
          </span>
        </Link>
      </div>

      {/* Right: Actions & User Avatar */}
      <div className="flex items-center gap-2 sm:gap-3.5">
        {/* Quick Search */}
        <button
          type="button"
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          onClick={onNotificationClick}
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center relative transition"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadNotifications > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" />
          )}
        </button>

        {/* Messages */}
        <button
          type="button"
          onClick={onMessageClick}
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center relative transition"
          title="Messages"
        >
          <Mail className="w-4 h-4" />
          {unreadMessages > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
          )}
        </button>

        <div className="h-6 w-px bg-slate-200 mx-0.5 hidden sm:block" />

        {/* User Profile Info with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-50 transition cursor-pointer"
          >
            <img
              src={
                user.avatarUrl ||
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
              }
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-900 leading-tight">
                {user.name}
              </span>
              <span className="text-[10px] font-medium text-slate-400 leading-tight mt-0.5">
                {user.role || user.id}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* Dropdown Menu */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-4 py-2.5 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900">{user.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">ID: {user.id}</p>
              </div>

              <div className="py-1">
                <Link
                  href={getSettingsHref()}
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <Settings className="w-4 h-4 text-[#C69234]" />
                  <span>Account & Profile Settings</span>
                </Link>
              </div>

              <div className="pt-1 border-t border-slate-100">
                <Link
                  href="/login"
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
