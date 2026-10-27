import Link from "next/link";
import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

export default function NewsEventsSection() {
  const articles = homeData.newsArticles;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <TitleSubtitle
          tag="THE LATEST"
          title="NEWS & EVENTS"
          size="xl"
          uppercase
          className="mb-10 fade-up-scroll"
        />

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex flex-col fade-up-scroll"
            >
              {/* Rounded Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 shadow-sm mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tag metadata */}
              <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">
                {item.category} · {item.date} · {item.type}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B1E36] group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
