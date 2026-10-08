import { CalendarRange } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function SemestersPage() {
  return (
    <AdminPagePlaceholder
      title="Semesters"
      routePath="/dashboard/admin/semesters"
      icon={CalendarRange}
      description="Manage academic calendar, terms, fall/spring semester schedules, registration windows, and term dates."
    />
  );
}
