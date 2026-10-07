import React from "react";
import { FacultyDetail } from "@/components/data";
import FacultyHero from "./FacultyHero";
import FacultyOverview from "./FacultyOverview";
import FacultyPrograms from "./FacultyPrograms";
import ProfessorsBanner from "./ProfessorsBanner";
import FacultyStats from "./FacultyStats";
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
      />

      {/* 2. OVERVIEW & SIDEBAR CONTACT */}
      <FacultyOverview
        about={faculty.about}
        whyStudyHere={faculty.whyStudyHere}
        contact={faculty.contact}
      />

      {/* 3. PROGRAMS SECTION (BSc, MSc, PhD) */}
      <FacultyPrograms
        programCount={faculty.badges.programCount}
        bscPrograms={faculty.bscPrograms}
        mscProgram={faculty.mscProgram}
        phdProgram={faculty.phdProgram}
      />

      {/* 4. MEET OUR PROFESSORS & TEACHING ASSISTANTS BANNER */}
      <ProfessorsBanner />

      {/* 5. STATS BAR */}
      <FacultyStats />

      {/* 6. CTA BANNER */}
      <FacultyCtaBanner />
    </div>
  );
}
