"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
  href?: string;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  featured = false,
  href = "#",
  className,
}: ArticleCardProps) {
  if (featured) {
    return (
      <motion.div variants={fadeInUp}>
        <Link
          href={href}
          className={cn(
            "block group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 overflow-hidden",
            className
          )}
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-teal-100 via-teal-50 to-sage-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl text-teal-600/50 font-heading font-bold">
                    C
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              {category && (
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100 mb-3">
                  {category}
                </span>
              )}
              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                {date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {date}
                  </span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {readTime}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-teal-600 group-hover:text-teal-700">
                Read article
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeInUp}>
      <Link
        href={href}
        className={cn(
          "block group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 overflow-hidden h-full",
          className
        )}
      >
        <div className="aspect-[16/10] bg-gradient-to-br from-teal-100 via-teal-50 to-sage-50 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xl text-teal-600/50 font-heading font-bold">
                C
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          {category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 mb-3">
              {category}
            </span>
          )}
          <h3 className="font-heading text-base font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
