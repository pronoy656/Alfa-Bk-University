"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDedicatedPortal =
    pathname === "/login" ||
    pathname?.endsWith("-dashboard") ||
    pathname?.includes("-dashboard") ||
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/portal");

  if (isDedicatedPortal) {
    return <div className="h-full min-h-screen bg-slate-50">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
