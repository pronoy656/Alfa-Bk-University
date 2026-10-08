import { Landmark } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function FacultyPage() {
  return (
    <AdminPagePlaceholder
      title="Faculty"
      routePath="/dashboard/admin/faculty"
      icon={Landmark}
      description="Manage faculties, institutes, dean offices, and institutional units across Alfa BK University."
    />
  );
}
