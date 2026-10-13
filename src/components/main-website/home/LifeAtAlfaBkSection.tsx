import { ArrowUpRight } from "lucide-react";

export default function LifeAtAlfaBkSection() {
  const col1Moments = [
    {
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
      alt: "Sports and campus cheer",
      aspect: "aspect-[16/11]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      alt: "Students social gathering and study break",
      aspect: "aspect-[16/11]",
    },
  ];

  const col2Moments = [
    {
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      alt: "Campus workshop and community gathering",
      aspect: "aspect-[3/4.2]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      alt: "University choir and arts performance",
      aspect: "aspect-[3/4.2]",
    },
  ];

  const col3Moments = [
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
      alt: "Academic presentation and guest lecture",
      aspect: "aspect-[16/11]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
      alt: "Graduation celebration on campus",
      aspect: "aspect-[16/11]",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 fade-up-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BE9F5A]">
            CAMPUS FEED
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E36] tracking-tight uppercase">
            LIFE AT ALFA BK
          </h2>
        </div>

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
