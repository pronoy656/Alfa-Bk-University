import documentLibraryDataRaw from "./documentLibraryData.json";

export interface CategoryDataConfig {
  name: string;
  dotColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  btnHover: string;
  iconBg: string;
  iconColor: string;
  icon: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  date: string;
  lang: string;
  isProvisional?: boolean;
}

export const documentLibraryData = documentLibraryDataRaw;
export const hero = documentLibraryDataRaw.hero;
export const categoryKeys = documentLibraryDataRaw.categoryKeys;
export const categories = documentLibraryDataRaw.categories as Record<string, CategoryDataConfig>;
export const documents = documentLibraryDataRaw.documents as DocumentItem[];
export default documentLibraryDataRaw;
