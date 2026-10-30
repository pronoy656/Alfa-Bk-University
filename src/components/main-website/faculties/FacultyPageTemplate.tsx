import React from "react";
import { FacultyDetail } from "@/data";
import FacultyHero from "./FacultyHero";
import FacultyKeyInfoBar from "./FacultyKeyInfoBar";
import FacultyOverview from "./FacultyOverview";
import FacultyPrograms from "./FacultyPrograms";
import FacultyCareersSection from "./FacultyCareersSection";
import ProfessorsBanner from "./ProfessorsBanner";
import FacultyCtaBanner from "./FacultyCtaBanner";

interface FacultyPageTemplateProps {
  faculty: FacultyDetail;
}

export default function FacultyPageTemplate({
  faculty,
}: FacultyPageTemplateProps) {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <FacultyHero
        title={faculty.title}
        subtitle={faculty.subtitle}
        bgImage={faculty.bgImage}
        badges={faculty.badges}
        facultySlug={faculty.slug}
      />

      {/* 2. KEY INFO BAR (WHY STUDY HERE, WHAT WILL I LEARN, WHAT CAN I BECOME, HOW DO I APPLY) */}
      <FacultyKeyInfoBar facultySlug={faculty.slug} />

      {/* 3. OVERVIEW & SIDEBAR CONTACT */}
      <FacultyOverview
        about={faculty.about}
        whyStudyHere={faculty.whyStudyHere}
        contact={faculty.contact}
        facultyTitle={faculty.title}
        facultySlug={faculty.slug}
      />

      {/* 3. PROGRAMS SECTION (BSc, MSc, PhD) */}
      <FacultyPrograms
        programCount={faculty.badges.programCount}
        bscPrograms={faculty.bscPrograms}
        mscProgram={faculty.mscProgram}
        phdProgram={faculty.phdProgram}
      />

      {/* 4. CAREERS & INDUSTRY SECTION (WHAT CAN YOU DO WITH THIS DEGREE?) */}
      <FacultyCareersSection />

      {/* 5. MEET OUR PROFESSORS & TEACHING STAFF BANNER */}
      <ProfessorsBanner />

      {/* 6. CTA BANNER (YOUR FUTURE IN FINANCE / FACULTY STARTS HERE) */}
      <FacultyCtaBanner
        facultyName={faculty.title}
        facultySlug={faculty.slug}
      />
    </div>
  );
}
