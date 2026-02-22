import { LucideIcon, Search, Cable, Droplets, Waves, Wrench, Home, HelpCircle, BadgeCheck, Thermometer } from "lucide-react";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection-hero.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation-new.png";

// Import damp/moisture images
import risingDampWall from "@/assets/blog/rising-damp-wall.jpg";
import thermalUndergroundLeak from "@/assets/blog/thermal-underground-leak.jpg";
import moistureMeterWall from "@/assets/services/moisture-meter-wall.jpg";

// Import gallery images
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg";
import drainDetection3 from "@/assets/services/gallery/drain-detection-3.jpg";
import drainDetection4 from "@/assets/services/gallery/drain-detection-4.jpg";
import drainDetection5 from "@/assets/services/gallery/drain-detection-5.jpg";
import drainDetection6 from "@/assets/services/gallery/drain-detection-6.jpg";
import drainDetection7 from "@/assets/services/gallery/drain-detection-7.jpg";
import drainDetection8 from "@/assets/services/gallery/drain-detection-8.jpg";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg";
import poolLeak1 from "@/assets/services/gallery/pool-leak-1.jpg";
import poolLeak4 from "@/assets/services/gallery/pool-leak-4.jpg";
import poolLeak5 from "@/assets/services/gallery/pool-leak-5.jpg";
import poolLeak6 from "@/assets/services/gallery/pool-leak-6.jpg";
import poolLeak7 from "@/assets/services/gallery/pool-leak-7.jpg";
import poolLeak8 from "@/assets/services/gallery/pool-leak-8.jpg";
import poolLeak9 from "@/assets/services/gallery/pool-leak-9.jpg";
import poolLeak10 from "@/assets/services/gallery/pool-leak-10.jpg";
import poolLeak11 from "@/assets/services/gallery/pool-leak-11.jpg";
import undergroundDetection1 from "@/assets/services/gallery/underground-detection-1.jpg";
import undergroundDetection2 from "@/assets/services/gallery/underground-detection-2.jpg";
import undergroundDetection3 from "@/assets/services/gallery/underground-detection-3.jpg";
import undergroundDetection4 from "@/assets/services/gallery/underground-detection-4.jpg";
import undergroundDetection5 from "@/assets/services/gallery/underground-detection-5.jpg";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg";
import drainUnblocking1 from "@/assets/services/gallery/drain-unblocking-1.jpg";
import poolRepair1 from "@/assets/services/gallery/pool-repair-1.jpg";
import poolRepair2 from "@/assets/services/gallery/pool-repair-2.jpg";
import poolRepair3 from "@/assets/services/gallery/pool-repair-3.jpg";
import poolRepair4 from "@/assets/services/gallery/pool-repair-4.jpg";
import poolRepair5 from "@/assets/services/gallery/pool-repair-5.jpg";
import poolRepair6 from "@/assets/services/gallery/pool-repair-6.jpg";
import leakRepairBa1 from "@/assets/services/gallery/leak-repair-ba-1.jpg";
import leakRepairBa2 from "@/assets/services/gallery/leak-repair-ba-2.jpg";
import leakRepairBa3 from "@/assets/services/gallery/leak-repair-ba-3.jpg";
import leakRepairBa4 from "@/assets/services/gallery/leak-repair-ba-4.jpg";

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
        description: "Detección de fugas en tuberías de agua en Lanzarote. Cobre, PVC, polietileno e hierro galvanizado. Inspección CCTV, pruebas de presión y localización subterránea.",
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
      content: "## Introduction: Advanced Leak Detection Services in Lanzarote\n\nThis page explains how Canary Detect provides advanced underground leak detection services in Lanzarote for homeowners, builders, and property managers. Learn how our technology helps prevent costly damage and ensures your property's safety.\n\nNo matter your situation—whether you are certain you have a leak or simply suspect a problem—leak detection is tailored to your specific circumstances to ensure the most effective solution.\n\nLanzarote offers several leak detection services that use non-invasive technology in residential and commercial properties. Leak detection in Lanzarote utilizes advanced, non-invasive, multi-technology approaches to locate water leaks with precision. Key methods for leak detection include thermal imaging, acoustic sensors, tracer gas, pipe cameras, and ground-penetrating radar.\n\nLocal specialists like Canary Detect and The Leaky Finders use a combination of these methods to pinpoint leaks without destructive digging. Leak detection in Lanzarote relies on non-invasive acoustic, thermal, and chemical technologies to effectively navigate the island's unique volcanic terrain.\n\n## Why Underground Leak Detection Matters\n\nUndetected leaks and hidden utilities can cause significant property damage, lead to expensive repairs, and pose safety risks. Early detection is essential for:\n\n* Preventing structural damage and damp\n* Reducing water bills by stopping waste\n* Avoiding costly emergency repairs\n* Ensuring the safety of construction and landscaping projects\n\nBy identifying leaks and buried utilities before they become a problem, you protect your investment and maintain peace of mind.\n\nNow that you understand why early leak detection is crucial, let's look at the technologies we use to find leaks and buried utilities.\n\n## How Our Technology Works\n\nAt Canary Detect, we use a combination of advanced tools and methods to locate underground pipes, cables, and leaks without invasive digging. Our main technologies include:\n\n* **Ground-penetrating radar (GPR):** Finds pipes and cables from the surface without extensive digging.\n* **Electromagnetic pipe locators:** Trace metallic pipes and cables and estimate their depth.\n* **Thermal imaging:** Detects temperature changes caused by water leaks.\n* **Acoustic sensors:** Listen for the sound of escaping water to pinpoint leaks.\n* **Tracer gas:** Identifies leaks by detecting gas escaping from pipes.\n* **Pipe cameras:** Visually inspect the inside of pipes and drains.\n\nGround Penetrating Radar can find pipes and cables from the surface without extensive digging. This dual-technology approach ensures we can locate both metallic and non-metallic utilities, as well as pinpoint leaks with minimal disruption.\n\nOur services include:\n\n* Utility mapping\n* Depth estimation\n* Construction site surveys\n* As-built documentation\n\nNow that you understand the technologies we use, let's explore the benefits of underground pipe and cable detection.\n\n## Equipment and Tools We Use\n\nAt Canary Detect, we believe that the right equipment makes all the difference when it comes to accurate and efficient leak detection. That's why our team uses over €80,000 worth of specialist leak detection equipment across the Canary Islands, including Lanzarote and Playa Blanca. Our arsenal includes state-of-the-art thermal imaging cameras, highly sensitive acoustic sensors, and advanced tracer gas technology—all designed to detect hidden leaks and minimize water loss without causing unnecessary damage to your property.\n\nOur expertise with this equipment means we can locate leaks quickly, often saving our clients thousands of euros in potential repairs and helping them reduce their water bills. We also utilize Ground Penetrating Radar (GPR) to locate pipes and cables from the surface, and infrared camera technology to spot even the smallest signs of water loss. This professional approach ensures that every leak detection service we provide is thorough, reliable, and tailored to the unique needs of each property.\n\nBy investing in the best tools and continuously training our team, Canary Detect delivers a leak detection service that gives clients peace of mind, knowing their property is protected and their water bills are under control.\n\n## Common Pipe Problems We Detect\n\nAs the trusted leak detection service for the Canary Islands, Canary Detect has seen it all when it comes to pipe problems. Our team regularly uncovers hidden leaks in swimming pools, water pipes, and underground plumbing systems—issues that can lead to significant water loss and costly damage if left unchecked.\n\n## Benefits of Underground Pipe & Cable Detection Services\n\n### Why Early Leak Detection Matters\n\nDetecting hidden leaks and underground pipes and cables is more than just a technical task—it's a vital service that protects your property, your wallet, and your peace of mind.\n\n### How Our Technology Saves You Money\n\n* Early leak detection can save property owners thousands of euros in unnecessary repairs and wasted water.\n* Our expert team uses advanced equipment—like sensitive microphones, gas sensors, and inspection cameras—to locate and confirm hidden leaks quickly and accurately, even when they're buried deep beneath the surface.\n* Fixing problems before they escalate prevents structural damage, damp, and the stress that comes with unexpected repairs.\n\n### The Canary Detect Advantage\n\n* Fast, professional service from a team with proven expertise in leak detection.\n* \"No find, no fee\" policy ensures you only pay if a leak is detected.\n* Multiple methods confirm every investigation, providing reliable results and a clear plan for repairs.\n\n### Ongoing Support and Prevention\n\n* Sign up for our newsletter to receive regular tips and advice on how to spot the signs of leaks, prevent water loss, and keep your property in top condition.\n* Our commitment extends beyond the initial service, helping you maintain your property's value and safety.\n\nWith our professional team, advanced equipment, and customer-first approach, you can trust Canary Detect to deliver the leak detection service you need—fast, accurate, and stress-free.\n\n## Drain Detection Services\n\n### CCTV Inspections of Pipes and Drains\n\nWe also offer [CCTV inspections of pipes and drains](/services/drain-detection) to identify blockages, leaks, and structural issues without excavation.\n\n## Client Testimonials\n\nAt Canary Detect, our clients' satisfaction speaks volumes about the quality of our leak detection service. Here's what some of our happy clients have to say:\n\n> \"Canary Detect saved me thousands of euros in potential repairs by detecting a hidden leak in my villa's pool. Their team was professional, friendly, and fast—I couldn't recommend them more!\" – Client, Playa Blanca\n\n> \"I was worried about my rising water bills and suspected a leak, but had no idea where to start. The Canary Detect team found the problem quickly and explained everything clearly. Their 'no find, no fee' policy gave me peace of mind, and I'm so glad I called them.\" – Client, Lanzarote\n\nWe're proud of our 99% success rate in leak detection and our commitment to providing a professional, reliable service. Our clients trust us to detect and fix their leaks, and we're dedicated to helping them save money, reduce water loss, and protect their properties. When you choose Canary Detect, you're choosing a team that puts your needs first—every time.\n\n## Underground Pipe & Cable Detection Lanzarote Service Areas\n\nAt Canary Detect, we specialize in professional [leak detection](/blog/emergency-leak-detection-repair-lanzarote) Lanzarote residents and businesses can rely on. We offer a comprehensive range of services, including:\n\n* Non-invasive leak detection\n* Water loss analysis\n* Expert repairs\n\nOur team can provide a detailed report on water loss per day within just 20 minutes, thanks to our advanced Leak Analyser technology. Many property owners have shared positive word about our fast response and reliable results, making us a trusted choice for leak detection across the island.\n\nWe serve:\n\n* Homeowners\n* Builders and construction companies\n* Property managers\n* Communities and residential complexes\n* Commercial properties\n\nContact us today for a free consultation for underground pipe & cable detection Lanzarote services.\n\n## Conclusion and Next Steps\n\nIn summary, Canary Detect stands out as the leading provider of leak detection services in the Canary Islands. Our expert team uses advanced equipment and proven techniques to locate hidden leaks, reduce water loss, and minimize property damage—fast. With our \"no find, no fee\" guarantee and a 99% success rate, you can trust us to deliver a professional service that saves you money and gives you complete peace of mind.\n\nIf you suspect a leak or want to protect your property from future water loss, don't wait—[contact Canary Detect today](/contact). Our team is ready to help you detect and fix any leak, offering a fast, reliable service that can save you thousands of euros in repairs and lower your water bills.\n\nSign up for our newsletter to receive expert tips on leak detection and prevention, and follow us on social media for the latest updates from Canary Detect. Let us help you keep your property safe, dry, and leak-free—so you can enjoy peace of mind, every day.",
    },
    "water-leak-detection": {
      title: "Hidden Water Leak Detection Lanzarote",
      description: "We specialize in finding hidden water leaks in Lanzarote using advanced technology.",
      icon: Droplets,
      heroImage: waterLeakDetectionImg,
      specialHeroImage: freeLeakConfirmationImg,
      richContent: true,
      galleryImages: [drainDetection4, drainDetection5, drainDetection6, drainDetection7],
      seo: {
        title: "Hidden Water Leak Detection Lanzarote | No Find No Fee",
        description: "Water meter running? Professional hidden leak detection in Lanzarote. Thermal imaging, tracer gas, acoustic sensors. No Find, No Fee guarantee.",
        keywords: "water leak detection Canary Islands, hidden water leak detection, water meter running leak, thermal imaging leaks, tracer gas detection, find leaks without damage, Lanzarote water leak specialist"
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
      content: "## Introduction to Water Leaks\n\nAre you a homeowner or property manager in Lanzarote concerned about unexplained water usage or potential leaks? Hidden water leaks can affect any type of building, from private homes to commercial properties, and can seriously impact your property's infrastructure if not addressed promptly. For property owners and managers, early detection is crucial to avoid costly repairs, structural damage, and unnecessary water waste.\n\nWater leaks are a common problem that can lead to expensive repairs and significant water loss if not addressed quickly. Even something as simple as a dripping tap can signal a bigger issue within your plumbing system. Monitoring your water meter is one of the most effective ways to detect leaks early—if you notice unexplained changes, it could be a sign of hidden leaks. An unexpected spike in your water bill is another red flag that should not be ignored.\n\nTo avoid leaks and protect your property, take simple steps like regularly inspecting your pipes and fittings for any signs of wear or damage. Early detection and routine maintenance are key to keeping your system running smoothly and preventing unnecessary waste.\n\n## What Is a Hidden Water Leak?\n\nA hidden water leak is a leak that occurs out of sight—often within walls, under floors, or in concealed pipework—making it difficult to detect until significant damage has occurred.\n\n**Common signs of hidden water leaks include:**\n\n* Damp spots on walls or ceilings\n* Peeling paint or wallpaper\n* The presence of mould or mildew\n* Yellowish-brown stains, bubbling paint, or warped flooring\n* Unusual sounds such as faint hissing or dripping noises when no taps are in use\n\nIf you notice any of these signs, it's important to investigate further to prevent further damage and costs.\n\n## Summary: How to Confirm, Locate, and Address a Hidden Water Leak\n\nIf you suspect a hidden water leak, the first step is to confirm its presence—often by monitoring your water meter or looking for physical signs. Once confirmed, the next step is to determine the exact location of the leak to prevent further damage and costs. Detecting a water leak early can prevent serious structural damage and mold growth. Our advanced detection services help you confirm, locate, and address leaks efficiently, protecting your property and minimizing repair expenses.\n\n## Insurance Reports\n\nWe operate with complete confidence in our capabilities. If we confirm you have an active leak but fail to locate it, there is no charge. No risk, no surprises. Our detailed professional reports are accepted by all insurance companies for claims.\n\n## Why Choose Professional Hidden Leak Detection?\n\nHidden water leaks are one of the most frustrating problems for property owners in Lanzarote. You can see the meter spinning, receive elevated water bills, yet find no visible sign of where water is escaping. This is where our specialist detection service makes the difference.\n\n## Detection Technologies We Use\n\nWe use a combination of advanced technologies to ensure accurate and non-invasive leak detection:\n\n* **GASENSE:** Tracer gas detection for buried pipes\n* **Geophones:** Acoustic listening devices\n* **Thermal Imaging:** Infrared temperature detection\n* **Pipe Mic:** Centimetre-accurate positioning\n\nCanary Detect continuously invests in cutting-edge technology—currently over €80,000 in specialist equipment—because we understand that finding invisible leaks requires the right tools in expert hands.\n\nWith these technologies, our survey process ensures accurate leak detection.\n\n### Our Multi-Technology Detection Process\n\nNo single technology is 100% reliable in all situations. That's why we always use multiple methods to confirm each leak location:\n\n#### 1. Infrared Thermal Imaging\n\nOur high-resolution thermal cameras detect minute temperature differences caused by leaking water behind walls, under floors, or in ceilings. Leaks can be detected even when they are hidden under the floor, making it possible to identify issues that are not visible on the surface. Water cools surfaces in characteristic ways, creating distinctive thermal patterns invisible to the naked eye.\n\n#### 2. Tracer Gas Detection (GASENSE)\n\nWe pressurise your pipes with a safe nitrogen/hydrogen mixture (95%/5%). This gas is lighter than air and penetrates even the smallest cracks, emerging through any surface material. Our ultra-sensitive detectors pinpoint exactly where gas escapes.\n\n#### 3. Acoustic Detection\n\nHigh-sensitivity geophones amplify the sound of water escaping from pressurised pipes. Different leak types produce distinct sound signatures—we learn to distinguish between a faulty joint, a cracked pipe, or a loose fitting.\n\n#### 4. Pipe Microphones\n\nFor maximum accuracy, we insert specialised microphones directly into pipes. This allows us to hear water flow within the system and triangulate the exact leak position with centimetre precision.\n\nOur process can identify internal leaks within the property, ensuring that hidden problems are found before they cause significant damage.\n\n## The Step-by-Step Survey Process\n\nWhen we arrive at your property, we follow a systematic process:\n\n1. **Confirm a leak exists** through meter testing and system checks.\n2. **Isolate different sections** to determine which area is affected.\n3. **Apply detection technologies sequentially**, starting with the least invasive.\n4. **Confirm with at least two independent technologies** before marking a location.\n5. **Document everything** with thermal photographs, measurements, and precise coordinates.\n\nOnce a leak is found, it is important to fix the issue promptly to prevent further problems. Leaks should be repaired as soon as possible to avoid additional water waste and damage.\n\n## Prevention and Maintenance\n\nRegular inspections and preventive measures are essential because regular inspections of all water-related areas in your home can help prevent leaks, and regular maintenance can help avoid plumbing problems before they occur.\n\nPreventing leaks and maintaining your plumbing system is the best way to ensure efficiency and avoid unexpected water damage. By taking proactive steps, you protect your property, reduce your water bill, and maintain the efficiency of your system.\n\n### Regular Inspections\n\nRegularly inspect your pipes, fittings, and appliances for any signs of wear, corrosion, or leaks. Look for damp spots, peeling paint, or any unusual changes in your property.\n\n### Monitoring Water Usage\n\nSimple steps like replacing worn washers in your taps and checking your water meter for unusual water usage can help you detect problems early. Monitoring your water bill for unexpected increases is another effective way to spot leaks before they cause major issues.\n\n### Professional Maintenance\n\nFor added peace of mind, consider hiring a professional plumber for routine maintenance checks and to provide a guarantee on their work—helping you avoid costly repairs and ensuring your plumbing is always working properly.\n\nContact us today for a free consultation for hidden water leak detection Lanzarote services.",
    },
    "water-pipe-leak-detection": {
      title: "Water Pipe Leak Detection Lanzarote",
      description: "Specialists in water pipe leaks in Lanzarote. We locate leaks in copper, PVC, polyethylene and galvanised iron pipes. Internal CCTV inspection and pressure testing.",
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
      content: "**Specialists in Water Pipe Leaks**\n\nNot all leaks are equal. How you locate and repair a leak depends enormously on the type of pipe affected, its location, and its age. At Canary Detect, we specialise in pipe-specific leak diagnosis and detection, providing solutions tailored to each material and situation.\n\n**Understanding Your Pipe System in Lanzarote**\n\nProperties in Lanzarote use various pipe materials, each with their own characteristic failure patterns:\n\n**Copper Pipes**: Common in quality installations, copper pipes can develop leaks from galvanic corrosion (especially near brass fittings), vibration fatigue at elbows, or damage from aggressive water. Our thermal cameras are particularly effective at locating copper leaks behind walls.\n\n**PVC/CPVC Pipes**: Popular in modern installations, plastic pipes typically fail at adhesive joints, especially if the original installation was faulty. UV exposure on exterior sections also causes degradation. We use specific pressure tests to isolate problem sections.\n\n**Polyethylene (PE) Pipes**: Frequently used for underground connections from the meter to the house, PE pipes can suffer damage from gardening tools, tree roots, or ground movement. Our tracer gas technology is ideal for locating these buried leaks.\n\n**Galvanised Iron**: Found in older Lanzarote constructions, these pipes develop internal corrosion that reduces flow and eventually perforates. Internal CCTV inspection reveals the true condition of these pipes and helps plan renovation.\n\n**Professional Pressure Testing**\n\nPressure testing is fundamental to determining pipe system integrity:\n\n• **Static test**: We isolate sections and monitor pressure over extended periods to detect even the smallest leaks\n• **Differential test**: We compare actual consumption with theoretical to quantify losses\n• **Isolation test**: We identify exactly which section of the system is affected\n\n**Internal CCTV Pipe Inspection**\n\nOur micro-cameras can enter pipes from 25mm diameter, providing high-definition internal images:\n\n• Direct visualisation of cracks, corrosion and deposits\n• Precise location of faulty joints\n• General condition assessment for maintenance planning\n• Video documentation for insurance reports\n\n**Underground Pipe Detection**\n\nMany serious leaks occur in buried pipes between the meter and house. We use:\n\n• Electromagnetic locators for metallic pipes\n• Ground-penetrating radar (GPR) for non-metallic pipes\n• Tracer gas for precise leak location\n• Acoustic correlators for position triangulation\n\n**Common Signs You Have a Pipe Leak**\n\nMany homeowners in Lanzarote don't realise they have a pipe leak until significant damage has occurred. Watch for these warning signs:\n\n• **Unexplained water bill increases** — even a small pipe leak can waste thousands of litres per month, showing up as a sudden spike in your water bill\n• **Damp patches on walls or floors** — moisture appearing on internal surfaces often indicates a leaking pipe behind the wall or under the floor slab\n• **Sound of running water** — if you can hear water flowing when all taps are closed, a pipe is likely leaking somewhere in the system\n• **Low water pressure** — a gradual decrease in pressure can indicate a pipe leak reducing flow before water reaches your taps\n• **Water meter spinning** — turn off all taps and appliances, then check your meter. If it's still moving, you have a leak\n\nIf you notice any of these signs, don't delay. The longer a pipe leak goes undetected, the more damage it causes to your property's structure and the higher your water bills will climb.\n\n**Complete Technical Report**\n\nEvery inspection includes a professional report detailing: type of pipe affected, exact leak location, probable cause of failure, recommended repair options, and estimated budget. This report is accepted by insurers and useful for obtaining comparative repair quotes.\n\n**No Find, No Fee**\n\nWe operate with complete confidence in our pipe leak detection capabilities. If we confirm an active leak exists in your pipework but cannot locate it precisely, you pay nothing. Our technology investment of over €80,000 in specialist equipment ensures we find what others miss.",
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
      content: "Unlike some companies, our swimming pool leak detection surveys in Lanzarote not only confirm a leak is present and identify which section is affected, but we then go on to pinpoint the exact position of the leak.\n\nOur comprehensive survey tests every aspect of your pool including: acoustic testing around all fittings, pool shell, and lights; testing of pump, filter, and fittings in the pump housing; pressure testing of all pipework; and electronic testing of the pool shell.\n\nOnce a leaking section is found, we pinpoint the leak using CCTV cameras for internal pipe inspection, internal pipe hydrophones, external geophones, vacuum leak location, and H2/N2 gas insertion and detection.\n\nEvery survey includes a detailed professional report for your insurance company. Please note: for complete testing, the pool should be clean and filled to halfway up the skimmers. You're free to use your own contractor for repairs — you're not obligated to use our repair team.",
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
      content: "## Canary Detect Lanzarote: Expert Leak Detection and Repair\n\nCanary Detect offers expert leak detection and repair services throughout Lanzarote. We provide comprehensive solutions for homeowners, businesses, and property managers who need to identify and fix water leaks quickly and efficiently. Our services cover everything from initial leak detection to complete repairs, ensuring your property is protected and your costs are minimized.\n\n### Why Early Leak Detection Matters\n\nEarly leak detection is crucial for cost savings and property protection. Hidden leaks can cause significant water loss, structural damage, and unexpectedly high water bills if left untreated. By identifying leaks early, you can avoid expensive repairs, prevent property damage, and conserve water.\n\nCanary Detect provides professional leak detection services across Lanzarote, offering island-wide coverage to ensure every client receives prompt and reliable assistance.\n\nNext, learn more about our advanced approach to leak detection and what sets Canary Detect apart in Lanzarote.\n\n## Introduction to Leak Detection\n\nLeak detection is an essential service for anyone looking to protect their property and save money on costly water bills in Lanzarote and across the Canary Islands. Hidden leaks in pipes, pools, or underground systems can lead to significant water loss, often going unnoticed until they cause major damage or result in unexpectedly high water bills.\n\nThat's where Canary Detect, also known as The Leaky Finders, comes in. With decades of combined expertise, this professional team specializes in finding and confirming leaks quickly and efficiently, using the latest leak detection equipment and non-invasive techniques.\n\nIn Lanzarote, the unique landscape and complex water systems make it especially important to detect leaks early. Canary Detect uses advanced technology such as thermal imaging and acoustic sensors to identify the exact location of leaks—whether they're on the surface or hidden deep underground. By listening for the sound of escaping water and analyzing temperature changes, the team can pinpoint the problem without unnecessary disruption to your property.\n\nThe process starts with a thorough assessment of your water system, followed by the use of specialized tools to locate and confirm any leaks. Once a leak is detected, Canary Detect provides clients with a detailed report, including photos and recommendations for the best way to fix the issue. Their \"No Find, No Fee\" policy ensures you only pay for results, making it a risk-free choice for homeowners, businesses, and property managers alike.\n\nChoosing Canary Detect means you're working with a team dedicated to helping you save time, money, and water. Their commitment to professionalism and customer satisfaction has made them the perfect solution for leak detection in Lanzarote.\n\nReady to discover how our advanced technology and expertise can help you? Read on to learn about our unique selling points and the technologies we use.\n\n## Why Choose Canary Detect Lanzarote?\n\nCanary Detect stands out as the leading provider of professional leak detection services across Lanzarote. Here's what makes us unique:\n\n* **Professional Leak Detection Across Lanzarote:** We offer island-wide coverage, ensuring fast response times and reliable service wherever you are.\n* **Advanced Technology:** Our team uses over €80,000 worth of specialist equipment, including thermal imaging, acoustic sensors, tracer gas, and ground penetrating radar, to locate leaks quickly and accurately.\n* **High Success Rate:** With a 99% success rate in locating leaks, you can trust us to find the source of your problem.\n* **Risk-Free Guarantee:** Our \"No Find, No Fee\" policy means you only pay if we successfully detect your leak.\n* **Cost Savings:** We have saved clients thousands of euros by preventing unnecessary excavations and water loss.\n* **Experienced Professionals:** Our team brings decades of combined expertise to every job, ensuring quality results and customer satisfaction.\n\nWith Canary Detect, you benefit from cutting-edge technology, proven results, and a commitment to saving you time and money.\n\nNext, discover the advanced technologies we use to detect leaks with precision.\n\n## Our Leak Detection Technologies\n\nAt Canary Detect Lanzarote, we utilize a range of advanced technologies to ensure accurate and non-invasive leak detection:\n\n* **Thermal Imaging:** Detects temperature anomalies caused by leaking water, helping us locate hidden leaks behind walls or under floors.\n* **Acoustic Sensors:** Listen for the sound of water escaping from pressurized pipes, allowing us to pinpoint leaks even underground.\n* **Tracer Gas Technology:** Involves pressurizing pipes with a safe nitrogen/hydrogen mix to detect leaks in hard-to-reach areas.\n* **Ground Penetrating Radar:** Finds pipes and cables from the surface without extensive digging, minimizing disruption to your property.\n\nBy combining these technologies, we can quickly and accurately identify leaks, saving you time, money, and unnecessary property damage.\n\nNow that you know how we find leaks, let's explore the specific repair services we offer in Lanzarote.\n\n---\n\n## Leak Repair Services in Lanzarote\n\n### Our Leak Repair Process\n\nOnce we've located your leak in Lanzarote, we provide professional repair services tailored to your needs. Our experienced team can handle a wide range of repairs, from simple pipe fixes to complex pool shell repairs. We use quality materials and proven techniques to ensure a lasting solution to your leak problems.\n\n### Types of Repairs Offered\n\nWe offer a comprehensive range of leak repair services, including:\n\n* Pipe repairs\n* Pool repairs\n* Drain repairs\n* Joint sealing\n* Patch repairs\n* Complete replacements\n\nClients have saved thousands by avoiding unnecessary repairs and water loss with our services.\n\n### Emergency Services\n\nEmergency leak repair available across Lanzarote. Leak detection and confirmation can often be completed within the same day for your convenience.\n\nOur team is ready to respond quickly to urgent situations, minimizing damage and restoring your property as soon as possible.\n\nTo learn more about how we can help with your specific leak repair needs, continue to our FAQ section below.\n\n---\n\n## Leak Repair Lanzarote Across the Canary Islands\n\nCanary Detect specializes in identifying the exact place of leaks anywhere in Lanzarote, including detailed [CCTV drain and pipe surveys](/services/pipe-inspection).\n\nFor professional, reliable, and advanced leak detection and repair services in Lanzarote, trust Canary Detect Lanzarote to protect your property and save you money. [Contact us today](/contact) for a free consultation and experience the difference our expertise can make.",
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
