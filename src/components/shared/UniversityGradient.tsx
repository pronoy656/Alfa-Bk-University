import React from "react";

export const UNIVERSITY_GRADIENT_CLASS =
  "bg-gradient-to-r from-[#0B1E36] via-[#102444] to-[#B87A1E]";

interface UniversityGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function UniversityGradient({
  children,
  className = "",
  as: Component = "div",
  ...props
}: UniversityGradientProps) {
  return (
    <Component
      className={`${UNIVERSITY_GRADIENT_CLASS} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
