import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

export default function CareersDegreeSection() {
  const industries = homeData.careersIndustries;

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Students Image */}
          <div className="lg:col-span-5 fade-up-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
              <img
                src="/8857b18bb800e6c1325a0a319d6a30f099236053.jpg"
                alt="Students career and industry preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Careers Copy */}
          <div className="lg:col-span-7 fade-up-scroll">
            <TitleSubtitle
              tag="CAREERS & INDUSTRY"
              title="WHAT CAN YOU DO WITH YOUR DEGREE?"
              subtitle="Connect your study choices to real sectors, roles and skills – from fintech and AI to diplomacy, sport, media and the arts."
              size="lg"
              uppercase
              titleClassName="lg:text-[42px]"
              maxWidth="none"
            />

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
