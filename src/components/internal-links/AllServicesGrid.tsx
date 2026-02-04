import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Waves, Search, Wrench, Cable, Home, Thermometer, LucideIcon } from "lucide-react";

interface AllServicesGridProps {
  isSpanish: boolean;
  locationName?: string;
}

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const AllServicesGrid = ({ isSpanish, locationName }: AllServicesGridProps) => {
  const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
  
  const services: ServiceItem[] = isSpanish ? [
    { title: "Detección de Fugas de Agua", description: "Localice fugas ocultas con imagen térmica y sensores acústicos", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
    { title: "Detección de Fugas en Piscinas", description: "Detección precisa de fugas en piscinas y spas", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
    { title: "Detección Subterránea", description: "Localice tuberías y fugas bajo tierra", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
    { title: "Inspección de Desagües", description: "Inspecciones CCTV de tuberías y desagües", href: `${serviceBasePath}/deteccion-desagues`, icon: Cable },
    { title: "Reparación de Fugas", description: "Reparaciones completas de tuberías y sistemas", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench },
    { title: "Reparación de Fugas en Piscinas", description: "Reparación de fugas en piscinas y equipos", href: `${serviceBasePath}/reparacion-fugas-piscinas`, icon: Waves },
    { title: "Mapeo de Humedad", description: "Detecte humedades antes de decorar", href: `${serviceBasePath}/mapeo-humedad`, icon: Thermometer },
    { title: "Confirmación de Fugas Gratis", description: "Comprobación gratuita de contador de agua", href: `${serviceBasePath}/confirmacion-fugas-gratis`, icon: Home },
  ] : [
    { title: "Water Leak Detection", description: "Locate hidden leaks with thermal imaging and acoustic sensors", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
    { title: "Pool Leak Detection", description: "Precise leak detection for pools and spas", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
    { title: "Underground Detection", description: "Locate pipes and leaks underground", href: `${serviceBasePath}/underground-detection`, icon: Search },
    { title: "Drain Detection", description: "CCTV inspections of pipes and drains", href: `${serviceBasePath}/drain-detection`, icon: Cable },
    { title: "Leak Repair", description: "Complete pipe and system repairs", href: `${serviceBasePath}/leak-repair`, icon: Wrench },
    { title: "Pool Leak Repair", description: "Pool leak and equipment repairs", href: `${serviceBasePath}/pool-leak-repair`, icon: Waves },
    { title: "Damp & Moisture Mapping", description: "Detect moisture before decorating", href: `${serviceBasePath}/damp-moisture-mapping`, icon: Thermometer },
    { title: "Free Leak Confirmation", description: "Free water meter check", href: `${serviceBasePath}/free-leak-confirmation`, icon: Home },
  ];

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
            {isSpanish ? "Nuestros Servicios" : "Our Services"}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
            {locationName 
              ? (isSpanish 
                  ? `Todos los Servicios Disponibles en ${locationName}` 
                  : `All Services Available in ${locationName}`)
              : (isSpanish 
                  ? "Todos Nuestros Servicios" 
                  : "All Our Services")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={service.href}
                  className="block h-full p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllServicesGrid;
