"use client";

import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function TeacherRoutinePage() {
  const scheduleDays = [
    {
      day: "Monday",
      slots: [
        { title: "Database Management (CSE-305)", time: "09:00 - 10:30 AM", room: "Room 302", type: "Lecture" },
        { title: "Software Engineering (CSE-311)", time: "11:00 - 12:30 PM", room: "Room 204", type: "Lecture" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { title: "Database Lab (CSE-305L)", time: "09:00 - 11:00 AM", room: "Software Lab 2", type: "Lab" },
        { title: "Computer Architecture (CSE-315)", time: "02:00 - 03:30 PM", room: "Lab 3", type: "Lecture" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { title: "Faculty Office Consultation Hours", time: "11:00 - 01:00 PM", room: "Faculty Office 412", type: "Office Hours" },
        { title: "Data Structures (CSE-201)", time: "02:00 - 03:30 PM", room: "Auditorium B", type: "Lecture" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Faculty Class Routine
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Weekly timetable, laboratory sessions, and student consultation hours
        </p>
      </div>

      <div className="space-y-4">
        {scheduleDays.map((d) => (
          <div key={d.day} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
            <h3 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#C69234]" />
              {d.day}
            </h3>

            <div className="mt-3 divide-y divide-slate-100">
              {d.slots.map((s, i) => (
                <div key={i} className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{s.title}</h4>
                    <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {s.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-slate-400" />
                        {s.room}
                      </span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                    {s.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
