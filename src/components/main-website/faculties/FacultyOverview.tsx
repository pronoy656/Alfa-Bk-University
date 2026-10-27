import React from "react";
import Link from "next/link";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { FacultyContact } from "@/data";

interface FacultyOverviewProps {
  about: string;
  whyStudyHere: string[];
  contact: FacultyContact;
  facultyTitle?: string;
  facultySlug?: string;
}

export default function FacultyOverview({
  about,
  whyStudyHere,
  contact,
  facultyTitle = "Faculty of Foreign Languages",
  facultySlug = "foreign-languages",
}: FacultyOverviewProps) {
  // Resolved headline for "About The Faculty"
  const resolvedHeadline =
    facultySlug === "finance-trade-accounting"
      ? "ECONOMICS, FINANCE AND TRADE - SINCE 1993."
      : facultySlug === "foreign-languages"
      ? "FOREIGN LANGUAGES & APPLIED LINGUISTICS - SINCE 1993."
      : `${facultyTitle.replace("Faculty of ", "").toUpperCase()} - SINCE 1993.`;

  return (
    <section className="bg-[#FAF8F5] py-14 lg:py-20 border-b border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: About & Why Study */}
          <div className="lg:col-span-8">
            {/* Kicker & Title */}
            <div className="h-[2px] w-8 bg-[#D5A754] mb-3" />
            <p className="text-xs font-bold uppercase tracking-wider text-[#D5A754]">
              ABOUT THE FACULTY
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B1E36] tracking-tight uppercase leading-tight mt-2">
              {resolvedHeadline}
            </h2>

            {/* About Paragraph */}
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600">
              {about}{" "}
              <span className="text-[#B91C1C] font-medium">
                Enrolment figures and accreditation status are subject to annual confirmation.
              </span>
            </p>

            {/* Why Study Here */}
            <div className="mt-9">
              <h3 className="text-xs sm:text-sm font-black text-[#0B1E36] tracking-wider uppercase mb-4">
                WHY STUDY HERE?
              </h3>
              <ul className="space-y-3.5">
                {whyStudyHere.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#D5A754] text-slate-950 shadow-2xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                      {point}
                      {idx === whyStudyHere.length - 1 && (
                        <span className="text-[#B91C1C]"> (provisional)</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sidebar (Contact & Apply) */}
          <div className="space-y-6 lg:col-span-4">
            {/* Faculty Contact Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <h3 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                FACULTY CONTACT
              </h3>
              <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="h-4 w-4 text-[#D5A754] shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition hover:text-blue-600 font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="h-4 w-4 text-[#D5A754] shrink-0" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="transition hover:text-blue-600 font-medium"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-4 w-4 text-[#D5A754] shrink-0" />
                  <span className="font-medium">{contact.address}</span>
                </div>
              </div>

              <Link
                href="/university/contact"
                className="mt-6 block w-full rounded-lg bg-[#0B1E36] py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#132A4A] shadow-xs cursor-pointer"
              >
                CONTACT FACULTY
              </Link>
            </div>

            {/* Enrolment / Apply Card */}
            <div className="rounded-2xl border border-amber-200/80 bg-[#FFFDF5] p-6 shadow-xs">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                ENROLMENT 2026/2027
              </span>
              <h4 className="mt-1 text-base sm:text-lg font-black text-[#0B1E36] uppercase tracking-tight">
                READY TO APPLY?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Applications are open for all programmes. Choose this faculty and start your application today.
              </p>
              <Link
                href="/apply-now"
                className="mt-5 block w-full rounded-lg bg-[#C69A4C] hover:bg-[#b5893d] py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-950 transition shadow-xs cursor-pointer"
              >
                APPLY NOW +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
