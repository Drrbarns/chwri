"use client";

import Link from "next/link";
import { ArrowRight, FileText, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PublicationCardProps {
  title: string;
  authors?: string;
  type: "Research Paper" | "Policy Brief" | "Report" | "Case Study";
  date?: string;
  href?: string;
  className?: string;
}

export function PublicationCard({
  title,
  authors,
  type,
  date,
  href = "#",
  className,
}: PublicationCardProps) {
  const typeColors = {
    "Research Paper": "bg-teal-100 text-teal-700",
    "Policy Brief": "bg-sage-100 text-sage-700",
    Report: "bg-slate-100 text-slate-700",
    "Case Study": "bg-warm-100 text-warm-700",
  };

  return (
    <motion.div variants={fadeInUp}>
      <Link
        href={href}
        className={cn(
          "block group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 h-full",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
            <FileText className="w-5 h-5 text-teal-600" />
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-2",
                typeColors[type]
              )}
            >
              {type}
            </span>
            <h3 className="font-heading text-base font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors line-clamp-2">
              {title}
            </h3>
            {authors && (
              <p className="text-sm text-slate-500 mb-2 line-clamp-1">
                {authors}
              </p>
            )}
            <div className="flex items-center justify-between">
              {date && (
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {date}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
