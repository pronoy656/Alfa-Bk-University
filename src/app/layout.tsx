import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfa BK University | Official Portal",
  description: "Alfa BK University - Higher education, accredited study programs, faculties, and research.",
};

import AppLayout from "@/components/shared/AppLayout";
import ScrollAnimationProvider from "@/components/shared/ScrollAnimationProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <ScrollAnimationProvider />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
