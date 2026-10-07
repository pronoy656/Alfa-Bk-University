import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      title: "Open day for future students",
      date: "15 Oct 2026",
      text: "Visit the campus, meet faculty leaders and learn how to enroll for the next academic year.",
    },
    {
      title: "New scholarship opportunities",
      date: "02 Nov 2026",
      text: "Academic excellence and merit-based scholarships are now available for selected programs.",
    },
    {
      title: "Student startup incubator launched",
      date: "18 Nov 2026",
      text: "A new entrepreneurship hub connects students with mentors, researchers and industry partners.",
    },
  ];

  return (
    <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Latest updates
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              News and events
            </h2>
          </div>
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <CalendarDays className="h-3.5 w-3.5" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
