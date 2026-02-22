import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { blogArticlesEn, blogArticlesEs } from "@/data/blogArticles";

const PopularArticlesSection = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();

  // Map markdown slugs to actual blog slugs
  const featuredSlugs = [
    "master-your-lanzarote-water-system",
    "how-to-check-for-pool-leaks-lanzarote",
    "signs-of-underground-water-leak",
    "water-meter-running-when-taps-off",
    "damp-walls-causes-solutions",
    "thermal-imaging-leak-detection-explained",
  ];

  const articles = isSpanish ? blogArticlesEs : blogArticlesEn;
  const featured = featuredSlugs
    .map(slug => articles.find(a => a.slug === slug || 
      // Match Spanish equivalents
      (isSpanish && blogArticlesEn.find(en => en.slug === slug)?.id === a.id)
    ))
    .filter(Boolean) as typeof articles;

  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;
  const blogBase = isSpanish ? "/es/blog" : "/blog";

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Guías y Consejos" : "Guides & Tips"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            {isSpanish ? "Artículos Populares" : "Popular Articles"}
          </h2>
          <p className="text-muted-foreground">
            {isSpanish
              ? "Aprenda a detectar fugas, proteger su propiedad y ahorrar en reparaciones con nuestras guías expertas."
              : "Learn how to detect leaks, protect your property, and save on repairs with our expert guides."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article) => (
            <Link
              key={article.slug}
              to={`${blogBase}/${article.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime} min
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    <BookOpen className="h-4 w-4" />
                    {isSpanish ? "Leer Artículo" : "Read Article"}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

PopularArticlesSection.displayName = "PopularArticlesSection";

export default PopularArticlesSection;
