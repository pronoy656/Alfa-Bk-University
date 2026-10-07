import PageShell from "@/components/shared/PageShell";

export const metadata = {
  title: "News & Events | Alfa BK University",
  description: "Latest news, academic conferences, guest lectures, and campus events.",
};

export default function NewsEventsPage() {
  return (
    <PageShell
      title="News & Events"
      category="University Media"
      description="Stay up to date with the latest announcements, international conferences, guest lectures, student awards, and campus activities at Alfa BK University."
      relatedLinks={[
        { label: "About University", href: "/university/about" },
        { label: "Programs", href: "/programs" },
        { label: "Contact", href: "/university/contact" },
      ]}
    />
  );
}
