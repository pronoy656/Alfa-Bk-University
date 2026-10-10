import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
  title: "Istorijat | Alfa BK Univerzitet",
  description:
    "Od osnivanja 1993. godine do danas — preko tri decenije akademske izvrsnosti, inovacija i stvaranja novih generacija lidera na Alfa BK Univerzitetu u Beogradu.",
  keywords: [
    "Alfa BK Univerzitet",
    "Istorijat univerziteta",
    "Karić brothers university",
    "Prvi privatni univerzitet",
    "Beograd",
    "30 godina tradicije",
    "Akreditacija",
  ],
  openGraph: {
    title: "Istorijat | Alfa BK Univerzitet",
    description:
      "Od osnivanja 1993. godine do danas — više od 30 godina akademske izvrsnosti i inovacija.",
    type: "website",
    url: "/university/history",
  },
};

export default function HistoryPage() {
  return <HistoryClient />;
}
