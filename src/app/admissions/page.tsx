import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Admissions | Alfa BK University",
  description: "Admissions procedures, enrollment criteria, and application forms for Alfa BK University.",
};

export default function AdmissionsPage() {
  return (
    <PageShell
      title="Admissions & Enrollment"
      category="Admissions 2026/2027"
      description="Start your academic journey with Alfa BK University. Choose your preferred study faculty, learn about entrance qualifications, and complete your registration."
      relatedLinks={[
        { label: "Apply Now (Online Registration)", href: "/apply-now" },
        { label: "All Study Programs", href: "/programs" },
        { label: "University Documents & Regulations", href: "/university/documents" },
        { label: "Contact Admissions Office", href: "/university/contact" },
      ]}
    />
  );
}
