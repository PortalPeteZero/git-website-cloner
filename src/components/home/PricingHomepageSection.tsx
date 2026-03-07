import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingHomepageSection = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();
  const getRoute = (en: string, es: string) => (isSpanish ? es : en);

  const guarantees = isSpanish ? [
    { bold: "Sin Encontrar, Sin Pagar:", text: " Si confirmamos que tiene una fuga pero no podemos localizarla, no hay cargo. Esto nunca ha sucedido hasta ahora." },
    { bold: "Tarifa Fija:", text: " Cotizamos un precio fijo por adelantado y lo mantenemos, independientemente de cuánto tiempo tome la inspección. Sin sorpresas." },
    { bold: "Presupuestos Gratuitos:", text: " Contáctenos para un presupuesto gratuito y sin compromiso para su situación específica." },
    { bold: "Informes para Seguros Incluidos:", text: " Cada inspección incluye un informe profesional detallado con fotografías, apto para reclamaciones de seguros, sin coste adicional." },
  ] : [
    { bold: "No Find, No Fee:", text: " If we confirm you have a leak but cannot locate it, there is no charge. This has never happened so far." },
    { bold: "Fixed Fee Policy:", text: " We quote a fixed price upfront and stick to it, regardless of how long the survey takes. No surprises." },
    { bold: "Free Quotes:", text: " Contact us for a free, no-obligation quote for your specific situation. We'll assess your needs and provide transparent pricing." },
    { bold: "Insurance Reports Included:", text: " Every survey includes a detailed professional photographic report suitable for insurance claims at no extra cost." },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Precios" : "Pricing"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            {isSpanish 
              ? "Precios y Garantías de Detección de Fugas Lanzarote"
              : "Leak Detection Lanzarote Prices & Guarantees"}
          </h2>
          <p className="text-muted-foreground">
            {isSpanish
              ? "Creemos en precios transparentes y tarifas fijas sin costes ocultos. Nuestras inspecciones tienen un precio basado en el tipo de propiedad y la complejidad."
              : "We believe in transparent, fixed-fee pricing with no hidden costs. Our surveys are priced based on property type and complexity."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/30 transition-all"
          >
            <h3 className="font-heading font-bold text-lg mb-4 text-canary-navy">
              {isSpanish ? "Detección de Fugas Residencial" : "Residential Leak Detection"}
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">
              {isSpanish ? "Desde €150" : "From €150"}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Inspección a tarifa fija para casas y villas" : "Fixed fee survey for homes and villas"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Informe completo con resultados incluido" : "Full report with findings included"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Garantía Sin Encontrar, Sin Pagar" : "No Find, No Fee guarantee applies"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Servicio en el mismo día disponible frecuentemente" : "Same-day service often available"}
              </li>
            </ul>
          </motion.div>

          {/* Pool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-lg relative"
          >
            <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {isSpanish ? "Popular" : "Popular"}
            </div>
            <h3 className="font-heading font-bold text-lg mb-4 text-canary-navy">
              {isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection"}
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">
              {isSpanish ? "Desde €200" : "From €200"}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Inspecciones especializadas de piscinas y spas" : "Specialist pool and spa surveys"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Pruebas de presión y localización" : "Pressure testing and location"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Recomendaciones de reparación incluidas" : "Repair recommendations included"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Funciona con todos los tipos de piscinas" : "Works on all pool types"}
              </li>
            </ul>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/30 transition-all"
          >
            <h3 className="font-heading font-bold text-lg mb-4 text-canary-navy">
              {isSpanish ? "Detección de Fugas Comercial" : "Commercial Leak Detection"}
            </h3>
            <div className="text-3xl font-bold text-primary mb-4">
              {isSpanish ? "A Medida" : "Tailored"}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Inspecciones adaptadas para empresas" : "Tailored surveys for businesses"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Hoteles, apartamentos, oficinas" : "Hotels, apartments, offices"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Informes profesionales detallados" : "Detailed professional reports"}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {isSpanish ? "Interrupción mínima garantizada" : "Minimal disruption guaranteed"}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-heading font-bold text-lg text-canary-navy">
                {isSpanish ? "Nuestras Garantías" : "Our Guarantees"}
              </h3>
            </div>
            <ul className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">{guarantee.bold}</strong>{guarantee.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">
              {isSpanish
                ? "Nota: Para inspecciones de confirmación de fugas (donde confirmamos si existe una fuga), se aplica un cargo del 50% ya que el trabajo de diagnóstico se ha completado."
                : "Note: For leak confirmation surveys (where we confirm if a leak exists), a 50% charge applies as diagnostic work has been completed."}
            </p>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="gap-2" asChild>
              <Link to={getRoute("/contact", "/es/contacto")}>
                {isSpanish ? "Solicitar Presupuesto Gratuito" : "Get Your Free Quote"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

PricingHomepageSection.displayName = "PricingHomepageSection";

export default PricingHomepageSection;
