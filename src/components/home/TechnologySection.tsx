import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const getTechnologies = (isSpanish: boolean) => [
  {
    name: "GASENSE",
    subtitle: isSpanish ? "Detección con Gas Trazador" : "Tracer Gas Detection",
    icon: Atom,
    description: isSpanish
      ? "Presurizamos las tuberías con una mezcla segura de nitrógeno/hidrógeno. El gas escapa por las fallas y sube a la superficie donde nuestros sensores lo detectan - perfecto para tuberías enterradas."
      : "We pressurise pipes with a safe nitrogen/hydrogen mix. Gas escapes through faults and rises to the surface where our sensors detect it - perfect for buried pipework.",
  },
  {
    name: isSpanish ? "Geófono" : "Geophone",
    subtitle: isSpanish ? "Escucha Acústica" : "Acoustic Listening",
    icon: AudioLines,
    description: isSpanish
      ? "Detecta el sonido distintivo del agua escapando de tuberías presurizadas. Identificamos el punto más ruidoso a lo largo del recorrido de la tubería para localizar la fuga."
      : "Detects the distinctive sound of water escaping from pressurised pipes. We identify the loudest point along the pipe route to locate the leak.",
  },
  {
    name: isSpanish ? "Imagen Térmica" : "Thermal Imaging",
    subtitle: isSpanish ? "Detección Infrarroja" : "Infrared Detection",
    icon: Thermometer,
    description: isSpanish
      ? "Nuestras cámaras térmicas detectan anomalías de temperatura causadas por agua fugándose - revelando humedad oculta detrás de paredes y bajo suelos."
      : "Our thermal cameras detect temperature anomalies caused by leaking water - revealing hidden moisture behind walls and under floors.",
  },
  {
    name: isSpanish ? "Micrófono de Tubería" : "Pipe Mic",
    subtitle: isSpanish ? "Micrófono Interno" : "Internal Microphone",
    icon: Mic,
    description: isSpanish
      ? "Insertado directamente en las tuberías, amplifica los sonidos de fuga y puede localizarse desde la superficie con precisión centimétrica - nuestro método más preciso."
      : "Inserted directly into pipework, this amplifies leak sounds and can be located from above ground to centimetre accuracy - our most precise method.",
  },
  {
    name: isSpanish ? "Inspección CCTV" : "CCTV Inspection",
    subtitle: isSpanish ? "Cámaras Internas" : "Internal Cameras",
    icon: Video,
    description: isSpanish
      ? "Cuatro sistemas de cámaras para diferentes tamaños de tuberías nos permiten identificar visualmente grietas, corrosión, intrusión de raíces y fallos en juntas con precisión."
      : "Four camera systems for different pipe sizes let us visually identify cracks, corrosion, root intrusion, and joint failures with pinpoint accuracy.",
  },
];

const TechnologySection = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useTranslation();
  const technologies = getTechnologies(isSpanish);
  
  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-canary-navy to-slate-900 relative overflow-hidden">
      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Nuestro Enfoque" : "Our Approach"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            {isSpanish ? "Detección Multi-Tecnología" : "Multi-Technology Detection"}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            {isSpanish ? (
              <>Ningún método es 100% preciso. Por eso confirmamos cada fuga usando{" "}
              <span className="text-primary font-semibold">al menos dos tecnologías independientes</span>,
              ofreciendo precisión centimétrica y manteniendo los costes de reparación al mínimo.</>
            ) : (
              <>No single method is 100% accurate. That's why we confirm every leak using{" "}
              <span className="text-primary font-semibold">at least two independent technologies</span>,
              delivering centimetre accuracy and keeping repair costs to an absolute minimum.</>
            )}
          </p>
        </motion.div>

        {/* Equipment value badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-primary/20 border border-primary/30 rounded-full px-6 py-3 inline-flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">
              {isSpanish ? "Más de" : "Over"} <span className="text-primary font-bold">€80,000</span> {isSpanish ? "en equipos especializados" : "of specialist equipment"}
            </span>
          </div>
        </motion.div>

        {/* Technology cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-105">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-1">
                {tech.name}
              </h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wide mb-3">
                {tech.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="secondary" asChild>
            <Link to={isSpanish ? "/es/tecnologia" : "/technology"}>
              {isSpanish ? "Más Sobre Nuestra Tecnología" : "Learn More About Our Technology"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

TechnologySection.displayName = "TechnologySection";

export default TechnologySection;
