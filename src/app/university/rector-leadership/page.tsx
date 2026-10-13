import type { Metadata } from "next";
import RectorLeadershipView from "@/components/main-website/university/RectorLeadershipView";

export const metadata: Metadata = {
  title: "Rector & Leadership | Alfa BK University",
  description:
    "Meet the academic and administrative leaders who guide Alfa BK University - shaping strategy, upholding quality, and opening doors to opportunity for every student.",
};

export default function RectorLeadershipPage() {
  return <RectorLeadershipView />;
}
