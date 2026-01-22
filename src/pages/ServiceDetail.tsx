import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Search, CircleDot, Atom, AudioLines, Thermometer, Mic, Shield, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import FreeLeakConfirmationSection from "@/components/services/FreeLeakConfirmationSection";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";
import { getEnglishSlug, getSpanishSlug, getContactPath, getTechnologyPath, getServicesBasePath } from "@/i18n/routes";
import { getServicesData, getServiceUIText, waterLeakCarouselImages, undergroundCarouselImages, ServiceData } from "@/data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSpanish } = useTranslation();
  
  // Normalize slug to English for data lookup
  const englishSlug = slug ? getEnglishSlug(slug) : null;
  
  // Get localized service data
  const servicesData = getServicesData(isSpanish);
  const service = englishSlug ? servicesData[englishSlug] : null;
  const uiText = getServiceUIText(isSpanish);
  
  // Build canonical URL
  const canonicalSlug = isSpanish ? getSpanishSlug(englishSlug || '') : englishSlug;
  const canonicalUrl = isSpanish 
    ? `https://canary-detect.com/es/servicios/${canonicalSlug}`
    : `https://canary-detect.com/services/${canonicalSlug}`;
  
  // Carousel state for pages with hero carousels
  const [currentSlide, setCurrentSlide] = useState(0);
  const isWaterLeakPage = englishSlug === "water-leak-detection";
  const isUndergroundPage = englishSlug === "underground-detection";
  const hasHeroCarousel = isWaterLeakPage || isUndergroundPage;
  
  // Get carousel images based on page
  const getCarouselImages = () => {
    if (isWaterLeakPage) return waterLeakCarouselImages;
    if (isUndergroundPage) return undergroundCarouselImages;
    return [];
  };
  const carouselImages = getCarouselImages();

  // Underground: avoid repeating the hero-collage images in the gallery
  const undergroundHeroSources = isUndergroundPage
    ? new Set(carouselImages.slice(0, 3).map((i) => i.src))
    : new Set<string>();
  const galleryImages = isUndergroundPage
    ? service?.galleryImages.filter((img) => !undergroundHeroSources.has(img)) ?? []
    : service?.galleryImages ?? [];
  
  // Lightbox state for gallery
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  
  useEffect(() => {
    if (service) setLightboxImages(service.galleryImages);
  }, [service]);

  const openLightbox = (index: number, images?: string[]) => {
    setLightboxImages(images ?? service?.galleryImages ?? []);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => setLightboxOpen(false);
  
  const nextImage = () => {
    if (!lightboxImages.length) return;
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };
  
  const prevImage = () => {
    if (!lightboxImages.length) return;
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };
  
  useEffect(() => {
    if (!hasHeroCarousel || carouselImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasHeroCarousel, carouselImages.length]);

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">{uiText.serviceNotFound.title}</h1>
          <p className="text-muted-foreground mb-8">{uiText.serviceNotFound.description}</p>
          <Button asChild>
            <Link to={getServicesBasePath(isSpanish)}>{uiText.serviceNotFound.button}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <SEOHead 
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonical={canonicalUrl}
        type="service"
      />
      {/* Hero Section - Collage for underground, Carousel for water leak, standard for others */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {isUndergroundPage && carouselImages.length >= 3 ? (
            // Collage layout for underground detection
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
              <div className="col-span-2 row-span-2 relative overflow-hidden">
                <img 
                  src={carouselImages[0].src} 
                  alt={isSpanish ? carouselImages[0].alt.es : carouselImages[0].alt.en}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={carouselImages[1].src} 
                  alt={isSpanish ? carouselImages[1].alt.es : carouselImages[1].alt.en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={carouselImages[2].src} 
                  alt={isSpanish ? carouselImages[2].alt.es : carouselImages[2].alt.en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ) : hasHeroCarousel && carouselImages.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={carouselImages[currentSlide].src}
                alt={isSpanish ? carouselImages[currentSlide].alt.es : carouselImages[currentSlide].alt.en}
                className="w-full h-full object-cover"
                fetchPriority="high"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          ) : (
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.25)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-canary-white mb-6 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-canary-white text-lg md:text-xl leading-relaxed drop-shadow-md max-w-xl">
              {service.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="shadow-lg">
                <Link to={getContactPath(isSpanish)}>{uiText.cta.getQuote}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy">
                <a href="tel:+34711051071">{uiText.cta.callNow} +34 711 051 071</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Carousel Indicators - For pages with hero carousel (not collage) */}
        {hasHeroCarousel && !isUndergroundPage && carouselImages.length > 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentSlide 
                    ? "bg-primary w-12" 
                    : "bg-white/40 w-2 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </section>


      {/* Free Leak Confirmation Section - Only for Water Leak Detection */}
      {service.freeLeakSection?.enabled && (
        <FreeLeakConfirmationSection
          title={service.title}
          phone={"+34 711 051 071"}
          email={"info@canary-detect.com"}
          includes={service.freeLeakSection.includes}
          importantNote={service.freeLeakSection.importantNote}
          subNote={service.freeLeakSection.subNote}
        />
      )}

      {/* Content Section */}
      <section className="py-10 md:py-12 bg-background section-divider">
        <div className="container mx-auto px-4">
          
          {/* CTA Banner - Full Width at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-canary-navy to-slate-800 rounded-xl p-6 md:p-8 shadow-xl mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">{uiText.cta.freeQuoteTitle}</h3>
                <p className="text-white text-sm mt-1">
                  {uiText.cta.freeQuoteDesc(service.title)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="whitespace-nowrap" size="lg" asChild>
                  <Link to={getContactPath(isSpanish)}>{uiText.cta.requestQuote}</Link>
                </Button>
                <Button variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy whitespace-nowrap" size="lg" asChild>
                  <a href="tel:+34711051071">{uiText.cta.callNow} +34 711 051 071</a>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>{uiText.badges.noFindNoFee}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CircleDot className="h-4 w-4 text-primary" />
                <span>{uiText.badges.equipment}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FileText className="h-4 w-4 text-primary" />
                <span>{uiText.badges.insuranceReports}</span>
              </div>
            </div>
          </motion.div>

          {/* No Find, No Fee Banner - Water Leak Detection (full-width within content container) */}
          {englishSlug === "water-leak-detection" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-8 bg-gradient-to-r from-primary via-accent to-primary shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 md:py-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary-foreground/15 rounded-full flex items-center justify-center">
                      <Shield className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-foreground/95 leading-relaxed">
                      {(() => {
                        const paragraphs = service.content.split("\n\n");
                        return paragraphs[paragraphs.length - 1] ?? "";
                      })()}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary-foreground/80" />
                    <span className="text-primary-foreground/80 text-sm font-medium">{uiText.badges.insuranceReports}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Two Column Layout - Description + What's Included & Gallery */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Description (takes more space) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {uiText.sections.aboutService}
              </h2>
              
              {/* Split content into paragraphs with better formatting */}
              {(() => {
                const paragraphs = service.content.split("\n\n");
                // For water-leak-detection, the last paragraph is the "No Find, No Fee" - we'll render it as a banner separately
                const contentParagraphs = englishSlug === "water-leak-detection" ? paragraphs.slice(0, -1) : paragraphs;
                return (
                  <div className="space-y-4">
                    {contentParagraphs.map((paragraph, idx) => (
                      <Fragment key={idx}>
                        <p className="text-muted-foreground leading-relaxed">{paragraph}</p>

                        {/* Water Leak Detection: insert the tech card mid-content so it lines up with the right-side CTA */}
                        {englishSlug === "water-leak-detection" && idx === 1 && (
                          <div className="bg-gradient-to-br from-slate-50 to-muted/50 rounded-2xl p-6 md:p-8 border border-border">
                            <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                              <div className="w-10 h-10 bg-canary-navy rounded-lg flex items-center justify-center">
                                <Search className="h-5 w-5 text-white" />
                              </div>
                              {uiText.sections.detectionTech}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {[
                                { icon: Atom, ...uiText.techCards.gasense },
                                { icon: AudioLines, ...uiText.techCards.geophones },
                                { icon: Thermometer, ...uiText.techCards.thermal },
                                { icon: Mic, ...uiText.techCards.pipeMic },
                              ].map((tech, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all"
                                >
                                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-semibold text-foreground">{tech.name}</p>
                                    <p className="text-sm text-foreground/80">{tech.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                );
              })()}

            </motion.div>

            {/* Right Column - What's Included + Gallery for short content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-to-br from-slate-50 to-muted/30 rounded-2xl p-6 border border-border">
                <h3 className="font-heading text-xl font-bold mb-5">{uiText.sections.whatsIncluded}</h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology CTA for Underground Detection */}
              {englishSlug === 'underground-detection' && (
                <Link
                  to={getTechnologyPath(isSpanish)}
                  className="block rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-primary-foreground/15 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Atom className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary-foreground">
                      {uiText.sections.multiTechApproach}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {uiText.multiTechDesc.underground}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-primary-foreground/15 rounded-full text-primary-foreground font-medium text-sm group-hover:bg-primary-foreground/25 transition-colors">
                      {uiText.sections.exploreTech}
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )}

              {/* Technology CTA for Water Leak Detection */}
              {englishSlug === 'water-leak-detection' && (
                <Link
                  to={getTechnologyPath(isSpanish)}
                  className="block rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-primary-foreground/15 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Atom className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary-foreground">
                      {uiText.sections.multiTechApproach}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {uiText.multiTechDesc.waterLeak}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-primary-foreground/15 rounded-full text-primary-foreground font-medium text-sm group-hover:bg-primary-foreground/25 transition-colors">
                      {uiText.sections.exploreTech}
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )}

              {/* Gallery images on the right for compact layout pages */}
              {service.galleryImages.length > 0 && englishSlug === 'drain-unblocking' && (
                <div>
                  <h3 className="font-heading text-lg font-bold mb-3">{uiText.sections.gallery}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.galleryImages.slice(0, 6).map((img, index) => (
                      <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="rounded-lg overflow-hidden cursor-zoom-in group aspect-[4/3]"
                      >
                        <img 
                          src={img} 
                          alt={`${service.title} ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {galleryImages.length > 0 && (englishSlug === 'underground-detection' || (englishSlug !== 'drain-unblocking' && service.content.length >= 600)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="font-heading text-xl font-bold mb-4">
                {englishSlug === 'leak-repair' ? uiText.sections.beforeAfter : uiText.sections.gallery}
              </h3>
              <div className={`grid gap-4 ${
                englishSlug === 'leak-repair' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                  : englishSlug === 'underground-detection'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}>
                {galleryImages.slice(0, 8).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index, galleryImages)}
                    className={`rounded-lg overflow-hidden cursor-zoom-in group ${
                      englishSlug === 'leak-repair' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && service && lightboxImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={uiText.lightbox.close}
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Previous button */}
            {lightboxImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={uiText.lightbox.previous}
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
            )}
            
            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={lightboxImages[lightboxIndex]}
              alt={`${service.title} ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Next button */}
            {lightboxImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={uiText.lightbox.next}
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            )}
            
            {/* Image counter */}
            {lightboxImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                {lightboxIndex + 1} / {lightboxImages.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ServiceDetail;
