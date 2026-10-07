"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When do Fall 2026 applications close?",
      answer:
        "The general application deadline for the Fall 2026 academic term is September 15, 2026. Early admissions and priority scholarship considerations close on July 31, 2026. International students requiring visa assistance are encouraged to submit their documents by June 30, 2026.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Yes, Alfa BK University provides merit-based academic scholarships covering up to 50% of annual tuition, as well as talent and athletic awards. All international applicants with a high GPA are automatically considered during admissions review.",
    },
    {
      question: "Can I study fully online?",
      answer:
        "Several undergraduate and graduate programs offer a distance learning option through our accredited e-classroom (Moodle) platform. Students can follow live lectures, access recorded materials, and coordinate with academic advisors online.",
    },
    {
      question: "Is the university internationally accredited?",
      answer:
        "Yes. Alfa BK University is accredited by the National Entity for Accreditation and Quality Assurance (NEAQA) in Serbia. All diplomas and ECTS credits conform to the Bologna declaration and are recognized throughout the European Higher Education Area (EQAR and ENQA frameworks).",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFCFF] border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] text-center mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl shadow-xs overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 focus:outline-none hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#0B1E36]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#D5A754]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
