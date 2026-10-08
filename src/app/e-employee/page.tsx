import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "e-Employee Portal | Alfa BK University",
  description: "Faculty and staff portal for teaching administration, grading, and HR services.",
};

export default function EEmployeePage() {
  return (
    <PageShell
      title="e-Employee Portal"
      category="Electronic Services"
      description="The internal administrative portal for professors, teaching assistants, and administrative staff to enter grades, manage coursework, and handle university documentation."
      relatedLinks={[
        { label: "Launch Teacher Dashboard", href: "/dashboard/teacher" },
        { label: "e-Learning Platform", href: "/dashboard/teacher" },
        { label: "Faculty Documents", href: "/university/documents" },
        { label: "Contact Administration", href: "/university/contact" },
      ]}
    />
  );
}
