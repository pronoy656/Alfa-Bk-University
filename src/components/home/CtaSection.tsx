import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#0B1E36]">
      {/* Background Campus Architecture at Dusk */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Deep Navy Atmospheric Overlay */}
      <div className="absolute inset-0 bg-[#0B1E36]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-[#0B1E36]/70" />

      {/* Center Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center max-w-4xl fade-up-scroll">
        {/* Motto Accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 sm:w-12 bg-[#BE9F5A]" />
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#BE9F5A]">
            UVEK PRVI - ALWAYS FIRST
          </p>
          <div className="h-[1px] w-8 sm:w-12 bg-[#BE9F5A]" />
        </div>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight drop-shadow-md">
          <span className="text-white">YOUR FUTURE </span>
          <span className="text-[#BE9F5A]">STARTS HERE.</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Join a community of thinkers, creators, and future leaders. Applications open for 2025/26.
        </p>

        {/* 2 Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply-now"
            className="inline-flex items-center justify-center bg-[#BE9F5A] hover:bg-[#ad8f4e] text-[#0B1E36] font-bold text-sm px-8 py-3.5 rounded-lg shadow-xl shadow-amber-900/20 transition cursor-pointer"
          >
            Apply Now - 2025/26
          </Link>
          <Link
            href="/university/documents"
            className="inline-flex items-center justify-center bg-[#132A4A]/90 hover:bg-[#18345b] text-white font-bold text-sm px-8 py-3.5 rounded-lg border border-white/20 shadow-xl transition cursor-pointer"
          >
            Download Prospectus
          </Link>
        </div>
      </div>
    </section>
  );
}
