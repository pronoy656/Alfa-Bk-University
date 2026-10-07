import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/faculties/FacultyPageTemplate";
import { facultiesData } from "@/components/data";

export const metadata: Metadata = {
  title: "Faculty of Foreign Languages | Alfa BK University",
  description:
    "Anglistics at BSc and MSc level — preparing graduates for careers in linguistics, translation, teaching, and communication.",
};

export default function ForeignLanguagesPage() {
  const faculty = facultiesData["foreign-languages"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
