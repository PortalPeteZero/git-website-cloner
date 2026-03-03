import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Single merged FAQPage schema for the homepage.
 * Combines questions from ProblemFAQSection + FAQSection into one JSON-LD block
 * to avoid duplicate FAQPage errors in Google Search Console.
 */
const HomepageFAQSchema = () => {
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

  const generalFaqs = isSpanish ? [
    {
      question: "¿Cuál es su política 'Sin Encontrar, Sin Pagar'?",
      answer: "Si confirmamos que tiene una fuga de agua pero no podemos localizarla, no hay cargo por nuestro servicio de detección de fugas - esto nunca ha sucedido hasta ahora. Sin embargo, si encontramos que no tiene una fuga y su problema es causado por otra cosa, cobramos el 50% del coste de la inspección por un 'Estudio de Confirmación de Fuga' y proporcionamos un informe para su tranquilidad."
    },
    {
      question: "¿Qué precisión tiene su detección de fugas de agua en Lanzarote?",
      answer: "Utilizamos un enfoque multi-tecnología con más de €80.000 en equipos especializados de detección de fugas para confirmar cada ubicación de fuga usando al menos dos tecnologías independientes. Esto proporciona precisión centimétrica en el 95% de los casos, localizando fugas de agua a menos de 30cm² de su posición - manteniendo los costes de reparación y las molestias al mínimo absoluto."
    },
    {
      question: "¿Qué áreas de Lanzarote cubren para detección de fugas?",
      answer: "Cubrimos toda la isla de Lanzarote para detección de fugas de agua, detección de fugas de piscinas y detección de tuberías subterráneas. Esto incluye Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise y todas las áreas circundantes. Nuestra base está en Playa Blanca."
    },
    {
      question: "¿Ofrecen reparación de fugas además de detección?",
      answer: "Sí, ofrecemos servicios completos de reparación de fugas en Lanzarote para reparación de fugas de tuberías de agua, reparación de fugas de piscinas y reparación de fugas subterráneas. Sin embargo, también es libre de usar su propio contratista para la reparación - no está obligado a usar nuestro equipo de reparación. Proporcionamos informes detallados para guiar cualquier trabajo de reparación."
    },
    {
      question: "¿Necesitarán romper paredes o suelos para encontrar mi fuga de agua?",
      answer: "Nuestros métodos de detección de fugas de agua ocultas son no invasivos. Utilizamos sensores acústicos, imágenes térmicas, gas trazador, cámaras CCTV y otra tecnología avanzada para localizar fugas sin dañar su propiedad. En casos raros, puede ser necesario un acceso mínimo, pero esto se discute y acuerda previamente."
    },
    {
      question: "¿Qué tecnología de detección de fugas utilizan?",
      answer: "Llevamos los últimos equipos de detección de fugas incluyendo: detección de gas trazador GASENSE, geófonos acústicos para detección de fugas de agua subterráneas, cámaras de imagen térmica infrarroja para detección de fugas de agua ocultas, micrófonos de tubería con precisión centimétrica, y múltiples sistemas de cámaras CCTV para tuberías de todos los tamaños."
    },
    {
      question: "¿Proporcionan informes de detección de fugas para reclamaciones de seguros?",
      answer: "Sí, cada inspección de detección de fugas incluye un informe profesional detallado que puede usarse para su compañía de seguros. Esto documenta nuestros hallazgos, métodos utilizados y recomendaciones para la reparación de fugas."
    },
    {
      question: "¿Cuánto cuesta la detección de fugas en Lanzarote?",
      answer: "Operamos con tarifas fijas con precios transparentes de detección de fugas en Lanzarote. Cotizamos un precio fijo por adelantado y lo mantenemos, independientemente de cuánto tiempo tome la inspección. Contáctenos para un presupuesto gratuito basado en sus requisitos específicos."
    },
    {
      question: "Mi contador de agua está corriendo - ¿tengo una fuga?",
      answer: "Un contador de agua que corre constantemente a menudo indica una fuga de agua oculta. Nuestra prueba de confirmación de fugas GRATUITA puede determinar si tiene una fuga antes de comprometerse con una inspección completa. Evaluaremos su sistema de agua, comprobaremos lo básico y proporcionaremos un informe profesional sin coste."
    }
  ] : [
    {
      question: "What is your 'No Find, No Fee' leak detection policy?",
      answer: "If we confirm you have a water leak but cannot locate it, there is no fee for our leak detection service - this has never happened so far! However, if we find that you don't have a leak and your issue is caused by something else, we charge 50% of the survey cost for a 'Leak Confirmation Survey' and provide a report for your peace of mind."
    },
    {
      question: "How accurate is your water leak detection in Lanzarote?",
      answer: "We use a multi-technology approach with over €80,000 worth of specialist leak detection equipment to confirm every leak location using at least two independent technologies. This delivers centimetre accuracy in 95% of cases, locating water leaks to within 30cm² of their position - keeping repair costs and disruption to an absolute minimum."
    },
    {
      question: "What areas of Lanzarote do you cover for leak detection?",
      answer: "We cover the entire island of Lanzarote for water leak detection, pool leak detection and underground pipe detection. This includes Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise, and all surrounding areas. We're based in Playa Blanca."
    },
    {
      question: "Do you offer leak repair as well as leak detection?",
      answer: "Yes, we offer comprehensive leak repair services in Lanzarote for water pipe leak repair, pool pipe leak repair and underground leak repair. However, you're also free to use your own contractor for the repair - you're not obligated to use our repair team. We provide detailed reports to guide any repair work."
    },
    {
      question: "Will you need to break walls or floors to find my water leak?",
      answer: "Our hidden water leak detection methods are non-invasive. We use acoustic sensors, thermal imaging, tracer gas, CCTV cameras, and other advanced technology to locate leaks without damaging your property. In rare cases, minimal access may be needed, but this is discussed and agreed beforehand."
    },
    {
      question: "What leak detection technology do you use?",
      answer: "We carry the latest leak detection equipment including: GASENSE tracer gas detection, acoustic geophones for underground water leak detection, infrared thermal imaging cameras for hidden water leak detection, pipe microphones with centimetre accuracy, and multiple CCTV camera systems for pipes of all sizes. Learn more about our technology on our dedicated technology page."
    },
    {
      question: "Do you provide leak detection reports for insurance claims?",
      answer: "Yes, every leak detection survey includes a detailed professional report that can be used for your insurance company. This documents our findings, methods used, and recommendations for leak repair."
    },
    {
      question: "How much does leak detection in Lanzarote cost?",
      answer: "We operate on a fixed-fee basis with transparent leak detection Lanzarote prices. We quote a fixed price upfront and stick to it, regardless of how long the survey takes. Contact us for a free quote based on your specific requirements."
    },
    {
      question: "My water meter is running - do I have a leak?",
      answer: "A constantly running water meter often indicates a hidden water leak. Our FREE leak confirmation test can determine if you have a leak before you commit to a full survey. We'll assess your water system, check the basics, and provide a professional report at no cost."
    }
  ];

  const allFaqs = [...problemFaqs, ...generalFaqs];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script id="schema-homepage-faq" type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default HomepageFAQSchema;
