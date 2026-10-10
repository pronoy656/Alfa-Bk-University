import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function FacultiesSection() {
  const faculties = [
    {
      name: "Faculty of Finance, Trade and Accounting",
      href: "/faculties/finance-trade-accounting",
      levels: "BSc · MSc · PhD",
      programsCount: "7 programs",
      desc: "Economics, finance, marketing, trade, accounting, and auditing — shaping tomorrow's business leaders.",
    },
    {
      name: "Faculty of Foreign Languages",
      href: "/faculties/foreign-languages",
      levels: "BSc · MSc",
      programsCount: "2 programs",
      desc: "English language and literature — linguistics, translation, and language teaching.",
    },
    {
      name: "Faculty of Management in Sports",
      href: "/faculties/management-sports",
      levels: "BSc · MSc",
      programsCount: "2 programs",
      desc: "Sports management, marketing, and organization of sports events and institutions.",
    },
    {
      name: "Faculty of Information Technologies",
      href: "/faculties/information-technologies",
      levels: "BSc · MSc · PhD",
      programsCount: "3 programs",
      desc: "Information systems, software engineering, computer networks, and computer engineering.",
    },
    {
      name: "Faculty of Mathematics and Computer Sciences",
      href: "/faculties/mathematics-computer-science",
      levels: "BSc · MSc · PhD",
      programsCount: "3 programs",
      desc: "Mathematics, algorithms, data structures, and applied computer sciences.",
    },
    {
      name: "Faculty of Psychology",
      href: "/faculties/psychology",
      levels: "BSc · MSc",
      programsCount: "2 programs",
      desc: "General psychology, clinical psychology, organizational psychology, and counseling.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 fade-up-scroll">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754]">
              ACADEMICS
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
              Our 6 Faculties
            </h2>
            <p className="mt-2 text-base text-slate-600">
              19 accredited programs across Basic Higher Education, Master, and Doctoral levels.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1E36] hover:text-[#D5A754] transition shrink-0"
          >
            <span>View all programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Faculty Cards (3 columns x 2 rows or 2 columns on tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((fac, idx) => (
            <Link
              key={idx}
              href={fac.href}
              className={`group bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-amber-300/60 transition-all duration-300 flex flex-col justify-between fade-up-scroll delay-${(idx % 3 + 1) * 100}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {fac.levels}
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#D5A754] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[#0B1E36] group-hover:text-blue-700 transition-colors leading-snug">
                  {fac.name}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {fac.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">{fac.programsCount}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1E36] group-hover:text-[#D5A754] transition-colors">
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
