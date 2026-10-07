import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Apply Now | Alfa BK University Admissions",
  description: "Online application and enrollment form for Alfa BK University.",
};

export default function ApplyNowPage() {
  return (
    <PageShell
      title="Admissions & Apply Now"
      category="Admissions 2026/2027"
      description="Start your academic journey with Alfa BK University. Choose your preferred study faculty, complete the digital registration, and submit your documentation online."
      relatedLinks={[
        { label: "Study Programs", href: "/programs" },
        { label: "University Documents", href: "/university/documents" },
        { label: "Contact Admissions Office", href: "/university/contact" },
      ]}
    />
  );
}
