import type { Metadata } from "next";
import DocumentLibraryContent from "@/components/main-website/university/DocumentLibraryContent";

export const metadata: Metadata = {
  title: "Document Library | Alfa BK University",
  description:
    "University statutes, accreditation certificates, program documents, enrollment guides, and legally required publications at Alfa BK University.",
};

export default function DocumentLibraryPage() {
  return <DocumentLibraryContent />;
}
