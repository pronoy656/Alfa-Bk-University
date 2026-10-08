"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NewsHero from "@/components/news-events/NewsHero";
import LatestNewsSection from "@/components/news-events/LatestNewsSection";
import UpcomingEventsSection from "@/components/news-events/UpcomingEventsSection";
import AllEventsView from "@/components/news-events/AllEventsView";
import EventRegistrationModal from "@/components/news-events/EventRegistrationModal";
import ArticleDetailModal from "@/components/news-events/ArticleDetailModal";
import { newsEventsData } from "@/components/data";
import { NewsArticle, UpcomingEvent, AllEventItem } from "@/components/news-events/types";

function NewsEventsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialView =
    searchParams.get("view") === "events" ||
    searchParams.get("tab") === "events" ||
    searchParams.get("tab") === "all-events"
      ? "events"
      : "overview";

  const [activeView, setActiveView] = useState<"overview" | "events">(
    initialView
  );
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | AllEventItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | AllEventItem | null>(null);

  useEffect(() => {
    const viewParam = searchParams.get("view") || searchParams.get("tab");
    if (viewParam === "events" || viewParam === "all-events") {
      setActiveView("events");
    } else if (viewParam === "overview" || viewParam === "news") {
      setActiveView("overview");
    }
  }, [searchParams]);

  const handleViewChange = (view: "overview" | "events") => {
    setActiveView(view);
    const newUrl =
      view === "events" ? "/news-events?view=events" : "/news-events";
    window.history.replaceState(null, "", newUrl);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* 1. HERO BANNER MATCHING FIGMA */}
      {activeView === "overview" ? (
        <NewsHero
          kicker="NEWSROOM"
          title="News & Events"
          subtitle="Achievements, announcements, media, and what's happening on campus."
          heroImage={newsEventsData.newsroom.heroImage}
          activeView="overview"
          onViewChange={handleViewChange}
        />
      ) : (
        <NewsHero
          kicker="NEWSROOM"
          title="All Events"
          subtitle="Explore all upcoming and past events, workshops, and activities happening at Alfa BK University."
          heroImage={newsEventsData.newsroom.heroImage}
          activeView="events"
          onViewChange={handleViewChange}
        />
      )}

      {/* 2. BODY CONTENT */}
      {activeView === "overview" ? (
        /* SCREENSHOT 1: LATEST NEWS + UPCOMING EVENTS */
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10">
                {/* Left Column: Latest News (Figma 60% ratio) */}
                <div className="lg:col-span-7 xl:col-span-7">
                  <LatestNewsSection
                    onOpenArticle={(art) => setSelectedArticle(art)}
                    onViewAllNews={() => handleViewChange("events")}
                  />
                </div>

                {/* Right Column: Upcoming Events (Figma 40% ratio) */}
                <div className="lg:col-span-5 xl:col-span-5">
                  <UpcomingEventsSection
                    onRegisterEvent={(evt) => setSelectedEvent(evt)}
                    onViewAllEvents={() => handleViewChange("events")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* SCREENSHOT 2: ALL EVENTS WITH FILTER & 9 CARDS */
        <AllEventsView onOpenArticle={(art) => setSelectedArticle(art)} />
      )}

      {/* 3. MODALS */}
      <EventRegistrationModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}

export default function NewsEventsPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#FAF9F6]" />}>
      <NewsEventsContent />
    </React.Suspense>
  );
}