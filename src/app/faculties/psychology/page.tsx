import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Faculty of Psychology | Alfa BK University",
  description: "Degrees in clinical psychology, psychological counseling, and organizational behavior.",
};

export default function PsychologyPage() {
  return (
    <PageShell
      title="Faculty of Psychology"
      category="Faculties"
      description="The Faculty of Psychology equips students with empirical research skills, diagnostic methods, psychotherapeutic concepts, and workplace organizational analysis."
      relatedLinks={[
        { label: "Programs", href: "/programs" },
        { label: "Students", href: "/students" },
        { label: "Apply Now", href: "/apply-now" },
      ]}
    />
  );
}
