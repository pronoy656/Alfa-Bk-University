"use client";

import React from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { newsEventsData } from "@/components/data";
import { UpcomingEvent } from "./types";

interface UpcomingEventsSectionProps {
  onRegisterEvent?: (event: UpcomingEvent) => void;
  onViewAllEvents?: () => void;
}

export default function UpcomingEventsSection({
  onRegisterEvent,
  onViewAllEvents,
}: UpcomingEventsSectionProps) {
  const { upcomingEvents } = newsEventsData as {
    upcomingEvents: UpcomingEvent[];
  };

  return (
    <div className="flex flex-col">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-5 w-1.5 rounded-full bg-[#D5A754]" />
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Upcoming Events
          </h2>
        </div>
        <button
          type="button"
          onClick={onViewAllEvents}
          className="group inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-700 transition cursor-pointer"
        >
          View All Events
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* List of 4 Event Cards */}
      <div className="mt-1 flex flex-col gap-3.5">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-2xs transition duration-300 hover:border-slate-200 hover:shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Thumbnail with Date overlay badge */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date overlay badge matching Figma JUL 20 */}
                <div className="absolute bottom-1.5 left-1.5 flex flex-col items-center justify-center rounded-md bg-[#0B1E36]/90 px-1.5 py-0.5 text-white backdrop-blur-xs shadow-xs">
                  <span className="text-[9px] font-bold tracking-wider uppercase text-slate-200 leading-tight">
                    {event.month}
                  </span>
                  <span className="text-xs font-extrabold leading-none text-white">
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Event Info */}
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug truncate sm:whitespace-normal sm:line-clamp-2">
                  {event.title}
                </h4>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3 text-slate-400" />
                    {event.time}
                  </span>
                </div>

                <div className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500 truncate">
                  <MapPin className="h-3 w-3 shrink-0 text-slate-400" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>

            {/* Register Button with Arrow Right */}
            <div className="flex items-center justify-end sm:shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-50">
              <button
                type="button"
                onClick={() => onRegisterEvent?.(event)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#C69234] hover:bg-[#B87A1E] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs transition active:scale-95 cursor-pointer"
              >
                Register
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
