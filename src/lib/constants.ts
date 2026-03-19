export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Core Values", href: "/about#values" },
      { label: "Our Team", href: "/about#team" },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Overview", href: "/our-work" },
      { label: "Research", href: "/research" },
      { label: "Interventions", href: "/interventions" },
      {
        label: "Health Systems Strengthening",
        href: "/health-systems-strengthening",
      },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Programs", href: "/programs" },
  { label: "Publications", href: "/publications" },
  { label: "Partnerships", href: "/partnerships" },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "News & Insights", href: "/news" },
      { label: "Events & Trainings", href: "/events" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Vision & Mission", href: "/about#vision-mission" },
    { label: "Our Team", href: "/about#team" },
    { label: "Core Values", href: "/about#values" },
    { label: "Careers", href: "/careers" },
  ],
  work: [
    { label: "Research", href: "/research" },
    { label: "Interventions", href: "/interventions" },
    { label: "Health Systems", href: "/health-systems-strengthening" },
    { label: "Programs & Projects", href: "/programs" },
    { label: "Publications", href: "/publications" },
  ],
  engage: [
    { label: "Partner With Us", href: "/partnerships" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "News & Insights", href: "/news" },
    { label: "Events & Trainings", href: "/events" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export const CONTACT_INFO = {
  address: "Box 66, Walewale, North-East Region, Ghana",
  phones: ["+233 553311101", "+233 245711165"],
  email: "contact@chwri.org",
  website: "www.chwri.org",
};

export const CORE_VALUES = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our research, partnerships, and community engagements.",
    icon: "Shield",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest quality in research, service delivery, and every aspect of our work.",
    icon: "Award",
  },
  {
    title: "Innovation",
    description:
      "We embrace creative approaches and new methodologies to solve complex health challenges.",
    icon: "Lightbulb",
  },
  {
    title: "Equity",
    description:
      "We are committed to reducing health disparities and ensuring fair access to care for all communities.",
    icon: "Scale",
  },
  {
    title: "Collaboration",
    description:
      "We work alongside communities, institutions, and partners to create shared solutions and lasting impact.",
    icon: "Handshake",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the tangible improvements we bring to people\u2019s health and wellbeing.",
    icon: "Target",
  },
] as const;

export const THEMATIC_AREAS = [
  {
    title: "Community Health",
    description:
      "Strengthening community-based health systems and primary care delivery in underserved regions.",
    icon: "Heart",
    href: "/our-work#community-health",
  },
  {
    title: "Maternal & Child Health",
    description:
      "Improving outcomes for mothers and children through evidence-based prenatal, natal, and postnatal care.",
    icon: "Baby",
    href: "/our-work#maternal-child-health",
  },
  {
    title: "Preventive Health",
    description:
      "Promoting disease prevention strategies, immunisation, and health education programmes.",
    icon: "ShieldCheck",
    href: "/our-work#preventive-health",
  },
  {
    title: "Health Equity",
    description:
      "Addressing social determinants of health and reducing disparities in access to quality care.",
    icon: "Scale",
    href: "/our-work#health-equity",
  },
  {
    title: "Mental Wellbeing",
    description:
      "Advancing mental health research, reducing stigma, and integrating psychosocial support into care systems.",
    icon: "Brain",
    href: "/our-work#mental-wellbeing",
  },
  {
    title: "Health Systems Innovation",
    description:
      "Building resilient, responsive health systems through data-driven policies and workforce development.",
    icon: "Activity",
    href: "/our-work#health-systems",
  },
] as const;

export const IMPACT_STATS = [
  { value: "15+", label: "Research Projects", suffix: "" },
  { value: "25,000+", label: "Lives Impacted", suffix: "" },
  { value: "12", label: "Community Partners", suffix: "" },
  { value: "8", label: "Thematic Areas", suffix: "" },
] as const;
