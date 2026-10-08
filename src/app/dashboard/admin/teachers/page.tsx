import { Users } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function TeachersPage() {
  return (
    <AdminPagePlaceholder
      title="Teachers"
      routePath="/dashboard/admin/teachers"
      icon={Users}
      description="Manage professors, instructors, teaching assistants, and departmental assignments."
    />
  );
}
