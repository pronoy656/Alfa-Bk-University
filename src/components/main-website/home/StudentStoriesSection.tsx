import { Sora } from "next/font/google";
import { homeData } from "@/data";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700"],
});

export default function StudentStoriesSection() {
  const stories = homeData.studentStories;

  return (
    <section className="py-20 bg-[#BE9F5A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 fade-up-scroll">
          <h2
            className={`${sora.className} font-bold text-[#0B1E36] uppercase`}
            style={{
              fontFamily: `${sora.style.fontFamily}, var(--font-sora), 'Sora', sans-serif`,
              fontWeight: 700,
              fontSize: "38px",
              lineHeight: "108%",
              letterSpacing: "-0.03em",
            }}
          >
            STUDENT & ALUMNI STORIES
          </h2>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 fade-up-scroll"
            >
              <div>
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-slate-100 mb-5">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <p className="text-base font-bold text-[#0B1E36] leading-snug">
                  {story.quote}
                </p>
              </div>

              {/* Author & Designation */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-[#0B1E36]">
                  {story.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {story.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
