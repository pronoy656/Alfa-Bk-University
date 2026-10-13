import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeData } from "@/data";

export default function BrowseStudyLevelsSection() {
  const levels = homeData.browseStudyLevels;

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 fade-up-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BE9F5A]">
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
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#BE9F5A]/40 transition-all duration-300 flex flex-col fade-up-scroll"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={level.image}
                  alt={level.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="block text-xs font-semibold text-[#BE9F5A] tracking-wide mb-2.5">
                    {level.duration}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B1E36] group-hover:text-blue-700 transition-colors">
                    {level.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {level.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-xs font-medium text-slate-500">
                    {level.programsCount}
                  </span>
                  <Link
                    href={level.href}
                    className="inline-flex items-center gap-1.5 font-bold text-xs tracking-wider uppercase text-[#0B1E36] group-hover:text-[#BE9F5A] transition-colors"
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
