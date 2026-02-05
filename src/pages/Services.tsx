import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench, MapPin, Award, Clock, Users } from "lucide-react";
import { Shield } from "lucide-react";
import ServiceCard from "@/components/home/ServiceCard";
import SEOHead from "@/components/seo/SEOHead";
import ServiceSchema from "@/components/seo/ServiceSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import PricingSection from "@/components/services/PricingSection";
import { useTranslation } from "@/i18n/LanguageContext";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg";
import servicesHero from "@/assets/hero/services-hero.jpg";

// Import gallery images for carousels
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg";
import poolLeak7 from "@/assets/services/gallery/pool-leak-7.jpg";
import poolLeak8 from "@/assets/services/gallery/pool-leak-8.jpg";
import poolLeak10 from "@/assets/services/gallery/pool-leak-10.jpg";
import waterLeak1 from "@/assets/services/gallery/water-leak-1.jpg";
import waterLeak2 from "@/assets/services/gallery/water-leak-2.jpg";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg";
import drainUnblocking1 from "@/assets/services/gallery/drain-unblocking-1.jpg";
import poolRepair1 from "@/assets/services/gallery/pool-repair-1.jpg";

const Services = () => {
  const { t, isSpanish } = useTranslation();

  const services = [
    {
      title: isSpanish ? "Inspección de Desagües y Tuberías" : "Drain & Pipe Surveys",
      description: isSpanish 
        ? "Inspección con cámara CCTV y rastreo de desagües para localizar bloqueos, roturas, intrusiones de raíces y problemas de estado de tuberías. 6 sistemas de cámaras para todos los tamaños con informes de vídeo detallados."
        : "CCTV camera inspection and drain tracing to locate blockages, breaks, root intrusions and pipe condition issues. 6 camera systems for all pipe sizes with detailed video reports.",
      icon: Search,
      href: isSpanish ? "/es/servicios/deteccion-desagues" : "/services/drain-detection",
      images: [drainDetectionImg, pipeInspectionImg, drainDetection2, pipeInspection2],
    },
    {
      title: isSpanish ? "Desbloqueo de Desagües" : "Drain Unblocking",
      description: isSpanish
        ? "¿Desagüe bloqueado? Limpieza con chorro de alta presión y mecánica para desbloquear todo tipo de obstrucciones rápidamente. Inspección CCTV antes y después. Servicio de emergencia disponible."
        : "Blocked drain? High-pressure jetting and mechanical cleaning to clear all types of blockages fast. CCTV inspection before and after. Emergency callout available.",
      icon: CircleDot,
      href: isSpanish ? "/es/servicios/desbloqueo-desagues" : "/services/drain-unblocking",
      images: [drainUnblockingImg, drainUnblocking1, pipeInspection3],
    },
    {
      title: isSpanish ? "Detección Subterránea" : "Underground Detection",
      description: isSpanish
        ? "¿Necesita encontrar tuberías enterradas antes de excavar? Evite daños costosos localizando tuberías, cables y servicios subterráneos con radar de penetración terrestre y localizadores electromagnéticos."
        : "Need to find buried pipes before digging? Avoid costly damage by locating underground pipes, cables, and utilities with ground-penetrating radar and electromagnetic locators.",
      icon: Cable,
      href: isSpanish ? "/es/servicios/deteccion-subterranea" : "/services/underground-detection",
      images: [undergroundDetectionImg, undergroundDetection6],
    },
    {
      title: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection",
      description: isSpanish
        ? "¿Paredes húmedas? ¿Facturas de agua altas? ¿Contador corriendo con los grifos cerrados? Encuentre fugas de agua ocultas en paredes, suelos y techos con tecnología acústica y de imagen térmica."
        : "Damp walls? High water bills? Meter running when taps are off? Find hidden water leaks in walls, floors, and ceilings using acoustic and thermal imaging.",
      icon: Droplets,
      href: isSpanish ? "/es/servicios/deteccion-fugas-agua" : "/services/water-leak-detection",
      images: [waterLeakDetectionImg, waterLeak1, waterLeak2],
    },
    {
      title: isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection",
      description: isSpanish
        ? "¿Su piscina pierde agua cada día? ¿Rellenado constante? Encontraremos la fuga usando pruebas de presión y técnicas de tinte para detener la pérdida de agua."
        : "Is your swimming pool losing water every day? Constant refilling? We'll find the leak using pressure testing and dye testing techniques to stop water loss.",
      icon: Waves,
      href: isSpanish ? "/es/servicios/deteccion-fugas-piscinas" : "/services/pool-leak-detection",
      images: [poolLeakDetectionImg, poolLeak8, poolLeak7],
    },
    {
      title: isSpanish ? "Reparación de Fugas" : "Leak Repair",
      description: isSpanish
        ? "¿Ha encontrado una fuga de agua? La reparamos rápidamente. Reparaciones profesionales de tuberías y fontanería una vez localizado el problema. Soluciones completas desde la detección hasta la reparación."
        : "Found a water leak? We'll fix it fast. Professional pipe and plumbing repairs once we've located the problem. Complete solutions from detection to repair.",
      icon: Wrench,
      href: isSpanish ? "/es/servicios/reparacion-fugas" : "/services/leak-repair",
      images: [leakRepairImg],
    },
    {
      title: isSpanish ? "Reparación de Fugas de Piscinas" : "Pool Leak Repair",
      description: isSpanish
        ? "¿Su piscina tiene fugas? Reparamos tuberías de piscina, grietas en el vaso, accesorios y equipos. Servicio completo de detección a reparación con materiales de calidad garantizada."
        : "Swimming pool leaking? We repair pool pipes, shell cracks, fittings and equipment. Complete detection-to-repair service with quality materials guaranteed.",
      icon: Waves,
      href: isSpanish ? "/es/servicios/reparacion-fugas-piscinas" : "/services/pool-leak-repair",
      images: [poolLeakRepairImg, poolRepair1, poolLeak10],
    },
  ];

  return (
    <Layout>
      <SEOHead 
        title={t('meta.services.title')}
        description={t('meta.services.description')}
        keywords={t('meta.services.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/servicios" : "https://canary-detect.com/services"}
      />
      <ServiceSchema />
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt={isSpanish ? "Equipo profesional de detección de fugas Lanzarote" : "Professional leak detection equipment case Lanzarote"}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {isSpanish ? "Los Cazafugas" : "The Leaky Finders"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish ? "Servicios de Detección de Fugas " : "Leak Detection Services "}
              <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Lanzarote</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish ? (
                <>
                  Los Cazafugas proporcionan servicios profesionales de detección y reparación de fugas en toda Lanzarote. 
                  Utilizamos <Link to="/es/tecnologia" className="underline hover:text-primary transition-colors">más de €80.000 en equipos especializados</Link> incluyendo imágenes térmicas, sensores acústicos 
                  y gas trazador para encontrar fugas de agua, fugas de piscinas y fugas de tuberías subterráneas con precisión centimétrica.
                </>
              ) : (
                <>
                  The Leaky Finders provide professional leak detection and repair services across Lanzarote. 
                  We use <Link to="/technology" className="underline hover:text-primary transition-colors">€80,000+ of specialist equipment</Link> including thermal imaging, acoustic sensors 
                  and tracer gas to find water leaks, swimming pool leaks and underground pipe leaks with centimetre accuracy.
                </>
              )}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Guarantees */}
      <PricingSection />

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">
              {isSpanish ? "Por Qué Elegir Los Cazafugas" : "Why Choose The Leaky Finders"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {isSpanish ? "La Diferencia Canary Detect" : "The Canary Detect Difference"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">1</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {isSpanish ? "Métodos No Invasivos" : "Non-Invasive Methods"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isSpanish 
                  ? "Usamos tecnología avanzada para encontrar fugas sin romper paredes o suelos innecesariamente."
                  : "We use advanced technology to find leaks without breaking walls or floors unnecessarily."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">2</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {isSpanish ? "Última Tecnología" : "Latest Technology"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isSpanish
                  ? "Sensores acústicos, cámaras térmicas y equipos GPR para detección precisa."
                  : "Acoustic sensors, thermal cameras, and GPR equipment for accurate detection."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">3</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {isSpanish ? "Resultados Rápidos" : "Fast Results"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isSpanish
                  ? "Tiempos de respuesta rápidos y detección eficiente significa menos molestias para usted."
                  : "Quick response times and efficient detection means less disruption for you."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spanish-specific Content Section */}
      {isSpanish && (
        <section className="py-12 md:py-16 bg-background section-noise">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
                Detección de Fugas Profesional en Lanzarote
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  En Lanzarote, las fugas de agua representan un desafío único debido a las características específicas de la isla. 
                  El terreno volcánico, las construcciones tradicionales con aljibes, y el clima árido crean condiciones particulares 
                  que requieren experiencia local especializada. <strong>Canary Detect</strong> (Los Cazafugas) lleva más de 10 años 
                  ayudando a propietarios, comunidades de vecinos y negocios a resolver problemas de fugas en toda la isla.
                </p>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Por Qué las Fugas Son Tan Costosas en Lanzarote
                </h3>
                <p>
                  El agua en Canarias es significativamente más cara que en la península. La desalinización y el transporte 
                  de agua potable hacen que cada litro perdido tenga un impacto económico directo en su factura. Una fuga 
                  pequeña de solo 1 litro por hora supone <strong>más de 8.700 litros perdidos al año</strong>—un gasto innecesario 
                  que puede alcanzar cientos de euros anuales.
                </p>
                <p>
                  Además, las fugas no detectadas causan daños estructurales graves: humedades que deterioran muros de piedra volcánica, 
                  corrosión en tuberías de hierro galvanizado típicas de construcciones antiguas, y filtraciones que afectan 
                  a los sistemas de impermeabilización de azoteas y terrazas tan comunes en la arquitectura canaria.
                </p>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Nuestra Experiencia en la Isla
                </h3>
                <p>
                  Conocemos Lanzarote: desde las urbanizaciones turísticas de Playa Blanca y Puerto del Carmen hasta las viviendas 
                  tradicionales de Yaiza, Tías y Haría. Entendemos los sistemas de fontanería típicos de la isla, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Aljibes y depósitos</strong>: Inspección y detección de fugas en sistemas de almacenamiento de agua</li>
                  <li><strong>Tuberías enterradas</strong>: Localización de fugas en acometidas desde el contador hasta la vivienda</li>
                  <li><strong>Piscinas y spas</strong>: Especialistas en fugas de piscinas privadas y comunitarias</li>
                  <li><strong>Complejos turísticos</strong>: Servicios para hoteles, apartamentos y comunidades</li>
                  <li><strong>Sistemas de riego</strong>: Detección de pérdidas en sistemas de jardín y cultivo</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Tecnología de Vanguardia para Condiciones Canarias
                </h3>
                <p>
                  El suelo volcánico de Lanzarote presenta desafíos únicos para la detección de fugas subterráneas. 
                  Por eso invertimos más de <strong>€80.000 en equipos especializados</strong> que funcionan eficazmente 
                  en estas condiciones:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Gas trazador GASENSE</strong>: Penetra incluso la roca volcánica porosa para localizar fugas enterradas</li>
                  <li><strong>Imagen térmica de alta resolución</strong>: Detecta diferencias de temperatura en muros gruesos de piedra</li>
                  <li><strong>Radar de penetración terrestre (GPR)</strong>: Mapea tuberías y servicios bajo el picón y la lava</li>
                  <li><strong>Geófonos correladores</strong>: Triangula fugas acústicamente con precisión centimétrica</li>
                </ul>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Casos Reales en Lanzarote
                </h3>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-heading font-bold text-lg mb-2 text-foreground">Villa en Playa Blanca</h4>
                    <p className="text-sm text-muted-foreground">
                      Propietarios con factura de agua de €400/mes cuando lo normal era €80. Localizamos una fuga 
                      en la tubería de acometida a 2 metros de profundidad bajo el jardín. Reparación completada 
                      en el mismo día.
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-heading font-bold text-lg mb-2 text-foreground">Hotel en Puerto del Carmen</h4>
                    <p className="text-sm text-muted-foreground">
                      Piscina perdiendo 3.000 litros diarios. Mediante pruebas de presión e inspección CCTV, 
                      identificamos tres puntos de fuga en el circuito de retorno. Ahorro anual estimado: €4.500.
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-heading font-bold text-lg mb-2 text-foreground">Comunidad en Costa Teguise</h4>
                    <p className="text-sm text-muted-foreground">
                      Humedades recurrentes en varios apartamentos. El gas trazador reveló una fuga en la 
                      bajante comunitaria oculta en el forjado. Informe técnico aceptado por la aseguradora.
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-heading font-bold text-lg mb-2 text-foreground">Finca en Yaiza</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistema de riego con pérdidas invisibles. Mapeamos toda la red subterránea con GPR y 
                      localizamos 4 puntos de fuga en tuberías de polietileno dañadas por el movimiento del terreno.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lanzarote Coverage Section - Spanish Only */}
      {isSpanish && (
        <section className="py-12 md:py-16 bg-muted section-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-primary font-medium">Cobertura en Toda la Isla</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
                Servicios de Detección de Fugas en Todos los Municipios
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los Cazafugas ofrecemos cobertura completa en Lanzarote, desde las zonas turísticas 
                hasta los pueblos del interior. Llegamos a cualquier punto de la isla.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "Arrecife", link: "/es/fontanero-arrecife" },
                { name: "Playa Blanca", link: "/es/fontanero-playa-blanca" },
                { name: "Puerto del Carmen", link: "/es/fontanero-puerto-del-carmen" },
                { name: "Costa Teguise", link: "/es/fontanero-costa-teguise" },
                { name: "Yaiza", link: "/es/fontanero-yaiza" },
                { name: "Tías", link: "/es/fontanero-tias" },
                { name: "Teguise", link: "/es/fontanero-teguise" },
                { name: "San Bartolomé", link: "/es/fontanero-san-bartolome" },
                { name: "Haría", link: "/es/fontanero-haria" },
                { name: "Tinajo", link: "/es/fontanero-tinajo" },
              ].map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={location.link}
                    className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-center justify-center"
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{location.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Signals - Spanish Only */}
      {isSpanish && (
        <section className="py-12 md:py-16 bg-background section-noise">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Confíe en Profesionales Locales
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Canary Detect es una empresa establecida en Lanzarote, con sede en Playa Blanca. 
                Formamos parte de la comunidad y nuestro éxito depende de su satisfacción.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Empresa Registrada</h3>
                <p className="text-muted-foreground text-sm">
                  Camello Blanco S.L. (CIF: B72431232) - Empresa legalmente constituida en España
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Equipo Bilingüe</h3>
                <p className="text-muted-foreground text-sm">
                  Atendemos en español e inglés para todos los clientes de la isla
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">+10 Años en Lanzarote</h3>
                <p className="text-muted-foreground text-sm">
                  Experiencia contrastada en las condiciones específicas de la isla
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6"
              >
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Garantía 2 Años</h3>
                <p className="text-muted-foreground text-sm">
                  Todas nuestras reparaciones incluyen garantía de 2 años por escrito
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <p className="text-muted-foreground mb-6">
                ¿Necesita ayuda urgente? Llámenos ahora al <a href="tel:+34711051071" className="text-primary font-semibold hover:underline">711 051 071</a>
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Services;
