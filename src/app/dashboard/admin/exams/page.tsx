import { ClipboardCheck } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function ExamsPage() {
  return (
    <AdminPagePlaceholder
      title="Exams"
      routePath="/dashboard/admin/exams"
      icon={ClipboardCheck}
      description="Manage midterm and final examination schedules, invigilators, venues, and exam guidelines."
    />
  );
}
