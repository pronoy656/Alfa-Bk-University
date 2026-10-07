import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Study Programs | Alfa BK University",
  description: "Explore Undergraduate (Bachelor), Master, and PhD programs offered across all faculties.",
};

export default function ProgramsPage() {
  return (
    <PageShell
      title="Study Programs"
      category="Academics"
      description="Alfa BK University provides accredited undergraduate, master, and doctoral degree programs designed around modern Bologna process guidelines and international standards."
      relatedLinks={[
        { label: "Faculty of IT", href: "/faculties/information-technologies" },
        { label: "Finance & Accounting", href: "/faculties/finance-trade-accounting" },
        { label: "Apply Now", href: "/apply-now" },
      ]}
    />
  );
}
