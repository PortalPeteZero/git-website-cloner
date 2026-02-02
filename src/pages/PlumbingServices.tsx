import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { plumbingServicesData, getAllPlumbingServices } from "@/data/plumbingServicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Wrench, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Hero carousel images - professional plumbing work
import poolPumpRoomComplete from "@/assets/plumbing/pool/pool-pump-room-complete.jpg";
import poolComplexPipework from "@/assets/plumbing/pool/pool-complex-pipework.jpg";
import tekaWaterHeater from "@/assets/plumbing/boiler/teka-water-heater.jpg";
import manifoldNewBrass from "@/assets/plumbing/manifold/manifold-new-brass.jpg";
import villaGardenIrrigation from "@/assets/services/villa-garden-irrigation.jpg";
import boilerPipeworkManifold from "@/assets/plumbing/boiler/boiler-pipework-manifold.jpg";

const heroImages = [
  { 
    src: villaGardenIrrigation, 
    alt: "Canary Detect plumbing services van at Lanzarote villa",
    altEs: "Furgoneta de servicios de fontanería Canary Detect en villa de Lanzarote"
  },
  { 
    src: poolPumpRoomComplete, 
    alt: "Professional pool pump room installation Lanzarote",
    altEs: "Instalación profesional de sala de bombas de piscina Lanzarote"
  },
  { 
    src: manifoldNewBrass, 
    alt: "Quality brass manifold and valve installation",
    altEs: "Instalación de colector de latón y válvulas de calidad"
  },
  { 
    src: poolComplexPipework, 
    alt: "Complex pool plumbing pipework installation",
    altEs: "Instalación de tuberías complejas de piscina"
  },
  { 
    src: tekaWaterHeater, 
    alt: "Teka water heater professional installation",
    altEs: "Instalación profesional de calentador Teka"
  },
  { 
    src: boilerPipeworkManifold, 
    alt: "Professional pipework and manifold system",
    altEs: "Sistema profesional de tuberías y colectores"
  }
];

const PlumbingServices = () => {
  const { isSpanish } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = getAllPlumbingServices();
  
  // Hero carousel auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const getServicePath = (slug: string) => {
    const service = plumbingServicesData[slug];
    if (!service) return isSpanish ? `/es/servicios-fontaneria/${slug}` : `/plumbing-services/${slug}`;
    return isSpanish 
      ? `/es/servicios-fontaneria/${service.slugEs}` 
      : `/plumbing-services/${service.slug}`;
  };
  
  const content = {
    // H1 optimized for "Plumber Lanzarote" / "Fontanero Lanzarote" keywords
    title: isSpanish ? "Fontanero en Lanzarote" : "Plumber in Lanzarote",
    subtitle: isSpanish ? "Servicios Profesionales de Fontanería" : "Professional Plumbing Services",
    description: isSpanish 
      ? "¿Busca un fontanero en Lanzarote? Canary Detect ofrece servicios completos de fontanería: reparaciones, calderas, sistemas de piscinas y mantenimiento. Garantía de 2 años en todos los trabajos."
      : "Looking for a plumber in Lanzarote? Canary Detect offers complete plumbing services: repairs, boilers, pool systems, and maintenance. 2-Year Guarantee on all work.",
    // Meta optimized for search: "Plumber Lanzarote" / "Fontanero Lanzarote"
    metaTitle: isSpanish 
      ? "Fontanero Lanzarote | Servicios de Fontanería Profesional" 
      : "Plumber Lanzarote | Professional Plumbing Services",
    metaDescription: isSpanish
      ? "Fontanero profesional en Lanzarote. Reparaciones urgentes, calderas, fontanería de piscinas, mejoras de sistema. Garantía 2 años. Llámenos: 711 051 071."
      : "Professional plumber in Lanzarote. Emergency repairs, boilers, pool plumbing, system upgrades. 2-Year Guarantee. Call us: 711 051 071.",
    cta: isSpanish ? "Solicitar Presupuesto" : "Get a Quote",
    learnMore: isSpanish ? "Más Información" : "Learn More",
    guaranteeTitle: isSpanish ? "Garantía de 2 Años" : "2-Year Guarantee",
    guaranteeText: isSpanish 
      ? "Todo nuestro trabajo de fontanería está respaldado por una garantía completa de 2 años."
      : "All our plumbing work is backed by a comprehensive 2-year guarantee.",
    fastResponseTitle: isSpanish ? "Respuesta Rápida" : "Fast Response",
    fastResponseText: isSpanish
      ? "Fontanero de emergencia disponible en todo Lanzarote para problemas urgentes."
      : "Emergency plumber available across Lanzarote for urgent issues.",
    expertTitle: isSpanish ? "Experiencia en Detección de Fugas" : "Leak Detection Expertise",
    expertText: isSpanish
      ? "Nuestra formación en detección de fugas significa que entendemos los sistemas de fontanería mejor que la mayoría de fontaneros."
      : "Our leak detection background means we understand plumbing systems better than most plumbers."
  };

  const currentImage = heroImages[currentSlide];

  // JSON-LD structured data for plumbing services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": content.title,
    "description": content.metaDescription,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": isSpanish ? service.titleEs : service.title,
        "description": isSpanish ? service.descriptionEs : service.description,
        "url": `https://canary-detect.com${getServicePath(service.slug)}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Canary Detect"
        }
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={isSpanish ? "https://canary-detect.com/es/servicios-fontaneria" : "https://canary-detect.com/plumbing-services"} />
        <link rel="alternate" hrefLang="en" href="https://canary-detect.com/plumbing-services" />
        <link rel="alternate" hrefLang="es" href="https://canary-detect.com/es/servicios-fontaneria" />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={isSpanish ? "https://canary-detect.com/es/servicios-fontaneria" : "https://canary-detect.com/plumbing-services"} />
        <meta property="og:image" content="https://canary-detect.com/og-image.jpg?v=2" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      {/* Hero Section with Carousel */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background carousel images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img 
              src={currentImage.src} 
              alt={isSpanish ? currentImage.altEs : currentImage.alt}
              className="w-full h-full object-cover brightness-90"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient overlays for text readability while keeping image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-base md:text-lg mb-2 block drop-shadow-lg">{content.subtitle}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-2">
              {content.title}
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 drop-shadow-md px-4">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <Button asChild size="lg" className="gap-2 shadow-xl w-full sm:w-auto">
                <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                  <Phone className="h-5 w-5" />
                  {content.cta}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide 
                  ? "bg-primary w-8" 
                  : "bg-white/50 w-2 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{content.guaranteeTitle}</h3>
                <p className="text-sm text-muted-foreground">{content.guaranteeText}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{content.fastResponseTitle}</h3>
                <p className="text-sm text-muted-foreground">{content.fastResponseText}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="p-3 rounded-full bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{content.expertTitle}</h3>
                <p className="text-sm text-muted-foreground">{content.expertText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link to={getServicePath(service.slug)} className="group block h-full">
                    <div className="h-full rounded-xl overflow-hidden bg-canary-navy border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      {/* Visible image section */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={service.heroImage} 
                          alt={isSpanish ? service.titleEs : service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-canary-navy via-transparent to-transparent" />
                        {/* Icon badge */}
                        <div className="absolute top-3 left-3 p-2 rounded-lg bg-primary text-primary-foreground shadow-lg">
                          <ServiceIcon className="h-5 w-5" />
                        </div>
                      </div>
                      
                      {/* Content section */}
                      <div className="p-4">
                        <h2 className="text-lg font-bold text-white mb-2 leading-tight">
                          {isSpanish ? service.titleEs : service.title}
                        </h2>
                        
                        <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">
                          {isSpanish ? service.descriptionEs : service.description}
                        </p>
                        
                        {/* Service tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {service.services.slice(0, 3).map((item, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 bg-white/10 text-white/80 rounded text-xs font-medium"
                            >
                              {isSpanish ? item.nameEs : item.name}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                          <span>{content.learnMore}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            {isSpanish ? "¿Necesita Ayuda con Fontanería?" : "Need Plumbing Help?"}
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {isSpanish 
              ? "Desde un grifo goteando hasta una renovación completa de la sala de bombas, estamos aquí para ayudar."
              : "From a dripping tap to a complete pump room overhaul, we're here to help."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Button asChild size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                <Phone className="h-5 w-5" />
                {content.cta}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
            >
              <a href="tel:+34711051071">
                {isSpanish ? "Llamar Ahora" : "Call Now"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlumbingServices;
