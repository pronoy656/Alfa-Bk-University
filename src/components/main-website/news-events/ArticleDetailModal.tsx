"use client";

import React from "react";
import { X, Calendar, MapPin, Share2, Bookmark } from "lucide-react";
import { NewsArticle, AllEventItem } from "./types";

interface ArticleDetailModalProps {
  article: NewsArticle | AllEventItem | null;
  onClose: () => void;
}

export default function ArticleDetailModal({
  article,
  onClose,
}: ArticleDetailModalProps) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-100">
        {/* Banner Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-xs hover:bg-black/75 transition cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="rounded-full bg-[#D5A754] px-3 py-0.5 text-xs font-bold text-slate-950 shadow-xs">
              {article.badge}
            </span>
            <span className="text-xs text-slate-200 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
            {article.title}
          </h2>

          {article.location && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>Location: {article.location}</span>
            </div>
          )}

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
            <p className="text-base font-medium text-slate-800 leading-relaxed">
              {article.description || ("excerpt" in article ? article.excerpt : "")}
            </p>
            <p>
              Alfa BK University remains steadfast in advancing academic excellence, modern scientific discovery, and global partnerships across Southeast Europe and beyond. With continuous investments in state-of-the-art research laboratories, innovative multidisciplinary curricula, and an expansive network of international partner institutions, students receive comprehensive education tailored to modern career landscapes.
            </p>
            <p>
              Students and researchers interested in learning more or participating in related initiatives are invited to connect with the respective faculty deanery or visit the central campus administration office.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Alfa BK University Newsroom · Official Announcement
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[#0B1E36] px-5 py-2 text-xs font-bold text-white hover:bg-[#152D4D] transition cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
