"use client";

import { ChevronRight, Play } from "lucide-react";
import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

export default function CampusLifeSection() {
  const points = homeData.campusLifePoints;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Photo & Community Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Student Group Photo */}
          <div className="relative fade-up-scroll">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-slate-100">
              <img
                src="/24d20d9426b01552e1f0e76c4f41a02bda9d7aae.jpg"
                alt="Alfa BK University Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Copy & Checklist */}
          <div className="fade-up-scroll delay-200">
            <TitleSubtitle
              tag="CAMPUS LIFE"
              title="A Global Community of 12,458 Students"
              subtitle="Students from 74 countries call Alfa BK home. With 80+ clubs, modern accommodation, dedicated international student support, and a vibrant city campus, your university experience extends far beyond the classroom."
              maxWidth="none"
            />

            {/* Checklist */}
            <div className="mt-6 space-y-3.5">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D5A754] shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner: Watch the Campus Tour */}
        <div className="mt-14 relative rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-64 lg:h-72 fade-up-scroll delay-150">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/006cc1cfa442fbac675b6f6549e2b7458668d501.jpg')",
            }}
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#0B1E36]/75 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <button
              onClick={() => {
                alert("Campus Tour Video: Virtual tour player opening...");
              }}
              className="group flex items-center gap-5 focus:outline-none p-4 rounded-2xl hover:bg-white/5 transition"
            >
              {/* Play Button */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#D5A754] group-hover:bg-[#c29645] flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-105 transition-all duration-200 shrink-0">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 ml-1" />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition">
                  Watch the Campus Tour
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  3 minutes inside Alfa BK University
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
