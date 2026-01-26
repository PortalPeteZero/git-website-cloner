import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FAQSchema from "@/components/seo/FAQSchema";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = forwardRef<HTMLElement>((_, ref) => {
  const { isSpanish } = useLanguage();

  const faqs = isSpanish ? [
    {
      question: "¿Cuál es su política 'Sin Encontrar, Sin Pagar'?",
      answer:
        "Si confirmamos que tiene una fuga de agua pero no podemos localizarla, no hay cargo por nuestro servicio de detección de fugas - esto nunca ha sucedido hasta ahora. Sin embargo, si encontramos que no tiene una fuga y su problema es causado por otra cosa, cobramos el 50% del coste de la inspección por un 'Estudio de Confirmación de Fuga' y proporcionamos un informe para su tranquilidad.",
    },
    {
      question: "¿Qué precisión tiene su detección de fugas de agua en Lanzarote?",
      answer:
        "Utilizamos un enfoque multi-tecnología con más de €80.000 en equipos especializados de detección de fugas para confirmar cada ubicación de fuga usando al menos dos tecnologías independientes. Esto proporciona precisión centimétrica en el 95% de los casos, localizando fugas de agua a menos de 30cm² de su posición - manteniendo los costes de reparación y las molestias al mínimo absoluto.",
    },
    {
      question: "¿Qué áreas de Lanzarote cubren para detección de fugas?",
      answer:
        "Cubrimos toda la isla de Lanzarote para detección de fugas de agua, detección de fugas de piscinas y detección de tuberías subterráneas. Esto incluye Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise y todas las áreas circundantes. Nuestra base está en Playa Blanca.",
    },
    {
      question: "¿Ofrecen reparación de fugas además de detección?",
      answer:
        "Sí, ofrecemos servicios completos de reparación de fugas en Lanzarote para reparación de fugas de tuberías de agua, reparación de fugas de piscinas y reparación de fugas subterráneas. Sin embargo, también es libre de usar su propio contratista para la reparación - no está obligado a usar nuestro equipo de reparación. Proporcionamos informes detallados para guiar cualquier trabajo de reparación.",
    },
    {
      question: "¿Necesitarán romper paredes o suelos para encontrar mi fuga de agua?",
      answer:
        "Nuestros métodos de detección de fugas de agua ocultas son no invasivos. Utilizamos sensores acústicos, imágenes térmicas, gas trazador, cámaras CCTV y otra tecnología avanzada para localizar fugas sin dañar su propiedad. En casos raros, puede ser necesario un acceso mínimo, pero esto se discute y acuerda previamente.",
    },
    {
      question: "¿Qué tecnología de detección de fugas utilizan?",
      answer:
        "Llevamos los últimos equipos de detección de fugas incluyendo: detección de gas trazador GASENSE, geófonos acústicos para detección de fugas de agua subterráneas, cámaras de imagen térmica infrarroja para detección de fugas de agua ocultas, micrófonos de tubería con precisión centimétrica, y múltiples sistemas de cámaras CCTV para tuberías de todos los tamaños.",
    },
    {
      question: "¿Proporcionan informes de detección de fugas para reclamaciones de seguros?",
      answer:
        "Sí, cada inspección de detección de fugas incluye un informe profesional detallado que puede usarse para su compañía de seguros. Esto documenta nuestros hallazgos, métodos utilizados y recomendaciones para la reparación de fugas.",
    },
    {
      question: "¿Cuánto cuesta la detección de fugas en Lanzarote?",
      answer:
        "Operamos con tarifas fijas con precios transparentes de detección de fugas en Lanzarote. Cotizamos un precio fijo por adelantado y lo mantenemos, independientemente de cuánto tiempo tome la inspección. Contáctenos para un presupuesto gratuito basado en sus requisitos específicos.",
    },
    {
      question: "Mi contador de agua está corriendo - ¿tengo una fuga?",
      answer:
        "Un contador de agua que corre constantemente a menudo indica una fuga de agua oculta. Nuestra prueba de confirmación de fugas GRATUITA puede determinar si tiene una fuga antes de comprometerse con una inspección completa. Evaluaremos su sistema de agua, comprobaremos lo básico y proporcionaremos un informe profesional sin coste.",
    },
  ] : [
    {
      question: "What is your 'No Find, No Fee' leak detection policy?",
      answer:
        "If we confirm you have a water leak but cannot locate it, there is no fee for our leak detection service - this has never happened so far! However, if we find that you don't have a leak and your issue is caused by something else, we charge 50% of the survey cost for a 'Leak Confirmation Survey' and provide a report for your peace of mind.",
    },
    {
      question: "How accurate is your water leak detection in Lanzarote?",
      answer:
        "We use a multi-technology approach with over €80,000 worth of specialist leak detection equipment to confirm every leak location using at least two independent technologies. This delivers centimetre accuracy in 95% of cases, locating water leaks to within 30cm² of their position - keeping repair costs and disruption to an absolute minimum.",
    },
    {
      question: "What areas of Lanzarote do you cover for leak detection?",
      answer:
        "We cover the entire island of Lanzarote for water leak detection, pool leak detection and underground pipe detection. This includes Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise, and all surrounding areas. We're based in Playa Blanca.",
    },
    {
      question: "Do you offer leak repair as well as leak detection?",
      answer:
        "Yes, we offer comprehensive leak repair services in Lanzarote for water pipe leak repair, pool pipe leak repair and underground leak repair. However, you're also free to use your own contractor for the repair - you're not obligated to use our repair team. We provide detailed reports to guide any repair work.",
    },
    {
      question: "Will you need to break walls or floors to find my water leak?",
      answer:
        "Our hidden water leak detection methods are non-invasive. We use acoustic sensors, thermal imaging, tracer gas, CCTV cameras, and other advanced technology to locate leaks without damaging your property. In rare cases, minimal access may be needed, but this is discussed and agreed beforehand.",
    },
    {
      question: "What leak detection technology do you use?",
      answer:
        "We carry the latest leak detection equipment including: GASENSE tracer gas detection, acoustic geophones for underground water leak detection, infrared thermal imaging cameras for hidden water leak detection, pipe microphones with centimetre accuracy, and multiple CCTV camera systems for pipes of all sizes. Learn more about our technology on our dedicated technology page.",
    },
    {
      question: "Do you provide leak detection reports for insurance claims?",
      answer:
        "Yes, every leak detection survey includes a detailed professional report that can be used for your insurance company. This documents our findings, methods used, and recommendations for leak repair.",
    },
    {
      question: "How much does leak detection in Lanzarote cost?",
      answer:
        "We operate on a fixed-fee basis with transparent leak detection Lanzarote prices. We quote a fixed price upfront and stick to it, regardless of how long the survey takes. Contact us for a free quote based on your specific requirements.",
    },
    {
      question: "My water meter is running - do I have a leak?",
      answer:
        "A constantly running water meter often indicates a hidden water leak. Our FREE leak confirmation test can determine if you have a leak before you commit to a full survey. We'll assess your water system, check the basics, and provide a professional report at no cost.",
    },
  ];

  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background section-divider">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              {isSpanish ? "Preguntas Frecuentes" : "FAQ"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
              {isSpanish 
                ? "Preguntas Frecuentes sobre Detección de Fugas en Lanzarote"
                : "Leak Detection Lanzarote FAQ"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isSpanish 
                ? "¿Tiene preguntas sobre nuestros servicios de detección de fugas? Aquí tiene respuestas a las preguntas más comunes que recibimos."
                : "Got questions about our leak detection services? Here are answers to the most common questions we receive."}
            </p>
            <p className="text-muted-foreground mb-8">
              {isSpanish 
                ? "¿No encuentra lo que busca? Contáctenos y estaremos encantados de ayudar."
                : "Can't find what you're looking for? Get in touch and we'll be happy to help."}
            </p>
            <Button asChild>
              <Link to={getRoute("/contact", "/es/contacto")}>
                {isSpanish ? "Contáctenos" : "Contact Us"}
              </Link>
            </Button>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
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

FAQSection.displayName = "FAQSection";

export default FAQSection;
