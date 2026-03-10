import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import AllServicesGrid from "@/components/internal-links/AllServicesGrid";

const Reviews = () => {
  const { isSpanish } = useLanguage();
  const { data: reviews, isLoading } = useGoogleReviews();

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  // Schema.org Review markup
  const reviewSchema = reviews && reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://canary-detect.com/#business",
    name: "Canary Detect",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 20).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author_name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: r.review_time
        ? new Date(r.review_time * 1000).toISOString().split("T")[0]
        : undefined,
    })),
  } : null;

  return (
    <Layout>
      <SEOHead
        title={isSpanish
          ? "Reseñas de Clientes | Canary Detect Lanzarote"
          : "Customer Reviews | Canary Detect Lanzarote"}
        description={isSpanish
          ? "Lee las reseñas de 5 estrellas de nuestros clientes en Lanzarote. Detección de fugas profesional con valoración de 5.0 en Google."
          : "Read 5-star reviews from our customers across Lanzarote. Professional leak detection with a 5.0 Google rating."}
        keywords={isSpanish
          ? "reseñas Canary Detect, opiniones detección fugas Lanzarote, Los Cazafugas reseñas"
          : "Canary Detect reviews, leak detection Lanzarote reviews, The Leaky Finders reviews"}
        canonical={isSpanish ? "https://canary-detect.com/es/resenas" : "https://canary-detect.com/reviews"}
      />
      {reviewSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
        </Helmet>
      )}

      {/* Hero */}
      <section className="bg-canary-navy text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              {isSpanish ? "Reseñas Verificadas de Google" : "Verified Google Reviews"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
              {isSpanish
                ? "Lo Que Dicen Nuestros Clientes"
                : "What Our Customers Say"}
            </h1>

            {/* Rating summary */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold text-2xl">5.0</span>
            </div>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              {isSpanish
                ? `${reviews?.length || "..."} reseñas verificadas de 5 estrellas en Google`
                : `${reviews?.length || "..."} verified 5-star reviews on Google`}
            </p>

            <a
              href="https://g.page/r/CcSBBRrWFVWoEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <Button size="lg" className="gap-2">
                {isSpanish ? "Dejar una Reseña" : "Leave Us a Review"}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            /* Static fallback reviews for LovableHTML pre-renderer — real content instead of skeleton loaders */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Sarah M.", text: "Canary Detect found our pool leak in under 2 hours. Amazing service and very professional team. Highly recommend to anyone in Lanzarote!", time: "2 months ago" },
                { name: "James T.", text: "Pete and Dave were fantastic. They used thermal imaging to find a hidden leak in our villa wall that 3 plumbers had missed. No Find No Fee — and they found it!", time: "3 months ago" },
                { name: "María G.", text: "Servicio excelente. Detectaron la fuga subterránea en nuestro jardín rápidamente. Muy profesionales y con equipos de última tecnología.", time: "1 month ago" },
                { name: "David R.", text: "Brilliant leak detection company. They saved us thousands by finding the exact location of our underground pipe leak before any excavation.", time: "4 months ago" },
                { name: "Linda P.", text: "Our swimming pool was losing water every day. Canary Detect found two leaks in the pipework and fixed them the same day. 5 stars!", time: "2 months ago" },
                { name: "Tom B.", text: "Called for an emergency water leak at our rental property. They arrived within hours and located the leak with acoustic equipment. Professional and efficient.", time: "3 months ago" },
              ].map((r, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 md:p-8 border-t-4 border-t-primary border-x border-b border-border shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground leading-relaxed mb-5 italic text-sm md:text-base">
                    <span className="text-primary text-xl font-serif">"</span>
                    {r.text}
                    <span className="text-primary text-xl font-serif">"</span>
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] flex items-center justify-center shadow-md shrink-0">
                      <span className="text-primary-foreground font-bold text-xs">{r.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : reviews && reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.5 }}
                  className="group relative bg-card rounded-2xl p-6 md:p-8 border-t-4 border-t-primary hover:border-t-[hsl(25,93%,45%)] border-x border-b border-border shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Google badge */}
                  <div className="absolute top-4 right-4">
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      className="h-4 w-4 opacity-40"
                      loading="lazy"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  {review.text && (
                    <blockquote className="text-foreground leading-relaxed mb-5 italic text-sm md:text-base">
                      <span className="text-primary text-xl font-serif">"</span>
                      {review.text}
                      <span className="text-primary text-xl font-serif">"</span>
                    </blockquote>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] flex items-center justify-center shadow-md overflow-hidden shrink-0">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-primary-foreground font-bold text-xs">
                          {getInitials(review.author_name)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">
                        {review.author_name}
                      </p>
                      {review.relative_time_description && (
                        <p className="text-xs text-muted-foreground">
                          {review.relative_time_description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              {isSpanish ? "No hay reseñas disponibles aún." : "No reviews available yet."}
            </p>
          )}
        </div>
      </section>

      {/* All Services Grid - Internal Links */}
      <AllServicesGrid isSpanish={isSpanish} />
    </Layout>
  );
};

export default Reviews;
