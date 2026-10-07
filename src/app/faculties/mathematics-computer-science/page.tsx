import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/faculties/FacultyPageTemplate";
import { facultiesData } from "@/components/data";

export const metadata: Metadata = {
  title: "Faculty of Mathematics and Computer Science | Alfa BK University",
  description:
    "Rigorous foundation in pure mathematics, applied algorithms, mathematical modeling, and computational theory.",
};

export default function MathematicsComputerSciencePage() {
  const faculty = facultiesData["mathematics-computer-science"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
