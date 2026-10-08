import { Clock } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function RoutinePage() {
  return (
    <AdminPagePlaceholder
      title="Routine"
      routePath="/dashboard/admin/routine"
      icon={Clock}
      description="Manage university-wide timetable, lecture halls, laboratory allocations, and class schedules."
    />
  );
}
