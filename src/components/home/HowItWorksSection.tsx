import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Search, FileText, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorksSection = () => {
  const { isSpanish } = useLanguage();

  const steps = isSpanish ? [
    {
      number: 1,
      title: "Contáctenos",
      description: "Llame o rellene nuestro formulario de contacto para describir su problema de fuga.",
      icon: Phone,
    },
    {
      number: 2,
      title: "Evaluación",
      description: "Discutiremos su situación y acordaremos una hora conveniente para visitarle.",
      icon: ClipboardCheck,
    },
    {
      number: 3,
      title: "Detección",
      description: "Nuestros expertos usan tecnología avanzada para localizar la fuga con precisión.",
      icon: Search,
    },
    {
      number: 4,
      title: "Informe",
      description: "Recibirá un informe detallado con hallazgos y recomendaciones.",
      icon: FileText,
    },
    {
      number: 5,
      title: "Reparación",
      description: "Podemos reparar la fuga o proporcionar orientación para su contratista elegido.",
      icon: Wrench,
    },
  ] : [
    {
      number: 1,
      title: "Contact Us",
      description: "Call or fill out our contact form to describe your leak problem.",
      icon: Phone,
    },
    {
      number: 2,
      title: "Assessment",
      description: "We'll discuss your situation and arrange a convenient time to visit.",
      icon: ClipboardCheck,
    },
    {
      number: 3,
      title: "Detection",
      description: "Our experts use advanced technology to locate the leak precisely.",
      icon: Search,
    },
    {
      number: 4,
      title: "Report",
      description: "You receive a detailed report with findings and recommendations.",
      icon: FileText,
    },
    {
      number: 5,
      title: "Repair",
      description: "We can repair the leak or provide guidance for your chosen contractor.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted to-background overflow-hidden section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Nuestro Proceso" : "Our Process"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            {isSpanish ? "Cómo Funciona" : "How It Works"}
          </h2>
          <p className="text-muted-foreground">
            {isSpanish 
              ? "Desde su primera llamada hasta el problema resuelto - esto es lo que puede esperar cuando trabaja con Canary Detect."
              : "From your first call to problem solved - here's what to expect when you work with Canary Detect."}
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Main connection line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
          
          {/* Animated progress overlay */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-primary to-primary rounded-full origin-left"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative inline-block mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] p-1 shadow-xl shadow-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-300"
                  >
                    <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-primary mb-1">{step.number}</span>
                      <step.icon className="h-8 w-8 text-primary/70" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="bg-card rounded-xl p-5 border border-border shadow-sm group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[60px] -right-2 transform translate-x-1/2 hidden xl:block">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full" />

          <div className="space-y-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[hsl(25,93%,45%)] p-0.5 shadow-lg shadow-primary/30">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-xl p-5 border border-border shadow-sm group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
