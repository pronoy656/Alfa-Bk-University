import Link from "next/link";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";

interface PageShellProps {
  title: string;
  category?: string;
  description?: string;
  relatedLinks?: { label: string; href: string }[];
}

export default function PageShell({
  title,
  category = "Alfa BK University",
  description = "Official information and resources page.",
  relatedLinks,
}: PageShellProps) {
  return (
    <div className="min-h-[calc(100vh-180px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-blue-700 transition">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-600">{category}</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="font-semibold text-slate-900">{title}</span>
        </nav>

        {/* Header Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
            {category}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="mt-8 border-t border-slate-100 pt-8">
            <div className="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Page Status
              </h2>
              <p className="text-slate-700 text-base">
                This is the <strong className="text-slate-900">{title}</strong> page. All navigation routes are active, fully functional, and ready for detailed module content.
              </p>
            </div>
          </div>

          {/* Quick links if provided */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Related Pages
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition text-xs font-medium"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-700 text-sm font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              <span>Apply Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
