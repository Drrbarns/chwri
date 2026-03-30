"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "teal" | "sage" | "light";
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryCta = { label: "Partner With Us", href: "/partnerships" },
  secondaryCta,
  variant = "teal",
  className,
}: CTASectionProps) {
  const isDark = variant !== "light";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-28",
        variant === "teal" && "bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900",
        variant === "sage" && "bg-gradient-to-br from-sage-700 via-sage-600 to-sage-800",
        variant === "light" && "bg-teal-50",
        className
      )}
    >
      {isDark && (
        <>
          <div className="absolute inset-0">
            <Image
              src="/images/partners/partner-international.jpg"
              alt="Global health collaboration meeting"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-teal-950/30" aria-hidden />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-300 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-sage-300 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
        </>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll>
          <h2
            className={cn(
              "font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance",
              isDark ? "text-white" : "text-teal-900"
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed max-w-2xl mx-auto text-pretty",
                isDark ? "text-teal-100/70" : "text-slate-600"
              )}
            >
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full transition-all group shadow-lg",
                isDark
                  ? "bg-white text-teal-900 hover:bg-teal-50"
                  : "bg-teal-700 text-white hover:bg-teal-800"
              )}
            >
              {primaryCta.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full border transition-all",
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-teal-200 text-teal-700 hover:bg-teal-100"
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
