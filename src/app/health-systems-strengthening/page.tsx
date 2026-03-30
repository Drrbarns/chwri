"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  GraduationCap,
  HeartPulse,
  LineChart,
  Link2,
  Package,
  Presentation,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HealthSystemsPage() {
  return (
    <main>
      <PageHero
        badge="Health Systems Strengthening"
        title="Building Resilient, Equitable Health Systems"
        heroImage="/images/projects/chw-training.jpg"
      />

      {/* Overview */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Overview"
            title="Systems work rooted in northern Ghana"
            subtitle="CHWRI partners with districts, facilities, and communities around Walewale to strengthen how care is organised, financed, and delivered—so progress lasts beyond any single project."
          />
          <AnimateOnScroll variants={fadeInUp}>
            <div className="rounded-3xl bg-white border border-slate-100/80 p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-6">
                Health systems strengthening at CHWRI connects implementation research with practical
                support: building skills where the workforce is stretched, improving the quality and
                continuity of services, and making sure data and community voices inform decisions at
                facility, district, and regional levels.
              </p>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Our work in the Upper East corridor recognises that resilient systems are equitable
                systems—reaching rural households, supporting women and children, and closing gaps
                between policy intent and what people experience at the front line.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  See how this fits our wider portfolio
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Health Workforce Support */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="People"
            title="Health workforce support"
            subtitle="Investing in those who deliver care—through structured training, professional growth, and sustained mentorship close to where they work."
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="h-full rounded-3xl bg-warm-50/60 border border-slate-100 p-8 lg:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-teal-100 shadow-sm">
                  <GraduationCap className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Training & frontline practice
                </h3>
                <BulletList
                  items={[
                    "Competency-based training for nurses, midwives, and allied staff aligned to national guidelines and local burden of disease.",
                    "On-site and blended learning so teams in Walewale and neighbouring districts can practise skills without long absences from service.",
                    "Simulation and case-based sessions focused on maternal and child health, infection prevention, and chronic care where services are expanding.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="h-full rounded-3xl bg-warm-50/60 border border-slate-100 p-8 lg:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-teal-100 shadow-sm">
                  <Users className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Professional development & mentorship
                </h3>
                <BulletList
                  items={[
                    "Structured mentorship linking facility teams with CHWRI facilitators and district clinical leads.",
                    "Peer learning circles for community health workers and facility staff to share challenges and solutions.",
                    "Career pathways support—documentation, reflective practice, and links to continuing professional development opportunities.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Service Delivery Improvement */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Services"
            title="Service delivery improvement"
            subtitle="Sharpening how care is experienced—clinical quality, respectful patient engagement, and reliable supplies for everyday practice."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={Stethoscope}
              title="Quality of care"
              description="Clinical audits, checklists, and supportive supervision that turn standards into routines—reducing harm and building confidence in rural facilities."
              variant="default"
              image="/images/partners/partner-health-institutions.jpg"
            />
            <FeatureCard
              icon={HeartPulse}
              title="Patient-centred approaches"
              description="Communication skills, waiting-time improvements, and feedback mechanisms so services respect dignity, language, and the realities of household travel and cost."
              variant="default"
              image="/images/partners/partner-communities.jpg"
            />
            <FeatureCard
              icon={Package}
              title="Supply chain & logistics"
              description="Tracking essential medicines and commodities, addressing stock-outs, and strengthening accountability between stores, facilities, and community delivery points."
              variant="default"
              image="/images/projects/chw-training.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Policy Translation */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Influence"
            title="Policy translation"
            subtitle="Closing the loop between what we learn in the field and what leaders decide—through briefings, dialogue, and co-produced recommendations."
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 lg:p-10 shadow-sm">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-sage-100">
                  <ClipboardCheck className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  From evidence to policy
                </h3>
                <BulletList
                  items={[
                    "Policy briefs and district memos that translate findings into feasible options—cost, staffing, and timeline included.",
                    "Joint interpretation sessions with managers so data are read in context, not as abstract scores.",
                    "Alignment with national programmes while making space for northern Ghana’s epidemiology and infrastructure constraints.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 lg:p-10 shadow-sm">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-sage-100">
                  <Building2 className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  District & regional engagement
                </h3>
                <BulletList
                  items={[
                    "Regular engagement with district health management teams on priorities, bottlenecks, and implementation learning.",
                    "Participation in regional technical working groups where CHWRI shares monitoring insights and implementation science perspectives.",
                    "Formal and informal feedback loops so community-level signals reach planners—not only facility reports.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Data Systems & Evidence Use */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Information"
            title="Data systems & evidence use"
            subtitle="Better registers, dashboards, and habits of review—so managers and clinicians can act on timely, trustworthy information."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={Database}
              title="Health information systems"
              description="Support for registers, electronic tools where available, and data standards that reduce duplication and clarify who is reached by which service."
              variant="filled"
              image="/images/partners/partner-academic.jpg"
            />
            <FeatureCard
              icon={LineChart}
              title="Data-driven decision-making"
              description="Facilitated review meetings, simple visual analytics, and indicators tied to quality and equity—not only activity counts."
              variant="filled"
              image="/images/news/policy-dialogue.jpg"
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="HMIS & reporting support"
              description="Validation, timeliness, and use of routine data—helping districts see patterns early and respond before gaps widen."
              variant="filled"
              image="/images/projects/maternal-health.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Community–Health Linkages */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Communities"
            title="Community–health linkages"
            subtitle="Community health workers and trusted structures bridge households and facilities—when referral, feedback, and engagement are intentional, outcomes improve."
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="h-full rounded-3xl bg-warm-50/50 border border-teal-100/60 p-8 lg:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-teal-100 shadow-sm">
                  <Link2 className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  CHWs as bridges
                </h3>
                <BulletList
                  items={[
                    "Clear roles between volunteers, CHOs, and facility teams—with supervision that protects workers and clarifies escalation.",
                    "Household follow-up after facility visits so treatment and prevention plans are understood and completed.",
                    "Referral systems that are two-way: facilities inform communities, and communities signal barriers early.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="h-full rounded-3xl bg-white border border-slate-100 p-8 lg:p-10 shadow-sm">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-sage-100">
                  <Users className="h-6 w-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Referral & community engagement
                </h3>
                <BulletList
                  items={[
                    "Mapped referral pathways with agreed triggers, transport considerations, and feedback when patients do not arrive as expected.",
                    "Community engagement platforms—dialogue days, women’s groups, and youth channels—aligned to district health priorities.",
                    "Integration with local governance so health messages and services reinforce, rather than compete with, community leadership structures.",
                  ]}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Capacity & Training */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Learning"
            title="Capacity & training"
            subtitle="Short courses, workshops, and continuing education that build institutional memory—not one-off events without follow-up."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={GraduationCap}
              title="Training programmes"
              description="Curricula co-designed with partners, covering systems topics from leadership and quality improvement to community engagement and ethics."
              href="/interventions"
              variant="outlined"
              image="/images/projects/chw-training.jpg"
            />
            <FeatureCard
              icon={Presentation}
              title="Workshops & intensives"
              description="Focused sessions for district teams and facility in-charges—problem-solving, action planning, and tools they can reuse after CHWRI facilitators step back."
              variant="outlined"
              image="/images/news/policy-dialogue.jpg"
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Continuous education"
              description="Refresher cycles, remote support, and light-touch coaching so new skills settle into practice and are refreshed as guidelines evolve."
              variant="outlined"
              image="/images/partners/partner-health-institutions.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      <CTASection
        title="Strengthen Health Systems With Us"
        subtitle="Partner with CHWRI to combine implementation support, learning, and respectful community engagement in Walewale and across northern Ghana. We work best alongside districts, NGOs, and funders who share long-term system goals—not only project outputs."
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore partnerships", href: "/partnerships" }}
        variant="teal"
      />
    </main>
  );
}
