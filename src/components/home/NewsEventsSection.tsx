import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function NewsEventsSection() {
  const news = [
    {
      category: "Achievements",
      date: "Jul 2, 2026",
      title: "Alfa BK ranked among Top 100 Young Universities worldwide",
      excerpt:
        "The 2026 global rankings recognize Alfa BK University's rapid rise in research output and international academic standing.",
      href: "/news-events",
    },
    {
      category: "Research",
      date: "Jun 24, 2026",
      title: "New AI Research Center opens with €12M in funding",
      excerpt:
        "The Center for Applied Artificial Intelligence will host 60 researchers across 8 laboratories.",
      href: "/news-events",
    },
    {
      category: "Admissions",
      date: "Jun 18, 2026",
      title: "Record 3,200 international applications for Fall 2026",
      excerpt:
        "Applications from 74 countries mark a 28% year-on-year increase for the upcoming academic cycle.",
      href: "/news-events",
    },
    {
      category: "Announcements",
      date: "Jun 9, 2026",
      title: "Alfa BK signs partnership with 5 European universities",
      excerpt:
        "New Erasmus+ agreements expand exchange opportunities for over 800 students annually.",
      href: "/news-events",
    },
  ];

  const events = [
    {
      title: "International Open Day 2026",
      dateInfo: "Jul 20, 2026 · 10:00 · Main Campus Auditorium",
      href: "/news-events",
    },
    {
      title: "AI & Society Summer Conference",
      dateInfo: "Aug 4, 2026 · 09:00 · Innovation Hub",
      href: "/news-events",
    },
    {
      title: "Freshers Orientation Week",
      dateInfo: "Sep 14, 2026 · All day · Campus-wide",
      href: "/news-events",
    },
    {
      title: "Career Fair — 120+ Employers",
      dateInfo: "Oct 2, 2026 · 11:00 · Sports & Events Arena",
      href: "/news-events",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFCFF] border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Latest News (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36]">
                Latest News
              </h2>
              <Link
                href="/news-events"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1E36] hover:text-[#D5A754] transition"
              >
                <span>All news</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {news.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white rounded-xl border border-slate-200/80 p-5 hover:shadow-md hover:border-amber-300/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-bold text-base text-[#0B1E36] group-hover:text-blue-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Events (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36]">
                Upcoming Events
              </h2>
              <Link
                href="/news-events"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1E36] hover:text-[#D5A754] transition"
              >
                <span>All events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((evt, idx) => (
                <Link
                  key={idx}
                  href={evt.href}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 hover:shadow-md hover:border-amber-300/50 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0B1E36] text-[#D5A754] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#0B1E36] group-hover:text-blue-700 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {evt.dateInfo}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
