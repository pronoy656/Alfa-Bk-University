import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Faculty of Foreign Languages | Alfa BK University",
  description: "Degrees in modern languages, English language and literature, philology and translation.",
};

export default function ForeignLanguagesPage() {
  return (
    <PageShell
      title="Faculty of Foreign Languages"
      category="Faculties"
      description="The Faculty of Foreign Languages prepares specialists in linguistics, literary analysis, pedagogical competencies, and professional interpretation and translation."
      relatedLinks={[
        { label: "Programs", href: "/programs" },
        { label: "International Cooperation", href: "/university/international-cooperation" },
        { label: "Apply Now", href: "/apply-now" },
      ]}
    />
  );
}
