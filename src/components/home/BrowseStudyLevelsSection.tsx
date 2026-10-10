import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrowseStudyLevelsSection() {
  const levels = [
    {
      title: "Basic Higher Education",
      duration: "3 years · 180 ECTS",
      programsCount: "11 programs",
      description:
        "Undergraduate programs covering the fundamentals of your chosen discipline. Same enrollment requirements across all 6 faculties.",
      href: "/programs?level=undergraduate",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Master Programs",
      duration: "2 years · 120 ECTS",
      programsCount: "5 programs",
      description:
        "Advanced specialization for graduates looking to deepen expertise and take on leadership roles in their field.",
      href: "/programs?level=master",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Doctoral Studies",
      duration: "3 years · 180 ECTS",
      programsCount: "3 programs",
      description:
        "Research-intensive doctoral programs for those who want to advance knowledge and contribute to academic and scientific communities.",
      href: "/programs?level=doctoral",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFCFF] border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 fade-up-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754]">
            PROGRAMS
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
            Browse by Study Level
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Serbian higher education offers three study levels. Choose the one that fits your goals.
          </p>
        </div>

        {/* 3 Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-300/60 transition-all duration-300 flex flex-col fade-up-scroll delay-${(idx + 1) * 150}`}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={level.image}
                  alt={level.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md mb-3">
                    {level.duration}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1E36] group-hover:text-blue-700 transition-colors">
                    {level.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {level.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-xs font-medium text-slate-500">
                    {level.programsCount}
                  </span>
                  <Link
                    href={level.href}
                    className="inline-flex items-center gap-1 font-semibold text-[#0B1E36] group-hover:text-[#D5A754] transition-colors"
                  >
                    <span>Browse</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
