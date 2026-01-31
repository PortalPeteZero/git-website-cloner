import { LucideIcon, Wrench, Flame, Settings, Droplets, Gauge, Thermometer, PenTool, GitBranch, Search, Zap, Shield, BadgeCheck, Home } from "lucide-react";

// Pool plumbing images
import poolValvesMoisture from "@/assets/plumbing/pool/pool-valves-moisture.jpg";
import poolEquipmentBox from "@/assets/plumbing/pool/pool-equipment-box.jpg";
import poolPipeRerouting from "@/assets/plumbing/pool/pool-pipe-rerouting.jpg";
import poolValveManifoldWall from "@/assets/plumbing/pool/pool-valve-manifold-wall.jpg";
import poolPumpRoomComplete from "@/assets/plumbing/pool/pool-pump-room-complete.jpg";
import poolValveCloseup from "@/assets/plumbing/pool/pool-valve-closeup.jpg";
import poolBeforeAfter from "@/assets/plumbing/pool/pool-before-after.jpg";
import poolComplexPipework from "@/assets/plumbing/pool/pool-complex-pipework.jpg";

// Boiler images
import boilerCustomHousing from "@/assets/plumbing/boiler/boiler-custom-housing.jpg";
import boilerInstallationWall from "@/assets/plumbing/boiler/boiler-installation-wall.jpg";
import boilerOutdoorSetup from "@/assets/plumbing/boiler/boiler-outdoor-setup.jpg";
import boilerPipeworkManifold from "@/assets/plumbing/boiler/boiler-pipework-manifold.jpg";
import waterHeaterWallMount from "@/assets/plumbing/boiler/water-heater-wall-mount.jpg";
import customHousingBuild from "@/assets/plumbing/boiler/custom-housing-build.jpg";
import waterHeaterEnclosure from "@/assets/plumbing/boiler/water-heater-enclosure.jpg";
import tekaWaterHeater from "@/assets/plumbing/boiler/teka-water-heater.jpg";

export interface PlumbingServiceItem {
  name: string;
  nameEs: string;
  items: string[];
  itemsEs: string[];
}

export interface PlumbingService {
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  metaTitle: string;
  metaTitleEs: string;
  metaDescription: string;
  metaDescriptionEs: string;
  description: string;
  descriptionEs: string;
  icon: LucideIcon;
  heroImage: string;
  introTitle: string;
  introTitleEs: string;
  introText: string;
  introTextEs: string;
  services: PlumbingServiceItem[];
  galleryImages: { src: string; alt: string; altEs: string }[];
  beforeAfterImage?: { src: string; caption: string; captionEs: string };
  whyChooseUs: { icon: LucideIcon; title: string; titleEs: string; text: string; textEs: string }[];
}

export const plumbingServicesData: Record<string, PlumbingService> = {
  "general-repairs": {
    slug: "general-repairs",
    slugEs: "reparaciones-generales",
    title: "General Plumbing Repairs",
    titleEs: "Reparaciones Generales de Fontanería",
    metaTitle: "Plumbing Repairs Lanzarote | Canary Detect",
    metaTitleEs: "Reparaciones Fontanería Lanzarote | Canary Detect",
    metaDescription: "Professional plumbing repairs in Lanzarote. Taps, toilets, water heaters, pipe repairs. Fast response, quality workmanship. 2-Year Guarantee.",
    metaDescriptionEs: "Reparaciones profesionales de fontanería en Lanzarote. Grifos, inodoros, calentadores, tuberías. Respuesta rápida, trabajo de calidad. Garantía 2 años.",
    description: "Taps dripping? Toilet running? We fix it fast.",
    descriptionEs: "¿Grifos goteando? ¿Inodoro corriendo? Lo reparamos rápido.",
    icon: Wrench,
    heroImage: boilerInstallationWall,
    introTitle: "Reliable Plumbing Repairs Across Lanzarote",
    introTitleEs: "Reparaciones de Fontanería Fiables en Lanzarote",
    introText: "From a dripping tap to a burst pipe, plumbing problems rarely come at a convenient time. At Canary Detect, we combine our leak detection expertise with professional plumbing skills to deliver fast, reliable repairs across Lanzarote.\n\nAs leak detection specialists, we understand plumbing systems at a deeper level than most. We don't just fix the symptom—we identify and resolve the root cause to prevent future problems. All our plumbing work is backed by a 2-Year Guarantee.",
    introTextEs: "Desde un grifo que gotea hasta una tubería rota, los problemas de fontanería rara vez llegan en un momento conveniente. En Canary Detect, combinamos nuestra experiencia en detección de fugas con habilidades profesionales de fontanería para ofrecer reparaciones rápidas y fiables en todo Lanzarote.\n\nComo especialistas en detección de fugas, entendemos los sistemas de fontanería a un nivel más profundo que la mayoría. No solo arreglamos el síntoma, identificamos y resolvemos la causa raíz para prevenir problemas futuros. Todo nuestro trabajo de fontanería está respaldado por una Garantía de 2 Años.",
    services: [
      {
        name: "Tap & Mixer Repairs",
        nameEs: "Reparación de Grifos y Mezcladores",
        items: [
          "Dripping tap repairs",
          "Mixer tap replacements",
          "Cartridge replacements",
          "Isolation valve installations",
          "Kitchen and bathroom taps"
        ],
        itemsEs: [
          "Reparación de grifos goteando",
          "Sustitución de grifos mezcladores",
          "Reemplazo de cartuchos",
          "Instalación de válvulas de aislamiento",
          "Grifos de cocina y baño"
        ]
      },
      {
        name: "Toilet & WC Repairs",
        nameEs: "Reparación de Inodoros y WC",
        items: [
          "Running toilet repairs",
          "Cistern mechanism replacements",
          "Fill valve and flush valve repairs",
          "Toilet seat replacements",
          "Blocked toilet clearing"
        ],
        itemsEs: [
          "Reparación de inodoros que corren",
          "Sustitución de mecanismos de cisterna",
          "Reparación de válvulas de llenado y descarga",
          "Sustitución de asientos de inodoro",
          "Desatasco de inodoros"
        ]
      },
      {
        name: "Pipe Repairs",
        nameEs: "Reparación de Tuberías",
        items: [
          "Burst pipe repairs",
          "Leaking joint repairs",
          "Pipe section replacements",
          "Compression fitting repairs",
          "Emergency pipe repairs"
        ],
        itemsEs: [
          "Reparación de tuberías reventadas",
          "Reparación de juntas con fugas",
          "Sustitución de tramos de tubería",
          "Reparación de racores de compresión",
          "Reparaciones de emergencia"
        ]
      },
      {
        name: "Water Pressure Issues",
        nameEs: "Problemas de Presión de Agua",
        items: [
          "Low pressure diagnostics",
          "Pressure reducing valve installation",
          "Pump repairs and replacements",
          "Air lock clearing",
          "System balancing"
        ],
        itemsEs: [
          "Diagnóstico de baja presión",
          "Instalación de válvulas reductoras de presión",
          "Reparación y sustitución de bombas",
          "Eliminación de bolsas de aire",
          "Equilibrado del sistema"
        ]
      }
    ],
    galleryImages: [
      { src: boilerInstallationWall, alt: "Professional plumbing installation in Lanzarote villa", altEs: "Instalación profesional de fontanería en villa de Lanzarote" },
      { src: boilerPipeworkManifold, alt: "Clean pipework installation with isolation valves", altEs: "Instalación limpia de tuberías con válvulas de aislamiento" },
      { src: boilerOutdoorSetup, alt: "Outdoor plumbing setup with boiler enclosure", altEs: "Instalación de fontanería exterior con carcasa de caldera" },
      { src: boilerCustomHousing, alt: "Custom plumbing housing solution", altEs: "Solución de carcasa de fontanería personalizada" }
    ],
    whyChooseUs: [
      {
        icon: Search,
        title: "Diagnostic Expertise",
        titleEs: "Experiencia Diagnóstica",
        text: "As leak detection specialists, we understand plumbing systems inside and out. We find and fix problems that others miss.",
        textEs: "Como especialistas en detección de fugas, entendemos los sistemas de fontanería por dentro y por fuera. Encontramos y arreglamos problemas que otros pasan por alto."
      },
      {
        icon: Shield,
        title: "2-Year Guarantee",
        titleEs: "Garantía de 2 Años",
        text: "Every plumbing repair we complete is backed by our 2-Year Guarantee. We stand behind our workmanship.",
        textEs: "Cada reparación de fontanería que completamos está respaldada por nuestra Garantía de 2 Años. Respaldamos nuestro trabajo."
      },
      {
        icon: BadgeCheck,
        title: "Quality Materials",
        titleEs: "Materiales de Calidad",
        text: "We use quality fittings and materials that last. No cheap fixes that fail in months.",
        textEs: "Usamos accesorios y materiales de calidad que duran. Sin arreglos baratos que fallan en meses."
      }
    ]
  },

  "boiler-services": {
    slug: "boiler-services",
    slugEs: "servicios-calderas",
    title: "Boiler & Water Heater Services",
    titleEs: "Servicios de Calderas y Calentadores",
    metaTitle: "Boiler Services Lanzarote | Install Repair | Canary Detect",
    metaTitleEs: "Servicios Calderas Lanzarote | Instalación Reparación",
    metaDescription: "Boiler installation, repair & servicing in Lanzarote. Water heaters, custom housings, maintenance. Fast response. 2-Year Guarantee.",
    metaDescriptionEs: "Instalación, reparación y mantenimiento de calderas en Lanzarote. Calentadores, carcasas personalizadas. Respuesta rápida. Garantía 2 años.",
    description: "No hot water? Boiler issues? We'll get it sorted.",
    descriptionEs: "¿Sin agua caliente? ¿Problemas con la caldera? Lo solucionamos.",
    icon: Flame,
    heroImage: boilerOutdoorSetup,
    introTitle: "Complete Boiler & Water Heater Solutions",
    introTitleEs: "Soluciones Completas para Calderas y Calentadores",
    introText: "Lanzarote properties rely on water heaters and boilers for comfortable living. Whether your hot water has stopped working, you need a new installation, or your boiler needs servicing, Canary Detect provides professional solutions.\n\nWe install, repair and service all types of water heaters—from simple electric units to more complex gas boilers. We also design and build custom outdoor housings to protect your equipment from the elements while maintaining easy access for servicing.",
    introTextEs: "Las propiedades de Lanzarote dependen de calentadores de agua y calderas para una vida cómoda. Ya sea que su agua caliente haya dejado de funcionar, necesite una nueva instalación o su caldera necesite mantenimiento, Canary Detect proporciona soluciones profesionales.\n\nInstalamos, reparamos y mantenemos todo tipo de calentadores de agua, desde unidades eléctricas simples hasta calderas de gas más complejas. También diseñamos y construimos carcasas exteriores personalizadas para proteger su equipo de los elementos mientras mantenemos fácil acceso para el mantenimiento.",
    services: [
      {
        name: "Boiler Repairs",
        nameEs: "Reparación de Calderas",
        items: [
          "No hot water diagnostics",
          "Ignition and pilot light issues",
          "Thermostat repairs and replacements",
          "Pressure problems and leaks",
          "Error code diagnostics",
          "Emergency boiler repairs"
        ],
        itemsEs: [
          "Diagnóstico de falta de agua caliente",
          "Problemas de encendido y piloto",
          "Reparación y sustitución de termostatos",
          "Problemas de presión y fugas",
          "Diagnóstico de códigos de error",
          "Reparaciones de emergencia de calderas"
        ]
      },
      {
        name: "Boiler Installation & Replacement",
        nameEs: "Instalación y Sustitución de Calderas",
        items: [
          "New boiler installations",
          "Old boiler replacements",
          "System upgrades",
          "Energy-efficient models",
          "Location assessment and planning",
          "Full commissioning and testing"
        ],
        itemsEs: [
          "Instalación de calderas nuevas",
          "Sustitución de calderas antiguas",
          "Actualizaciones del sistema",
          "Modelos de alta eficiencia energética",
          "Evaluación de ubicación y planificación",
          "Puesta en marcha y pruebas completas"
        ]
      },
      {
        name: "Boiler Servicing",
        nameEs: "Mantenimiento de Calderas",
        items: [
          "Annual boiler servicing",
          "Safety checks",
          "Efficiency testing",
          "Component cleaning",
          "Preventative maintenance",
          "Service records and documentation"
        ],
        itemsEs: [
          "Servicio anual de calderas",
          "Comprobaciones de seguridad",
          "Pruebas de eficiencia",
          "Limpieza de componentes",
          "Mantenimiento preventivo",
          "Registros y documentación de servicio"
        ]
      },
      {
        name: "Custom Boiler Housings",
        nameEs: "Carcasas Personalizadas para Calderas",
        items: [
          "Weather-resistant outdoor enclosures",
          "Ventilated housing designs",
          "Custom-built to your requirements",
          "Easy access panels for servicing",
          "Aesthetic finishes to match property",
          "Secure lockable enclosures"
        ],
        itemsEs: [
          "Carcasas exteriores resistentes a la intemperie",
          "Diseños de carcasas ventiladas",
          "Construcción a medida según sus requisitos",
          "Paneles de fácil acceso para mantenimiento",
          "Acabados estéticos a juego con la propiedad",
          "Carcasas seguras con cerradura"
        ]
      },
      {
        name: "Water Heater Services",
        nameEs: "Servicios de Calentadores de Agua",
        items: [
          "Electric water heater repairs",
          "Tank replacements",
          "Thermostat adjustments",
          "Anode rod replacements",
          "Descaling and maintenance",
          "Instant water heater installations"
        ],
        itemsEs: [
          "Reparación de calentadores eléctricos",
          "Sustitución de tanques",
          "Ajustes de termostato",
          "Sustitución de ánodos",
          "Descalcificación y mantenimiento",
          "Instalación de calentadores instantáneos"
        ]
      }
    ],
    galleryImages: [
      { src: boilerOutdoorSetup, alt: "Outdoor boiler installation with custom protective housing Lanzarote", altEs: "Instalación de caldera exterior con carcasa protectora personalizada Lanzarote" },
      { src: customHousingBuild, alt: "Building custom wooden frame enclosure for water heater Lanzarote", altEs: "Construcción de carcasa de madera personalizada para calentador de agua Lanzarote" },
      { src: waterHeaterEnclosure, alt: "Teka water heater installed in custom built-in enclosure", altEs: "Calentador Teka instalado en carcasa empotrada personalizada" },
      { src: tekaWaterHeater, alt: "Wall-mounted Teka water heater with pipework connections", altEs: "Calentador de agua Teka en pared con conexiones de tuberías" },
      { src: waterHeaterWallMount, alt: "Electric water heater wall installation with valves", altEs: "Instalación de calentador eléctrico en pared con válvulas" },
      { src: boilerCustomHousing, alt: "Custom-built boiler enclosure for weather protection", altEs: "Carcasa de caldera personalizada para protección climática" },
      { src: boilerInstallationWall, alt: "Wall-mounted boiler installation with organized pipework", altEs: "Instalación de caldera en pared con tuberías organizadas" },
      { src: boilerPipeworkManifold, alt: "Professional boiler pipework manifold installation", altEs: "Instalación profesional de colector de tuberías de caldera" }
    ],
    whyChooseUs: [
      {
        icon: Thermometer,
        title: "All Types Covered",
        titleEs: "Todos los Tipos Cubiertos",
        text: "We work with electric, gas and solar water heating systems. Whatever you have, we can service it.",
        textEs: "Trabajamos con sistemas de calentamiento de agua eléctricos, de gas y solares. Sea lo que sea, podemos repararlo."
      },
      {
        icon: Shield,
        title: "2-Year Guarantee",
        titleEs: "Garantía de 2 Años",
        text: "All boiler installations and repairs come with our 2-Year Guarantee for complete peace of mind.",
        textEs: "Todas las instalaciones y reparaciones de calderas vienen con nuestra Garantía de 2 Años para total tranquilidad."
      },
      {
        icon: Home,
        title: "Custom Solutions",
        titleEs: "Soluciones Personalizadas",
        text: "Need an outdoor housing or unusual installation? We design and build custom solutions to fit your property.",
        textEs: "¿Necesita una carcasa exterior o instalación inusual? Diseñamos y construimos soluciones personalizadas para su propiedad."
      }
    ]
  },

  "system-upgrades": {
    slug: "system-upgrades",
    slugEs: "mejoras-sistema",
    title: "Plumbing System Upgrades",
    titleEs: "Mejoras del Sistema de Fontanería",
    metaTitle: "Plumbing Upgrades Lanzarote | Manifolds | Canary Detect",
    metaTitleEs: "Mejoras Fontanería Lanzarote | Colectores | Canary Detect",
    metaDescription: "Upgrade your plumbing system in Lanzarote. Manifold installations, repiping, pressure systems. Modern, efficient solutions. 2-Year Guarantee.",
    metaDescriptionEs: "Mejore su sistema de fontanería en Lanzarote. Instalación de colectores, retuberías, sistemas de presión. Soluciones modernas y eficientes. Garantía 2 años.",
    description: "Upgrade to modern, efficient plumbing systems.",
    descriptionEs: "Actualice a sistemas de fontanería modernos y eficientes.",
    icon: Settings,
    heroImage: boilerPipeworkManifold,
    introTitle: "Modern Plumbing Systems for Lanzarote Properties",
    introTitleEs: "Sistemas de Fontanería Modernos para Propiedades de Lanzarote",
    introText: "Older plumbing systems can cause ongoing problems—low pressure, inconsistent flow, difficulty isolating sections for repairs. Upgrading to modern plumbing technology solves these issues and adds long-term value to your property.\n\nOur system upgrade services include manifold installations that give individual control over every outlet, complete repiping to replace aging pipework, and pressure system improvements. All work is designed for Lanzarote's specific conditions and water quality.",
    introTextEs: "Los sistemas de fontanería antiguos pueden causar problemas continuos: baja presión, flujo inconsistente, dificultad para aislar secciones para reparaciones. Actualizar a tecnología de fontanería moderna resuelve estos problemas y añade valor a largo plazo a su propiedad.\n\nNuestros servicios de mejora del sistema incluyen instalaciones de colectores que dan control individual sobre cada salida, retuberías completas para reemplazar tuberías envejecidas y mejoras del sistema de presión. Todo el trabajo está diseñado para las condiciones específicas de Lanzarote y la calidad del agua.",
    services: [
      {
        name: "Manifold Installations",
        nameEs: "Instalación de Colectores",
        items: [
          "Central manifold systems",
          "Individual outlet isolation",
          "Hot and cold water manifolds",
          "Easy maintenance access",
          "Pressure balancing",
          "Future expansion capability"
        ],
        itemsEs: [
          "Sistemas de colectores centrales",
          "Aislamiento individual de salidas",
          "Colectores de agua fría y caliente",
          "Fácil acceso para mantenimiento",
          "Equilibrado de presión",
          "Capacidad de expansión futura"
        ]
      },
      {
        name: "Repiping Services",
        nameEs: "Servicios de Retubería",
        items: [
          "Complete property repiping",
          "Partial section upgrades",
          "Replacement of galvanised pipes",
          "Modern PVC/copper installations",
          "Underground pipe renewals",
          "Minimal disruption methods"
        ],
        itemsEs: [
          "Retubería completa de propiedad",
          "Mejoras de secciones parciales",
          "Sustitución de tuberías galvanizadas",
          "Instalaciones modernas de PVC/cobre",
          "Renovación de tuberías subterráneas",
          "Métodos de mínima interrupción"
        ]
      },
      {
        name: "Pressure Systems",
        nameEs: "Sistemas de Presión",
        items: [
          "Pump installations",
          "Pressure vessel installations",
          "Pressure reducing valves",
          "System balancing",
          "Variable speed pump upgrades",
          "Pressure monitoring systems"
        ],
        itemsEs: [
          "Instalación de bombas",
          "Instalación de depósitos de presión",
          "Válvulas reductoras de presión",
          "Equilibrado del sistema",
          "Mejoras de bombas de velocidad variable",
          "Sistemas de monitoreo de presión"
        ]
      },
      {
        name: "Water Quality Improvements",
        nameEs: "Mejoras de Calidad del Agua",
        items: [
          "Water softener installations",
          "Filter system installations",
          "Descaling treatments",
          "Limescale prevention",
          "Water quality testing"
        ],
        itemsEs: [
          "Instalación de descalcificadores",
          "Instalación de sistemas de filtrado",
          "Tratamientos de descalcificación",
          "Prevención de cal",
          "Análisis de calidad del agua"
        ]
      }
    ],
    galleryImages: [
      { src: boilerPipeworkManifold, alt: "Professional manifold installation with isolation valves Lanzarote", altEs: "Instalación profesional de colector con válvulas de aislamiento Lanzarote" },
      { src: poolValveManifoldWall, alt: "Wall-mounted manifold system with individual controls", altEs: "Sistema de colector en pared con controles individuales" },
      { src: poolValveCloseup, alt: "Quality ball valves for reliable system control", altEs: "Válvulas de bola de calidad para control fiable del sistema" },
      { src: poolComplexPipework, alt: "Complex pipework layout designed for efficiency", altEs: "Diseño de tuberías complejas para eficiencia" }
    ],
    whyChooseUs: [
      {
        icon: Settings,
        title: "Designed for Lanzarote",
        titleEs: "Diseñado para Lanzarote",
        text: "We understand local water conditions and design systems that cope with Lanzarote's hard water and variable mains pressure.",
        textEs: "Entendemos las condiciones locales del agua y diseñamos sistemas que funcionan con el agua dura de Lanzarote y la presión variable de la red."
      },
      {
        icon: Shield,
        title: "2-Year Guarantee",
        titleEs: "Garantía de 2 Años",
        text: "All system upgrades come with our 2-Year Guarantee. We're confident in our installations because we do them right.",
        textEs: "Todas las mejoras del sistema vienen con nuestra Garantía de 2 Años. Confiamos en nuestras instalaciones porque las hacemos bien."
      },
      {
        icon: Gauge,
        title: "Future-Proof Design",
        titleEs: "Diseño a Prueba de Futuro",
        text: "Our manifold systems allow for easy expansion and modification as your property needs change.",
        textEs: "Nuestros sistemas de colectores permiten fácil expansión y modificación según cambien las necesidades de su propiedad."
      }
    ]
  },

  "pool-plumbing": {
    slug: "pool-plumbing",
    slugEs: "fontaneria-piscinas",
    title: "Swimming Pool Plumbing",
    titleEs: "Fontanería para Piscinas",
    metaTitle: "Pool Plumbing Lanzarote | Valves Pumps | Canary Detect",
    metaTitleEs: "Fontanería Piscinas Lanzarote | Válvulas Bombas",
    metaDescription: "Professional pool plumbing services in Lanzarote. Valve replacements, pipe repairs, pump upgrades, heater installations, pressure testing. 2-Year Guarantee.",
    metaDescriptionEs: "Servicios profesionales de fontanería para piscinas en Lanzarote. Válvulas, reparación de tuberías, bombas, calentadores, pruebas de presión. Garantía 2 años.",
    description: "Valves, pipes, pumps, heaters—complete pool plumbing.",
    descriptionEs: "Válvulas, tuberías, bombas, calentadores—fontanería completa de piscinas.",
    icon: Droplets,
    heroImage: poolPumpRoomComplete,
    introTitle: "Complete Pool Plumbing Solutions",
    introTitleEs: "Soluciones Completas de Fontanería para Piscinas",
    introText: "Your swimming pool relies on a complex network of pipes, valves, pumps, and heating systems working together seamlessly. When any component fails or underperforms, it affects water circulation, heating efficiency, and ultimately your enjoyment of the pool.\n\nAt Canary Detect, we bring our diagnostic expertise and professional plumbing skills to every aspect of pool infrastructure. Whether you need a simple valve replacement, complete pipework rerouting, or a full pump room upgrade, we deliver lasting solutions backed by our 2-Year Guarantee.\n\nAs Lanzarote's leading leak detection specialists, we understand pool systems inside and out. We don't just fix problems; we identify the root cause and ensure your pool equipment operates at peak efficiency.",
    introTextEs: "Su piscina depende de una red compleja de tuberías, válvulas, bombas y sistemas de calefacción trabajando juntos sin problemas. Cuando cualquier componente falla o rinde por debajo de lo esperado, afecta la circulación del agua, la eficiencia de calefacción y, en última instancia, su disfrute de la piscina.\n\nEn Canary Detect, aportamos nuestra experiencia diagnóstica y habilidades profesionales de fontanería a cada aspecto de la infraestructura de piscinas. Ya sea que necesite un simple reemplazo de válvula, redirección completa de tuberías o una actualización completa de la sala de bombas, ofrecemos soluciones duraderas respaldadas por nuestra Garantía de 2 Años.\n\nComo los principales especialistas en detección de fugas de Lanzarote, entendemos los sistemas de piscinas por dentro y por fuera. No solo arreglamos problemas; identificamos la causa raíz y aseguramos que su equipo de piscina opere con máxima eficiencia.",
    services: [
      {
        name: "Valve Replacements",
        nameEs: "Reemplazo de Válvulas",
        items: [
          "Multiport valve repairs and replacements",
          "Ball valve and gate valve replacements",
          "Check valve installations",
          "Isolation valve additions for easier maintenance",
          "Union fitting installations for future serviceability"
        ],
        itemsEs: [
          "Reparación y sustitución de válvulas multipuerto",
          "Sustitución de válvulas de bola y compuerta",
          "Instalación de válvulas de retención",
          "Adición de válvulas de aislamiento para mantenimiento más fácil",
          "Instalación de racores de unión para servicio futuro"
        ]
      },
      {
        name: "Pipe Repairs & Renewals",
        nameEs: "Reparación y Renovación de Tuberías",
        items: [
          "Cracked and leaking pipe repairs",
          "Complete pipe section renewals",
          "Rigid PVC pressure pipe installations",
          "Flexible pipe-to-rigid conversions",
          "Underground pipe replacements",
          "Pipe insulation for heat retention"
        ],
        itemsEs: [
          "Reparación de tuberías agrietadas y con fugas",
          "Renovación completa de secciones de tubería",
          "Instalaciones de tuberías de PVC rígido a presión",
          "Conversiones de tuberías flexibles a rígidas",
          "Sustitución de tuberías subterráneas",
          "Aislamiento de tuberías para retención de calor"
        ]
      },
      {
        name: "Pipe Rerouting & Redesign",
        nameEs: "Rediseño y Redirección de Tuberías",
        items: [
          "Complete plant room reorganization",
          "Pipe rerouting for improved flow",
          "Access improvement modifications",
          "Bypass installations for equipment servicing",
          "System redesign for efficiency gains"
        ],
        itemsEs: [
          "Reorganización completa de la sala de máquinas",
          "Redirección de tuberías para mejor flujo",
          "Modificaciones para mejorar el acceso",
          "Instalaciones de bypass para servicio de equipos",
          "Rediseño del sistema para mayor eficiencia"
        ]
      },
      {
        name: "Pressure Testing & Leak Detection",
        nameEs: "Pruebas de Presión y Detección de Fugas",
        items: [
          "Full system pressure testing",
          "Individual line isolation and testing",
          "Underground leak location",
          "Return line and skimmer testing",
          "Pipe tracing and mapping",
          "Leak confirmation and reporting"
        ],
        itemsEs: [
          "Pruebas de presión del sistema completo",
          "Aislamiento y prueba de líneas individuales",
          "Localización de fugas subterráneas",
          "Pruebas de líneas de retorno y skimmers",
          "Trazado y mapeo de tuberías",
          "Confirmación e informe de fugas"
        ]
      },
      {
        name: "Pool Heater Installations",
        nameEs: "Instalación de Calentadores de Piscina",
        items: [
          "Heat pump installations",
          "Electric heater installations",
          "Solar heating system installations",
          "Heater repairs and servicing",
          "Bypass valve installations for heaters",
          "Thermostat and controller upgrades"
        ],
        itemsEs: [
          "Instalación de bombas de calor",
          "Instalación de calentadores eléctricos",
          "Instalación de sistemas de calefacción solar",
          "Reparación y mantenimiento de calentadores",
          "Instalación de válvulas de bypass para calentadores",
          "Actualizaciones de termostatos y controladores"
        ]
      },
      {
        name: "Pump Repairs & Upgrades",
        nameEs: "Reparaciones y Mejoras de Bombas",
        items: [
          "Pump motor repairs",
          "Seal and impeller replacements",
          "Complete pump replacements",
          "Variable-speed pump upgrades",
          "Pump sizing consultations",
          "Energy efficiency improvements",
          "Pump priming and air leak repairs"
        ],
        itemsEs: [
          "Reparación de motores de bomba",
          "Sustitución de sellos e impulsores",
          "Sustitución completa de bombas",
          "Mejoras a bombas de velocidad variable",
          "Consultas de dimensionamiento de bombas",
          "Mejoras de eficiencia energética",
          "Cebado de bombas y reparación de fugas de aire"
        ]
      }
    ],
    galleryImages: [
      { src: poolPumpRoomComplete, alt: "Complete pump room installation with sand filter and organized valve manifold Lanzarote", altEs: "Instalación completa de sala de bombas con filtro de arena y colector de válvulas organizado Lanzarote" },
      { src: poolValveCloseup, alt: "Quality ball valves for reliable isolation and flow control", altEs: "Válvulas de bola de calidad para aislamiento y control de flujo fiables" },
      { src: poolEquipmentBox, alt: "Underground pipe connections to pump equipment box", altEs: "Conexiones de tuberías subterráneas a caja de equipos de bombeo" },
      { src: poolPipeRerouting, alt: "New pressure-rated pipework installation for swimming pool", altEs: "Nueva instalación de tuberías a presión para piscina" },
      { src: poolValveManifoldWall, alt: "Wall-mounted valve manifold with individual line isolation", altEs: "Colector de válvulas en pared con aislamiento de líneas individuales" },
      { src: poolComplexPipework, alt: "Professional pipework layout for optimal flow and serviceability", altEs: "Diseño profesional de tuberías para flujo óptimo y servicio" }
    ],
    beforeAfterImage: {
      src: poolBeforeAfter,
      caption: "Complete pool valve system renewal - from tired, corroded pipework to a modern, serviceable installation with individual isolation valves.",
      captionEs: "Renovación completa del sistema de válvulas de piscina - de tuberías cansadas y corroídas a una instalación moderna y fácil de mantener con válvulas de aislamiento individuales."
    },
    whyChooseUs: [
      {
        icon: Search,
        title: "Diagnostic Expertise",
        titleEs: "Experiencia Diagnóstica",
        text: "As Lanzarote's premier leak detection company, we understand pool systems at a deeper level. We find problems others miss and fix them properly the first time.",
        textEs: "Como la principal empresa de detección de fugas de Lanzarote, entendemos los sistemas de piscinas a un nivel más profundo. Encontramos problemas que otros pasan por alto y los arreglamos correctamente la primera vez."
      },
      {
        icon: Shield,
        title: "2-Year Guarantee",
        titleEs: "Garantía de 2 Años",
        text: "Every pool plumbing job we complete is backed by our industry-leading 2-Year Guarantee. We're confident in our workmanship because we do the job right.",
        textEs: "Cada trabajo de fontanería de piscinas que completamos está respaldado por nuestra Garantía de 2 Años líder en la industria. Confiamos en nuestro trabajo porque lo hacemos bien."
      },
      {
        icon: BadgeCheck,
        title: "Quality Components",
        titleEs: "Componentes de Calidad",
        text: "We use pool-grade PVC pressure pipe, quality ball valves, and trusted pump brands. No shortcuts, no cheap fittings, just reliable solutions.",
        textEs: "Usamos tuberías de PVC a presión de grado piscina, válvulas de bola de calidad y marcas de bombas de confianza. Sin atajos, sin accesorios baratos, solo soluciones fiables."
      }
    ]
  }
};

// Helper functions
export const getPlumbingServiceBySlug = (slug: string, isSpanish: boolean): PlumbingService | undefined => {
  // First try direct match
  if (plumbingServicesData[slug]) {
    return plumbingServicesData[slug];
  }
  
  // Then try to find by Spanish slug
  for (const service of Object.values(plumbingServicesData)) {
    if (service.slugEs === slug) {
      return service;
    }
  }
  
  return undefined;
};

export const getAllPlumbingServices = (): PlumbingService[] => {
  return Object.values(plumbingServicesData);
};

export const getPlumbingSlug = (slug: string, isSpanish: boolean): string => {
  const service = plumbingServicesData[slug];
  if (service) {
    return isSpanish ? service.slugEs : service.slug;
  }
  return slug;
};
