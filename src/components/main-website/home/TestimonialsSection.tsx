import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

export default function TestimonialsSection() {
  const { testimonials, galleryImages, partnerUniversities: partners } = homeData;

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <TitleSubtitle
          align="center"
          tag="STUDENT VOICES"
          title="What Our Students Say"
          className="mb-14 fade-up-scroll"
        />

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition fade-up-scroll delay-${(idx + 1) * 150}`}
            >
              <div>
                <span className="text-[#D5A754] text-4xl font-serif font-bold leading-none block mb-4">
                  “
                </span>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <h3 className="font-bold text-sm text-[#0B1E36]">{t.author}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{t.degree}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Image Gallery Strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 fade-up-scroll delay-200">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 60 International Partner Universities Strip */}
        <div className="mt-16 pt-10 border-t border-slate-100 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            60 INTERNATIONAL PARTNER UNIVERSITIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-500">
            {partners.map((p, idx) => (
              <span key={idx} className="hover:text-[#0B1E36] transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
