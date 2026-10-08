import { UserCheck } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function AttendancePage() {
  return (
    <AdminPagePlaceholder
      title="Attendance"
      routePath="/dashboard/admin/attendance"
      icon={UserCheck}
      description="Monitor student and faculty attendance records, eligibility percentages, and automated attendance logs."
    />
  );
}
