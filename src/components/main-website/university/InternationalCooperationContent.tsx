import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { PageHero, TitleSubtitle, SectionHeading, Subtitle } from "@/components/shared";
import {
  hero,
  stats,
  mobilityPrograms,
  europeanPartners,
  visitingProfessors,
  internationalStudents,
  globalPartners,
  officeContact,
  cta,
} from "@/data/internationalCooperation";
import InternationalFeatureSplit from "./InternationalFeatureSplit";

const badgeStyles: Record<string, string> = {
  "ERASMUS+ EXCHANGE": "#C26B1E",
  "STAFF MOBILITY": "#1E70A2",
  "JOINT RESEARCH": "#4F46E5",
  "DUAL DEGREE": "#0D825E",
};

export default function InternationalCooperationContent() {

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Hero Banner */}
      <PageHero
        kicker={hero.kicker}
        title={
          <>
            {hero.titlePrefix}{" "}
            <span className="text-[#D5A754]">{hero.titleHighlight}</span>
          </>
        }
        description={hero.description}
        bgImage={hero.bgImage}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaExplore.href}
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-[#0A1C30] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-sm transition"
            >
              {hero.ctaExplore.text}
            </a>
            <a
              href={hero.ctaContact.href}
              className="inline-flex items-center justify-center bg-[#132A4A]/80 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded border border-white/20 shadow-sm transition"
            >
              {hero.ctaContact.text}
            </a>
          </div>
        }
        stats={stats}
      />

      {/* 2. Mobility Programs */}
      <section id="programs" className="py-20 lg:py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            kicker="INTERNATIONAL MOBILITY"
            withGoldLine
            uppercase
            title="PROGRAMS THAT TAKE YOU FURTHER."
            subtitle="Explore exchange opportunities for undergraduate and postgraduate students, faculty and staff. Terms, grant amounts and eligible destinations vary by academic year."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobilityPrograms.map((prog) => (
              <div
                key={prog.id}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#D5A754]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 rounded-lg px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md border border-white/15"
                    style={{ backgroundColor: badgeStyles[prog.badge] || "#0B2545" }}
                  >
                    {prog.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight uppercase group-hover:text-[#113565] transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {prog.description}
                    </p>

                    {/* Numbered Benefits */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      {prog.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D5A754]/15 text-[#9A7527] text-xs font-black shrink-0">
                            0{pIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={prog.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1E36] group-hover:text-[#D5A754] transition-colors"
                    >
                      <span>{prog.action}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Alfa BK Mobility
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. European Partners */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            kicker="ERASMUS+ NETWORK"
            withGoldLine
            uppercase
            title="EUROPEAN PARTNER UNIVERSITIES."
            subtitle="Alfa BK is an active Erasmus+ member. Students may apply for exchange semesters at these partner institutions. All partnerships are subject to annual renewal and place availability."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {europeanPartners.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#FBFBFA] p-5 shadow-xs hover:border-[#D5A754] hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <img
                      src={`/flags/${item.flagCode}.svg`}
                      alt={item.country}
                      className="w-8 h-5.5 object-cover rounded shadow-2xs border border-slate-200"
                    />
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0B1E36] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.country}</p>
                  <p className="mt-3 text-xs text-slate-600 font-medium">{item.disciplines}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-400 italic">
            * Illustrative list of partner institutions. Availability, exchange places and grant amounts
            are confirmed annually and vary by faculty. Contact the International Office for current information.
          </p>
        </div>
      </section>

      {/* 4. Visiting Professors Split */}
      <InternationalFeatureSplit data={visitingProfessors} />

      {/* 5. International Students Split (Reversed layout) */}
      <InternationalFeatureSplit data={internationalStudents} reverse />

      {/* 6. Global Partners */}
      <section className="py-20 lg:py-24 bg-[#F6F5F0] border-t border-slate-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TitleSubtitle
            kicker="GLOBAL NETWORK"
            withGoldLine
            uppercase
            title="PARTNERS BEYOND EUROPE."
            subtitle="Our cooperative network extends to leading institutions across Asia, the Americas and the Middle East. All partnerships are provisional and subject to verification."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {globalPartners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[#D5A754] hover:shadow-sm transition"
              >
                <img
                  src={`/flags/${p.flagCode}.svg`}
                  alt={p.country}
                  className="w-9 h-6 object-cover rounded shadow-2xs border border-slate-200 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm text-[#0B1E36] truncate">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.country}</p>
                  <p className="text-[11px] font-semibold text-[#1E70A2] mt-1">{p.type}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-300 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. International Office Contact */}
      <section id="contact" className="bg-[#08172B] text-white py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {officeContact.stripPhotos.map((url, idx) => (
              <div key={idx} className="h-44 sm:h-52 rounded-xl overflow-hidden relative shadow border border-white/10 bg-[#0F2642]">
                <img
                  src={url}
                  alt={`International Office ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              </div>
            ))}
          </div>

          <TitleSubtitle
            kicker={officeContact.tag}
            withGoldLine
            theme="dark"
            uppercase
            title={officeContact.title}
            subtitle={officeContact.description}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeContact.contacts.map((c, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0F2642] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D5A754] mb-4">
                    {c.type === "EMAIL" && <Mail className="h-5 w-5" />}
                    {c.type === "PHONE" && <Phone className="h-5 w-5" />}
                    {c.type === "LOCATION & HOURS" && <MapPin className="h-5 w-5" />}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    {c.type}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block text-base font-bold text-white hover:text-[#D5A754] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-bold text-white">
                      {c.value}
                    </p>
                  )}
                </div>
                <p className="mt-4 text-xs text-slate-400">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0A1F3B]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-[#0B1E36]/80" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
            {cta.motto}
          </p>

          <SectionHeading className="uppercase text-white">
            {cta.title}
          </SectionHeading>

          <Subtitle className="mt-4 text-slate-300 max-w-xl">
            {cta.description}
          </Subtitle>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {cta.buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className={`inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition ${
                  idx === 0
                    ? "bg-[#D5A754] hover:bg-[#c29645] text-slate-950"
                    : "bg-[#132A4A]/90 hover:bg-[#18345b] text-white border border-white/20"
                }`}
              >
                {btn.text}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
