import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "e-Learning Platform | Alfa BK University",
  description: "Virtual classrooms, lecture recordings, course materials, and online assignments.",
};

export default function ELearningPage() {
  return (
    <PageShell
      title="e-Learning Platform"
      category="Electronic Services"
      description="The official distance learning and course material repository. Access video lectures, slide presentations, homework assignments, and academic forums for all enrolled subjects."
      relatedLinks={[
        { label: "e-Student Portal", href: "/e-student" },
        { label: "Faculty of IT", href: "/faculties/information-technologies" },
        { label: "Programs", href: "/programs" },
      ]}
    />
  );
}
