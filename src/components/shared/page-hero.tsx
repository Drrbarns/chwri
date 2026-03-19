"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ badge, title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 py-24 lg:py-32",
        className
      )}
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sage-400 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-teal-200 mb-6 border border-white/10"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
