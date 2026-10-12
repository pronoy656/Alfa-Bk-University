export default function PartnerUniversitiesSection() {
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
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up-scroll">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
          60 INTERNATIONAL PARTNER UNIVERSITIES
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-slate-600">
          {partners.map((partner, idx) => (
            <span
              key={idx}
              className="hover:text-[#0B1E36] transition-colors"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
