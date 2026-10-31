import React from "react";
import { SectionHeading, Subtitle } from "./Typography";

export interface SectionHeaderProps {
  badge?: React.ReactNode;
  kicker?: React.ReactNode;
  tag?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  withGoldLine?: boolean;
  uppercase?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "none";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  kickerClassName?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  badge,
  kicker,
  tag,
  title,
  subtitle,
  description,
  align = "left",
  theme = "light",
  size = "lg",
  withGoldLine = false,
  uppercase = false,
  maxWidth = "3xl",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  kickerClassName = "",
  children,
}: SectionHeaderProps) {
  const resolvedKicker = kicker || badge || tag;
  const resolvedSubtitle = subtitle || description;
  const isDark = theme === "dark" || theme === "navy";
  const isCenter = align === "center";

  // Size configurations
  const titleSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-3xl sm:text-5xl lg:text-6xl",
  };

  const maxWidthClasses = {
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-3xl",
    xl: "max-w-4xl",
    "2xl": "max-w-5xl",
    "3xl": "max-w-6xl",
    none: "",
  };

  return (
    <div
      className={`${maxWidthClasses[maxWidth]} ${
        isCenter
          ? "mx-auto text-center"
          : align === "right"
          ? "ml-auto text-right"
          : "text-left"
      } ${className}`}
    >
      {resolvedKicker && (
        <div
          className={`flex items-center gap-2 mb-2 ${
            isCenter
              ? "justify-center"
              : align === "right"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          {withGoldLine && (
            <span className="h-[2px] w-6 bg-[#D5A754] shrink-0 inline-block" />
          )}
          <span
            className={`text-xs font-bold uppercase tracking-widest text-[#D5A754] ${kickerClassName}`}
          >
            {resolvedKicker}
          </span>
          {withGoldLine && isCenter && (
            <span className="h-[2px] w-6 bg-[#D5A754] shrink-0 inline-block" />
          )}
        </div>
      )}

      <SectionHeading
        className={`${uppercase ? "uppercase" : ""} ${
          isDark ? "text-white" : "text-[#0B1E36]"
        } ${titleClassName}`}
      >
        {title}
      </SectionHeading>

      {resolvedSubtitle && (
        <Subtitle
          className={`mt-3 sm:mt-4 ${
            isDark ? "text-slate-300" : "text-slate-600"
          } ${subtitleClassName}`}
        >
          {resolvedSubtitle}
        </Subtitle>
      )}

      {children}
    </div>
  );
}

// Convenient aliases for Title and Subtitle usage
export { SectionHeader as SectionTitle, SectionHeader as TitleSubtitle };
export type SectionTitleProps = SectionHeaderProps;
export type TitleSubtitleProps = SectionHeaderProps;
