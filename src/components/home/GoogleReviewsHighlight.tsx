import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { Button } from "@/components/ui/button";

const GoogleReviewsHighlight = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();
  const { data: reviews, isLoading } = useGoogleReviews({ limit: 6 });

  // Generate initials from name
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  if (isLoading || !reviews || reviews.length === 0) return null;

  // Show top 4 reviews on homepage
  const displayReviews = reviews.slice(0, 4);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-4"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Reseñas de Google" : "Google Reviews"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            {isSpanish 
              ? "Lo que Dicen los Clientes Sobre Los Cazafugas"
              : "What Clients Say About The Leaky Finders"}
          </h2>
          <p className="text-muted-foreground">
            {isSpanish 
              ? "No solo confíe en nuestra palabra - escuche a los propietarios de toda Lanzarote que han confiado en Canary Detect para sus necesidades de detección de fugas."
              : "Don't just take our word for it - hear from property owners across Lanzarote who have trusted Canary Detect with their leak detection needs."}
          </p>
        </motion.div>

        {/* Google rating summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-bold text-lg text-foreground">5.0</span>
          <span className="text-muted-foreground">
            {isSpanish ? "en Google" : "on Google"}
          </span>
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_42x16dp.png" 
            alt="Google" 
            className="h-4 ml-1"
            loading="lazy"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card rounded-2xl p-8 border-t-4 border-t-primary hover:border-t-[hsl(25,93%,45%)] border-x border-b border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Google G badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="h-5 w-5 opacity-50 group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
                <Quote className="h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary drop-shadow-sm" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic relative">
                <span className="text-primary text-2xl font-serif absolute -left-2 -top-2">"</span>
                {review.text && review.text.length > 200 
                  ? `${review.text.slice(0, 200)}...` 
                  : review.text}
                <span className="text-primary text-2xl font-serif">"</span>
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] flex items-center justify-center shadow-md overflow-hidden">
                  {review.profile_photo_url ? (
                    <img 
                      src={review.profile_photo_url} 
                      alt={review.author_name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-primary-foreground font-bold text-sm">
                      {getInitials(review.author_name)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground">
                    {review.author_name}
                  </p>
                  {review.relative_time_description && (
                    <p className="text-sm text-muted-foreground">
                      {review.relative_time_description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full reviews page */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to={isSpanish ? "/es/resenas" : "/reviews"}>
            <Button size="lg" className="gap-2">
              {isSpanish ? "Ver Todas las Reseñas" : "See All Reviews"}
            </Button>
          </Link>
          <a
            href="https://g.page/r/CcSBBRrWFVWoEB0/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2">
              {isSpanish ? "Dejar una Reseña" : "Leave a Review"}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

GoogleReviewsHighlight.displayName = "GoogleReviewsHighlight";

export default GoogleReviewsHighlight;
