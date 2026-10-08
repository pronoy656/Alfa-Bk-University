import { Building } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function DepartmentsPage() {
  return (
    <AdminPagePlaceholder
      title="Departments"
      routePath="/dashboard/admin/departments"
      icon={Building}
      description="Manage academic departments, department heads, and curriculum coordination."
    />
  );
}
