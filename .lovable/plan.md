

# AI Visibility Report - Action Plan

## What's Already in Place (No Action Needed)

The report flags several items that are **already implemented**:

- **LocalBusiness schema** with phone, email, address -- already on every page via `LocalBusinessSchema.tsx`
- **"No Find, No Fee" explanation** -- already detailed in the homepage FAQ, PricingSection guarantees, and service FAQs
- **Insurance-ready reports mention** -- PricingSection already states "every survey includes a detailed professional photographic report suitable for insurance claims"
- **Service-specific landing pages** for pool leak detection, CCTV drain inspection, underground detection -- all exist with dedicated routes, FAQs, and schema
- **Bilingual FAQ pages** mapping technologies to queries -- `serviceFaqsData.ts` already has EN/ES FAQs per service
- **Technology comparison content** -- Technology page already compares acoustic, thermal, tracer gas, and CCTV with best-for/limitations sections

## Genuine Gaps to Address

Based on the report, here are the real content gaps and the plan to fix them:

### 1. Update LocalBusiness Schema Review Count (HIGH)

The `index.html` hardcoded schema shows `"reviewCount": "47"` and `"ratingValue": "5"`, while `LocalBusinessSchema.tsx` shows `"reviewCount": "127"` and `"ratingValue": "4.9"`. The index.html fallback is stale and could confuse AI crawlers that don't execute JavaScript.

**Action:** Update `index.html` structured data to match the React component values (127 reviews, 4.9 rating). Also add the missing fields (`legalName`, `logo`, `image`, `sameAs`, `founder`, `foundingDate`) to the index.html fallback schema so pre-rendered and non-JS crawlers get the full picture.

### 2. Add Sample Insurance Report Section (MED)

AI models reference "insurance-ready reports" but there's no dedicated content showing what one looks like. This is a content gap the report specifically flags.

**Action:** Add a new section to the Technology page (or a collapsible on the Services page) titled "What's Included in Your Report" / "Que Incluye Su Informe" with a bullet list of report contents: photo documentation, thermal images, leak location diagram, repair recommendations, cost estimates. This gives AI models concrete content to cite without needing to upload an actual PDF.

### 3. Add Emergency Response Content (MED)

The report flags "No clearly published emergency response time commitments." Currently no page describes the emergency/24/7 process.

**Action:** Add an "Emergency Response" section to the Contact page describing: same-day availability, typical response windows (within 2-4 hours across Lanzarote), 24/7 phone availability, and the process flow (call > assessment > dispatch > detection > report). Bilingual. This also feeds AI models with citable response-time data.

### 4. Add Pricing Guidance / Call-Out Fee Ranges (MED)

The report notes "Lack of transparent pricing guidance." The PricingSection exists but has no actual price ranges -- just feature lists and "Get a Quote" buttons.

**Action:** Add indicative price ranges or starting-from figures to the PricingSection cards (e.g., "Residential from EUR 150", "Pool Survey from EUR 200", "Commercial -- contact for quote"). These don't need to be exact but give AI models and users concrete numbers to reference. Bilingual.

### 5. Handle UTM-Tagged URLs (LOW)

AI models link to `canary-detect.com` with UTM parameters (e.g., `?utm_source=openai`). These should resolve cleanly.

**Action:** This is already handled by the SPA architecture -- query parameters don't affect routing. No code change needed. However, add a note in the plan confirming this is a non-issue for SPAs.

### 6. Expand Case Studies Content (LOW)

The report flags "Few indexed case studies." Currently there are ~7 case studies on the page but they're all rendered client-side.

**Action:** Add 2-3 more case studies to the CaseStudies page data focusing on: (a) a residential villa water leak with before/after, (b) a pool leak detection with cost savings, (c) an emergency call-out scenario. All bilingual. Since the page is eagerly loaded, the pre-renderer will capture them.

## Technical Details

### Files to Modify

| File | Change |
|------|--------|
| `index.html` | Update hardcoded LocalBusiness schema to match React component (127 reviews, 4.9 rating, add legalName/logo/founder/foundingDate/sameAs) |
| `src/components/services/PricingSection.tsx` | Add indicative price ranges to the three service cards |
| `src/pages/Contact.tsx` | Add "Emergency Response" section with response times and process flow |
| `src/pages/Technology.tsx` | Add "What's in Your Report" section with bullet list of report contents |
| `src/pages/CaseStudies.tsx` | Add 2-3 additional bilingual case studies |

### Pre-Rendering Compatibility

All modified pages are already eagerly loaded in `App.tsx`, so the lovable.html pre-renderer will capture the new content without any routing changes.

### No New Routes or Dependencies Required

All changes are content additions to existing pages. No new routes, no new npm packages, no database changes.

