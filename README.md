# Aiyoflow Media - Next.js Bilingual Website

A beautifully designed, founder-led creative strategy studio website with English and Chinese support.

## Features

✨ **Design System**
- Editorial-focused typography with Playfair Display + Inter
- Soft color palette (cream, charcoal, sky blue, sage green)
- Smooth animations and hover effects
- Mobile-first responsive design

🌍 **Bilingual Support**
- English (EN) and Chinese (中文) 
- URL-based routing: `/en/*` and `/zh/*`
- Easy language switching
- Separate content files for each language

🏗️ **Complete Pages**
- Home with hero, services, case studies, and how-we-work sections
- Services page with detailed descriptions
- About page with founder story and approach
- Case studies listing and detail pages
- Contact form

♻️ **Reusable Components**
- Navbar with language switcher
- Footer
- Hero section
- Cards and case cards
- Process/steps component
- CTA blocks
- Section wrappers

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Root redirect to /en
│   ├── layout.tsx              # Root layout
│   └── [locale]/
│       ├── layout.tsx          # Locale-specific layout with Navbar/Footer
│       ├── page.tsx            # Home page
│       ├── services/
│       │   └── page.tsx        # Services page
│       ├── about/
│       │   └── page.tsx        # About page
│       ├── case-studies/
│       │   ├── page.tsx        # Case studies list
│       │   └── [slug]/
│       │       └── page.tsx    # Case study detail
│       └── contact/
│           └── page.tsx        # Contact form
├── components/
│   ├── Navbar.tsx              # Navigation with language switcher
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Hero section
│   ├── Card.tsx                # Reusable card component
│   ├── CaseCard.tsx            # Case study card
│   ├── Process.tsx             # Step/process component
│   ├── Section.tsx             # Section wrapper
│   └── CTABlock.tsx            # Call-to-action block
├── content/
│   ├── en.json                 # English content
│   └── zh.json                 # Chinese content
├── lib/
│   ├── i18n.ts                 # i18n utilities
│   └── translations.ts         # Translation helpers
├── styles/
│   └── globals.css             # Design system + utility styles
└── middleware.ts               # Locale routing middleware

public/
└── images/                     # Images directory

tailwind.config.ts             # Tailwind configuration with design tokens
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

The app will automatically redirect to `/en` (English).

## Configuration

### Adding New Locales

1. Create a new content file: `src/content/[locale].json`
2. Update `src/lib/i18n.ts`:
   ```typescript
   export const locales: Locale[] = ['en', 'zh', 'fr']; // add new locale
   ```
3. Test the URL: `http://localhost:3000/[locale]`

### Updating Content

Edit the content JSON files:
- `src/content/en.json` - English text
- `src/content/zh.json` - Chinese text

Structure mirrors the page hierarchy for easy updates.

### Design System Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  cream: { 50, 100, 200, 300 },      // Warm neutral base
  charcoal: { 800, 900 },             // Typography
  sky: { 100, 200, 400, 500 },        // Accent blue
  sage: { 100, 200, 400, 500 },       // Accent green
}
```

Update corresponding CSS variables in `src/styles/globals.css`.

### Typography

Using Playfair Display (headings) + Inter (body):
- Already loaded via Google Fonts in layout.tsx
- Custom scale in tailwind.config.ts
- Component classes available (h1-h6, p, etc.)

## Components Guide

### Navbar
```tsx
<Navbar locale="en" t={translations} />
```
- Auto language switcher
- Mobile hamburger menu
- Sticky header

### Section
```tsx
<Section title="Title" subtitle="Subtitle" bgColor="white">
  {children}
</Section>
```
- Options: `bgColor="cream" | "white" | "charcoal"`
- Centered layout with max-width container

### Card
```tsx
<Card 
  title="Card Title"
  description="Description text"
  hover={true}
/>
```

### CaseCard
```tsx
<CaseCard
  title="Case Title"
  category="Category"
  slug="case-slug"
  href={`/${locale}/case-studies/case-slug`}
/>
```

### Process
```tsx
<Process steps={[
  { number: "01", title: "Step 1", description: "..." },
  { number: "02", title: "Step 2", description: "..." }
]} />
```

### CTABlock
```tsx
<CTABlock
  headline="Headline"
  subheading="Subheading"
  ctaText="Button"
  ctaHref="/path"
  variant="light" | "dark" | "gradient"
/>
```

## Styling

### Utility Classes

The design system provides custom Tailwind classes:

```css
.btn-primary        /* Dark button */
.btn-secondary      /* Outlined button */
.btn-gradient       /* Gradient button */
.btn-ghost          /* Text button with underline */

.card              /* Soft card with shadow */
.card-hover        /* Adds hover animation */

.section           /* Vertical padding */
.section-lg        /* Large vertical padding */

.container-max     /* Max-width container */
.grid-auto         /* 1-2-3 responsive grid */

.prose-base        /* Body text styling */
.gradient-text     /* Gradient text effect */
.gradient-soft-bg  /* Soft gradient background */

/* Animations */
.animate-fade-in
.animate-slide-up
.animate-float
```

### Creating Custom Styles

1. Add to `src/styles/globals.css` (global)
2. Use `@layer components` for utility classes
3. Use Tailwind `@apply` for DRY CSS

## Building for Production

```bash
npm run build
npm start
```

### Deployment

Deploy to Vercel:
```bash
vercel
```

Or any Node.js hosting:
1. Run `npm run build`
2. Deploy with `npm start`

## SEO & Meta Tags

Update in `src/app/[locale]/layout.tsx`:
```typescript
export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  return {
    title: 'Page Title',
    description: 'Page description',
    // Add more metadata as needed
  };
}
```

## Performance Optimizations

✓ Static page generation with `generateStaticParams`
✓ Image optimization with Next.js Image component
✓ CSS minification via Tailwind
✓ Code splitting per locale
✓ Middleware for efficient routing

## Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Focus states on buttons and links
- Color contrast meets WCAG standards
- Keyboard navigation support

## License

© 2024 Aiyoflow Media. All rights reserved.

## Support

For questions or issues, contact the development team.
