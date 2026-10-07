import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
  ExternalLink,
  Building2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About University | Alfa BK University",
  description:
    "Founded in 1993, Alfa BK University is one of the oldest private universities in Serbia with six faculties and 15 accredited programs.",
};

const historyTimeline = [
  {
    year: "1993",
    color: "bg-[#1F6264]", // deep teal
    text: "Alfa BK University (Karić Brothers) founded in Serbia",
  },
  {
    year: "1990s",
    color: "bg-[#BC5A3D]", // terracotta
    text: "Expansion of faculties and progressive curriculum",
  },
  {
    year: "2005",
    color: "bg-[#9A8A36]", // olive gold
    text: "Accreditation of programs across national and international partnerships",
  },
  {
    year: "2014",
    color: "bg-[#2563EB]", // bright royal blue
    text: "Digital transformation and integrated research platforms",
  },
  {
    year: "2024",
    color: "bg-[#B85C2A]", // warm bronze
    text: "30+ years of academic excellence & international accreditation",
  },
];

const institutionalPartners = [
  {
    title: "Karić Foundation:",
    description:
      "Supporting education, science, culture, and social welfare across Serbia and internationally.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    url: "https://karicfoundation.com",
    urlLabel: "karicfoundation.com",
  },
  {
    title: "Art Academy (Akademija Umetnosti):",
    description:
      "Cultivating creativity, visual arts, and media innovation across multidisciplinary domains.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    url: "https://akademijaumetnosti.edu.rs",
    urlLabel: "akademijaumetnosti.edu.rs",
  },
];

const leadershipCards = [
  {
    letter: "R",
    title: "University Leadership",
    subtitle: "Rector's Office",
    detail: "Academic Governance",
    href: "/university/contact",
  },
  {
    letter: "S",
    title: "Student Services",
    subtitle: "Enrolment & Support",
    detail: "+381 11 260 7900",
    href: "tel:+381112607900",
  },
  {
    letter: "I",
    title: "International Office",
    subtitle: "International Cooperation",
    detail: "Erasmus+ & Partnerships",
    href: "/university/international-cooperation",
  },
  {
    letter: "A",
    title: "Alumni Association",
    subtitle: "Graduate Network",
    detail: "Institute Petar Karić",
    href: "/university/alumni",
  },
];

const partnerUniversities = [
  "TU München",
  "Sorbonne Université",
  "University of Bologna",
  "KU Leuven",
  "Uppsala University",
  "National University of Singapore",
  "University of Toronto",
  "Seoul National University",
];

const businessPartners = [
  "TU München",
  "Sorbonne Université",
  "University of Bologna",
  "KU Leuven",
  "Uppsala University",
  "National University of Singapore",
  "University of Toronto",
  "Seoul National University",
];

export default function AboutUniversityPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0A192F] text-white">
        {/* Student studying backdrop with deep overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-[#0A192F]/70" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
              ABOUT US
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              30 Years of Academic Excellence
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Founded in 1993, Alfa BK University — also known as Karić Brothers
              University — is one of the oldest private universities in Serbia,
              with six faculties and 15 accredited programs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Mission & Vision Cards */}
            <div className="space-y-6 lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-[#0B1E36]">
                Mission & Vision
              </h2>

              {/* Our Mission Card with Gold Border */}
              <div className="rounded-2xl border-2 border-[#E8C26E] bg-white p-7 shadow-sm transition hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To deliver world-class education and research that empowers
                  students to become innovative leaders, entrepreneurs, and
                  responsible global citizens.
                </p>
              </div>

              {/* Our Vision Card with Navy Border */}
              <div className="rounded-2xl border-2 border-[#152B4D] bg-white p-7 shadow-sm transition hover:shadow-md">
                <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To be recognized among Europe&apos;s leading young
                  universities — inspiring knowledge and shaping the future
                  through excellence, technology, and international partnership.
                </p>
              </div>
            </div>

            {/* Right: Modern Campus Building Image */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                  alt="Alfa BK University Campus Building"
                  className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D5A754]">
                    University Headquarters
                  </p>
                  <p className="text-sm font-medium text-white/90">
                    Palmira Toljatija 3, New Belgrade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORY & STRATEGIC PARTNERSHIPS (Warm Ivory Section) */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Our History Timeline */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-extrabold text-[#0B1E36]">
                Our History
              </h2>

              <div className="mt-8 space-y-4">
                {historyTimeline.map((item) => (
                  <div
                    key={item.year}
                    className="flex items-center gap-4 transition duration-200 hover:translate-x-1"
                  >
                    {/* Year badge circle */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${item.color}`}
                    >
                      {item.year}
                    </div>

                    {/* Timeline box */}
                    <div className="flex-1 rounded-xl border border-slate-200/90 bg-white px-5 py-3.5 shadow-xs">
                      <p className="text-xs font-medium text-slate-800 sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Strategic Institutional Partnerships */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C4983D] uppercase">
                STRATEGIC PARTNERSHIPS
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[#0B1E36]">
                Institutional Partnerships
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {institutionalPartners.map((partner) => (
                  <div
                    key={partner.title}
                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition hover:shadow-md"
                  >
                    <div className="h-36 w-full overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-sm font-bold text-slate-900">
                        {partner.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {partner.description}
                      </p>
                      <div className="mt-auto pt-5">
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center rounded-lg bg-[#0B1E36] py-2.5 text-xs font-semibold text-white transition hover:bg-[#152B4D]"
                        >
                          Learn More
                        </a>
                        <p className="mt-2 text-center text-[11px] text-slate-400">
                          Linked to {partner.urlLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & BOARD OF TRUSTEES */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0B1E36]">
            Leadership & Board of Trustees
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-7 text-center shadow-xs transition hover:-translate-y-1 hover:border-[#D5A754]/50 hover:shadow-md"
              >
                {/* Circle with initial letter */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0E1E38] text-lg font-bold text-[#D5A754] shadow-inner transition group-hover:bg-[#152B4D]">
                  {card.letter}
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-[#0B1E36]">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#C4983D]">
                  {card.subtitle}
                </p>
                <p className="mt-1 text-xs text-slate-500">{card.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERNATIONAL PARTNERSHIPS */}
      <section className="border-t border-slate-100 bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0B1E36]">
            International Partnerships
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            60 partner universities across 4 continents provide exchange
            semesters, dual degrees, and joint research programs.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {partnerUniversities.map((uni) => (
              <span
                key={uni}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-[#D5A754] hover:bg-white"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS COOPERATION */}
      <section className="border-t border-slate-100 bg-white py-12 lg:pb-24 lg:pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0B1E36]">
            Business Cooperation
          </h2>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {businessPartners.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-[#D5A754] hover:bg-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
