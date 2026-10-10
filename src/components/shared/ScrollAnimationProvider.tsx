"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Reveal Animation Provider
 * - Applies smooth entrance and scroll animations to public landing pages (Home, About, History, etc.)
 * - Protects all Dashboards (/dashboard/*) from heavy scroll animations: tables, cards, and grids
 *   render INSTANTLY with zero lag, zero blur, and zero bouncing. Only page titles receive a crisp,
 *   lightweight 200ms transition.
 */
export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's reduced motion accessibility preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // -------------------------------------------------------------------------
    // 1. DASHBOARD ROUTES (/dashboard/*): Fast, crisp, NO table/card animation!
    // -------------------------------------------------------------------------
    if (pathname && pathname.startsWith("/dashboard")) {
      // In dashboards, tables and cards must render instantly without lag or bounce.
      // We only apply a light, instant fade to the main dashboard h1 title.
      const title = document.querySelector<HTMLElement>("main h1, .dashboard-title");
      if (title && !title.classList.contains("dashboard-title-animate")) {
        title.classList.add("dashboard-title-animate");
      }
      // Return early: NEVER observe or animate tables, cards, or grids inside dashboards!
      return;
    }

    // -------------------------------------------------------------------------
    // 2. PUBLIC MARKETING PAGES: Elegant scroll reveals
    // -------------------------------------------------------------------------
    let observer: IntersectionObserver | null = null;

    const setupAnimations = () => {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("in-view");

              setTimeout(() => {
                el.classList.add("reveal-complete");
              }, 1000);

              observer?.unobserve(el);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.08,
        }
      );

      // Hero banner H1 entrance
      const pageH1 = document.querySelector<HTMLElement>("main h1, .hero-title");
      if (pageH1 && !pageH1.classList.contains("hero-animate-fade-up")) {
        pageH1.classList.add("hero-animate-fade-up");

        const prev = pageH1.previousElementSibling as HTMLElement | null;
        if (prev && !prev.classList.contains("hero-animate-fade-up")) {
          prev.classList.add("hero-animate-fade-up", "hero-delay-100");
        }

        const next = pageH1.nextElementSibling as HTMLElement | null;
        if (next && next.tagName === "P" && !next.classList.contains("hero-animate-fade-up")) {
          next.classList.add("hero-animate-fade-up", "hero-delay-200");
        }
      }

      // Collect only explicitly designated or section-level elements (NO tables)
      const candidates = new Set<HTMLElement>();

      // A. Elements with explicit animation classes
      document
        .querySelectorAll<HTMLElement>(
          ".fade-up-scroll, .reveal-on-scroll, [data-animate='fade-up']"
        )
        .forEach((el) => {
          // Never animate tables or anything inside dialogs
          if (el.tagName === "TABLE" || el.closest("table") || el.closest("[role='dialog']")) return;
          candidates.add(el);
        });

      // B. Public section containers & feature cards
      document
        .querySelectorAll<HTMLElement>(
          "main > section:not(:first-child), .public-card, .feature-card"
        )
        .forEach((sec) => {
          if (sec.closest("[role='dialog']") || sec.closest("nav") || sec.closest("footer")) return;
          candidates.add(sec);
        });

      const windowHeight = window.innerHeight;

      candidates.forEach((el) => {
        if (el.classList.contains("hero-animate-fade-up")) return;

        if (!el.classList.contains("fade-up-scroll")) {
          el.classList.add("fade-up-scroll");
        }

        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          el.classList.add("in-view");
          setTimeout(() => el.classList.add("reveal-complete"), 900);
        } else {
          observer?.observe(el);
        }
      });
    };

    const timer = setTimeout(setupAnimations, 60);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

/**
 * Reusable wrapper component for explicit scroll animations on marketing pages
 */
export function FadeUp({
  children,
  delay = 0,
  scale = false,
  className = "",
  style,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${scale ? "fade-scale-scroll" : "fade-up-scroll"} ${className}`}
      style={{
        ...style,
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
