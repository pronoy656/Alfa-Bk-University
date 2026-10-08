"use client";

import React, { useState } from "react";
import NewsHero from "@/components/news-events/NewsHero";
import AllEventsView from "@/components/news-events/AllEventsView";
import ArticleDetailModal from "@/components/news-events/ArticleDetailModal";
import { newsEventsData } from "@/components/data";
import { AllEventItem } from "@/components/news-events/types";

export default function EventsPage() {
  const [selectedArticle, setSelectedArticle] = useState<AllEventItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Banner for All Events matching Figma */}
      <NewsHero
        kicker="NEWSROOM"
        title="All Events"
        subtitle="Explore all upcoming and past events, workshops, and activities happening at Alfa BK University."
        heroImage={newsEventsData.newsroom.heroImage}
        activeView="events"
      />

      {/* All Events Grid with Floating Filter Bar & 9 Cards */}
      <AllEventsView onOpenArticle={(art) => setSelectedArticle(art)} />

      {/* Article / Event Detail Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
