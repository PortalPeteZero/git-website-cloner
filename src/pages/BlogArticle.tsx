import { useState, useEffect, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, List, ChevronDown, Phone } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, BLOG_IMAGES } from "@/data/blogArticles";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTranslation } from "@/i18n/LanguageContext";
import { getContactPath, getBlogPath, getHomePath } from "@/i18n/routes";
import waterLeakImg from "@/assets/services/water-leak-detection.jpg";
import VideoPlayer from "@/components/blog/VideoPlayer";
import BlogServicesCallout from "@/components/internal-links/BlogServicesCallout";

// Some migrated markdown sources can contain accidental paragraph breaks around inline bold terms,
// e.g. "known as an\n\n**aljibe**\n\n, and ...".
// This normalizer merges those standalone emphasis/punctuation paragraphs back into the sentence.
const normalizeMarkdown = (md: string): string => {
  if (!md) return md;

  // Normalize CRLF + treat whitespace-only blank lines as paragraph breaks
  const normalized = md.replace(/\r\n?/g, "\n");
  const paragraphs = normalized.split(/\n\s*\n+/);

  const stripInlineHtml = (s: string) => s.replace(/<\/?[^>]+>/g, "");
  const unwrapPTags = (s: string) => s.trim().replace(/^<p>([\s\S]*)<\/p>$/i, "$1").trim();
  const inline = (s: string) => unwrapPTags(s).trim();

  const isStandaloneEmphasis = (p: string) => {
    const t = inline(p);
    // We see both markdown emphasis (e.g. **aljibe**) and migrated HTML (e.g. <strong>aljibe</strong>)
    return /^(\*\*[^*\n]+\*\*|\*[^*\n]+\*|<(strong|b|em|i)>[^<\n]+<\/(strong|b|em|i)>)$/i.test(t);
  };

  const isPunctuationOnly = (p: string) => {
    const t = stripInlineHtml(inline(p)).trim();
    return /^[,.;:!?]+$/.test(t);
  };

  // Avoid touching headings/lists/code blocks/raw HTML blocks.
  const isBlocky = (p: string) => {
    const t = p.trim();
    if (/^(#{1,6}\s|[-*+]\s|>\s|\d+\.\s|```)/.test(t)) return true;
    // Treat common inline-ish wrappers as safe (these often appear in DB content)
    if (/^<\/?(p|strong|b|em|i)\b/i.test(t)) return false;
    // Other HTML blocks should not be merged.
    return /^</.test(t);
  };

  const tightenPunctuation = (s: string) => s.replace(/\s+([,.;:!?])/g, "$1");

  const out: string[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const curr = paragraphs[i]?.trim() ?? "";
    const prev = out[out.length - 1];
    const next = paragraphs[i + 1]?.trim();
    const next2 = paragraphs[i + 2]?.trim();

    // Merge: [text] + [**term**] + [continuation]
    // Also handles the common import pattern: [text] + [**term**] + [,] + [continuation]
    if (isStandaloneEmphasis(curr) && prev && next && !isBlocky(prev) && !isBlocky(next)) {
      if (isPunctuationOnly(next) && next2 && !isBlocky(next2)) {
        const punct = stripInlineHtml(inline(next)).trim();
        out[out.length - 1] = tightenPunctuation(`${inline(prev)} ${inline(curr)}${punct} ${inline(next2)}`);
        i += 2; // consumed next + next2
        continue;
      }

      out[out.length - 1] = tightenPunctuation(`${inline(prev)} ${inline(curr)} ${inline(next)}`);
      i++; // consumed next
      continue;
    }

    // Merge: [text] + [,] + [continuation]
    if (isPunctuationOnly(curr) && prev && next && !isBlocky(prev) && !isBlocky(next)) {
      const punct = stripInlineHtml(inline(curr)).trim();
      out[out.length - 1] = tightenPunctuation(`${inline(prev)}${punct} ${inline(next)}`);
      i++; // consumed next
      continue;
    }

    out.push(curr);
  }

  return out.join("\n\n");
};

// Map static paths to imported images for markdown content
const resolveImagePath = (src: string): string => {
  const imageMap: Record<string, string> = {
    // Lanzarote water system article
    '/assets/blog/lanzarote-traditional-house.jpg': BLOG_IMAGES.lanzaroteTraditionalHouse,
    '/assets/blog/lanzarote-aljibe-cistern.jpg': BLOG_IMAGES.lanzaroteAljibe,
    '/assets/blog/lanzarote-water-tanker.jpg': BLOG_IMAGES.lanzaroteTanker,
    '/assets/blog/lanzarote-water-system-house.png': BLOG_IMAGES.lanzaroteSystemHouse,
    '/assets/blog/lanzarote-water-system-diagram.png': BLOG_IMAGES.lanzaroteSystemDiagram,
    '/assets/blog/lanzarote-water-meter-leak.png': BLOG_IMAGES.lanzaroteMeterLeak,
    // Emergency leak detection article
    '/assets/blog/emergency-leak-wet-floor.jpg': BLOG_IMAGES.emergencyLeakWetFloor,
    '/assets/blog/emergency-leak-acoustic-detection.jpg': BLOG_IMAGES.emergencyLeakAcoustic,
    '/assets/blog/emergency-leak-excavation.jpg': BLOG_IMAGES.emergencyLeakExcavation,
    '/assets/blog/emergency-leak-pipe-repair.jpg': BLOG_IMAGES.emergencyLeakPipeRepair,
    '/assets/blog/emergency-leak-hole.jpg': BLOG_IMAGES.emergencyLeakHole,
    '/assets/blog/emergency-leak-cctv.jpg': BLOG_IMAGES.emergencyLeakCctv,
    // All The Gear, No Idea article
    '/assets/blog/all-gear-monkey-paintbrush.png': BLOG_IMAGES.allGearMonkey,
    '/assets/blog/all-gear-water-bill-shock.png': BLOG_IMAGES.allGearWaterBill,
    '/assets/blog/all-gear-leaky-finders.png': BLOG_IMAGES.allGearLeakyFinders,
    '/assets/blog/all-gear-job-done.png': BLOG_IMAGES.allGearJobDone,
  };
  return imageMap[src] || src;
};

interface DatabaseBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  author: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  read_time: number | null;
  created_at: string;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSpanish } = useTranslation();
  const [dbPost, setDbPost] = useState<DatabaseBlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Check static articles first - this is synchronous and immediate
  const staticArticle = slug ? getArticleBySlug(slug, isSpanish) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, isSpanish, 3) : [];

  // Extract H2 headings for Table of Contents (must be before early returns)
  const rawContent = staticArticle?.content || dbPost?.content || '';
  const normalizedContent = useMemo(() => normalizeMarkdown(rawContent), [rawContent]);
  const tocItems = useMemo(() => {
    const headingRegex = /^## (.+)$/gm;
    const items: { text: string; id: string }[] = [];
    let match;
    while ((match = headingRegex.exec(normalizedContent)) !== null) {
      const text = match[1].replace(/\*\*/g, '').replace(/<[^>]+>/g, '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      items.push({ text, id });
    }
    return items;
  }, [normalizedContent]);

  const blogBasePath = getBlogPath(isSpanish);

  // UI text translations
  const uiText = {
    backToBlog: isSpanish ? "Volver al Blog" : "Back to Blog",
    minRead: isSpanish ? "min lectura" : "min read",
    ctaTitle: isSpanish ? "¿Necesita a Los Cazafugas?" : "Need The Leaky Finders?",
    ctaDescription: isSpanish 
      ? "No deje que las fugas ocultas dañen su propiedad. Contacte con Canary Detect - Los Cazafugas - para detección experta de fugas en todo Lanzarote con nuestra garantía Sin Encontrar, Sin Pagar."
      : "Don't let hidden leaks damage your property. Contact Canary Detect - The Leaky Finders - for expert leak detection across Lanzarote with our No Find, No Fee guarantee.",
    ctaButton: isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote",
    relatedArticles: isSpanish ? "Artículos Relacionados" : "Related Articles",
    readMore: isSpanish ? "Leer Más" : "Read More",
  };

  useEffect(() => {
    // If we have a static article, no need to fetch from DB
    if (staticArticle) {
      return;
    }

    // Only fetch from DB if no static article found
    const fetchDbPost = async () => {
      if (!slug) {
        setNotFound(true);
        return;
      }

      setLoading(true);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setDbPost(data);
      }
      setLoading(false);
    };

    fetchDbPost();
  }, [slug, staticArticle]);

  // Show loading only when fetching from DB (not for static articles)
  if (loading && !staticArticle) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  // Return true 404 page for invalid blog slugs (not a redirect which causes soft 404)
  if (notFound && !staticArticle) {
    // Redirect to global 404 to avoid soft 404 issues
    return <Navigate to="/404-not-found" replace />;
  }

  // Use static article or database post
  const article = staticArticle || dbPost;
  if (!article) {
    // Redirect to global 404 to avoid soft 404 issues
    return <Navigate to="/404-not-found" replace />;
  }

  const isStatic = !!staticArticle;
  const title = isStatic ? staticArticle.title : dbPost!.title;
  const metaTitle = isStatic ? staticArticle.metaTitle : (dbPost!.meta_title || dbPost!.title);
  const metaDescription = isStatic ? staticArticle.metaDescription : (dbPost!.meta_description || dbPost!.excerpt || '');
  const keywords = isStatic ? staticArticle.keywords : (dbPost!.keywords || '');
  const content = isStatic ? staticArticle.content : dbPost!.content;
  const category = isStatic ? staticArticle.category : (dbPost!.category || 'Blog');
  const author = isStatic ? staticArticle.author : dbPost!.author;
  const readTime = isStatic ? staticArticle.readTime : (dbPost!.read_time || 5);
  const date = isStatic ? staticArticle.date : dbPost!.created_at;
  const image = isStatic ? staticArticle.image : (dbPost!.featured_image || waterLeakImg);


  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString(isSpanish ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const canonicalUrl = isSpanish 
    ? `https://canary-detect.com/es/blog/${slug}`
    : `https://canary-detect.com/blog/${slug}`;

  return (
    <Layout>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonical={canonicalUrl}
        type="article"
        image={image}
      />
      <BreadcrumbSchema 
        items={[
          { name: isSpanish ? "Inicio" : "Home", url: `https://canary-detect.com${getHomePath(isSpanish)}` },
          { name: "Blog", url: `https://canary-detect.com${getBlogPath(isSpanish)}` },
          { name: title, url: canonicalUrl }
        ]} 
      />

      {/* Article Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": metaDescription,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Canary Detect",
              "logo": {
                "@type": "ImageObject",
                "url": "https://canary-detect.com/favicon.png"
              }
            },
            "datePublished": date,
            "dateModified": date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>

      {/* Video Schema for articles with embedded videos */}
      {content.includes('/videos/emergency-leak-video.mp4') && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": isSpanish 
                ? "Detección de Fugas de Emergencia en Lanzarote - Canary Detect" 
                : "Emergency Leak Detection in Lanzarote - Canary Detect",
              "description": isSpanish
                ? "Vea cómo nuestro equipo localiza y repara fugas de agua de emergencia en Lanzarote usando tecnología acústica avanzada."
                : "Watch how our team locates and repairs emergency water leaks in Lanzarote using advanced acoustic technology.",
              "thumbnailUrl": "https://canary-detect.com/og-image.jpg",
              "uploadDate": "2026-01-28",
              "contentUrl": "https://canary-detect.com/videos/emergency-leak-video.mp4",
              "duration": "PT1M30S",
              "publisher": {
                "@type": "Organization",
                "name": "Canary Detect",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://canary-detect.com/favicon.png"
                }
              }
            })}
          </script>
        </Helmet>
      )}

      {/* FAQ Schema for articles with FAQ sections */}
      {slug === 'how-to-detect-underground-pipes-lanzarote' && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How deep are underground water pipes usually buried in Lanzarote?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lanzarote's warm climate means domestic water pipes typically run between 30-60 cm below finished ground level. However, significant variation exists. Some older or improvised installations place pipes just beneath tiles or thin concrete screeds, while shared community mains running under roads may sit deeper for protection from traffic loads. Always verify depth with proper locating methods rather than assuming a standard."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use a normal metal detector to find my plastic water pipes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard hobby metal detectors respond only to metallic materials, so they cannot detect pure PVC or polyethylene pipes directly. While they might pick up metal fittings, clamps, or reinforcing mesh in nearby concrete, these signals can be misleading without experience interpreting them in context. For plastic pipe detection, dedicated utility locators, GPR equipment, or professional services like Canary Detect provide reliable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does volcanic rock interfere with ground-penetrating radar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Certain dense or highly mineralised lava layers can reduce GPR penetration depth or produce strong reflections requiring expert interpretation. However, many sites with dry, granular picón backfill actually provide excellent GPR conditions—better than heavy clay soils found elsewhere. Experienced operators familiar with local geology adjust antenna frequencies, survey direction, and data processing to achieve usable results even in challenging areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a typical pipe detection survey take for a villa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A straightforward villa with one pool and garden within an urbanisation typically requires around 2-4 hours for comprehensive coverage. More complex properties with suspected multiple leaks, extensive gardens, older construction without documentation, or numerous separate pipe networks can extend to most of a working day. Canary Detect usually provides an estimated duration after an initial phone consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it possible to locate pipes under a tiled terrace without breaking tiles?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most cases, yes. GPR scanning, acoustic listening through surface contact, and sometimes tracer gas detection allow accurate locating and leak pinpointing under tiles, stamped concrete, or decorative stone without immediate demolition. Once the target location is narrowed to a small area, only a focused opening is typically needed—often just a few tiles rather than metres of terrace."
                  }
                }
              ]
            })}
          </script>
        </Helmet>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover" 
            fetchPriority="high" 
            decoding="async" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canary-navy/95 via-canary-navy/80 to-canary-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-canary-navy/80 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-12 pb-10 md:pt-16 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link 
              to={blogBasePath} 
              className="inline-flex items-center text-white/80 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {uiText.backToBlog}
            </Link>
            
            <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(date)}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime} {uiText.minRead}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="blog-prose prose prose-lg max-w-none [&_.video-embed]:my-8 [&_.video-embed]:rounded-xl [&_.video-embed]:overflow-hidden [&_.video-embed]:shadow-lg [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl"
            >
              {/* Table of Contents */}
              {tocItems.length > 2 && (
                <Collapsible defaultOpen className="my-8 border border-border rounded-xl bg-card p-5">
                  <CollapsibleTrigger className="flex items-center justify-between w-full group" aria-label={isSpanish ? "Abrir o cerrar índice de contenidos" : "Toggle table of contents"}>
                    <div className="flex items-center gap-2">
                      <List className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="font-heading font-bold text-lg">
                        {isSpanish ? "Índice de Contenidos" : "Table of Contents"}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <nav aria-label={isSpanish ? "Índice de contenidos del artículo" : "Article table of contents"}>
                      <ol className="space-y-1 list-decimal list-inside">
                        {tocItems.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-primary hover:underline text-base font-medium inline-block py-2"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }}
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </CollapsibleContent>
                </Collapsible>
              )}

              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ href, children }) => {
                    if (href?.startsWith('/')) {
                      // Handle internal links with language prefix
                      const localizedHref = isSpanish && !href.startsWith('/es') ? `/es${href}` : href;
                      return <Link to={localizedHref} className="text-primary hover:underline font-medium">{children}</Link>;
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{children}</a>;
                  },
                  h2: ({ children }) => {
                    const text = typeof children === 'string' ? children : 
                      Array.isArray(children) ? children.map(c => typeof c === 'string' ? c : '').join('') : '';
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return (
                      <h2 id={id} className="text-2xl font-bold mt-12 mb-6 pb-3 border-b border-border text-foreground font-heading first:mt-0 scroll-mt-24">{children}</h2>
                    );
                  },
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold mt-10 mb-4 text-primary font-heading">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-base font-semibold mt-6 mb-3 text-foreground font-heading">{children}</h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-foreground/80 text-lg leading-relaxed mb-6">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-6 ml-4 space-y-3 list-disc marker:text-primary">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="my-6 ml-4 space-y-3 list-decimal marker:text-primary marker:font-semibold">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-foreground/80 text-lg leading-relaxed pl-2">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-foreground font-semibold">{children}</strong>
                  ),
                  img: (() => {
                    let imgIndex = 0;
                    return ({ src, alt }: { src?: string; alt?: string }) => {
                      const isFirst = imgIndex === 0;
                      imgIndex++;
                      const resolvedSrc = resolveImagePath(src || '');
                      const altText = alt || 'Blog article image';
                      return (
                        <figure className="my-8">
                          <img 
                            src={resolvedSrc} 
                            alt={altText} 
                            width={800}
                            height={450}
                            className="w-full rounded-lg shadow-md"
                            loading={isFirst ? "eager" : "lazy"}
                            fetchPriority={isFirst ? "high" : undefined}
                            decoding="async"
                          />
                          {alt && (
                            <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
                              {alt}
                            </figcaption>
                          )}
                        </figure>
                      );
                    };
                  })(),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary bg-primary/5 py-4 px-6 my-8 rounded-r-lg italic text-foreground/80 not-italic">{children}</blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8 rounded-lg border border-border -mx-4 px-4 sm:mx-0 sm:px-0" role="region" aria-label={isSpanish ? "Tabla de datos" : "Data table"} tabIndex={0}>
                      <table className="w-full border-collapse min-w-[500px]">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-canary-navy">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="text-white p-3 text-left font-semibold text-sm">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="p-3 border-b border-border bg-card text-muted-foreground">{children}</td>
                  ),
                  hr: () => (
                    <hr className="my-10 border-t-2 border-border" />
                  ),
                  video: ({ children, ...props }) => {
                    // Extract src from source child if present
                    const sourceChild = Array.isArray(children) 
                      ? children.find((child: any) => child?.type === 'source')
                      : null;
                    const src = sourceChild?.props?.src || (props as any).src || '';
                    const type = sourceChild?.props?.type || 'video/mp4';
                    return <VideoPlayer src={src} type={type} />;
                  },
                }}
              >
                {normalizedContent}
              </ReactMarkdown>

              {/* Services Callout - Internal Links */}
              <BlogServicesCallout isSpanish={isSpanish} />
            </motion.div>

            {/* Article-specific CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-canary-navy rounded-xl text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  {isSpanish ? "¿Necesita Ayuda para Detectar Tuberías Subterráneas?" : "Need Help Detecting Underground Pipes?"}
                </h3>
              </div>
              <p className="text-white/80 mb-6 max-w-2xl">
                {isSpanish 
                  ? "Nuestro equipo en Lanzarote utiliza GPR, detección acústica y tecnología de gas trazador para localizar cualquier tubería enterrada. Contáctenos para una consulta gratuita."
                  : "Our Lanzarote-based team uses GPR, acoustic detection, and tracer gas technology to locate any buried pipe. Contact us for a free consultation."}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to={getContactPath(isSpanish)}>
                  {uiText.ctaButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
              {uiText.relatedArticles}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <Link to={`${blogBasePath}/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                      <h3 className="font-heading font-bold text-base mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <span className="inline-flex items-center text-primary text-sm font-medium">
                        {uiText.readMore}
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogArticle;
