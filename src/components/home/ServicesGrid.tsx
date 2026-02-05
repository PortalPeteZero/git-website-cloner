import { forwardRef } from "react";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench, Thermometer } from "lucide-react";
import ServiceCardLite from "./ServiceCardLite";
import { useLanguage } from "@/i18n/LanguageContext";

// Only import FIRST image per service for initial render (LCP optimization)
// Gallery images are loaded lazily on service detail pages
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import thermalUndergroundLeak from "@/assets/blog/thermal-underground-leak.jpg";
// Use drain-detection-4.jpg for water leak as it shows acoustic detection
import waterLeakImg from "@/assets/services/gallery/drain-detection-4.jpg";

const ServicesGrid = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();

  // Simplified service data with single image per card (LCP optimization)
  const services = [
    {
      title: isSpanish ? "Detección de Desagües" : "Drain Detection",
      description: isSpanish 
        ? "Localice e identifique problemas de drenaje usando inspección con cámara avanzada y tecnología de rastreo."
        : "Locate and identify drainage issues using advanced camera inspection and tracing technology.",
      icon: Search,
      href: isSpanish ? "/es/servicios/deteccion-desagues" : "/services/drain-detection",
      image: drainDetectionImg,
      imageAlt: isSpanish ? "Inspección de desagües con cámara CCTV Lanzarote" : "CCTV drain inspection camera Lanzarote",
    },
    {
      title: isSpanish ? "Fugas en Tuberías" : "Water Pipe Leaks",
      description: isSpanish
        ? "¿Tubería rota o con fuga? Detectamos fugas en tuberías de cobre, PVC, polietileno y acero con precisión centimétrica."
        : "Broken or leaking pipe? We detect leaks in copper, PVC, polyethylene and steel pipes with pinpoint accuracy.",
      icon: CircleDot,
      href: isSpanish ? "/es/servicios/deteccion-fugas-tuberias" : "/services/water-pipe-leak-detection",
      image: pipeInspectionImg,
      imageAlt: isSpanish ? "Detección de fugas en tuberías enterradas" : "Underground pipe leak detection",
    },
    {
      title: isSpanish ? "Detección Subterránea" : "Underground Detection",
      description: isSpanish
        ? "¿Necesita localizar tuberías enterradas antes de excavar? Localice tuberías, cables y servicios subterráneos con radar de penetración terrestre."
        : "Need to find buried pipes before digging? Locate underground pipes, cables, and utilities with ground-penetrating radar.",
      icon: Cable,
      href: isSpanish ? "/es/servicios/deteccion-subterranea" : "/services/underground-detection",
      image: undergroundDetectionImg,
      imageAlt: isSpanish ? "Detección de tuberías con radar de penetración terrestre" : "Ground penetrating radar pipe detection",
    },
    {
      title: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection",
      description: isSpanish
        ? "¿Paredes húmedas? ¿Facturas de agua altas? ¿Contador corriendo con los grifos cerrados? Encuentre fugas de agua ocultas usando tecnología acústica y de imagen térmica."
        : "Damp walls? High water bills? Meter running when taps are off? Find hidden water leaks using acoustic and thermal imaging.",
      icon: Droplets,
      href: isSpanish ? "/es/servicios/deteccion-fugas-agua" : "/services/water-leak-detection",
      image: waterLeakImg,
      imageAlt: isSpanish ? "Dispositivo de escucha para detección acústica de fugas" : "Acoustic leak detection listening device",
    },
    {
      title: isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection",
      description: isSpanish
        ? "¿Su piscina pierde agua cada día? ¿Rellenado constante? Encontraremos la fuga y detendremos la pérdida de agua."
        : "Is your swimming pool losing water every day? Constant refilling? We'll find the leak and stop the water loss.",
      icon: Waves,
      href: isSpanish ? "/es/servicios/deteccion-fugas-piscinas" : "/services/pool-leak-detection",
      image: poolLeakDetectionImg,
      imageAlt: isSpanish ? "Prueba de presión para detección de fugas de piscinas" : "Swimming pool leak detection pressure testing",
    },
    {
      title: isSpanish ? "Reparación de Fugas" : "Leak Repair",
      description: isSpanish
        ? "¿Ha encontrado una fuga? La reparamos rápidamente. Servicios profesionales de reparación de fugas una vez localizado el problema."
        : "Found a leak? We'll fix it fast. Professional leak repair services once we've located the problem.",
      icon: Wrench,
      href: isSpanish ? "/es/servicios/reparacion-fugas" : "/services/leak-repair",
      image: leakRepairImg,
      imageAlt: isSpanish ? "Servicio profesional de reparación de fugas Lanzarote" : "Professional leak repair service Lanzarote",
    },
    {
      title: isSpanish ? "Mapeo de Humedad" : "Damp & Moisture Mapping",
      description: isSpanish
        ? "¿Paredes húmedas? ¿Pintura descascarada? Detectamos humedades ocultas con infrarrojos. Ideal antes de reformas. Visita GRATUITA."
        : "Damp walls? Peeling paint? We detect hidden moisture with infrared. Ideal before refurbishment. FREE home visit.",
      icon: Thermometer,
      href: isSpanish ? "/es/servicios/mapeo-humedad" : "/services/damp-moisture-mapping",
      image: thermalUndergroundLeak,
      imageAlt: isSpanish ? "Detección de humedades con cámara térmica Lanzarote" : "Thermal imaging damp detection Lanzarote",
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-canary-navy relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Radial gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Lo Que Hacemos" : "What We Do"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            {isSpanish ? "Nuestros Servicios" : "Our Services"}
          </h2>
          <p className="text-white/70">
            {isSpanish 
              ? "Ofrecemos una gama completa de servicios de detección y reparación de fugas en toda Lanzarote, utilizando la última tecnología y equipos."
              : "We offer a comprehensive range of leak detection and repair services across Lanzarote, using the latest technology and equipment."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCardLite
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesGrid.displayName = "ServicesGrid";

export default ServicesGrid;
