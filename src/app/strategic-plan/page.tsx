"use client";

import {
  Activity,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Compass,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  slideInLeft,
  slideInRight,
  motion,
} from "@/lib/motion";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";

const strategicPillars = [
  {
    icon: FlaskConical,
    title: "Implementation Research",
    goal: "Generate actionable evidence that bridges policy and practice.",
    objectives: [
      "Conduct multidisciplinary implementation research on priority health challenges.",
      "Translate findings into practical policies and interventions.",
      "Establish CHWRI Implementation Research Network.",
      "Support evidence uptake in government and partner programmes.",
    ],
    outcomes: [
      "Research-to-policy pathways institutionalized.",
      "Evidence informs national and regional decisions.",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Learning",
    goal: "Strengthen data-driven decision-making and institutional learning.",
    objectives: [
      "Develop a results-based MEL framework.",
      "Build capacity in data management and analysis.",
      "Establish digital dashboards for performance tracking.",
      "Document and share implementation lessons.",
    ],
    outcomes: [
      "Transparent performance monitoring.",
      "Stronger use of evidence in programme decisions.",
    ],
  },
  {
    icon: Network,
    title: "Research & Learning",
    goal: "Foster a knowledge-driven organization producing evidence for policy change.",
    objectives: [
      "Position CHWRI as a learning hub.",
      "Create research communities of practice.",
      "Host annual Research and Learning Forums.",
      "Support peer-reviewed publication and policy translation.",
    ],
    outcomes: [
      "Increased research visibility and influence.",
      "Higher uptake of local evidence by decision-makers.",
    ],
  },
  {
    icon: Building2,
    title: "Health System Strengthening",
    goal: "Contribute to resilient and equitable health systems.",
    objectives: [
      "Support district and regional data-driven planning.",
      "Collaborate with facilities on quality of care improvement.",
      "Strengthen leadership and governance systems.",
      "Promote digital tools for coordination and continuity.",
    ],
    outcomes: [
      "Improved service coordination and quality.",
      "Strengthened institutional capability at multiple levels.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Improvement",
    goal: "Institutionalize quality improvement practices across partner facilities.",
    objectives: [
      "Establish QI teams in collaborating facilities.",
      "Develop SOPs and practical QI frameworks.",
      "Facilitate cross-facility learning exchanges.",
      "Run performance audits with feedback loops.",
    ],
    outcomes: [
      "Sustained quality improvement culture.",
      "Routine data-informed performance management.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    goal: "Strengthen human and institutional capacity.",
    objectives: [
      "Deliver short courses and fellowships.",
      "Train community health officers on evidence use.",
      "Establish mentorship pathways.",
      "Develop CHWRI Training Hub.",
    ],
    outcomes: [
      "Skilled and adaptive public health workforce.",
      "Improved institutional delivery capability.",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Creativity & Innovation",
    goal: "Promote creative problem-solving and digital innovation.",
    objectives: [
      "Launch CHWRI Innovation Lab.",
      "Support youth and community innovators.",
      "Leverage AI and telehealth tools responsibly.",
      "Build partnerships with technology organizations.",
    ],
    outcomes: [
      "Scalable innovations improving health outcomes.",
      "Digital tools integrated into routine programmes.",
    ],
  },
] as const;

const implementationLevels = [
  {
    level: "National",
    detail:
      "Policy alignment and advocacy with the Ministry of Health, Ghana Health Service, academia, and national partners.",
  },
  {
    level: "Regional",
    detail:
      "Capacity building, mentorship, and technical support through regional learning networks and institutional collaboration.",
  },
  {
    level: "District",
    detail:
      "Integration of implementation research and quality improvement initiatives into day-to-day service delivery systems.",
  },
  {
    level: "Community",
    detail:
      "Participatory engagement, local ownership, and empowerment through co-designed interventions and learning cycles.",
  },
] as const;

const governance = [
  "Board of Directors provides strategic oversight and governance stewardship.",
  "CEO/Managing Director leads institutional strategy, operations, and accountability.",
  "Management Team coordinates programmes, partnerships, and resources.",
  "Thematic Leads oversee research, MEL, QI, capacity building, and innovation.",
  "Project Teams implement field activities, monitor progress, and report outcomes.",
] as const;

const impact2030 = [
  "Stronger evidence base for health policy and implementation practice.",
  "Improved service quality and system efficiency across programme areas.",
  "Enhanced institutional and community capacity for sustained wellbeing outcomes.",
  "Increased adoption of innovation in health and wellbeing programmes.",
] as const;

export default function StrategicPlanPage() {
  return (
    <>
      <PageHero
        badge="Strategic Plan 2025–2030"
        title="Advancing Health, Wellbeing, and Innovation Through Research, Learning, and Implementation"
        subtitle="CHWRI's five-year roadmap aligns evidence, policy, and community action to strengthen health systems and improve wellbeing outcomes across Ghana and sub-Saharan Africa."
        heroImage="/images/partners/partner-academic.jpg"
      />

      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Executive Summary"
            title="A Five-Year Roadmap for Transformative Impact"
            subtitle="From 2025 to 2030, CHWRI will scale implementation research, strengthen systems, and invest in innovation to bridge the gap between policy ambition and community reality."
          />
          <AnimateOnScroll className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-100 p-8 lg:p-10 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-lg text-pretty">
              Rooted in SDG 3 (Good Health and Wellbeing), SDG 9 (Industry, Innovation and
              Infrastructure), and SDG 17 (Partnerships for the Goals), this strategy positions CHWRI
              as a trusted implementation and learning partner. It sets a practical pathway to improve
              quality of care, accelerate evidence uptake, strengthen local capacity, and deliver scalable
              innovations that improve lives.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Direction"
            title="Vision, Mission, and Values"
            subtitle="Our strategic direction is anchored in equity, institutional integrity, and practical innovation."
          />
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-teal-50 to-sage-50 border border-teal-100/80 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  <Compass className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-3">Vision</h3>
                <p className="text-slate-700 leading-relaxed">
                  A healthier and more equitable society where innovation, evidence, and community
                  partnerships drive sustainable wellbeing.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  <Target className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-3">Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  To advance health and wellbeing through implementation research, capacity building, and
                  innovative interventions that connect policy and community action.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">Core Values</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  "Equity and Inclusion",
                  "Integrity",
                  "Innovation",
                  "Collaboration",
                  "Excellence",
                ].map((value) => (
                  <div
                    key={value}
                    className="rounded-xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm font-medium text-teal-800"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Strategic Pillars"
            title="Seven Interlinked Pillars (2025–2030)"
            subtitle="Our implementation model combines research, systems strengthening, quality improvement, training, and innovation for measurable outcomes."
          />
          <StaggerChildren className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {strategicPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp}>
                <div className="h-full rounded-3xl bg-white border border-slate-100 shadow-sm p-7">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                    <pillar.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{pillar.goal}</p>
                  <p className="text-xs font-semibold tracking-wider uppercase text-teal-700 mb-2">
                    Objectives
                  </p>
                  <ul className="space-y-2 mb-4">
                    {pillar.objectives.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold tracking-wider uppercase text-teal-700 mb-2">
                    Expected Outcomes
                  </p>
                  <ul className="space-y-2">
                    {pillar.outcomes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <Sparkles className="w-4 h-4 text-sage-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Translation Framework"
            title="From Policy to Community Action"
            subtitle="Implementation strength depends on coherence across levels of the health system."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationLevels.map((item) => (
              <motion.div
                key={item.level}
                variants={fadeInUp}
                className="rounded-2xl border border-slate-100 bg-warm-50/60 p-6"
              >
                <p className="text-xs font-semibold tracking-wider uppercase text-teal-700 mb-2">
                  {item.level} Level
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Governance & Learning"
            title="Implementation Architecture"
            subtitle="A clear governance model, strong MEL systems, and diversified resource pathways support long-term execution."
          />
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll variants={slideInLeft} className="lg:col-span-1">
              <div className="h-full rounded-3xl bg-white border border-slate-100 p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                  Governance Structure
                </h3>
                <ul className="space-y-2.5">
                  {governance.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={fadeInUp} className="lg:col-span-1">
              <div className="h-full rounded-3xl bg-white border border-slate-100 p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                  <Activity className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                  MEL Framework
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                  <li>Annual performance reviews and institutional learning workshops.</li>
                  <li>KPIs aligned with SDGs and national health priorities.</li>
                  <li>Mid-term evaluation (2027) and end-line review (2030).</li>
                  <li>Policy briefs and learning reports produced routinely.</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight} className="lg:col-span-1">
              <div className="h-full rounded-3xl bg-white border border-slate-100 p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                  <Lightbulb className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                  Resource Mobilization
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                  <li>Competitive research grants and strategic funding calls.</li>
                  <li>Development partner collaborations and co-investment models.</li>
                  <li>Consultancy and technical support services.</li>
                  <li>Institutional endowment and innovation financing pathways.</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Expected Impact by 2030"
            title="What Success Looks Like"
            subtitle="By the end of this strategy cycle, CHWRI aims to deliver measurable system and community outcomes."
          />
          <AnimateOnScroll>
            <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50 to-sage-50 p-8 lg:p-10">
              <ul className="grid md:grid-cols-2 gap-4">
                {impact2030.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Partner With CHWRI on the 2025–2030 Agenda"
        subtitle="If your institution is aligned with evidence-driven implementation, system strengthening, and innovation for equitable health outcomes, we welcome strategic collaboration."
        primaryCta={{ label: "Start a Partnership Conversation", href: "/partnerships" }}
        secondaryCta={{ label: "Contact CHWRI", href: "/contact" }}
      />
    </>
  );
}
