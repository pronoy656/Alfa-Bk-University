import React from "react";

export type TypographyVariant = "hero-title" | "section-title" | "subtitle";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  // Hero Title: Syncopate Bold, 52px, Line-height: 110%, Letter-spacing: 0%
  "hero-title":
    "hero-title-syncopate font-syncopate font-bold text-3xl sm:text-4xl lg:text-[52px] lg:leading-[110%] leading-[110%] tracking-[0%]",

  // Section / Other Title: Syncopate Bold, 28px, Line-height: 125%, Letter-spacing: 0%
  "section-title":
    "section-title-syncopate font-syncopate font-bold text-xl sm:text-2xl lg:text-[28px] lg:leading-[125%] leading-[125%] tracking-[0%]",

  // Subtitle / Description: Montserrat Regular (400), 16px, Line-height: 170%, Letter-spacing: 0%
  subtitle:
    "subtitle-montserrat font-montserrat font-normal text-base leading-[170%] tracking-[0%]",
};

const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
  "hero-title": "h1",
  "section-title": "h2",
  subtitle: "p",
};

/**
 * Universal Typography component adhering strictly to brand design specs.
 * DRY, reusable, accessible, and flexible with custom HTML element tags.
 */
export default function Typography({
  variant = "section-title",
  as,
  className = "",
  children,
  ...props
}: TypographyProps) {
  const Component = as || defaultTagMap[variant] || "div";
  const baseClasses = variantStyles[variant] || "";

  return (
    <Component className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

// 1. Reusable Hero Section Title Component (Syncopate 700, 52px, 110%, 0%)
export function HeroTitle({
  as = "h1",
  className = "",
  children,
  ...props
}: Omit<TypographyProps, "variant">) {
  return (
    <Typography variant="hero-title" as={as} className={className} {...props}>
      {children}
    </Typography>
  );
}

// 2. Reusable Section / Other Title Component (Syncopate 700, 28px, 125%, 0%)
export function SectionHeading({
  as = "h2",
  className = "",
  children,
  ...props
}: Omit<TypographyProps, "variant">) {
  return (
    <Typography
      variant="section-title"
      as={as}
      className={className}
      {...props}
    >
      {children}
    </Typography>
  );
}

// 3. Reusable Subtitle / Description Component (Montserrat 400, 16px, 170%, 0%)
export function Subtitle({
  as = "p",
  className = "",
  children,
  ...props
}: Omit<TypographyProps, "variant">) {
  return (
    <Typography variant="subtitle" as={as} className={className} {...props}>
      {children}
    </Typography>
  );
}

