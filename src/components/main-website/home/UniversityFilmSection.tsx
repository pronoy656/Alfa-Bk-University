"use client";

import { Play } from "lucide-react";

export default function UniversityFilmSection() {
  return (
    <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center overflow-hidden">
      {/* Background Campus Panorama & Graduation Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Deep Navy/Blue Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 bg-[#0B1E36]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-transparent to-[#0B1E36]/60" />

      {/* Center Film Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 fade-up-scroll">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#BE9F5A] mb-8">
          WATCH THE UNIVERSITY FILM
        </p>

        {/* Circular Gold Play Button */}
        <button
          onClick={() => {
            alert("Alfa BK University Film player opening...");
          }}
          aria-label="Play University Film"
          className="group w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#BE9F5A] hover:bg-[#ad8f4e] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#0B1E36] text-[#0B1E36] ml-1 group-hover:scale-105 transition-transform" />
        </button>

        {/* Big Bold Headline */}
        <h2 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-wider uppercase drop-shadow-md">
          THIS IS ALFA BK
        </h2>
      </div>
    </section>
  );
}
