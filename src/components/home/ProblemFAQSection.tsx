import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/seo/FAQSchema";
import { HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ProblemFAQSection = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();

  const problemFaqs = isSpanish ? [
    {
      question: "¿Por qué mi piscina pierde agua?",
      answer: "Si su piscina pierde más de 6mm de agua por día (más allá de la evaporación normal), probablemente tiene una fuga. Las causas comunes incluyen grietas en el vaso de la piscina, conexiones de tuberías dañadas o accesorios defectuosos. Nuestro servicio de detección de fugas de piscinas en Lanzarote puede localizar la ubicación exacta usando pruebas de presión y equipos especializados."
    },
    {
      question: "Mi contador de agua sigue corriendo con todos los grifos cerrados - ¿tengo una fuga?",
      answer: "Sí, si su contador de agua continúa funcionando cuando no se está usando agua, esto indica una fuga de agua oculta en algún lugar de su propiedad. Esto podría ser en tuberías subterráneas, bajo losas del suelo o detrás de paredes. Nuestra detección de fugas acústica y de imágenes térmicas puede encontrar estas fugas ocultas sin romper paredes o suelos."
    },
    {
      question: "¿Cómo encuentran fugas de agua subterráneas?",
      answer: "Utilizamos múltiples tecnologías para encontrar fugas de agua subterráneas: detección de gas trazador (GASENSE), dispositivos de escucha acústica (geófonos) e imágenes térmicas. Combinando al menos dos métodos, logramos precisión centimétrica en la localización de fugas subterráneas, minimizando los costes de excavación y reparación."
    },
    {
      question: "¿Pueden detectar fugas en tuberías de piscinas?",
      answer: "Sí, nos especializamos en detección de fugas de tuberías de piscinas. Utilizamos pruebas de presión para aislar fugas en la fontanería de la piscina, luego localizamos la ubicación exacta usando equipos acústicos y gas trazador. Esto funciona para tuberías de piscina subterráneas, líneas de retorno y líneas de succión."
    },
    {
      question: "¿Reparan fugas o solo las detectan?",
      answer: "Ofrecemos tanto servicios de detección de fugas como de reparación de fugas en toda Lanzarote. Una vez que localizamos su fuga, podemos repararla nosotros mismos o proporcionar orientación detallada para el contratista que elija. Nuestros informes incluyen la ubicación exacta y los métodos de reparación recomendados."
    },
    {
      question: "¿Cuánto cuesta la detección de fugas en Lanzarote?",
      answer: "Ofrecemos inspecciones de detección de fugas a tarifa fija sin costes ocultos. Los precios varían según el tamaño de la propiedad y la complejidad. Contáctenos para un presupuesto gratuito. Recuerde nuestra garantía Sin Encontrar, Sin Pagar - si confirmamos que tiene una fuga pero no podemos localizarla, no hay cargo."
    }
  ] : [
    {
      question: "Why is my pool losing water?",
      answer: "If your swimming pool is losing more than 6mm of water per day (beyond normal evaporation), you likely have a leak. Common causes include cracks in the pool shell, damaged pipe connections, or faulty fittings. Our swimming pool leak detection service in Lanzarote can pinpoint the exact location using pressure testing and specialist equipment."
    },
    {
      question: "My water meter is running when all taps are off - do I have a leak?",
      answer: "Yes, if your water meter continues to run when no water is being used, this indicates a hidden water leak somewhere in your property. This could be underground pipes, under floor slabs, or behind walls. Our acoustic and thermal imaging leak detection can find these hidden leaks without breaking walls or floors."
    },
    {
      question: "How do you find water leaks underground?",
      answer: "We use multiple technologies to find underground water leaks: tracer gas detection (GASENSE), acoustic listening devices (geophones), and thermal imaging. By combining at least two methods, we achieve centimetre accuracy in locating underground leaks, minimizing excavation and repair costs."
    },
    {
      question: "Can you detect leaks in swimming pool pipes?",
      answer: "Yes, we specialize in swimming pool pipe leak detection. We use pressure testing to isolate leaks in pool plumbing, then pinpoint the exact location using acoustic equipment and tracer gas. This works for underground pool pipes, return lines, and suction lines."
    },
    {
      question: "Do you repair leaks or just detect them?",
      answer: "We offer both leak detection and leak repair services across Lanzarote. Once we locate your leak, we can either repair it ourselves or provide detailed guidance for your chosen contractor. Our reports include exact location and recommended repair methods."
    },
    {
      question: "How much does leak detection cost in Lanzarote?",
      answer: "We offer fixed-fee leak detection surveys with no hidden costs. Prices vary depending on property size and complexity. Contact us for a free quote. Remember our No Find, No Fee guarantee - if we confirm you have a leak but cannot locate it, there's no charge."
    }
  ];

  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted/50 section-pattern section-divider">
      <FAQSchema faqs={problemFaqs} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Title and CTA */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <HelpCircle className="h-5 w-5" />
                <span>{isSpanish ? "Problemas Comunes" : "Common Problems"}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {isSpanish ? "Problemas de Fugas que Resolvemos" : "Leak Problems We Solve"}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {isSpanish 
                  ? "¿No está seguro si tiene una fuga? Estos son los signos más comunes que nuestros clientes notan antes de llamarnos. Si alguno de estos le suena familiar, podemos ayudar."
                  : "Not sure if you have a leak? These are the most common signs our customers notice before calling us. If any of these sound familiar, we can help."}
              </p>
              <Button asChild size="lg" className="group">
                <Link to={getRoute("/contact", "/es/contacto")}>
                  {isSpanish ? "Obtener Ayuda Experta" : "Get Expert Help"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {problemFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`problem-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 max-w-none">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
});

ProblemFAQSection.displayName = "ProblemFAQSection";

export default ProblemFAQSection;
