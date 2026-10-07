import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "International Cooperation | Alfa BK University",
  description: "Global partnerships, student exchange, Erasmus+, and academic collaborations.",
};

export default function InternationalCooperationPage() {
  return (
    <PageShell
      title="International Cooperation"
      category="University"
      description="Alfa BK University actively cooperates with leading universities and research organizations across Europe, Asia, and the Americas to provide global student mobility and joint academic degrees."
      relatedLinks={[
        { label: "About University", href: "/university/about" },
        { label: "Alumni Association", href: "/university/alumni" },
        { label: "Institute Karić", href: "/university/institute-karic" },
      ]}
    />
  );
}
