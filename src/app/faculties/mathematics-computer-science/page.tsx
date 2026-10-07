import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Faculty of Mathematics and Computer Science | Alfa BK University",
  description: "Advanced theoretical and applied mathematics, algorithmic foundations, and data science.",
};

export default function MathematicsComputerSciencePage() {
  return (
    <PageShell
      title="Faculty of Mathematics and Computer Science"
      category="Faculties"
      description="The Faculty of Mathematics and Computer Science provides intensive training in rigorous mathematical analysis, statistical computing, optimization algorithms, and modern data science."
      relatedLinks={[
        { label: "Faculty of IT", href: "/faculties/information-technologies" },
        { label: "Programs", href: "/programs" },
        { label: "Apply Now", href: "/apply-now" },
      ]}
    />
  );
}
