import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import { getLocationsData } from "@/data/locationsData";
import { getContactPath, getHomePath } from "@/i18n/routes";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import titleBg from "@/assets/title-bg.jpg";

const Locations = () => {
  const { isSpanish } = useTranslation();
  const locationsData = getLocationsData(isSpanish);
  const locations = Object.values(locationsData);

  const canonicalUrl = isSpanish
    ? "https://canary-detect.com/es/ubicaciones"
    : "https://canary-detect.com/locations";

  return (
    <Layout>
      <SEOHead
        title={isSpanish
          ? "Detección Fugas Lanzarote | 15 Municipios | Canary Detect"
          : "Leak Detection Lanzarote | All 15 Municipalities | Canary Detect"}
        description={isSpanish
          ? "Detección de fugas en los 15 municipios de Lanzarote. Arrecife, Playa Blanca, Puerto del Carmen, Costa Teguise y más. Sin Encontrar, Sin Pagar."
          : "Leak detection across all 15 Lanzarote municipalities. Arrecife, Playa Blanca, Puerto del Carmen, Costa Teguise and more. No Find, No Fee."}
        canonical={canonicalUrl}
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: isSpanish ? "Inicio" : "Home", url: `https://canary-detect.com${getHomePath(isSpanish)}` },
          { name: isSpanish ? "Ubicaciones" : "Locations", url: canonicalUrl },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={titleBg}
            alt={isSpanish ? "Detección de fugas en toda Lanzarote" : "Leak detection across all of Lanzarote"}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-8 pb-10 md:pt-10 md:pb-14">
          <BreadcrumbNav items={[
            { label: isSpanish ? "Inicio" : "Home", href: isSpanish ? "/es" : "/" },
            { label: isSpanish ? "Ubicaciones" : "Locations" },
          ]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-[0.1em]">
                {isSpanish ? "Áreas de Servicio" : "Service Areas"}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish
                ? <>Detección de Fugas en <span className="text-primary">Lanzarote</span></>
                : <>Leak Detection Across <span className="text-primary">Lanzarote</span></>}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish
                ? "Damos servicio a todos los municipios de Lanzarote con equipos profesionales valorados en más de €80.000. Sin Encontrar, Sin Pagar."
                : "We serve every municipality across Lanzarote with professional equipment worth over €80,000. No Find, No Fee guarantee."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-lg">
                <Link to={getContactPath(isSpanish)}>
                  {isSpanish ? "Presupuesto Gratis" : "Get Free Quote"}
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild>
                <a href="tel:+34711051071"><Phone className="h-4 w-4 mr-2" />{isSpanish ? "Llamar Ahora" : "Call Now"} +34 711 051 071</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              {isSpanish ? "Cobertura Completa" : "Full Coverage"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
              {isSpanish ? "Todas Nuestras Áreas de Servicio" : "All Our Service Areas"}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {isSpanish
                ? "Basados en Playa Blanca, proporcionamos servicios profesionales de detección de fugas en toda la isla de Lanzarote. Nuestro equipo cubre todos los municipios, desde la capital Arrecife hasta los pueblos rurales del norte. Cada ubicación tiene desafíos únicos de fontanería que conocemos en profundidad."
                : "Based in Playa Blanca, we provide professional leak detection services across the entire island of Lanzarote. Our team covers every municipality, from the capital Arrecife to the rural villages of the north. Each location has unique plumbing challenges that we understand in depth."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isSpanish
                ? "Lanzarote presenta desafíos de fontanería únicos que no existen en la España continental. El terreno volcánico hace que la excavación sea extremadamente costosa—hasta 10 veces más cara que en suelo normal. El agua dura de la isla acelera la corrosión de tuberías, especialmente en edificios de los años 60-80. Y las propiedades costeras sufren deterioro adicional por el ambiente salino del Atlántico. Nuestro equipo de detección de fugas, valorado en más de €80.000, elimina las conjeturas y localiza fugas con precisión centimétrica."
                : "Lanzarote presents unique plumbing challenges not found on mainland Spain. The volcanic terrain makes excavation extremely expensive—up to 10 times more costly than in normal soil. The island's hard water accelerates pipe corrosion, particularly in buildings from the 1960s-80s. And coastal properties suffer additional deterioration from the Atlantic's saline environment. Our leak detection equipment, worth over €80,000, eliminates guesswork and pinpoints leaks with centimetre accuracy."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isSpanish
                ? "Desde hoteles de cinco estrellas en Puerto del Carmen hasta fincas rurales en Tinajo, desde apartamentos turísticos en Costa Teguise hasta villas de lujo en Marina Rubicón—cada tipo de propiedad requiere un enfoque diferente. Seleccione su zona a continuación para conocer los desafíos específicos de su área y cómo podemos ayudarle."
                : "From five-star hotels in Puerto del Carmen to rural fincas in Tinajo, from tourist apartments in Costa Teguise to luxury villas at Marina Rubicón—every property type requires a different approach. Select your area below to learn about the specific challenges in your location and how we can help."}
            </p>
          </div>

          {/* Location Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={isSpanish ? `/es/ubicaciones/${loc.slug}` : `/locations/${loc.slug}`}
                  className="block bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg transition-all group h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                      {loc.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {loc.services.slice(0, 2).map((svc, i) => (
                      <span key={i} className="bg-muted px-3 py-1 rounded-full text-xs font-medium">
                        {svc.title.replace(` ${loc.name}`, '')}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary-foreground text-3xl md:text-4xl font-bold font-heading mb-4">
              {isSpanish ? "¿No Encuentra Su Zona?" : "Can't Find Your Area?"}
            </p>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              {isSpanish
                ? "Cubrimos toda la isla de Lanzarote. Contáctenos y le confirmaremos la cobertura en su zona."
                : "We cover the entire island of Lanzarote. Contact us and we'll confirm coverage for your area."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to={getContactPath(isSpanish)}>{isSpanish ? "Contactar" : "Contact Us"}</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild>
                <a href="tel:+34711051071">{isSpanish ? "Llamar" : "Call"} +34 711 051 071</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
