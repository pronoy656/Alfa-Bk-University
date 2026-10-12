import Link from "next/link";

export default function NewsEventsSection() {
  const articles = [
    {
      category: "TECHNOLOGY",
      date: "14 OCT",
      type: "SAMPLE",
      title: "AI Lab Open Week",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      href: "/news-events",
    },
    {
      category: "COMMUNITY",
      date: "02 NOV",
      type: "SAMPLE",
      title: "Graduation Day 2026",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      href: "/news-events",
    },
    {
      category: "ARTS",
      date: "19 NOV",
      type: "SAMPLE",
      title: "Creative Futures Forum",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      href: "/news-events",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 fade-up-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BE9F5A]">
            THE LATEST
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E36] tracking-tight uppercase">
            NEWS & EVENTS
          </h2>
        </div>

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
