import React from "react";

export interface KeyInfoItem {
  kicker: string;
  text: string;
}

interface FacultyKeyInfoBarProps {
  items?: KeyInfoItem[];
  facultySlug?: string;
}

const facultyKeyInfoMap: Record<string, KeyInfoItem[]> = {
  "foreign-languages": [
    {
      kicker: "WHY STUDY HERE?",
      text: "Expert faculty, EU-recognised qualifications and a career-first curriculum.",
    },
    {
      kicker: "WHAT WILL I LEARN?",
      text: "Anglistics, linguistics theory, translation, teaching methodology and cross-cultural communication.",
    },
    {
      kicker: "WHAT CAN I BECOME?",
      text: "Translator, teacher, diplomat, communications specialist or language consultant.",
    },
    {
      kicker: "HOW DO I APPLY?",
      text: "Applications open for 2026/2027. Contact the faculty office or apply online.",
    },
  ],
  "finance-trade-accounting": [
    {
      kicker: "WHY STUDY HERE?",
      text: "Expert faculty, EU-recognised qualifications and a career-first curriculum.",
    },
    {
      kicker: "WHAT WILL I LEARN?",
      text: "Economics, financial analysis, global trade, corporate banking and accounting.",
    },
    {
      kicker: "WHAT CAN I BECOME?",
      text: "Financial analyst, auditor, trade specialist, corporate banker or consultant.",
    },
    {
      kicker: "HOW DO I APPLY?",
      text: "Applications open for 2026/2027. Contact the faculty office or apply online.",
    },
  ],
};

const defaultKeyInfo: KeyInfoItem[] = [
  {
    kicker: "WHY STUDY HERE?",
    text: "Expert faculty, EU-recognised qualifications and a career-first curriculum.",
  },
  {
    kicker: "WHAT WILL I LEARN?",
    text: "Anglistics, linguistics theory, translation, teaching methodology and cross-cultural communication.",
  },
  {
    kicker: "WHAT CAN I BECOME?",
    text: "Translator, teacher, diplomat, communications specialist or language consultant.",
  },
  {
    kicker: "HOW DO I APPLY?",
    text: "Applications open for 2026/2027. Contact the faculty office or apply online.",
  },
];

export default function FacultyKeyInfoBar({
  items,
  facultySlug = "foreign-languages",
}: FacultyKeyInfoBarProps) {
  const resolvedItems =
    items || facultyKeyInfoMap[facultySlug] || defaultKeyInfo;

  return (
    <section className="bg-[#0B1E36] text-white border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {resolvedItems.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx !== 0 ? "lg:border-l lg:border-slate-800/80 lg:pl-6" : ""
              }`}
            >
              <h4 className="text-[11px] font-bold tracking-wider text-[#D5A754] uppercase">
                {item.kicker}
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
