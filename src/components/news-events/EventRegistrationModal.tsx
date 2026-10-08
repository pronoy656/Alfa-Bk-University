"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, MapPin, Clock } from "lucide-react";
import { UpcomingEvent, AllEventItem } from "./types";

interface EventRegistrationModalProps {
  event: UpcomingEvent | AllEventItem | null;
  onClose: () => void;
}

export default function EventRegistrationModal({
  event,
  onClose,
}: EventRegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studyLevel: "Bachelor (Undergraduate)",
  });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after success
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="bg-[#0B1E36] p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
          <span className="text-[10px] font-bold tracking-widest text-[#D5A754] uppercase">
            EVENT REGISTRATION
          </span>
          <h3 className="mt-1 text-lg sm:text-xl font-bold leading-snug text-white pr-8">
            {event.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            {"time" in event && event.time && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-[#D5A754]" />
                {event.time}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#D5A754]" />
                {event.location}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Registration Confirmed!
              </h4>
              <p className="mt-2 text-xs text-slate-500 max-w-sm mx-auto">
                Thank you for registering. We have sent the confirmation ticket and event details to{" "}
                <span className="font-semibold text-slate-700">{formData.email || "your email"}</span>.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-xl bg-[#0B1E36] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#152D4D] transition cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marko Petrovic"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B1E36] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. marko.p@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B1E36] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+381 11 123 4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0B1E36] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interested Program Level
                </label>
                <select
                  value={formData.studyLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, studyLevel: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#0B1E36] focus:outline-hidden"
                >
                  <option>Bachelor (Undergraduate)</option>
                  <option>Master Academic Studies</option>
                  <option>Doctoral Studies (PhD)</option>
                  <option>General Visitor / High School Senior</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#C69234] hover:bg-[#B87A1E] px-5 py-2 text-xs font-bold text-white shadow-sm transition cursor-pointer"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
