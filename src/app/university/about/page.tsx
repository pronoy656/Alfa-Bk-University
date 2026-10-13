import type { Metadata } from "next";
import AboutView from "@/components/main-website/university/AboutView";

export const metadata: Metadata = {
  title: "About University | Alfa BK University",
  description:
    "Founded in 1993, Alfa BK University is one of the oldest private universities in Serbia with six faculties and 15 accredited programs.",
};

export default function AboutUniversityPage() {
  return <AboutView />;
}
