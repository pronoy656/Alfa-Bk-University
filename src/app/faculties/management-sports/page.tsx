import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/main-website/faculties/FacultyPageTemplate";
import { facultiesData } from "@/data";

export const metadata: Metadata = {
  title: "Faculty of Management in Sports | Alfa BK University",
  description:
    "Leading academic institution for sports leadership, club administration, athletic marketing, and recreation management.",
};

export default function ManagementSportsPage() {
  const faculty = facultiesData["management-sports"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
