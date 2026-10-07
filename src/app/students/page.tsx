import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Students Portal | Alfa BK University",
  description: "Academic calendar, exams schedule, student Parliament, scholarships, and campus life.",
};

export default function StudentsPage() {
  return (
    <PageShell
      title="Students Information & Services"
      category="Campus Life"
      description="Access everything student-related: examination schedules, student parliament initiatives, academic calendar, library resources, and counseling support."
      relatedLinks={[
        { label: "e-Student Portal", href: "/e-student" },
        { label: "e-Learning (Moodle)", href: "/e-learning" },
        { label: "University Documents", href: "/university/documents" },
      ]}
    />
  );
}
