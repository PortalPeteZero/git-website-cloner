import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const WelcomeSection = () => {
  const { isSpanish } = useLanguage();

  const features = isSpanish ? [
    "Métodos de detección no invasivos",
    "Última tecnología acústica",
    "Equipos de imagen térmica",
    "Resultados rápidos y precisos",
    "Profesionales experimentados",
    "Precios competitivos",
  ] : [
    "Non-invasive detection methods",
    "Latest acoustic technology",
    "Thermal imaging equipment",
    "Fast and accurate results",
    "Experienced professionals",
    "Competitive pricing",
  ];

  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <section className="py-12 md:py-16 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] overflow-hidden" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative accent blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-visible">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              {isSpanish ? "Bienvenido a Canary Detect" : "Welcome to Canary Detect"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-2 text-canary-navy">
              {isSpanish 
                ? "Servicios Profesionales de Detección de Fugas en Lanzarote"
                : "Professional Leak Detection Services in Lanzarote"}
            </h2>
            <p className="text-primary font-semibold italic mb-6">
              {isSpanish ? '"Los Cazafugas"' : '"The Leaky Finders"'}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
              {isSpanish ? (
                <>
                  Canary Detect ofrece <Link to="/es/servicios" className="text-primary hover:underline">servicios profesionales de detección de fugas</Link> en toda Lanzarote.
                  Nuestro equipo de expertos utiliza la <Link to="/es/tecnologia" className="text-primary hover:underline">última tecnología y equipos</Link> para localizar fugas de forma rápida 
                  y precisa, ayudándole a ahorrar tiempo, dinero y prevenir más daños a su propiedad.
                </>
              ) : (
                <>
                  Canary Detect provides professional <Link to="/services" className="text-primary hover:underline">leak detection services</Link> across Lanzarote.
                  Our team of experts uses the <Link to="/technology" className="text-primary hover:underline">latest technology and equipment</Link> to locate leaks quickly 
                  and accurately, helping you save time, money, and prevent further damage to your property.
                </>
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-none">
              {isSpanish ? (
                <>
                  Ya sea que tenga una <Link to="/es/servicios/deteccion-fugas-piscinas" className="text-primary hover:underline">fuga de piscina</Link>, <Link to="/es/servicios/deteccion-fugas-agua" className="text-primary hover:underline">fuga de tubería de agua</Link>, o necesite <Link to="/es/servicios/deteccion-subterranea" className="text-primary hover:underline">detección de tuberías subterráneas</Link>, 
                  tenemos la experiencia y el equipo para encontrar el problema y proporcionar soluciones efectivas.
                </>
              ) : (
                <>
                  Whether you have a <Link to="/services/pool-leak-detection" className="text-primary hover:underline">swimming pool leak</Link>, <Link to="/services/water-leak-detection" className="text-primary hover:underline">water pipe leak</Link>, or need <Link to="/services/underground-detection" className="text-primary hover:underline">underground pipe detection</Link>, 
                  we have the expertise and equipment to find the problem and provide effective solutions.
                </>
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-canary-navy">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                <Link to={getRoute("/technology", "/es/tecnologia")}>
                  {isSpanish 
                    ? "Vea Nuestra Tecnología y la Diferencia Canary Detect"
                    : "See Our Technology & The Canary Detect Difference"}
                </Link>
              </Button>
              <Button variant="outline" className="border-canary-navy text-canary-navy hover:bg-canary-navy hover:text-white" asChild>
                <Link to={getRoute("/contact", "/es/contacto")}>
                  {isSpanish ? "Contáctenos" : "Contact Us"}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img 
                src={welcomeImg} 
                alt={isSpanish 
                  ? "Técnico profesional de detección de fugas usando equipo acústico Lanzarote"
                  : "Professional leak detection technician using acoustic equipment Lanzarote"} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-2xl">
              <div className="text-3xl font-heading font-bold">40+</div>
              <div className="text-sm">{isSpanish ? "Años de Experiencia" : "Years Experience"}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
