import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const ServiceAreasHomepage = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();
  const locationBase = isSpanish ? "/es/ubicaciones" : "/locations";

  const mainAreas = [
    {
      name: "Arrecife",
      slug: "arrecife",
      description: isSpanish
        ? "Capital de Lanzarote. Edificios residenciales, hoteles, propiedades comerciales."
        : "Capital of Lanzarote. Residential buildings, hotels, commercial properties.",
    },
    {
      name: "Puerto del Carmen",
      slug: "puerto-del-carmen",
      description: isSpanish
        ? "Centro turístico. Hoteles, apartamentos, villas con piscinas."
        : "Tourist hub. Hotels, apartments, villas with pools.",
    },
    {
      name: "Playa Blanca",
      slug: "playa-blanca",
      description: isSpanish
        ? "Nuestra base local. Villas de lujo, Marina Rubicón."
        : "Our local base. Luxury villas, Marina Rubicón.",
    },
    {
      name: "Costa Teguise",
      slug: "costa-teguise",
      description: isSpanish
        ? "Complejos turísticos, campos de golf, comunidades."
        : "Resort complexes, golf courses, communities.",
    },
  ];

  const additionalAreas = [
    "Yaiza", "Tías", "Playa Honda", "Teguise", "San Bartolomé",
    "Puerto Calero", "Tahiche", "Guatiza", "Femés", "Uga", "Las Breñas",
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            <MapPin className="h-4 w-4" />
            {isSpanish ? "Cobertura" : "Coverage"}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-canary-navy">
            {isSpanish ? "Áreas de Servicio en Lanzarote" : "Service Areas in Lanzarote"}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {isSpanish
              ? "Canary Detect atiende con orgullo todas las áreas de las Islas Canarias, incluyendo Lanzarote, Fuerteventura, Gran Canaria, Tenerife, La Palma, El Hierro y La Gomera. Nuestro equipo estratégicamente ubicado garantiza tiempos de respuesta rápidos y un servicio eficiente."
              : "Canary Detect proudly serves all areas of the Canary Islands, including Lanzarote, Fuerteventura, Gran Canaria, Tenerife, La Palma, El Hierro, and La Gomera. Our strategically located team ensures rapid response times and efficient service for customers across the islands."}
          </p>
        </motion.div>

        {/* Main 4 areas as cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {mainAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`${locationBase}/${area.slug}`} className="group block h-full">
                <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-5">
                    <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      {isSpanish ? "Ver servicios" : "View services"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-3">
            {isSpanish ? "También cubrimos:" : "We Also Cover:"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ServiceAreasHomepage.displayName = "ServiceAreasHomepage";

export default ServiceAreasHomepage;
