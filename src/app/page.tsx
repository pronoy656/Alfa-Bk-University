import HeroSection from "@/components/home/HeroSection";
import BrowseStudyLevelsSection from "@/components/home/BrowseStudyLevelsSection";
import FacultiesSection from "@/components/home/FacultiesSection";
import AcademicDiscourseSection from "@/components/home/AcademicDiscourseSection";
import CareersDegreeSection from "@/components/home/CareersDegreeSection";
import UniversityFilmSection from "@/components/home/UniversityFilmSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import StudentStoriesSection from "@/components/home/StudentStoriesSection";
import LifeAtAlfaBkSection from "@/components/home/LifeAtAlfaBkSection";
import PartnerUniversitiesSection from "@/components/home/PartnerUniversitiesSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-x-clip">
      {/* 1. Hero Section + Key Statistics Bar (Image 1) */}
      <HeroSection />

      {/* 2. Browse by Study Level (Image 1) */}
      <BrowseStudyLevelsSection />

      {/* 3. 02 · Academic Community - Our Faculties (Image 1) */}
      <FacultiesSection />

      {/* 4. Academic Excellence - Fostering Academic Discourse and Global Dialogue (Image 2) */}
      <AcademicDiscourseSection />

      {/* 5. Careers & Industry - What Can You Do With Your Degree? (Image 2) */}
      <CareersDegreeSection />

      {/* 6. Watch the University Film - This is Alfa BK (Image 2) */}
      <UniversityFilmSection />

      {/* 7. The Latest - News & Events (Image 3) */}
      <NewsEventsSection />

      {/* 8. Student & Alumni Stories (Image 3) */}
      <StudentStoriesSection />

      {/* 9. Campus Feed - Life at Alfa BK (Image 3) */}
      <LifeAtAlfaBkSection />

      {/* 10. 60 International Partner Universities (Image 4) */}
      <PartnerUniversitiesSection />

      {/* 11. Frequently Asked Questions (Image 4) */}
      <FaqSection />

      {/* 12. Your Future Starts Here - CTA Banner (Image 4) */}
      <CtaSection />
    </main>
  );
}
