"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Reveal Animation Provider
 * - Ultra-lightweight: zero lag, zero scroll fighting, zero blur
 * - Uses high rootMargin so elements are visible seamlessly before entering viewport
 * - Completely skips heavy operations on dashboards
 */
export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's reduced motion accessibility preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".fade-up-scroll, .reveal-on-scroll").forEach((el) => {
        el.classList.add("in-view", "reveal-complete");
      });
      return;
    }

    // 1. Dashboards (/dashboard/*): Always render instantly
    if (pathname && pathname.startsWith("/dashboard")) {
      const title = document.querySelector<HTMLElement>("main h1, .dashboard-title");
      if (title && !title.classList.contains("dashboard-title-animate")) {
        title.classList.add("dashboard-title-animate");
      }
      return;
    }

    // 2. Marketing Pages: Smooth, non-blocking intersection observer
    let observer: IntersectionObserver | null = null;

    const setupAnimations = () => {
      if (observer) {
        observer.disconnect();
      }

      // Configure generous rootMargin (350px ahead) so items reveal smoothly before scroll hits them
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("in-view");
              el.classList.add("reveal-complete");
              observer?.unobserve(el);
            }
          });
        },
        {
          root: null,
          rootMargin: "350px 0px 100px 0px",
          threshold: 0,
        }
      );

      // Hero banner H1 entrance
      const pageH1 = document.querySelector<HTMLElement>("main h1, .hero-title");
      if (pageH1 && !pageH1.classList.contains("hero-animate-fade-up")) {
        pageH1.classList.add("hero-animate-fade-up");
      }

      // Collect explicitly designated reveal elements ONLY (never entire <section> containers or tables)
      const elements = document.querySelectorAll<HTMLElement>(
        ".fade-up-scroll, .reveal-on-scroll, [data-animate='fade-up']"
      );

      const triggerY = window.innerHeight * 1.2;

      elements.forEach((el) => {
        if (el.tagName === "TABLE" || el.closest("table") || el.closest("[role='dialog']")) {
          el.classList.add("in-view", "reveal-complete");
          return;
        }

        const rect = el.getBoundingClientRect();
        // If element is already in the upper viewport, reveal immediately
        if (rect.top <= triggerY) {
          el.classList.add("in-view", "reveal-complete");
        } else {
          observer?.observe(el);
        }
      });
    };

    // Run setup quickly on mount
    const timer = setTimeout(setupAnimations, 20);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
