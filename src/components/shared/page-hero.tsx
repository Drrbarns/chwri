"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  className?: string;
}

export function PageHero({ badge, title, subtitle, heroImage, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 py-24 lg:py-32",
        className
      )}
    >
      {heroImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 bg-teal-950/30" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.08)_0%,rgba(255,255,255,.02)_100%)] opacity-30" aria-hidden />

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
