import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared";

export interface CareerItem {
  number: string;
  title: string;
  description: string;
}

interface FacultyCareersSectionProps {
  careers?: CareerItem[];
  kicker?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
}

const defaultCareers: CareerItem[] = [
  {
    number: "01",
    title: "Translator & Interpreter",
    description:
      "Legal, literary, commercial and conference interpretation - in agencies, institutions or freelance.",
  },
  {
    number: "02",
    title: "Language Teacher & Educator",
    description:
      "Secondary and higher education, language schools, curriculum design and educational publishing.",
  },
  {
    number: "03",
    title: "Communications & PR Specialist",
    description:
      "Corporate communications, media relations, brand content and international marketing roles.",
  },
  {
    number: "04",
    title: "Diplomat & Cultural Attaché",
    description:
      "Ministry of Foreign Affairs, cultural institutes, international organisations and NGOs.",
  },
  {
    number: "05",
    title: "Content Writer & Editor",
    description:
      "Digital publishing, journalism, copywriting and editorial roles in English-language media.",
  },
  {
    number: "06",
    title: "Language Consultant & Researcher",
    description:
      "Applied linguistics research, language technology companies and postgraduate academic careers.",
  },
];

export default function FacultyCareersSection({
  careers = defaultCareers,
  kicker = "CAREERS & INDUSTRY · YOUR NEXT CHAPTER",
  title = "WHAT CAN YOU DO WITH THIS DEGREE?",
  buttonText = "CAREERS & INDUSTRY PAGE",
  buttonHref = "/career-industry",
}: FacultyCareersSectionProps) {
  return (
    <section className="bg-[#113565] py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
              {kicker}
            </p>
            <SectionHeading className="text-white uppercase mt-2">
              {title}
            </SectionHeading>
          </div>

          <div>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-lg border border-sky-400/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:border-[#D5A754] hover:text-white"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((card) => (
            <div
              key={card.number}
              className="group rounded-2xl border border-white/10 bg-[#16355C]/35 p-6 sm:p-7 transition duration-200 hover:border-amber-400/40 hover:bg-[#16355C]/50 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  {card.number}
                </span>
                <h3 className="mt-3 text-base font-bold text-white transition group-hover:text-amber-300">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
