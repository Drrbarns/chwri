"use client";

import Link from "next/link";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { EventCard } from "@/components/shared/event-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

const upcomingEvents = [
  {
    title: "Community Health Research Methods Workshop",
    description:
      "Hands-on sessions on study design, ethical community engagement, and data collection tailored to northern Ghana contexts—with facilitators from CHWRI and partner institutions.",
    date: "Apr 15",
    time: "09:00 – 16:00 GMT",
    location: "Walewale",
    type: "Workshop" as const,
    href: "#register-workshop",
  },
  {
    title: "Annual Health Systems Dialogue",
    description:
      "District leaders, clinicians, and researchers convene to share evidence on primary care access, referral quality, and resilient service delivery across the North-East Region.",
    date: "May 22",
    time: "08:30 – 17:00 GMT",
    location: "Tamale",
    type: "Conference" as const,
    href: "#register-dialogue",
  },
  {
    title: "Community Health Worker Refresher Training",
    description:
      "Competency updates on triage, danger signs, respectful communication, and documentation—aligned with national CHW policy and supervised practice in Walewale District.",
    date: "Jun 08",
    time: "08:00 – 15:00 GMT",
    location: "Walewale District",
    type: "Training" as const,
    href: "#register-chw",
  },
  {
    title: "Community Health Awareness Day",
    description:
      "Open-air screenings, counselling corners, and family-friendly education on nutrition, immunisation, and mental wellbeing—co-hosted with local leaders and volunteers.",
    date: "Jun 20",
    time: "09:00 – 14:00 GMT",
    location: "Walewale",
    type: "Community Event" as const,
    href: "#awareness-day",
  },
];

const pastEvents = [
  {
    title: "North-East Primary Care & Referral Symposium",
    description:
      "Held November 2024. District teams reviewed referral pathways, feedback loops, and quality metrics—with action plans adopted by three sub-districts.",
    date: "Nov 12",
    location: "Tamale",
    type: "Conference" as const,
    href: "#past-symposium",
  },
  {
    title: "Data Use for Frontline Decision-Making",
    description:
      "Completed September 2024. CHWs and supervisors practised simple registers, trend interpretation, and reporting rhythms without overburdening volunteers.",
    date: "Sep 05",
    location: "Walewale",
    type: "Workshop" as const,
    href: "#past-data",
  },
  {
    title: "Maternal Nutrition & First 1,000 Days",
    description:
      "January 2024 webinar series for partners and students—recordings summarised complementary feeding, iron folate uptake, and counselling scripts.",
    date: "Jan 24",
    location: "Online",
    type: "Webinar" as const,
    href: "#past-nutrition",
  },
];

const trainingPillars = [
  {
    icon: GraduationCap,
    title: "Competency-based curricula",
    body:
      "Modular courses for CHWs, peer educators, and facility teams—mapped to national guidelines and local supervision structures.",
  },
  {
    icon: Users,
    title: "Mentorship & supportive supervision",
    body:
      "On-site coaching, case discussions, and quality circles so new skills translate into consistent practice in facilities and communities.",
  },
  {
    icon: BookOpen,
    title: "Research literacy",
    body:
      "Short programmes on reading evidence, community consent, and translating findings into programmes that communities recognise as useful.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment & certification",
    body:
      "Practical checks, reflective portfolios, and district sign-off where appropriate—so completion reflects real capability, not attendance alone.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Events & Trainings"
        title="Building Knowledge, Strengthening Capacity"
        subtitle="CHWRI convenes workshops, dialogues, and trainings in Walewale and across northern Ghana—grounded in community priorities and rigorous health research."
        heroImage="/images/news/policy-dialogue.jpg"
      />

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Upcoming"
            title="Upcoming events"
            subtitle="Save the date for gatherings that blend evidence, practice, and community voice. Registration details and agendas will be published as each date approaches."
            align="center"
          />
          <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </StaggerChildren>
          <AnimateOnScroll
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
          >
            <Calendar className="w-4 h-4 text-teal-600 shrink-0" aria-hidden />
            <span className="font-heading">
              Prefer email updates?{" "}
              <Link
                href="/contact"
                className="font-semibold text-teal-700 hover:text-teal-800 underline-offset-4 hover:underline"
              >
                Contact CHWRI
              </Link>{" "}
              to join the events mailing list.
            </span>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Archive"
            title="Past events"
            subtitle="A selection of recent convenings that shaped programmes, policy conversations, and district capacity in the North-East Region and beyond."
            align="center"
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pastEvents.map((event) => (
              <EventCard
                key={event.title}
                {...event}
                className="opacity-90 border-slate-100/80"
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Capacity building"
            title="Training programmes"
            subtitle="Beyond one-off events, CHWRI sustains ongoing training and technical assistance for CHWRI-affiliated teams, district partners, and community collaborators in Walewale and the wider region."
            align="center"
          />
          <AnimateOnScroll
            variants={fadeInUp}
            className={cn(
              "rounded-2xl border border-teal-100/80 bg-white p-8 sm:p-10 lg:p-12 shadow-sm"
            )}
          >
            <p className="font-heading text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto text-pretty">
              Our training stack blends classroom instruction, supervised field
              practice, and reflective debriefs—so participants leave with tools
              they can use the following week. Programmes are co-designed with
              district health leadership and aligned with CHWRI&rsquo;s research
              and intervention priorities: primary care quality, community
              mental health, maternal and child health, and health systems
              resilience.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-6 lg:gap-8">
              {trainingPillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-warm-50/60 p-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" aria-hidden />
              <span className="font-heading text-center">
                In-person hubs in Walewale; selected modules delivered hybrid for
                partners in Tamale and Accra.
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Join Our Next Event"
        subtitle="Tell us your role—community member, CHW, student, or partner organisation—and we will share registration steps, accessibility options, and preparatory materials."
        primaryCta={{ label: "Register interest", href: "/contact" }}
        secondaryCta={{ label: "Explore partnerships", href: "/partnerships" }}
        variant="teal"
      />
    </>
  );
}
