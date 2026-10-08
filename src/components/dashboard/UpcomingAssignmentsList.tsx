"use client";

import { AssignmentItem } from "./types";

interface UpcomingAssignmentsListProps {
  assignments: AssignmentItem[];
}

export default function UpcomingAssignmentsList({
  assignments,
}: UpcomingAssignmentsListProps) {
  return (
    <div className="w-full divide-y divide-slate-100">
      {assignments.map((item, idx) => (
        <div
          key={item.id || idx}
          className="py-4 first:pt-4 last:pb-1 flex items-center justify-between gap-3"
        >
          <div>
            <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {item.course} · {item.due}
            </p>
          </div>
          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full shrink-0 ${
              item.statusType === "urgent"
                ? "bg-red-500 text-white shadow-xs"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
