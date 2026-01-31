import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPlumbingServiceBySlug, plumbingServicesData } from "@/data/plumbingServicesData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const PlumbingServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSpanish } = useLanguage();
  
  if (!slug) {
    return <Navigate to={isSpanish ? "/es/servicios-fontaneria" : "/plumbing-services"} replace />;
  }
  
  const service = getPlumbingServiceBySlug(slug, isSpanish);
  
  if (!service) {
    return <Navigate to={isSpanish ? "/es/servicios-fontaneria" : "/plumbing-services"} replace />;
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
    backToServices: isSpanish ? "Volver a Servicios de Fontanería" : "Back to Plumbing Services",
    ctaTitle: isSpanish ? "¿Listo para Empezar?" : "Ready to Get Started?",
    ctaText: isSpanish 
      ? "Contáctenos hoy para un presupuesto gratuito y sin compromiso."
      : "Contact us today for a free, no-obligation quote."
  };

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalPath} />
        <link rel="alternate" hrefLang="en" href={`https://canary-detect.com/plumbing-services/${service.slug}`} />
        <link rel="alternate" hrefLang="es" href={`https://canary-detect.com/es/servicios-fontaneria/${service.slugEs}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to={isSpanish ? "/es/servicios-fontaneria" : "/plumbing-services"}
              className="inline-flex items-center text-primary hover:text-primary/80 mb-4 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
              {content.backToServices}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                  <Phone className="h-5 w-5" />
                  {content.getQuote}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90">
                <a href="tel:+34928123456">
                  {content.callNow}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{introTitle}</h2>
                <div className="prose prose-lg max-w-none">
                  {introText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Before/After Image */}
              {service.beforeAfterImage && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{content.beforeAfter}</h3>
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={service.beforeAfterImage.src}
                      alt={isSpanish ? service.beforeAfterImage.captionEs : service.beforeAfterImage.caption}
                      className="w-full h-auto"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg font-bold text-sm">
                      {content.before}
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm">
                      {content.after}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3 text-center italic">
                    {isSpanish ? service.beforeAfterImage.captionEs : service.beforeAfterImage.caption}
                  </p>
                </div>
              )}

              {/* Services Grid */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{content.ourServices}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.services.map((serviceItem, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">
                          {isSpanish ? serviceItem.nameEs : serviceItem.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
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

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{content.gallery}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.galleryImages.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <img 
                        src={image.src}
                        alt={isSpanish ? image.altEs : image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-24">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-center">{content.getQuote}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground text-center">
                    {content.ctaText}
                  </p>
                  <Button asChild className="w-full gap-2">
                    <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                      <Phone className="h-5 w-5" />
                      {content.getQuote}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+34928123456">
                      {content.callNow}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>{content.whyChooseUs}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {service.whyChooseUs.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 h-fit">
                          <ItemIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            {isSpanish ? item.titleEs : item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
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
                <CardHeader>
                  <CardTitle>
                    {isSpanish ? "Otros Servicios" : "Other Services"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
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
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{content.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {content.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
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
