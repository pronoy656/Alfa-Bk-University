import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "e-Student Portal | Alfa BK University",
  description: "Student electronic service for exam registrations, grade overviews, and tuition status.",
};

export default function EStudentPage() {
  return (
    <PageShell
      title="e-Student Portal"
      category="Electronic Services"
      description="The official student e-service portal. Log in to register for upcoming exam terms, review academic transcripts and ECTS credits, view class schedules, and check tuition statements."
      relatedLinks={[
        { label: "e-Learning (Moodle)", href: "/e-learning" },
        { label: "Students Information", href: "/students" },
        { label: "Contact Student Service", href: "/university/contact" },
      ]}
    />
  );
}
