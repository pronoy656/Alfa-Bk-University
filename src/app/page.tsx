import HeroSection from "@/components/home/HeroSection";
import BrowseStudyLevelsSection from "@/components/home/BrowseStudyLevelsSection";
import FacultiesSection from "@/components/home/FacultiesSection";
import AcademicDiscourseSection from "@/components/home/AcademicDiscourseSection";
import CampusLifeSection from "@/components/home/CampusLifeSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import ApplyNowSection from "@/components/home/ApplyNowSection";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section + Key Statistics Bar */}
      <HeroSection />

      {/* 2. Browse by Study Level */}
      <BrowseStudyLevelsSection />

      {/* 3. Our 6 Faculties */}
      <FacultiesSection />

      {/* 4. Academic Discourse & Global Dialogue */}
      <AcademicDiscourseSection />

      {/* 5. Campus Life & Community + Watch Campus Tour Video */}
      <CampusLifeSection />

      {/* 6. Latest News & Upcoming Events */}
      <NewsEventsSection />

      {/* 7. Student Voices (Testimonials) + Gallery + 60 Partner Universities */}
      <TestimonialsSection />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Enrolment 2026/2027 Apply Now Form */}
      <ApplyNowSection />
    </main>
  );
}
