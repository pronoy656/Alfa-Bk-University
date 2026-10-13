export interface NewsArticle {
  id: string;
  badge: string;
  date: string;
  title: string;
  excerpt?: string;
  description?: string;
  image: string;
  readTime?: string;
  featured?: boolean;
  location?: string;
}

export interface UpcomingEvent {
  id: string;
  month: string;
  day: string;
  dateStr?: string;
  title: string;
  time: string;
  location: string;
  image: string;
  category: string;
  description?: string;
}

export interface AllEventItem {
  id: string;
  featured?: boolean;
  badge: string;
  date: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

/**
 * DRY: Shared color dictionary for badges across all news and event components.
 * Avoids redundant switch-case statements and cyclomatic complexity.
 */
export const EVENT_BADGE_STYLES: Record<string, string> = {
  achievements: "bg-sky-50 text-sky-700 border-sky-200/80",
  research: "bg-purple-50 text-purple-700 border-purple-200/80",
  admissions: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  announcements: "bg-rose-50 text-rose-700 border-rose-200/80",
  "career fair": "bg-indigo-50 text-indigo-700 border-indigo-200/80",
  events: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
  sports: "bg-orange-50 text-orange-700 border-orange-200/80",
  workshops: "bg-teal-50 text-teal-700 border-teal-200/80",
};

export function getBadgeColorClass(badge: string): string {
  const normalized = badge?.toLowerCase().trim() || "";
  return EVENT_BADGE_STYLES[normalized] || "bg-slate-50 text-slate-700 border-slate-200";
}
