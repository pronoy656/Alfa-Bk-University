import { Settings } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function SettingsPage() {
  return (
    <AdminPagePlaceholder
      title="Settings"
      routePath="/dashboard/admin/settings"
      icon={Settings}
      description="Configure university portal preferences, security protocols, roles & permissions, and API integrations."
    />
  );
}
