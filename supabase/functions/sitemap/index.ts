import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/xml; charset=utf-8",
};

const BASE_URL = "https://canary-detect.com";

// Static page definitions with their Spanish equivalents
const staticPages = [
  { en: "/", es: "/es", priority: "1.0", changefreq: "weekly" },
  { en: "/about", es: "/es/sobre-nosotros", priority: "0.8", changefreq: "monthly" },
  { en: "/services", es: "/es/servicios", priority: "0.9", changefreq: "weekly" },
  { en: "/technology", es: "/es/tecnologia", priority: "0.7", changefreq: "monthly" },
  { en: "/case-studies", es: "/es/casos-de-exito", priority: "0.7", changefreq: "monthly" },
  { en: "/contact", es: "/es/contacto", priority: "0.8", changefreq: "monthly" },
  { en: "/blog", es: "/es/blog", priority: "0.7", changefreq: "weekly" },
  { en: "/meet-the-team", es: "/es/equipo", priority: "0.6", changefreq: "monthly" },
  { en: "/privacy-policy", es: "/es/politica-de-privacidad", priority: "0.3", changefreq: "yearly" },
];

// Fixed slug consistency - matching routes.ts exactly
const servicePages = [
  { en: "/services/water-leak-detection", es: "/es/servicios/deteccion-fugas-agua", priority: "0.9", changefreq: "weekly" },
  { en: "/services/water-pipe-leak-detection", es: "/es/servicios/deteccion-fugas-tuberias", priority: "0.9", changefreq: "weekly" },
  { en: "/services/pool-leak-detection", es: "/es/servicios/deteccion-fugas-piscinas", priority: "0.9", changefreq: "weekly" },
  { en: "/services/underground-detection", es: "/es/servicios/deteccion-subterranea", priority: "0.8", changefreq: "monthly" },
  { en: "/services/drain-detection", es: "/es/servicios/deteccion-desagues", priority: "0.8", changefreq: "monthly" },
  { en: "/services/leak-repair", es: "/es/servicios/reparacion-fugas", priority: "0.8", changefreq: "monthly" },
  { en: "/services/drain-unblocking", es: "/es/servicios/desbloqueo-desagues", priority: "0.8", changefreq: "monthly" },
  { en: "/services/pool-leak-repair", es: "/es/servicios/reparacion-fugas-piscinas", priority: "0.8", changefreq: "monthly" },
  { en: "/services/free-leak-confirmation", es: "/es/servicios/confirmacion-fugas-gratis", priority: "0.8", changefreq: "monthly" },
  { en: "/services/damp-moisture-mapping", es: "/es/servicios/mapeo-humedad", priority: "0.8", changefreq: "monthly" },
];

const plumbingPages = [
  { en: "/plumbing-services", es: "/es/servicios-fontaneria", priority: "0.8", changefreq: "monthly" },
  { en: "/plumbing-services/general-repairs", es: "/es/servicios-fontaneria/reparaciones-generales", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/boiler-services", es: "/es/servicios-fontaneria/servicios-calderas", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/system-upgrades", es: "/es/servicios-fontaneria/mejoras-sistema", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/manifold-upgrades", es: "/es/servicios-fontaneria/mejoras-colectores", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/pool-plumbing", es: "/es/servicios-fontaneria/fontaneria-piscinas", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/pool-repairs", es: "/es/servicios-fontaneria/reparaciones-piscinas", priority: "0.7", changefreq: "monthly" },
];

const locationPages = [
  { en: "/locations/arrecife", es: "/es/ubicaciones/arrecife" },
  { en: "/locations/puerto-del-carmen", es: "/es/ubicaciones/puerto-del-carmen" },
  { en: "/locations/playa-blanca", es: "/es/ubicaciones/playa-blanca" },
  { en: "/locations/costa-teguise", es: "/es/ubicaciones/costa-teguise" },
  { en: "/locations/yaiza", es: "/es/ubicaciones/yaiza" },
  { en: "/locations/tias", es: "/es/ubicaciones/tias" },
  { en: "/locations/playa-honda", es: "/es/ubicaciones/playa-honda" },
  { en: "/locations/san-bartolome", es: "/es/ubicaciones/san-bartolome" },
  { en: "/locations/teguise", es: "/es/ubicaciones/teguise" },
  { en: "/locations/puerto-calero", es: "/es/ubicaciones/puerto-calero" },
  { en: "/locations/femes", es: "/es/ubicaciones/femes" },
  { en: "/locations/las-brenas", es: "/es/ubicaciones/las-brenas" },
  { en: "/locations/uga", es: "/es/ubicaciones/uga" },
  { en: "/locations/tahiche", es: "/es/ubicaciones/tahiche" },
  { en: "/locations/guatiza", es: "/es/ubicaciones/guatiza" },
];

// Static blog articles (always included) - these are defined in blogArticles.ts
const staticBlogArticles = [
  { slug: "master-your-lanzarote-water-system", esSlug: "domina-tu-sistema-de-agua-lanzarote", date: "2026-01-22" },
  { slug: "how-to-check-for-pool-leaks-lanzarote", esSlug: "como-detectar-fugas-en-piscinas-lanzarote", date: "2026-01-15" },
  { slug: "signs-of-underground-water-leak", esSlug: "senales-fuga-agua-subterranea", date: "2026-01-10" },
  { slug: "water-meter-running-when-taps-off", esSlug: "contador-agua-girando-grifos-cerrados", date: "2025-12-05" },
  { slug: "damp-walls-causes-solutions", esSlug: "paredes-humedas-causas-soluciones", date: "2025-11-20" },
  { slug: "thermal-imaging-leak-detection-explained", esSlug: "imagen-termica-deteccion-fugas-explicada", date: "2025-11-15" },
  { slug: "swimming-pool-leak-repair-cost-lanzarote", esSlug: "coste-reparacion-fugas-piscina-lanzarote", date: "2025-10-01" },
  { slug: "emergency-leak-detection-repair-lanzarote", esSlug: "deteccion-reparacion-fugas-emergencia-lanzarote", date: "2026-01-28" },
  { slug: "how-to-tell-if-pool-has-leak-lanzarote", esSlug: "como-saber-si-piscina-tiene-fuga-lanzarote", date: "2026-02-01" },
  { slug: "signs-water-leak-villa-lanzarote", esSlug: "senales-fuga-agua-villa-lanzarote", date: "2026-02-01" },
  { slug: "high-water-bills-lanzarote-causes", esSlug: "facturas-agua-altas-lanzarote-causas", date: "2026-02-01" },
];

// Blog slug mappings for bilingual support (legacy - kept for DB posts)
const blogSlugMappings: Record<string, string> = {
  "master-your-lanzarote-water-system": "domina-tu-sistema-de-agua-lanzarote",
  "how-to-check-for-pool-leaks-lanzarote": "como-detectar-fugas-en-piscinas-lanzarote",
  "signs-of-underground-water-leak": "senales-fuga-agua-subterranea",
  "water-meter-running-when-taps-off": "contador-agua-girando-grifos-cerrados",
  "damp-walls-causes-solutions": "paredes-humedas-causas-soluciones",
  "thermal-imaging-leak-detection-explained": "imagen-termica-deteccion-fugas-explicada",
  "swimming-pool-leak-repair-cost-lanzarote": "coste-reparacion-fugas-piscina-lanzarote",
  "emergency-leak-detection-repair-lanzarote": "deteccion-reparacion-fugas-emergencia-lanzarote",
  "how-to-tell-if-pool-has-leak-lanzarote": "como-saber-si-piscina-tiene-fuga-lanzarote",
  "signs-water-leak-villa-lanzarote": "senales-fuga-agua-villa-lanzarote",
  "high-water-bills-lanzarote-causes": "facturas-agua-altas-lanzarote-causas",
};

function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

function generateUrlEntry(
  enPath: string,
  esPath: string,
  lastmod: string,
  priority: string,
  changefreq: string,
  isHomepage = false
): string {
  const enUrl = `${BASE_URL}${enPath}`;
  const esUrl = `${BASE_URL}${esPath}`;
  
  const xDefaultLink = isHomepage 
    ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` 
    : "";
  
  return `  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
${xDefaultLink}    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSpanishUrlEntry(
  enPath: string,
  esPath: string,
  lastmod: string,
  priority: string,
  changefreq: string,
  isHomepage = false
): string {
  const enUrl = `${BASE_URL}${enPath}`;
  const esUrl = `${BASE_URL}${esPath}`;
  
  const xDefaultLink = isHomepage 
    ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` 
    : "";
  
  return `  <url>
    <loc>${esUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
${xDefaultLink}    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch blog posts with their updated_at timestamps
    const { data: blogPosts, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at, published")
      .eq("published", true)
      .order("updated_at", { ascending: false });

    if (error) {
      console.error("Error fetching blog posts:", error);
    }

    const now = formatDate(new Date());
    
    // Combine database posts with static blog articles
    // Static articles are the source of truth if DB is empty
    const dbSlugs = new Set(blogPosts?.map(p => p.slug) || []);
    const allBlogArticles = [
      // Add database posts first
      ...(blogPosts || []).map(post => ({
        slug: post.slug,
        esSlug: blogSlugMappings[post.slug] || post.slug,
        lastmod: formatDate(post.updated_at),
      })),
      // Add static articles that aren't in the database
      ...staticBlogArticles
        .filter(article => !dbSlugs.has(article.slug))
        .map(article => ({
          slug: article.slug,
          esSlug: article.esSlug,
          lastmod: formatDate(article.date),
        })),
    ];
    
    // Find most recent blog update for the blog index page
    const latestBlogUpdate = allBlogArticles.length > 0 
      ? allBlogArticles.reduce((latest, article) => 
          article.lastmod > latest ? article.lastmod : latest, allBlogArticles[0].lastmod)
      : now;

    const urlEntries: string[] = [];

    // Generate static page entries (English)
    for (const page of staticPages) {
      const lastmod = page.en === "/blog" ? latestBlogUpdate : now;
      urlEntries.push(
        generateUrlEntry(page.en, page.es, lastmod, page.priority, page.changefreq, page.en === "/")
      );
    }

    // Generate blog article entries (English) - includes both DB and static articles
    for (const article of allBlogArticles) {
      urlEntries.push(
        generateUrlEntry(
          `/blog/${article.slug}`,
          `/es/blog/${article.esSlug}`,
          article.lastmod,
          "0.6",
          "monthly"
        )
      );
    }

    // Generate service page entries (English)
    for (const page of servicePages) {
      urlEntries.push(
        generateUrlEntry(page.en, page.es, now, page.priority, page.changefreq)
      );
    }

    // Generate location page entries (English)
    for (const page of locationPages) {
      urlEntries.push(
        generateUrlEntry(page.en, page.es, now, "0.8", "monthly")
      );
    }

    // Generate plumbing page entries (English)
    for (const page of plumbingPages) {
      urlEntries.push(
        generateUrlEntry(page.en, page.es, now, page.priority, page.changefreq)
      );
    }

    // Generate Spanish versions of all pages
    for (const page of staticPages) {
      const lastmod = page.en === "/blog" ? latestBlogUpdate : now;
      urlEntries.push(
        generateSpanishUrlEntry(page.en, page.es, lastmod, page.priority, page.changefreq, page.en === "/")
      );
    }

    // Generate Spanish blog article entries - includes both DB and static articles
    for (const article of allBlogArticles) {
      urlEntries.push(
        generateSpanishUrlEntry(
          `/blog/${article.slug}`,
          `/es/blog/${article.esSlug}`,
          article.lastmod,
          "0.6",
          "monthly"
        )
      );
    }

    // Generate Spanish service page entries
    for (const page of servicePages) {
      urlEntries.push(
        generateSpanishUrlEntry(page.en, page.es, now, page.priority, page.changefreq)
      );
    }

    // Generate Spanish location page entries
    for (const page of locationPages) {
      urlEntries.push(
        generateSpanishUrlEntry(page.en, page.es, now, "0.8", "monthly")
      );
    }

    // Generate Spanish plumbing page entries
    for (const page of plumbingPages) {
      urlEntries.push(
        generateSpanishUrlEntry(page.en, page.es, now, page.priority, page.changefreq)
      );
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join("\n")}
</urlset>`;

    console.log(`Generated sitemap with ${urlEntries.length} URLs`);

    return new Response(sitemap, {
      headers: corsHeaders,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Sitemap generation error:", error);
    return new Response(`Error generating sitemap: ${errorMessage}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
});
