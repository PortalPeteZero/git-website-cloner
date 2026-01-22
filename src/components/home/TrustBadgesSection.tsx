import { motion } from "framer-motion";
import { Shield, Award, Clock, MapPin, FileCheck, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustBadgesSection = () => {
  const { isSpanish } = useLanguage();

  const stats = [
    { value: 1200, suffix: "+", label: isSpanish ? "Fugas Encontradas" : "Leaks Found", icon: Wrench },
    { value: 40, suffix: "+", label: isSpanish ? "Años de Experiencia Combinada" : "Years Combined Experience", icon: Award },
    { value: 99, suffix: "%", label: isSpanish ? "Tasa de Éxito" : "Success Rate", icon: Shield },
    { value: 24, suffix: "/7", label: isSpanish ? "Servicio de Emergencia" : "Emergency Service", icon: Clock },
  ];

  const badges = [
    { 
      label: isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee", 
      icon: Shield, 
      description: isSpanish ? "Resultados garantizados" : "Risk-free guarantee" 
    },
    { 
      label: isSpanish ? "€80.000+ en Equipos" : "€80,000+ Equipment", 
      icon: Award, 
      description: isSpanish ? "Última tecnología" : "Latest technology" 
    },
    { 
      label: isSpanish ? "Toda Lanzarote" : "All Lanzarote", 
      icon: MapPin, 
      description: isSpanish ? "Cobertura en toda la isla" : "Island-wide coverage" 
    },
    { 
      label: isSpanish ? "Informes para Seguros" : "Insurance Reports", 
      icon: FileCheck, 
      description: isSpanish ? "Incluidos gratis" : "Included free" 
    },
  ];

  const formatNumber = (n: number) => {
    // Use Spanish format with dots for Spanish, commas for English
    return isSpanish 
      ? new Intl.NumberFormat("es-ES").format(n)
      : new Intl.NumberFormat("en-GB").format(n);
  };

  const StatValue = ({ value, suffix = "" }: { value: number; suffix?: string }) => (
    <span className="tabular-nums">
      {formatNumber(value)}
      {suffix}
    </span>
  );

  return (
    <section className="relative py-10 md:py-12 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Statistics Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-1">
                <StatValue value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -2 }}
              className="group bg-card border-2 border-border hover:border-primary/30 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 mb-3 transition-all duration-300">
                <badge.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                {badge.label}
              </h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
