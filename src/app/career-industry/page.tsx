import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Users,
  Target,
  ArrowRight,
  Award,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button, Card, Badge } from "@/components/shared";

export const metadata: Metadata = {
  title: "Career & Industry | Alfa BK University",
  description:
    "Bridging academic excellence with real-world industry leaders. Discover career development services, internship placements, and corporate partnerships.",
};

export default function CareerIndustryPage() {
  const stats = [
    { label: "Graduate Employment Rate", value: "94%", detail: "within 6 months of graduation" },
    { label: "Corporate & Industry Partners", value: "200+", detail: "leading global & local organizations" },
    { label: "Internship Placements", value: "1,500+", detail: "annual paid internship opportunities" },
    { label: "Recruiter Networking Events", value: "25+", detail: "job fairs and workshops per year" },
  ];

  const services = [
    {
      title: "Individual Career Coaching",
      desc: "One-on-one sessions with seasoned HR advisors to optimize CVs, tailor cover letters, and prepare for high-stakes interviews.",
      icon: Users,
    },
    {
      title: "Corporate Internship Placement",
      desc: "Guaranteed access to verified internships across our 6 faculties, granting real industry experience before graduation.",
      icon: Briefcase,
    },
    {
      title: "Industry Mentorship Program",
      desc: "Connect with high-achieving alumni and senior executives who provide ongoing professional guidance and insider insights.",
      icon: Target,
    },
    {
      title: "Annual Career & Tech Fairs",
      desc: "Direct recruitment days on campus where Fortune 500 companies and regional champions interview students on the spot.",
      icon: Building2,
    },
  ];

  const partnerSectors = [
    {
      name: "Banking & Financial Services",
      desc: "Commercial banks, investment firms, audit conglomerates, and fintech disruptors.",
      partners: ["Banca Intesa", "UniCredit Bank", "Erste Bank", "KPMG", "Deloitte"],
    },
    {
      name: "Technology & Software Engineering",
      desc: "Tier-1 software development houses, cloud service providers, and AI startups.",
      partners: ["Microsoft Development Center", "Nordeus", "Schneider Electric", "Endava"],
    },
    {
      name: "Legal, Media & Sports Management",
      desc: "National law associations, broadcast networks, sports federations, and marketing agencies.",
      partners: ["Serbian Olympic Committee", "Arena Channels Group", "Karanovic & Partners"],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="Career & Industry"
        title="Connecting Ambition with Global Industry"
        description="At Alfa BK University, your career starts on day one. We partner directly with leading financial institutions, IT powerhouses, and industry pioneers to turn academic knowledge into thriving professional careers."
        backLink={{ label: "Back to Home", href: "/" }}
      />

      {/* 2. STATS BANNER */}
      <section className="container mx-auto px-4 -mt-10 relative z-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-[#113565] tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-800">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAREER CENTER SERVICES */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="info" className="mb-2">
            Career Development Center
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Empowering Your Professional Journey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From your freshman orientation through executive graduation, our dedicated Career Services team equips you with the competitive skills employers demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Card
                key={i}
                variant="default"
                padding="lg"
                className="hover:-translate-y-1 transition-transform border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#113565] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. INDUSTRY PARTNER SECTORS */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="warning" className="mb-2">
              Industry Partnerships
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Trusted by 200+ Premier Employers
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Alfa BK University maintains active Memorandums of Understanding (MoU) with domestic and multinational leaders across every key academic field.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerSectors.map((sector, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#113565] mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {sector.desc}
                  </p>
                  <div className="space-y-2.5">
                    {sector.partners.map((partner, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-blue-700 inline-flex items-center gap-1">
                    Direct recruitment pipelines <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT & RECRUITMENT CTA */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#113565] via-[#1a4884] to-[#113565] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#E5A83B] uppercase">
              Looking to Hire or Partner?
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              Connect with Alfa BK University Career Center
            </h2>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              Whether you are an employer looking for top-tier interns, or a student preparing your initial resume, we are here to support your success.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-200">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#E5A83B]" /> careers@alfa.edu.rs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#E5A83B]" /> +381 11 2674 164
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/university/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E5A83B] text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-[#d4962c] transition shadow"
            >
              Contact Career Office
            </Link>
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition border border-white/20"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
