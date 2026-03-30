"use client";

import Link from "next/link";
import { ArrowRight, Mail, Megaphone, Newspaper } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { ArticleCard } from "@/components/shared/article-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

const featuredExcerpt =
  "CHWRI has rolled out a district-wide initiative to recruit, train, and mentor community health workers serving Walewale and surrounding catchments. The programme pairs structured competency curricula with monthly supportive supervision, digital job aids, and strengthened referral links to primary facilities—so households receive consistent preventive counselling, early detection of danger signs, and timely escalation when care is needed.";

const articles: {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
  image: string;
}[] = [
  {
    title:
      "Mobile Outreach Clinics Extend Cervical Screening Uptake in Rural North East Settlements",
    excerpt:
      "Quarterly pop-up clinics coordinated with traditional leaders reached women who previously faced transport costs and long facility queues.",
    category: "Programme Updates",
    date: "Feb 2025",
    readTime: "5 min read",
    href: "#",
    image: "/images/news/chw-program-launch.jpg",
  },
  {
    title:
      "Cluster-Randomised Trial: Lay Counsellor Visits and Hypertension Control Among Adults 40+",
    excerpt:
      "Early results from CHWRI’s cardiovascular risk study suggest sustained blood-pressure checks at home improved linkage to care.",
    category: "Research Insights",
    date: "Jan 2025",
    readTime: "7 min read",
    href: "#",
    image: "/images/partners/partner-academic.jpg",
  },
  {
    title:
      "From Compound to Clinic: How One Women’s Group Became a Referral Bridge in Kpasenkpe",
    excerpt:
      "Members trained as peer navigators now accompany neighbours for antenatal bookings and postnatal reviews—building trust step by step.",
    category: "Community Stories",
    date: "Dec 2024",
    readTime: "6 min read",
    href: "#",
    image: "/images/partners/partner-communities.jpg",
  },
  {
    title:
      "Brief for District Assemblies: Financing Community Health Posts in Hard-to-Reach Wards",
    excerpt:
      "A concise policy note distils costing scenarios and governance options for sustaining frontline posts beyond donor cycles.",
    category: "Policy",
    date: "Nov 2024",
    readTime: "4 min read",
    href: "#",
    image: "/images/news/policy-dialogue.jpg",
  },
  {
    title:
      "Save the Date: North East Health Research & Practice Forum — Walewale, June 2025",
    excerpt:
      "Researchers, clinicians, and community partners will share implementation lessons across maternal health, nutrition, and mental wellbeing.",
    category: "Events",
    date: "Oct 2024",
    readTime: "2 min read",
    href: "#",
    image: "/images/projects/chw-training.jpg",
  },
  {
    title:
      "Seasonal Malaria Chemoprevention: CHWRI Supports District Monitoring and Household Counselling",
    excerpt:
      "Supervisors and volunteers aligned on dosing calendars, adverse-event reporting, and when to refer children with persistent fever.",
    category: "Programme Updates",
    date: "Sep 2024",
    readTime: "5 min read",
    href: "#",
    image: "/images/projects/maternal-health.jpg",
  },
];

const pressItems: { title: string; date: string; href: string }[] = [
  {
    title:
      "CHWRI and Walewale District Health Directorate sign collaboration framework on data quality and joint learning reviews.",
    date: "12 Mar 2025",
    href: "#",
  },
  {
    title:
      "Forty-two newly trained community health workers deployed across twelve communities after graduation ceremony in Walewale.",
    date: "28 Feb 2025",
    href: "#",
  },
  {
    title:
      "CHWRI welcomes visiting researchers from University of Ghana to co-design adolescent mental health scoping work.",
    date: "7 Feb 2025",
    href: "#",
  },
  {
    title:
      "District nutrition surveillance dashboard updated with CHWRI-supported community growth-monitoring tallies.",
    date: "22 Jan 2025",
    href: "#",
  },
  {
    title:
      "Media advisory: Director’s briefing on CHW programme scale-up scheduled for community radio partners.",
    date: "9 Jan 2025",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        badge="News & Insights"
        title="Stories, Updates, and Perspectives from CHWRI"
        heroImage="/images/news/chw-program-launch.jpg"
      />

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Featured"
            title="Highlight from the field"
            subtitle="An in-depth look at how CHWRI is expanding trusted frontline coverage in Walewale and the wider district."
            align="center"
          />
          <ArticleCard
            featured
            title="CHWRI Launches Comprehensive Community Health Worker Programme in Walewale District"
            excerpt={featuredExcerpt}
            category="Programme Update"
            date="March 2025"
            readTime="8 min read"
            href="#"
            image="/images/news/chw-program-launch.jpg"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Latest"
            title="Articles and updates"
            subtitle="Research findings, programme notes, community voices, policy perspectives, and upcoming gatherings—grounded in work across northern Ghana."
            align="center"
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Press desk"
            title="News in brief"
            subtitle="Short announcements for journalists, partners, and community stakeholders following CHWRI’s work in Walewale."
            align="center"
          />
          <AnimateOnScroll
            className={cn(
              "max-w-3xl mx-auto rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm"
            )}
          >
            <div className="flex items-center gap-2 text-teal-700 font-heading font-semibold text-sm mb-6">
              <Megaphone className="w-4 h-4 shrink-0" aria-hidden />
              Recent headlines
            </div>
            <StaggerChildren className="divide-y divide-slate-100">
              {pressItems.map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 py-5 first:pt-0 last:pb-0 font-heading"
                  >
                    <span className="text-slate-800 group-hover:text-teal-700 transition-colors leading-snug pr-4">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-slate-400 tabular-nums">
                      {item.date}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </StaggerChildren>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div
              className={cn(
                "max-w-3xl mx-auto rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/80 to-warm-50/60 p-8 lg:p-10 shadow-sm"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="rounded-2xl bg-white/80 border border-teal-100 p-4 shrink-0">
                  <Newspaper
                    className="w-8 h-8 text-teal-600"
                    aria-hidden
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                    Newsletter
                  </h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Occasional digests on new publications, programme
                    milestones, and events—without cluttering your inbox.
                  </p>
                  <form
                    className="mt-8 flex flex-col sm:flex-row gap-3"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <label className="sr-only" htmlFor="news-email">
                      Email address
                    </label>
                    <div className="relative flex-1">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                        aria-hidden
                      />
                      <input
                        id="news-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-300 font-heading text-sm sm:text-base"
                        autoComplete="email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-6 py-3.5 font-heading font-semibold text-white text-sm hover:bg-teal-800 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-slate-500 font-heading">
                    We respect your privacy. Unsubscribe anytime. For full
                    details, see our{" "}
                    <Link
                      href="/contact"
                      className="text-teal-700 underline-offset-2 hover:underline"
                    >
                      contact page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Have a Story to Share?"
        subtitle="Journalists, community partners, and researchers are welcome to reach out with story ideas, interview requests, or collaboration proposals centred on health and wellbeing in Walewale and beyond."
        primaryCta={{ label: "Contact CHWRI", href: "/contact" }}
        secondaryCta={{ label: "Explore our work", href: "/our-work" }}
      />
    </>
  );
}
