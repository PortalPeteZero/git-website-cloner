# Project Architecture: Lovable React SPA with LovableHTML Pre-Rendering

## How the two layers work together

This site is a React Single Page Application (SPA) built and maintained in Lovable. It uses LovableHTML as a pre-rendering proxy layer to make the site visible to search engines and AI crawlers.

Human visitors always receive the full interactive React experience. When a search engine bot (Googlebot, Bingbot) or AI crawler (ChatGPT, Perplexity, Claude) visits, LovableHTML intercepts the request, detects it is a crawler via user agent, and serves a cached pre-rendered HTML snapshot instead. The Lovable codebase itself is untouched by this process.

## Key Rules

### Editing
- This is a React SPA. All edits must be treated as React code.
- Do NOT suggest converting to SSR/SSG (Next.js, Remix, etc.) — this would break the Lovable editor and is unnecessary.
- Do NOT suggest Puppeteer, Rendertron, or self-hosted pre-rendering solutions.

### SEO Meta Tags
- All meta tags, titles, OG tags, Twitter cards, canonical URLs, and JSON-LD must be implemented through `react-helmet-async` per page.
- Do NOT hardcode these into `index.html` — static tags override/conflict with per-page component-level tags.
- Canonical URLs must always point to the custom domain (`canary-detect.com`), never to the `lovable.app` preview subdomain.

### Translations / i18n
- All translated content must use the existing i18n setup. Do NOT hardcode translated text directly into components.

### Adding New Pages
- Every new page/route must be added to `sitemap.xml`.
- LovableHTML pre-renders pages based on what is in the sitemap — missing pages won't be pre-rendered.
- For 10+ pages, use a script-based sitemap approach.

### After Publishing
- LovableHTML cache does not update instantly. Cache refresh can be scheduled or triggered on demand via the LovableHTML API/dashboard.

### Images
- All images must have descriptive alt text.
- Use WebP format where possible and compress before uploading.

### Internal Links
- Internal links are rendered by JavaScript via React Router.
- LovableHTML makes them visible to crawlers as long as pages are in the sitemap.
- Always add relevant internal links between related pages with descriptive anchor text.

### Structured Data
- JSON-LD schemas are rendered by JavaScript and only visible to crawlers via LovableHTML pre-render.
- Use Organisation schema on homepage, page-specific schemas where relevant.
- Validate with Google's Rich Results Test after changes.

### Static Files
- `sitemap.xml` and `robots.txt` are static files in `/public` — directly readable by crawlers without pre-rendering. Keep both up to date.
