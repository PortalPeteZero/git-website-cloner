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
    title: isSpanish ? "Servicios de Fontanería y Mantenimiento" : "Plumbing & Maintenance Services",
    subtitle: isSpanish ? "Más Allá de la Detección de Fugas" : "Beyond Leak Detection",
    description: isSpanish 
      ? "Canary Detect no solo encuentra fugas—las reparamos y realizamos una gama completa de trabajos de fontanería y mantenimiento en toda Lanzarote. Respaldados por nuestra Garantía de 2 Años."
      : "Canary Detect doesn't just find leaks—we fix them and carry out a full range of plumbing and maintenance work across Lanzarote. Backed by our 2-Year Guarantee.",
    metaTitle: isSpanish 
      ? "Servicios Fontanería Lanzarote | Canary Detect" 
      : "Plumbing Services Lanzarote | Canary Detect",
    metaDescription: isSpanish
      ? "Servicios profesionales de fontanería en Lanzarote. Reparaciones, calderas, mejoras de sistema, fontanería de piscinas. Garantía 2 años."
      : "Professional plumbing services in Lanzarote. Repairs, boilers, system upgrades, pool plumbing. 2-Year Guarantee.",
    cta: isSpanish ? "Solicitar Presupuesto" : "Get a Quote",
    learnMore: isSpanish ? "Más Información" : "Learn More",
    guaranteeTitle: isSpanish ? "Garantía de 2 Años" : "2-Year Guarantee",
    guaranteeText: isSpanish 
      ? "Todo nuestro trabajo de fontanería está respaldado por una garantía completa de 2 años."
      : "All our plumbing work is backed by a comprehensive 2-year guarantee.",
    fastResponseTitle: isSpanish ? "Respuesta Rápida" : "Fast Response",
    fastResponseText: isSpanish
      ? "Servicio de emergencia disponible en todo Lanzarote para problemas urgentes de fontanería."
      : "Emergency service available across Lanzarote for urgent plumbing issues.",
    expertTitle: isSpanish ? "Experiencia en Detección de Fugas" : "Leak Detection Expertise",
    expertText: isSpanish
      ? "Nuestra formación en detección de fugas significa que entendemos los sistemas de fontanería mejor que la mayoría."
      : "Our leak detection background means we understand plumbing systems better than most."
  };

  const currentImage = heroImages[currentSlide];

  return (
    <Layout>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={isSpanish ? "https://canary-detect.com/es/servicios-fontaneria" : "https://canary-detect.com/plumbing-services"} />
        <link rel="alternate" hrefLang="en" href="https://canary-detect.com/plumbing-services" />
        <link rel="alternate" hrefLang="es" href="https://canary-detect.com/es/servicios-fontaneria" />
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
        
        <div className="container mx-auto px-4 relative z-10 text-center py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-lg mb-2 block drop-shadow-lg">{content.subtitle}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {content.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              {content.description}
            </p>
            <Button asChild size="lg" className="gap-2 shadow-xl">
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                <Phone className="h-5 w-5" />
                {content.cta}
              </Link>
            </Button>
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={service.heroImage} 
                        alt={isSpanish ? service.titleEs : service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg">
                          <ServiceIcon className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-bold text-white drop-shadow-md">
                          {isSpanish ? service.titleEs : service.title}
                        </h2>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {isSpanish ? service.descriptionEs : service.description}
                      </p>
                      <ul className="space-y-2.5 mb-6 flex-grow">
                        {service.services.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{isSpanish ? item.nameEs : item.name}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                        <Link to={getServicePath(service.slug)}>
                          {content.learnMore}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isSpanish ? "¿Necesita Ayuda con Fontanería?" : "Need Plumbing Help?"}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {isSpanish 
              ? "Desde un grifo goteando hasta una renovación completa de la sala de bombas, estamos aquí para ayudar."
              : "From a dripping tap to a complete pump room overhaul, we're here to help."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                <Phone className="h-5 w-5" />
                {content.cta}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+34928123456">
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
