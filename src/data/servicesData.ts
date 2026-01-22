import { LucideIcon, Search, Cable, Droplets, Waves, Wrench, Home, HelpCircle, BadgeCheck } from "lucide-react";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection-hero.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation.png";

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
  heroImage: string;
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
          title: "Inspección de Desagües y Tuberías Lanzarote | CCTV | Canary Detect",
          description: "Inspección profesional de desagües y tuberías con CCTV en Lanzarote. 6 sistemas de cámara para todos los tamaños. Trazado, evaluación de estado, detección de obstrucciones e informes detallados.",
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
          title: "Detección de Fugas Subterráneas Lanzarote | Localización de Tuberías",
          description: "Detección de fugas de agua subterráneas y localización de tuberías en Lanzarote. Radar GPR, localizadores electromagnéticos. Encuentre tuberías, cables y servicios enterrados.",
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
        content: "Antes de cualquier trabajo de excavación, es esencial saber qué hay enterrado bajo la superficie. Nuestro servicio de detección subterránea en Lanzarote utiliza radar de penetración (GPR) y equipos de localización electromagnética para identificar la posición y profundidad de tuberías, cables y otros servicios enterrados.\n\nPara tuberías y cables metálicos, utilizamos localizadores electromagnéticos de precisión que pueden trazar rutas y estimar profundidad. Combinado con GPR, este enfoque de doble tecnología garantiza que encontremos tanto servicios metálicos como no metálicos.\n\nYa sea que esté planificando obras de construcción, jardinería, o necesite localizar una tubería específica, nuestros estudios previenen daños accidentales costosos y posibles peligros de seguridad.",
      },
      "water-leak-detection": {
        title: "Detección de Fugas de Agua Lanzarote",
        description: "Detección de fugas de agua ocultas en Lanzarote con precisión centimétrica usando nuestro enfoque multi-tecnológico y más de €80.000 en equipos especializados. ¿Contador de agua en marcha? Encontraremos la fuga.",
        icon: Droplets,
        heroImage: waterLeakDetectionImg,
        specialHeroImage: freeLeakConfirmationImg,
        galleryImages: [drainDetection4, drainDetection5, drainDetection6, drainDetection7],
        seo: {
          title: "Detección de Fugas de Agua Lanzarote | Fugas Ocultas | Sin Encontrar Sin Pagar",
          description: "Detección profesional de fugas de agua Lanzarote. Encuentre fugas ocultas con precisión centimétrica. ¿Contador en marcha? Imagen térmica, gas trazador, detección acústica. Sin Encontrar Sin Pagar. +€80.000 en equipos.",
          keywords: "detección fugas agua Canarias, detección fugas ocultas, contador agua corriendo fuga, reparación fugas tuberías, detección fugas Lanzarote, especialista fugas agua Lanzarote"
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
          "Precisión centimétrica",
          "Confirmación multi-tecnológica",
          "Cámaras de imagen térmica",
          "Detección de gas trazador (GASENSE)",
          "Geófonos acústicos y micrófonos de tubería",
          "Métodos no invasivos",
          "Informes para aseguradoras",
        ],
        content: "Canary Detect cuenta con más de €80.000 en equipos de última generación para detección de fugas, permitiéndonos ofrecer un servicio verdaderamente premium de detección de fugas de agua en Lanzarote. Ninguna tecnología es 100% precisa por sí sola, por eso siempre confirmamos la ubicación de una fuga usando al menos dos tecnologías independientes.\n\nNuestros métodos incluyen: detección de gas trazador GASENSE donde presurizamos las tuberías con una mezcla segura de nitrógeno/hidrógeno y detectamos el gas que escapa a nivel de superficie; geófonos acústicos que detectan el sonido del agua escapando de tuberías presurizadas; imagen térmica infrarroja para identificar diferencias de temperatura causadas por el agua fugándose; y micrófonos de tubería insertados directamente en las tuberías para posicionamiento con precisión centimétrica.\n\nOperamos con garantía Sin Encontrar, Sin Pagar - si confirmamos que tiene una fuga pero no podemos localizarla, no hay cargo. Nuestras inspecciones incluyen informes profesionales detallados adecuados para reclamaciones de seguros.",
      },
      "pool-leak-detection": {
        title: "Detección de Fugas en Piscinas Lanzarote",
        description: "Detección de fugas en piscinas en Lanzarote - no solo confirmamos una fuga, localizamos su ubicación exacta. ¿Su piscina pierde agua? Descubriremos por qué.",
        icon: Waves,
        heroImage: poolLeak1,
        galleryImages: [poolLeak8, poolLeak7, poolLeak10, poolLeak11, poolLeak9, poolLeak4, poolLeak5, poolLeak6],
        seo: {
          title: "Detección de Fugas en Piscinas Lanzarote | Piscina Perdiendo Agua | Playa Blanca",
          description: "Detección profesional de fugas en piscinas Lanzarote. ¿Piscina perdiendo agua? Localizamos la ubicación exacta. Pruebas acústicas, pruebas de presión, inspección CCTV. Servicio de reparación disponible.",
          keywords: "detección fugas piscinas Lanzarote, piscina perdiendo agua fuga, reparación fugas piscina, detección fugas Playa Blanca, servicio reparación piscinas"
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
          title: "Reparación de Fugas Lanzarote | Reparación Tuberías | Reparación Piscinas",
          description: "Reparación profesional de fugas Lanzarote. Reparación de tuberías de agua, reparación de tuberías de piscina, reparación de fugas subterráneas. Servicio de emergencia disponible. Servicio completo de detección a reparación.",
          keywords: "reparación fugas Lanzarote, reparación fugas agua Canarias, reparación tuberías agua, reparación tuberías piscina, reparación fugas subterráneas, reparación emergencia fugas Lanzarote"
        },
        features: [
          "Reparación de tuberías",
          "Reparación de piscinas",
          "Reparación de desagües",
          "Sellado de juntas",
          "Reparaciones con parche",
          "Reemplazos completos",
        ],
        content: "Una vez que hemos localizado su fuga en Lanzarote, también podemos proporcionar servicios profesionales de reparación de fugas. Nuestro equipo experimentado puede realizar una amplia gama de reparaciones, desde arreglos simples de tuberías hasta reparaciones más complejas del vaso de la piscina. Utilizamos materiales de calidad y técnicas probadas para garantizar una solución duradera a sus problemas de fugas. Reparación de emergencia disponible en todo Lanzarote.",
      },
      "drain-unblocking": {
        title: "Desatasco de Desagües Lanzarote",
        description: "Servicios profesionales de desatasco de desagües en Lanzarote. ¿Desagüe atascado? Eliminamos todo tipo de obstrucciones rápida y eficazmente usando agua a alta presión y equipos especializados.",
        icon: Search,
        heroImage: drainUnblockingImg,
        galleryImages: [drainUnblocking1, drainDetection2],
        seo: {
          title: "Desatasco de Desagües Lanzarote | Limpieza de Desagües | Servicio de Emergencia",
          description: "Desatasco profesional de desagües Lanzarote. Desagüe atascado limpiado rápidamente con agua a alta presión. Cocina, baño, desagües principales. Servicio de emergencia disponible. Inspección CCTV incluida.",
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
          title: "Reparación Fugas Piscinas Lanzarote | Reparación Tuberías Piscina | Reparación Vaso",
          description: "Reparación profesional de fugas en piscinas Lanzarote. Reparación de tuberías, reparación de grietas en el vaso, reemplazo de accesorios. Servicio completo de detección y reparación. Materiales de calidad y reparaciones duraderas.",
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
        content: "Una vez que hemos localizado la fuga de su piscina en Lanzarote, nuestro equipo de reparación experimentado puede arreglarla correctamente. Nos especializamos en todo tipo de reparaciones de fugas en piscinas, asegurando que su piscina quede estanca y lista para usar.\n\nNuestros servicios de reparación de fugas en piscinas incluyen:\n\n**Reparación de Tuberías**: Las tuberías con fugas son a menudo las culpables. Excavamos solo donde es necesario, reparamos o reemplazamos las secciones dañadas, y hacemos prueba de presión para confirmar la reparación.\n\n**Reparación del Vaso**: Las grietas en el vaso de la piscina pueden desarrollarse con el tiempo debido al movimiento del terreno o asentamiento. Utilizamos compuestos de reparación subacuática especializados y técnicas de inyección estructural para reparaciones duraderas.\n\n**Reparación de Accesorios**: Focos, retornos, skimmers y desagües principales todos tienen puntos de posible fuga. Reemplazamos juntas, resellamos accesorios, o reemplazamos componentes según sea necesario.\n\n**Servicio Completo**: Como especialistas en detección de fugas de Lanzarote, ofrecemos un servicio completo de detección a reparación. Esto significa una empresa, una responsabilidad, y sin culpar a otros contratistas.\n\nTodas las reparaciones vienen con nuestra garantía de calidad. Utilizamos materiales de grado profesional diseñados para el clima de Lanzarote y el entorno químico de las piscinas.",
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
        title: "Drain & Pipe Surveys Lanzarote | CCTV Inspection | Canary Detect",
        description: "Professional drain and pipe CCTV inspection in Lanzarote. 6 camera systems for all pipe sizes. Drain tracing, condition assessment, blockage detection & detailed video reports.",
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
      title: "Underground Pipe & Cable Detection Lanzarote",
      description: "Find water leak underground in Lanzarote. Locate buried utilities, pipes, and cables before you dig using ground-penetrating radar and electromagnetic locators.",
      icon: Cable,
      heroImage: undergroundDetection1,
      galleryImages: [undergroundDetection1, undergroundDetection2, undergroundDetection3, undergroundDetection4, undergroundDetection5, undergroundDetection6],
      seo: {
        title: "Underground Water Leak Detection Lanzarote | Find Water Leak Underground",
        description: "Underground water leak detection and pipe location in Lanzarote. GPR radar, electromagnetic locators. Find buried pipes, cables & utilities. Construction site surveys.",
        keywords: "underground water leak detection, find water leak underground, underground pipe detection Lanzarote, buried pipe location, utility detection Canary Islands, underground leak repair"
      },
      features: [
        "Ground-penetrating radar (GPR)",
        "Electromagnetic pipe locators",
        "Utility mapping",
        "Depth estimation",
        "Construction site surveys",
        "As-built documentation",
      ],
      content: "Before any excavation work, it's essential to know what's buried beneath the surface. Our underground detection service in Lanzarote uses ground-penetrating radar (GPR) and electromagnetic locating equipment to identify the position and depth of buried pipes, cables, and other utilities.\n\nFor metallic pipes and cables, we use precision electromagnetic locators that can trace routes and estimate depth. Combined with GPR, this dual-technology approach ensures we find both metallic and non-metallic utilities.\n\nWhether you're planning construction work, landscaping, or need to locate a specific pipe run, our surveys prevent costly accidental damage and potential safety hazards.",
    },
    "water-leak-detection": {
      title: "Water Pipe Leak Detection Lanzarote",
      description: "Hidden water leak detection in Lanzarote with centimetre accuracy using our multi-technology approach and €80,000+ of specialist equipment. Water meter running? We'll find the leak.",
      icon: Droplets,
      heroImage: waterLeakDetectionImg,
      specialHeroImage: freeLeakConfirmationImg,
      galleryImages: [drainDetection4, drainDetection5, drainDetection6, drainDetection7],
      seo: {
        title: "Water Leak Detection Lanzarote | Hidden Water Leak Detection | No Find No Fee",
        description: "Professional water leak detection Lanzarote. Find hidden water leaks with centimetre accuracy. Water meter running? Thermal imaging, tracer gas, acoustic detection. No Find No Fee. €80,000+ equipment.",
        keywords: "water leak detection Canary Islands, hidden water leak detection, water meter running leak, water pipe leak detection, water pipe leak repair, leak detection Lanzarote, Lanzarote water leak specialist, accurate leak detection"
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
        "Centimetre accuracy",
        "Multi-technology confirmation",
        "Thermal imaging cameras",
        "Tracer gas detection (GASENSE)",
        "Acoustic geophones & pipe mics",
        "Non-invasive methods",
        "Insurance-ready reports",
      ],
      content: "Canary Detect carries over €80,000 worth of the latest leak-detection equipment, enabling us to offer a truly premium water leak detection service in Lanzarote. No single technology is 100% accurate, which is why we always confirm a leak location using at least two independent technologies.\n\nOur methods include: GASENSE tracer gas detection where we pressurise pipes with a safe nitrogen/hydrogen mixture and detect escaping gas at surface level; acoustic geophones that detect the sound of water escaping from pressurised pipes; infrared thermal imaging to identify temperature differences caused by leaking water; and pipe microphones inserted directly into pipework for centimetre-accurate positioning.\n\nWe operate on a No Find, No Fee basis - if we confirm you have a leak but cannot locate it, there is no charge. Our surveys include detailed professional reports suitable for insurance claims.",
    },
    "pool-leak-detection": {
      title: "Pool Leak Detection Lanzarote",
      description: "Swimming pool leak detection in Lanzarote - we don't just confirm a leak, we pinpoint its exact location. Pool losing water? We'll find why.",
      icon: Waves,
      heroImage: poolLeak1,
      galleryImages: [poolLeak8, poolLeak7, poolLeak10, poolLeak11, poolLeak9, poolLeak4, poolLeak5, poolLeak6],
      seo: {
        title: "Pool Leak Detection Lanzarote | Swimming Pool Leak Detection | Playa Blanca",
        description: "Professional pool leak detection Lanzarote. Pool losing water? We pinpoint the exact leak location. Acoustic testing, pressure testing, CCTV inspection. Pool leak repair service available.",
        keywords: "pool leak detection Lanzarote, swimming pool leak detection, pool losing water leak, pool pipe leak repair, pool leak detection Playa Blanca, pool leak repair service"
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
      content: "Unlike some companies, our pool leak detection surveys in Lanzarote not only confirm a leak is present and identify which section is affected, but we then go on to pinpoint the exact position of the leak.\n\nOur comprehensive survey tests every aspect of your pool including: acoustic testing around all fittings, pool shell, and lights; testing of pump, filter, and fittings in the pump housing; pressure testing of all pipework; and electronic testing of the pool shell.\n\nOnce a leaking section is found, we pinpoint the leak using CCTV cameras for internal pipe inspection, internal pipe hydrophones, external geophones, vacuum leak location, and H2/N2 gas insertion and detection.\n\nEvery survey includes a detailed professional report for your insurance company. Please note: for complete testing, the pool should be clean and filled to halfway up the skimmers. You're free to use your own contractor for repairs - you're not obligated to use our repair team.",
    },
    "leak-repair": {
      title: "Leak Repair Lanzarote",
      description: "Professional leak repair services in Lanzarote to fix water pipe leaks, pool pipe leaks and underground leaks - complete solution from detection to repair.",
      icon: Wrench,
      heroImage: leakRepairBa4,
      galleryImages: [leakRepairBa1, leakRepairBa2, leakRepairBa3, leakRepairBa4],
      seo: {
        title: "Leak Repair Lanzarote | Water Pipe Leak Repair | Pool Pipe Leak Repair",
        description: "Professional leak repair Lanzarote. Water pipe leak repair, pool pipe leak repair, underground leak repair. Emergency leak repair available. Complete detection to repair service.",
        keywords: "leak repair Lanzarote, water leak repair Canary Islands, water pipe leak repair, pool pipe leak repair, underground leak repair, emergency leak repair Lanzarote, leak detection and repair"
      },
      features: [
        "Pipe repairs",
        "Pool repairs",
        "Drain repairs",
        "Joint sealing",
        "Patch repairs",
        "Complete replacements",
      ],
      content: "Once we've located your leak in Lanzarote, we can also provide professional leak repair services. Our experienced team can carry out a wide range of repairs, from simple pipe fixes to more complex pool shell repairs. We use quality materials and proven techniques to ensure a lasting solution to your leak problems. Emergency leak repair available across Lanzarote.",
    },
    "drain-unblocking": {
      title: "Drain Unblocking Lanzarote",
      description: "Professional drain unblocking services in Lanzarote. Blocked drain? We clear all types of blockages quickly and effectively using high-pressure jetting and specialist equipment.",
      icon: Search,
      heroImage: drainUnblockingImg,
      galleryImages: [drainUnblocking1, drainDetection2],
      seo: {
        title: "Drain Unblocking Lanzarote | Blocked Drain Clearance | Emergency Service",
        description: "Professional drain unblocking Lanzarote. Blocked drain cleared fast with high-pressure jetting. Kitchen, bathroom, main drains. Emergency drain unblocking available. CCTV inspection included.",
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
        title: "Pool Leak Repair Lanzarote | Swimming Pool Pipe Repair | Pool Shell Repair",
        description: "Professional pool leak repair Lanzarote. Swimming pool pipe repair, shell crack repair, fitting replacement. Complete pool leak detection and repair service. Quality materials & lasting repairs.",
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
      content: "Once we've pinpointed your pool leak in Lanzarote, our experienced repair team can fix it properly. We specialise in all types of swimming pool leak repairs, ensuring your pool is watertight and ready to use.\n\nOur pool leak repair services include:\n\n**Pipe Repairs**: Leaking pool pipes are often the culprit. We excavate only where necessary, repair or replace damaged sections, and pressure test to confirm the fix.\n\n**Shell Repairs**: Cracks in the pool shell can develop over time due to ground movement or settling. We use specialist underwater repair compounds and structural injection techniques for lasting repairs.\n\n**Fitting Repairs**: Lights, returns, skimmers, and main drains all have potential leak points. We replace gaskets, reseal fittings, or replace components as needed.\n\n**Complete Service**: As Lanzarote's leak detection specialists, we offer a complete detection-to-repair service. This means one company, one responsibility, and no finger-pointing between contractors.\n\nAll repairs come with our quality guarantee. We use professional-grade materials designed for the Lanzarote climate and pool chemical environment.",
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
