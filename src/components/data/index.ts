import facultiesRaw from "./faculties.json";
import professorsRaw from "./professors.json";

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

import universityRaw from "./university.json";

export const facultiesData: Record<string, FacultyDetail> =
  facultiesRaw as Record<string, FacultyDetail>;

export const professorsData: ProfessorsData =
  professorsRaw as ProfessorsData;

export const universityData = universityRaw;

export function getFacultyBySlug(slug: string): FacultyDetail | undefined {
  return facultiesData[slug];
}
