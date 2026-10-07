import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Alumni Association | Alfa BK University",
  description: "Join the Alfa BK University Alumni network.",
};

export default function AlumniAssociationPage() {
  return (
    <PageShell
      title="Alumni Association"
      category="University"
      description="The Alfa BK Alumni Association brings together thousands of graduates working across industry, academia, entrepreneurship, and international organizations."
      relatedLinks={[
        { label: "About University", href: "/university/about" },
        { label: "Programs", href: "/programs" },
        { label: "Contact", href: "/university/contact" },
      ]}
    />
  );
}
