import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { getBlogArticles, BlogArticle as StaticBlogArticle } from "@/data/blogArticles";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/i18n/LanguageContext";
import { getContactPath, getBlogPath } from "@/i18n/routes";
import waterLeakImg from "@/assets/services/water-leak-detection.jpg";

// Hero carousel images
import heroHqScene from "@/assets/hero/blog-hq-scene.jpg";
import heroElAtico from "@/assets/hero/blog-el-atico.jpg";
import heroPoolSpa from "@/assets/hero/blog-pool-spa.jpg";
import heroTerrace from "@/assets/hero/blog-terrace.jpg";
import heroVillageSquare from "@/assets/hero/blog-village-square.jpg";

const getHeroSlides = (isSpanish: boolean) => [
  { image: heroHqScene, alt: isSpanish ? "Canary Detect HQ - Especialistas en detección de fugas" : "Canary Detect HQ - Leak detection specialists" },
  { image: heroElAtico, alt: isSpanish ? "Detección de fugas comercial en Lanzarote" : "Commercial leak detection in Lanzarote" },
  { image: heroPoolSpa, alt: isSpanish ? "Servicios de detección de fugas en piscinas y spa" : "Pool and spa leak detection services" },
  { image: heroTerrace, alt: isSpanish ? "Detección de fugas en piscinas de villas en Lanzarote" : "Villa pool leak detection in Lanzarote" },
  { image: heroVillageSquare, alt: isSpanish ? "Detección de fugas de agua municipal" : "Municipal water leak detection" },
];

interface DatabaseBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  author: string;
  featured_image: string | null;
  read_time: number | null;
  created_at: string;
}

interface CombinedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  image: string;
  readTime: number;
  date: string;
  isDatabase: boolean;
}

const normalizeInlineText = (value: string) => value.replace(/\s+/g, " ").trim();

const Blog = () => {
  const { isSpanish } = useTranslation();
  const [dbPosts, setDbPosts] = useState<CombinedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = getHeroSlides(isSpanish);

  // Hero carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const fetchDbPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, slug, title, excerpt, category, author, featured_image, read_time, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setDbPosts(data.map(post => ({
          id: post.id,
          slug: post.slug,
          title: normalizeInlineText(post.title),
          excerpt: normalizeInlineText(post.excerpt || ''),
          category: post.category || 'Blog',
          author: post.author,
          image: post.featured_image || waterLeakImg,
          readTime: post.read_time || 5,
          date: post.created_at,
          isDatabase: true,
        })));
      }
      setLoading(false);
    };

    fetchDbPosts();
  }, []);

  // Get language-specific blog articles
  const blogArticles = getBlogArticles(isSpanish);

  // Convert static articles to combined format
  const staticPosts: CombinedPost[] = blogArticles.map(article => ({
    id: String(article.id),
    slug: article.slug,
    title: normalizeInlineText(article.title),
    excerpt: normalizeInlineText(article.excerpt),
    category: article.category,
    author: article.author,
    image: article.image,
    readTime: article.readTime,
    date: article.date,
    isDatabase: false,
  }));

  // Combine and sort all posts by date (newest first)
  const allPosts = [...dbPosts, ...staticPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isSpanish ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // UI text translations
  const uiText = {
    blogTitle: isSpanish ? "Blog de Los Cazafugas" : "The Leaky Finders Blog",
    heroTitle: isSpanish ? "Consejos y " : "Expert Tips & ",
    heroTitleHighlight: isSpanish ? "Guías" : "Guides",
    heroDescription: isSpanish 
      ? "Consejos prácticos de Los Cazafugas - expertos en detección de fugas de Lanzarote. Aprenda a identificar fugas, proteger su propiedad y ahorrar en reparaciones."
      : "Practical advice from The Leaky Finders - Lanzarote's leak detection experts. Learn how to identify leaks, protect your property, and save money on repairs.",
    featuredArticle: isSpanish ? "Artículo Destacado" : "Featured Article",
    readArticle: isSpanish ? "Leer Artículo" : "Read Article",
    allArticles: isSpanish ? "Todos los Artículos" : "All Articles",
    readMore: isSpanish ? "Leer Más" : "Read More",
    minRead: isSpanish ? "min lectura" : "min read",
    min: isSpanish ? "min" : "min",
    ctaTitle: isSpanish ? "¿Necesita a Los Cazafugas?" : "Need The Leaky Finders?",
    ctaDescription: isSpanish 
      ? "Nuestro equipo de expertos está listo para ayudarle a encontrar y reparar fugas en todo Lanzarote. Contacte a Los Cazafugas para una consulta gratuita."
      : "Our expert team is ready to help you find and fix leaks across Lanzarote. Contact The Leaky Finders for a free consultation.",
    ctaButton: isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote",
    seo: {
      title: isSpanish 
        ? "Blog Detección Fugas | Consejos Guías | Canary Detect"
        : "Leak Detection Blog | Tips & Guides | Canary Detect",
      description: isSpanish 
        ? "Consejos y guías detección fugas para propietarios Lanzarote. Fugas agua, piscinas, prevención."
        : "Leak detection tips and guides for Lanzarote property owners. Water leaks, pool maintenance, prevention advice.",
      keywords: isSpanish 
        ? "blog detección fugas, consejos fugas agua, guía fugas piscina, consejos Lanzarote"
        : "leak detection blog, water leak tips, pool leak guide, Lanzarote property advice",
    },
  };

  const blogBasePath = getBlogPath(isSpanish);

  return (
    <Layout>
      <SEOHead
        title={uiText.seo.title}
        description={uiText.seo.description}
        keywords={uiText.seo.keywords}
        canonical={isSpanish ? "https://canary-detect.com/es/blog" : "https://canary-detect.com/blog"}
      />

      {/* Hero Section with Carousel */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              fetchPriority="high"
              decoding="async"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">{uiText.blogTitle}</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              {uiText.heroTitle}<span className="text-primary">{uiText.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              {uiText.heroDescription}
            </p>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'w-8 bg-primary' 
                  : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto"
            >
              <Link to={`${blogBasePath}/${featuredPost.slug}`} className="group">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {uiText.featuredArticle}
                </span>
                <Link to={`${blogBasePath}/${featuredPost.slug}`}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} {uiText.minRead}
                  </span>
                </div>
                <Button asChild>
                  <Link to={`${blogBasePath}/${featuredPost.slug}`}>
                    {uiText.readArticle}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            {uiText.allArticles}
          </h2>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
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
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} {uiText.min}
                      </span>
                    </div>
                    <span className="text-xs text-primary font-medium">
                      {post.category}
                    </span>
                    <Link to={`${blogBasePath}/${post.slug}`}>
                      <h3 className="font-heading font-bold text-lg mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`${blogBasePath}/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      {uiText.readMore}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {uiText.ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-6">
              {uiText.ctaDescription}
            </p>
            <Button asChild size="lg">
              <Link to={getContactPath(isSpanish)}>
                {uiText.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
