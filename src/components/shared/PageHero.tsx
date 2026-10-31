"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { HeroTitle, Subtitle } from "./Typography";

export interface PageHeroStat {
  value: string | number;
  label: string;
}

export interface PageHeroProps {
  kicker?: React.ReactNode;
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  bgImage?: string;
  overlayClass?: string;
  overlayStyle?: React.CSSProperties;
  backLink?: { label: string; href: string };
  badges?: React.ReactNode;
  actions?: React.ReactNode;
  stats?: PageHeroStat[];
  rightContent?: React.ReactNode;
  decorations?: boolean;
  align?: "left" | "center";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function PageHero({
  kicker,
  badge,
  title,
  subtitle,
  description,
  bgImage,
  overlayClass = "bg-gradient-to-r from-[#0B1E36]/85 via-[#0B1E36]/65 to-[#0B1E36]/40",
  overlayStyle,
  backLink,
  badges,
  actions,
  stats,
  rightContent,
  decorations = false,
  align = "left",
  className = "",
  style,
  children,
}: PageHeroProps) {
  const resolvedKicker = kicker || badge;
  const resolvedSubtitle = subtitle || description;
  const isCenter = align === "center";

  return (
    <section
      className={`relative overflow-hidden bg-[#0B1E36] text-white ${className}`}
      style={style}
    >
      {/* Background Graphic Image Overlay */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${overlayStyle ? "" : overlayClass}`}
        style={overlayStyle}
      />

      {/* Optional decorative orbital SVG rings & glows */}
      {decorations && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-32 right-10 h-[650px] w-[650px] stroke-[#D5A754]/25 opacity-70"
            fill="none"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="300"
              cy="300"
              r="280"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <circle cx="300" cy="300" r="220" strokeWidth="1" />
            <path
              d="M 50 300 Q 300 50 550 300"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>
          <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#D5A754]/10 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl" />
        </div>
      )}

      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Back Link */}
        {backLink && (
          <div className="mb-4">
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              {backLink.label}
            </Link>
          </div>
        )}

        <div
          className={
            rightContent
              ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
              : isCenter
              ? "mx-auto max-w-4xl text-center"
              : "max-w-3xl"
          }
        >
          {/* Main Hero Text Content */}
          <div
            className={
              rightContent
                ? "lg:col-span-6 xl:col-span-7"
                : isCenter
                ? "mx-auto max-w-3xl text-center"
                : ""
            }
          >
            {resolvedKicker && (
              typeof resolvedKicker === "string" ? (
                <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#D5A754] uppercase">
                  {resolvedKicker}
                </span>
              ) : (
                resolvedKicker
              )
            )}

            <HeroTitle className="mt-3 text-white">
              {title}
            </HeroTitle>

            {resolvedSubtitle && (
              <Subtitle
                as="div"
                className={`mt-4 text-slate-300 ${
                  isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
                }`}
              >
                {resolvedSubtitle}
              </Subtitle>
            )}

            {/* Badges Slot */}
            {badges && <div className="mt-6">{badges}</div>}

            {/* Action CTA Slot */}
            {actions && <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>}

            {/* Stats Row */}
            {stats && stats.length > 0 && (
              <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {children}
          </div>

          {/* Optional Right Content Column */}
          {rightContent && (
            <div className="lg:col-span-6 xl:col-span-5">{rightContent}</div>
          )}
        </div>
      </div>
    </section>
  );
}
