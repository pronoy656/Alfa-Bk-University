import React from "react";
import { Users, BookOpen, Landmark, Globe } from "lucide-react";

const defaultStats = [
  {
    icon: Users,
    iconBg: "bg-blue-50 text-blue-600",
    value: "3,500+",
    label: "Active Students",
  },
  {
    icon: BookOpen,
    iconBg: "bg-purple-50 text-purple-600",
    value: "25+",
    label: "Programs Offered",
  },
  {
    icon: Landmark,
    iconBg: "bg-teal-50 text-teal-600",
    value: "120+",
    label: "Faculty Members",
  },
  {
    icon: Globe,
    iconBg: "bg-sky-50 text-sky-600",
    value: "50+",
    label: "International Partners",
  },
];

export default function FacultyStats() {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:grid-cols-4 lg:p-8">
          {defaultStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
