"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Handshake,
  Microscope,
  Newspaper,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  slideInLeft,
  slideInRight,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/shared/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const QUICK_INQUIRIES = [
  {
    title: "Partnerships",
    description:
      "Explore institutional collaboration, co-design of programmes, and long-term alliances aligned with CHWRI’s mission.",
    href: "/partnerships",
    icon: Handshake,
  },
  {
    title: "Research",
    description:
      "Discuss study ideas, ethics pathways, data partnerships, and how your organisation can engage with our research agenda.",
    href: "/research",
    icon: Microscope,
  },
  {
    title: "Media",
    description:
      "Request interviews, expert comment, background briefings, or assets for stories on health and wellbeing in northern Ghana.",
    href: `mailto:${CONTACT_INFO.email}?subject=Media%20inquiry`,
    icon: Newspaper,
    external: true,
  },
  {
    title: "General",
    description:
      "Any other question about CHWRI’s work, visits, or how to stay in touch—we read every message and respond as soon as we can.",
    href: "#contact-form",
    icon: MessageSquare,
  },
] as const;

const FAQS = [
  {
    question: "What areas does CHWRI focus on?",
    answer:
      "CHWRI works across community health, maternal and child health, preventive care, health equity, mental wellbeing, and health systems strengthening. We combine rigorous research with interventions that are feasible in real-world settings, with Walewale and the North-East Region as our home base.",
  },
  {
    question: "How can I partner with CHWRI?",
    answer:
      "Start by telling us about your organisation and goals—via the form on this page or our partnerships section. We then explore fit, ethics, timelines, and governance. Partners include academic institutions, health facilities, NGOs, and community structures, depending on the programme.",
  },
  {
    question: "Where is CHWRI located?",
    answer:
      `We are based in Walewale, North-East Region, Ghana. Our mailing address is ${CONTACT_INFO.address}. Use the map below for an approximate location; for visits, please contact us in advance so we can arrange a suitable time.`,
  },
  {
    question: "How do I volunteer or collaborate?",
    answer:
      "Use the contact form and choose the relevant subject, or email us directly. Briefly describe your skills, availability, and interests. We occasionally recruit for specific projects and welcome expressions of interest for research assistance, community engagement, and professional collaboration.",
  },
  {
    question: "Can I access CHWRI publications?",
    answer:
      "Yes. Our publications page lists reports, briefs, and peer-reviewed outputs where available. If you need a specific document or citation, mention it in your message and we will point you to the right resource or contact.",
  },
] as const;

const websiteHref = CONTACT_INFO.website.startsWith("http")
  ? CONTACT_INFO.website
  : `https://${CONTACT_INFO.website}`;

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero badge="Contact Us" title="Let's Start a Conversation" />

      {/* Contact grid */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Get in touch"
            title="Send a message or reach us directly"
            subtitle="Whether you are exploring partnership, research, or a general question, we are glad to hear from you."
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimateOnScroll variants={slideInLeft}>
              <div
                id="contact-form"
                className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 lg:p-10 scroll-mt-24"
              >
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                  Write to us
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Fields marked as required help us route your message to the right team.
                </p>
                <ContactForm variant="default" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight} className="space-y-5">
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <MapPin className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    Address
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Phone className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-800 mb-2">
                    Phone
                  </h4>
                  <ul className="space-y-2">
                    {CONTACT_INFO.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-teal-700 font-medium hover:text-teal-900 transition-colors"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Mail className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-teal-700 font-medium hover:text-teal-900 transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Globe className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    Website
                  </h4>
                  <a
                    href={websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 font-medium hover:text-teal-900 transition-colors"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Clock className="w-5 h-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-800 mb-1">
                    Office hours
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Monday–Friday, 8:00 a.m.–5:00 p.m. (GMT). Outside these hours, email us and we will reply on the next business day.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Location"
            title="Find us in Walewale"
            subtitle="CHWRI is rooted in Ghana’s North-East Region. An interactive map can be embedded here when ready."
          />
          <AnimateOnScroll>
            <div
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sage-100/80 via-teal-50 to-warm-100 min-h-[320px] lg:min-h-[400px] shadow-inner"
              role="img"
              aria-label="Map placeholder: Walewale, North-East Region, Ghana"
            >
              <div className="absolute inset-0 opacity-[0.12] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmNzY2ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-lg">
                  <MapPin className="w-8 h-8" aria-hidden />
                </div>
                <p className="font-heading text-lg font-semibold text-slate-900">Walewale, Ghana</p>
                <p className="mt-1 text-sm text-slate-600 max-w-md">
                  North-East Region · Approximate map area for CHWRI
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-teal-700 font-semibold">
                  Embedded map placeholder
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quick inquiry */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Quick paths"
            title="What brings you here?"
            subtitle="Choose a starting point—we will still read everything you send through the main form."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_INQUIRIES.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                    Continue
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </>
              );
              const cardClass =
                "group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md";

              return (
                <motion.div key={item.title} variants={fadeInUp}>
                  {"external" in item && item.external ? (
                    <a href={item.href} className={cn(cardClass, "text-left")}>
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className={cn(cardClass, "text-left")}>
                      {content}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="FAQ"
            title="Common questions"
            subtitle="Short answers to what people often ask before they write. Still unsure? Use the form above."
          />
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <AnimateOnScroll key={faq.question} delay={index * 0.05}>
                  <div
                    className={cn(
                      "rounded-2xl border border-slate-100 bg-warm-50/50 overflow-hidden transition-colors",
                      isOpen && "border-teal-200 bg-white shadow-sm"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left px-5 py-4 lg:px-6 lg:py-5 font-heading font-semibold text-slate-900 hover:bg-white/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base lg:text-lg pr-2">{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 flex-shrink-0 text-teal-600 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 lg:px-6 lg:pb-6 pt-0">
                        <p className="text-slate-600 leading-relaxed text-pretty border-t border-slate-100 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
