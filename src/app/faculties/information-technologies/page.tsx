import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Faculty of Information Technologies | Alfa BK University",
  description: "Degrees in computer science, software engineering, cloud computing, and cybersecurity.",
};

export default function InformationTechnologiesPage() {
  return (
    <PageShell
      title="Faculty of Information Technologies"
      category="Faculties"
      description="The Faculty of Information Technologies educates future tech leaders, software architects, AI specialists, and network security experts through hands-on lab work."
      relatedLinks={[
        { label: "Faculty of Math & CS", href: "/faculties/mathematics-computer-science" },
        { label: "Programs", href: "/programs" },
        { label: "Apply Now", href: "/apply-now" },
      ]}
    />
  );
}
