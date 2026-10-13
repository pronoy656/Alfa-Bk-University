"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { newsEventsData } from "@/components/data";
import { NewsArticle, getBadgeColorClass } from "./types";

interface LatestNewsSectionProps {
  onOpenArticle?: (article: NewsArticle) => void;
  onViewAllNews?: () => void;
}

export default function LatestNewsSection({
  onOpenArticle,
  onViewAllNews,
}: LatestNewsSectionProps) {
  const { featuredNews, latestNews } = newsEventsData as {
    featuredNews: NewsArticle;
    latestNews: NewsArticle[];
  };

  return (
    <div className="flex flex-col">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-5 w-1.5 rounded-full bg-[#D5A754]" />
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Latest News
          </h2>
        </div>
        <button
          type="button"
          onClick={onViewAllNews}
          className="group inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-700 transition cursor-pointer"
        >
          View All News
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* 1. Large Top Featured Card */}
      <div
        onClick={() => onOpenArticle?.(featuredNews)}
        className="group relative mt-1 overflow-hidden rounded-2xl bg-slate-900 shadow-xs transition duration-300 hover:shadow-md cursor-pointer aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredNews.image}
          alt={featuredNews.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        {/* Content Box at Bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end text-white">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/25 bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-xs">
              {featuredNews.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {featuredNews.date}
            </span>
          </div>

          <h3 className="mt-2.5 text-lg font-bold leading-snug sm:text-2xl text-white group-hover:text-[#F3D389] transition">
            {featuredNews.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
            {featuredNews.excerpt}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#D5A754] group-hover:translate-x-0.5 transition-transform">
            Read full story
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* 2. Three Cards Row Below */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {latestNews.map((news) => (
          <div
            key={news.id}
            onClick={() => onOpenArticle?.(news)}
            className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-2xs transition duration-300 hover:border-slate-200 hover:shadow-sm cursor-pointer"
          >
            <div>
              {/* Thumbnail */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta row */}
              <div className="mt-3 flex items-center gap-2">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${getBadgeColorClass(
                    news.badge
                  )}`}
                >
                  {news.badge}
                </span>
              </div>

              <div className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400">
                <Calendar className="h-3 w-3" />
                {news.date}
              </div>

              {/* Title */}
              <h4 className="mt-2 text-xs sm:text-[13px] font-bold leading-snug text-slate-900 group-hover:text-blue-700 transition line-clamp-2">
                {news.title}
              </h4>

              {/* Excerpt */}
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 line-clamp-2">
                {news.excerpt}
              </p>
            </div>

            {/* Read full story */}
            <div className="mt-3.5 pt-2 border-t border-slate-100/80">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-900 group-hover:text-blue-700 transition">
                Read full story
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
