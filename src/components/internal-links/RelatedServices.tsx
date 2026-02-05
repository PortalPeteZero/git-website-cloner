import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  currentServiceSlug: string;
  isSpanish: boolean;
}

const RelatedServices = ({ currentServiceSlug, isSpanish }: RelatedServicesProps) => {
  const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
  
  const allServices: RelatedService[] = isSpanish ? [
    { title: "Detección de Fugas Ocultas", description: "Localice fugas invisibles con imagen térmica y gas trazador", href: `${serviceBasePath}/deteccion-fugas-agua` },
    { title: "Detección de Fugas en Tuberías", description: "Diagnóstico especializado de tuberías: cobre, PVC, polietileno", href: `${serviceBasePath}/deteccion-fugas-tuberias` },
    { title: "Detección de Fugas en Piscinas", description: "Detección precisa de fugas en piscinas y spas", href: `${serviceBasePath}/deteccion-fugas-piscinas` },
    { title: "Detección Subterránea", description: "Localice tuberías y cables enterrados con GPR", href: `${serviceBasePath}/deteccion-subterranea` },
    { title: "Inspección de Desagües", description: "Inspecciones CCTV de tuberías y desagües", href: `${serviceBasePath}/deteccion-desagues` },
    { title: "Reparación de Fugas", description: "Reparaciones completas de tuberías y sistemas", href: `${serviceBasePath}/reparacion-fugas` },
    { title: "Reparación de Fugas en Piscinas", description: "Reparación de fugas en piscinas y equipos", href: `${serviceBasePath}/reparacion-fugas-piscinas` },
    { title: "Desbloqueo de Desagües", description: "Desatasco profesional de tuberías", href: `${serviceBasePath}/desbloqueo-desagues` },
    { title: "Mapeo de Humedad", description: "Detecte humedades antes de decorar", href: `${serviceBasePath}/mapeo-humedad` },
  ] : [
    { title: "Hidden Leak Detection", description: "Locate invisible leaks with thermal imaging and tracer gas", href: `${serviceBasePath}/water-leak-detection` },
    { title: "Water Pipe Leak Detection", description: "Specialised pipe diagnostics: copper, PVC, polyethylene", href: `${serviceBasePath}/water-pipe-leak-detection` },
    { title: "Pool Leak Detection", description: "Precise leak detection for pools and spas", href: `${serviceBasePath}/pool-leak-detection` },
    { title: "Underground Detection", description: "Locate buried pipes and cables with GPR", href: `${serviceBasePath}/underground-detection` },
    { title: "Drain Detection", description: "CCTV inspections of pipes and drains", href: `${serviceBasePath}/drain-detection` },
    { title: "Leak Repair", description: "Complete pipe and system repairs", href: `${serviceBasePath}/leak-repair` },
    { title: "Pool Leak Repair", description: "Pool leak and equipment repairs", href: `${serviceBasePath}/pool-leak-repair` },
    { title: "Drain Unblocking", description: "Professional drain clearing services", href: `${serviceBasePath}/drain-unblocking` },
    { title: "Damp & Moisture Mapping", description: "Detect moisture before decorating", href: `${serviceBasePath}/damp-moisture-mapping` },
  ];

  // Filter out current service and get 4 related ones
  const relatedServices = allServices
    .filter(service => !service.href.includes(currentServiceSlug))
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-background section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            {isSpanish ? "Más Servicios" : "More Services"}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
            {isSpanish ? "Servicios Relacionados" : "Related Services"}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="block h-full p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  {isSpanish ? "Ver más" : "Learn more"}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
