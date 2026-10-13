// Core JSON Imports
import facultiesRaw from "./faculties.json";
import professorsRaw from "./professors.json";
import universityRaw from "./university.json";
import programsRaw from "./programs.json";
import newsEventsRaw from "./newsEvents.json";
import homeDataRaw from "./homeData.json";

// Dashboard Dummy Data Imports
import dashboardStudentRaw from "./dashboardStudent.json";
import dashboardTeacherRaw from "./dashboardTeacher.json";
import dashboardAdminRaw from "./dashboardAdmin.json";
import dashboardRoutineRaw from "./dashboardRoutine.json";
import dashboardExamsRaw from "./dashboardExams.json";
import dashboardAttendanceRaw from "./dashboardAttendance.json";
import dashboardResultsRaw from "./dashboardResults.json";
import dashboardNoticesRaw from "./dashboardNotices.json";
import dashboardMessagesRaw from "./dashboardMessages.json";

// Types
export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  duration: string;
  badge: string;
  badgeStyle: string;
  href: string;
}

export interface AdvancedProgram {
  title: string;
  description: string;
  duration: string;
  badge: string;
  href: string;
}

export interface FacultyContact {
  email: string;
  phone: string;
  address: string;
}

export interface FacultyBadges {
  programCount: string;
  hasBSc: boolean;
  hasMSc: boolean;
  hasPhD: boolean;
}

export interface FacultyDetail {
  slug: string;
  title: string;
  subtitle: string;
  bgImage: string;
  badges: FacultyBadges;
  about: string;
  whyStudyHere: string[];
  contact: FacultyContact;
  bscPrograms: ProgramItem[];
  mscProgram: AdvancedProgram | null;
  phdProgram: AdvancedProgram | null;
}

export interface ProfessorItem {
  id: string;
  name: string;
  role: string;
  faculty: string;
  facultyId: string;
  department: string;
  photo: string;
  tags: string[];
  type: string;
  icon: string;
  iconBg: string;
}

export interface SpotlightProfessor {
  name: string;
  role: string;
  faculty: string;
  department: string;
  degree: string;
  bio: string;
  photo: string;
  alsoTeachesIn: string[];
  courses: string[];
}

export interface ProfessorsData {
  spotlight: SpotlightProfessor;
  categories: { id: string; label: string }[];
  departments: string[];
  positions: string[];
  professors: ProfessorItem[];
}

import aboutViewRaw from "./aboutView/aboutViewData.json";
export * from "./rectorLeadership";
export {
  internationalCooperationData,
  mobilityPrograms,
  europeanPartners,
  globalPartners,
} from "./internationalCooperation";
export {
  instituteKaricContentData,
  instituteKaricContentData as instituteKaricData,
} from "./instituteKaricContent";

export const aboutViewData = aboutViewRaw;
export const facultiesData: Record<string, FacultyDetail> =
  facultiesRaw as Record<string, FacultyDetail>;

export const professorsData: ProfessorsData =
  professorsRaw as ProfessorsData;

export const universityData = universityRaw;
export const programsData = programsRaw;
export const newsEventsData = newsEventsRaw;
export const homeData = homeDataRaw;

// Dashboard Data Exports
export const dashboardStudentData = dashboardStudentRaw;
export const dashboardTeacherData = dashboardTeacherRaw;
export const dashboardAdminData = dashboardAdminRaw;
export const dashboardRoutineData = dashboardRoutineRaw;
export const dashboardExamsData = dashboardExamsRaw;
export const dashboardAttendanceData = dashboardAttendanceRaw;
export const dashboardResultsData = dashboardResultsRaw;
export const dashboardNoticesData = dashboardNoticesRaw;
export const dashboardMessagesData = dashboardMessagesRaw;

// Helper Getters
export function getFacultyBySlug(slug: string): FacultyDetail | undefined {
  return facultiesData[slug];
}

export function getProgramBySlug(slug: string) {
  return (
    programsData.programs.find((p) => p.slug === slug || p.id === slug) ||
    programsData.programs[0]
  );
}
