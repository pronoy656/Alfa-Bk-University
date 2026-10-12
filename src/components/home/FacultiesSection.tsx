import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FacultiesSection() {
  const faculties = [
    {
      name: "Finance, Trade &\nAccounting",
      href: "/faculties/finance-trade-accounting",
      bg: "bg-[#998472]",
      hoverBg: "hover:bg-[#8d7967]",
    },
    {
      name: "Information\nTechnologies",
      href: "/faculties/information-technologies",
      bg: "bg-[#257DD4]",
      hoverBg: "hover:bg-[#1f6ebc]",
    },
    {
      name: "Management in Sport",
      href: "/faculties/management-sports",
      bg: "bg-[#708090]",
      hoverBg: "hover:bg-[#627180]",
    },
    {
      name: "Foreign Languages",
      href: "/faculties/foreign-languages",
      bg: "bg-[#DF5C55]",
      hoverBg: "hover:bg-[#cb4f48]",
    },
    {
      name: "Economics & Political\nSciences",
      href: "/programs",
      bg: "bg-[#BE9F5A]",
      hoverBg: "hover:bg-[#ab8e4e]",
    },
    {
      name: "Arts",
      href: "/programs",
      bg: "bg-[#BC3B7B]",
      hoverBg: "hover:bg-[#a6306a]",
    },
    {
      name: "Mathematics &\nComputer Science",
      href: "/faculties/mathematics-computer-science",
      bg: "bg-[#6F52B2]",
      hoverBg: "hover:bg-[#60449e]",
    },
    {
      name: "Entrepreneurship",
      href: "/programs",
      bg: "bg-[#96B837]",
      hoverBg: "hover:bg-[#84a32e]",
    },
    {
      name: "Creative Industries",
      href: "/programs",
      bg: "bg-[#E27429]",
      hoverBg: "hover:bg-[#cb651f]",
    },
    {
      name: "Law",
      href: "/programs",
      bg: "bg-[#8B2929]",
      hoverBg: "hover:bg-[#772121]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 fade-up-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DF5C55]">
            02 · ACADEMIC COMMUNITY
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E36] tracking-tight uppercase">
            OUR FACULTIES
          </h2>
        </div>

        {/* 10 Colorful Faculty Cards Grid (5 columns x 2 rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {faculties.map((fac, idx) => (
            <Link
              key={idx}
              href={fac.href}
              className={`group ${fac.bg} ${fac.hoverBg} text-white rounded-xl p-5 h-36 sm:h-40 flex flex-col justify-between transition-colors duration-200 fade-up-scroll`}
            >
              <h3 className="font-bold text-base sm:text-lg leading-snug whitespace-pre-line text-white">
                {fac.name}
              </h3>

              <div className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-white/85 group-hover:text-white transition-colors">
                <span className="group-hover:underline underline-offset-2">VIEW FACULTY</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>

        {/* Small sample disclaimer */}
        <p className="mt-6 text-[11px] text-slate-400 tracking-wide fade-up-scroll">
          Faculty names and academic details shown as sample / unverified content.
        </p>
      </div>
    </section>
  );
}
