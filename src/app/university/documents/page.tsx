import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "University Documents | Alfa BK University",
  description: "Official documents, statutes, accreditations, regulations, and student rulebooks.",
};

export default function UniversityDocumentsPage() {
  return (
    <PageShell
      title="University Documents"
      category="University"
      description="Access official accreditations, university statutes, code of ethics, curriculum regulations, and administrative request forms."
      relatedLinks={[
        { label: "About University", href: "/university/about" },
        { label: "Contact", href: "/university/contact" },
        { label: "Students", href: "/students" },
      ]}
    />
  );
}
