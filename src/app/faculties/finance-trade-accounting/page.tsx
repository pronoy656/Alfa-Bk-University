import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  TrendingUp,
  Megaphone,
  Briefcase,
  Calculator,
  PieChart,
  Layers,
  Award,
  Users,
  BookOpen,
  Landmark,
  Globe,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Faculty of Finance, Trade and Accounting | Alfa BK University",
  description:
    "Educating economists, finance professionals, accountants, and business leaders for the modern economy. Undergraduate, Master, and Doctoral programs.",
};

const bscPrograms = [
  {
    title: "Economics and Finance",
    description:
      "Explore economic systems, financial markets and data-driven decision making for a sustainable future.",
    icon: TrendingUp,
    iconColor: "bg-[#2563EB]",
    duration: "3 years • 180 ECTS",
    badge: "BSc",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    href: "/programs/economics-and-finance",
  },
  {
    title: "Marketing Management and Trade",
    description:
      "Build skills in marketing strategy, global trade and business management in a digital era.",
    icon: Megaphone,
    iconColor: "bg-[#7C3AED]",
    duration: "3 years • 180 ECTS",
    badge: "BSc",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    href: "/programs/marketing-management-and-trade",
  },
  {
    title: "Trade",
    description:
      "Focused on domestic and international trade operations, logistics, customs, and commercial law.",
    icon: Briefcase,
    iconColor: "bg-[#0D9488]",
    duration: "3 years • 180 ECTS",
    badge: "BSc",
    badgeStyle: "bg-teal-50 text-teal-700 border-teal-200",
    href: "/programs/trade",
  },
  {
    title: "Accounting and Auditing",
    description:
      "Trains accounting and auditing professionals with deep knowledge of financial reporting, taxation, and audit.",
    icon: Calculator,
    iconColor: "bg-[#DB2777]",
    duration: "3 years • 180 ECTS",
    badge: "BSc",
    badgeStyle: "bg-pink-50 text-pink-700 border-pink-200",
    href: "/programs/accounting-and-auditing",
  },
  {
    title: "Economics",
    description:
      "Broad economics program covering micro and macroeconomic theory, economic policy, and quantitative analysis.",
    icon: PieChart,
    iconColor: "bg-[#EA580C]",
    duration: "3 years • 180 ECTS",
    badge: "BSc",
    badgeStyle: "bg-orange-50 text-orange-700 border-orange-200",
    href: "/programs/economics",
  },
];

const professorAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
];

const facultyStats = [
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

export default function FinanceTradeAccountingPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white">
        {/* Candlestick / Market Graphic Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/95 to-[#0B1E36]/80" />

        <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            All Faculties
          </Link>

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D5A754] uppercase">
              FACULTY
            </span>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Faculty of Finance, Trade and Accounting
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Educating economists, finance professionals, accountants, and
              business leaders for the modern economy.
            </p>

            {/* Badges Row */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-slate-800/90 px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                7 programs
              </span>
              <span className="rounded-full border border-blue-500/40 bg-blue-900/50 px-3.5 py-1 text-xs font-medium text-blue-200">
                BSc available
              </span>
              <span className="rounded-full border border-purple-500/40 bg-purple-900/50 px-3.5 py-1 text-xs font-medium text-purple-200">
                MSc available
              </span>
              <span className="rounded-full border border-amber-500/40 bg-amber-900/50 px-3.5 py-1 text-xs font-medium text-amber-200">
                PhD available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & SIDEBAR CONTACT */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: About & Why Study */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                About the Faculty
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The Faculty of Finance, Trade and Accounting is one of the
                founding faculties of Alfa BK University, established in 1993. It
                offers programs at Basic Higher Education, Master, and Doctoral
                levels in economics, finance, marketing, trade, and accounting.
                The faculty combines strong theoretical foundations with
                practical, industry-oriented education and active connections to
                the Serbian and regional financial sectors.
              </p>

              <h3 className="mt-10 text-xl font-extrabold text-slate-900">
                Why Study Here?
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Experienced faculty with active backgrounds in banking, finance, and business consulting",
                  "Modern curriculum aligned with EU standards and Serbian regulatory framework",
                  "Strong alumni network across Serbian, regional, and international financial sectors",
                  "Practical workshops, internships, and career placement support with 200+ partner employers",
                ].map((point) => (
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
                      href="mailto:finance@alfabk.edu"
                      className="transition hover:text-blue-600"
                    >
                      finance@alfabk.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="h-4 w-4 text-[#EAB308]" />
                    <a
                      href="tel:+381112607901"
                      className="transition hover:text-blue-600"
                    >
                      +381 11 260 7901
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="h-4 w-4 text-[#EAB308]" />
                    <span>Palmira Toljatija 3, Belgrade</span>
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
                  Applications are open for all programs. Choose this faculty
                  and start your application.
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

      {/* 3. PROGRAMS SECTION */}
      <section className="border-t border-slate-100 bg-[#FAF8F5] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Programs
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              7 accredited programs — click any card to view the full program
              details, semester structure, and documents.
            </p>
          </div>

          {/* Undergraduate (BSc) Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bscPrograms.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-2xs ${prog.iconColor}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`rounded-md border px-2.5 py-0.5 text-xs font-semibold ${prog.badgeStyle}`}
                      >
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-slate-900 transition group-hover:text-blue-600">
                      {prog.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {prog.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                    <span className="font-medium text-slate-500">
                      {prog.duration}
                    </span>
                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      View Program
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Master Program Section */}
          <div className="mt-14">
            <h3 className="text-xs font-bold tracking-wider text-purple-700 uppercase">
              MASTER PROGRAM (MSC • 2 YEARS • 120 ECTS)
            </h3>

            <div className="group mt-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:border-purple-400 hover:shadow-md">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white shadow-2xs">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700">
                        Finance
                      </h4>
                      <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                        MSc
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600">
                      Advanced study in financial analysis, investment, and
                      corporate finance.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-3 md:border-t-0 md:pt-0">
                  <span className="text-xs font-medium text-slate-500">
                    2 years • 120 ECTS
                  </span>
                  <Link
                    href="/programs/master-finance"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View Program
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Doctoral Studies Section */}
          <div className="mt-10">
            <h3 className="text-xs font-bold tracking-wider text-amber-700 uppercase">
              DOCTORAL STUDIES (PHD • 3 YEARS • 180 ECTS)
            </h3>

            <div className="group mt-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition duration-200 hover:border-amber-400 hover:shadow-md">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D97706] text-white shadow-2xs">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
                        Economy and Business
                      </h4>
                      <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                        PhD
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600">
                      Doctoral research program in economics and business for
                      academic and applied research careers.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-3 md:border-t-0 md:pt-0">
                  <span className="text-xs font-medium text-slate-500">
                    3 years • 180 ECTS
                  </span>
                  <Link
                    href="/programs/doctoral-economy-business"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View Program
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR PROFESSORS & TEACHING ASSISTANTS BANNER */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E] p-6 text-white shadow-md lg:flex-row lg:p-7">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:flex">
                <Users className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-base font-bold sm:text-lg">
                  Meet Our Professors & Teaching Assistants
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Get to know the experts who guide, mentor and inspire our
                  students.
                </p>
              </div>
            </div>

            {/* Overlapping Avatars & CTA Button */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3 overflow-hidden">
                {professorAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Professor"
                    className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                View Faculty Members
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS BAR */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:grid-cols-4 lg:p-8">
            {facultyStats.map((stat) => {
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

      {/* 6. CTA SECTION */}
      <section className="bg-white py-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E] p-8 text-white shadow-md sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <GraduationCap className="h-6 w-6 text-[#EAB308]" />
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Shape Your Future with Alfa BK University
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Join a world-class community of learners, innovators and
                  leaders.
                </p>
              </div>
            </div>

            <Link
              href="/apply-now"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
