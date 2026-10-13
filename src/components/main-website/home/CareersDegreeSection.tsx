import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function CareersDegreeSection() {
  const industries = [
    "Technology & AI",
    "Business & Finance",
    "Creative Economy",
    "Sport & Wellbeing",
    "Public Affairs",
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Students Image */}
          <div className="lg:col-span-5 fade-up-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Students career and industry preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Careers Copy */}
          <div className="lg:col-span-7 fade-up-scroll">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BE9F5A]">
              CAREERS & INDUSTRY
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1E36] tracking-tight leading-tight uppercase">
              WHAT CAN YOU DO WITH YOUR DEGREE?
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
              Connect your study choices to real sectors, roles and skills – from fintech and AI to diplomacy, sport, media and the arts.
            </p>

            {/* Industry Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {industries.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[#EAF0F7] text-[#1E3A5F] text-xs font-semibold px-4 py-2 rounded-full border border-blue-100/60"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Career Office Link */}
            <div className="mt-8">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1E36] hover:text-[#BE9F5A] transition group"
              >
                <Compass className="w-4 h-4 text-[#BE9F5A]" />
                <span>MEET THE CAREER OFFICE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
