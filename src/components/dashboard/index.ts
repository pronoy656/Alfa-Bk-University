export * from "./types";
export { default as DashboardLayout } from "./DashboardLayout";
export { default as DashboardHeader } from "./DashboardHeader";
export { default as DashboardSidebar } from "./DashboardSidebar";
export { default as DashboardBanner } from "./DashboardBanner";
export { DashboardStatCard, DashboardStatsGrid } from "./DashboardStatCard";
export { default as DashboardCard } from "./DashboardCard";
export { default as TodayClassesList } from "./TodayClassesList";
export { default as UpcomingAssignmentsList } from "./UpcomingAssignmentsList";
export { default as ClassRoutineView } from "./ClassRoutineView";
export { default as ExamRoutineView } from "./ExamRoutineView";
export { default as AttendanceTrackerView } from "./AttendanceTrackerView";

// Shared Reusable Components
export * from "./shared";

// Role-specific Dashboards
export * as AdminDashboard from "./admin-dashboard";
export * as StudentDashboard from "./student-dashboard";
export * as TeacherDashboard from "./teacher-dashboard";
