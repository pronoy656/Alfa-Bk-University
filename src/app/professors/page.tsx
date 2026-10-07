import type { Metadata } from "next";
import ProfessorsDirectory from "@/components/professors/ProfessorsDirectory";

export const metadata: Metadata = {
  title: "Professors & Teaching Assistants | Alfa BK University",
  description:
    "Meet the experienced educators and research experts who inspire, mentor and guide our students toward a brighter future.",
};

export default function ProfessorsPage() {
  return <ProfessorsDirectory />;
}
