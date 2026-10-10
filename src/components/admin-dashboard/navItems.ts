import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Landmark,
  Building,
  BookOpen,
  CalendarRange,
  BookMarked,
  Clock,
  ClipboardCheck,
  Award,
  UserCheck,
  FileText,
  Megaphone,
  BarChart3,
  Settings,
} from "lucide-react";
import { DashboardNavItem, DashboardUser } from "@/components/dashboard/types";

export const adminUser: DashboardUser = {
  name: "Dr. Alim Al Razi",
  id: "ADM-MAIN-001",
  role: "Super Admin",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  email: "alim.razi@alfa.edu.rs",
};

export const adminNavItems: DashboardNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/admin",
  },
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    href: "/dashboard/admin/students",
  },
  {
    id: "teachers",
    label: "Teachers",
    icon: Users,
    href: "/dashboard/admin/teachers",
  },
  {
    id: "faculty",
    label: "Faculty",
    icon: Landmark,
    href: "/dashboard/admin/faculty",
  },
  {
    id: "departments",
    label: "Departments",
    icon: Building,
    href: "/dashboard/admin/departments",
  },
  {
    id: "programs",
    label: "Programs",
    icon: BookOpen,
    href: "/dashboard/admin/programs",
  },
  {
    id: "semesters",
    label: "Semesters",
    icon: CalendarRange,
    href: "/dashboard/admin/semesters",
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookMarked,
    href: "/dashboard/admin/courses",
  },
  {
    id: "routine",
    label: "Routine",
    icon: Clock,
    href: "/dashboard/admin/routine",
  },
  {
    id: "exams",
    label: "Exams",
    icon: ClipboardCheck,
    href: "/dashboard/admin/exams",
  },
  {
    id: "results",
    label: "Results",
    icon: Award,
    href: "/dashboard/admin/results",
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: UserCheck,
    href: "/dashboard/admin/attendance",
  },
  {
    id: "documents",
    label: "Documents",
    icon: FileText,
    href: "/dashboard/admin/documents",
  },
  {
    id: "announcements",
    label: "Announcements",
    icon: Megaphone,
    href: "/dashboard/admin/announcements",
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    href: "/dashboard/admin/reports",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/admin/settings",
  },
];
