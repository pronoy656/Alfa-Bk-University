import type { Metadata } from "next";
import ContactView from "@/components/main-website/university/ContactView";

export const metadata: Metadata = {
  title: "Contact Us | Alfa BK University",
  description:
    "Get in touch with Alfa BK University. Administrative offices, faculty contacts, admissions inquiries, and main campus location in New Belgrade.",
};

export default function ContactPage() {
  return <ContactView />;
}
