

## Pre-Purchase Survey Page -- Exact Replica

### What we're building

A new standalone page at `/services/pre-purchase-survey` (and Spanish equivalent `/es/servicios/inspeccion-precompra`) that exactly replicates the page at `canarysurvey-daktue6i.manus.space`. This is NOT a standard ServiceDetail page -- it has a completely unique layout with sections that don't exist anywhere else on the site.

### Page Structure (matching source exactly)

1. **Dark Hero Section** -- Full-width background image with dark overlay, "NEW SERVICE - LANZAROTE PROPERTY BUYERS" badge, large title with orange gradient text, subtitle, price callout ("Surveys from EUR99"), two CTA buttons (Get a Free Quote + See What's Included)
2. **Trust Badges Bar** -- Orange/amber gradient strip with 5 bullet points (100% Independent, Professional-Grade Equipment, etc.)
3. **"Why It Matters" Section** -- Dark background, "WHY IT MATTERS" label, "We Work for You. Not the Seller." heading, explanatory text, blockquote, 2x2 stats grid (1,200+ Leaks Found, 99% Success Rate, EUR80K+ Equipment, 40+ Years Experience), plus "Surveys from EUR99" pricing badge
4. **"Build Your Own Survey" Modules Section** -- 7 tabbed/selectable modules, each with title, description, bullet points, and 1-3 images:
   - Module 01: Thermal Imaging and Damp Survey
   - Module 02: Full System Pressure Test
   - Module 03: Water System Inspection
   - Module 04: Drain Inspection
   - Module 05: Comprehensive Swimming Pool Survey
   - Module 06: Electrical Safety Report (add-on)
   - Module 07: Leak Pinpointing (add-on)
5. **LeakGuard Upsell Section** -- "Exclusive Customer Offer" badge, "Protect Your New Home with LeakGuard" heading, description of 24/7 smart water monitoring, CTA button, feature card
6. **CTA Footer Section** -- "Ready to Book Your Survey?" with phone + website buttons

### Images

I will download and embed all ~15 images from the source site into `src/assets/services/survey/` directory. These include the hero image, and 2-3 images per module.

### Technical Implementation

**New files:**
- `src/pages/PrePurchaseSurvey.tsx` -- Standalone page component with all sections hardcoded (not data-driven, since this is a unique one-off page with its own design)
- `src/assets/services/survey/` -- Directory for all downloaded images

**Modified files:**
- `src/App.tsx` -- Add routes for `/services/pre-purchase-survey` and `/es/servicios/inspeccion-precompra`
- `src/i18n/routes.ts` -- Add slug mappings for the new service
- `src/components/layout/Header.tsx` -- Add "Pre-Purchase Survey" link to the services navigation dropdown
- `src/pages/Services.tsx` -- Add a service card for the pre-purchase survey on the Services listing page

### Design Matching

- Dark background sections using `bg-canary-navy` / `bg-slate-900` to match the dark theme of the source
- Orange accent color using the existing `primary` (orange) color from the Canary Detect palette -- this already matches the source page
- Tab/pill navigation for modules using existing Radix UI Tabs component
- Stats grid with large orange numbers
- All text content copied verbatim from the source
- Bilingual support (English + Spanish) following existing patterns

### SEO

- Proper SEOHead with title, description, keywords
- BreadcrumbSchema
- Canonical URLs for both languages
- Page eagerly loaded (not lazy) to work with lovable.html pre-rendering

