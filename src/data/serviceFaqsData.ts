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
        question: "What are the signs of a hidden water leak I can't see?",
        answer: "The most reliable sign is your water meter spinning when all taps and appliances are off. Other indicators include: unexplained high water bills, damp or warm patches on floors, musty smells with no visible source, paint bubbling or wallpaper peeling, or hearing running water when nothing is in use."
      },
      {
        question: "How does thermal imaging find hidden leaks?",
        answer: "Thermal cameras detect temperature differences invisible to the naked eye. When water leaks behind walls or under floors, it creates cooler zones that show up clearly on our thermal images. This allows us to 'see' moisture patterns without any drilling or damage to your property."
      },
      {
        question: "What is tracer gas detection and how does it work?",
        answer: "We pressurise your pipes with a safe mixture of nitrogen and hydrogen gas (95%/5%). This gas is lighter than air and escapes through even tiny cracks, rising through any surface material. Our ultra-sensitive detectors then pinpoint exactly where the gas is escaping—marking the leak location."
      },
      {
        question: "What does 'No Find, No Fee' actually mean?",
        answer: "If we confirm you have an active leak but cannot locate its exact position, you pay nothing. It's that simple. This guarantee reflects our confidence in our €80,000+ worth of detection equipment and our experienced team."
      },
      {
        question: "How long does a hidden leak survey take?",
        answer: "Most residential surveys take 2-4 hours depending on property size and system complexity. We never rush—our systematic approach ensures we find all leaks, not just the obvious ones, and confirm each location with multiple technologies."
      },
    ],
    es: [
      {
        question: "¿Cuáles son las señales de una fuga de agua oculta?",
        answer: "La señal más fiable es ver el contador de agua girando cuando todos los grifos y electrodomésticos están cerrados. Otros indicadores incluyen: facturas de agua inexplicablemente altas, manchas húmedas o calientes en suelos, olores a moho sin fuente visible, pintura burbujeando o papel pintado despegándose, o escuchar agua corriendo cuando nada está en uso."
      },
      {
        question: "¿Cómo encuentra fugas ocultas la imagen térmica?",
        answer: "Las cámaras térmicas detectan diferencias de temperatura invisibles al ojo humano. Cuando el agua se fuga detrás de paredes o bajo suelos, crea zonas más frías que aparecen claramente en nuestras imágenes térmicas. Esto nos permite 'ver' patrones de humedad sin ningún taladro ni daño a su propiedad."
      },
      {
        question: "¿Qué es la detección con gas trazador y cómo funciona?",
        answer: "Presurizamos sus tuberías con una mezcla segura de nitrógeno e hidrógeno (95%/5%). Este gas es más ligero que el aire y escapa incluso por grietas diminutas, emergiendo a través de cualquier material de superficie. Nuestros detectores ultrasensibles localizan exactamente dónde está escapando el gas—marcando la ubicación de la fuga."
      },
      {
        question: "¿Qué significa realmente 'Sin Encontrar, Sin Pagar'?",
        answer: "Si confirmamos que tiene una fuga activa pero no podemos localizar su posición exacta, no paga nada. Así de simple. Esta garantía refleja nuestra confianza en nuestros más de €80.000 en equipos de detección y nuestro equipo experimentado."
      },
      {
        question: "¿Cuánto tiempo dura una inspección de fugas ocultas?",
        answer: "La mayoría de las inspecciones residenciales duran 2-4 horas dependiendo del tamaño de la propiedad y complejidad del sistema. Nunca nos precipitamos—nuestro enfoque sistemático garantiza que encontramos todas las fugas, no solo las obvias, y confirmamos cada ubicación con múltiples tecnologías."
      },
    ]
  },
  "water-pipe-leak-detection": {
    en: [
      {
        question: "How do I know which type of pipes I have in my property?",
        answer: "You can identify pipe materials at visible points (under sinks, water heater connections, meter entry). Copper is reddish-brown metal, PVC/CPVC is white or cream plastic, polyethylene is black flexible plastic (usually underground), and galvanised iron is grey metal that may show rust. We can map your entire system during our survey."
      },
      {
        question: "Why do copper pipes leak in Lanzarote?",
        answer: "Copper pipe failures in Lanzarote often result from: galvanic corrosion when copper meets dissimilar metals (brass fittings), pinhole corrosion from aggressive water chemistry, stress fatigue at elbows from thermal expansion, or poor original soldering. Our thermal imaging is excellent at finding copper leaks behind walls."
      },
      {
        question: "Can you detect leaks in underground pipes from the meter?",
        answer: "Yes—underground supply pipe leaks are our speciality. We use tracer gas injection, electromagnetic locators, and ground-penetrating radar to find leaks in buried pipes whether they're metal or plastic. These leaks often go unnoticed for years, causing significant water loss."
      },
      {
        question: "What is a pipe pressure test?",
        answer: "We isolate sections of your plumbing system and pressurise them to test for leaks. By monitoring pressure over time, we can detect even tiny leaks that wouldn't show obvious signs. This is particularly useful for finding multiple leaks or confirming a system is leak-free after repairs."
      },
      {
        question: "Do you repair the pipes you find leaking?",
        answer: "Yes, we offer complete leak repair services. After locating the leak, we can repair or replace the affected pipe section. However, you're never obligated to use our repair team—we provide detailed reports that any qualified plumber can use."
      },
    ],
    es: [
      {
        question: "¿Cómo sé qué tipo de tuberías tengo en mi propiedad?",
        answer: "Puede identificar los materiales de las tuberías en puntos visibles (bajo fregaderos, conexiones del calentador, entrada del contador). El cobre es metal marrón rojizo, el PVC/CPVC es plástico blanco o crema, el polietileno es plástico negro flexible (normalmente subterráneo), y el hierro galvanizado es metal gris que puede mostrar óxido. Podemos mapear todo su sistema durante nuestra inspección."
      },
      {
        question: "¿Por qué pierden las tuberías de cobre en Lanzarote?",
        answer: "Los fallos de tuberías de cobre en Lanzarote a menudo resultan de: corrosión galvánica cuando el cobre entra en contacto con metales diferentes (accesorios de latón), corrosión por picadura por química agresiva del agua, fatiga por estrés en codos por expansión térmica, o soldadura original deficiente. Nuestra imagen térmica es excelente para encontrar fugas de cobre detrás de paredes."
      },
      {
        question: "¿Pueden detectar fugas en tuberías subterráneas desde el contador?",
        answer: "Sí—las fugas en tuberías de suministro subterráneas son nuestra especialidad. Usamos inyección de gas trazador, localizadores electromagnéticos y radar de penetración para encontrar fugas en tuberías enterradas, sean de metal o plástico. Estas fugas a menudo pasan desapercibidas durante años, causando pérdidas significativas de agua."
      },
      {
        question: "¿Qué es una prueba de presión de tuberías?",
        answer: "Aislamos secciones de su sistema de fontanería y las presurizamos para detectar fugas. Monitorizando la presión a lo largo del tiempo, podemos detectar incluso fugas diminutas que no mostrarían señales obvias. Esto es particularmente útil para encontrar múltiples fugas o confirmar que un sistema está libre de fugas después de reparaciones."
      },
      {
        question: "¿Reparan las tuberías que encuentran con fugas?",
        answer: "Sí, ofrecemos servicios completos de reparación de fugas. Después de localizar la fuga, podemos reparar o reemplazar la sección de tubería afectada. Sin embargo, nunca está obligado a usar nuestro equipo de reparación—proporcionamos informes detallados que cualquier fontanero cualificado puede utilizar."
      },
    ]
  },
  "pool-leak-detection": {
    en: [
      {
        question: "How can I tell if my pool has a leak or just evaporation?",
        answer: "The Bucket Test is a reliable DIY method to determine if your pool is leaking or just evaporating water. To perform the bucket test, fill a 5-gallon bucket with pool water, place it on a pool step, and mark the water levels inside and outside the bucket. After 24 hours, compare the water loss in the bucket to the pool. If the pool loses more water than the bucket, you likely have a leak."
      },
      {
        question: "Do you just confirm leaks or actually find where they are?",
        answer: "We don't just confirm leaks—we use advanced technology to pinpoint the exact location, so repairs can be made quickly and efficiently."
      },
      {
        question: "Can you detect leaks while the pool is full?",
        answer: "Yes, our methods allow us to detect leaks even when the pool is full, using non-invasive techniques."
      },
      {
        question: "How much water loss indicates a pool leak?",
        answer: "If your pool loses more than 1/4 inch of water per day, this is a key sign of a swimming pool leak."
      },
      {
        question: "What is the bucket test?",
        answer: "The Bucket Test is a reliable DIY method to determine if your pool is leaking or just evaporating water. Place a bucket filled with pool water on a pool step, mark the water levels, and compare the loss after 24 hours."
      },
      {
        question: "What is the dye test?",
        answer: "The Dye Test is a precise method to pinpoint the exact location of pool leaks. By adding a small amount of colored dye near suspected leak areas, you can observe if the dye is drawn into a crack or hole, confirming the presence and location of a leak."
      },
      {
        question: "What is pressure testing?",
        answer: "Pressure testing involves pressurizing the pool's plumbing lines and monitoring the pressure gauge. A drop in the pressure gauge during plumbing pressure testing confirms a leak in that specific line."
      },
    ],
    es: [
      {
        question: "¿Cómo puedo saber si mi piscina tiene una fuga o es solo evaporación?",
        answer: "La Prueba del Cubo es un método fiable para determinar si su piscina tiene una fuga o simplemente evapora agua. Llene un cubo con agua de la piscina, colóquelo en un escalón y marque los niveles. Después de 24 horas, compare la pérdida. Si la piscina perdió más que el cubo, probablemente tiene una fuga."
      },
      {
        question: "¿Solo confirman las fugas o realmente encuentran dónde están?",
        answer: "No solo confirmamos fugas—usamos tecnología avanzada para localizar la ubicación exacta, para que las reparaciones se realicen rápida y eficientemente."
      },
      {
        question: "¿Pueden detectar fugas con la piscina llena?",
        answer: "Sí, nuestros métodos nos permiten detectar fugas incluso con la piscina llena, usando técnicas no invasivas."
      },
      {
        question: "¿Cuánta pérdida de agua indica una fuga en la piscina?",
        answer: "Si su piscina pierde más de 6mm de agua por día, esto es una señal clave de una fuga en la piscina."
      },
      {
        question: "¿Qué es la prueba del cubo?",
        answer: "La Prueba del Cubo es un método fiable para determinar si su piscina tiene una fuga o simplemente evapora agua. Coloque un cubo lleno de agua de la piscina en un escalón, marque los niveles y compare la pérdida después de 24 horas."
      },
      {
        question: "¿Qué es la prueba de tinte?",
        answer: "La Prueba de Tinte es un método preciso para localizar la ubicación exacta de fugas en piscinas. Al añadir una pequeña cantidad de tinte coloreado cerca de áreas sospechosas, puede observar si el tinte es atraído hacia una grieta o agujero, confirmando la presencia y ubicación de una fuga."
      },
      {
        question: "¿Qué es la prueba de presión?",
        answer: "La prueba de presión implica presurizar las líneas de fontanería de la piscina y monitorear el manómetro. Una caída en el manómetro durante la prueba de presión confirma una fuga en esa línea específica."
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
