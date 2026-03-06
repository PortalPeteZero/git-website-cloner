

## Add 3 New Blog Articles

### Summary
Add 3 new bilingual blog articles (IDs 14, 15, 16) to `src/data/blogArticles.ts` with placeholder images, plus update the sitemap and slug mappings.

### Articles

| ID | EN Slug | Title | Category | Placeholder Image |
|----|---------|-------|----------|-------------------|
| 14 | `buying-property-lanzarote-leak-survey` | Buying a Property in Lanzarote? Why a Leak Survey is as Vital as a Structural Report | Property Advice | `waterLeakImg` |
| 15 | `insurance-leak-report-lanzarote` | 5 Things Your Lanzarote Home Insurance Needs to See in a Leak Report | Insurance & Claims | `leakRepairImg` |
| 16 | `reverse-osmosis-high-water-bill-lanzarote` | Is the Reverse Osmosis System in Your Lanzarote Villa Doubling Your Water Bill? | Water Systems | `waterMeterImg` |

### Files to Edit

1. **`src/data/blogArticles.ts`**
   - Add 3 English articles (id 14-16) to `blogArticlesEn` array with full markdown content converted from the Word docs, internal links to relevant services (leak detection, free leak confirmation, contact), and SEO metadata
   - Add 3 Spanish translations (id 14-16) to `blogArticlesEs` array with translated content
   - Add 3 entries to `blogSlugMap` for EN-to-ES slug mapping

2. **`public/sitemap.xml`**
   - Add 6 new URL entries (3 EN + 3 ES) with hreflang cross-references

### Content Approach
- Convert Word doc structure to markdown matching the existing article format
- Add internal links to services (`/services/water-leak-detection`, `/services/free-leak-confirmation`, `/contact`) within the content
- Include context-aware CTAs at the end of each article
- Spanish translations will be professionally localized (not machine-translated placeholders)
- Each article gets unique `metaTitle`, `metaDescription`, and `keywords` for SEO
- Date set to `2026-03-06` (today)

### Spanish Slugs
- `comprar-propiedad-lanzarote-inspeccion-fugas`
- `informe-fugas-seguro-hogar-lanzarote`
- `osmosis-inversa-factura-agua-alta-lanzarote`

