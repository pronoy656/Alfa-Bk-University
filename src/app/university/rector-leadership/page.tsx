import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Rector & Leadership | Alfa BK University",
  description:
    "Meet the academic and administrative leaders who guide Alfa BK University - shaping strategy, upholding quality, and opening doors to opportunity for every student.",
};

export default function RectorLeadershipPage() {
  const proRectors = [
    {
      role: "PRO-RECTOR FOR ACADEMIC AFFAIRS",
      name: "PROF. DR NATAŠA JOVANOVIĆ",
      desc: "Curriculum design, accreditation processes and quality assurance across all six faculties.",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      role: "PRO-RECTOR FOR RESEARCH",
      name: "PROF. DR BOJAN ĐORĐEVIĆ",
      desc: "Research strategy, innovation centres, grant applications and confirmed industry partnerships.",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    },
    {
      role: "PRO-RECTOR FOR INTERNATIONAL RELATIONS",
      name: "PROF. DR IVANA MARKOVIĆ",
      desc: "Erasmus+ coordination, bilateral agreements and international student mobility programmes.",
      photo:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const deans = [
    {
      initials: "AS",
      name: "Prof. dr Aleksandar Simić",
      faculty: "Faculty of Finance, Trade & Accounting",
      email: "dean.finance@alfabk.edu",
    },
    {
      initials: "VP",
      name: "Prof. dr Vesna Petrović",
      faculty: "Faculty of Foreign Languages",
      email: "dean.languages@alfabk.edu",
    },
    {
      initials: "MS",
      name: "Prof. dr Miloš Stanković",
      faculty: "Faculty of Management in Sports",
      email: "dean.sports@alfabk.edu",
    },
    {
      initials: "ZK",
      name: "Prof. dr Zoran Kovač",
      faculty: "Faculty of Information Technologies",
      email: "dean.it@alfabk.edu",
    },
    {
      initials: "LD",
      name: "Prof. dr Ljiljana Đorđević",
      faculty: "Faculty of Mathematics & Computer Sciences",
      email: "dean.math@alfabk.edu",
    },
    {
      initials: "DN",
      name: "Prof. dr Dragana Nikolić",
      faculty: "Faculty of Psychology",
      email: "dean.psychology@alfabk.edu",
    },
  ];

  const administration = [
    {
      role: "SECRETARY GENERAL",
      name: "Dragan Vukić",
      contact: "secretary@alfabk.edu",
      isEmail: true,
    },
    {
      role: "HEAD OF STUDENT SERVICES",
      name: "Jelena Savić",
      contact: "+381 11 260 7901",
      isEmail: false,
    },
    {
      role: "HEAD OF INTERNATIONAL OFFICE",
      name: "Ana Lazović",
      contact: "international@alfabk.edu",
      isEmail: true,
    },
    {
      role: "HEAD OF FINANCE & ADMINISTRATION",
      name: "Marko Ristić",
      contact: "finance@alfabk.edu",
      isEmail: true,
    },
    {
      role: "HEAD OF IT SERVICES",
      name: "Stefan Branković",
      contact: "it@alfabk.edu",
      isEmail: true,
    },
    {
      role: "HEAD OF LIBRARY",
      name: "Milena Todorović",
      contact: "library@alfabk.edu",
      isEmail: true,
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A1D36] text-white py-20 lg:py-24">
        {/* Background photo of students studying */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        {/* Balanced dark linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 via-[#0B1E36]/75 to-[#0B1E36]/50" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag: — ABOUT THE UNIVERSITY · LEADERSHIP */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
                ABOUT THE UNIVERSITY · LEADERSHIP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
              <span className="block text-white">RECTOR &amp;</span>
              <span className="block text-[#D5A754]">LEADERSHIP.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl font-normal">
              Meet the academic and administrative leaders who guide Alfa BK
              University - shaping strategy, upholding quality, and opening doors to
              opportunity for every student.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. UNIVERSITY LEADERSHIP (RECTOR PROFILE)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                RECTOR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              UNIVERSITY LEADERSHIP
            </h2>
          </div>

          {/* Two-Column Rector Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Rector Portrait */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="Prof. dr Rade Milošević"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Rector Bio & Office Contact */}
            <div className="lg:col-span-7">
              {/* Badge: RECTOR · ALFA BK UNIVERSITY */}
              <div className="inline-block bg-[#FDF9F0] border border-[#EADBBD] text-[#B88728] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                RECTOR · ALFA BK UNIVERSITY
              </div>

              {/* Rector Name */}
              <h3 className="text-3xl sm:text-4xl font-black text-[#0B1E36] tracking-tight uppercase">
                PROF. DR RADE MILOŠEVIĆ
              </h3>

              {/* Academic Credentials in Maroon */}
              <p className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#9E2A2B]">
                PhD in Economic Sciences · University of Belgrade
              </p>

              {/* Bio Paragraph */}
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Professor Milošević has led Alfa BK University since 2018, driving
                the university&apos;s digital transformation, international expansion,
                and research strategy. He holds a PhD in Economic Sciences from the
                University of Belgrade and has published over 40 peer-reviewed
                articles on macroeconomics and higher education policy.
              </p>

              {/* Rector's Office Contact Box */}
              <div className="mt-8 bg-[#FAF7F2] border border-[#EFE8DC] rounded-2xl p-6 max-w-lg space-y-3">
                <p className="text-[11px] font-bold tracking-widest text-[#B88728] uppercase">
                  RECTOR&apos;S OFFICE
                </p>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1E36] font-medium">
                  <Mail className="w-4 h-4 text-[#B88728] shrink-0" />
                  <a
                    href="mailto:rector@alfabk.edu"
                    className="hover:underline font-semibold"
                  >
                    rector@alfabk.edu
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1E36] font-medium">
                  <Phone className="w-4 h-4 text-[#B88728] shrink-0" />
                  <a href="tel:+381112607900" className="hover:underline font-semibold">
                    +381 11 260 7900
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EXECUTIVE ACADEMIC TEAM (PRO-RECTORS)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                PRO-RECTORS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              EXECUTIVE ACADEMIC TEAM
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl font-normal">
              Three Pro-Rectors lead the day-to-day academic, research and
              international operations of the university.
            </p>
          </div>

          {/* 3 Pro-Rector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proRectors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#B88728] uppercase block mb-1">
                      {item.role}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1E36] tracking-tight uppercase">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FACULTY DEANS
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#0C2442] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                DEANS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              FACULTY DEANS
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-2xl font-normal">
              Each faculty is led by a dean responsible for academic programmes,
              faculty hiring and student outcomes.
            </p>
          </div>

          {/* 6 Deans Grid (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deans.map((d, idx) => (
              <div
                key={idx}
                className="bg-[#14335C] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  {/* Initials Badge */}
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mb-4">
                    {d.initials}
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-normal">
                    {d.faculty}
                  </p>
                </div>

                <a
                  href={`mailto:${d.email}`}
                  className="mt-4 text-[11px] text-slate-400 hover:text-white transition-colors block truncate"
                >
                  {d.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SENIOR ADMINISTRATION
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#C49B55]" />
              <span className="text-xs font-bold tracking-widest text-[#C49B55] uppercase">
                ADMINISTRATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight uppercase">
              SENIOR ADMINISTRATION
            </h2>
          </div>

          {/* 6 Administration Cards (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {administration.map((adm, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#B88728] uppercase block mb-1">
                    {adm.role}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1E36] tracking-tight">
                    {adm.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  {adm.isEmail ? (
                    <a
                      href={`mailto:${adm.contact}`}
                      className="text-xs text-slate-500 hover:text-[#0B1E36] transition-colors"
                    >
                      {adm.contact}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      {adm.contact}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MISSION BANNER (EDUCATION THAT TRANSFORMS LIVES)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#9E2A2B] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-white/70" />
                <span className="text-xs font-bold tracking-widest text-white/90 uppercase">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                EDUCATION THAT<br />
                TRANSFORMS LIVES.
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/90 font-normal max-w-xl">
                Under the leadership of our Rector and faculty, Alfa BK University is
                committed to delivering world-class education, research, and creative
                practice - empowering students to become innovative leaders,
                entrepreneurs and responsible global citizens.
              </p>

              <div className="mt-8">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center border border-white/40 hover:bg-white hover:text-[#9E2A2B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition"
                >
                  EXPLORE OUR PROGRAMMES
                </Link>
              </div>
            </div>

            {/* Right Campus Building Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-black/20">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Alfa BK University Grand Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. YOUR FUTURE STARTS HERE (CTA BANNER)
          ========================================================================= */}
      <section className="relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0A1F3B]">
        {/* Modern university architecture at dusk background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0B1E36]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-[#0B1E36]/70" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center max-w-4xl">
          {/* Motto Accent */}
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#D5A754] mb-4">
            — UVEK PRVI - ALWAYS FIRST —
          </p>

          {/* Big Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight text-white">
            YOUR FUTURE STARTS HERE.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
            Find a programme, speak to admissions or explore how our leadership team
            can help you take the next step.
          </p>

          {/* 2 Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition"
            >
              FIND A PROGRAMME
            </Link>
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center bg-[#132A4A]/90 hover:bg-[#18345b] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-white/20 shadow-md transition"
            >
              CONTACT ADMISSIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
