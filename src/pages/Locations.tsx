import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import { getHomePath, getLocationPath, getContactPath } from "@/i18n/routes";
import titleBg from "@/assets/title-bg.jpg";

const locations = [
  { name: "Arrecife", slug: "arrecife", desc: { en: "Lanzarote's capital city — commercial and residential leak detection", es: "Capital de Lanzarote — detección de fugas comercial y residencial" } },
  { name: "Puerto del Carmen", slug: "puerto-del-carmen", desc: { en: "Tourist hub with hotels, villas and pool leak specialists", es: "Centro turístico con hoteles, villas y especialistas en fugas de piscinas" } },
  { name: "Playa Blanca", slug: "playa-blanca", desc: { en: "Our home base — fastest response times across the south", es: "Nuestra base — tiempos de respuesta más rápidos en el sur" } },
  { name: "Costa Teguise", slug: "costa-teguise", desc: { en: "Resort area expertise in pool and underground leak detection", es: "Experiencia en zonas turísticas en detección de fugas de piscinas y subterráneas" } },
  { name: "Yaiza", slug: "yaiza", desc: { en: "Rural and residential leak detection in the south-west", es: "Detección de fugas rural y residencial en el suroeste" } },
  { name: "Tías", slug: "tias", desc: { en: "Covering Tías municipality including Puerto del Carmen surrounds", es: "Cubriendo el municipio de Tías incluyendo alrededores de Puerto del Carmen" } },
  { name: "Teguise", slug: "teguise", desc: { en: "Historic town and surrounding areas — full leak detection coverage", es: "Pueblo histórico y alrededores — cobertura completa de detección de fugas" } },
  { name: "San Bartolomé", slug: "san-bartolome", desc: { en: "Central Lanzarote leak detection services", es: "Servicios de detección de fugas en el centro de Lanzarote" } },
  { name: "Playa Honda", slug: "playa-honda", desc: { en: "Residential and commercial leak detection near the airport", es: "Detección de fugas residencial y comercial cerca del aeropuerto" } },
  { name: "Puerto Calero", slug: "puerto-calero", desc: { en: "Luxury marina area — specialist villa and pool leak detection", es: "Zona de marina de lujo — detección especializada en villas y piscinas" } },
  { name: "Haría", slug: "haria", desc: { en: "Northern Lanzarote coverage including Valle de las Mil Palmeras", es: "Cobertura del norte de Lanzarote incluyendo Valle de las Mil Palmeras" } },
  { name: "Tinajo", slug: "tinajo", desc: { en: "Western Lanzarote leak detection and repair services", es: "Servicios de detección y reparación de fugas en el oeste de Lanzarote" } },
  { name: "La Santa", slug: "la-santa", desc: { en: "Coastal village coverage including sports resort area", es: "Cobertura de pueblo costero incluyendo zona de resort deportivo" } },
  { name: "Femés", slug: "femes", desc: { en: "Mountain village specialist — rural water system expertise", es: "Especialista en pueblo de montaña — experiencia en sistemas de agua rurales" } },
  { name: "Las Breñas", slug: "las-brenas", desc: { en: "Southern rural area leak detection coverage", es: "Cobertura de detección de fugas en zona rural del sur" } },
];

const Locations = () => {
  const { isSpanish } = useTranslation();

  const canonicalUrl = isSpanish
    ? "https://canary-detect.com/es/ubicaciones"
    : "https://canary-detect.com/locations";

  return (
    <Layout>
      <SEOHead
        title={isSpanish
          ? "Zonas de Servicio Lanzarote | Detección Fugas | Canary Detect"
          : "Service Areas Lanzarote | Leak Detection | Canary Detect"}
        description={isSpanish
          ? "Detección de fugas profesional en toda Lanzarote. Cubrimos Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise y 11 zonas más. Llámenos +34 711 051 071."
          : "Professional leak detection across all of Lanzarote. We cover Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise and 11 more areas. Call +34 711 051 071."}
        keywords={isSpanish
          ? "detección fugas Lanzarote, zonas servicio, fontanero Lanzarote, fugas agua Arrecife, fugas piscina Playa Blanca"
          : "leak detection Lanzarote, service areas, plumber Lanzarote, water leak Arrecife, pool leak Playa Blanca"}
        canonical={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: isSpanish ? "Inicio" : "Home", url: `https://canary-detect.com${getHomePath(isSpanish)}` },
          { name: isSpanish ? "Zonas de Servicio" : "Service Areas", url: canonicalUrl },
        ]}
      />
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt={isSpanish ? "Mapa de zonas de servicio en Lanzarote" : "Lanzarote service areas map"} className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.1em] mb-4">
              {isSpanish ? "Cobertura Completa" : "Full Coverage"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              {isSpanish ? (
                <>Detección de Fugas en <span className="text-primary">Toda Lanzarote</span></>
              ) : (
                <>Leak Detection Across <span className="text-primary">All of Lanzarote</span></>
              )}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl">
              {isSpanish
                ? "Cubrimos los 15 municipios y zonas principales de Lanzarote. Desde Playa Blanca en el sur hasta Haría en el norte — estamos donde nos necesite."
                : "We cover all 15 main municipalities and areas across Lanzarote. From Playa Blanca in the south to Haría in the north — we're where you need us."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={getLocationPath(loc.slug, isSpanish)}
                  className="block bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                        {loc.name}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        {isSpanish ? loc.desc.es : loc.desc.en}
                      </p>
                      <span className="inline-flex items-center text-primary text-sm font-medium mt-3 group-hover:underline">
                        {isSpanish ? "Ver detalles" : "View details"}
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            {isSpanish ? "¿No Encuentra Su Zona?" : "Can't Find Your Area?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isSpanish
              ? "Cubrimos toda la isla de Lanzarote. Si su zona no aparece en la lista, no se preocupe — llámenos y confirmaremos la cobertura."
              : "We cover the entire island of Lanzarote. If your area isn't listed, don't worry — call us and we'll confirm coverage."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="tel:+34711051071">
                <Phone className="h-5 w-5 mr-2" />
                +34 711 051 071
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={getContactPath(isSpanish)}>
                {isSpanish ? "Enviar Consulta" : "Send Enquiry"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
