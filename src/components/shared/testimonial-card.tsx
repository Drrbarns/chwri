"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  location,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <div
        className={cn(
          "relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm h-full",
          className
        )}
      >
        <Quote className="w-8 h-8 text-teal-200 mb-4" />
        <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-200 to-sage-200 flex items-center justify-center">
            <span className="text-teal-800 text-sm font-semibold">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{name}</p>
            <p className="text-xs text-slate-500">
              {role}
              {location && ` — ${location}`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
