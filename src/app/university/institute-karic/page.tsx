import type { Metadata } from "next";
import {
  Microscope,
  Film,
  GraduationCap,
  BookOpen,
  Globe,
  Award,
  Settings,
  TrendingUp,
  Megaphone,
  Smartphone,
  Users,
  Scale,
} from "lucide-react";
import { universityData } from "@/components/data";

export const metadata: Metadata = {
  title: "Institute Petar Karic | Alfa BK University",
  description:
    "The scientific, cultural, and social institute of Alfa BK University — dedicated to advancing knowledge, fostering dialogue, and honoring the legacy of Petar Karić.",
};

export default function InstituteKaricPage() {
  const { instituteKaric } = universityData;

  const activityIcons: Record<string, React.ReactNode> = {
    Microscope: <Microscope className="h-5 w-5 text-amber-600" />,
    Film: <Film className="h-5 w-5 text-amber-600" />,
    GraduationCap: <GraduationCap className="h-5 w-5 text-amber-600" />,
    BookOpen: <BookOpen className="h-5 w-5 text-amber-600" />,
    Globe: <Globe className="h-5 w-5 text-amber-600" />,
    Award: <Award className="h-5 w-5 text-amber-600" />,
  };

  const projectIcons: Record<string, React.ReactNode> = {
    Settings: <Settings className="h-7 w-7 text-slate-800" />,
    TrendingUp: <TrendingUp className="h-7 w-7 text-blue-600" />,
    Megaphone: <Megaphone className="h-7 w-7 text-amber-500" />,
    Cpu: <Smartphone className="h-7 w-7 text-teal-600" />,
    Users: <Users className="h-7 w-7 text-emerald-600" />,
    Scale: <Scale className="h-7 w-7 text-rose-600" />,
  };

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/90 to-[#102444]/80" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
              ABOUT UNIVERSITY
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {instituteKaric.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base max-w-2xl">
              {instituteKaric.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE INSTITUTE */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#C82A2A] uppercase">
                {instituteKaric.kicker}
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl">
                {instituteKaric.heading}
              </h2>

              <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                {instituteKaric.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Photo + Metrics Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={instituteKaric.image}
                    alt="Institute Petar Karic Collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* 3 Metric Stats */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 bg-white p-4 text-center">
                  {instituteKaric.stats.map((stat, idx) => (
                    <div key={idx} className="px-2 py-1">
                      <div className="text-xl font-black text-slate-900 sm:text-2xl">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS OF ACTIVITY */}
      <section className="bg-[#FAF9F6] py-16 lg:py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
              ACTIVITIES
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Areas of Activity
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instituteKaric.activities.map((act) => (
              <div
                key={act.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition hover:shadow-xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                  {activityIcons[act.icon]}
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900 sm:text-base">
                  {act.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTITUTE RESEARCH PROJECTS & INITIATIVES */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-widest text-[#D5A754] uppercase">
              OUR SECTION
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Institute Research Projects & Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instituteKaric.researchProjects.map((proj) => (
              <div
                key={proj.title}
                className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 pt-10 text-center shadow-2xs transition hover:shadow-xs"
              >
                {/* Colored Top Accent Bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{ backgroundColor: proj.color }}
                />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100">
                  {projectIcons[proj.icon]}
                </div>

                <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                  {proj.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
