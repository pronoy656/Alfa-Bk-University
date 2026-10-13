import type { Metadata } from "next";
import LibraryView from "@/components/main-website/university/LibraryView";

export const metadata: Metadata = {
  title: "Central Library & Digital Repository | Alfa BK University",
  description:
    "Explore physical and digital holdings, academic journals, e-books, and research publications at Alfa BK University Central Library.",
};

export default function LibraryPage() {
  return <LibraryView />;
}
