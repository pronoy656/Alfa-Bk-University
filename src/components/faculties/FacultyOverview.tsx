import React from "react";
import Link from "next/link";
import { Check, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FacultyContact } from "@/components/data";

interface FacultyOverviewProps {
  about: string;
  whyStudyHere: string[];
  contact: FacultyContact;
}

export default function FacultyOverview({
  about,
  whyStudyHere,
  contact,
}: FacultyOverviewProps) {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: About & Why Study */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              About the Faculty
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {about}
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-slate-900">
              Why Study Here?
            </h3>
            <ul className="mt-5 space-y-4">
              {whyStudyHere.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAB308] text-slate-950">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact & Apply Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            {/* Faculty Contact Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <h3 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                FACULTY CONTACT
              </h3>
              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="h-4 w-4 text-[#EAB308]" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition hover:text-blue-600"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="h-4 w-4 text-[#EAB308]" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="transition hover:text-blue-600"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-4 w-4 text-[#EAB308]" />
                  <span>{contact.address}</span>
                </div>
              </div>

              <Link
                href="/university/contact"
                className="mt-6 block w-full rounded-lg bg-[#0B1E36] py-3 text-center text-xs font-semibold text-white transition hover:bg-[#152B4D]"
              >
                Contact Faculty
              </Link>
            </div>

            {/* Enrolment / Apply Card */}
            <div className="rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-6 shadow-xs">
              <span className="text-xs font-bold tracking-wider text-amber-700 uppercase">
                ENROLMENT 2026/2027
              </span>
              <h4 className="mt-2 text-base font-bold text-slate-900">
                Ready to apply?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Applications are open for all programs. Choose this faculty and
                start your application.
              </p>
              <Link
                href="/apply-now"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#EAB308] py-3 text-xs font-bold text-slate-950 transition hover:bg-[#CA8A04]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
