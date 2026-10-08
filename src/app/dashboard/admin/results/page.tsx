import { Award } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function ResultsPage() {
  return (
    <AdminPagePlaceholder
      title="Results"
      routePath="/dashboard/admin/results"
      icon={Award}
      description="Manage grade approvals, transcript generation, CGPA calculations, and result publications."
    />
  );
}
