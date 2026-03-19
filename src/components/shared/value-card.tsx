"use client";

import {
  Shield,
  Award,
  Lightbulb,
  Scale,
  Handshake,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Award,
  Lightbulb,
  Scale,
  Handshake,
  Target,
};

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
  className?: string;
}

export function ValueCard({
  title,
  description,
  icon,
  index = 0,
  className,
}: ValueCardProps) {
  const Icon = iconMap[icon] || Shield;

  return (
    <motion.div variants={fadeInUp}>
      <div
        className={cn(
          "group relative p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 h-full",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0 group-hover:from-teal-200 group-hover:to-teal-300 transition-colors">
            <Icon className="w-5 h-5 text-teal-700" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-1.5">
              {title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
