import type { Metadata } from "next";
import InstituteKaricContent from "@/components/main-website/university/InstituteKaricContent";

export const metadata: Metadata = {
  title: "Institute Petar Karic | Alfa BK University",
  description:
    "The scientific, cultural, and social institute of Alfa BK University — dedicated to advancing knowledge, fostering dialogue, and honoring the legacy of Petar Karić.",
};

export default function InstituteKaricPage() {
  return <InstituteKaricContent />;
}
