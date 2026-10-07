import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 p-8 text-white shadow-xl sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Start your journey
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your future begins at Alfa BK University
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              Discover academic programs, meet our mentors and take a confident
              step toward a successful career in a world that is constantly
              changing.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-800 shadow-md transition hover:bg-blue-50"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
