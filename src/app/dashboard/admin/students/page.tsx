import { GraduationCap } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function StudentsPage() {
  return (
    <AdminPagePlaceholder
      title="Students"
      routePath="/dashboard/admin/students"
      icon={GraduationCap}
      description="Manage student admissions, profiles, academic records, and enrollment status."
    />
  );
}
