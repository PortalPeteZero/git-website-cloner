import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle, Clock, TrendingUp } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";

// Import hero and case study images
import caseStudiesHero from "@/assets/hero/case-studies-hero.jpg";
import drainDetection1 from "@/assets/case-studies/drain-detection-1.jpg";
import poolLeak1 from "@/assets/case-studies/pool-leak-1.jpg";
import pipeInspection1 from "@/assets/case-studies/pipe-inspection-1.jpg";

// Emergency leak case study image
import emergencyLeakAcousticImg from "@/assets/blog/emergency-leak-acoustic-detection.jpg";

// Import gallery photos for variety
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";

const CaseStudies = () => {
  const { t, isSpanish } = useTranslation();

  const caseStudies = isSpanish ? [
    {
      id: 1,
      title: "Piscina de Hotel Perdiendo 5.000 Litros Diarios",
      location: "Playa Blanca",
      description: "Localizamos una fuga significativa en una piscina de hotel que estaba causando una pérdida masiva de agua.",
      fullDescription: "Un gran hotel en Playa Blanca nos contactó sobre su piscina que estaba perdiendo aproximadamente 5.000 litros de agua al día. Usando nuestro equipo especializado de detección de fugas de piscinas, pudimos identificar una grieta en el vaso de la piscina causada por movimiento del terreno. El hotel pudo organizar las reparaciones y reducir significativamente sus costes de agua y químicos.",
      result: "Fuga encontrada y reparada en 48 horas",
      metrics: { time: "48 horas", savings: "€12.000/año" },
      image: poolLeak1,
      imageAlt: "Detección de fugas de piscina de hotel Playa Blanca",
    },
    {
      id: 2,
      title: "Localización de Tuberías Subterráneas para Construcción",
      location: "Puerto del Carmen",
      description: "Mapeamos con éxito las tuberías de servicios subterráneos para un nuevo proyecto de construcción.",
      fullDescription: "Una empresa constructora en Puerto del Carmen necesitaba conocer la ubicación exacta de todos los servicios subterráneos antes de comenzar los trabajos de excavación en un nuevo desarrollo. Nuestro equipo utilizó radar de penetración terrestre y equipos de localización electromagnética para mapear todas las tuberías y cables enterrados, proporcionando planos detallados para el equipo de construcción.",
      result: "Mapa completo de servicios entregado en 1 día",
      metrics: { time: "1 día", savings: "Daños evitados" },
      image: photo1,
      imageAlt: "Localización de tuberías subterráneas Puerto del Carmen",
    },
    {
      id: 3,
      title: "Meses de Humedad Inexplicable - Fuga Oculta Encontrada",
      location: "Costa Teguise",
      description: "Encontramos una fuga oculta en una villa que había estado causando problemas de humedad durante meses.",
      fullDescription: "Los propietarios de una villa en Costa Teguise habían estado experimentando humedad persistente en sus paredes durante varios meses. Los intentos anteriores de encontrar la fuente no habían tenido éxito. Usando imágenes térmicas y detección acústica de fugas, pudimos localizar una fuga en una tubería de agua caliente que pasaba bajo la losa del suelo. La reparación se completó con mínimas molestias.",
      result: "Problema resuelto tras meses de búsqueda",
      metrics: { time: "3 horas", savings: "Excavación mínima" },
      image: photo2,
      imageAlt: "Detección de fuga de agua oculta villa Costa Teguise",
    },
    {
      id: 4,
      title: "Inspección de Desagües Pre-Compra Ahorra €15.000",
      location: "Arrecife",
      description: "Inspección de desagües pre-compra para una propiedad comercial reveló problemas significativos.",
      fullDescription: "Un cliente que consideraba comprar una propiedad comercial en Arrecife nos pidió que realizáramos una inspección completa de desagües antes de completar la compra. Nuestra inspección CCTV reveló una intrusión significativa de raíces y secciones colapsadas en la línea principal de alcantarillado. Esta información permitió al comprador negociar una reducción significativa en el precio de compra.",
      result: "Cliente ahorró €15.000 en negociaciones",
      metrics: { time: "Medio día", savings: "€15.000" },
      image: drainDetection1,
      imageAlt: "Inspección CCTV de desagües edificio comercial Arrecife",
    },
    {
      id: 5,
      title: "Daños por Agua en Múltiples Apartamentos - Una Sola Fuga Encontrada",
      location: "Playa Honda",
      description: "Rastreamos una fuga que afectaba a múltiples apartamentos hasta una única fuente en el montante principal.",
      fullDescription: "Un complejo de apartamentos en Playa Honda estaba experimentando daños por agua en tres apartamentos diferentes en distintas plantas. La administración del edificio sospechaba de múltiples fugas, pero nuestra investigación reveló una única fuga en el montante principal de agua que se estaba filtrando a través del edificio. Una reparación solucionó todos los problemas.",
      result: "Una sola fuga causando múltiples problemas identificada",
      metrics: { time: "4 horas", savings: "3 reparaciones evitadas" },
      image: pipeInspection1,
      imageAlt: "Detección de fuga en montante de agua apartamentos Playa Honda",
    },
    {
      id: 6,
      title: "Inspección del Sistema de Piscinas de Resort Spa",
      location: "Yaiza",
      description: "Inspección completa de detección de fugas de instalaciones de spa incluyendo piscinas, jacuzzis y tuberías.",
      fullDescription: "Un resort spa de lujo en Yaiza encargó una inspección completa de detección de fugas de sus instalaciones de agua. Probamos todas las piscinas, jacuzzis, fuentes y tuberías asociadas. Se identificaron y repararon varias fugas pequeñas, resultando en ahorros significativos de agua y energía para el resort.",
      result: "Ahorros anuales de agua de €8.000+",
      metrics: { time: "2 días", savings: "€8.000/año" },
      image: photo3,
      imageAlt: "Inspección de fugas de piscina resort spa Yaiza",
    },
    {
      id: 7,
      title: "Detección y Reparación de Emergencia en Una Tarde",
      location: "Lanzarote",
      description: "Detectamos, localizamos, reparamos y restauramos una fuga de agua oculta en solo una tarde.",
      fullDescription: "Un propietario nos contactó con agua filtrándose en sus baldosas. Usando equipos acústicos avanzados e inspección con cámara CCTV, localizamos con precisión milimétrica la fuga a 4,39m de profundidad. Levantamos solo una baldosa, expusimos la tubería dañada y un fontanero cualificado completó la reparación. Todo el trabajo—detección, reparación y restauración completa—se completó en una sola tarde.",
      result: "Detección, reparación y restauración en una tarde",
      metrics: { time: "1 tarde", savings: "€5.000+" },
      image: emergencyLeakAcousticImg,
      imageAlt: "Detección de fugas de emergencia con equipo acústico Lanzarote",
    },
  ] : [
    {
      id: 1,
      title: "Hotel Swimming Pool Losing 5,000 Liters Daily",
      location: "Playa Blanca",
      description: "Located a significant leak in a hotel swimming pool that was causing massive water loss.",
      fullDescription: "A large hotel in Playa Blanca contacted us about their swimming pool which was losing approximately 5,000 liters of water per day. Using our specialist pool leak detection equipment, we were able to identify a crack in the pool shell caused by ground movement. The hotel was able to arrange repairs and significantly reduce their water and chemical costs.",
      result: "Leak found and repaired within 48 hours",
      metrics: { time: "48 hours", savings: "€12,000/year" },
      image: poolLeak1,
      imageAlt: "Hotel swimming pool leak detection Playa Blanca",
    },
    {
      id: 2,
      title: "Underground Pipe Location for Construction",
      location: "Puerto del Carmen",
      description: "Successfully mapped underground utility pipes for a new construction project.",
      fullDescription: "A construction company in Puerto del Carmen needed to know the exact location of all underground utilities before beginning excavation work on a new development. Our team used ground-penetrating radar and electromagnetic locating equipment to map all buried pipes and cables, providing detailed drawings for the construction team.",
      result: "Complete utility map delivered in 1 day",
      metrics: { time: "1 day", savings: "Avoided damage" },
      image: photo1,
      imageAlt: "Underground pipe location Puerto del Carmen",
    },
    {
      id: 3,
      title: "Months of Unexplained Damp - Hidden Leak Found",
      location: "Costa Teguise",
      description: "Found a hidden leak in a villa that had been causing damp problems for months.",
      fullDescription: "The owners of a villa in Costa Teguise had been experiencing persistent damp on their walls for several months. Previous attempts to find the source had been unsuccessful. Using thermal imaging and acoustic leak detection, we were able to pinpoint a leak in a hot water pipe running under the floor slab. The repair was completed with minimal disruption.",
      result: "Problem solved after months of searching",
      metrics: { time: "3 hours", savings: "Minimal excavation" },
      image: photo2,
      imageAlt: "Hidden water leak detection Costa Teguise villa",
    },
    {
      id: 4,
      title: "Pre-Purchase Drainage Survey Saves €15,000",
      location: "Arrecife",
      description: "Pre-purchase drainage survey for a commercial property revealed significant issues.",
      fullDescription: "A client considering purchasing a commercial property in Arrecife asked us to conduct a comprehensive drainage survey before completing the purchase. Our CCTV inspection revealed significant root intrusion and collapsed sections in the main sewer line. This information allowed the buyer to negotiate a significant reduction in the purchase price.",
      result: "Saved client €15,000 in negotiations",
      metrics: { time: "Half day", savings: "€15,000" },
      image: drainDetection1,
      imageAlt: "CCTV drainage survey commercial building Arrecife",
    },
    {
      id: 5,
      title: "Water Damage in Multiple Apartments - Single Leak Found",
      location: "Playa Honda",
      description: "Traced a leak affecting multiple apartments to a single source in the main riser.",
      fullDescription: "An apartment complex in Playa Honda was experiencing water damage in three different apartments on different floors. Building management suspected multiple leaks but our investigation revealed a single leak in the main water riser that was tracking through the building. One repair solved all the problems.",
      result: "Single leak causing multiple problems identified",
      metrics: { time: "4 hours", savings: "3 repairs avoided" },
      image: pipeInspection1,
      imageAlt: "Apartment water riser leak detection Playa Honda",
    },
    {
      id: 6,
      title: "Spa Resort Swimming Pool System Survey",
      location: "Yaiza",
      description: "Complete leak detection survey of spa facilities including swimming pools, hot tubs, and pipework.",
      fullDescription: "A luxury spa resort in Yaiza commissioned a complete leak detection survey of their water facilities. We tested all swimming pools, hot tubs, fountains, and associated pipework. Several small leaks were identified and repaired, resulting in significant water and energy savings for the resort.",
      result: "Annual water savings of €8,000+",
      metrics: { time: "2 days", savings: "€8,000/year" },
      image: photo3,
      imageAlt: "Spa resort swimming pool leak survey Yaiza",
    },
    {
      id: 7,
      title: "Emergency Detection & Repair in One Afternoon",
      location: "Lanzarote",
      description: "We detected, located, repaired, and reinstated a hidden water leak in just one afternoon.",
      fullDescription: "A property owner contacted us with water seeping onto their floor tiles. Using advanced acoustic equipment and CCTV camera inspection, we pinpointed the leak with centimetre precision at 4.39m depth. We lifted just one tile, exposed the damaged pipe, and a qualified plumber completed the repair. The entire job—detection, repair, and full reinstatement—was completed in a single afternoon.",
      result: "Detection, repair & reinstatement in one afternoon",
      metrics: { time: "1 afternoon", savings: "€5,000+" },
      image: emergencyLeakAcousticImg,
      imageAlt: "Emergency leak detection using acoustic equipment Lanzarote",
    },
  ];

  return (
    <Layout>
      <SEOHead 
        title={t('meta.caseStudies.title')}
        description={t('meta.caseStudies.description')}
        keywords={t('meta.caseStudies.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/casos-de-exito" : "https://canary-detect.com/case-studies"}
      />
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={caseStudiesHero} 
            alt={isSpanish ? "Casos de éxito de detección de fugas en Lanzarote" : "Leak detection case studies across Lanzarote"}
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
              {isSpanish ? "Los Cazafugas en Acción" : "The Leaky Finders at Work"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish ? (
                <>Detección y Reparación de Fugas <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Casos de Éxito Lanzarote</span></>
              ) : (
                <>Leak Detection & Repair <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Case Studies Lanzarote</span></>
              )}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish ? (
                <>
                  Vea cómo Los Cazafugas resuelven <Link to="/es/servicios" className="underline hover:text-primary transition-colors">problemas de fugas</Link> en toda Lanzarote. 
                  Desde piscinas de hoteles hasta villas residenciales, hemos ayudado a cientos de clientes usando nuestro <Link to="/es/tecnologia" className="underline hover:text-primary transition-colors">equipo especializado</Link>.
                </>
              ) : (
                <>
                  See how The Leaky Finders solve <Link to="/services" className="underline hover:text-primary transition-colors">leak problems</Link> across Lanzarote. 
                  From hotel swimming pools to residential villas, we've helped hundreds of clients using our <Link to="/technology" className="underline hover:text-primary transition-colors">specialist equipment</Link>.
                </>
              )}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Location Badge */}
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.imageAlt || study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  
                  {/* Location Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      <MapPin className="h-3 w-3" />
                      {study.location}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
                    {study.fullDescription}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{study.metrics.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span>{study.metrics.savings}</span>
                    </div>
                  </div>

                  {/* Result Box */}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-primary font-bold uppercase tracking-wide">
                          {isSpanish ? "Resultado" : "Result"}
                        </span>
                        <p className="text-foreground font-semibold mt-1">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {isSpanish ? "¿Necesita a Los Cazafugas?" : "Need The Leaky Finders?"}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              {isSpanish 
                ? "Contacte con Los Cazafugas hoy para discutir sus necesidades de detección de fugas. Estamos aquí para ayudar."
                : "Contact The Leaky Finders today to discuss your leak detection needs. We're here to help."}
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                {isSpanish ? "Solicitar Presupuesto" : "Get a Quote"}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
