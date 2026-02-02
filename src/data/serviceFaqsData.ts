// Service-specific FAQ data for SEO and user engagement
// These FAQs are displayed on individual service pages

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceFaqData {
  en: ServiceFaq[];
  es: ServiceFaq[];
}

export const serviceFaqs: Record<string, ServiceFaqData> = {
  "water-leak-detection": {
    en: [
      {
        question: "How do I know if I have a hidden water leak?",
        answer: "Common signs include: water meter running when all taps are off, unexplained high water bills, damp patches on walls or floors, musty smells, or the sound of running water when nothing is on. If you notice any of these, contact us for a FREE leak confirmation test."
      },
      {
        question: "Will you need to break walls to find my leak?",
        answer: "No—our detection methods are non-invasive. We use thermal imaging, acoustic sensors, and tracer gas to locate leaks precisely without causing damage. Only if repair access is needed would any work be required on walls or floors."
      },
      {
        question: "How accurate is your water leak detection?",
        answer: "We achieve centimetre accuracy in 95% of cases. By using at least two independent technologies to confirm each leak location, we minimise repair costs and disruption to your property."
      },
      {
        question: "How long does a water leak detection survey take?",
        answer: "Most residential surveys take 2-4 hours depending on property size and complexity. We work efficiently but thoroughly to ensure we find all leaks, not just the obvious ones."
      },
    ],
    es: [
      {
        question: "¿Cómo sé si tengo una fuga de agua oculta?",
        answer: "Las señales más comunes incluyen: contador de agua girando con todos los grifos cerrados, facturas de agua inexplicablemente altas, manchas de humedad en paredes o suelos, olores a moho, o sonido de agua corriendo sin usar grifos. Si nota alguna de estas señales, contáctenos para una prueba de confirmación de fugas GRATIS."
      },
      {
        question: "¿Necesitarán romper paredes para encontrar mi fuga?",
        answer: "No—nuestros métodos de detección no son invasivos. Usamos imagen térmica, sensores acústicos y gas trazador para localizar fugas con precisión sin causar daños. Solo si se necesita acceso para la reparación se requeriría algún trabajo en paredes o suelos."
      },
      {
        question: "¿Qué precisión tiene su detección de fugas de agua?",
        answer: "Conseguimos precisión centimétrica en el 95% de los casos. Al usar al menos dos tecnologías independientes para confirmar cada ubicación de fuga, minimizamos los costes de reparación y las molestias a su propiedad."
      },
      {
        question: "¿Cuánto tiempo dura una inspección de detección de fugas?",
        answer: "La mayoría de las inspecciones residenciales duran 2-4 horas dependiendo del tamaño y complejidad de la propiedad. Trabajamos de forma eficiente pero minuciosa para asegurar que encontramos todas las fugas, no solo las obvias."
      },
    ]
  },
  "pool-leak-detection": {
    en: [
      {
        question: "How can I tell if my pool has a leak or just evaporation?",
        answer: "Do the bucket test: fill a bucket, mark the water level, place it on the pool step, and mark the pool level. After 24 hours, compare the levels. If the pool dropped more than the bucket, you likely have a leak. Contact us for professional confirmation."
      },
      {
        question: "Do you just confirm leaks or actually find where they are?",
        answer: "We pinpoint the exact location. Unlike some companies that only confirm 'you have a leak somewhere', we use pressure testing, acoustic detection, and CCTV inspection to locate precisely where the leak is—saving you money on unnecessary excavation."
      },
      {
        question: "Can you detect leaks while the pool is full?",
        answer: "Yes, most of our detection methods work with the pool full. For certain pipe tests, we may need to lower the water level slightly, but we'll discuss this before starting."
      },
      {
        question: "How much water loss indicates a pool leak?",
        answer: "Normal evaporation in Lanzarote's climate is about 5-10mm per day. If you're losing more than 25mm daily, or need to top up more than twice per week, you likely have a leak that needs investigation."
      },
    ],
    es: [
      {
        question: "¿Cómo puedo saber si mi piscina tiene una fuga o es solo evaporación?",
        answer: "Haga la prueba del cubo: llene un cubo, marque el nivel del agua, colóquelo en el escalón de la piscina, y marque el nivel de la piscina. Después de 24 horas, compare los niveles. Si la piscina bajó más que el cubo, probablemente tiene una fuga. Contáctenos para confirmación profesional."
      },
      {
        question: "¿Solo confirman las fugas o realmente encuentran dónde están?",
        answer: "Localizamos la ubicación exacta. A diferencia de algunas empresas que solo confirman 'tiene una fuga en algún lugar', usamos pruebas de presión, detección acústica e inspección CCTV para localizar exactamente dónde está la fuga—ahorrándole dinero en excavaciones innecesarias."
      },
      {
        question: "¿Pueden detectar fugas con la piscina llena?",
        answer: "Sí, la mayoría de nuestros métodos de detección funcionan con la piscina llena. Para ciertas pruebas de tuberías, puede que necesitemos bajar el nivel del agua ligeramente, pero lo discutiremos antes de empezar."
      },
      {
        question: "¿Cuánta pérdida de agua indica una fuga en la piscina?",
        answer: "La evaporación normal en el clima de Lanzarote es de unos 5-10mm por día. Si está perdiendo más de 25mm diarios, o necesita rellenar más de dos veces por semana, probablemente tiene una fuga que necesita investigación."
      },
    ]
  },
  "drain-detection": {
    en: [
      {
        question: "What can CCTV drain inspection detect?",
        answer: "Our cameras detect blockages, root ingress, cracks, joint failures, collapsed sections, scale buildup, and corrosion. We can also trace the exact route and depth of your drainage system."
      },
      {
        question: "Is CCTV inspection included with unblocking?",
        answer: "Yes—we always include before and after camera inspection with our unblocking service. This ensures we identify the cause, confirm it's completely cleared, and check for any underlying damage."
      },
      {
        question: "How often should drains be inspected?",
        answer: "For residential properties, we recommend inspection every 3-5 years, or immediately if you notice slow drainage, gurgling sounds, or bad smells. Commercial properties with heavy use should consider annual inspections."
      },
    ],
    es: [
      {
        question: "¿Qué puede detectar una inspección CCTV de desagües?",
        answer: "Nuestras cámaras detectan obstrucciones, intrusión de raíces, grietas, fallos en juntas, secciones colapsadas, acumulación de cal y corrosión. También podemos trazar la ruta exacta y profundidad de su sistema de drenaje."
      },
      {
        question: "¿Se incluye la inspección CCTV con el desatasco?",
        answer: "Sí—siempre incluimos inspección con cámara antes y después con nuestro servicio de desatasco. Esto garantiza que identificamos la causa, confirmamos que está completamente eliminada, y verificamos cualquier daño subyacente."
      },
      {
        question: "¿Con qué frecuencia deben inspeccionarse los desagües?",
        answer: "Para propiedades residenciales, recomendamos inspección cada 3-5 años, o inmediatamente si nota drenaje lento, sonidos de gorgoteo u olores desagradables. Las propiedades comerciales con uso intensivo deberían considerar inspecciones anuales."
      },
    ]
  },
  "underground-detection": {
    en: [
      {
        question: "Can you detect non-metallic pipes underground?",
        answer: "Yes—our ground-penetrating radar (GPR) can detect both metallic and non-metallic pipes, including plastic and concrete. Electromagnetic locators are used specifically for metallic pipes and cables."
      },
      {
        question: "How deep can you detect underground pipes?",
        answer: "Our equipment can typically detect pipes and utilities up to 3 metres deep, though this varies depending on soil conditions and pipe material. Volcanic terrain in Lanzarote can be challenging but our technology handles it well."
      },
      {
        question: "Do I need underground detection before building work?",
        answer: "Absolutely. Hitting an unknown pipe or cable during excavation can be dangerous and expensive. We strongly recommend a utility survey before any digging, whether for construction, landscaping, or pool installation."
      },
    ],
    es: [
      {
        question: "¿Pueden detectar tuberías no metálicas bajo tierra?",
        answer: "Sí—nuestro radar de penetración terrestre (GPR) puede detectar tuberías tanto metálicas como no metálicas, incluyendo plástico y hormigón. Los localizadores electromagnéticos se usan específicamente para tuberías y cables metálicos."
      },
      {
        question: "¿A qué profundidad pueden detectar tuberías subterráneas?",
        answer: "Nuestro equipo típicamente puede detectar tuberías y servicios hasta 3 metros de profundidad, aunque esto varía según las condiciones del suelo y el material de la tubería. El terreno volcánico de Lanzarote puede ser desafiante pero nuestra tecnología lo maneja bien."
      },
      {
        question: "¿Necesito detección subterránea antes de obras de construcción?",
        answer: "Absolutamente. Golpear una tubería o cable desconocido durante la excavación puede ser peligroso y costoso. Recomendamos encarecidamente un estudio de servicios antes de cualquier excavación, ya sea para construcción, jardinería o instalación de piscinas."
      },
    ]
  },
  "leak-repair": {
    en: [
      {
        question: "Do I have to use your repair service after detection?",
        answer: "No—you're free to use your own contractor. We provide detailed reports and can brief any tradesperson on what we found. However, many customers prefer our complete service for single-point accountability."
      },
      {
        question: "What types of leak repairs do you handle?",
        answer: "We repair water pipe leaks, pool pipe leaks, underground leaks, drain repairs, and can handle everything from simple joint repairs to full pipe replacements. All work comes with our quality guarantee."
      },
      {
        question: "Do you offer emergency leak repairs?",
        answer: "Yes—we provide emergency response across Lanzarote for urgent situations like burst pipes or significant water damage. Call us and we'll assess whether same-day attendance is possible."
      },
    ],
    es: [
      {
        question: "¿Tengo que usar su servicio de reparación después de la detección?",
        answer: "No—es libre de usar su propio contratista. Proporcionamos informes detallados y podemos informar a cualquier profesional sobre lo que encontramos. Sin embargo, muchos clientes prefieren nuestro servicio completo para tener una única responsabilidad."
      },
      {
        question: "¿Qué tipos de reparaciones de fugas manejan?",
        answer: "Reparamos fugas de tuberías de agua, fugas de tuberías de piscina, fugas subterráneas, reparaciones de desagües, y podemos manejar todo desde simples reparaciones de juntas hasta reemplazos completos de tuberías. Todo el trabajo viene con nuestra garantía de calidad."
      },
      {
        question: "¿Ofrecen reparaciones de fugas de emergencia?",
        answer: "Sí—proporcionamos respuesta de emergencia en todo Lanzarote para situaciones urgentes como tuberías rotas o daños significativos por agua. Llámenos y evaluaremos si es posible la asistencia el mismo día."
      },
    ]
  },
  "damp-moisture-mapping": {
    en: [
      {
        question: "What's the difference between damp mapping and leak detection?",
        answer: "Leak detection finds active water leaks in pipes. Damp mapping identifies moisture in walls, floors and ceilings regardless of source—it could be from leaks, condensation, rising damp, or roof damage. It's ideal before decorating or renovation."
      },
      {
        question: "Is the damp survey really free?",
        answer: "Yes—our initial home visit and assessment is completely FREE. We'll evaluate your property, identify moisture issues, and provide a professional report at no cost. There's no obligation to proceed with any further services."
      },
      {
        question: "Can thermal imaging see through walls?",
        answer: "Thermal cameras detect temperature differences on surfaces, revealing hidden moisture patterns. They can 'see' damp areas behind plaster, under tiles, and in areas not visible to the naked eye—without any drilling or damage."
      },
    ],
    es: [
      {
        question: "¿Cuál es la diferencia entre mapeo de humedad y detección de fugas?",
        answer: "La detección de fugas encuentra fugas activas de agua en tuberías. El mapeo de humedad identifica humedad en paredes, suelos y techos independientemente de la fuente—puede ser por fugas, condensación, humedad por capilaridad, o daños en el tejado. Es ideal antes de decorar o reformar."
      },
      {
        question: "¿La inspección de humedad es realmente gratis?",
        answer: "Sí—nuestra visita inicial a domicilio y evaluación es completamente GRATIS. Evaluaremos su propiedad, identificaremos problemas de humedad, y proporcionaremos un informe profesional sin coste. No hay obligación de continuar con ningún servicio adicional."
      },
      {
        question: "¿Puede la imagen térmica ver a través de las paredes?",
        answer: "Las cámaras térmicas detectan diferencias de temperatura en superficies, revelando patrones de humedad ocultos. Pueden 'ver' áreas húmedas detrás del yeso, bajo baldosas, y en áreas no visibles a simple vista—sin ningún taladro ni daño."
      },
    ]
  }
};

// Helper function to get FAQs for a service
export const getServiceFaqs = (serviceSlug: string, isSpanish: boolean): ServiceFaq[] => {
  const normalizedSlug = serviceSlug.replace(/^deteccion-|^reparacion-|^desatasco-|^mapeo-/, (match) => {
    const map: Record<string, string> = {
      'deteccion-fugas-agua': 'water-leak-detection',
      'deteccion-fugas-piscinas': 'pool-leak-detection', 
      'deteccion-desagues': 'drain-detection',
      'deteccion-subterranea': 'underground-detection',
      'reparacion-fugas': 'leak-repair',
      'mapeo-humedad': 'damp-moisture-mapping',
    };
    return '';
  });

  // Map Spanish slugs to English
  const slugMap: Record<string, string> = {
    'deteccion-fugas-agua': 'water-leak-detection',
    'deteccion-fugas-piscinas': 'pool-leak-detection',
    'deteccion-desagues': 'drain-detection',
    'deteccion-subterranea': 'underground-detection',
    'reparacion-fugas': 'leak-repair',
    'mapeo-humedad': 'damp-moisture-mapping',
  };

  const englishSlug = slugMap[serviceSlug] || serviceSlug;
  const faqData = serviceFaqs[englishSlug];
  
  if (!faqData) return [];
  
  return isSpanish ? faqData.es : faqData.en;
};
