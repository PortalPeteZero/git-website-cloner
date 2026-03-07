import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg?w=1200";
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

  const techBullets = isSpanish ? [
    { bold: "Tecnología de imagen térmica", text: " se utiliza para detectar anomalías de temperatura causadas por fugas de agua." },
    { bold: "Sensores acústicos", text: " detectan el sonido distintivo del agua escapando de tuberías presurizadas." },
    { bold: "Tecnología de gas trazador", text: " presuriza las tuberías con una mezcla segura de nitrógeno/hidrógeno para localizar fugas." },
  ] : [
    { bold: "Thermal imaging technology", text: " is used to detect temperature anomalies caused by leaking water." },
    { bold: "Acoustic sensors", text: " detect the distinctive sound of water escaping from pressurized pipes." },
    { bold: "Tracer gas technology", text: " pressurizes pipes with a safe nitrogen/hydrogen mix to locate leaks." },
  ];

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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              {isSpanish ? "Bienvenido a Canary Detect" : "Welcome to Canary Detect"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-2 text-canary-navy">
              {isSpanish 
                ? "Servicios de Detección de Fugas en Lanzarote"
                : "Leak Detection Services in Lanzarote"}
            </h2>
            <p className="text-primary font-semibold italic mb-6">
              {isSpanish ? '"Los Cazafugas"' : '"The Leaky Finders"'}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
              {isSpanish ? (
                <>
                  Canary Detect ofrece <Link to="/es/servicios" className="text-primary hover:underline">servicios profesionales de detección de fugas</Link> en toda Lanzarote y las Islas Canarias, utilizando la última tecnología y un equipo de fontaneros totalmente cualificados para localizar fugas de forma rápida y precisa.
                </>
              ) : (
                <>
                  Canary Detect provides professional <Link to="/services" className="text-primary hover:underline">leak detection services</Link> across Lanzarote and the Canary Islands, using the latest technology and a team of fully qualified plumbers to quickly and accurately locate leaks.
                </>
              )}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
              {isSpanish ? (
                <>
                  Los Cazafugas ofrecen servicios profesionales de detección de fugas de agua y piscinas en toda Lanzarote, cubriendo todas las áreas de servicio incluyendo Playa Blanca, Puerto del Carmen, Costa Teguise y Arrecife. Nuestros servicios son ideales para propietarios, administradores de propiedades y empresas que buscan detección fiable de fugas en Lanzarote y las Islas Canarias. Atendemos tanto a clientes residenciales como comerciales en toda la zona, ofreciendo <Link to="/es/blog/deteccion-fugas-emergencia-reparacion-lanzarote" className="text-primary hover:underline">detección y reparación de fugas de emergencia en Lanzarote</Link> cuando surgen problemas urgentes.
                </>
              ) : (
                <>
                  The Leaky Finders provide professional water and pool leak detection services across Lanzarote, covering all service areas including Playa Blanca, Puerto del Carmen, Costa Teguise, and Arrecife. Our services are ideal for homeowners, property managers, and businesses seeking reliable leak detection in Lanzarote and the Canary Islands. We serve both residential and commercial customers throughout the area, offering <Link to="/blog/emergency-leak-detection-repair-lanzarote" className="text-primary hover:underline">emergency leak detection and repair in Lanzarote</Link> when urgent issues arise.
                </>
              )}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
              {isSpanish ? (
                <>
                  Nuestro equipo utiliza <Link to="/es/tecnologia" className="text-primary hover:underline">más de €80.000 en equipos especializados</Link> incluyendo imagen térmica, sensores acústicos y gas trazador para encontrar fugas de agua, fugas de piscinas y fugas en tuberías subterráneas con precisión centimétrica, protegiendo todo el sistema de fontanería de su propiedad. La detección temprana de fugas garantiza la seguridad de su propiedad y sus ocupantes al prevenir daños por agua y peligros relacionados. Canary Detect atiende toda Lanzarote con tiempos de respuesta rápidos.
                </>
              ) : (
                <>
                  Our team uses <Link to="/technology" className="text-primary hover:underline">€80,000+ of specialist equipment</Link> including thermal imaging, acoustic sensors and tracer gas to find water leaks, swimming pool leaks and underground pipe leaks with centimetre accuracy, protecting the entire plumbing system of your property. Early leak detection ensures the safety of your property and its occupants by preventing water damage and related hazards. Canary Detect serves all of Lanzarote with fast response times.
                </>
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                width={1200}
                height={900}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-2xl">
              <div className="text-3xl font-heading font-bold">40+</div>
              <div className="text-sm">{isSpanish ? "Años de Experiencia" : "Years Experience"}</div>
            </div>
          </motion.div>
        </div>

        {/* Summary section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-muted/50 rounded-xl p-8 border border-border">
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-4 text-canary-navy">
              {isSpanish 
                ? "Resumen: Servicios de Detección de Fugas en Lanzarote y las Islas Canarias"
                : "Summary: Leak Detection Services in Lanzarote and the Canary Islands"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isSpanish
                ? "Canary Detect ofrece servicios profesionales de detección de fugas en toda Lanzarote y las Islas Canarias, utilizando la última tecnología y un equipo de fontaneros totalmente cualificados para localizar fugas de forma rápida y precisa. Servicios de emergencia, pruebas gratuitas de confirmación de fugas e informes detallados aprobados por seguros están disponibles."
                : "Canary Detect provides professional leak detection services across Lanzarote and the Canary Islands, using the latest technology and a team of fully qualified plumbers to quickly and accurately locate leaks. Emergency services, free leak confirmation tests, and detailed insurance-approved reports are available."}
            </p>
          </div>
        </motion.div>

        {/* Introduction to Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-canary-navy">
            {isSpanish ? "Introducción a Nuestros Servicios" : "Introduction to Our Services"}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isSpanish
              ? "En Canary Detect, nos especializamos en ofrecer servicios profesionales de detección de fugas adaptados a las necesidades de propietarios, administradores de propiedades y empresas en todas las Islas Canarias. Nuestro equipo de expertos aprovecha la última tecnología de vanguardia—incluyendo imagen térmica, sensores acústicos y tecnología de gas trazador—para realizar inspecciones de detección de fugas exhaustivas con una precisión inigualable."
              : "At Canary Detect, we specialize in delivering professional leak detection services tailored to the needs of homeowners, property managers, and businesses throughout the Canary Islands. Our expert team leverages the latest cutting-edge technology—including thermal imaging, acoustic sensors, and tracer gas technology—to conduct comprehensive leak detection surveys with unrivalled accuracy."}
          </p>
          
          <ul className="space-y-3 mb-6">
            {techBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{bullet.bold}</strong>{bullet.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            {isSpanish
              ? "Entendemos lo crucial que es identificar las fugas de agua a tiempo, ya que esto no solo previene el desperdicio de agua sino que también protege su propiedad de daños y reparaciones costosas. Nuestros servicios están diseñados para darle tranquilidad, asegurando que las fugas ocultas se detecten con precisión centimétrica y se aborden de manera eficiente. Con nuestra tecnología avanzada y amplia experiencia, puede confiar en Canary Detect para proteger su propiedad y ofrecer resultados en los que puede confiar."
              : "We understand how crucial it is to identify water leaks early, as this not only prevents wasted water but also protects your property from costly damage and repairs. Our services are designed to give you peace of mind, ensuring that hidden leaks are detected with centimetre accuracy and addressed efficiently. With our advanced technology and extensive experience, you can trust Canary Detect to safeguard your property and deliver results you can rely on."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
