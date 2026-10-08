import { BarChart3 } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function ReportsPage() {
  return (
    <AdminPagePlaceholder
      title="Reports"
      routePath="/dashboard/admin/reports"
      icon={BarChart3}
      description="Access analytics, enrollment reports, institutional performance indicators, and data export tools."
    />
  );
}
