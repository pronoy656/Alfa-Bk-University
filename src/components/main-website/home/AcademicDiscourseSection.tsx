import Link from "next/link";
import { BookOpen, Users, FolderUp, Globe, LucideIcon } from "lucide-react";
import { TitleSubtitle } from "@/components/shared";
import { homeData } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  FolderUp,
  Globe,
};

export default function AcademicDiscourseSection() {
  const { academicDiscourse } = homeData;

  return (
    <section className="py-24 bg-[#0E2038] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="fade-up-scroll">
            <TitleSubtitle
              tag={academicDiscourse.tag}
              title={academicDiscourse.title}
              subtitle={academicDiscourse.description}
              theme="dark"
              maxWidth="none"
              titleClassName="lg:text-[42px]"
            />

            {/* 4 Feature Cards in 2x2 Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {academicDiscourse.features.map((item, idx) => {
                const Icon = iconMap[item.icon] || BookOpen;
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
