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
import titleBg from "@/assets/title-bg.jpg?w=1920";

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
          ? "Fugas de Agua Lanzarote | Los 15 Municipios | Canary Detect"
          : "Leak Detection Lanzarote | All Areas | Canary Detect"}
        description={isSpanish
          ? "Cubrimos los 15 municipios de Lanzarote para fugas de agua y piscinas. Arrecife, Playa Blanca, Puerto del Carmen, Costa Teguise y más. Sin Encontrar, Sin Pagar."
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
                <a href="tel:+34911985705"><Phone className="h-4 w-4 mr-2" />{isSpanish ? "Llamar Ahora" : "Call Now"} +34 911 98 57 05</a>
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
                ? "Lanzarote presenta desafíos de fontanería únicos que no existen en la España continental. El terreno volcánico hace que la excavación sea extremadamente costosa, hasta 10 veces más cara que en suelo normal. El agua dura de la isla acelera la corrosión de tuberías, especialmente en edificios de los años 60-80. Y las propiedades costeras sufren deterioro adicional por el ambiente salino del Atlántico. Nuestro equipo de detección de fugas, valorado en más de €80.000, elimina las conjeturas y localiza fugas con precisión centimétrica."
                : "Lanzarote presents unique plumbing challenges not found on mainland Spain. The volcanic terrain makes excavation extremely expensive, up to 10 times more costly than in normal soil. The island's hard water accelerates pipe corrosion, particularly in buildings from the 1960s to 1980s. Coastal properties suffer additional deterioration from the Atlantic's saline environment. Our leak detection equipment, worth over £80,000, eliminates guesswork and pinpoints leaks with centimetre accuracy."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isSpanish
                ? "Desde hoteles de cinco estrellas en Puerto del Carmen hasta fincas rurales en Tinajo, desde apartamentos turísticos en Costa Teguise hasta villas de lujo en Marina Rubicón, cada tipo de propiedad requiere un enfoque diferente. Seleccione su zona a continuación para conocer los desafíos específicos de su área y cómo podemos ayudarle."
                : "From five-star hotels in Puerto del Carmen to rural fincas in Tinajo, from tourist apartments in Costa Teguise to luxury villas at Marina Rubicón, every property type requires a different approach. Select your area below to learn about the specific challenges in your location and how we can help."}
            </p>
          </div>

          {/* Location Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
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

      {/* English-only in-depth content section */}
      {!isSpanish && (
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leak Detection Lanzarote: Why Local Expertise Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Calling a mainland plumber or a general trade company to handle a suspected leak in Lanzarote is one of the most common mistakes property owners make. The island's geology, water supply infrastructure, and building methods are fundamentally different from mainland Spain and the rest of Europe. Without understanding these differences, even an experienced plumber can spend days investigating the wrong area, causing unnecessary damage and escalating costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Canary Detect exists specifically for Lanzarote. We know the island's water system, its building traditions, and the specific failure points that repeat across every municipality. Every call we take, every survey we carry out, and every report we write is informed by our experience working exclusively on this island.
              </p>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                What Makes Leak Detection in Lanzarote Different
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-3">Desalinated Water Supply</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Every drop of water on Lanzarote passes through a desalination plant before reaching your property. Desalinated water has a different mineral profile from mainland water and accelerates internal corrosion in copper and galvanised iron pipes over years. This is why leak rates in older Lanzarote buildings are significantly higher than in equivalent properties on the mainland.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-3">Volcanic Rock Excavation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Lanzarote sits on a layer of solid basalt rock just below the surface. Excavating to reach a buried pipe in volcanic terrain costs between five and ten times more than the same job on mainland soil. Getting the location of an underground leak exactly right before digging is not optional here. Our specialist detection equipment locates leaks to within centimetres, saving you significant excavation costs.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-3">Aljibe Water Storage Systems</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Traditional Lanzarote properties, particularly rural fincas and older village houses, rely on aljibes, underground stone cisterns that store water from the mains or from rainwater collection. These cisterns can develop hairline cracks in the volcanic stone walls that lose water silently over months or years. Our acoustic and thermal equipment locates leaks in aljibes without requiring them to be drained.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading text-lg font-bold text-foreground mb-3">Holiday Property Occupancy Patterns</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">A significant proportion of properties on Lanzarote are holiday homes occupied only a few weeks per year. A leak that starts during a vacant period can run for months before the owner visits. By the time the damage becomes visible, water may have been penetrating walls, floors, and foundations for an extended period. Remote water meter monitoring and annual leak surveys are the most reliable way to protect a property that sits empty for much of the year.</p>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                How We Carry Out Leak Detection Across Lanzarote
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Every leak detection survey we carry out begins with a water meter test to confirm whether water is actively leaving the system. If the meter moves with all taps and appliances switched off, there is a leak somewhere in the pipework. We then use pressure testing to identify which section of the plumbing is affected, narrowing the search area before applying our specialist detection equipment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Depending on the property type and the suspected leak location, we use acoustic listening devices to hear the sound of water escaping from pressurised pipes, tracer gas detection to find leaks in underground or inaccessible pipework, thermal imaging cameras to identify temperature anomalies caused by water movement behind walls or beneath floors, and CCTV drain cameras to inspect drainage systems and sewer connections.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Every survey produces a written report with the leak location marked precisely, photographs of the evidence, an assessment of the probable cause, and recommendations for repair. This report is accepted by all major insurance companies operating in the Canary Islands and can be used to support a claim for water damage.
              </p>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Frequently Asked Questions: Leak Detection Lanzarote
              </h3>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How do I know if I have a leak and not just a high water bill?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Switch off all taps and appliances and check whether your water meter is still moving. If the dial or digital display is changing with nothing running, you have an active leak. If the meter is static but your bill has been rising over several months, you may have a slow or intermittent leak that does not show up on an instant test. Either way, call us for a professional assessment.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you cover the whole island of Lanzarote?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Yes. We cover every municipality across Lanzarote, from Arrecife and the main tourist resorts in the south to Haría and the remote villages of the north. There is no area of the island we do not serve. Response times vary by location but our 24/7 emergency service reaches all areas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What does the No Find, No Fee guarantee mean?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">If we carry out a full leak detection survey and are unable to locate a leak, you do not pay for the survey. This guarantee reflects our confidence in our equipment and our team. In practice, we locate the source of the problem in the vast majority of surveys we carry out. On the rare occasions we cannot locate a leak, we will also explain why and advise on the next steps.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How quickly can you respond to an emergency?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Our emergency response time depends on your location. For properties in and around Playa Blanca, Yaiza, and Puerto del Carmen we can often reach you within one hour. For properties in the north of the island, response times are typically two to four hours. We are available 24 hours a day, seven days a week, including public holidays.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Can you provide a report for my insurance company?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Yes. Every Canary Detect survey produces a full written report documenting the leak location, the detection methods used, photographic evidence, and our assessment of the cause. This report is accepted by all major insurers operating in the Canary Islands, including those covering holiday properties owned by residents of the UK and other European countries.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
                <a href="tel:+34911985705">{isSpanish ? "Llamar" : "Call"} +34 911 98 57 05</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
