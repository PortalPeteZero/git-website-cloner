import { LucideIcon, Search, Cable, Droplets, Waves, Wrench, Home, HelpCircle, BadgeCheck, Thermometer } from "lucide-react";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg?w=1200";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg?w=1200";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg?w=1200";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg?w=1200";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection-hero.jpg?w=1920";
import leakRepairImg from "@/assets/services/leak-repair.jpg?w=1200";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg?w=1200";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg?w=1200";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation-new.png?w=1200";

// Import damp/moisture images
import risingDampWall from "@/assets/blog/rising-damp-wall.jpg?w=800";
import thermalUndergroundLeak from "@/assets/blog/thermal-underground-leak.jpg?w=800";
import moistureMeterWall from "@/assets/services/moisture-meter-wall.jpg?w=800";

// Import gallery images
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg?w=800";
import drainDetection3 from "@/assets/services/gallery/drain-detection-3.jpg?w=800";
import drainDetection4 from "@/assets/services/gallery/drain-detection-4.jpg?w=800";
import drainDetection5 from "@/assets/services/gallery/drain-detection-5.jpg?w=800";
import drainDetection6 from "@/assets/services/gallery/drain-detection-6.jpg?w=800";
import drainDetection7 from "@/assets/services/gallery/drain-detection-7.jpg?w=800";
import drainDetection8 from "@/assets/services/gallery/drain-detection-8.jpg?w=800";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg?w=800";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg?w=800";
import poolLeak1 from "@/assets/services/gallery/pool-leak-1.jpg?w=800";
import poolLeak4 from "@/assets/services/gallery/pool-leak-4.jpg?w=800";
import poolLeak5 from "@/assets/services/gallery/pool-leak-5.jpg?w=800";
import poolLeak6 from "@/assets/services/gallery/pool-leak-6.jpg?w=800";
import poolLeak7 from "@/assets/services/gallery/pool-leak-7.jpg?w=800";
import poolLeak8 from "@/assets/services/gallery/pool-leak-8.jpg?w=800";
import poolLeak9 from "@/assets/services/gallery/pool-leak-9.jpg?w=800";
import poolLeak10 from "@/assets/services/gallery/pool-leak-10.jpg?w=800";
import poolLeak11 from "@/assets/services/gallery/pool-leak-11.jpg?w=800";
import undergroundDetection1 from "@/assets/services/gallery/underground-detection-1.jpg?w=800";
import undergroundDetection2 from "@/assets/services/gallery/underground-detection-2.jpg?w=800";
import undergroundDetection3 from "@/assets/services/gallery/underground-detection-3.jpg?w=800";
import undergroundDetection4 from "@/assets/services/gallery/underground-detection-4.jpg?w=800";
import undergroundDetection5 from "@/assets/services/gallery/underground-detection-5.jpg?w=800";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg?w=800";
import drainUnblocking1 from "@/assets/services/gallery/drain-unblocking-1.jpg?w=800";
import poolRepair1 from "@/assets/services/gallery/pool-repair-1.jpg?w=800";
import poolRepair2 from "@/assets/services/gallery/pool-repair-2.jpg?w=800";
import poolRepair3 from "@/assets/services/gallery/pool-repair-3.jpg?w=800";
import poolRepair4 from "@/assets/services/gallery/pool-repair-4.jpg?w=800";
import poolRepair5 from "@/assets/services/gallery/pool-repair-5.jpg?w=800";
import poolRepair6 from "@/assets/services/gallery/pool-repair-6.jpg?w=800";
import leakRepairBa1 from "@/assets/services/gallery/leak-repair-ba-1.jpg?w=800";
import leakRepairBa2 from "@/assets/services/gallery/leak-repair-ba-2.jpg?w=800";
import leakRepairBa3 from "@/assets/services/gallery/leak-repair-ba-3.jpg?w=800";
import leakRepairBa4 from "@/assets/services/gallery/leak-repair-ba-4.jpg?w=800";

export interface ServiceData {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  content: string;
  richContent?: boolean;
  heroImage: string;
  heroAlt?: string;
  galleryImages: string[];
  specialHeroImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  freeLeakSection?: {
    enabled: boolean;
    highlights: { icon: LucideIcon; text: string }[];
    includes: string[];
    importantNote: string;
    subNote: string;
  };
}

// Water leak detection carousel images
export const waterLeakCarouselImages = [
  { src: drainDetection4, alt: { en: "Water leak detection technician with acoustic equipment in Lanzarote", es: "Técnico de detección de fugas con equipo acústico en Lanzarote" } },
  { src: drainDetection5, alt: { en: "Professional leak detection survey at villa in Lanzarote", es: "Inspección profesional de fugas en villa de Lanzarote" } },
  { src: drainDetection6, alt: { en: "Underground water leak detection with specialist equipment", es: "Detección de fugas subterráneas con equipo especializado" } },
  { src: drainDetection7, alt: { en: "Pipe leak detection using acoustic technology", es: "Detección de fugas en tuberías usando tecnología acústica" } },
  { src: drainDetection8, alt: { en: "Canary Detect field technician locating water leak", es: "Técnico de Canary Detect localizando fuga de agua" } },
];

// Underground detection carousel images
export const undergroundCarouselImages = [
  { src: undergroundDetection1, alt: { en: "Ground penetrating radar survey in Lanzarote volcanic terrain", es: "Estudio con radar de penetración en terreno volcánico de Lanzarote" } },
  { src: undergroundDetection4, alt: { en: "Underground pipe detection in villa garden", es: "Detección de tuberías subterráneas en jardín de villa" } },
  { src: undergroundDetection6, alt: { en: "Canary Detect technician with pipe location equipment", es: "Técnico de Canary Detect con equipo de localización de tuberías" } },
  { src: undergroundDetection2, alt: { en: "Electromagnetic pipe locator detecting buried utilities", es: "Localizador electromagnético detectando servicios enterrados" } },
  { src: undergroundDetection5, alt: { en: "Pipe location survey using electromagnetic technology", es: "Estudio de localización de tuberías con tecnología electromagnética" } },
];

export const getServicesData = (isSpanish: boolean): Record<string, ServiceData> => {
  if (isSpanish) {
    return {
      "drain-detection": {
        title: "Inspección de Desagües y Tuberías Lanzarote",
        description: "Inspección profesional de desagües y tuberías con CCTV en Lanzarote. 6 sistemas de cámara para todos los tamaños - desde tuberías de baño hasta desagües principales. Informes detallados en vídeo y trazado preciso.",
        icon: Search,
        heroImage: drainDetectionImg,
        galleryImages: [drainDetection2, drainDetection3, pipeInspection2, pipeInspection3],
        seo: {
          title: "Inspección Desagües Lanzarote | CCTV | Canary Detect",
          description: "Inspección profesional de desagües con CCTV en Lanzarote. 6 sistemas de cámara. Trazado, detección de obstrucciones e informes detallados.",
          keywords: "inspección desagües Lanzarote, inspección tuberías Lanzarote, CCTV desagües, evaluación estado tuberías, cámara inspección desagües, inspección precompra Canarias"
        },
        features: [
          "6 sistemas de cámara para todos los tamaños",
          "Inspección en vídeo de alta definición",
          "Localizadores avanzados para posición exacta",
          "Medición de profundidad",
          "Evaluación del estado de tuberías",
          "Detección de juntas y corrosión",
          "Inspecciones precompra de propiedades",
          "Informes detallados en vídeo",
        ],
        content: "Canary Detect dispone de 6 sistemas de cámara de todos los tamaños, permitiéndonos inspeccionar una variedad de diámetros desde pequeñas tuberías de baño hasta desagües principales. Nuestros localizadores avanzados pueden determinar la posición exacta de la cabeza de la cámara desde la superficie, junto con mediciones de profundidad. Esto significa que no solo podemos ver sus tuberías internamente, sino también localizar con precisión su ruta desde la superficie.\n\nUsando cámaras de varilla de alta definición, podemos inspeccionar tuberías de 25mm a 300mm de diámetro, identificando problemas como acumulación de cal, corrosión, fallos en juntas y daños estructurales. Esto es particularmente valioso para inspecciones previas a la compra de propiedades en Lanzarote.\n\nA diferencia de muchas otras empresas, combinamos nuestro servicio de limpieza con nuestras cámaras. Esto nos permite inspeccionar las tuberías antes y después de la limpieza, y usar las cámaras mientras trabajamos garantiza que nada se pase por alto. Tenemos una gama de equipos para limpiar y desatascar tuberías, desde máquinas de agua a presión hasta 'golpeadores de tubería' para obstrucciones más difíciles.\n\nSi las tuberías están llenas de agua estancada, grasa u obstrucciones, puede que necesitemos limpiarlas primero antes de que las cámaras puedan ver con claridad.",
      },
      "underground-detection": {
        title: "Detección de Tuberías y Cables Subterráneos Lanzarote",
        description: "Encuentre fugas de agua subterráneas en Lanzarote. Localice servicios enterrados, tuberías y cables antes de excavar usando radar de penetración y localizadores electromagnéticos.",
        icon: Cable,
        heroImage: undergroundDetection1,
        galleryImages: [undergroundDetection1, undergroundDetection2, undergroundDetection3, undergroundDetection4, undergroundDetection5, undergroundDetection6],
        seo: {
          title: "Detección Fugas Subterráneas Lanzarote | Canary Detect",
          description: "Detección de fugas subterráneas y tuberías en Lanzarote. Radar GPR, localizadores electromagnéticos. Localice tuberías enterradas.",
          keywords: "detección fugas subterráneas, localización tuberías enterradas, detección tuberías Lanzarote, localización servicios enterrados, detección cables Canarias"
        },
        features: [
          "Radar de penetración (GPR)",
          "Localizadores electromagnéticos de tuberías",
          "Mapeo de servicios",
          "Estimación de profundidad",
          "Estudios para obras de construcción",
          "Documentación as-built",
        ],
        content: "**El Desafío del Terreno Volcánico de Lanzarote**\n\nLocalizar tuberías y cables enterrados en Lanzarote es considerablemente más difícil que en suelos convencionales del continente. El subsuelo de la isla está formado por capas de basalto denso, grava volcánica suelta (picón), flujos de lava antiguos y rellenos de obras anteriores. Muchas propiedades construidas en los años 70, 80 y 90 carecen de planos actualizados, y los registros municipales de servicios enterrados suelen ser incompletos o inexistentes. Sin una localización profesional previa, cualquier excavación se convierte en una apuesta costosa.\n\n**Radar de Penetración (GPR): Cómo Funciona**\n\nNuestro radar de penetración terrestre emite pulsos de radio de alta frecuencia que penetran el suelo y rebotan al encontrar cambios de material — como una tubería, un cable o un vacío. El equipo traduce estas reflexiones en una imagen del subsuelo en tiempo real. A diferencia de los métodos electromagnéticos, el GPR detecta tanto materiales metálicos como no metálicos (PVC, polietileno, fibrocemento), lo que resulta esencial en Lanzarote donde las instalaciones modernas utilizan predominantemente plástico. En condiciones favorables de picón seco, podemos alcanzar profundidades de varios metros con buena resolución.\n\n**Localización Electromagnética: Metálico vs No Metálico**\n\nPara tuberías y cables metálicos (cobre, acero, hierro fundido), utilizamos localizadores electromagnéticos de precisión. Conectamos un transmisor a un punto accesible de la tubería metálica, que induce una señal rastreable desde la superficie con un receptor portátil. Esto proporciona la ruta exacta y la profundidad estimada. Las tuberías de plástico puro son invisibles para estos dispositivos, por lo que siempre combinamos ambas tecnologías para un estudio completo.\n\n**¿Cuándo Necesita Este Servicio?**\n\nLa detección subterránea es imprescindible antes de:\n\n• Obras de construcción, ampliaciones o cimentaciones nuevas\n• Instalación de piscinas o jacuzzis\n• Proyectos de jardinería y paisajismo con excavación profunda\n• Localización de una [fuga de agua enterrada](/es/servicios/deteccion-fugas-agua) entre el contador y la vivienda\n• Instalación de sistemas de riego o drenaje\n• Verificación de rutas antes de [inspecciones de desagües](/es/servicios/deteccion-desagues)\n• Compraventa de propiedades sin documentación de servicios\n\n**Lo Que Recibe el Cliente**\n\nAl finalizar el estudio, proporcionamos: marcado físico del terreno con pintura y banderas indicando rutas y profundidades, un informe escrito con mediciones de profundidad y rutas documentadas, evaluación de riesgos para la excavación planificada, y recomendaciones sobre zonas seguras para excavar. Esta documentación protege su inversión y simplifica cualquier obra futura en la propiedad.",
      },
      "water-leak-detection": {
      title: "Detección de Fugas de Agua Ocultas Lanzarote",
      description: "¿Contador de agua corriendo sin explicación? Especialistas en localización de fugas ocultas en Lanzarote usando imagen térmica, gas trazador y detección acústica. Garantía Sin Encontrar, Sin Pagar.",
        icon: Droplets,
        heroImage: waterLeakDetectionImg,
        specialHeroImage: freeLeakConfirmationImg,
        galleryImages: [drainDetection4, drainDetection5, drainDetection6, drainDetection7],
        seo: {
        title: "Detección Fugas Agua Lanzarote | Sin Encontrar Sin Pagar",
        description: "¿Contador corriendo? Detección profesional fugas ocultas Lanzarote. Imagen térmica, gas trazador, acústica. Sin Encontrar, Sin Pagar.",
        keywords: "detección fugas agua Canarias, fugas agua ocultas, contador agua corriendo fuga, imagen térmica fugas, gas trazador fugas, detectar fugas sin romper, especialista fugas agua Lanzarote"
        },
        freeLeakSection: {
          enabled: true,
          highlights: [
            { icon: Home, text: "Sin señales visibles - las fugas pasan desapercibidas" },
            { icon: HelpCircle, text: "Sistemas de agua complejos - red, bombas, depósitos" },
            { icon: BadgeCheck, text: "Visita GRATUITA e informe de fugas" },
          ],
          includes: [
            "Test de confirmación de fugas GRATIS",
            "Informe profesional por escrito",
            "Evaluación experta de su propiedad",
            "Consulta sin compromiso",
          ],
          importantNote: "Este servicio es para CONFIRMAR si tiene una fuga o no, con un informe detallado. NO es una inspección para localizar la ubicación exacta.",
          subNote: "Para inspecciones completas de localización de fugas, contáctenos para nuestro servicio integral de detección.",
        },
        features: [
          "Garantía Sin Encontrar, Sin Pagar",
          "Cámaras de imagen térmica",
          "Detección de gas trazador (GASENSE)",
        "Geófonos acústicos de alta sensibilidad",
        "Micrófonos de tubería para precisión cm",
          "Métodos no invasivos",
        "Confirmación multi-tecnológica",
          "Informes para aseguradoras",
        "Mapeo digital de ubicaciones",
        ],
      content: "**¿Por Qué Elegir Detección Profesional de Fugas Ocultas?**\n\nLas fugas de agua ocultas son uno de los problemas más frustrantes para los propietarios en Lanzarote. Puede ver el contador girando, recibir facturas de agua elevadas, pero no encontrar ninguna señal visible de dónde está escapando el agua. Aquí es donde nuestro servicio especializado de detección marca la diferencia.\n\nCanary Detect invierte continuamente en tecnología de vanguardia—actualmente más de €80.000 en equipos especializados—porque entendemos que encontrar fugas invisibles requiere las herramientas adecuadas en manos expertas.\n\n**Nuestro Proceso de Detección Multi-Tecnológico**\n\nNinguna tecnología individual es 100% fiable en todas las situaciones. Por eso siempre utilizamos múltiples métodos para confirmar cada ubicación de fuga:\n\n**1. Imagen Térmica Infrarroja**: Nuestras cámaras térmicas de alta resolución detectan diferencias de temperatura mínimas causadas por agua fugándose detrás de paredes, bajo suelos o en techos. El agua enfría las superficies de forma característica, creando patrones térmicos distintivos invisibles al ojo humano.\n\n**2. Detección de Gas Trazador (GASENSE)**: Presurizamos sus tuberías con una mezcla segura de nitrógeno/hidrógeno (95%/5%). Este gas es más ligero que el aire y penetra incluso las grietas más pequeñas, emergiendo a través de cualquier material de superficie. Nuestros detectores ultrasensibles localizan exactamente dónde escapa el gas.\n\n**3. Detección Acústica**: Los geófonos de alta sensibilidad amplifican el sonido del agua escapando de tuberías presurizadas. Diferentes tipos de fugas producen firmas sonoras distintas—aprendemos a distinguir entre una junta defectuosa, una tubería agrietada o un accesorio suelto.\n\n**4. Micrófonos de Tubería**: Para la máxima precisión, insertamos micrófonos especializados directamente en las tuberías. Esto nos permite escuchar el flujo de agua dentro del sistema y triangular la posición exacta de la fuga con precisión centimétrica.\n\n**El Proceso de Inspección Paso a Paso**\n\nCuando llegamos a su propiedad, seguimos un proceso sistemático:\n\n• Primero confirmamos que existe una fuga mediante pruebas del contador y comprobación del sistema\n• Aislamos diferentes secciones para determinar qué zona está afectada\n• Aplicamos tecnologías de detección secuencialmente, empezando por las menos invasivas\n• Siempre confirmamos con al menos dos tecnologías independientes antes de marcar una ubicación\n• Documentamos todo con fotografías térmicas, mediciones y coordenadas precisas\n\n**Garantía Sin Encontrar, Sin Pagar**\n\nOperamos con total confianza en nuestras capacidades. Si confirmamos que tiene una fuga activa pero no conseguimos localizarla, no hay cargo. Sin riesgos, sin sorpresas. Nuestros informes profesionales detallados son aceptados por todas las compañías de seguros para reclamaciones.",
    },
    "water-pipe-leak-detection": {
      title: "Detección de Fugas en Tuberías Lanzarote",
      description: "Especialistas en fugas de tuberías de agua en Lanzarote. Localizamos fugas en tuberías de cobre, PVC, polietileno y hierro galvanizado. Inspección CCTV interna y pruebas de presión.",
      icon: Droplets,
      heroImage: pipeInspectionImg,
      galleryImages: [pipeInspection2, pipeInspection3, drainDetection2, drainDetection3],
      seo: {
        title: "Detección Fugas Tuberías Agua Lanzarote | Canary Detect",
        description: "Detección de fugas en tuberías de agua en Lanzarote. Cobre, PVC, polietileno, hierro galvanizado. Inspección CCTV y pruebas de presión.",
        keywords: "fugas tuberías agua Lanzarote, fuga tubería cobre, fuga tubería PVC, reparación tuberías agua, inspección tuberías CCTV, prueba presión tuberías, fontanero fugas Lanzarote"
      },
      features: [
        "Inspección CCTV de tuberías",
        "Pruebas de presión estática",
        "Detección de tuberías subterráneas",
        "Diagnóstico por material de tubería",
        "Mapeo del sistema de fontanería",
        "Evaluación del estado de tuberías",
        "Localización de juntas defectuosas",
        "Informes técnicos detallados",
      ],
      content: "**Especialistas en Fugas de Tuberías de Agua**\n\nNo todas las fugas son iguales. La forma de localizar y reparar una fuga depende enormemente del tipo de tubería afectada, su ubicación y su edad. En Canary Detect, nos especializamos en el diagnóstico y detección de fugas específicas de tuberías, proporcionando soluciones adaptadas a cada material y situación.\n\n**Entendiendo su Sistema de Tuberías en Lanzarote**\n\nLas propiedades en Lanzarote utilizan diversos materiales de tubería, cada uno con sus propios patrones de fallo característicos:\n\n**Tuberías de Cobre**: Comunes en instalaciones de calidad, las tuberías de cobre pueden desarrollar fugas por corrosión galvánica (especialmente cerca de accesorios de latón), fatiga por vibración en codos, o daños por agua agresiva. Nuestras cámaras térmicas son particularmente efectivas para localizar fugas de cobre detrás de paredes.\n\n**Tuberías de PVC/CPVC**: Populares en instalaciones modernas, las tuberías de plástico suelen fallar en las uniones adhesivadas, especialmente si la instalación original fue defectuosa. La exposición UV en secciones exteriores también causa degradación. Utilizamos pruebas de presión específicas para aislar secciones con problemas.\n\n**Tuberías de Polietileno (PE)**: Utilizadas frecuentemente para conexiones subterráneas desde el contador hasta la vivienda, las tuberías PE pueden sufrir daños por herramientas de jardinería, raíces de árboles, o movimiento del terreno. Nuestra tecnología de gas trazador es ideal para localizar estas fugas enterradas.\n\n**Hierro Galvanizado**: Presente en construcciones antiguas de Lanzarote, estas tuberías desarrollan corrosión interna que reduce el flujo y eventualmente perfora. La inspección CCTV interna revela el estado real de estas tuberías y ayuda a planificar la renovación.\n\n**Pruebas de Presión Profesionales**\n\nLas pruebas de presión son fundamentales para determinar la integridad del sistema de tuberías:\n\n• **Prueba estática**: Aislamos secciones y monitorizamos la presión durante tiempo prolongado para detectar incluso las fugas más pequeñas\n• **Prueba diferencial**: Comparamos el consumo real con el teórico para cuantificar las pérdidas\n• **Prueba de aislamiento**: Identificamos exactamente qué tramo del sistema está afectado\n\n**Inspección CCTV Interna de Tuberías**\n\nNuestras micro-cámaras pueden introducirse en tuberías desde 25mm de diámetro, proporcionando imágenes de alta definición del interior:\n\n• Visualización directa de grietas, corrosión y depósitos\n• Localización precisa de juntas defectuosas\n• Evaluación del estado general para planificación de mantenimiento\n• Documentación en vídeo para informes de seguros\n\n**Detección de Tuberías Subterráneas**\n\nMuchas fugas graves ocurren en tuberías enterradas entre el contador y la vivienda. Utilizamos:\n\n• Localizadores electromagnéticos para tuberías metálicas\n• Radar de penetración (GPR) para tuberías no metálicas\n• Gas trazador para localización precisa de la fuga\n• Correladores acústicos para triangulación de posición\n\n**Señales Comunes de una Fuga en Tuberías**\n\nMuchos propietarios en Lanzarote no se dan cuenta de que tienen una fuga en las tuberías hasta que se ha producido un daño significativo. Esté atento a estas señales de advertencia:\n\n• **Aumentos inexplicables en la factura del agua** — incluso una pequeña fuga puede desperdiciar miles de litros al mes, apareciendo como un pico repentino en su factura\n• **Manchas de humedad en paredes o suelos** — la humedad que aparece en superficies interiores a menudo indica una tubería con fuga detrás de la pared o bajo la solera\n• **Sonido de agua corriendo** — si puede escuchar agua fluyendo cuando todos los grifos están cerrados, es probable que una tubería esté fugando en algún lugar del sistema\n• **Baja presión de agua** — una disminución gradual de la presión puede indicar una fuga que reduce el flujo antes de que el agua llegue a sus grifos\n• **Contador de agua girando** — cierre todos los grifos y aparatos, luego compruebe su contador. Si sigue moviéndose, tiene una fuga\n\nSi nota cualquiera de estas señales, no se demore. Cuanto más tiempo pase una fuga sin detectar, más daño causará a la estructura de su propiedad y más altas serán sus facturas de agua.\n\n**Informe Técnico Completo**\n\nCada inspección incluye un informe profesional detallando: tipo de tubería afectada, ubicación exacta de la fuga, causa probable del fallo, opciones de reparación recomendadas, y presupuesto estimado. Este informe es aceptado por aseguradoras y útil para obtener presupuestos de reparación comparativos.\n\n**Sin Encontrar, Sin Pagar**\n\nOperamos con total confianza en nuestras capacidades de detección de fugas en tuberías. Si confirmamos que existe una fuga activa en su sistema pero no conseguimos localizarla con precisión, no paga nada. Nuestra inversión en tecnología de más de €80.000 en equipos especializados garantiza que encontramos lo que otros no pueden.",
      },
      "pool-leak-detection": {
        title: "Detección de Fugas en Piscinas Lanzarote",
        description: "¿Su piscina pierde agua? Detección profesional de fugas en piscinas en Lanzarote — no solo confirmamos una fuga, localizamos su ubicación exacta con pruebas acústicas, CCTV y gas trazador.",
        icon: Waves,
        heroImage: poolLeak1,
        galleryImages: [poolLeak8, poolLeak7, poolLeak10, poolLeak11, poolLeak9, poolLeak4, poolLeak5, poolLeak6],
        seo: {
          title: "Detección Fugas Piscinas Lanzarote | Canary Detect",
          description: "¿Piscina perdiendo agua? Detección profesional de fugas en piscinas en Lanzarote. Pruebas acústicas, presión, CCTV e inspección subacuática.",
          keywords: "detección fugas piscinas Lanzarote, piscina perdiendo agua, reparación fugas piscina, detección fugas Playa Blanca, servicio reparación piscinas, fuga piscina Canarias"
        },
        features: [
          "Pruebas acústicas de todos los accesorios",
          "Pruebas del vaso (acústicas y electrónicas)",
          "Inspección de focos",
          "Prueba de bomba, filtro y carcasa",
          "Prueba de presión de tuberías",
          "Inspección CCTV interna de tuberías",
          "Localización por vacío",
          "Detección de gas H2/N2",
          "Informes para aseguradoras",
        ],
        content: "A diferencia de algunas empresas, nuestras inspecciones de detección de fugas en piscinas en Lanzarote no solo confirman que hay una fuga e identifican qué sección está afectada, sino que luego localizamos la posición exacta de la fuga.\n\nNuestra inspección integral prueba todos los aspectos de su piscina incluyendo: pruebas acústicas alrededor de todos los accesorios, vaso y focos; prueba de bomba, filtro y accesorios en la carcasa de la bomba; prueba de presión de todas las tuberías; y pruebas electrónicas del vaso de la piscina.\n\nUna vez encontrada una sección con fuga, localizamos la fuga usando cámaras CCTV para inspección interna de tuberías, hidrófonos internos, geófonos externos, localización por vacío, e inserción y detección de gas H2/N2.\n\nCada inspección incluye un informe profesional detallado para su compañía de seguros. Por favor note: para pruebas completas, la piscina debe estar limpia y llena hasta la mitad de los skimmers. Es libre de usar su propio contratista para reparaciones - no está obligado a usar nuestro equipo de reparación.",
      },
      "leak-repair": {
        title: "Reparación de Fugas Lanzarote",
        description: "Servicios profesionales de reparación de fugas en Lanzarote para reparar fugas en tuberías de agua, piscinas y fugas subterráneas - solución completa desde detección hasta reparación.",
        icon: Wrench,
        heroImage: leakRepairBa4,
        galleryImages: [leakRepairBa1, leakRepairBa2, leakRepairBa3, leakRepairBa4],
        seo: {
          title: "Reparación Fugas Lanzarote | Tuberías y Piscinas",
          description: "Reparación de fugas Lanzarote. Tuberías de agua, piscinas, fugas subterráneas. Servicio de emergencia. De detección a reparación.",
          keywords: "reparación fugas Lanzarote, reparación fugas agua Canarias, reparación tuberías agua, reparación tuberías piscina, reparación fugas subterráneas, reparación emergencia fugas Lanzarote"
        },
        features: [
          "Reparación de tuberías de suministro",
          "Reparación de tuberías internas",
          "Reparación de tuberías de piscina",
          "Reparación de fugas subterráneas",
          "Reparación de conexiones de desagüe",
          "Servicio de emergencia 24/7",
        ],
        richContent: true,
        content: "**Cinco Tipos de Fugas que Reparamos**\n\nCanary Detect gestiona todas las categorías de fugas de agua en propiedades de Lanzarote. Reparamos **tuberías de suministro y acometidas** desde el contador hasta el edificio, **tuberías internas** dentro de paredes, suelos y techos, **tuberías de piscina** incluyendo colectores de sala de bombas y líneas de retorno, **tuberías subterráneas** enterradas bajo caminos, jardines y terrazas, y **conexiones de desagüe** donde las tuberías residuales se unen a la red de alcantarillado o fosa séptica. Sea cual sea el origen, disponemos de los materiales y la experiencia para solucionarlo in situ.\n\n**Nuestro Proceso de Reparación en 5 Pasos**\n\nCada reparación sigue un flujo de trabajo estructurado para que nada quede al azar:\n\n1. **Detección primero** — utilizamos nuestro equipo especializado para localizar la posición exacta de la fuga antes de abrir terreno. Si aún no ha tenido una inspección, comience con nuestro [servicio de detección de fugas de agua](/es/servicios/deteccion-fugas-agua).\n2. **Excavación selectiva** — abrimos solo el área mínima necesaria, protegiendo baldosas, jardinería y bordes de piscina siempre que sea posible.\n3. **Reparación** — la sección dañada se corta y reemplaza utilizando el material y método correcto para el tipo de tubería.\n4. **Prueba de presión** — presurizamos la sección reparada para confirmar su estanqueidad antes de cerrar.\n5. **Restauración** — las excavaciones se rellenan, compactan y terminan dejando la zona limpia y segura.\n\n**Desafíos Específicos de Lanzarote**\n\nReparar fugas en esta isla es más difícil que en la península. La roca volcánica (basalto y picón compactado) dificulta el acceso y a menudo requiere equipos de corte especializados en lugar de excavación estándar. Muchas propiedades antiguas construidas en los años 70 y 80 todavía tienen **tuberías de acero galvanizado corroídas** que se deshacen al manipularlas, lo que significa que una reparación simple puede revelar una necesidad de reemplazo mucho mayor. La exposición UV del intenso sol canario degrada los accesorios plásticos y juntas de goma expuestos mucho más rápido que en el norte de Europa, provocando fallos prematuros en terrazas y salas de bombas exteriores.\n\n**Materiales y Técnicas**\n\nSeleccionamos el método de reparación según el material de la tubería y su ubicación:\n\n• **PVC encolado** — el estándar para tuberías nuevas de piscina y desagüe, proporcionando una unión química permanente.\n• **Racores de compresión** — utilizados en tuberías de polietileno (PE) de suministro donde se necesita flexibilidad.\n• **Inyección de epoxi** — ideal para microfisuras en vasos de piscina de hormigón o canales enfoscados sin necesidad de excavación.\n• **Relining de tuberías** — para tuberías de desagüe con acceso restringido, insertamos un revestimiento impregnado de resina que se endurece in situ, creando una tubería nueva dentro de la antigua.\n\nTodos los materiales están clasificados para exposición UV exterior y el suministro de agua desalada rica en minerales utilizado en toda Lanzarote.\n\n**Reparaciones de Emergencia vs Planificadas**\n\nPara **fugas activas** que causan pérdida de agua visible, humedad ascendente o picos en la factura del agua, ofrecemos un **servicio de emergencia 24/7** en toda la isla. Nuestro equipo procura acudir en pocas horas, aislar el suministro si es necesario y realizar la reparación en el mismo día.\n\nPara **fugas lentas o sospechadas** — como un nivel de piscina que baja gradualmente o una pequeña mancha de humedad — programamos una cita conveniente, combinando a menudo la visita de reparación con una [inspección de detección de fugas en piscinas](/es/servicios/deteccion-fugas-piscinas) o un [rastreo de tuberías subterráneas](/es/servicios/deteccion-subterranea) para confirmar primero el origen.\n\n**Garantía de 12 Meses**\n\nCada reparación realizada por Canary Detect está respaldada por nuestra **garantía de mano de obra de 12 meses**. Si la misma junta o sección falla dentro de ese período, volvemos y la reparamos sin coste adicional. También proporcionamos un informe escrito detallando la ubicación de la reparación, el método y los materiales utilizados — útil para reclamaciones de seguros y registros futuros de la propiedad.",
      },
      "drain-unblocking": {
        title: "Desatasco de Desagües Lanzarote",
        description: "Servicios profesionales de desatasco de desagües en Lanzarote. ¿Desagüe atascado? Eliminamos todo tipo de obstrucciones rápida y eficazmente usando agua a alta presión y equipos especializados.",
        icon: Search,
        heroImage: drainUnblockingImg,
        galleryImages: [drainUnblocking1, drainDetection2],
        seo: {
          title: "Desatasco Desagües Lanzarote | Emergencia | Canary Detect",
          description: "Desatasco de desagües Lanzarote. Desagüe atascado limpiado rápido con agua a presión. Cocina, baño, principales. Emergencia disponible.",
          keywords: "desatasco desagües Lanzarote, desagüe atascado Lanzarote, limpieza desagües, agua a presión desagües, desatasco emergencia, WC atascado, fregadero atascado Canarias"
        },
        features: [
          "Agua a alta presión",
          "Limpieza mecánica de desagües",
          "Corte y eliminación de raíces",
          "Disolución de grasa y aceite",
          "Inspección CCTV antes y después",
          "Servicio de emergencia disponible",
          "Limpieza de todos los tamaños de desagüe",
          "Mantenimiento preventivo",
        ],
        content: "Los desagües atascados pueden causar serias interrupciones en su hogar o negocio en Lanzarote. Canary Detect proporciona servicios rápidos y efectivos de desatasco usando equipos profesionales de agua a alta presión capaces de eliminar incluso las obstrucciones más difíciles.\n\nManejamos todo tipo de obstrucciones incluyendo: acumulación de grasa y aceite en desagües de cocina, acumulación de pelo y jabón en desagües de baño, eliminación de objetos extraños, intrusión de raíces de árboles, y depósitos de cal en tuberías antiguas.\n\nA diferencia del desatasco básico, siempre incluimos inspección CCTV antes y después del trabajo. Esto garantiza que identificamos la causa de la obstrucción, confirmamos que está completamente eliminada, y verificamos cualquier daño subyacente que pueda causar problemas futuros.\n\nNuestro equipo incluye máquinas de agua a presión de hasta 4000 PSI, 'golpeadores de tubería' mecánicos para obstrucciones sólidas, y cabezales de corte rotativos para eliminación de raíces. Servicio de emergencia disponible en todo Lanzarote - llámenos para servicio el mismo día.",
      },
      "pool-leak-repair": {
        title: "Reparación de Fugas en Piscinas Lanzarote",
        description: "Reparación profesional de fugas en piscinas en Lanzarote. Desde reparación de tuberías hasta sellado de grietas, reparamos todo tipo de fugas en piscinas con soluciones duraderas.",
        icon: Waves,
        heroImage: poolLeakRepairImg,
        galleryImages: [poolRepair1, poolRepair2, poolRepair3, poolRepair4, poolRepair5, poolRepair6],
        seo: {
          title: "Reparación Fugas Piscinas Lanzarote | Canary Detect",
          description: "Reparación de fugas en piscinas Lanzarote. Tuberías, grietas en el vaso, accesorios. Servicio completo de detección y reparación.",
          keywords: "reparación fugas piscina Lanzarote, reparación piscinas, reparación tuberías piscina, reparación vaso piscina, reparación accesorios piscina, arreglo fugas piscina Canarias"
        },
        features: [
          "Reparación de tuberías de piscina",
          "Reparación de grietas en el vaso",
          "Reemplazo de accesorios y focos",
          "Reparación de skimmers",
          "Reparación de líneas de retorno",
          "Reparación del desagüe principal",
          "Inyección de grietas estructurales",
          "Materiales de calidad garantizados",
        ],
        content: "Una vez que hemos localizado la fuga de su piscina en Lanzarote mediante nuestro servicio de [detección de fugas en piscinas](/es/servicios/deteccion-fugas-piscinas), nuestro equipo de reparación experimentado puede arreglarla correctamente. Nos especializamos en todo tipo de reparaciones de fugas en piscinas, asegurando que su piscina quede estanca y lista para usar.\n\n**Tipos de Fugas en Piscinas que Reparamos**\n\nLas fugas de piscina se presentan de muchas formas, y cada tipo requiere un enfoque de reparación diferente:\n\n**Grietas Estructurales del Vaso**: Con el tiempo, el movimiento del terreno volcánico de Lanzarote, los ciclos de expansión térmica y el asentamiento natural pueden crear fisuras en el vaso de hormigón o gunitado. Estas grietas permiten que el agua se filtre gradualmente al terreno circundante. Utilizamos inyección de resina epoxi y compuestos de reparación subacuática especializados para sellar grietas estructurales sin necesidad de vaciar la piscina.\n\n**Juntas de Tuberías y Fontanería**: Las conexiones entre tuberías de PVC, retornos, skimmers y la bomba son puntos vulnerables. Los adhesivos se degradan, las juntas tóricas se endurecen y las conexiones roscadas se aflojan con las vibraciones. Excavamos solo donde es necesario, reparamos o reemplazamos las secciones dañadas, y hacemos prueba de presión para confirmar cada reparación.\n\n**Accesorios: Skimmers, Retornos y Focos**: Los sellos alrededor de estos elementos penetrantes del vaso se deterioran con la exposición a productos químicos del agua y la radiación UV. Reemplazamos juntas, resellamos accesorios o sustituimos componentes completos según sea necesario.\n\n**Roturas de Liner**: En piscinas con revestimiento, los desgarros y pinchazos permiten que el agua escape detrás del liner. Aplicamos parches subacuáticos de vinilo o reemplazamos secciones completas del revestimiento.\n\n**Nuestro Proceso: De la Detección a la Reparación**\n\nAntes de cualquier reparación, confirmamos la ubicación exacta de la fuga mediante múltiples técnicas: pruebas de presión para aislar la sección afectada, pruebas con tinte para visualizar el flujo de agua, escucha acústica con hidrófonos para detectar el sonido del agua escapando, e [imagen térmica](/es/servicios/deteccion-fugas-agua) para identificar anomalías de temperatura en la estructura.\n\n**Desafíos Específicos de Lanzarote**\n\nReparar piscinas en Lanzarote presenta retos únicos que no se encuentran en climas continentales:\n\n• **Terreno volcánico**: El suelo basáltico y el picón crean movimientos irregulares que tensionan las estructuras de las piscinas de forma diferente a los suelos arcillosos convencionales\n• **Exposición UV intensa**: La radiación solar constante degrada juntas de goma, sellantes y tuberías de PVC expuestas mucho más rápido que en el norte de Europa\n• **Agua mineral**: El agua desalinizada de Lanzarote tiene un perfil mineral particular que puede acelerar la corrosión de ciertos materiales si el equilibrio químico no se mantiene correctamente\n• **Expansión térmica**: Las diferencias de temperatura entre el día y la noche provocan ciclos de expansión y contracción que fatigan las juntas y conexiones\n\n**Lo Que Recibe el Cliente**\n\nCada reparación incluye: informe técnico detallado con fotografías del antes y después, prueba de presión post-reparación documentada, garantía de calidad por escrito, y recomendaciones de mantenimiento preventivo. Todos los materiales utilizados son de grado profesional, diseñados específicamente para el clima de Lanzarote y el entorno químico de las piscinas.\n\n**Servicio Completo**: Como especialistas en detección de fugas de Lanzarote, ofrecemos un servicio completo de detección a reparación. Esto significa una empresa, una responsabilidad, y sin culpar a otros contratistas.",
      },
      "damp-moisture-mapping": {
        title: "Mapeo de Humedad con Infrarrojos Lanzarote",
        description: "Detección profesional de humedades en Lanzarote usando cámaras térmicas y medidores de humedad Protimeter. Servicio ideal antes de reformas o decoración. Visita y evaluación GRATUITA.",
        icon: Thermometer,
        heroImage: thermalUndergroundLeak,
        galleryImages: [thermalUndergroundLeak, risingDampWall],
        seo: {
          title: "Mapeo Humedad Infrarrojos Lanzarote | Canary Detect",
          description: "Detección de humedades Lanzarote. Imagen térmica y medidores Protimeter. Humedades por capilaridad, filtraciones, condensación. Visita GRATUITA.",
          keywords: "detección humedades Lanzarote, mapeo humedad infrarrojos, cámara térmica humedad, medidor humedad Protimeter, humedades por capilaridad, filtraciones agua, condensación paredes Canarias"
        },
        features: [
          "Visita y evaluación GRATUITA",
          "Cámaras de imagen térmica",
          "Medidores de humedad Protimeter",
          "Monitorización ambiental",
          "Informes detallados por escrito",
          "Ideal antes de reformas",
          "Identificación de la fuente exacta",
          "Evaluación de eficiencia energética",
        ],
        content: "**Detección de Humedad Oculta — Ideal Antes de Reformas**\n\nNuestro servicio detecta humedades y filtraciones de agua utilizando tecnología de última generación. Es ideal antes de pintar o decorar, pudiendo detectar tejados con fugas, humedades por capilaridad y problemas de humedad ocultos antes de que se conviertan en problemas graves.\n\n**Nuestra Metodología:**\n\n**Imagen Térmica**: Identifica diferencias de temperatura revelando zonas húmedas no visibles a simple vista, incluso detrás de superficies.\n\n**Medidores de Humedad**: Dispositivos no invasivos (ej. Protimeter) miden los niveles de humedad bajo las superficies (hasta 19mm de profundidad) para mapear las áreas afectadas con precisión.\n\n**Monitorización Ambiental**: Mide la humedad, el flujo de aire y los puntos de rocío para detectar riesgos de condensación.\n\n**Beneficios:**\n\n• Evita reparaciones innecesarias al identificar la fuente exacta y oculta\n• Permite seguir si la humedad se está extendiendo o reduciendo\n• Evalúa la eficiencia energética e identifica zonas que necesitan mejor ventilación o aislamiento\n\n**Causas Comunes Detectadas**: Tuberías con fugas, daños en tejados, condensación por alta humedad.\n\nOfrecemos evaluación y visita a domicilio COMPLETAMENTE GRATUITAS. Nuestro equipo proporciona evaluaciones precisas y no invasivas para proteger su propiedad de daños estructurales costosos y problemas de salud.",
      },
    };
  }

  // English version (default)
  return {
    "drain-detection": {
      title: "Drain & Pipe Surveys Lanzarote",
      description: "Professional CCTV drain and pipe inspection in Lanzarote. 6 camera systems for all pipe sizes - from bathroom pipes to main drains. Detailed video reports and accurate location tracing.",
      icon: Search,
      heroImage: drainDetectionImg,
      galleryImages: [drainDetection2, drainDetection3, pipeInspection2, pipeInspection3],
      seo: {
        title: "Drain & Pipe Surveys Lanzarote | CCTV | Canary Detect",
        description: "Professional drain and pipe CCTV inspection Lanzarote. 6 camera systems for all pipe sizes. Tracing, blockage detection & video reports.",
        keywords: "drain survey Lanzarote, pipe inspection Lanzarote, CCTV drain survey, pipe condition assessment, drain camera inspection, pre-purchase pipe survey Canary Islands"
      },
      features: [
        "6 camera systems for all pipe sizes",
        "High-definition video inspection",
        "Advanced locators for exact positioning",
        "Depth measurement capability",
        "Pipe condition assessment",
        "Joint & corrosion detection",
        "Pre-purchase property surveys",
        "Detailed video reports",
      ],
      content: "Canary Detect have 6 camera systems of all sizes, allowing us to survey a variety of pipe sizes from very small bathroom pipes to main drains. Our advanced locators can pinpoint the exact position of the camera head from the surface, along with depth measurements. This means we can not only view your pipes internally but also accurately locate their route from above ground.\n\nUsing high-definition push-rod cameras, we can inspect pipes from 25mm to 300mm diameter, identifying issues such as scale buildup, corrosion, joint failures, and structural damage. This is particularly valuable for pre-purchase property surveys in Lanzarote.\n\nUnlike many other companies, we combine our jetting with our cameras. This enables us to inspect the pipes before and after cleaning, and using the cameras while we work ensures nothing is missed. We have a range of equipment for cleaning and unblocking pipes, from jetting machines to 'pipe knockers' for more difficult obstructions.\n\nIf pipes are full of standing water, grease, or blockages, we may need to clean them first before the cameras can see clearly.",
    },
    "underground-detection": {
      title: "Leak Detection Lanzarote: Underground Pipe & Cable Detection",
      description: "Looking for expert leak detection in Lanzarote? Canary Detect offers advanced underground pipe and cable detection services across the island.",
      icon: Cable,
      heroImage: undergroundDetection1,
      galleryImages: [undergroundDetection1, undergroundDetection2, undergroundDetection3, undergroundDetection4, undergroundDetection5, undergroundDetection6],
      richContent: true,
      seo: {
        title: "Underground Leak Detection Lanzarote | Pipe Location",
        description: "Underground water leak detection Lanzarote. GPR radar, electromagnetic locators. Find buried pipes, cables & utilities before digging.",
        keywords: "leak detection Lanzarote, underground pipe detection, cable detection Lanzarote, GPR Lanzarote, water leak detection, buried pipe location, utility detection Canary Islands, underground leak repair"
      },
      features: [
        "Ground-penetrating radar (GPR)",
        "Electromagnetic pipe locators",
        "Thermal imaging",
        "Acoustic sensors",
        "Tracer gas detection",
        "Pipe cameras (CCTV)",
        "Utility mapping",
        "Depth estimation",
        "Construction site surveys",
        "As-built documentation",
      ],
      content: "## Underground Pipe Detection Lanzarote: Find What's Below Before You Dig\n\nWhether you are dealing with a suspected buried leak, planning construction work, or trying to understand what runs beneath your property, underground pipe and cable detection is the safest way to know exactly what is down there before anything breaks.\n\nCanary Detect provides specialist underground pipe detection services across Lanzarote. Using ground-penetrating radar, electromagnetic locators, tracer gas, and acoustic sensors, we map buried pipes and cables accurately and without excavation.\n\n## What Is Underground Pipe and Cable Detection?\n\nUnderground detection is the process of locating buried utilities, pipes, and cables without digging. The goal is to produce an accurate picture of what lies beneath the surface before any excavation, drilling, or repair work takes place.\n\nThis matters enormously in Lanzarote. The island's volcanic basalt rock is exceptionally hard and costly to break through, so unnecessary digging is expensive and time-consuming. An accurate underground survey means you only excavate where you need to.\n\n## Who Needs Underground Pipe Detection in Lanzarote?\n\nOur underground surveys are used by a wide range of clients across the island.\n\nHomeowners and villa owners who suspect a leak beneath a terrace, garden, or pool surround - where water is escaping but no visible signs point to a source above ground.\n\nBuilders and construction teams who need to know what utilities are buried on a site before groundwork begins, to avoid cutting through water mains or electrical cables.\n\nProperty managers and community presidents overseeing shared utility networks across urbanisations and apartment complexes, where buried pipe routes are unknown or poorly documented.\n\nPlumbers and contractors who need to trace a pipe route before drilling, chasing walls, or breaking ground.\n\n## Ground-Penetrating Radar (GPR) in Lanzarote\n\nGround-penetrating radar is our most powerful tool for mapping what lies below the surface. GPR sends electromagnetic pulses into the ground and reads the reflected signals to build a picture of buried structures.\n\nIn Lanzarote specifically, GPR performs well because the island's dry volcanic soil creates good signal reflection conditions, the basalt and pumice layers produce distinctive radar signatures, and the dry climate means ground conditions are consistent and predictable year-round.\n\nGPR can locate both metallic and non-metallic pipes, including HDPE and PVC water supply lines, and can estimate burial depths accurately. A single survey pass can identify multiple buried utilities at different depths simultaneously.\n\n## Electromagnetic Pipe and Cable Locators\n\nFor metallic pipes and electrical cables, electromagnetic locators work by inducing a signal onto the pipe or cable and then tracking it from the surface. This is highly accurate for metal water mains and irrigation pipes, electrical supply cables, telecom and data cables, and earthing conductors.\n\nWe trace buried cables and pipes over long distances without disturbing the ground, accurately marking routes and estimating depth at regular intervals. This is particularly valuable before any trenching or drilling work begins on a Lanzarote property or construction site.\n\n## Tracer Gas Injection for Buried Leaks\n\nWhere we know there is a leak in a buried pipe but need to find exactly where it exits, tracer gas is the most precise technique available. We pressurise the pipe with a safe, non-toxic gas mixture and then use a sensitive surface probe to detect where gas escapes through the ground above.\n\nThis technique works on pipes buried at any depth, including through concrete, tarmac, and through the volcanic rock common in Lanzarote construction. It is regularly used for buried supply pipes beneath pools and terraces, garden irrigation mains, underground connections to villas and apartments, and pipes running beneath communal areas in urbanisations.\n\n## Acoustic Detection for Underground Leaks\n\nAcoustic leak detection works by listening for the specific sound frequency that pressurised water makes as it escapes through a crack or joint in a buried pipe. Our ground microphones and correlators can pinpoint a buried leak to within centimetres, even when it is running at depth below concrete, soil, or paving.\n\nOn Lanzarote properties, acoustic detection is particularly effective on main supply pipes entering villas from the road, pipes running beneath pool surrounds and terraces, and underground sections of irrigation systems feeding gardens and landscaping.\n\n## CCTV Pipe Surveys: See Inside the Pipe\n\nBefore or after detecting a buried leak, we often recommend a CCTV internal survey of the affected pipe. Our [drain and pipe cameras](/services/drain-detection) can inspect pipes from 25mm upward, giving a clear visual record of the pipe's internal condition.\n\nA CCTV survey confirms exactly where a crack, joint failure, or corrosion is located, whether the pipe can be repaired or needs full replacement, the internal route and condition of the pipework ahead of any excavation, and provides documentary evidence for insurance claims and pre-purchase surveys.\n\n## Pre-Purchase Property Surveys in Lanzarote\n\nOne of the most common requests we receive is from buyers considering a villa or apartment in Lanzarote who want to understand the state of the underground services before completing a purchase.\n\nAn underground detection survey as part of a pre-purchase inspection identifies the routes of buried water pipes and any anomalies suggesting leaks, the location of electrical and telecom cables, whether any buried utilities are absent from documentation, and potential issues with irrigation and pool supply pipework.\n\nKnowing what lies below before you buy can save tens of thousands of euros in unexpected repair costs after purchase.\n\n## Construction Site Surveys: Utility Mapping Before You Dig\n\nFor builders and developers working on Lanzarote construction projects, a utility survey before groundwork is not just good practice. In many cases it is a legal requirement. Breaking through a buried electrical cable or water main is dangerous, expensive, and can halt an entire build.\n\nCanary Detect provides pre-dig utility surveys that map all known and suspected buried utilities across the site, produce marked drawings showing pipe and cable routes and depths, and identify any conflicts between planned excavation and existing buried services.\n\n## As-Built Documentation and Utility Mapping\n\nMany older properties in Lanzarote were built without accurate records of where pipes and cables run. This is especially common in villas and urbanisations built in the 1970s, 1980s, and 1990s.\n\nWe carry out full utility mapping surveys of existing properties, producing accurate as-built plans showing the routes and depths of all buried services. This documentation is invaluable for future maintenance, planning extensions or landscaping, community of owners management of shared infrastructure, and property sale documentation.\n\n## Service Areas: Underground Pipe Detection Across Lanzarote\n\nWe cover the whole island for underground pipe and cable detection surveys.\n\n### Puerto del Carmen and the Eastern Coast\n\nThe most densely developed part of the island, with a mix of older villas, modern complexes, and commercial properties. Many properties here have poorly documented underground pipework from original construction in the 1970s and 1980s.\n\n### Playa Blanca and the South\n\nNewer residential developments often have complex buried irrigation and pool supply networks. Construction site surveys for new builds in and around Playa Blanca are regularly requested by local builders and developers.\n\n### Costa Teguise\n\nUrbanisations here frequently require utility mapping across communal areas where original pipe routes are unknown or undocumented, particularly in older residential complexes.\n\n### Arrecife and Puerto del Rosario\n\nCommercial and mixed-use properties in the island's main urban centres, where utility density is highest and pre-dig surveys are most critical before any groundwork begins.\n\n### Tias, Yaiza, and Inland Villages\n\nOlder rural properties in these areas often have informal pipework installations with no documentation at all, making utility mapping particularly valuable before extension or landscaping work.\n\n## How Much Does Underground Detection Cost in Lanzarote?\n\nThe cost of an underground survey depends on the size of the area to be covered, the detection methods required, and the complexity of the buried services involved. A straightforward single-pipe trace for a residential property is considerably less than a full utility mapping exercise across a construction site.\n\nWe assess the situation before providing a quote, and we work on a transparent, no-surprise basis. All pricing is agreed upfront before any work begins. Our No Find, No Fee policy applies to leak location work - if we are searching for a specific buried leak and cannot locate it, you do not pay for the search.\n\n## Frequently Asked Questions: Underground Pipe Detection Lanzarote\n\n### How deep can GPR detect pipes in Lanzarote?\n\nIn typical soil and volcanic rock conditions, GPR can reliably detect buried utilities to around 3 to 4 metres depth. Greater depths are possible depending on ground conditions and the type of pipe or cable being located.\n\n### Can you detect plastic pipes underground?\n\nYes. GPR detects both metallic and non-metallic pipes, including plastic supply pipes and HDPE water mains. For non-metallic pipes where no signal can be induced electromagnetically, GPR is the primary detection method.\n\n### How long does an underground survey take?\n\nA typical residential property survey takes 2 to 4 hours depending on the area to be covered. Construction site utility surveys take longer and can be arranged over multiple visits to suit the build programme.\n\n### Do you provide a written report after the survey?\n\nYes. All underground surveys include a written report with findings, marked drawings or photographs showing pipe and cable routes, depth estimates at key points, and recommendations for any further investigation needed.\n\n### Do you work with builders and construction companies?\n\nYes. Canary Detect regularly works alongside builders, architects, and project managers to provide pre-dig utility surveys for Lanzarote construction projects of all sizes. We can provide documentation in the formats required for building permits and site management plans.\n\n### What happens if you cannot find the buried leak?\n\nOur No Find, No Fee policy covers all leak location work. If we carry out a dedicated underground leak search and cannot identify the source, you will not be charged for that element of the survey. We explain exactly what we found and recommend the most appropriate next steps.",
    },
    "water-leak-detection": {
      title: "Hidden Water Leak Detection Lanzarote",
      description: "Need to find a water leak in Lanzarote? We specialise in hidden water leak detection using advanced non-invasive technology.",
      icon: Droplets,
      heroImage: waterLeakDetectionImg,
      specialHeroImage: freeLeakConfirmationImg,
      richContent: true,
      galleryImages: [drainDetection4, drainDetection5, drainDetection6, drainDetection7],
      seo: {
        title: "Hidden Water Leak Detection Lanzarote | No Find No Fee",
        description: "Need to find a water leak in Lanzarote? Thermal imaging, tracer gas and acoustic sensors to locate hidden leaks fast. No Find, No Fee guarantee.",
        keywords: "water leak detection Lanzarote, water leak Lanzarote, find water leak Lanzarote, hidden water leak detection, water meter running leak, thermal imaging leaks, tracer gas detection, find leaks without damage, Lanzarote water leak specialist, water leak detection Canary Islands"
      },
      freeLeakSection: {
        enabled: true,
        highlights: [
          { icon: Home, text: "No visible signs - leaks go unnoticed" },
          { icon: HelpCircle, text: "Complex water systems - mains pumps tanks" },
          { icon: BadgeCheck, text: "FREE home visit and leak report" },
        ],
        includes: [
          "FREE leak confirmation test",
          "Professional written report",
          "Expert assessment of your property",
          "No obligation consultation",
        ],
        importantNote: "This service is to CONFIRM if you have a leak or not, with a detailed report. It is NOT a leak survey to pinpoint the exact location.",
        subNote: "For full leak pinpointing surveys, contact us for our comprehensive detection service.",
      },
      features: [
        "No Find, No Fee guarantee",
        "Thermal imaging cameras",
        "Tracer gas detection (GASENSE)",
        "High-sensitivity acoustic geophones",
        "Pipe microphones for cm accuracy",
        "Non-invasive methods",
        "Multi-technology confirmation",
        "Insurance-ready reports",
        "Digital location mapping",
      ],
      content: "## Introduction to Water Leaks\n\nAre you a homeowner or property manager in Lanzarote dealing with an unexplained rise in your water bills, or noticing damp spots with no obvious cause? Hidden water leaks affect properties of all types across the island, from private villas to community buildings and commercial premises. Early leak detection is the single most effective step you can take to protect your property and avoid costly repairs.\n\nAt Canary Detect, we provide a professional water leak detection service across Lanzarote and the wider Canary Islands. If you need to find a water leak in Lanzarote, our team uses over €80,000 in specialist equipment to locate the problem accurately and with minimal disruption to your property. We work with homeowners, property managers, and community administrators who need a reliable, professional answer to a difficult problem.\n\n## What Is a Hidden Water Leak?\n\nA hidden water leak is one that occurs out of sight, inside walls, beneath floors, or within concealed pipework, making it extremely difficult to find without specialist detection equipment. Water escaping from a pressurised pipe can travel significant distances before appearing at the surface, which means the visible signs of a leak are rarely in the same place as the actual problem.\n\n**Common signs of hidden water leaks include:**\n\n* Damp spots or wet patches on walls or ceilings\n* Peeling paint or bubbling wallpaper\n* Mould or mildew with no obvious moisture source\n* Yellowish-brown stains or warped flooring\n* A water meter that keeps moving even when all taps are switched off\n* Unexplained spikes in your water bill\n* A faint hissing or dripping noise when nothing is in use\n\nIf you notice any of these signs, professional water leak detection is the fastest and most cost-effective way to get a confirmed answer.\n\n## Why Lanzarote Properties Are Particularly Vulnerable\n\nProperties in Lanzarote face specific challenges that make hidden water leaks more common and more damaging than in many parts of mainland Europe.\n\nThe water supply across the Canary Islands is desalinated, which means it carries a higher mineral content than typical mainland water. Over time, this hard water accelerates corrosion inside metal pipes, particularly older copper and galvanised iron installations. Joints weaken, pipe walls thin, and small cracks develop that allow water to escape slowly and silently for months before any visible damage appears.\n\nLanzarote's volcanic terrain also creates a specific problem for anyone dealing with underground pipe leaks. Excavating through volcanic rock without a confirmed leak target is both expensive and highly disruptive. The cost of digging to find a buried pipe leak through guesswork alone can easily run into thousands of euros before the repair work even begins. Non-invasive leak detection by Canary Detect pinpoints the exact location before any digging starts, saving property owners significant disruption and unnecessary expense.\n\n## Summary: How to Confirm, Locate, and Address a Water Leak\n\nIf you suspect a hidden water leak, the first step is a free leak confirmation test. Check your water meter with all taps off and all appliances disconnected. If the meter is still moving, you almost certainly have an active leak somewhere in the system.\n\nOnce you have confirmed something is wrong, the next step is a full leak detection survey with Canary Detect. Our surveys identify the precise location of the leak using multiple detection technologies working in combination, so your repair contractor knows exactly where to work. There is no guesswork, no unnecessary digging, and no disruption beyond what is actually needed.\n\nDetecting a water leak early can prevent serious structural damage, mould growth, and escalating water bills. The sooner you call us, the more you save.\n\n## Insurance Reports\n\nCanary Detect operates with complete confidence in our detection capabilities. If we confirm you have an active leak but fail to locate it precisely, there is no charge. Our No Find, No Fee guarantee means there is zero financial risk in calling us.\n\nEvery water leak detection survey includes a detailed professional report with thermal photographs, acoustic measurements, and confirmed leak coordinates. These insurance-approved reports are accepted by all insurance companies across the Canary Islands for claims and repair authorisation, and are formatted to support the full claims process from start to finish.\n\n## Why Choose Canary Detect for Water Leak Detection?\n\nCanary Detect, also known locally as The Leaky Finders, is the specialist water leak detection service for Lanzarote. Our team works with homeowners, property managers, community administrators, and businesses across the island who need a reliable, professional solution.\n\nHidden water leaks are one of the most frustrating problems for property owners in Lanzarote. Your water meter is spinning, your bill keeps rising, yet there is no visible sign of where the water is going. This is exactly where our specialist leak detection service makes the difference.\n\nWe locate water leaks in all types of properties and situations. Whether the problem is in your water pipes, beneath a tiled floor, behind a wall, in your pool plumbing, beneath cables or buried service conduits, or along an underground supply line, Canary Detect has the technology and experience to pinpoint leaks accurately with minimum disruption. Clients across Lanzarote have saved thousands of euros by calling us early, before unnecessary excavation or demolition work begins.\n\nEvery leak detection survey we carry out includes a detailed written report with thermal photographs, acoustic measurements, and confirmed leak coordinates, accepted by insurers throughout the Canary Islands for claims and repair authorisation.\n\n## Detection Technologies We Use\n\nWe use a combination of advanced technologies to ensure accurate, non-invasive water leak detection on every Canary Detect survey:\n\n* **GASENSE tracer gas detection:** For buried pipes and concealed plumbing where acoustic methods alone cannot reach\n* **Geophones and acoustic sensors:** High-sensitivity listening devices that detect the sound of water escaping from pressurised pipes\n* **Infrared thermal imaging cameras:** Detect temperature changes caused by leaking water behind walls and under floors\n* **Pipe Mic:** Centimetre-accurate pipe microphone for precise leak positioning inside pipework\n* **Ground penetrating radar (GPR):** Locates buried pipes and confirms underground leak positions without digging\n\nCanary Detect continuously invests in cutting-edge technology, currently over €80,000 in specialist equipment, because locating invisible water leaks requires the right tools used by people who know exactly how to deploy them.\n\n### Our Multi-Technology Detection Process\n\nNo single technology works perfectly in every situation. That is why Canary Detect always uses multiple methods to confirm each leak location before marking a position for repair. This multi-technology approach is what separates us from companies that rely on a single tool.\n\n#### 1. Infrared Thermal Imaging\n\nOur high-resolution thermal imaging cameras detect minute temperature differences caused by leaking water behind walls, under floors, or in ceilings. Water cools surfaces in characteristic patterns that are invisible to the naked eye but clearly visible on thermal imaging. Even a slow, small water leak leaves a thermal trace that our equipment picks up reliably.\n\n#### 2. Tracer Gas Detection (GASENSE)\n\nWe pressurise your pipes with a safe nitrogen and hydrogen mixture (95%/5%). This gas is lighter than air and moves through even the smallest cracks, rising to the surface and emerging wherever water is also escaping. Our ultra-sensitive surface detectors then pinpoint exactly where gas is coming through, giving us a confirmed water leak location with centimetre accuracy.\n\n#### 3. Acoustic Detection\n\nHigh-sensitivity geophones amplify the sound of water escaping from pressurised pipes. Different leak types produce distinct acoustic signatures. Our trained technicians identify the difference between a faulty joint, a cracked pipe, and a loose fitting, so we are always working from accurate data rather than guesswork.\n\n#### 4. Pipe Microphones\n\nFor maximum precision, we introduce specialised microphones directly into pipework. This allows us to listen to water movement from inside the system and triangulate the exact leak position with centimetre-level accuracy.\n\n## What We Can Detect\n\nOur water leak detection surveys in Lanzarote cover all types of systems and structures, including:\n\n* Domestic water pipes (copper, PVC, polyethylene, galvanised iron)\n* Underground supply lines from the meter to the property\n* Swimming pools and their associated underground pipework\n* Service conduits containing cables, pipes, or other buried infrastructure\n* Buried cable trenches where water pipework runs alongside electrical installations\n* Community water systems and shared pipework\n* Irrigation systems and outdoor water features\n\nIf water is going somewhere it should not, Canary Detect can locate it.\n\n## The Step-by-Step Survey Process\n\nWhen we arrive at your property, we follow a systematic process:\n\n1. **Confirm a leak exists** through meter testing and pressure checks\n2. **Isolate different sections** to identify which area of the system is affected\n3. **Apply detection technologies sequentially**, starting with the least invasive method\n4. **Confirm with at least two independent technologies** before marking any location\n5. **Document everything** with thermal photographs, acoustic measurements, and precise GPS coordinates\n\nEvery step is designed to give you certainty before any repair work begins, keeping disruption to your property to the absolute minimum.\n\n## Areas We Cover Across Lanzarote\n\nCanary Detect provides water leak detection services across all areas of Lanzarote, including:\n\n* Puerto del Carmen and the Tías municipality\n* Playa Blanca and Yaiza\n* Costa Teguise and Teguise\n* Arrecife and surrounding areas\n* Puerto Calero and Marina Rubicón\n* Playa Honda and San Bartolomé\n* Northern Lanzarote including Haría and Órzola\n\nWe cover the whole island with fast response times. If you are unsure whether we cover your area, contact Canary Detect directly and we will confirm.\n\n## Frequently Asked Questions\n\n### Does Canary Detect work on swimming pools?\n\nYes. Pool leak detection is one of our core services in Lanzarote. We locate water leaks in pool shells, underwater light fittings, skimmers, return jets, and the underground pipework connecting your pool to the pump house. We use pressure testing, acoustic sensors, tracer gas, and CCTV to pinpoint the exact location before any tiles are lifted.\n\n### Will you need to break into my walls or floors?\n\nNo. Our detection methods are entirely non-invasive. We locate the water leak first using thermal imaging, tracer gas, acoustic sensors, and pipe microphones. Only after we have confirmed the exact location does any opening work begin, and that work is carried out with a precise target rather than by guesswork.\n\n### What does water leak detection cost in Lanzarote?\n\nWe provide clear, fixed-price quotes before any survey begins. The cost depends on the size of the property and the complexity of the system. Contact us for a free, no-obligation quote. Bear in mind that the cost of a Canary Detect survey is almost always recovered within weeks through water savings alone, before factoring in the property damage avoided.\n\n### What is the No Find, No Fee guarantee?\n\nIf Canary Detect confirms that an active water leak exists in your system but we cannot locate it precisely, you pay nothing for the survey. We stand behind our technology and our team completely. The No Find, No Fee guarantee is our commitment that you only ever pay for results.\n\n### Can you provide a report for insurance?\n\nYes. Every Canary Detect survey includes a full written report with thermal photographs, acoustic measurements, and confirmed leak coordinates. These reports are insurance-approved and accepted by all insurance companies across the Canary Islands for claims and repair authorisation.\n\n### Do you offer a 24/7 emergency service?\n\nYes. Canary Detect offers a 24/7 emergency water leak detection service across Lanzarote. If you have an urgent situation, contact us at any time and we will prioritise your call.\n\n## Prevention and Maintenance\n\nRegular inspections and proactive maintenance are the best way to stay ahead of water leak problems in Lanzarote, particularly given the hard water conditions and older pipe infrastructure found throughout the island.\n\n### Regular Inspections\n\nCheck your water meter regularly with all taps and appliances switched off. Look for damp spots, peeling paint, or any changes in your walls, floors, or ceilings. Early warning signs are easy to miss, but a monthly visual check takes only a few minutes and can save you thousands.\n\n### Monitoring Water Usage\n\nMonitor your water bills closely. An unexplained increase in monthly usage, even a small one, is often the first sign of a hidden water leak. Canary Detect offers a free leak confirmation test to give you certainty quickly and at no cost.\n\n### Professional Peace of Mind\n\nFor added peace of mind, particularly if you manage a holiday property or community building in Lanzarote, a professional leak check at the start of the season is a sensible investment. Contact Canary Detect today to discuss your property and find out how we can help you stay ahead of hidden water leaks across the Canary Islands. There is no fee for the initial consultation, and no obligation to proceed.",
    },
    "water-pipe-leak-detection": {
      title: "Water Pipe Leak Detection Lanzarote",
      description: "Need to find a water pipe leak in Lanzarote? We locate leaks in copper, PVC, polyethylene and galvanised iron pipes using CCTV inspection and pressure testing.",
      icon: Droplets,
      heroImage: pipeInspectionImg,
      galleryImages: [pipeInspection2, pipeInspection3, drainDetection2, drainDetection3],
      seo: {
        title: "Water Pipe Leak Detection Lanzarote | Canary Detect",
        description: "Water pipe leak detection in Lanzarote. Copper, PVC, polyethylene and galvanised iron pipes. CCTV inspection, pressure testing and underground pipe location.",
        keywords: "water pipe leak Lanzarote, copper pipe leak, PVC pipe leak, water pipe repair, CCTV pipe inspection, pipe pressure testing, plumber leaks Lanzarote"
      },
      features: [
        "Internal CCTV pipe inspection",
        "Static pressure testing",
        "Underground pipe detection",
        "Pipe material diagnostics",
        "Plumbing system mapping",
        "Pipe condition assessment",
        "Faulty joint location",
        "Detailed technical reports",
      ],
      richContent: true,
      content: "## Water Pipe Leak Detection Lanzarote: Pipe-by-Pipe, Leak by Leak\n\nNot all leaks are the same. The right approach to finding a water pipe leak depends on the type of pipe, where it runs, how old it is, and what material it is made from. At Canary Detect, we specialise in pipe-specific leak detection, using the correct tools for each situation rather than applying a one-size-fits-all approach.\n\n## What Is Water Pipe Leak Detection?\n\nWater pipe leak detection is the process of locating a leak within the pipework of a property without unnecessary demolition or excavation. Using a combination of pressure testing, CCTV inspection, tracer gas, acoustic sensors, and thermal imaging, we identify exactly which pipe is leaking and precisely where the fault is located.\n\nKnowing the exact position before any repair work begins saves property owners in Lanzarote enormous time and money. Without accurate detection, contractors can spend days opening walls and floors looking for a leak that Canary Detect can pinpoint in hours.\n\n## The Pipe Types We Deal With in Lanzarote\n\nProperties across Lanzarote use a variety of pipe materials, and each material has its own failure patterns and detection challenges.\n\n### Copper Pipes\n\nCopper was the standard for quality installations across the island for decades. Copper pipes can develop leaks from galvanic corrosion near brass fittings, vibration fatigue at elbows and bends, or damage from the aggressive desalinated water supply used in Lanzarote. Thermal imaging is particularly effective at locating copper pipe leaks behind walls and beneath floors.\n\n### PVC and CPVC Pipes\n\nPVC plastic pipes are widely used in modern Lanzarote installations. They typically fail at adhesive joints, especially where the original installation was rushed or used incorrect solvent. UV exposure on exterior sections also causes degradation over time. Pressure testing is the most reliable method for isolating faulty PVC joints.\n\n### Polyethylene (PE) Pipes\n\nPolyethylene pipes are commonly used for underground supply connections running from the meter to the property. These pipes can be damaged by gardening tools, tree roots, or ground movement. Our tracer gas technology is ideal for locating buried PE pipe leaks without excavation.\n\n### Galvanised Iron Pipes\n\nGalvanised iron pipework is found in older Lanzarote properties, particularly those built in the 1970s and 1980s. These pipes develop internal corrosion that gradually reduces flow before eventually perforating. CCTV internal inspection reveals the true condition of galvanised pipes and helps plan renovation before a leak causes serious damage.\n\n## How Lanzarote's Water Supply Affects Pipes\n\nThe water supply across the Canary Islands is desalinated, which means it carries a higher mineral content than typical mainland European water. Over time, this hard water accelerates corrosion inside metal pipes, particularly older copper and galvanised iron installations. Joints weaken, pipe walls thin, and small cracks develop that allow water to escape slowly and silently for months before visible damage appears.\n\nThis makes water pipe leak detection particularly important in Lanzarote. The combination of aggressive water chemistry and often ageing pipework means leaks are common, and they tend to worsen quickly once they start.\n\n## Signs You Have a Water Pipe Leak in Lanzarote\n\nMany homeowners and property managers do not realise they have a pipe leak until significant damage has already occurred. Watch for these signs:\n\nUnexplained increases in your water bill, even a small pipe leak can waste thousands of litres per month. Damp patches appearing on walls or floors with no obvious cause. The sound of running water when all taps are off. A water meter that keeps moving when everything in the property is switched off. Low water pressure at taps and showers. Mould or mildew appearing in unusual places. Warm patches on a floor above a hot water pipe that is leaking.\n\nIf you notice any of these signs, the earlier you call Canary Detect for a pipe leak survey, the less damage will occur and the lower your eventual repair bill will be.\n\n## Water Pipe Pressure Testing\n\nPressure testing is the starting point for understanding the condition of any pipe system. Canary Detect uses several approaches:\n\nStatic pressure testing involves isolating sections of pipework and monitoring pressure over a set period to detect even the smallest active leaks. Differential testing compares actual consumption with expected flow to quantify the rate of water loss. Isolation testing identifies exactly which section or zone of the property's system is affected, allowing us to focus detection work precisely.\n\nPressure testing confirms a leak exists and helps us understand its severity before moving on to precise location methods.\n\n## CCTV Internal Pipe Inspection\n\nOur push-rod CCTV cameras can enter pipes from 25mm diameter upwards, providing high-definition internal footage of the pipe's condition. CCTV inspection is particularly valuable for older pipes where internal corrosion or structural failure is suspected.\n\nCCTV surveys provide direct visual confirmation of cracks, corrosion and scale deposits, precise location of faulty joints and pinhole leaks, overall condition assessment to support maintenance planning, and video documentation for insurance claims and repair quotes.\n\nFor galvanised iron and older copper installations, we often recommend a CCTV survey as part of any leak detection visit to assess the wider condition of the pipework, not just the current leak.\n\n## Tracer Gas for Buried Pipe Leaks\n\nWhere a pipe leak is underground or buried beneath concrete, tracer gas is the most precise location method available. We pressurise the pipe with a safe, non-toxic nitrogen and hydrogen gas mixture. The gas escapes wherever water is also escaping, rises through the ground, and is detected at the surface using a sensitive probe.\n\nThis technique can locate buried pipe leaks beneath terraces, driveways, gardens, and pool surrounds without any excavation. It works through virtually any ground surface and is unaffected by the depth of the pipe.\n\n## Acoustic Leak Detection for Water Pipes\n\nAcoustic sensors listen for the specific sound that pressurised water makes as it escapes through a crack or faulty joint. Different pipe materials transmit this sound differently, and our trained technicians know how to interpret the acoustic signatures of copper, plastic, and metal pipe leaks.\n\nFor longer pipe runs, acoustic correlators compare the sound signal from two points along the pipe to calculate the exact leak position mathematically, locating it to within centimetres.\n\n## Thermal Imaging for Concealed Pipe Leaks\n\nThermal imaging cameras detect the temperature changes caused by leaking water behind walls and beneath floors. Water from a leaking pipe cools the surrounding surfaces in characteristic patterns that are invisible to the naked eye but clearly visible to our thermal cameras.\n\nThis is particularly effective for leaking hot water pipes, underfloor heating systems, and any pipe running through a wall or ceiling where the temperature difference is large enough to show clearly on the thermal image.\n\n## Underground Water Pipe Detection in Lanzarote\n\nMany serious pipe leaks in Lanzarote occur in the underground supply connection running from the street meter to the property. These buried pipes are often old, and ground movement or excavation damage causes them to fail silently, with water escaping into the ground for months before a homeowner notices.\n\nFor underground pipe leaks, Canary Detect uses electromagnetic locators to trace metallic pipes, ground-penetrating radar for non-metallic plastic pipes, tracer gas for precise leak location in buried pipework, and acoustic correlators for pipe position triangulation.\n\n## Water Pipe Leak Detection Service Areas\n\nWe cover all areas of Lanzarote for water pipe leak detection surveys.\n\n### Puerto del Carmen\n\nThe largest resort area on the island, with a huge variety of property types from 1970s villas to modern apartments. Older properties here frequently have galvanised iron or early copper pipework that is now showing its age.\n\n### Playa Blanca\n\nNewer developments but with complex underground supply networks. PE pipe failures under terraces and gardens are among the most common calls we receive from the south of the island.\n\n### Costa Teguise\n\nA mix of older urbanisations and newer complexes. Community water systems with shared pipework are common here, and pinpointing where a communal pipe is leaking requires careful isolation and detection work.\n\n### Arrecife and Puerto del Rosario\n\nCommercial and residential properties in the island's urban centres. Leaking pipes in commercial properties can result in very high water bills and rapid damage to business premises.\n\n### Tias, Yaiza, and Rural Properties\n\nRural properties often have older, less well-documented pipe systems. Pre-purchase pipe surveys are commonly requested in this area before property transactions complete.\n\n## Technical Reports and Insurance Support\n\nEvery Canary Detect water pipe leak detection survey produces a full written report including the type of pipe affected, the exact leak location with photographs and coordinates, the probable cause of the failure, recommended repair options, and an assessment of the wider pipe system condition.\n\nThese reports are accepted by all major insurance companies operating in the Canary Islands for claims and repair authorisation. They are also useful when obtaining comparative quotes from repair contractors, as each contractor has a precise brief rather than having to make assumptions.\n\n## Frequently Asked Questions: Water Pipe Leak Detection Lanzarote\n\n### How do I know if my water pipe is leaking?\n\nCheck your water meter with all taps and appliances switched off. If the meter is still moving, you have an active leak. Other signs include damp patches, unexplained bill increases, and the sound of running water when nothing is in use. Contact Canary Detect for a free confirmation check.\n\n### Can you detect a leak in a buried pipe without digging?\n\nYes. We use tracer gas, acoustic correlators, and ground-penetrating radar to locate buried pipe leaks without excavation. We only recommend digging once we have confirmed the exact leak position.\n\n### How much does water pipe leak detection cost in Lanzarote?\n\nCosts depend on the size of the property and the complexity of the pipe system. We provide a clear quote before any survey begins. The cost of detection is almost always recovered quickly through reduced water bills and avoided repair costs from unnecessary excavation.\n\n### What is your No Find, No Fee policy?\n\nIf Canary Detect confirms an active pipe leak exists but cannot locate it precisely, you pay nothing for the survey. We stand behind our technology and our team. No results means no charge.\n\n### Do you work on community water systems?\n\nYes. We regularly work with community presidents and property managers on shared pipe systems across Lanzarote's urbanisations and apartment complexes. Isolating which section of a communal system is leaking requires careful methodology, and we have extensive experience with these situations.\n\n### Can I get a pipe inspection as part of a pre-purchase survey?\n\nYes. A water pipe condition report from Canary Detect as part of a pre-purchase property inspection is a sensible investment. We identify any existing leaks, assess the general condition of the visible and accessible pipework, and flag any sections that may require attention in the near future.",
    },
    "pool-leak-detection": {
      title: "Swimming Pool Leak Detection Lanzarote",
      description: "Pool losing water? Professional swimming pool leak detection in Lanzarote — we don't just confirm a leak, we pinpoint its exact location using acoustic, CCTV, and tracer gas technology.",
      icon: Waves,
      heroImage: poolLeak1,
      galleryImages: [poolLeak8, poolLeak7, poolLeak10, poolLeak11, poolLeak9, poolLeak4, poolLeak5, poolLeak6],
      seo: {
        title: "Swimming Pool Leak Detection Lanzarote | Canary Detect",
        description: "Pool losing water? Professional swimming pool leak detection in Lanzarote. Acoustic, pressure & CCTV testing to pinpoint exact leak location.",
        keywords: "swimming pool leak detection Lanzarote, pool losing water, pool leak detection Canary Islands, pool pipe leak, pool shell leak, pool leak Playa Blanca, pool leak repair service"
      },
      features: [
        "Acoustic testing of all fittings",
        "Pool shell testing (acoustic & electronic)",
        "Light fitting inspection",
        "Pump, filter & housing testing",
        "Pressure testing of pipework",
        "CCTV internal pipe inspection",
        "Vacuum leak location",
        "H2/N2 gas detection",
        "Insurance-ready reports",
      ],
      richContent: true,
      content: "Our swimming pool leak detection surveys in Lanzarote go beyond simply confirming that a leak is present. Unlike other companies that only identify which section is affected, Canary Detect pinpoints the exact position of the leak using multiple detection methods, so you know precisely what needs repairing before a single tile is lifted.\n\n## Is Your Swimming Pool Losing Water?\n\nIf your pool water level is dropping day after day, it may not always be down to evaporation. Lanzarote's climate does cause some natural water loss, but anything beyond 1 to 2mm per day typically points to a hidden leak somewhere in your pool structure or plumbing systems.\n\nThe simplest check is the bucket test: fill a bucket with pool water and leave it on a pool step. After 24 hours, compare the water level inside the bucket with the pool water level. If the pool drops more than the bucket, you almost certainly have a leak rather than evaporation. A water meter check is another useful step: turn off all pool equipment and monitor the meter. If it continues to move, water is escaping somewhere in the system.\n\nOther signs to watch for include: a pool level that keeps falling even after topping up; unexpectedly high water bills; damp ground or sinkholes around the pool area; loose or lifting tiles; and pool equipment struggling to maintain prime. If you notice any of these warning signs, arranging professional pool leak detection promptly will prevent the leak problem from developing into costly structural damage.\n\n## Why Property Owners and Property Managers Choose Professional Pool Leak Detection\n\nTrying to find a pool leak without specialist equipment rarely works. Without professional leak detection services, water leaks in swimming pools are extremely difficult to locate accurately because they are often hidden inside the shell structure, within underground pipework, or deep inside the pump housing.\n\nLeft undetected, even a slow hidden leak causes serious problems. Water escaping from a pool can undermine surrounding ground, cause structural damage and water damage to the pool shell and surrounding terrace, and lead to further damage to fittings, tiles, and pipework. On top of this, the ongoing water loss adds to already high water costs in Lanzarote, where water is desalinated and more expensive than in mainland Europe.\n\nProperty owners and property managers across Lanzarote contact Canary Detect regularly after weeks of topping up their pools without understanding why the water keeps disappearing. Professional pool leak detection resolves the issue properly, giving you a clear answer and the information needed to arrange repairs. It is also one of the most effective ways of preventing water damage to your property in the long term.\n\n## Common Locations of Hidden Pool Leaks\n\nSwimming pool leaks can occur in several different places, and knowing where to look is an important part of efficient detection. The most common locations for hidden water leaks in Lanzarote swimming pools include:\n\nPool shell cracks: Hairline cracks in the concrete or render of the pool shell allow water to seep slowly into surrounding soil. These are often invisible to the naked eye but show clearly on acoustic and thermal imaging scans.\n\nLight fitting seals: The rubber seals around underwater light fittings degrade over time, especially with UV exposure and chemical treatment. A failing light seal can lose significant volumes of water over a week without any obvious visible sign.\n\nReturn fittings and skimmers: The seals where return jets, skimmers, and main drain fittings penetrate the pool shell are under constant stress from water pressure and thermal expansion. They are one of the most common sources of pool leaks in Lanzarote.\n\nUnderground pool pipework: The pipes running between the pool and the pump house are buried underground and invisible from the surface. Leaks in these pressurised pipes are among the hardest to find without specialist equipment, and are one of the primary reasons professional pool leak detection is essential.\n\nPump and filter connections: Joints and connections within the pump housing can develop slow leaks that go unnoticed because they are enclosed within the equipment area. We test every connection as part of our standard survey.\n\n## The Canary Detect Pool Leak Detection Process\n\nOur pool leak detection process is thorough and systematic, testing every component of your pool from the shell outward. Here is how the entire process works from start to finish:\n\nShell and structural testing: We start with acoustic testing around all fittings, the pool shell, and light fittings, listening carefully for the sound of water escaping through cracks or failing seals. Our acoustic sensors are sensitive enough to detect even the smallest leak signature.\n\nPool equipment and pump housing testing: The pump, filter, and all fittings in the pump housing are tested thoroughly. Pool equipment connections are a common source of hidden water leaks that is frequently overlooked, so we include this as a standard part of every survey.\n\nPressure testing of pipework: All sections of pressurised pipes are pressure tested to identify exactly which section is holding and which is not. This is a key step in the leak detection process because it isolates the affected area before we apply more targeted methods.\n\nElectronic shell testing: Electronic testing of the pool shell identifies structural weaknesses and hidden leaks that acoustic testing alone might miss.\n\nOnce a leaking section has been identified, we use CCTV cameras for internal pipe inspection, internal pipe hydrophones, external geophones, vacuum leak location, and H2/N2 gas insertion and detection to pinpoint the exact leak location.\n\n## The Technology We Use to Accurately Locate Leaks\n\nCanary Detect invests in the most advanced technology available. Using the right tool for each situation is what leads to accurate results every time. Our water leak detection and pool leak detection equipment includes:\n\nThermal imaging technology: Our thermal cameras detect tiny temperature differences caused by water escaping from pool structures. Thermal imaging is especially effective for locating hidden leaks in shell linings, light fittings, and where pipework runs close to the surface.\n\nAcoustic sensors: Water escaping from pressurised pipes produces a distinct sound. Our high-sensitivity acoustic sensors detect this even when the leak is buried underground, allowing us to accurately locate leaks without digging exploratory trenches.\n\nTracer gas detection: For concealed pipework where acoustic and thermal imaging methods cannot reach, we use tracer gas technology. A safe nitrogen and hydrogen mix is introduced into the pressurised pipes, and the gas escapes at the exact leak point where it is detected by our surface instruments. Tracer gas is one of the most reliable methods available for finding hidden leaks deep in underground pool plumbing systems.\n\nDye testing: A dye test allows us to visualise the movement of water around fittings, returns, lights, and shell surfaces, making it straightforward to confirm exactly where water is entering or leaving the pool structure.\n\n## No Costly Excavation Work Without a Confirmed Target\n\nOne of the main reasons property owners and managers choose Canary Detect is our ability to find hidden leaks fast before any digging begins. Our approach means we never carry out costly excavation work or start breaking walls until we know the exact leak location.\n\nThis avoids unnecessary disruption to your property, keeps repair costs down, and gives the repair team a confirmed target rather than guesswork. For occupied villas and holiday properties in Lanzarote, minimising disruption is essential, and our detection and repair process is designed to deliver precisely that.\n\nWhere leaks need immediate attention, we advise you clearly. Where a leak is slow and can be monitored, we provide expert advice on timing so you can plan repairs at a convenient time.\n\n## What Does Pool Leak Detection Cost in Lanzarote?\n\nWe operate with transparent pricing. The leak detection cost for a swimming pool survey depends on the pool size and complexity of your plumbing systems, but you will always receive a clear quote before work begins.\n\nIf you are weighing up the detection cost against simply continuing to top up the pool, consider what water loss is actually costing you each week. For most pools with an active leak, the cost of a professional leak detection service is recovered within a few weeks of water saved, and that is before taking into account the cost of preventing structural damage and avoiding expensive repair solutions further down the line.\n\n## After the Survey: Repair Solutions and Insurance Claims\n\nEvery pool leak detection survey includes a detailed professional report documenting the survey method, leak locations found, and recommended repair solutions. This report is formatted to support insurance claims, which is frequently required for properties in Lanzarote.\n\nThe repair process is entirely your choice. You are free to use your own repair contractor to repair leaks once they have been located, or our plumbing services team can manage the complete detection and repair process from start to finish. Either way, you receive a clear, accurate survey that tells your repair team exactly where to work, saving time and avoiding unnecessary costs.\n\n## Canary Detect: Expert Pool Leak Detection Across Lanzarote\n\nCanary Detect, also known locally as The Leaky Finders, provides professional leak detection services across the whole of Lanzarote, from Playa Blanca and Puerto del Carmen to Costa Teguise and beyond. Our expert leak detection service is trusted by homeowners, holiday villa owners, and property managers throughout the island.\n\nWhether you have a pool level that keeps dropping, a water bill that makes no sense, or a hidden water leak problem that has been difficult to track down, our professional leak detection team gives you a clear and honest answer. Contact us today for a free consultation and expert advice on the right next step for your pool.",
    },
    "leak-repair": {
      title: "Leak Detection and Repair Services in Lanzarote",
      description: "Canary Detect offers expert leak detection and repair services throughout Lanzarote. We provide comprehensive solutions for homeowners, businesses, and property managers who need to identify and fix water leaks quickly and efficiently.",
      icon: Wrench,
      heroImage: leakRepairBa4,
      heroAlt: "Leak Repair Lanzarote",
      galleryImages: [leakRepairBa1, leakRepairBa2, leakRepairBa3, leakRepairBa4],
      seo: {
        title: "Leak Repair Lanzarote | Water & Pool Pipe Repair",
        description: "Leak repair Lanzarote. Water pipe, pool pipe, underground leak repair. Emergency service. Complete detection to repair.",
        keywords: "leak detection and repair Lanzarote, leak repair Lanzarote, water leak repair Canary Islands, pool leak repair, underground leak repair, emergency leak repair Lanzarote, leak detection Lanzarote"
      },
      features: [
        "Professional leak detection across Lanzarote",
        "Advanced technology (€80,000+ equipment)",
        "99% success rate in locating leaks",
        "No Find, No Fee guarantee",
        "Pipe, pool, drain & underground repairs",
        "Emergency leak repair service",
      ],
      richContent: true,
      content: "## Leak Repair Lanzarote: Find It, Fix It, Sign It Off\n\nWhen you have a leak in Lanzarote, you need one company that can handle everything from the initial survey right through to a finished, tested repair. That is exactly what Canary Detect provides. We are the Leaky Finders, Lanzarote's specialist leak detection and repair team, with the combined experience and equipment to locate hidden leaks and fix them properly.\n\nNo unnecessary digging. No passing the job between contractors. One survey, one repair, one detailed report.\n\n## Why Lanzarote Properties Lose Water\n\nLanzarote's climate and geology create conditions that wear down pipework faster than most of Europe. Hard, mineral-rich desalinated water corrodes copper and galvanised pipes from the inside. The volcanic bedrock shifts subtly with temperature changes, stressing joints and connections. UV radiation degrades rubber seals and surface plumbing at speed. Tiles, screed and concrete floors trap leaks out of sight for months or years before water bills reveal the problem.\n\nBy the time most homeowners in Lanzarote realise there is a leak, significant water has already been lost. A professional leak survey is the quickest and most cost-effective way to confirm what is happening and where.\n\n## Our Leak Repair Process\n\n### Step 1 - The Leak Survey\n\nEvery repair job begins with a thorough leak survey. We assess the property, identify the most likely leak zones, and decide which detection methods to apply. Surveys typically take one to three hours depending on property size. In most cases we can complete the survey and pinpoint the exact leak location in a single visit.\n\nWe carry out surveys across all property types in Lanzarote, from private homes through to commercial buildings, community pools, and underground supply lines.\n\n### Step 2 - Detection and Confirmation\n\nOnce the survey tells us where to look, we apply the right technology to confirm the leak. This may include thermal imaging cameras to spot temperature anomalies under floors and behind walls, acoustic sensors to listen for the sound of water escaping pressurised pipes, tracer gas injection to follow the leak path through hidden pipework, or pressure testing to isolate which section of the system is failing.\n\nWe do not guess. We confirm. Every repair we carry out is based on a verified leak location.\n\n### Step 3 - Planning the Repair\n\nBefore any tools come out, we explain exactly what the repair involves - what will be opened up, what materials we will use, how long the job will take, and what the finished result will look like. Transparent pricing, no hidden extras. Clients have peace of mind before we start.\n\nIf tiles need to be lifted, we minimise the area disturbed. If pipes need to be accessed behind a wall, we work precisely so reinstatement is straightforward.\n\n### Step 4 - Carrying Out the Repair\n\nOur team fixes all types of leaks found in Lanzarote properties:\n\n**Pipe repairs** - copper, PVC, polyethylene and galvanised iron pipes, including joints, elbows and compression fittings that have failed over time.\n\n**Plumbing repairs** - leaking taps, isolating valves, stop taps, shower connections, washing machine feeds and waste connections, and water heater supply lines.\n\n**Pool repairs** - shell crack injection, skimmer seals, return fittings, underwater pipes and pressure-tested plumbing circuits. See our dedicated [pool leak repair](/services/pool-leak-repair) page for full details.\n\n**Underground pipe repairs** - buried supply lines under gardens, driveways and community areas. We only excavate where the leak is confirmed, saving you thousands in unnecessary groundwork.\n\n**Tile and screed repairs** - where tiles need to be lifted to access pipes beneath a floor, we work carefully to limit the area disturbed. We can advise on reinstatement options once the job is done.\n\n### Step 5 - Testing and Sign-Off\n\nEvery repair is pressure tested after completion to confirm it works and holds. We do not leave until we are confident the leak has been resolved. Canary Detect provides a detailed written report covering the location of the leak, the repair method used, materials installed, and the post-repair test results.\n\nThis report is accepted by insurance companies and is good evidence for claims relating to water damage caused by the leak.\n\n## Types of Properties We Work On\n\nCanary Detect carries out surveys and repairs across every kind of property in Lanzarote:\n\n**Villas and private homes** - both owner-occupied and holiday rental. We work around guest bookings and can arrange early or late appointments where needed.\n\n**Apartments and urban properties** - including shared supply lines that serve multiple units. We identify whether the leak is within the property or in a communal system.\n\n**Community developments and urbanisations** - surveys on communal pool circuits, irrigation systems, underground mains feeds, and shared plumbing infrastructure.\n\n**Commercial properties** - hotels, restaurants, shops and offices. We are happy to work outside opening hours to avoid disruption to your business.\n\n## Lanzarote Areas We Cover for Leak Repair\n\nWe cover the whole island. Jobs have been completed in:\n\n### Puerto del Carmen\n\nThe largest resort on the island. High demand for surveys and repairs in both old-build properties and modern complexes.\n\n### Playa Blanca\n\nSouthern Lanzarote's growing resort, with a mix of private properties and hotel complexes across Rubicón Marina, Papagayo and the wider area.\n\n### Costa Teguise\n\nEstablished resort area with a large number of ageing community developments where surveys are increasingly in demand.\n\n### Arrecife and Puerto Calero\n\nThe capital and marina area. Older properties with original plumbing often benefit from a check even before a leak becomes obvious.\n\n### Tías, Yaiza and Across the Island\n\nNo property is too remote. If you can give us an address, we can arrange a survey and repair visit.\n\n## What Does Leak Repair Cost in Lanzarote?\n\nCosts vary depending on the complexity of the leak, how accessible the pipes are, and the extent of the work required. What we can say clearly:\n\nYou only pay if we find the leak. Our No Find, No Fee policy means that if our surveys do not locate your leak, you do not pay for the detection work.\n\nCosts are quoted transparently before any work begins. There are no surprise invoices. Clients regularly tell us they saved thousands compared to what a general builder would have charged, because we know exactly where to dig, cut, or access before the work starts.\n\n## Frequently Asked Questions About Leak Repair in Lanzarote\n\n### How long does a leak repair take?\n\nMost jobs are completed within a day. Complex underground pipe work or jobs involving significant tile lifting may take two to three days. We give you a realistic timescale before we start.\n\n### Do I need a survey before you can carry out a repair?\n\nYes. Every repair starts with a survey so we can confirm the exact location before anything is opened up. This keeps costs predictable and protects you from unnecessary disruption.\n\n### What if the leak is in my pool?\n\nPool leak detection and repair is one of our core services. We use dye testing, pressure testing and acoustic methods to identify pool leaks, and our team can fix shell cracks, pipe joints, fittings and skimmer seals. Visit our [pool leak repair](/services/pool-leak-repair) page for details.\n\n### Can you provide a report for my insurance claim?\n\nYes. Every completed repair comes with a detailed written report documenting the leak location, cause, repair method and post-repair test results. This is accepted by most insurance providers and gives you a clear record of the work carried out.\n\n### Will tiles be damaged during the repair?\n\nWe work to minimise tile disturbance. When tiles do need to be lifted to access pipes beneath, we remove the minimum area necessary and work carefully. We can advise you on matching tiles and reinstatement options. Many Lanzarote properties use standard tile formats that are easy to source locally.\n\n### Do you work on villas and apartments?\n\nYes. Canary Detect works across all property types: villas, apartments, townhouses, commercial properties and community developments. If you are unsure whether the leak is your responsibility or a communal issue, our surveys will confirm the source and ownership of the affected pipework.",
    },
    "drain-unblocking": {
      title: "Drain Unblocking Lanzarote",
      description: "Professional drain unblocking services in Lanzarote. Blocked drain? We clear all types of blockages quickly and effectively using high-pressure jetting and specialist equipment.",
      icon: Search,
      heroImage: drainUnblockingImg,
      galleryImages: [drainUnblocking1, drainDetection2],
      seo: {
        title: "Drain Unblocking Lanzarote | Emergency | Canary Detect",
        description: "Drain unblocking Lanzarote. Blocked drain cleared fast with high-pressure jetting. Kitchen, bathroom, main drains. Emergency available.",
        keywords: "drain unblocking Lanzarote, blocked drain Lanzarote, drain clearance, drain jetting, emergency drain unblocking, blocked toilet, blocked sink Canary Islands"
      },
      features: [
        "High-pressure water jetting",
        "Mechanical drain cleaning",
        "Root cutting & removal",
        "Grease & fat dissolution",
        "CCTV before & after inspection",
        "Emergency callout available",
        "All drain sizes cleared",
        "Preventative maintenance",
      ],
      content: "Blocked drains can cause serious disruption to your home or business in Lanzarote. Canary Detect provides fast, effective drain unblocking services using professional high-pressure jetting equipment capable of clearing even the most stubborn blockages.\n\nWe handle all types of blockages including: grease and fat buildup in kitchen drains, hair and soap accumulation in bathroom drains, foreign object removal, tree root intrusion, and scale deposits in older pipes.\n\nUnlike basic drain clearance, we always include CCTV inspection before and after the work. This ensures we identify the cause of the blockage, confirm it's completely cleared, and check for any underlying damage that could cause future problems.\n\nOur equipment includes high-pressure jetting machines up to 4000 PSI, mechanical 'pipe knockers' for solid blockages, and rotating cutting heads for root removal. Emergency drain unblocking is available across Lanzarote - call us for same-day service.",
    },
    "pool-leak-repair": {
      title: "Pool Leak Repair Lanzarote",
      description: "Professional swimming pool leak repair in Lanzarote. From pipe repairs to shell crack fixing, we repair all types of pool leaks with lasting solutions.",
      icon: Waves,
      heroImage: poolLeakRepairImg,
      galleryImages: [poolRepair1, poolRepair2, poolRepair3, poolRepair4, poolRepair5, poolRepair6],
      seo: {
        title: "Pool Leak Repair Lanzarote | Pipe & Shell Repair",
        description: "Pool leak repair Lanzarote. Pipe repair, shell crack repair, fitting replacement. Complete detection and repair service.",
        keywords: "pool leak repair Lanzarote, swimming pool repair, pool pipe repair, pool shell repair, pool fitting repair, pool leak fix Canary Islands, pool leak detection and repair"
      },
      features: [
        "Pool pipe repairs",
        "Shell crack repairs",
        "Fitting & light replacement",
        "Skimmer repairs",
        "Return line repairs",
        "Main drain repairs",
        "Structural crack injection",
        "Quality materials guaranteed",
      ],
      content: "Once we've pinpointed your pool leak in Lanzarote using our [swimming pool leak detection](/services/pool-leak-detection) service, our experienced repair team can fix it properly. We specialise in all types of swimming pool leak repairs, ensuring your pool is watertight and ready to use.\n\n**Types of Pool Leaks We Repair**\n\nPool leaks come in many forms, and each type requires a different repair approach:\n\n**Structural Shell Cracks**: Over time, Lanzarote's volcanic ground movement, thermal expansion cycles, and natural settling can create fractures in concrete or gunite shells. These cracks allow water to seep gradually into the surrounding ground. We use epoxy resin injection and specialist underwater repair compounds to seal structural cracks without needing to drain the pool.\n\n**Plumbing Joints & Pipework**: Connections between PVC pipes, returns, skimmers, and the pump are vulnerable points. Adhesives degrade, O-rings harden, and threaded connections loosen with vibration. We excavate only where necessary, repair or replace damaged sections, and pressure test to confirm every fix.\n\n**Fittings: Skimmers, Returns & Lights**: The seals around these shell-penetrating elements deteriorate with chemical exposure and UV radiation. We replace gaskets, reseal fittings, or swap entire components as needed.\n\n**Liner Tears**: In lined pools, rips and punctures allow water to escape behind the liner. We apply underwater vinyl patches or replace entire liner sections.\n\n**Our Process: From Detection to Repair**\n\nBefore any repair, we confirm the exact leak location using multiple techniques: pressure testing to isolate the affected section, dye testing to visualise water flow, acoustic listening with hydrophones to detect escaping water, and [thermal imaging](/services/water-leak-detection) to identify temperature anomalies in the structure.\n\n**Lanzarote-Specific Challenges**\n\nRepairing pools in Lanzarote presents unique challenges not found in continental climates:\n\n• **Volcanic terrain**: Basalt bedrock and loose picón create irregular ground movements that stress pool structures differently from conventional clay soils\n• **Intense UV exposure**: Constant solar radiation degrades rubber gaskets, sealants, and exposed PVC pipework far faster than in northern Europe\n• **Mineral-rich water**: Lanzarote's desalinated water has a particular mineral profile that can accelerate corrosion of certain materials if chemical balance isn't properly maintained\n• **Thermal expansion**: Day-to-night temperature swings cause expansion and contraction cycles that fatigue joints and connections over time\n\n**What the Customer Receives**\n\nEvery repair includes: a detailed technical report with before-and-after photographs, documented post-repair pressure testing, a written quality guarantee, and preventative maintenance recommendations. All materials used are professional-grade, specifically designed for the Lanzarote climate and pool chemical environment.\n\n**Complete Service**: As Lanzarote's leak detection specialists, we offer a complete detection-to-repair service. This means one company, one responsibility, and no finger-pointing between contractors.",
    },
    "damp-moisture-mapping": {
      title: "Damp & Moisture Mapping Lanzarote",
      description: "Professional damp detection in Lanzarote using thermal imaging and Protimeter moisture meters. Ideal service before refurbishment or decorating. FREE home visit and assessment.",
      icon: Thermometer,
      heroImage: moistureMeterWall,
      galleryImages: [moistureMeterWall, thermalUndergroundLeak, risingDampWall],
      seo: {
        title: "Damp & Moisture Mapping Lanzarote | Canary Detect",
        description: "Damp detection Lanzarote. Thermal imaging and Protimeter moisture meters. Rising damp, penetrating damp, condensation. FREE home visit.",
        keywords: "damp detection Lanzarote, moisture mapping infrared, thermal imaging damp, Protimeter moisture meter, rising damp detection, penetrating damp, condensation walls Canary Islands"
      },
      features: [
        "FREE home visit and assessment",
        "Thermal imaging cameras",
        "Protimeter moisture meters",
        "Environmental monitoring",
        "Detailed written reports",
        "Ideal before refurbishment",
        "Exact source identification",
        "Energy efficiency assessment",
      ],
      content: "**Hidden Moisture Detection — Ideal Before Refurbishment**\n\nOur service detects damp moisture and water ingress using state-of-the-art technology. It's ideal before painting or decorating and can spot leaking roofs, rising damp and hidden moisture issues before they become severe problems.\n\n**Our Methodology:**\n\n**Thermal Imaging**: Identifies temperature differences, revealing damp areas not visible to the eye, including behind surfaces.\n\n**Moisture Meters**: Non-invasive devices (e.g., Protimeter) measure moisture levels beneath surfaces (up to 19mm deep) to map exact affected areas.\n\n**Environmental Monitoring**: Measures humidity, airflow, and dew points to detect condensation risks.\n\n**Benefits:**\n\n• Prevents unnecessary repairs by targeting the exact, hidden source\n• Tracks if damp is spreading or shrinking\n• Assesses energy efficiency and identifies areas needing better ventilation or insulation\n\n**Common Causes Found**: Leaking pipes, roof damage, and high-humidity condensation.\n\nWe offer COMPLETELY FREE home visit and assessment. Our team provides accurate non-invasive assessments preventing costly structural damage and health issues.",
    },
  };
};

// UI text translations
export const getServiceUIText = (isSpanish: boolean) => ({
  serviceNotFound: {
    title: isSpanish ? "Servicio No Encontrado" : "Service Not Found",
    description: isSpanish ? "El servicio que busca no existe." : "The service you're looking for doesn't exist.",
    button: isSpanish ? "Ver Todos los Servicios" : "View All Services",
  },
  cta: {
    getQuote: isSpanish ? "Solicitar Presupuesto" : "Get a Quote",
    callNow: isSpanish ? "Llamar" : "Call",
    requestQuote: isSpanish ? "Solicitar Presupuesto" : "Request a Quote",
    freeQuoteTitle: isSpanish ? "Presupuesto Gratuito" : "Get a Free Quote",
    freeQuoteDesc: (serviceTitle: string) => isSpanish 
      ? `Contáctenos hoy para una consulta gratuita para servicios de ${serviceTitle.toLowerCase()}.`
      : `Contact us today for a free consultation for ${serviceTitle.toLowerCase()} services.`,
  },
  badges: {
    noFindNoFee: isSpanish ? "Garantía Sin Encontrar, Sin Pagar" : "No Find, No Fee Guarantee",
    equipment: isSpanish ? "+€80.000 en Equipos" : "€80,000+ Equipment",
    insuranceReports: isSpanish ? "Informes para Seguros" : "Insurance Reports",
  },
  sections: {
    aboutService: isSpanish ? "Sobre Este Servicio" : "About This Service",
    whatsIncluded: isSpanish ? "Qué Incluye" : "What's Included",
    gallery: isSpanish ? "Galería" : "Gallery",
    beforeAfter: isSpanish ? "Antes y Después" : "Before & After",
    detectionTech: isSpanish ? "Tecnologías de Detección Que Usamos" : "Detection Technologies We Use",
    multiTechApproach: isSpanish ? "Ver Nuestro Enfoque Multi-Tecnológico" : "See Our Multi-Technology Approach",
    exploreTech: isSpanish ? "Explorar Tecnología" : "Explore Technology",
  },
  techCards: {
    gasense: { name: "GASENSE", desc: isSpanish ? "Detección de gas trazador para tuberías enterradas" : "Tracer gas detection for buried pipes" },
    geophones: { name: isSpanish ? "Geófonos" : "Geophones", desc: isSpanish ? "Dispositivos de escucha acústica" : "Acoustic listening devices" },
    thermal: { name: isSpanish ? "Imagen Térmica" : "Thermal Imaging", desc: isSpanish ? "Detección de temperatura infrarroja" : "Infrared temperature detection" },
    pipeMic: { name: isSpanish ? "Micrófono de Tubería" : "Pipe Mic", desc: isSpanish ? "Posicionamiento con precisión centimétrica" : "Centimetre-accurate positioning" },
  },
  multiTechDesc: {
    underground: isSpanish ? "El equipo y los métodos que usamos en todo Lanzarote" : "The equipment and methods we use across Lanzarote",
    waterLeak: isSpanish ? "Aprenda cómo combinamos más de 4 métodos de detección para una precisión milimétrica" : "Learn how we combine 4+ detection methods for pinpoint accuracy",
  },
  lightbox: {
    close: isSpanish ? "Cerrar" : "Close lightbox",
    previous: isSpanish ? "Anterior" : "Previous image",
    next: isSpanish ? "Siguiente" : "Next image",
  },
});
