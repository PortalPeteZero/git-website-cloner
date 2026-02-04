import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface ServiceAreasProps {
  isSpanish: boolean;
  serviceName?: string;
}

const ServiceAreas = ({ isSpanish, serviceName }: ServiceAreasProps) => {
  const locationBasePath = isSpanish ? '/es/ubicaciones' : '/locations';
  
  const locations = [
    { name: "Arrecife", slug: "arrecife" },
    { name: "Puerto del Carmen", slug: "puerto-del-carmen" },
    { name: "Playa Blanca", slug: "playa-blanca" },
    { name: "Costa Teguise", slug: "costa-teguise" },
    { name: "Yaiza", slug: "yaiza" },
    { name: "Tías", slug: "tias" },
    { name: "Playa Honda", slug: "playa-honda" },
    { name: "Teguise", slug: "teguise" },
    { name: "San Bartolomé", slug: "san-bartolome" },
    { name: "Puerto Calero", slug: "puerto-calero" },
    { name: "Tahiche", slug: "tahiche" },
    { name: "Guatiza", slug: "guatiza" },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            <MapPin className="h-4 w-4" />
            {isSpanish ? "Cobertura" : "Coverage"}
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            {serviceName 
              ? (isSpanish 
                  ? `${serviceName} en Todo Lanzarote` 
                  : `${serviceName} Across Lanzarote`)
              : (isSpanish 
                  ? "Áreas de Servicio en Lanzarote" 
                  : "Service Areas in Lanzarote")}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {isSpanish 
              ? "Damos servicio a toda la isla de Lanzarote. Haga clic en su zona para más información."
              : "We serve the entire island of Lanzarote. Click your area for more information."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`${locationBasePath}/${location.slug}`}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
            >
              {location.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
