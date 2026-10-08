import { BookOpen } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function ProgramsPage() {
  return (
    <AdminPagePlaceholder
      title="Programs"
      routePath="/dashboard/admin/programs"
      icon={BookOpen}
      description="Manage undergraduate, master's, and doctoral degree programs, accreditation, and syllabus tracks."
    />
  );
}
