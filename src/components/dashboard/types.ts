import { LucideIcon } from "lucide-react";

export interface DashboardUser {
  name: string;
  id: string; // e.g. STU-2024-0451 or TCH-102
  role?: string;
  avatarUrl?: string;
  email?: string;
}

export interface DashboardNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
  href?: string;
}

export interface DashboardStat {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: string;
}

export interface ClassScheduleItem {
  id?: string;
  title: string;
  instructor: string;
  room: string;
  time: string;
  code?: string;
}

export interface AssignmentItem {
  id?: string;
  title: string;
  course: string;
  due: string;
  status: string;
  statusType?: "pending" | "urgent" | "completed";
}

export interface TeacherCourse {
  id: string;
  code: string;
  credits: number;
  title: string;
  enrolled: number;
  progress: number;
  lastActive: string;
}

export interface LectureItem {
  id: string;
  title: string;
  duration: string;
  type: string;
}

export interface LectureModule {
  id: string;
  title: string;
  lecturesCount: number;
  totalDuration: string;
  collapsed?: boolean;
  lectures: LectureItem[];
}

export interface TeacherRecentActivity {
  id: string;
  title: string;
  timeAgo: string;
  isHighlight?: boolean;
}

export interface TeacherAssignment {
  id: string;
  title: string;
  course: string;
  courseCode: string;
  dueDate: string;
  totalMarks: number;
  submittedCount: number;
  totalStudents: number;
  status: "active" | "urgent" | "graded" | "draft";
  allowedFormats: string[];
  instructions?: string;
}

export interface TeacherQuiz {
  id: string;
  title: string;
  course: string;
  date: string;
  duration: string;
  totalMarks: number;
  submissions: string;
  status: "Scheduled" | "Draft" | "Active" | "Completed";
  quizType?: string;
  instructions?: string;
}

