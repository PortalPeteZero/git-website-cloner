import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPlumbingServiceBySlug, plumbingServicesData } from "@/data/plumbingServicesData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const PlumbingServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSpanish } = useLanguage();
  
  const plumbingBasePath = isSpanish ? "/es/servicios-fontaneria" : "/plumbing-services";
  
  if (!slug) {
    return (
      <Layout>
        <Helmet>
          <title>{isSpanish ? "Servicio no encontrado | Canary Detect" : "Service Not Found | Canary Detect"}</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <p className="text-muted-foreground mb-8">{isSpanish ? 'Servicio no encontrado' : 'Service not found'}</p>
          <Button asChild>
            <Link to={plumbingBasePath}>{isSpanish ? 'Ver todos los servicios' : 'View all services'}</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const service = getPlumbingServiceBySlug(slug, isSpanish);
  
  if (!service) {
    return (
      <Layout>
        <Helmet>
          <title>{isSpanish ? "Servicio no encontrado | Canary Detect" : "Service Not Found | Canary Detect"}</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <p className="text-muted-foreground mb-8">{isSpanish ? 'Servicio de fontanería no encontrado' : 'Plumbing service not found'}</p>
          <Button asChild>
            <Link to={plumbingBasePath}>{isSpanish ? 'Ver todos los servicios' : 'View all services'}</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const title = isSpanish ? service.titleEs : service.title;
  const metaTitle = isSpanish ? service.metaTitleEs : service.metaTitle;
  const metaDescription = isSpanish ? service.metaDescriptionEs : service.metaDescription;
  const introTitle = isSpanish ? service.introTitleEs : service.introTitle;
  const introText = isSpanish ? service.introTextEs : service.introText;
  
  const canonicalPath = isSpanish 
    ? `https://canary-detect.com/es/servicios-fontaneria/${service.slugEs}`
    : `https://canary-detect.com/plumbing-services/${service.slug}`;

  const content = {
    getQuote: isSpanish ? "Solicitar Presupuesto" : "Get a Quote",
    callNow: isSpanish ? "Llamar Ahora" : "Call Now",
    ourServices: isSpanish ? "Nuestros Servicios" : "Our Services",
    whyChooseUs: isSpanish ? "Por Qué Elegirnos" : "Why Choose Us",
    gallery: isSpanish ? "Galería" : "Gallery",
    beforeAfter: isSpanish ? "Antes y Después" : "Before & After",
    before: isSpanish ? "ANTES" : "BEFORE",
    after: isSpanish ? "DESPUÉS" : "AFTER",
    backToServices: isSpanish ? "Volver a Fontanería" : "Back to Plumbing",
    ctaTitle: isSpanish ? "¿Listo para Empezar?" : "Ready to Get Started?",
    ctaText: isSpanish 
      ? "Contáctenos hoy para un presupuesto gratuito y sin compromiso."
      : "Contact us today for a free, no-obligation quote."
  };

  // JSON-LD Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Canary Detect",
      "image": "https://canary-detect.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C. las Maretas 12",
        "addressLocality": "Playa Blanca",
        "addressRegion": "Lanzarote",
        "postalCode": "35580",
        "addressCountry": "ES"
      },
      "telephone": "+34911985705",
      "email": "info@canary-detect.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Lanzarote, Canary Islands, Spain"
    },
    "url": canonicalPath,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <Layout>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalPath}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={title}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-8 md:py-14">
          <BreadcrumbNav 
            items={[
              { label: isSpanish ? "Inicio" : "Home", href: isSpanish ? "/es" : "/" },
              { label: isSpanish ? "Fontanería" : "Plumbing", href: plumbingBasePath },
              { label: title },
            ]}
            className="text-left"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2 drop-shadow-lg">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8 px-4">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                  <Phone className="h-5 w-5" />
                  {content.getQuote}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                <a href="tel:+34911985705">
                  {content.callNow}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{introTitle}</h2>
                <div className="prose prose-lg max-w-none">
                  {introText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-4 text-base md:text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Before/After Image */}
              {service.beforeAfterImage && (
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{content.beforeAfter}</h3>
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={service.beforeAfterImage.src}
                      alt={isSpanish ? service.beforeAfterImage.captionEs : service.beforeAfterImage.caption}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-destructive/90 text-destructive-foreground px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold text-xs md:text-sm">
                      {content.before}
                    </div>
                    <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-primary/90 text-primary-foreground px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold text-xs md:text-sm">
                      {content.after}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3 text-center italic text-sm md:text-base">
                    {isSpanish ? service.beforeAfterImage.captionEs : service.beforeAfterImage.caption}
                  </p>
                </div>
              )}

              {/* Services Grid - Mobile Single Column */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{content.ourServices}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {service.services.map((serviceItem, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader className="pb-2 md:pb-3">
                        <CardTitle className="text-base md:text-lg">
                          {isSpanish ? serviceItem.nameEs : serviceItem.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1.5 md:space-y-2">
                          {(isSpanish ? serviceItem.itemsEs : serviceItem.items).map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Gallery - Responsive Grid */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{content.gallery}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                  {service.galleryImages.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <img 
                        src={image.src}
                        alt={isSpanish ? image.altEs : image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Rich content section - shown when richContent: true */}
              {service.richContent && (isSpanish ? service.contentEs : service.content) && (
                <div className="max-w-none">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-0 mb-6">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-5 pb-3 border-b border-border">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">{children}</h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-muted-foreground leading-relaxed mb-5">{children}</p>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-foreground font-semibold">{children}</strong>
                      ),
                      ul: ({ children }) => (
                        <ul className="my-4 pl-6 space-y-2 list-disc marker:text-primary">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-muted-foreground leading-relaxed">{children}</li>
                      ),
                    }}
                  >
                    {isSpanish ? service.contentEs : service.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            {/* Sidebar - Shown after content on mobile */}
            <div className="space-y-4 md:space-y-6">
              {/* Contact Card - Sticky on desktop only */}
              <Card className="lg:sticky lg:top-24">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-3 md:py-4">
                  <CardTitle className="text-center text-base md:text-lg">{content.getQuote}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <p className="text-muted-foreground text-center text-sm md:text-base">
                    {content.ctaText}
                  </p>
                  <Button asChild className="w-full gap-2">
                    <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                      <Phone className="h-5 w-5" />
                      {content.getQuote}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+34911985705">
                      {content.callNow}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader className="py-3 md:py-4">
                  <CardTitle className="text-base md:text-lg">{content.whyChooseUs}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {service.whyChooseUs.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="flex gap-3 md:gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 h-fit flex-shrink-0">
                          <ItemIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm md:text-base">
                            {isSpanish ? item.titleEs : item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {isSpanish ? item.textEs : item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Other Services */}
              <Card>
                <CardHeader className="py-3 md:py-4">
                  <CardTitle className="text-base md:text-lg">
                    {isSpanish ? "Otros Servicios" : "Other Services"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1.5 md:space-y-2">
                  {Object.values(plumbingServicesData)
                    .filter(s => s.slug !== service.slug)
                    .map(s => {
                      const path = isSpanish 
                        ? `/es/servicios-fontaneria/${s.slugEs}` 
                        : `/plumbing-services/${s.slug}`;
                      return (
                        <Link 
                          key={s.slug}
                          to={path}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          <span className="text-sm">{isSpanish ? s.titleEs : s.title}</span>
                        </Link>
                      );
                    })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-10 md:py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.ctaTitle}</h2>
          <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {content.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                <Phone className="h-5 w-5" />
                {content.getQuote}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlumbingServiceDetail;
