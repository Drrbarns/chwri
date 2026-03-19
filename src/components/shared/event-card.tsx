"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  type: "Conference" | "Workshop" | "Training" | "Community Event" | "Webinar";
  href?: string;
  className?: string;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  type,
  href = "#",
  className,
}: EventCardProps) {
  const typeColors = {
    Conference: "bg-teal-100 text-teal-700",
    Workshop: "bg-sage-100 text-sage-700",
    Training: "bg-warm-100 text-warm-700",
    "Community Event": "bg-teal-100 text-teal-700",
    Webinar: "bg-slate-100 text-slate-700",
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
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-50 flex flex-col items-center justify-center border border-teal-100">
            <span className="text-xs text-teal-500 font-medium leading-none">
              {date.split(" ")[0]}
            </span>
            <span className="text-lg text-teal-800 font-bold leading-tight">
              {date.split(" ")[1]}
            </span>
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
            <h3 className="font-heading text-base font-semibold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              {time && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {time}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
