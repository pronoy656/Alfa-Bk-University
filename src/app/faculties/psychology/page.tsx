import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/faculties/FacultyPageTemplate";
import { facultiesData } from "@/components/data";

export const metadata: Metadata = {
  title: "Faculty of Psychology | Alfa BK University",
  description:
    "Clinical, cognitive, developmental, and organizational psychology for the understanding of human behavior.",
};

export default function PsychologyPage() {
  const faculty = facultiesData["psychology"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
