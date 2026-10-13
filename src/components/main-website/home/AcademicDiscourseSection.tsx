import Link from "next/link";
import { BookOpen, Users, FolderUp, Globe } from "lucide-react";

export default function AcademicDiscourseSection() {
  const features = [
    {
      title: "4 Academic Journals",
      icon: BookOpen,
      iconColor: "text-amber-400 bg-amber-400/10",
    },
    {
      title: "Annual Conferences",
      icon: Users,
      iconColor: "text-amber-400 bg-amber-400/10",
    },
    {
      title: "University Repositoria",
      icon: FolderUp,
      iconColor: "text-amber-400 bg-amber-400/10",
    },
    {
      title: "International Cooperation",
      icon: Globe,
      iconColor: "text-cyan-400 bg-cyan-400/10",
    },
  ];

  return (
    <section className="py-24 bg-[#0E2038] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="fade-up-scroll">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BE9F5A]">
              ACADEMIC EXCELLENCE
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              Fostering Academic Discourse and Global Dialogue
            </h2>
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              Through our four scholarly journals—Reči, Management in Sports, Alfa Tech, and Journal of Social Sciences—and a cycle of international conferences, we publish leading research and build global academic bridges. Our University Repositoria ensures knowledge is accessible.
            </p>

            {/* 4 Feature Cards in 2x2 Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#162D4D] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm text-slate-200">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Gold Button */}
            <div className="mt-8">
              <Link
                href="/university/documents"
                className="inline-flex items-center justify-center bg-[#BE9F5A] hover:bg-[#ad8f4e] text-[#0B1E36] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition cursor-pointer"
              >
                View Our Publications
              </Link>
            </div>
          </div>

          {/* Right Column Editorial Image */}
          <div className="fade-up-scroll">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Academic Journals and Discourse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
