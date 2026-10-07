import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Faculty of Management and Sports | Alfa BK University",
  description: "Sports management, athletic organization, coaching and sports business administration.",
};

export default function ManagementSportsPage() {
  return (
    <PageShell
      title="Faculty of Management and Sports"
      category="Faculties"
      description="The Faculty of Management and Sports combines modern leadership and business methodologies with specialized sports industry training and performance administration."
      relatedLinks={[
        { label: "Programs", href: "/programs" },
        { label: "Apply Now", href: "/apply-now" },
        { label: "Students", href: "/students" },
      ]}
    />
  );
}
