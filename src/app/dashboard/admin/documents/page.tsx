import { FileText } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function DocumentsPage() {
  return (
    <AdminPagePlaceholder
      title="Documents"
      routePath="/dashboard/admin/documents"
      icon={FileText}
      description="Manage institutional policies, accreditation certificates, admission forms, and university publications."
    />
  );
}
