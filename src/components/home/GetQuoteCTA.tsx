import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const GetQuoteCTA = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();
  const getRoute = (en: string, es: string) => (isSpanish ? es : en);

  const badges = [
    {
      icon: Shield,
      label: isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee",
      description: isSpanish ? "Resultados garantizados" : "Guaranteed results",
    },
    {
      icon: Clock,
      label: isSpanish ? "Respuesta 24h" : "24hr Response",
      description: isSpanish ? "Respuesta rápida" : "Fast turnaround",
    },
    {
      icon: Award,
      label: isSpanish ? "€80K+ en Equipos" : "€80K+ Equipment",
      description: isSpanish ? "Grado profesional" : "Professional grade",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-gradient-to-br from-canary-navy via-canary-navy to-slate-900 relative overflow-hidden"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
            {isSpanish
              ? "Obtenga un Presupuesto Gratis Hoy"
              : "Get a Free Quote Today"}
          </h3>
          <p className="text-white/70 mb-8">
            {isSpanish
              ? "Le llamaremos en 24 horas"
              : "We'll call you back within 24 hours"}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all mb-10"
            asChild
          >
            <Link to={getRoute("/contact", "/es/contacto")}>
              {isSpanish ? "Solicitar Llamada" : "Request Callback"}
            </Link>
          </Button>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <badge.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">{badge.label}</p>
                <p className="text-white/50 text-xs">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

GetQuoteCTA.displayName = "GetQuoteCTA";

export default GetQuoteCTA;
