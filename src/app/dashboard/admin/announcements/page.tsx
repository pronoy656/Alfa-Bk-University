import { Megaphone } from "lucide-react";
import AdminPagePlaceholder from "@/components/admin-dashboard/AdminPagePlaceholder";

export default function AnnouncementsPage() {
  return (
    <AdminPagePlaceholder
      title="Announcements"
      routePath="/dashboard/admin/announcements"
      icon={Megaphone}
      description="Publish campus-wide notices, circulars, urgent administrative alerts, and event bulletins."
    />
  );
}
