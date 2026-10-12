export default function StudentStoriesSection() {
  const stories = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      quote:
        '"I found the confidence to build an idea – and the team to make it real."',
      name: "Mila Petrović",
      role: "Computer Science student · STORY PLACEHOLDER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      quote:
        '"Belgrade became a second home, and Alfa BK opened doors across Europe."',
      name: "Omar Haddad",
      role: "International alumnus · STORY PLACEHOLDER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      quote:
        '"We teach students to question boldly, then give them the tools to act."',
      name: "Prof. Ana Jovanović",
      role: "Innovation mentor · STORY PLACEHOLDER",
    },
  ];

  return (
    <section className="py-20 bg-[#BE9F5A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 fade-up-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E36] tracking-tight uppercase">
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
