import { BookMarked } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function CoursesPage() {
  return (
    <AdminPagePlaceholder
      title="Courses"
      routePath="/dashboard/admin/courses"
      icon={BookMarked}
      description="Manage course catalogs, course codes, credit hours, prerequisites, and syllabi."
    />
  );
}
