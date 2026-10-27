import { ArrowUpRight } from "lucide-react";
import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

export default function LifeAtAlfaBkSection() {
  const { col1Moments, col2Moments, col3Moments } = homeData.lifeAtAlfaBk;

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <TitleSubtitle
          tag="CAMPUS FEED"
          title="LIFE AT ALFA BK"
          size="xl"
          uppercase
          className="mb-10 fade-up-scroll"
        />

        {/* Multi-Dimensional Asymmetric Grid (5 cols - 3 cols - 4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1: Wider landscape moments (5 of 12 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {col1Moments.map((item, idx) => (
              <div key={idx} className="flex flex-col fade-up-scroll">
                <div
                  className={`rounded-3xl overflow-hidden ${item.aspect} bg-slate-200 shadow-xs hover:shadow-md transition-shadow group`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#0B1E36] transition-colors cursor-pointer group">
                  <span>@alfabkuniversity · CAMPUS MOMENTS</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Narrower, taller portrait moments (3 of 12 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {col2Moments.map((item, idx) => (
              <div key={idx} className="flex flex-col fade-up-scroll">
                <div
                  className={`rounded-3xl overflow-hidden ${item.aspect} bg-slate-200 shadow-xs hover:shadow-md transition-shadow group`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#0B1E36] transition-colors cursor-pointer group">
                  <span>@alfabkuniversity · CAMPUS MOMENTS</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Medium-wide landscape moments (4 of 12 columns) */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-6">
            {col3Moments.map((item, idx) => (
              <div key={idx} className="flex flex-col fade-up-scroll">
                <div
                  className={`rounded-3xl overflow-hidden ${item.aspect} bg-slate-200 shadow-xs hover:shadow-md transition-shadow group`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#0B1E36] transition-colors cursor-pointer group">
                  <span>@alfabkuniversity · CAMPUS MOMENTS</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
