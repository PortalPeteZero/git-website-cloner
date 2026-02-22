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
        question: "Using a Water Meter for Detection",
        answer: "Your water meter is a powerful tool for uncovering hidden leaks in your water supply system. To check for leaks, take a meter reading, then ensure all the taps in your property are turned off and avoid using any water for a few hours. After this period, take a second reading—if the meter has moved, it means water is still flowing somewhere in the system, indicating a possible leak. This simple test can help you determine if there's a problem even when there are no obvious signs. Keep an eye on your water bill as well; a sudden increase often points to leakage. If you suspect a leak, contact a professional plumber immediately to help locate the exact location and discuss options like a leak allowance to help reduce your bill."
      },
      {
        question: "External Piping Inspection",
        answer: "Inspecting the external pipes around your property is essential for early leak detection. Start by checking the supply pipe that connects your house to the main water supply, as faulty pipes here are a common cause of leaks. Walk around your front garden and along the outside walls of your house, looking for obvious signs such as leaking water, damp patches, or soft spots on the ground. These can indicate a hidden leak that may lead to water damage if left unchecked. Regularly inspecting these areas helps you avoid leaks and maintain the integrity of your property's plumbing system."
      },
      {
        question: "Irrigation System Check",
        answer: "Irrigation systems, including sprinklers and garden pipes, are often overlooked sources of leaks. Make it a habit to check your sprinklers and pipes for any signs of damage or wear, ensuring everything is working properly. A leak in your irrigation system can result in significant water waste and an increased water bill. To detect leaks, turn off the water supply to your irrigation system and take a meter reading. If the meter changes while the system is off, there may be a hidden leak. If you notice any signs of leakage, contact a professional plumber to assess and repair the system, helping you avoid unnecessary waste and costs."
      },
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
        question: "Uso del Contador de Agua para Detección",
        answer: "Su contador de agua es una herramienta poderosa para descubrir fugas ocultas en su sistema de suministro. Para comprobar si hay fugas, tome una lectura del contador, asegúrese de que todos los grifos estén cerrados y evite usar agua durante unas horas. Después, tome una segunda lectura—si el contador se ha movido, significa que el agua sigue fluyendo en algún lugar del sistema, indicando una posible fuga. Esta prueba simple puede ayudarle a determinar si hay un problema incluso cuando no hay señales obvias. Vigile también su factura de agua; un aumento repentino a menudo indica una fuga. Si sospecha una fuga, contacte a un fontanero profesional inmediatamente."
      },
      {
        question: "Inspección de Tuberías Externas",
        answer: "Inspeccionar las tuberías externas alrededor de su propiedad es esencial para la detección temprana de fugas. Comience comprobando la tubería de suministro que conecta su casa con el suministro principal, ya que las tuberías defectuosas aquí son una causa común de fugas. Camine por su jardín y a lo largo de las paredes exteriores, buscando señales obvias como agua goteando, manchas húmedas o puntos blandos en el suelo. Estos pueden indicar una fuga oculta que puede causar daños por agua si no se controla."
      },
      {
        question: "Comprobación del Sistema de Riego",
        answer: "Los sistemas de riego, incluyendo aspersores y tuberías de jardín, son fuentes de fugas frecuentemente pasadas por alto. Acostúmbrese a comprobar sus aspersores y tuberías en busca de signos de daño o desgaste. Una fuga en su sistema de riego puede resultar en un desperdicio significativo de agua y un aumento en la factura. Para detectar fugas, cierre el suministro de agua al sistema de riego y tome una lectura del contador. Si el contador cambia mientras el sistema está apagado, puede haber una fuga oculta."
      },
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
        answer: "Yes, our ground-penetrating radar and other non-invasive technologies can locate both metallic and non-metallic pipes."
      },
      {
        question: "How deep can you detect underground pipes?",
        answer: "Our equipment can detect pipes and cables at various depths, depending on the technology used and ground conditions."
      },
      {
        question: "Do I need underground detection before building work?",
        answer: "Absolutely. Identifying buried utilities before construction or landscaping prevents costly accidental damage and potential safety hazards."
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
