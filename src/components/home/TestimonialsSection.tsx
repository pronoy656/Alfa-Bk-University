export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The e-classroom and mentorship at Alfa BK gave me the skills to land a software engineering role in Berlin before graduation.",
      author: "Amina Hassan",
      degree: "BSc Computer Science '25 — Kenya",
    },
    {
      quote:
        "World-class professors, real consulting projects, and a network across 60 partner universities. Truly transformational.",
      author: "Luka Petrović",
      degree: "MBA Global Business '24 — Serbia",
    },
    {
      quote:
        "The FinTech Venture Lab connected me with investors. My startup was incubated on campus and is now funded.",
      author: "Chen Wei",
      degree: "MSc FinTech '25 — China",
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      alt: "Students collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      alt: "Academics and literature",
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      alt: "Modern laboratory",
    },
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      alt: "Campus life and sports",
    },
  ];

  const partners = [
    "TU München",
    "Sorbonne Université",
    "University of Bologna",
    "KU Leuven",
    "Uppsala University",
    "National University of Singapore",
    "University of Toronto",
    "Seoul National University",
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754]">
            STUDENT VOICES
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
            What Our Students Say
          </h2>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition"
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
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
