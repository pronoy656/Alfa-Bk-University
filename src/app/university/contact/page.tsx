import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "Contact Us | Alfa BK University",
  description: "Get in touch with Alfa BK University campus administration and student services.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      category="University"
      description="Find phone numbers, email addresses, working hours of our Student Service, and physical campus location in Belgrade."
      relatedLinks={[
        { label: "About University", href: "/university/about" },
        { label: "Apply Now", href: "/apply-now" },
        { label: "e-Student", href: "/e-student" },
      ]}
    />
  );
}
