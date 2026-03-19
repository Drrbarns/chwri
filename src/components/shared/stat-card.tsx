"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export function StatCard({ value, label, dark = false, className }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "text-center px-6 py-8 rounded-2xl",
        dark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-teal-100/50 shadow-sm",
        className
      )}
    >
      <div
        className={cn(
          "font-heading text-4xl lg:text-5xl font-bold tracking-tight",
          dark ? "text-white" : "text-teal-700"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-medium",
          dark ? "text-teal-200/70" : "text-slate-500"
        )}
      >
        {label}
      </div>
    </motion.div>
  );
}
