"use client";

import { ClassScheduleItem } from "./types";

interface TodayClassesListProps {
  classes: ClassScheduleItem[];
}

export default function TodayClassesList({ classes }: TodayClassesListProps) {
  return (
    <div className="w-full divide-y divide-slate-100">
      {classes.map((item, idx) => (
        <div
          key={item.id || idx}
          className="py-4 first:pt-4 last:pb-1 flex items-center justify-between"
        >
          <div>
            <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {item.instructor} · {item.room}
            </p>
          </div>
          <span className="text-xs font-bold text-[#C58B24] shrink-0">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}
