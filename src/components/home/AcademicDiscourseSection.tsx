import Link from "next/link";
import { BookOpen, Users, FolderUp, Globe } from "lucide-react";

export default function AcademicDiscourseSection() {
  const features = [
    {
      title: "4 Academic Journals",
      icon: BookOpen,
      iconColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      title: "Annual Conferences",
      icon: Users,
      iconColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
    {
      title: "University Repositoria",
      icon: FolderUp,
      iconColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    },
    {
      title: "International Cooperation",
      icon: Globe,
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    },
  ];

  return (
    <section className="py-20 bg-[#0B1E36] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="fade-up-scroll">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D5A754]">
              ACADEMIC EXCELLENCE
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight">
              Fostering Academic Discourse and Global Dialogue
            </h2>
            <p className="mt-5 text-base text-slate-300 leading-relaxed">
              Through our four scholarly journals—Reči, Management in Sports, Alfa Tech, and Journal of Social Sciences—and a cycle of international conferences, we publish leading research and build global academic partnerships. Our University Repositoria ensures knowledge is accessible.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:bg-white/[0.08] transition fade-up-scroll delay-${(idx + 1) * 100}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 ${item.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-white">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/university/documents"
                className="inline-flex items-center justify-center bg-[#D5A754] hover:bg-[#c29645] text-slate-950 font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg shadow-[#D5A754]/20 transition cursor-pointer"
              >
                View Our Publications
              </Link>
            </div>
          </div>

          {/* Right Column Editorial Image */}
          <div className="relative fade-up-scroll delay-200">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Academic Journals and Discourse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
