import type { Metadata } from "next";
import AlumniContent from "./AlumniContent";

export const metadata: Metadata = {
  title: "Alumni Association | Alfa BK University",
  description:
    "Join thousands of Alfa BK graduates who stay connected, give back, and grow together through the Alumni Association.",
};

export default function AlumniPage() {
  return <AlumniContent />;
}
