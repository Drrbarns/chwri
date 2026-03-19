"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function ContactForm({ variant = "default", className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Your first name"
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Your last name"
            className={inputClasses}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
          required
        />
      </div>
      {variant === "default" && (
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-slate-700 mb-1.5">
            Organisation (Optional)
          </label>
          <input
            id="organisation"
            type="text"
            placeholder="Your organisation"
            className={inputClasses}
          />
        </div>
      )}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          className={inputClasses}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="research">Research Collaboration</option>
          <option value="volunteer">Volunteering</option>
          <option value="media">Media Inquiry</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={variant === "compact" ? 3 : 5}
          placeholder="Tell us how we can help..."
          className={cn(inputClasses, "resize-none")}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
