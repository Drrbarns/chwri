"use client";

import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/lib/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4",
            dark
              ? "bg-white/10 text-teal-200"
              : "bg-teal-50 text-teal-700 border border-teal-100"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading font-semibold tracking-tight text-balance",
          dark ? "text-white" : "text-slate-900",
          align === "center" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-3xl text-pretty",
            align === "center" && "mx-auto",
            dark ? "text-teal-200/70" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
