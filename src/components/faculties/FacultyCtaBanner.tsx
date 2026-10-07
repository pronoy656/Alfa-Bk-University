import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import UniversityGradient from "@/components/shared/UniversityGradient";

interface FacultyCtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export default function FacultyCtaBanner({
  title = "Shape Your Future with Alfa BK University",
  subtitle = "Join a world-class community of learners, innovators and leaders.",
  buttonText = "Apply Now",
  href = "/apply-now",
}: FacultyCtaBannerProps) {
  return (
    <section className="bg-white py-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <UniversityGradient className="flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-white shadow-md sm:flex-row sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <GraduationCap className="h-6 w-6 text-[#EAB308]" />
            </div>
            <div>
              <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
              <p className="mt-1 text-xs text-slate-300">{subtitle}</p>
            </div>
          </div>

          <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
          >
            {buttonText}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </UniversityGradient>
      </div>
    </section>
  );
}
