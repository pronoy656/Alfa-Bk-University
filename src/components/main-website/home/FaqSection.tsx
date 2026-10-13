"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeData } from "@/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faqs } = homeData;

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E36] text-center mb-14 tracking-tight fade-up-scroll">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90 fade-up-scroll">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-6 px-1 focus:outline-none transition group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#0B1E36] group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-[#0B1E36] transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#BE9F5A]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6 pt-1 px-1 text-sm sm:text-base text-slate-600 leading-relaxed">
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
