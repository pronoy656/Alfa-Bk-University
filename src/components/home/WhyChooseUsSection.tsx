import {
  BriefcaseBusiness,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock3,
  Star,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Career-first education",
      text: "Programs designed with industry demands and practical skill-building in mind.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Global perspective",
      text: "Partnerships, mobility programs and international cooperation opportunities.",
      icon: Globe2,
    },
    {
      title: "Student support",
      text: "Advising, mentoring and academic services throughout the student journey.",
      icon: ShieldCheck,
    },
  ];

  const programs = [
    "Undergraduate studies",
    "Master's programs",
    "Doctoral research",
    "Professional development",
    "Exchange and mobility",
    "Career services",
  ];

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Why choose us
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Future-ready education with real impact
          </h2>
          <div className="mt-8 space-y-5">
            {reasons.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Academic focus
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Education built for success
              </h2>
            </div>
            <div className="hidden rounded-full border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 sm:block">
              2026/2027 intake
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {program}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                  Student life
                </p>
                <div className="mt-2 text-2xl font-bold">
                  A campus that supports growth
                </div>
              </div>
              <MapPin className="h-8 w-8 text-sky-300" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-sky-300" /> Flexible scheduling
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-sky-300" /> Mentorship network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
