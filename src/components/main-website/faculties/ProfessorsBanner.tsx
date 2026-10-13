import React from "react";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import UniversityGradient from "@/components/shared/UniversityGradient";

interface ProfessorsBannerProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  href?: string;
}

const defaultAvatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1580894732484-934d40232efd?auto=format&fit=crop&w=120&q=80",
];

export default function ProfessorsBanner({
  title = "Meet Our Professors & Teaching Assistants",
  subtitle = "Get to know the experts who guide, mentor and inspire our students.",
  linkText = "View Faculty Members",
  href = "/professors",
}: ProfessorsBannerProps) {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-6 text-white shadow-md lg:flex-row lg:p-7">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:flex">
              <Users className="h-6 w-6 text-[#EAB308]" />
            </div>
            <div>
              <h3 className="text-base font-bold sm:text-lg">{title}</h3>
              <p className="mt-1 text-xs text-slate-300">{subtitle}</p>
            </div>
          </div>

          {/* Overlapping Avatars & CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
            <div className="flex -space-x-3 overflow-hidden">
              {defaultAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Faculty member"
                  className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>

            <Link
              href={href}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              {linkText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </UniversityGradient>
      </div>
    </section>
  );
}
