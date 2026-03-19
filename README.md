# CHWRI — Centre for Health & Wellbeing Research and Interventions

A premium, world-class institutional website for the Centre for Health & Wellbeing Research and Interventions (CHWRI), a multidisciplinary health and wellbeing hub based in Walewale, Ghana.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Site Architecture

| Route | Page |
|---|---|
| `/` | Homepage |
| `/about` | About CHWRI |
| `/our-work` | Our Work Overview |
| `/research` | Research |
| `/interventions` | Interventions |
| `/health-systems-strengthening` | Health Systems Strengthening |
| `/programs` | Programs & Projects |
| `/publications` | Publications & Reports |
| `/partnerships` | Partnerships |
| `/news` | News & Insights |
| `/events` | Events & Trainings |
| `/get-involved` | Get Involved |
| `/contact` | Contact Us |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens and global styles
│   └── [route]/
│       ├── layout.tsx      # SEO metadata
│       └── page.tsx        # Page component
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── shared/             # Reusable section components
│   │   ├── article-card    # News/blog article cards
│   │   ├── contact-form    # Contact form component
│   │   ├── cta-section     # Call-to-action sections
│   │   ├── event-card      # Event listing cards
│   │   ├── feature-card    # Feature/service cards
│   │   ├── page-hero       # Inner page hero banners
│   │   ├── project-card    # Programme/project cards
│   │   ├── publication-card # Research publication cards
│   │   ├── section-header  # Section title + subtitle
│   │   ├── stat-card       # Impact statistics cards
│   │   ├── testimonial-card # Quote/testimonial cards
│   │   └── value-card      # Core values cards
│   └── ui/                 # shadcn/ui base components
└── lib/
    ├── constants.ts        # Navigation, contact info, values
    ├── motion.tsx          # Framer Motion variants and wrappers
    └── utils.ts            # Utility functions (cn)
```

## Design System

### Brand Colours

- **Primary Teal** (`teal-700`): Trust, health, intellect
- **Secondary Sage** (`sage-500`): Wellbeing, growth
- **Warm Off-White** (`warm-50`): Warm backgrounds
- **Slate** (`slate-700`): Body text, sophistication
- **Accent Gold** (`warm-400`): Sparingly for highlights

### Typography

- **Headings:** Playfair Display — editorial, authoritative
- **Body:** DM Sans — clean, readable, modern

## CMS Integration Notes

This site is built with a CMS-ready architecture. To integrate a headless CMS:

1. **Content models** map directly to the component props (ProjectCard, PublicationCard, ArticleCard, EventCard, etc.)
2. **Static generation** is used for all pages — switch to `generateStaticParams` for dynamic routes
3. **Image handling** — replace gradient placeholders with `next/image` using your CMS image URLs
4. **Forms** — connect the ContactForm component to your backend or form service

Recommended CMS options: Sanity, Strapi, Contentful, or Payload CMS.

## Deployment

This is a standard Next.js application. Deploy to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify:** Use the Next.js adapter
- **Self-hosted:** `npm run build && npm start`

## License

Copyright CHWRI. All rights reserved.
