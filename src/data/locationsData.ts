import { Droplets, Waves, Search, Wrench, LucideIcon } from "lucide-react";

export interface LocationData {
  name: string;
  slug: string;
  description: string;
  heroText: string;
  areaDescription: string;
  nearbyAreas: string[];
  services: {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const getLocationsData = (isSpanish: boolean): Record<string, LocationData> => {
  const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
  
  if (isSpanish) {
    return {
      "arrecife": {
        name: "Arrecife",
        slug: "arrecife",
        description: "Servicios profesionales de detección de fugas en Arrecife, la capital de Lanzarote.",
        heroText: "La capital de Lanzarote merece detección de fugas experta. Damos servicio a propiedades residenciales, hoteles y edificios comerciales en todo Arrecife con nuestra gama completa de servicios de detección y reparación de fugas de agua.",
        areaDescription: "Como la ciudad más grande de Lanzarote y puerto principal, Arrecife tiene una mezcla de propiedades antiguas y desarrollos modernos. La infraestructura de tuberías envejecida, combinada con el agua dura de la isla, hace que las fugas de agua sean comunes. Nuestro equipo proporciona tiempos de respuesta rápidos en Arrecife, normalmente entre 24-48 horas para citas estándar y el mismo día para emergencias.",
        nearbyAreas: ["San Bartolomé", "Playa Honda", "Tías", "Puerto del Carmen"],
        services: [
          { title: "Detección de Fugas de Agua Arrecife", description: "Detección de fugas de agua ocultas en propiedades de Arrecife usando imagen térmica, sensores acústicos y gas trazador. Encuentre fugas detrás de paredes y bajo suelos sin daños.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Arrecife", description: "Detección de fugas en piscinas y spa para hoteles, villas y piscinas residenciales de Arrecife. Precisión milimétrica para minimizar costes de reparación.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Arrecife", description: "Inspecciones con CCTV de desagües y tuberías en todo Arrecife. 6 sistemas de cámara para todos los tamaños con informes detallados en vídeo.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Arrecife", description: "Servicios completos de reparación de fugas en Arrecife. Desde detección hasta reparación - tuberías de agua, tuberías de piscina y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Arrecife | Fugas Agua y Piscinas | Canary Detect", description: "Detección profesional de fugas Arrecife. Detección de fugas de agua, piscinas, tuberías subterráneas y reparación en la capital de Lanzarote. Sin Encontrar Sin Pagar. Llame +34 711 051 071", keywords: "detección fugas Arrecife, fugas agua Arrecife, fugas piscina Arrecife, reparación fugas Arrecife, fontanero Arrecife Lanzarote" }
      },
      "puerto-del-carmen": {
        name: "Puerto del Carmen",
        slug: "puerto-del-carmen",
        description: "Servicios expertos de detección de fugas en Puerto del Carmen, el centro turístico más concurrido de Lanzarote.",
        heroText: "Los hoteles, apartamentos y villas de Puerto del Carmen necesitan detección de fugas fiable. Proporcionamos un servicio rápido y profesional para minimizar las molestias a huéspedes y residentes.",
        areaDescription: "Como el destino turístico principal de Lanzarote, Puerto del Carmen tiene una alta concentración de hoteles, apartamentos de vacaciones y villas de alquiler. Las fugas de agua pueden ser costosas para los propietarios, tanto en facturas de agua como en posibles daños a la experiencia de los huéspedes. Ofrecemos servicio prioritario para propiedades comerciales y llamadas de emergencia para hoteles con fugas activas.",
        nearbyAreas: ["Tías", "Playa Honda", "Arrecife", "Puerto Calero"],
        services: [
          { title: "Detección de Fugas de Agua Puerto del Carmen", description: "Detección rápida de fugas para hoteles y villas de Puerto del Carmen. Métodos no invasivos minimizan molestias a huéspedes. Informes para seguros incluidos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Puerto del Carmen", description: "Detección de fugas en las numerosas piscinas de hoteles y villas de Puerto del Carmen. Servicio experto con localización completa, no solo confirmación.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Puerto del Carmen", description: "Inspección CCTV y desatasco de desagües en Puerto del Carmen. Respuesta rápida para hoteles y restaurantes con problemas de drenaje.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Emergencia Puerto del Carmen", description: "Servicio de reparación de fugas de emergencia en Puerto del Carmen. Respuesta rápida para minimizar daños por agua y molestias a huéspedes.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Puerto del Carmen | Hoteles y Villas | Canary Detect", description: "Detección profesional de fugas Puerto del Carmen. Fugas de agua para hoteles, villas y apartamentos. Detección en piscinas, reparaciones de emergencia. Respuesta rápida. Llame +34 711 051 071", keywords: "detección fugas Puerto del Carmen, fugas agua Puerto del Carmen, fugas piscina Puerto del Carmen, detección fugas hoteles Lanzarote" }
      },
      "playa-blanca": {
        name: "Playa Blanca",
        slug: "playa-blanca",
        description: "Expertos locales en detección de fugas con base en Playa Blanca, dando servicio al sur de Lanzarote.",
        heroText: "Estamos ubicados aquí mismo en Playa Blanca, sus especialistas locales en detección de fugas. Con más de €80.000 en equipos profesionales, damos servicio a todo el sur de la isla con disponibilidad el mismo día.",
        areaDescription: "Playa Blanca es nuestra base, lo que significa que podemos ofrecer los tiempos de respuesta más rápidos en el sur de Lanzarote. Las villas de lujo y propiedades de la marina a menudo cuentan con sistemas de fontanería complejos y piscinas que requieren detección especializada. Conocemos los estilos de construcción locales y los problemas comunes, dándonos ventaja a la hora de encontrar y reparar fugas rápidamente.",
        nearbyAreas: ["Yaiza", "Femés", "Las Breñas", "El Golfo"],
        services: [
          { title: "Detección de Fugas de Agua Playa Blanca", description: "Detección de fugas el mismo día en Playa Blanca. Estamos ubicados localmente para responder rápido. Imagen térmica, gas trazador y detección acústica.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Playa Blanca", description: "Detección experta de fugas en piscinas para las villas de lujo y urbanizaciones de Playa Blanca. Localización completa con informes profesionales.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Detección Subterránea Playa Blanca", description: "Detección de tuberías y cables subterráneos en Playa Blanca. Esencial antes de construcción o jardinería en su propiedad.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Reparación de Fugas Playa Blanca", description: "Servicio local de reparación de fugas en Playa Blanca. Desde detección hasta reparación completa - tuberías, piscinas y desagües.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Playa Blanca | Expertos Locales | Canary Detect", description: "Detección local de fugas Playa Blanca. ¡Estamos aquí! Detección de fugas de agua, piscinas, subterráneas. Servicio el mismo día. Sin Encontrar Sin Pagar. Llame +34 711 051 071", keywords: "detección fugas Playa Blanca, fugas agua Playa Blanca, fugas piscina Playa Blanca, fontanero Playa Blanca, reparación fugas Playa Blanca Lanzarote" }
      },
      "costa-teguise": {
        name: "Costa Teguise",
        slug: "costa-teguise",
        description: "Servicios profesionales de detección de fugas en Costa Teguise, el resort familiar de Lanzarote.",
        heroText: "Los apartamentos, villas y propiedades comerciales de Costa Teguise necesitan detección de fugas fiable. Damos servicio a toda la zona con servicios profesionales de detección no invasiva.",
        areaDescription: "Costa Teguise es conocida por sus urbanizaciones construidas a propósito, muchas de los años 80 y 90. Estas propiedades a menudo tienen sistemas de fontanería compartidos complejos donde localizar la ubicación exacta de una fuga es crucial para evitar excavaciones innecesarias. Nuestro enfoque multi-tecnológico es perfecto para los bloques de apartamentos y piscinas comunitarias de Costa Teguise.",
        nearbyAreas: ["Teguise", "Tahiche", "Guatiza", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Costa Teguise", description: "Detección de fugas para apartamentos y villas de Costa Teguise. Métodos no invasivos ideales para edificios compartidos y propiedades comunitarias.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Costa Teguise", description: "Detección de fugas en piscinas comunitarias y privadas en Costa Teguise. Informes profesionales para administradores de comunidades.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Tuberías Costa Teguise", description: "Inspección CCTV de tuberías para propiedades de Costa Teguise. Evalúe el estado de tuberías envejecidas antes de que los problemas se agraven.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Costa Teguise", description: "Servicio profesional de reparación de fugas en Costa Teguise. Soluciones completas para propiedades residenciales y comerciales.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Costa Teguise | Apartamentos y Villas | Canary Detect", description: "Detección profesional de fugas Costa Teguise. Fugas de agua para apartamentos, villas y piscinas comunitarias. Servicio experto para edificios compartidos. Llame +34 711 051 071", keywords: "detección fugas Costa Teguise, fugas agua Costa Teguise, fugas piscina Costa Teguise, fugas apartamentos Lanzarote" }
      },
      "yaiza": {
        name: "Yaiza",
        slug: "yaiza",
        description: "Servicios profesionales de detección de fugas en Yaiza, uno de los municipios más pintorescos de Lanzarote.",
        heroText: "Las villas de lujo, fincas rurales y propiedades tradicionales de Yaiza merecen detección de fugas experta. Proporcionamos servicios especializados en todo este hermoso municipio.",
        areaDescription: "El municipio de Yaiza cubre el suroeste de Lanzarote incluyendo Playa Blanca, El Golfo y la impresionante zona del Parque Nacional de Timanfaya. La región cuenta con muchas propiedades de alta gama con sistemas de agua complejos y piscinas. Nuestra proximidad a Yaiza (estamos basados en Playa Blanca) significa tiempos de respuesta rápidos y conocimiento local de estilos de construcción y problemas comunes de fontanería.",
        nearbyAreas: ["Playa Blanca", "El Golfo", "Femés", "Uga", "Las Breñas"],
        services: [
          { title: "Detección de Fugas de Agua Yaiza", description: "Detección experta de fugas para las villas de lujo y fincas rurales de Yaiza. Imagen térmica y detección acústica para fugas ocultas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Yaiza", description: "Detección de fugas en las numerosas piscinas privadas de Yaiza. Servicio completo de localización con informes profesionales.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Detección Subterránea Yaiza", description: "Detección de tuberías y servicios subterráneos para propiedades rurales en Yaiza. Esencial para proyectos de construcción y jardinería.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Reparación de Fugas Yaiza", description: "Servicio profesional de reparación de fugas en todo el municipio de Yaiza. Tuberías de agua, sistemas de piscina y reparaciones subterráneas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Yaiza | Villas y Fincas | Canary Detect", description: "Detección profesional de fugas Yaiza. Fugas de agua para villas de lujo, fincas y propiedades rurales. Detección en piscinas. Servicio local rápido. Llame +34 711 051 071", keywords: "detección fugas Yaiza, fugas agua Yaiza, fugas piscina Yaiza, fugas villa Lanzarote, reparación fugas finca Yaiza" }
      },
      "tias": {
        name: "Tías",
        slug: "tias",
        description: "Servicios expertos de detección de fugas en Tías, uno de los municipios de más rápido crecimiento de Lanzarote.",
        heroText: "El municipio de Tías, hogar de Puerto del Carmen, necesita servicios fiables de detección de fugas. Damos servicio a propiedades residenciales, comerciales y turísticas en toda la zona.",
        areaDescription: "Tías es uno de los municipios más poblados de Lanzarote, abarcando Puerto del Carmen y las zonas residenciales circundantes. La mezcla de propiedades españolas antiguas y desarrollos turísticos más nuevos significa sistemas de fontanería variados y diferentes tipos de desafíos de fugas. Nuestro enfoque multi-tecnológico es ideal para localizar fugas con precisión en cualquier tipo de propiedad.",
        nearbyAreas: ["Puerto del Carmen", "Mácher", "La Asomada", "Conil", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Tías", description: "Detección profesional de fugas en todo Tías. Servicio para propiedades residenciales y alquileres vacacionales con métodos de detección no invasivos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Tías", description: "Detección de fugas en piscinas para propiedades de Tías. Servicio experto para piscinas privadas y piscinas comunitarias.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Tías", description: "Inspecciones CCTV de desagües e inspección de tuberías en Tías. Identifique obstrucciones, daños y problemas de drenaje rápidamente.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Tías", description: "Servicios completos de reparación de fugas en Tías. Desde detección hasta reparación profesional de todo tipo de fugas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Tías | Agua y Piscinas | Canary Detect", description: "Detección profesional de fugas Tías. Fugas de agua, piscinas e inspección de desagües. Servicio en Tías y Puerto del Carmen. Sin Encontrar Sin Pagar. Llame +34 711 051 071", keywords: "detección fugas Tías, fugas agua Tías, fugas piscina Tías, fontanero Tías Lanzarote, reparación fugas Tías" }
      },
      "playa-honda": {
        name: "Playa Honda",
        slug: "playa-honda",
        description: "Detección profesional de fugas en Playa Honda, la segunda ciudad más grande de Lanzarote.",
        heroText: "Las propiedades residenciales y edificios comerciales de Playa Honda necesitan detección de fugas fiable. Proporcionamos un servicio rápido y profesional a esta comunidad en crecimiento.",
        areaDescription: "Playa Honda es el segundo centro de población más grande de Lanzarote, ubicado entre Arrecife y el aeropuerto. La ciudad tiene una mezcla de bloques de apartamentos, adosados y propiedades comerciales. Muchos edificios datan de los años 80 y 90, lo que significa que las tuberías envejecidas son comunes. Nuestra tecnología de detección puede localizar fugas en estos sistemas antiguos sin excavaciones innecesarias.",
        nearbyAreas: ["Arrecife", "San Bartolomé", "Tías", "Puerto del Carmen"],
        services: [
          { title: "Detección de Fugas de Agua Playa Honda", description: "Detección de fugas para apartamentos y casas de Playa Honda. Métodos no invasivos ideales para edificios compartidos y propiedades comunitarias.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Playa Honda", description: "Detección de fugas en piscinas comunitarias y privadas en Playa Honda. Informes profesionales para administradores de propiedades.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Tuberías Playa Honda", description: "Inspección CCTV de tuberías para propiedades de Playa Honda. Evalúe el estado de tuberías envejecidas antes de que los problemas se agraven.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Playa Honda", description: "Reparación profesional de fugas en Playa Honda. Tuberías de agua, desagües y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Playa Honda | Apartamentos y Casas | Canary Detect", description: "Detección profesional de fugas Playa Honda. Fugas de agua para apartamentos, casas y edificios comunitarios. Respuesta rápida. Sin Encontrar Sin Pagar. Llame +34 711 051 071", keywords: "detección fugas Playa Honda, fugas agua Playa Honda, fugas piscina Playa Honda, fontanero Playa Honda, fugas apartamento Playa Honda" }
      },
      "san-bartolome": {
        name: "San Bartolomé",
        slug: "san-bartolome",
        description: "Servicios expertos de detección de fugas en San Bartolomé, en el corazón de Lanzarote.",
        heroText: "Las propiedades residenciales y fincas rurales de San Bartolomé necesitan detección de fugas especializada. Proporcionamos servicios profesionales en todo este municipio central.",
        areaDescription: "San Bartolomé se sitúa en el centro geográfico de Lanzarote, haciéndolo fácilmente accesible desde nuestra base. El municipio incluye pueblos tradicionales y propiedades rurales así como desarrollos más modernos. Los sistemas de suministro de agua subterráneos son comunes en zonas rurales, requiriendo equipos de detección especializados para localizar fugas con precisión.",
        nearbyAreas: ["Arrecife", "Playa Honda", "Tías", "Teguise", "Mozaga"],
        services: [
          { title: "Detección de Fugas de Agua San Bartolomé", description: "Detección de fugas para propiedades de San Bartolomé. Servicio especializado tanto para casas de pueblo como para fincas rurales.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea San Bartolomé", description: "Detección de tuberías subterráneas para las propiedades rurales de San Bartolomé. Localice tuberías enterradas antes de trabajos de excavación.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas San Bartolomé", description: "Detección de fugas para piscinas privadas en San Bartolomé. Inspección completa con localización de fugas.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas San Bartolomé", description: "Reparación profesional de fugas en todo San Bartolomé. Tuberías de agua, sistemas subterráneos y reparaciones de piscinas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas San Bartolomé | Rural y Pueblos | Canary Detect", description: "Detección profesional de fugas San Bartolomé. Fugas de agua para casas de pueblo, fincas y propiedades rurales. Detección de tuberías subterráneas. Llame +34 711 051 071", keywords: "detección fugas San Bartolomé, fugas agua San Bartolomé, fugas subterráneas San Bartolomé, fugas rurales Lanzarote" }
      },
      "teguise": {
        name: "Teguise",
        slug: "teguise",
        description: "Detección profesional de fugas en Teguise, la histórica antigua capital de Lanzarote.",
        heroText: "Los edificios históricos de Teguise y los pueblos circundantes necesitan detección de fugas especializada. Proporcionamos servicios expertos para propiedades tradicionales y desarrollos modernos por igual.",
        areaDescription: "Teguise es el municipio más grande de Lanzarote por superficie, extendiéndose desde Costa Teguise en la costa hasta el histórico pueblo de Teguise en el interior. La zona incluye arquitectura tradicional canaria, fincas rurales y desarrollos costeros modernos. Las propiedades históricas a menudo tienen sistemas de fontanería complejos o inusuales que requieren métodos de detección cuidadosos y no invasivos.",
        nearbyAreas: ["Costa Teguise", "Tahiche", "Guatiza", "Haría", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Teguise", description: "Detección especializada de fugas para las propiedades históricas y casas modernas de Teguise. Métodos no invasivos protegen edificios valiosos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Teguise", description: "Detección de fugas en piscinas para el municipio de Teguise. Servicio para villas rurales y urbanizaciones de Costa Teguise.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Teguise", description: "Inspecciones CCTV de desagües para propiedades de Teguise. Esencial para edificios antiguos con trazados de drenaje desconocidos.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Teguise", description: "Reparación profesional de fugas en Teguise. Reparaciones respetuosas para propiedades históricas y soluciones modernas para obras nuevas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        seo: { title: "Detección de Fugas Teguise | Propiedades Históricas y Rurales | Canary Detect", description: "Detección profesional de fugas Teguise. Servicio especializado para edificios históricos, fincas rurales y propiedades costeras. Métodos no invasivos. Llame +34 711 051 071", keywords: "detección fugas Teguise, fugas agua Teguise, fugas edificios históricos Lanzarote, fugas rurales Teguise, Costa Teguise fugas" }
      }
    };
  }

  // English version (default)
  return {
    "arrecife": {
      name: "Arrecife",
      slug: "arrecife",
      description: "Professional leak detection services in Arrecife, Lanzarote's capital city.",
      heroText: "Lanzarote's capital city deserves expert leak detection. We serve residential properties, hotels, and commercial buildings throughout Arrecife with our comprehensive range of water leak detection and repair services.",
      areaDescription: "As Lanzarote's largest town and main port, Arrecife has a mix of older properties and modern developments. Aging pipe infrastructure, combined with the island's hard water, means water leaks are common. Our team provides fast response times to Arrecife, typically within 24-48 hours for standard appointments and same-day for emergencies.",
      nearbyAreas: ["San Bartolomé", "Playa Honda", "Tías", "Puerto del Carmen"],
      services: [
        { title: "Water Leak Detection Arrecife", description: "Hidden water leak detection in Arrecife properties using thermal imaging, acoustic sensors and tracer gas. Find leaks behind walls and under floors without damage.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Arrecife", description: "Swimming pool and spa leak detection for Arrecife hotels, villas and residential pools. Pinpoint accuracy to minimize repair costs.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Arrecife", description: "CCTV drain surveys and pipe inspection throughout Arrecife. 6 camera systems for all pipe sizes with detailed video reports.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Arrecife", description: "Complete leak repair services in Arrecife. From detection to repair - water pipes, pool pipes and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Arrecife | Water & Pool Leak Detection | Canary Detect", description: "Professional leak detection Arrecife. Water leak detection, pool leak detection, underground pipe detection & leak repair in Lanzarote's capital. No Find No Fee. Call +34 711 051 071", keywords: "leak detection Arrecife, water leak detection Arrecife, pool leak detection Arrecife, leak repair Arrecife, plumber Arrecife Lanzarote, hidden water leak Arrecife" }
    },
    "puerto-del-carmen": {
      name: "Puerto del Carmen",
      slug: "puerto-del-carmen",
      description: "Expert leak detection services in Puerto del Carmen, Lanzarote's busiest tourist resort.",
      heroText: "Puerto del Carmen's hotels, apartments and villas need reliable leak detection. We provide fast, professional service to minimize disruption to guests and residents alike.",
      areaDescription: "As Lanzarote's premier tourist destination, Puerto del Carmen has a high concentration of hotels, holiday apartments and rental villas. Water leaks can be costly for property owners—both in water bills and potential damage to guest experiences. We offer priority service for commercial properties and emergency call-outs for hotels experiencing active leaks.",
      nearbyAreas: ["Tías", "Playa Honda", "Arrecife", "Puerto Calero"],
      services: [
        { title: "Water Leak Detection Puerto del Carmen", description: "Fast water leak detection for Puerto del Carmen hotels and villas. Non-invasive methods minimize disruption to guests. Insurance-ready reports included.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Puerto del Carmen", description: "Swimming pool leak detection for Puerto del Carmen's many hotel and villa pools. Expert service with complete pinpointing—not just confirmation.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Puerto del Carmen", description: "CCTV drain inspection and unblocking in Puerto del Carmen. Fast response for hotels and restaurants experiencing drainage issues.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Emergency Leak Repair Puerto del Carmen", description: "Emergency leak repair service in Puerto del Carmen. Quick response to minimize water damage and guest disruption.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Puerto del Carmen | Hotel & Villa Leak Detection | Canary Detect", description: "Professional leak detection Puerto del Carmen. Water leak detection for hotels, villas & apartments. Pool leak detection, emergency repairs. Fast response. Call +34 711 051 071", keywords: "leak detection Puerto del Carmen, water leak detection Puerto del Carmen, pool leak detection Puerto del Carmen, hotel leak detection Lanzarote, villa leak repair Puerto del Carmen" }
    },
    "playa-blanca": {
      name: "Playa Blanca",
      slug: "playa-blanca",
      description: "Local leak detection experts based in Playa Blanca, serving the south of Lanzarote.",
      heroText: "We're based right here in Playa Blanca—your local leak detection specialists. With €80,000+ of professional equipment, we serve the entire south of the island with same-day availability.",
      areaDescription: "Playa Blanca is our home base, meaning we can offer the fastest response times in the south of Lanzarote. The area's luxury villas and marina properties often feature complex plumbing systems and swimming pools that require specialist leak detection. We know the local building styles and common issues, giving us an edge when it comes to finding and fixing leaks quickly.",
      nearbyAreas: ["Yaiza", "Femés", "Las Breñas", "El Golfo"],
      services: [
        { title: "Water Leak Detection Playa Blanca", description: "Same-day water leak detection in Playa Blanca. We're based locally so can respond fast. Thermal imaging, tracer gas and acoustic detection.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Playa Blanca", description: "Expert pool leak detection for Playa Blanca's luxury villas and developments. Complete leak pinpointing with professional reports.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Underground Detection Playa Blanca", description: "Underground pipe and cable detection in Playa Blanca. Essential before construction or landscaping on your property.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Leak Repair Playa Blanca", description: "Local leak repair service in Playa Blanca. From detection through to complete repair—pipes, pools and drains.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Playa Blanca | Local Leak Detection Experts | Canary Detect", description: "Local leak detection Playa Blanca. We're based here! Water leak detection, pool leak detection, underground detection. Same-day service. No Find No Fee. Call +34 711 051 071", keywords: "leak detection Playa Blanca, water leak detection Playa Blanca, pool leak detection Playa Blanca, plumber Playa Blanca, leak repair Playa Blanca Lanzarote" }
    },
    "costa-teguise": {
      name: "Costa Teguise",
      slug: "costa-teguise",
      description: "Professional leak detection services in Costa Teguise, Lanzarote's family-friendly resort.",
      heroText: "Costa Teguise's apartments, villas and commercial properties need reliable leak detection. We serve the whole area with professional, non-invasive leak detection services.",
      areaDescription: "Costa Teguise is known for its purpose-built resort developments, many dating from the 1980s and 90s. These properties often have complex shared plumbing systems where pinpointing a leak's exact location is crucial to avoid unnecessary excavation. Our multi-technology approach is perfect for Costa Teguise's apartment blocks and community pools.",
      nearbyAreas: ["Teguise", "Tahiche", "Guatiza", "Arrecife"],
      services: [
        { title: "Water Leak Detection Costa Teguise", description: "Water leak detection for Costa Teguise apartments and villas. Non-invasive methods ideal for shared buildings and community properties.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Costa Teguise", description: "Community pool and private pool leak detection in Costa Teguise. Professional reports for community administrators and property managers.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Pipe Inspection Costa Teguise", description: "CCTV pipe inspection for Costa Teguise properties. Assess condition of aging pipework before problems escalate.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Costa Teguise", description: "Professional leak repair service in Costa Teguise. Complete solutions for residential and commercial properties.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Costa Teguise | Apartment & Villa Leak Detection | Canary Detect", description: "Professional leak detection Costa Teguise. Water leak detection for apartments, villas & community pools. Expert service for shared buildings. Call +34 711 051 071", keywords: "leak detection Costa Teguise, water leak detection Costa Teguise, pool leak detection Costa Teguise, apartment leak detection Lanzarote, community pool leak Costa Teguise" }
    },
    "yaiza": {
      name: "Yaiza",
      slug: "yaiza",
      description: "Professional leak detection services in Yaiza, one of Lanzarote's most picturesque municipalities.",
      heroText: "Yaiza's luxury villas, rural fincas and traditional properties deserve expert leak detection. We provide specialist services throughout this beautiful municipality.",
      areaDescription: "Yaiza municipality covers the southwest of Lanzarote including Playa Blanca, El Golfo, and the stunning Timanfaya National Park area. The region features many high-end properties with complex water systems and swimming pools. Our proximity to Yaiza (we're based in Playa Blanca) means fast response times and local knowledge of building styles and common plumbing issues in the area.",
      nearbyAreas: ["Playa Blanca", "El Golfo", "Femés", "Uga", "Las Breñas"],
      services: [
        { title: "Water Leak Detection Yaiza", description: "Expert water leak detection for Yaiza's luxury villas and rural fincas. Thermal imaging and acoustic detection for hidden leaks.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Yaiza", description: "Swimming pool leak detection for Yaiza's many private pools. Complete pinpointing service with professional reports.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Underground Detection Yaiza", description: "Underground pipe and utility detection for rural properties in Yaiza. Essential for construction and landscaping projects.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Leak Repair Yaiza", description: "Professional leak repair service throughout Yaiza municipality. Water pipes, pool systems and underground repairs.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Yaiza | Villa & Finca Leak Detection | Canary Detect", description: "Professional leak detection Yaiza. Water leak detection for luxury villas, fincas & rural properties. Pool leak detection. Fast local service. Call +34 711 051 071", keywords: "leak detection Yaiza, water leak detection Yaiza, pool leak detection Yaiza, villa leak detection Lanzarote, finca leak repair Yaiza" }
    },
    "tias": {
      name: "Tías",
      slug: "tias",
      description: "Expert leak detection services in Tías, serving one of Lanzarote's fastest-growing municipalities.",
      heroText: "Tías municipality, home to Puerto del Carmen, needs reliable leak detection services. We serve residential, commercial and tourist properties throughout the area.",
      areaDescription: "Tías is one of Lanzarote's most populous municipalities, encompassing Puerto del Carmen and surrounding residential areas. The mix of older Spanish properties and newer tourist developments means varied plumbing systems and different types of leak challenges. Our multi-technology approach is ideal for accurately locating leaks in any property type.",
      nearbyAreas: ["Puerto del Carmen", "Mácher", "La Asomada", "Conil", "Arrecife"],
      services: [
        { title: "Water Leak Detection Tías", description: "Professional water leak detection throughout Tías. Serving residential properties and holiday rentals with non-invasive detection methods.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Tías", description: "Pool leak detection for Tías properties. Expert service for private pools and community swimming pools.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Tías", description: "CCTV drain surveys and pipe inspection in Tías. Identify blockages, damage and drainage issues quickly.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Tías", description: "Complete leak repair services in Tías. From detection through to professional repair of all leak types.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Tías | Water & Pool Leak Detection | Canary Detect", description: "Professional leak detection Tías. Water leak detection, pool leak detection & drain surveys. Serving Tías and Puerto del Carmen. No Find No Fee. Call +34 711 051 071", keywords: "leak detection Tías, water leak detection Tías, pool leak detection Tías, plumber Tías Lanzarote, leak repair Tías" }
    },
    "playa-honda": {
      name: "Playa Honda",
      slug: "playa-honda",
      description: "Professional leak detection in Playa Honda, Lanzarote's second-largest town.",
      heroText: "Playa Honda's residential properties and commercial buildings need reliable leak detection. We provide fast, professional service to this growing community.",
      areaDescription: "Playa Honda is Lanzarote's second-largest population centre, located between Arrecife and the airport. The town has a mix of apartment blocks, townhouses and commercial properties. Many buildings date from the 1980s and 90s, meaning aging pipework is common. Our leak detection technology can pinpoint leaks in these older systems without unnecessary excavation.",
      nearbyAreas: ["Arrecife", "San Bartolomé", "Tías", "Puerto del Carmen"],
      services: [
        { title: "Water Leak Detection Playa Honda", description: "Water leak detection for Playa Honda apartments and houses. Non-invasive methods ideal for shared buildings and community properties.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Playa Honda", description: "Community pool and private pool leak detection in Playa Honda. Professional reports for property managers.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Pipe Inspection Playa Honda", description: "CCTV pipe inspection for Playa Honda properties. Assess aging pipework condition before problems escalate.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Playa Honda", description: "Professional leak repair in Playa Honda. Water pipes, drains and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Playa Honda | Apartment & House Leak Detection | Canary Detect", description: "Professional leak detection Playa Honda. Water leak detection for apartments, houses & community buildings. Fast response. No Find No Fee. Call +34 711 051 071", keywords: "leak detection Playa Honda, water leak detection Playa Honda, pool leak detection Playa Honda, plumber Playa Honda, apartment leak Playa Honda" }
    },
    "san-bartolome": {
      name: "San Bartolomé",
      slug: "san-bartolome",
      description: "Expert leak detection services in San Bartolomé, in the heart of Lanzarote.",
      heroText: "San Bartolomé's residential properties and rural fincas need specialist leak detection. We provide professional services throughout this central municipality.",
      areaDescription: "San Bartolomé sits at the geographic centre of Lanzarote, making it easily accessible from our base. The municipality includes traditional villages and rural properties as well as more modern developments. Underground water supply systems are common in rural areas, requiring specialist detection equipment to locate leaks accurately.",
      nearbyAreas: ["Arrecife", "Playa Honda", "Tías", "Teguise", "Mozaga"],
      services: [
        { title: "Water Leak Detection San Bartolomé", description: "Water leak detection for San Bartolomé properties. Specialist service for both village houses and rural fincas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection San Bartolomé", description: "Underground pipe detection for San Bartolomé's rural properties. Locate buried pipes before excavation work.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection San Bartolomé", description: "Pool leak detection for private pools in San Bartolomé. Complete survey with leak pinpointing.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair San Bartolomé", description: "Professional leak repair throughout San Bartolomé. Water pipes, underground systems and pool repairs.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection San Bartolomé | Rural & Village Leak Detection | Canary Detect", description: "Professional leak detection San Bartolomé. Water leak detection for village houses, fincas & rural properties. Underground pipe detection. Call +34 711 051 071", keywords: "leak detection San Bartolomé, water leak detection San Bartolomé, underground leak detection San Bartolomé, rural leak detection Lanzarote" }
    },
    "teguise": {
      name: "Teguise",
      slug: "teguise",
      description: "Professional leak detection in Teguise, Lanzarote's historic former capital.",
      heroText: "Teguise's historic buildings and surrounding villages need specialist leak detection. We provide expert services for traditional properties and modern developments alike.",
      areaDescription: "Teguise is Lanzarote's largest municipality by area, stretching from Costa Teguise on the coast to the historic town of Teguise inland. The area includes traditional Canarian architecture, rural fincas, and modern coastal developments. Historic properties often have complex or unusual plumbing systems that require careful, non-invasive leak detection methods.",
      nearbyAreas: ["Costa Teguise", "Tahiche", "Guatiza", "Haría", "Arrecife"],
      services: [
        { title: "Water Leak Detection Teguise", description: "Specialist water leak detection for Teguise's historic properties and modern homes. Non-invasive methods protect valuable buildings.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Teguise", description: "Pool leak detection for Teguise municipality. Serving rural villas and Costa Teguise developments.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Teguise", description: "CCTV drain surveys for Teguise properties. Essential for older buildings with unknown drainage layouts.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Teguise", description: "Professional leak repair in Teguise. Sympathetic repairs for historic properties and modern solutions for new builds.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      seo: { title: "Leak Detection Teguise | Historic & Rural Property Leak Detection | Canary Detect", description: "Professional leak detection Teguise. Specialist service for historic buildings, rural fincas & coastal properties. Non-invasive methods. Call +34 711 051 071", keywords: "leak detection Teguise, water leak detection Teguise, historic building leak detection Lanzarote, rural leak detection Teguise, Costa Teguise leak detection" }
    }
  };
};

// UI text translations
export const getLocationUIText = (isSpanish: boolean) => ({
  notFound: {
    title: isSpanish ? "Ubicación No Encontrada" : "Location Not Found",
    description: isSpanish ? "La ubicación que busca no existe." : "The location you're looking for doesn't exist.",
    button: isSpanish ? "Contactar" : "Contact Us",
  },
  hero: {
    badge: isSpanish ? "Detección de Fugas" : "Leak Detection",
    titlePrefix: isSpanish ? "Detección y Reparación Profesional de Fugas en " : "Professional Leak Detection & Repair in ",
  },
  cta: {
    getQuote: isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote",
    callNow: isSpanish ? "Llamar" : "Call",
    requestQuote: isSpanish ? "Solicitar Presupuesto" : "Request a Quote",
  },
  sections: {
    localExperts: isSpanish ? "Expertos Locales" : "Local Experts",
    servicesIn: (name: string) => isSpanish ? `Servicios de Detección de Fugas en ${name}` : `Leak Detection Services in ${name}`,
    getQuoteIn: (name: string) => isSpanish ? `Solicite Presupuesto en ${name}` : `Get a Quote in ${name}`,
    quoteDescription: (name: string) => isSpanish 
      ? `Contáctenos para una consulta y presupuesto gratuitos. Tiempos de respuesta rápidos en ${name}.`
      : `Contact us for a free consultation and quote. Fast response times across ${name}.`,
    hours: isSpanish ? "Lun-Vie 8:00-18:00, Sáb 9:00-14:00" : "Mon-Fri 8:00-18:00, Sat 9:00-14:00",
    ourServices: isSpanish ? "Nuestros Servicios" : "Our Services",
    servicesAvailable: (name: string) => isSpanish ? `Servicios Disponibles en ${name}` : `Services Available in ${name}`,
    coverageArea: isSpanish ? "Área de Cobertura" : "Coverage Area",
    nearbyAreas: isSpanish ? "También Damos Servicio a Zonas Cercanas" : "Also Serving Nearby Areas",
    nearbyDescription: (name: string) => isSpanish 
      ? `Además de ${name}, proporcionamos servicios de detección de fugas en todo Lanzarote.`
      : `In addition to ${name}, we provide leak detection services throughout Lanzarote.`,
    needLeakDetection: (name: string) => isSpanish ? `¿Necesita Detección de Fugas en ${name}?` : `Need Leak Detection in ${name}?`,
    ctaDescription: isSpanish 
      ? "Contacte con Canary Detect hoy para servicios profesionales de detección de fugas. Garantía Sin Encontrar, Sin Pagar."
      : "Contact Canary Detect today for professional leak detection services. No Find, No Fee guarantee.",
  },
  features: {
    noFindNoFee: {
      title: isSpanish ? "Garantía Sin Encontrar, Sin Pagar" : "No Find, No Fee Guarantee",
      description: isSpanish ? "Si no localizamos su fuga, no paga" : "If we can't locate your leak, you don't pay",
    },
    equipment: {
      title: isSpanish ? "+€80.000 en Equipos" : "€80,000+ Equipment",
      description: isSpanish ? "Imagen térmica, gas trazador, sensores acústicos" : "Thermal imaging, tracer gas, acoustic sensors",
    },
    accuracy: {
      title: isSpanish ? "Precisión Centimétrica" : "Centimetre Accuracy",
      description: isSpanish ? "Confirmación multi-tecnológica para precisión" : "Multi-technology confirmation for precision",
    },
    reports: {
      title: isSpanish ? "Informes para Seguros" : "Insurance Reports",
      description: isSpanish ? "Documentación profesional para reclamaciones" : "Professional documentation for claims",
    },
  },
});
