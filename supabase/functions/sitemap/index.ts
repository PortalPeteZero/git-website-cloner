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
];

const servicePages = [
  { en: "/services/water-leak-detection", es: "/es/servicios/deteccion-fugas-agua", priority: "0.9", changefreq: "weekly" },
  { en: "/services/pool-leak-detection", es: "/es/servicios/deteccion-fugas-piscina", priority: "0.9", changefreq: "weekly" },
  { en: "/services/underground-detection", es: "/es/servicios/deteccion-subterranea", priority: "0.8", changefreq: "monthly" },
  { en: "/services/drain-detection", es: "/es/servicios/deteccion-desagues", priority: "0.8", changefreq: "monthly" },
  { en: "/services/leak-repair", es: "/es/servicios/reparacion-fugas", priority: "0.8", changefreq: "monthly" },
  { en: "/services/drain-unblocking", es: "/es/servicios/desatasco-desagues", priority: "0.8", changefreq: "monthly" },
  { en: "/services/pool-leak-repair", es: "/es/servicios/reparacion-fugas-piscina", priority: "0.8", changefreq: "monthly" },
  { en: "/services/free-leak-confirmation", es: "/es/servicios/confirmacion-fugas-gratis", priority: "0.8", changefreq: "monthly" },
];

const plumbingPages = [
  { en: "/plumbing-services", es: "/es/servicios-fontaneria", priority: "0.8", changefreq: "monthly" },
  { en: "/plumbing-services/general-repairs", es: "/es/servicios-fontaneria/reparaciones-generales", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/boiler-services", es: "/es/servicios-fontaneria/servicios-calderas", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/system-upgrades", es: "/es/servicios-fontaneria/mejoras-sistema", priority: "0.7", changefreq: "monthly" },
  { en: "/plumbing-services/pool-plumbing", es: "/es/servicios-fontaneria/fontaneria-piscinas", priority: "0.7", changefreq: "monthly" },
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
];

// Blog slug mappings for bilingual support
const blogSlugMappings: Record<string, string> = {
  "how-to-check-for-pool-leaks-lanzarote": "como-detectar-fugas-en-piscinas-lanzarote",
  "signs-of-underground-water-leak": "senales-fuga-agua-subterranea",
  "water-meter-running-when-taps-off": "contador-agua-girando-grifos-cerrados",
  "damp-walls-causes-solutions": "paredes-humedas-causas-soluciones",
  "thermal-imaging-leak-detection-explained": "imagen-termica-deteccion-fugas-explicada",
  "swimming-pool-leak-repair-cost-lanzarote": "coste-reparacion-fugas-piscina-lanzarote",
  "lanzarote-water-supply-guide": "guia-suministro-agua-lanzarote",
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
    
    // Find most recent blog update for the blog index page
    const latestBlogUpdate = blogPosts && blogPosts.length > 0 
      ? formatDate(blogPosts[0].updated_at) 
      : now;

    const urlEntries: string[] = [];

    // Generate static page entries (English)
    for (const page of staticPages) {
      const lastmod = page.en === "/blog" ? latestBlogUpdate : now;
      urlEntries.push(
        generateUrlEntry(page.en, page.es, lastmod, page.priority, page.changefreq, page.en === "/")
      );
    }

    // Generate blog article entries (English)
    if (blogPosts) {
      for (const post of blogPosts) {
        const esSlug = blogSlugMappings[post.slug] || post.slug;
        urlEntries.push(
          generateUrlEntry(
            `/blog/${post.slug}`,
            `/es/blog/${esSlug}`,
            formatDate(post.updated_at),
            "0.6",
            "monthly"
          )
        );
      }
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

    // Generate Spanish blog article entries
    if (blogPosts) {
      for (const post of blogPosts) {
        const esSlug = blogSlugMappings[post.slug] || post.slug;
        urlEntries.push(
          generateSpanishUrlEntry(
            `/blog/${post.slug}`,
            `/es/blog/${esSlug}`,
            formatDate(post.updated_at),
            "0.6",
            "monthly"
          )
        );
      }
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
