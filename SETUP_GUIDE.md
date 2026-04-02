# Aiyoflow Media - Project Setup Guide

## ✨ Overview

You've successfully created a **professional, bilingual Next.js website for Aiyoflow Media** with:

- **Bilingual support**: English + Chinese with URL-based routing (`/en`, `/zh`)
- **Editorial-first design**: Strong typography, clean layout, soft color palette
- **Founder-led positioning**: Personal but premium feel
- **Fully optimized**: Pre-rendered static pages, TypeScript, Tailwind CSS
- **Production-ready**: Builds successfully, SEO-friendly, accessible

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                  # Root redirect to /en
│   ├── middleware.ts              # Locale routing
│   └── [locale]/
│       ├── layout.tsx            # Locale wrapper with Navbar/Footer
│       ├── page.tsx              # Home page
│       ├── services/page.tsx      # Services
│       ├── about/page.tsx         # About
│       ├── case-studies/
│       │   ├── page.tsx          # Case studies list
│       │   └── [slug]/page.tsx   # Case study detail
│       └── contact/page.tsx       # Contact form
│
├── components/
│   ├── Navbar.tsx                # Navigation with language switcher
│   ├── Footer.tsx                # Footer
│   ├── Hero.tsx                  # Hero section
│   ├── Card.tsx                  # Card component
│   ├── CaseCard.tsx              # Case card
│   ├── Process.tsx               # Process/steps
│   ├── Section.tsx               # Section wrapper
│   └── CTABlock.tsx              # Call-to-action
│
├── content/
│   ├── en.json                   # English content
│   └── zh.json                   # Chinese content
│
├── lib/
│   ├── i18n.ts                   # i18n utilities
│   └── translations.ts           # Translation helpers
│
└── styles/
    └── globals.css               # Design system
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Navigate to `http://localhost:3000` (or `3001` if port 3000 is in use).

- English: `http://localhost:3000/en`
- Chinese: `http://localhost:3000/zh`

### 3. Build for Production
```bash
npm run build
npm start
```

## 🌍 Bilingual System

### Structure
- **Language routing**: `/en/*` for English, `/zh/*` for Chinese
- **Content files**: Separate JSON files for each language
- **Language switcher**: In the navbar, click language buttons to switch

### Adding Content

Edit these files to update content:

- `src/content/en.json` - All English text
- `src/content/zh.json` - All Chinese text

The content is organized by section:
```json
{
  "nav": { ... },
  "home": { ... },
  "services": { ... },
  "about": { ... },
  "caseStudies": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

### Adding New Locales

1. Create `src/content/[locale].json`
2. Add locale to `src/lib/i18n.ts`:
   ```typescript
   export const locales: Locale[] = ['en', 'zh', 'fr'];
   ```
3. Update `src/app/[locale]/layout.tsx` for static params

## 🎨 Design System

### Colors
- **Cream** (warm neutral): `#FEFDF9`, `#FDF8F2`, `#FAF0E5`, `#F5E2D0`
- **Charcoal** (typography): `#1a1a1a`, `#2d2d2d`
- **Sky** (accent blue): `#F0F7FF`, `#E1F0FF`, `#89D4FF`, `#5BC0DE`
- **Sage** (accent green): `#F0FAF7`, `#D9F0EC`, `#6FBB9A`, `#4FA377`

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- Scale: `xs` → `xl` through `6xl` for optimal hierarchy

### Layout
- **Container**: `max-w-7xl` centered
- **Spacing**: `section` (6rem) and `section-lg` (8rem) for vertical rhythm
- **Grid**: `grid-auto` = 1 column → 2 columns → 3 columns responsive

### Components

#### Button Variants
```tsx
<button className="btn btn-primary">Dark button</button>
<button className="btn btn-secondary">Outlined button</button>
<button className="btn btn-gradient">Gradient button</button>
<button className="btn btn-ghost">Text link</button>
```

#### Cards
```tsx
import Card from '@/components/Card';

<Card
  title="Card Title"
  description="Description text"
  hover
/>
```

#### Section
```tsx
import Section from '@/components/Section';

<Section
  title="Section Title"
  subtitle="Optional subtitle"
  bgColor="white"  // 'cream', 'charcoal'
>
  {/* Content */}
</Section>
```

## 📄 Page Guide

### Home (`/[locale]/`)
- Hero with headline and CTA
- "What We Do" - 4 capabilities
- "Selected Work" - Featured case studies
- "Why Aiyoflow" - Differentiation points
- "How We Work" - 4-step process
- CTA block

### Services (`/[locale]/services`)
- Hero title
- 4 service offerings with outcomes
- CTA

### About (`/[locale]/about`)
- Hero
- Founder story
- 4 approach principles
- Team/collaborators section
- CTA

### Case Studies (`/[locale]/case-studies`)
- Case studies listing
- Click through to detail page

### Case Study Detail (`/[locale]/case-studies/[slug]`)
- Challenge, Insight, Strategy, Execution cards
- Result highlight
- CTA

### Contact (`/[locale]/contact`)
- Contact form (name, email, company, message)
- Submit handling with success/error states

## 🔧 Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: JSON files (no database needed)
- **Deployment**: Vercel-ready

## 📦 Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Deploy the output

All pages are pre-rendered as static HTML for maximum performance.

## ✅ Features

- ✓ Fully bilingual (English + Chinese)
- ✓ SEO optimized (metadata, structured data ready)
- ✓ Mobile responsive
- ✓ Smooth animations and transitions
- ✓ Editorial typography scale
- ✓ Soft, modern design aesthetic
- ✓ Case study dynamic routing
- ✓ Contact form UI (wire up to backend)
- ✓ Static generation for fast performance
- ✓ Language switcher in navbar
- ✓ Production-ready build

## 🚀 Next Steps

1. **Replace placeholder images**
   - Add founder image to About page
   - Add case study images/galleries

2. **Connect contact form**
   - Replace form submission endpoint in `src/app/[locale]/contact/page.tsx`
   - Add backend API or service (SendGrid, FormSpree, etc.)

3. **Update content**
   - Edit `src/content/en.json` and `src/content/zh.json`
   - Add real case study details
   - Update services and about sections

4. **Customize branding**
   - Update colors in `tailwind.config.ts` if needed
   - Adjust typography if desired
   - Update footer social links

5. **Add analytics**
   - Google Analytics
   - Vercel Analytics
   - Hotjar for heatmaps

6. **Set up domain**
   - Update favicon and og:image meta tags
   - Point domain to Vercel

## 💡 Development Tips

### Adding a New Page
```rust
// Create: src/app/[locale]/my-page/page.tsx

import { getTranslations } from '@/lib/translations';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MyPage(props: PageProps) {
  const params = await props.params;
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);

  return (
    <Section title="My Page">
      {/* Your content */}
    </Section>
  );
}
```

### Modifying Styles
- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component classes: Add to `globals.css` under `@layer components`

### Debugging
- Check browser console for client-side errors
- Check terminal for server-side errors
- Use React DevTools for component inspection

## 📞 Support

For questions or issues:
1. Check the README.md
2. Review the component prop types (TypeScript)
3. Check Next.js documentation: https://nextjs.org/docs

## 🎯 Brand Positioning Checklist

Your website successfully conveys:
- ✓ Founder-led (not agency)
- ✓ Editorial + strategic
- ✓ Warm and human
- ✓ Premium but not distant
- ✓ Modern tech edge (subtle gradients + soft UI)
- ✓ Culturally aware (+bilingual)
- ✓ Structured but creative

---

**Ready to launch!** 🚀

Make sure you:
1. Update content in JSON files
2. Add real images and media
3. Test all links work correctly
4. Deploy to your domain
5. Monitor performance and traffic
