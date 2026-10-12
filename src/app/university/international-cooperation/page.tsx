import type { Metadata } from "next";
import InternationalCooperationContent from "./InternationalCooperationContent";

export const metadata: Metadata = {
  title: "International Cooperation | Alfa BK University",
  description:
    "Alfa BK University maintains active academic partnerships with 60+ universities across 40+ countries — enabling student exchanges, joint research, and dual-degree programs.",
};

export default function InternationalCooperationPage() {
  return <InternationalCooperationContent />;
}
