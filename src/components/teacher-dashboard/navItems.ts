import {
  LayoutDashboard,
  BookOpen,
  FileText,
  HelpCircle,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Bell,
} from "lucide-react";
import { DashboardNavItem, DashboardUser } from "@/components/dashboard/types";

export const teacherUser: DashboardUser = {
  name: "Dr. Mohammad Rahman",
  id: "FAC-CSE-018",
  role: "Professor · CSE",
  avatarUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  email: "mohammad.rahman@alfa.edu.rs",
};

export const teacherNavItems: DashboardNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/teacher",
  },
  {
    id: "courses",
    label: "My Courses",
    icon: BookOpen,
    href: "/dashboard/teacher/courses",
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: FileText,
    href: "/dashboard/teacher/assignments",
  },
  {
    id: "quizzes",
    label: "Quizzes",
    icon: HelpCircle,
    href: "/dashboard/teacher/quizzes",
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: CheckCircle2,
    href: "/dashboard/teacher/attendance",
  },
  {
    id: "grades",
    label: "Grades",
    icon: TrendingUp,
    href: "/dashboard/teacher/grades",
  },
  {
    id: "routine",
    label: "Routine",
    icon: Calendar,
    href: "/dashboard/teacher/routine",
  },
  {
    id: "announcements",
    label: "Announcements",
    icon: Bell,
    href: "/dashboard/teacher/announcements",
  },
];
