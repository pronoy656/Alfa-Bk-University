import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Calendar,
  Award,
  CheckCircle2,
  TrendingUp,
  Bell,
  Mail,
  Settings,
} from "lucide-react";
import { DashboardNavItem, DashboardUser } from "@/components/dashboard/types";

export const studentUser: DashboardUser = {
  name: "Shahriar Kabir",
  id: "STU-2024-0451",
  role: "Student",
  avatarUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  email: "shahriar.kabir@student.alfa.edu.rs",
};

export const studentNavItems: DashboardNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/student",
  },
  {
    id: "courses",
    label: "My Courses",
    icon: BookOpen,
    href: "/dashboard/student/courses",
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: FileText,
    badge: "3",
    href: "/dashboard/student/assignments",
  },
  {
    id: "class-routine",
    label: "Class Routine",
    icon: Calendar,
    href: "/dashboard/student/class-routine",
  },
  {
    id: "exam-routine",
    label: "Exam Routine",
    icon: Award,
    href: "/dashboard/student/exam-routine",
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: CheckCircle2,
    href: "/dashboard/student/attendance",
  },
  {
    id: "result",
    label: "Results",
    icon: TrendingUp,
    href: "/dashboard/student/result",
  },
  {
    id: "notices",
    label: "Notices",
    icon: Bell,
    badge: "2",
    href: "/dashboard/student/notices",
  },
  {
    id: "messages",
    label: "Messages",
    icon: Mail,
    badge: "1",
    href: "/dashboard/student/messages",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/student/settings",
  },
];
