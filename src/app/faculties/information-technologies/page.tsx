import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/faculties/FacultyPageTemplate";
import { facultiesData } from "@/components/data";

export const metadata: Metadata = {
  title: "Faculty of Information Technologies | Alfa BK University",
  description:
    "Software engineering, artificial intelligence, cybersecurity, and cloud computing for next-generation tech leaders.",
};

export default function InformationTechnologiesPage() {
  const faculty = facultiesData["information-technologies"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
