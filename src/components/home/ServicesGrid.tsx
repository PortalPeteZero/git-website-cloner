import { forwardRef } from "react";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench, Thermometer, ClipboardCheck, Hammer, Zap } from "lucide-react";
import ServiceCardLite from "./ServiceCardLite";
import { useLanguage } from "@/i18n/LanguageContext";

import drainDetectionImg from "@/assets/services/drain-detection.jpg?w=800";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg?w=800";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg?w=800";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg?w=800";
import leakRepairImg from "@/assets/services/leak-repair.jpg?w=800";
import thermalUndergroundLeak from "@/assets/blog/thermal-underground-leak.jpg?w=800";
import waterLeakImg from "@/assets/services/gallery/drain-detection-4.jpg?w=800";
import surveyHeroImg from "@/assets/services/survey/hero-pool-survey.jpg?w=800";
import boilerImg from "@/assets/plumbing/boiler/boiler-installation-wall.jpg?w=800";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg?w=800";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg?w=800";

const ServicesGrid = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();

  const services = [
    {
      title: isSpanish ? "Inspección Pre-Compra" : "Pre-Purchase Property Survey",
      description: isSpanish
        ? "Inspección independiente de propiedades antes de comprar. Imagen térmica, pruebas de presión, inspección de piscinas y más. Inspecciones desde €99."
        : "Independent property survey before you buy. Thermal imaging, pressure testing, pool inspection & more. Surveys from €99.",
      icon: ClipboardCheck,
      href: isSpanish ? "/es/servicios/inspeccion-precompra" : "/services/pre-purchase-survey",
      image: surveyHeroImg,
      imageAlt: isSpanish ? "Inspección pre-compra de propiedades Lanzarote" : "Pre-purchase property survey Lanzarote",
    },
    {
      title: isSpanish ? "Inspección de Desagües y Tuberías" : "Drain & Pipe Surveys",
      description: isSpanish
        ? "Inspección con cámara CCTV y rastreo de desagües para localizar obstrucciones, roturas, intrusión de raíces y problemas en el estado de las tuberías. 6 sistemas de cámaras adaptados al tamaño de las tuberías para una precisión óptima."
        : "CCTV camera inspection and drain tracing to locate blockages, breaks, root intrusions and pipe condition issues. 6 camera systems tailored to the size of the pipes for optimal accuracy, with detailed video reports.",
      icon: Search,
      href: isSpanish ? "/es/servicios/deteccion-desagues" : "/services/drain-detection",
      image: drainDetectionImg,
      imageAlt: isSpanish ? "Técnico profesional de detección de fugas usando equipo acústico Lanzarote" : "Professional leak detection technician using acoustic equipment Lanzarote",
    },
    {
      title: isSpanish ? "Desatasco de Desagües" : "Drain Unblocking",
      description: isSpanish
        ? "¿Desagüe bloqueado? Jetting de alta presión y limpieza mecánica para eliminar todo tipo de obstrucciones rápidamente. Inspección CCTV antes y después. Servicio de emergencia disponible."
        : "Blocked drain? High-pressure jetting and mechanical cleaning to clear all types of blockages fast. CCTV inspection before and after. Emergency callout available.",
      icon: Zap,
      href: isSpanish ? "/es/servicios/desatasco-desagues" : "/services/drain-unblocking",
      image: drainUnblockingImg,
      imageAlt: isSpanish ? "Servicio de desatasco de desagües Lanzarote" : "Drain unblocking service Lanzarote",
    },
    {
      title: isSpanish ? "Detección Subterránea" : "Underground Detection",
      description: isSpanish
        ? "¿Necesita encontrar tuberías enterradas antes de excavar? Evite daños costosos localizando tuberías subterráneas, cables y servicios con radar de penetración terrestre y localizadores electromagnéticos."
        : "Need to find buried pipes before digging? Avoid costly damage by locating underground pipes, cables, and utilities with ground-penetrating radar and electromagnetic locators.",
      icon: Cable,
      href: isSpanish ? "/es/servicios/deteccion-subterranea" : "/services/underground-detection",
      image: undergroundDetectionImg,
      imageAlt: isSpanish ? "Detección de fugas en tuberías subterráneas" : "Underground pipe leak detection",
    },
    {
      title: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection",
      description: isSpanish
        ? "¿Paredes húmedas? ¿Facturas de agua altas? ¿Contador corriendo con los grifos cerrados? Localice fugas de agua ocultas en paredes, suelos y techos usando tecnología acústica e imagen térmica."
        : "Damp walls? High water bills? Meter running when taps are off? Pinpoint hidden water leaks in walls, floors, and ceilings using acoustic and thermal imaging technology.",
      icon: Droplets,
      href: isSpanish ? "/es/servicios/deteccion-fugas-agua" : "/services/water-leak-detection",
      image: waterLeakImg,
      imageAlt: isSpanish ? "Detección de tuberías con radar de penetración terrestre" : "Ground penetrating radar pipe detection",
    },
    {
      title: isSpanish ? "Fugas en Tuberías" : "Water Pipe Leaks",
      description: isSpanish
        ? "¿Tubería rota o con fuga? Detectamos fugas en tuberías de cobre, PVC, polietileno y acero con precisión centimétrica."
        : "Broken or leaking pipe? We detect leaks in copper, PVC, polyethylene and steel pipes with pinpoint accuracy.",
      icon: CircleDot,
      href: isSpanish ? "/es/servicios/deteccion-fugas-tuberias" : "/services/water-pipe-leak-detection",
      image: pipeInspectionImg,
      imageAlt: isSpanish ? "Cámara de inspección CCTV de desagües Lanzarote" : "CCTV drain inspection camera Lanzarote",
    },
    {
      title: isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection",
      description: isSpanish
        ? "¿Su piscina pierde agua cada día? ¿Rellenado constante? Encontraremos la fuga usando pruebas de presión y tinte para detener la pérdida de agua."
        : "Is your swimming pool losing water every day? Constant refilling? We'll find the leak using pressure testing and dye testing techniques to stop water loss.",
      icon: Waves,
      href: isSpanish ? "/es/servicios/deteccion-fugas-piscinas" : "/services/pool-leak-detection",
      image: poolLeakDetectionImg,
      imageAlt: isSpanish ? "Dispositivo de escucha para detección acústica de fugas" : "Acoustic leak detection listening device",
    },
    {
      title: isSpanish ? "Reparación de Fugas" : "Leak Repair",
      description: isSpanish
        ? "¿Ha encontrado una fuga de agua? La reparamos rápidamente. Reparaciones profesionales de tuberías y fontanería una vez localizado el problema. Soluciones completas de la detección a la reparación."
        : "Found a water leak? We'll fix it fast. Professional pipe and plumbing repairs once we've located the problem. Complete solutions from detection to repair.",
      icon: Wrench,
      href: isSpanish ? "/es/servicios/reparacion-fugas" : "/services/leak-repair",
      image: leakRepairImg,
      imageAlt: isSpanish ? "Prueba de presión para detección de fugas de piscinas" : "Swimming pool leak detection pressure testing",
    },
    {
      title: isSpanish ? "Reparación de Fugas de Piscinas" : "Pool Leak Repair",
      description: isSpanish
        ? "¿Su piscina tiene fugas? Reparamos tuberías de piscinas, grietas en el vaso, accesorios y equipos. Servicio completo de detección a reparación con materiales de calidad garantizados."
        : "Swimming pool leaking? We repair pool pipes, shell cracks, fittings and equipment. Complete detection-to-repair service with quality materials guaranteed.",
      icon: Wrench,
      href: isSpanish ? "/es/servicios/reparacion-fugas-piscinas" : "/services/pool-leak-repair",
      image: poolLeakRepairImg,
      imageAlt: isSpanish ? "Servicio de reparación de fugas de piscinas Lanzarote" : "Pool leak repair service Lanzarote",
    },
    {
      title: isSpanish ? "Mapeo de Humedad" : "Damp & Moisture Mapping",
      description: isSpanish
        ? "¿Paredes húmedas? ¿Facturas de agua altas? Mapeamos la humedad e identificamos la fuente de los problemas de humedad usando imagen térmica."
        : "Damp walls? High water bills? We map moisture and identify the source of damp problems using thermal imaging.",
      icon: Thermometer,
      href: isSpanish ? "/es/servicios/mapeo-humedad" : "/services/damp-moisture-mapping",
      image: thermalUndergroundLeak,
      imageAlt: isSpanish ? "Servicio profesional de reparación de fugas Lanzarote" : "Professional leak repair service Lanzarote",
    },
    {
      title: isSpanish ? "Fontanería y Mantenimiento" : "Plumbing & Maintenance",
      description: isSpanish
        ? "Reparaciones, instalaciones de calentadores, mejoras de sistemas y mantenimiento de piscinas. Soluciones completas de fontanería."
        : "Repairs, boiler installations, system upgrades, and pool maintenance. Complete plumbing solutions from detection to fix.",
      icon: Hammer,
      href: isSpanish ? "/es/servicios-fontaneria" : "/plumbing-services",
      image: boilerImg,
      imageAlt: isSpanish ? "Servicios de fontanería y mantenimiento Lanzarote" : "Plumbing and maintenance services Lanzarote",
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
              ? "Soluciones profesionales de detección y reparación de fugas utilizando tecnología de vanguardia"
              : "Professional leak detection and repair solutions using cutting-edge technology"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
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
