"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface FeatureSplitData {
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  action: {
    text: string;
    href: string;
  };
}

interface InternationalFeatureSplitProps {
  data: FeatureSplitData;
  reverse?: boolean;
}

export default function InternationalFeatureSplit({
  data,
  reverse = false,
}: InternationalFeatureSplitProps) {
  const isInternal = data.action.href.startsWith("/");
  const ActionLink = isInternal ? Link : "a";

  return (
    <section className="bg-[#113565] text-white overflow-hidden py-16 lg:py-20 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo Column */}
          <div className={`lg:col-span-6 ${reverse ? "order-1 lg:order-2" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 h-[360px] sm:h-[440px] bg-[#0E2544]">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#113565]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              reverse ? "order-2 lg:order-1" : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#D5A754]" />
              <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
                {data.tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              {data.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {data.description}
            </p>

            <div className="mt-8 space-y-4">
              {data.points.map((pt, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${
                    idx !== data.points.length - 1 ? "pb-3 border-b border-white/15" : ""
                  }`}
                >
                  <span className="text-lg font-black text-[#D5A754]">0{idx + 1}</span>
                  <p className="text-sm font-semibold text-slate-100">{pt}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ActionLink
                href={data.action.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D5A754] hover:text-[#e4bd75] uppercase tracking-wider transition-colors"
              >
                {data.action.text} <ArrowRight className="h-4 w-4" />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
