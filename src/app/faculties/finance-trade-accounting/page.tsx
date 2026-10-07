import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FacultyPageTemplate from "@/components/faculties/FacultyPageTemplate";
import { facultiesData } from "@/components/data";

export const metadata: Metadata = {
  title: "Faculty of Finance, Trade and Accounting | Alfa BK University",
  description:
    "Educating economists, finance professionals, accountants, and business leaders for the modern economy. Undergraduate, Master, and Doctoral programs.",
};

export default function FinanceTradeAccountingPage() {
  const faculty = facultiesData["finance-trade-accounting"];
  if (!faculty) return notFound();

  return <FacultyPageTemplate faculty={faculty} />;
}
