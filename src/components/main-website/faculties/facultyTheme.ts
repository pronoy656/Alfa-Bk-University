export interface FacultyTheme {
  slug: string;
  primaryColor: string; // Signature faculty color
  accentColor: string; // Lighter accent for kicker/sub-elements
  baseBg: string; // Fallback background color
  gradientOverlay: string; // Rich gradient over hero photo
  badgeBg: string; // Color for program count badge
  keyInfoBg: string; // Background for FacultyKeyInfoBar
  keyInfoBorder: string; // Border color for FacultyKeyInfoBar
  keyInfoKickerColor: string; // Heading color for items in KeyInfoBar
}

export const facultyThemes: Record<string, FacultyTheme> = {
  // 1. Faculty of Information Technologies (Blue)
  "information-technologies": {
    slug: "information-technologies",
    primaryColor: "#257DD4",
    accentColor: "#93C5FD",
    baseBg: "#091B33",
    gradientOverlay:
      "linear-gradient(135deg, rgba(8, 28, 58, 0.82) 0%, rgba(18, 72, 138, 0.55) 50%, rgba(37, 125, 212, 0.30) 100%)",
    badgeBg: "#257DD4",
    keyInfoBg: "#07172C",
    keyInfoBorder: "rgba(37, 125, 212, 0.28)",
    keyInfoKickerColor: "#93C5FD",
  },

  // 2. Faculty of Foreign Languages (Coral Red)
  "foreign-languages": {
    slug: "foreign-languages",
    primaryColor: "#DF5C55",
    accentColor: "#FCA5A5",
    baseBg: "#2E0C0A",
    gradientOverlay:
      "linear-gradient(135deg, rgba(62, 16, 14, 0.85) 0%, rgba(142, 38, 33, 0.65) 50%, rgba(223, 92, 85, 0.40) 100%)",
    badgeBg: "#DF5C55",
    keyInfoBg: "#230908",
    keyInfoBorder: "rgba(223, 92, 85, 0.28)",
    keyInfoKickerColor: "#FCA5A5",
  },

  // 3. Faculty of Finance, Trade and Accounting (Warm Taupe / Bronze)
  "finance-trade-accounting": {
    slug: "finance-trade-accounting",
    primaryColor: "#998472",
    accentColor: "#D5A754",
    baseBg: "#241C16",
    gradientOverlay:
      "linear-gradient(135deg, rgba(46, 36, 28, 0.85) 0%, rgba(95, 78, 64, 0.65) 50%, rgba(153, 132, 114, 0.40) 100%)",
    badgeBg: "#998472",
    keyInfoBg: "#1C1510",
    keyInfoBorder: "rgba(153, 132, 114, 0.28)",
    keyInfoKickerColor: "#D5A754",
  },

  // 4. Faculty of Mathematics and Computer Science (Purple / Violet)
  "mathematics-computer-science": {
    slug: "mathematics-computer-science",
    primaryColor: "#6F52B2",
    accentColor: "#C4B5FD",
    baseBg: "#1B0D33",
    gradientOverlay:
      "linear-gradient(135deg, rgba(35, 18, 64, 0.85) 0%, rgba(77, 42, 136, 0.65) 50%, rgba(111, 82, 178, 0.40) 100%)",
    badgeBg: "#6F52B2",
    keyInfoBg: "#150A28",
    keyInfoBorder: "rgba(111, 82, 178, 0.28)",
    keyInfoKickerColor: "#C4B5FD",
  },

  // 5. Faculty of Management in Sports (Slate / Steel Blue-Gray)
  "management-sports": {
    slug: "management-sports",
    primaryColor: "#708090",
    accentColor: "#CBD5E1",
    baseBg: "#161D22",
    gradientOverlay:
      "linear-gradient(135deg, rgba(24, 32, 38, 0.82) 0%, rgba(68, 85, 99, 0.55) 50%, rgba(112, 128, 144, 0.30) 100%)",
    badgeBg: "#708090",
    keyInfoBg: "#10161B",
    keyInfoBorder: "rgba(112, 128, 144, 0.28)",
    keyInfoKickerColor: "#CBD5E1",
  },

  // 6. Faculty of Psychology (Rose / Crimson)
  psychology: {
    slug: "psychology",
    primaryColor: "#E11D48",
    accentColor: "#FDA4AF",
    baseBg: "#22050D",
    gradientOverlay:
      "linear-gradient(135deg, rgba(32, 8, 15, 0.70) 0%, rgba(159, 18, 57, 0.40) 50%, rgba(225, 29, 72, 0.18) 100%)",
    badgeBg: "#E11D48",
    keyInfoBg: "#1B040B",
    keyInfoBorder: "rgba(225, 29, 72, 0.28)",
    keyInfoKickerColor: "#FDA4AF",
  },
};

export const defaultFacultyTheme: FacultyTheme = {
  slug: "default",
  primaryColor: "#0B1E36",
  accentColor: "#D5A754",
  baseBg: "#0B1E36",
  gradientOverlay:
    "linear-gradient(135deg, rgba(11, 30, 54, 0.92) 0%, rgba(11, 30, 54, 0.75) 50%, rgba(11, 30, 54, 0.50) 100%)",
  badgeBg: "#0B1E36",
  keyInfoBg: "#0B1E36",
  keyInfoBorder: "rgba(255, 255, 255, 0.12)",
  keyInfoKickerColor: "#D5A754",
};

export function getFacultyTheme(slug?: string): FacultyTheme {
  if (!slug) return defaultFacultyTheme;
  return facultyThemes[slug] || defaultFacultyTheme;
}

