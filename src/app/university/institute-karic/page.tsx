import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Institute Karić | Alfa BK University",
  description: "Scientific and applied research institute of Alfa BK University.",
};

export default function InstituteKaricPage() {
  return (
    <PageShell
      title="Institute Karić"
      category="University"
      description="Institute Karić serves as the scientific research pillar of Alfa BK University, focusing on multidisciplinary projects, publication of academic journals, and modern innovation."
      relatedLinks={[
        { label: "University Documents", href: "/university/documents" },
        { label: "International Cooperation", href: "/university/international-cooperation" },
        { label: "Faculty of IT", href: "/faculties/information-technologies" },
      ]}
    />
  );
}
