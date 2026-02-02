import { Droplets, Waves, Search, Wrench, LucideIcon } from "lucide-react";

export interface LocationData {
  name: string;
  slug: string;
  description: string;
  heroText: string;
  areaDescription: string;
  localChallenges: string;
  nearbyAreas: string[];
  services: {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }[];
  relatedLinks: {
    title: string;
    href: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const getLocationsData = (isSpanish: boolean): Record<string, LocationData> => {
  const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
  const blogBasePath = isSpanish ? '/es/blog' : '/blog';
  
  if (isSpanish) {
    return {
      "arrecife": {
        name: "Arrecife",
        slug: "arrecife",
        description: "Servicios profesionales de detección de fugas en Arrecife, la capital de Lanzarote.",
        heroText: "La capital de Lanzarote merece detección de fugas experta. Damos servicio a propiedades residenciales, hoteles y edificios comerciales en todo Arrecife con nuestra gama completa de servicios de detección y reparación de fugas de agua.",
        areaDescription: "Como la ciudad más grande de Lanzarote y puerto principal, Arrecife tiene una mezcla de propiedades antiguas y desarrollos modernos. La infraestructura de tuberías envejecida, combinada con el agua dura de la isla, hace que las fugas de agua sean comunes. Nuestro equipo proporciona tiempos de respuesta rápidos en Arrecife, normalmente entre 24-48 horas para citas estándar y el mismo día para emergencias.",
        localChallenges: "Los edificios del centro histórico de Arrecife presentan desafíos únicos: tuberías de hierro fundido de los años 60-70 con corrosión avanzada, sistemas de alcantarillado compartidos entre edificios antiguos, y acceso difícil en calles estrechas del casco viejo. Las propiedades cerca del Charco de San Ginés sufren especialmente de humedad por capilaridad debido a la proximidad al mar. Los bloques de apartamentos de la zona portuaria tienen sistemas de fontanería centralizados donde localizar la fuga exacta evita molestar a múltiples vecinos.",
        nearbyAreas: ["San Bartolomé", "Playa Honda", "Tías", "Puerto del Carmen"],
        services: [
          { title: "Detección de Fugas de Agua Arrecife", description: "Detección de fugas de agua ocultas en propiedades de Arrecife usando imagen térmica, sensores acústicos y gas trazador. Encuentre fugas detrás de paredes y bajo suelos sin daños.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Arrecife", description: "Detección de fugas en piscinas y spa para hoteles, villas y piscinas residenciales de Arrecife. Precisión milimétrica para minimizar costes de reparación.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Arrecife", description: "Inspecciones con CCTV de desagües y tuberías en todo Arrecife. 6 sistemas de cámara para todos los tamaños con informes detallados en vídeo.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Arrecife", description: "Servicios completos de reparación de fugas en Arrecife. Desde detección hasta reparación - tuberías de agua, tuberías de piscina y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "¿Contador de agua corriendo? Guía completa", href: `${blogBasePath}/contador-agua-girando-grifos-cerrados` },
          { title: "Cómo funciona el sistema de agua en Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
        ],
        seo: { title: "Detección Fugas Arrecife | Agua y Piscinas | Canary Detect", description: "Detección de fugas Arrecife. Fugas de agua, piscinas, tuberías subterráneas. Sin Encontrar Sin Pagar. +34 711 051 071", keywords: "detección fugas Arrecife, fugas agua Arrecife, fugas piscina Arrecife, reparación fugas Arrecife, fontanero Arrecife Lanzarote" }
      },
      "puerto-del-carmen": {
        name: "Puerto del Carmen",
        slug: "puerto-del-carmen",
        description: "Servicios expertos de detección de fugas en Puerto del Carmen, el centro turístico más concurrido de Lanzarote.",
        heroText: "Los hoteles, apartamentos y villas de Puerto del Carmen necesitan detección de fugas fiable. Proporcionamos un servicio rápido y profesional para minimizar las molestias a huéspedes y residentes.",
        areaDescription: "Como el destino turístico principal de Lanzarote, Puerto del Carmen tiene una alta concentración de hoteles, apartamentos de vacaciones y villas de alquiler. Las fugas de agua pueden ser costosas para los propietarios, tanto en facturas de agua como en posibles daños a la experiencia de los huéspedes. Ofrecemos servicio prioritario para propiedades comerciales y llamadas de emergencia para hoteles con fugas activas.",
        localChallenges: "Puerto del Carmen presenta desafíos específicos del sector turístico: hoteles con sistemas de piscinas complejos que incluyen jacuzzis, fuentes y cascadas; apartamentos con alta rotación donde las fugas pueden pasar desapercibidas durante meses; y la presión de resolver problemas rápidamente para no afectar a los huéspedes. Las propiedades en primera línea de Playa Grande sufren corrosión acelerada por el ambiente salino. Los complejos de los años 80 en la Avenida de las Playas tienen tuberías de polietileno degradadas por el sol y calor extremo de las azoteas.",
        nearbyAreas: ["Tías", "Playa Honda", "Arrecife", "Puerto Calero"],
        services: [
          { title: "Detección de Fugas de Agua Puerto del Carmen", description: "Detección rápida de fugas para hoteles y villas de Puerto del Carmen. Métodos no invasivos minimizan molestias a huéspedes. Informes para seguros incluidos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Puerto del Carmen", description: "Detección de fugas en las numerosas piscinas de hoteles y villas de Puerto del Carmen. Servicio experto con localización completa, no solo confirmación.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Puerto del Carmen", description: "Inspección CCTV y desatasco de desagües en Puerto del Carmen. Respuesta rápida para hoteles y restaurantes con problemas de drenaje.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Emergencia Puerto del Carmen", description: "Servicio de reparación de fugas de emergencia en Puerto del Carmen. Respuesta rápida para minimizar daños por agua y molestias a huéspedes.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Detectar fugas en piscinas: guía completa", href: `${blogBasePath}/como-detectar-fugas-en-piscinas-lanzarote` },
          { title: "Coste de reparación de fugas en piscinas", href: `${blogBasePath}/coste-reparacion-fugas-piscina-lanzarote` },
          { title: "Paredes húmedas: causas y soluciones", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Puerto del Carmen | Canary Detect", description: "Detección de fugas Puerto del Carmen. Hoteles, villas, apartamentos. Piscinas, reparaciones emergencia. +34 711 051 071", keywords: "detección fugas Puerto del Carmen, fugas agua Puerto del Carmen, fugas piscina Puerto del Carmen, detección fugas hoteles Lanzarote" }
      },
      "playa-blanca": {
        name: "Playa Blanca",
        slug: "playa-blanca",
        description: "Expertos locales en detección de fugas con base en Playa Blanca, dando servicio al sur de Lanzarote.",
        heroText: "Estamos ubicados aquí mismo en Playa Blanca, sus especialistas locales en detección de fugas. Con más de €80.000 en equipos profesionales, damos servicio a todo el sur de la isla con disponibilidad el mismo día.",
        areaDescription: "Playa Blanca es nuestra base, lo que significa que podemos ofrecer los tiempos de respuesta más rápidos en el sur de Lanzarote. Las villas de lujo y propiedades de la marina a menudo cuentan con sistemas de fontanería complejos y piscinas que requieren detección especializada. Conocemos los estilos de construcción locales y los problemas comunes, dándonos ventaja a la hora de encontrar y reparar fugas rápidamente.",
        localChallenges: "Las villas de lujo de Marina Rubicón y Montaña Roja presentan sistemas de fontanería de alta gama con múltiples zonas de riego, piscinas infinity con bordes rebosaderos, y spas integrados—todos posibles puntos de fuga. El terreno volcánico del sur de Lanzarote dificulta la excavación tradicional, haciendo que nuestra detección precisa sea aún más valiosa. Las propiedades más antiguas de Las Coloradas tienen sistemas de aljibe (depósitos de agua) que requieren inspección especializada para detectar fugas en sus muros de piedra.",
        nearbyAreas: ["Yaiza", "Femés", "Las Breñas", "El Golfo"],
        services: [
          { title: "Detección de Fugas de Agua Playa Blanca", description: "Detección de fugas el mismo día en Playa Blanca. Estamos ubicados localmente para responder rápido. Imagen térmica, gas trazador y detección acústica.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Playa Blanca", description: "Detección experta de fugas en piscinas para las villas de lujo y urbanizaciones de Playa Blanca. Localización completa con informes profesionales.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Detección Subterránea Playa Blanca", description: "Detección de tuberías y cables subterráneos en Playa Blanca. Esencial antes de construcción o jardinería en su propiedad.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Reparación de Fugas Playa Blanca", description: "Servicio local de reparación de fugas en Playa Blanca. Desde detección hasta reparación completa - tuberías, piscinas y desagües.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Sistema de agua en Lanzarote: guía completa", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Imagen térmica para detección de fugas", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
        ],
        seo: { title: "Detección Fugas Playa Blanca | Expertos Locales", description: "Detección de fugas Playa Blanca. ¡Estamos aquí! Fugas agua, piscinas, subterráneas. Servicio mismo día. +34 711 051 071", keywords: "detección fugas Playa Blanca, fugas agua Playa Blanca, fugas piscina Playa Blanca, fontanero Playa Blanca, reparación fugas Playa Blanca Lanzarote" }
      },
      "costa-teguise": {
        name: "Costa Teguise",
        slug: "costa-teguise",
        description: "Servicios profesionales de detección de fugas en Costa Teguise, el resort familiar de Lanzarote.",
        heroText: "Los apartamentos, villas y propiedades comerciales de Costa Teguise necesitan detección de fugas fiable. Damos servicio a toda la zona con servicios profesionales de detección no invasiva.",
        areaDescription: "Costa Teguise es conocida por sus urbanizaciones construidas a propósito, muchas de los años 80 y 90. Estas propiedades a menudo tienen sistemas de fontanería compartidos complejos donde localizar la ubicación exacta de una fuga es crucial para evitar excavaciones innecesarias. Nuestro enfoque multi-tecnológico es perfecto para los bloques de apartamentos y piscinas comunitarias de Costa Teguise.",
        localChallenges: "Los complejos turísticos de Costa Teguise como Sands Beach, Los Zocos y Oasis Lanz tienen sistemas de fontanería centralizados de más de 30 años con múltiples puntos de distribución. Las piscinas comunitarias con sus extensas redes de tuberías requieren experiencia específica para aislar la sección con fuga. El viento constante del noreste acelera la evaporación, haciendo difícil distinguir entre pérdida por evaporación y fugas reales—nuestras pruebas de presión eliminan esta duda. Las propiedades cerca del campo de golf tienen sistemas de riego extensos que pueden enmascarar fugas subterráneas.",
        nearbyAreas: ["Teguise", "Tahiche", "Guatiza", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Costa Teguise", description: "Detección de fugas para apartamentos y villas de Costa Teguise. Métodos no invasivos ideales para edificios compartidos y propiedades comunitarias.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Costa Teguise", description: "Detección de fugas en piscinas comunitarias y privadas en Costa Teguise. Informes profesionales para administradores de comunidades.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Tuberías Costa Teguise", description: "Inspección CCTV de tuberías para propiedades de Costa Teguise. Evalúe el estado de tuberías envejecidas antes de que los problemas se agraven.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Costa Teguise", description: "Servicio profesional de reparación de fugas en Costa Teguise. Soluciones completas para propiedades residenciales y comerciales.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Detectar fugas en piscinas comunitarias", href: `${blogBasePath}/como-detectar-fugas-en-piscinas-lanzarote` },
          { title: "¿Contador de agua corriendo sin usar grifos?", href: `${blogBasePath}/contador-agua-girando-grifos-cerrados` },
          { title: "Paredes húmedas en apartamentos", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Costa Teguise | Canary Detect", description: "Detección de fugas Costa Teguise. Apartamentos, villas, piscinas comunitarias. Servicio experto. +34 711 051 071", keywords: "detección fugas Costa Teguise, fugas agua Costa Teguise, fugas piscina Costa Teguise, fugas apartamentos Lanzarote" }
      },
      "yaiza": {
        name: "Yaiza",
        slug: "yaiza",
        description: "Servicios profesionales de detección de fugas en Yaiza, uno de los municipios más pintorescos de Lanzarote.",
        heroText: "Las villas de lujo, fincas rurales y propiedades tradicionales de Yaiza merecen detección de fugas experta. Proporcionamos servicios especializados en todo este hermoso municipio.",
        areaDescription: "El municipio de Yaiza cubre el suroeste de Lanzarote incluyendo Playa Blanca, El Golfo y la impresionante zona del Parque Nacional de Timanfaya. La región cuenta con muchas propiedades de alta gama con sistemas de agua complejos y piscinas. Nuestra proximidad a Yaiza (estamos basados en Playa Blanca) significa tiempos de respuesta rápidos y conocimiento local de estilos de construcción y problemas comunes de fontanería.",
        localChallenges: "Las fincas rurales de Yaiza y Uga tienen sistemas de agua únicos: aljibes tradicionales (depósitos subterráneos de agua de lluvia), pozos artesanos, y largas tuberías de suministro desde la red principal. Detectar fugas en estos sistemas extensos requiere experiencia específica. Las bodegas y restaurantes de La Geria tienen sistemas de riego por goteo para sus viñedos que pueden desarrollar múltiples fugas microscópicas difíciles de detectar visualmente. Las propiedades cerca del Parque Nacional tienen restricciones de excavación que hacen la detección precisa aún más crítica.",
        nearbyAreas: ["Playa Blanca", "El Golfo", "Femés", "Uga", "Las Breñas"],
        services: [
          { title: "Detección de Fugas de Agua Yaiza", description: "Detección experta de fugas para las villas de lujo y fincas rurales de Yaiza. Imagen térmica y detección acústica para fugas ocultas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Yaiza", description: "Detección de fugas en las numerosas piscinas privadas de Yaiza. Servicio completo de localización con informes profesionales.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Detección Subterránea Yaiza", description: "Detección de tuberías y servicios subterráneos para propiedades rurales en Yaiza. Esencial para proyectos de construcción y jardinería.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Reparación de Fugas Yaiza", description: "Servicio profesional de reparación de fugas en todo el municipio de Yaiza. Tuberías de agua, sistemas de piscina y reparaciones subterráneas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Sistema de agua en Lanzarote: aljibes y más", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga subterránea en fincas", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Imagen térmica para detección de fugas", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
        ],
        seo: { title: "Detección Fugas Yaiza | Villas y Fincas | Canary Detect", description: "Detección de fugas Yaiza. Villas de lujo, fincas, propiedades rurales. Piscinas. Servicio local. +34 711 051 071", keywords: "detección fugas Yaiza, fugas agua Yaiza, fugas piscina Yaiza, fugas villa Lanzarote, reparación fugas finca Yaiza" }
      },
      "tias": {
        name: "Tías",
        slug: "tias",
        description: "Servicios expertos de detección de fugas en Tías, uno de los municipios de más rápido crecimiento de Lanzarote.",
        heroText: "El municipio de Tías, hogar de Puerto del Carmen, necesita servicios fiables de detección de fugas. Damos servicio a propiedades residenciales, comerciales y turísticas en toda la zona.",
        areaDescription: "Tías es uno de los municipios más poblados de Lanzarote, abarcando Puerto del Carmen y las zonas residenciales circundantes. La mezcla de propiedades españolas antiguas y desarrollos turísticos más nuevos significa sistemas de fontanería variados y diferentes tipos de desafíos de fugas. Nuestro enfoque multi-tecnológico es ideal para localizar fugas con precisión en cualquier tipo de propiedad.",
        localChallenges: "El pueblo de Tías en las colinas tiene casas tradicionales canarias con sistemas de fontanería de más de 50 años, muchas con tuberías de plomo originales que requieren actualización. La diferencia de altitud entre Tías pueblo y Puerto del Carmen crea variaciones de presión de agua que estresan las tuberías antiguas. Las urbanizaciones de Mácher y Conil tienen sistemas de riego extensos para jardines que pueden desarrollar fugas invisibles bajo el césped. Las propiedades rurales a menudo dependen de bombas de presión y depósitos que añaden complejidad al diagnóstico de fugas.",
        nearbyAreas: ["Puerto del Carmen", "Mácher", "La Asomada", "Conil", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Tías", description: "Detección profesional de fugas en todo Tías. Servicio para propiedades residenciales y alquileres vacacionales con métodos de detección no invasivos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Tías", description: "Detección de fugas en piscinas para propiedades de Tías. Servicio experto para piscinas privadas y piscinas comunitarias.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Tías", description: "Inspecciones CCTV de desagües e inspección de tuberías en Tías. Identifique obstrucciones, daños y problemas de drenaje rápidamente.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Tías", description: "Servicios completos de reparación de fugas en Tías. Desde detección hasta reparación profesional de todo tipo de fugas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Contador de agua corriendo: qué hacer", href: `${blogBasePath}/contador-agua-girando-grifos-cerrados` },
          { title: "Detectar fugas en piscinas", href: `${blogBasePath}/como-detectar-fugas-en-piscinas-lanzarote` },
          { title: "Paredes húmedas: diagnóstico", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Tías | Agua y Piscinas | Canary Detect", description: "Detección de fugas Tías. Agua, piscinas, desagües. Servicio en Tías y Puerto del Carmen. Sin Encontrar Sin Pagar. +34 711 051 071", keywords: "detección fugas Tías, fugas agua Tías, fugas piscina Tías, fontanero Tías Lanzarote, reparación fugas Tías" }
      },
      "playa-honda": {
        name: "Playa Honda",
        slug: "playa-honda",
        description: "Detección profesional de fugas en Playa Honda, la segunda ciudad más grande de Lanzarote.",
        heroText: "Las propiedades residenciales y edificios comerciales de Playa Honda necesitan detección de fugas fiable. Proporcionamos un servicio rápido y profesional a esta comunidad en crecimiento.",
        areaDescription: "Playa Honda es el segundo centro de población más grande de Lanzarote, ubicado entre Arrecife y el aeropuerto. La ciudad tiene una mezcla de bloques de apartamentos, adosados y propiedades comerciales. Muchos edificios datan de los años 80 y 90, lo que significa que las tuberías envejecidas son comunes. Nuestra tecnología de detección puede localizar fugas en estos sistemas antiguos sin excavaciones innecesarias.",
        localChallenges: "Los bloques de apartamentos de Playa Honda tienen sistemas de bajantes compartidos donde una fuga en un piso puede manifestarse como humedad en otro—requiriendo diagnóstico experto para identificar el origen real. La zona industrial cerca del aeropuerto tiene edificios comerciales con sistemas de fontanería de alto caudal diseñados para uso industrial. Las propiedades cerca de la playa experimentan corrosión acelerada por la brisa marina, especialmente en conexiones de cobre y válvulas de latón.",
        nearbyAreas: ["Arrecife", "San Bartolomé", "Tías", "Puerto del Carmen"],
        services: [
          { title: "Detección de Fugas de Agua Playa Honda", description: "Detección de fugas para apartamentos y casas de Playa Honda. Métodos no invasivos ideales para edificios compartidos y propiedades comunitarias.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Playa Honda", description: "Detección de fugas en piscinas comunitarias y privadas en Playa Honda. Informes profesionales para administradores de propiedades.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Tuberías Playa Honda", description: "Inspección CCTV de tuberías para propiedades de Playa Honda. Evalúe el estado de tuberías envejecidas antes de que los problemas se agraven.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Playa Honda", description: "Reparación profesional de fugas en Playa Honda. Tuberías de agua, desagües y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Fugas en edificios de apartamentos", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Sistema de agua en Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
        ],
        seo: { title: "Detección Fugas Playa Honda | Canary Detect", description: "Detección de fugas Playa Honda. Apartamentos, casas, edificios comunitarios. Respuesta rápida. +34 711 051 071", keywords: "detección fugas Playa Honda, fugas agua Playa Honda, fugas piscina Playa Honda, fontanero Playa Honda, fugas apartamento Playa Honda" }
      },
      "san-bartolome": {
        name: "San Bartolomé",
        slug: "san-bartolome",
        description: "Servicios expertos de detección de fugas en San Bartolomé, en el corazón de Lanzarote.",
        heroText: "Las propiedades residenciales y fincas rurales de San Bartolomé necesitan detección de fugas especializada. Proporcionamos servicios profesionales en todo este municipio central.",
        areaDescription: "San Bartolomé se sitúa en el centro geográfico de Lanzarote, haciéndolo fácilmente accesible desde nuestra base. El municipio incluye pueblos tradicionales y propiedades rurales así como desarrollos más modernos. Los sistemas de suministro de agua subterráneos son comunes en zonas rurales, requiriendo equipos de detección especializados para localizar fugas con precisión.",
        localChallenges: "El centro histórico de San Bartolomé tiene casas de piedra tradicionales con sistemas de fontanería añadidos posteriormente, creando laberintos de tuberías difíciles de trazar. Las fincas rurales de Montaña Blanca y Güime dependen de aljibes y cisternas con paredes de piedra susceptibles a grietas invisibles. El Museo Tanit y otras propiedades históricas requieren métodos de detección especialmente delicados para no dañar estructuras patrimoniales. Las bodegas de vino en la zona tienen sistemas de refrigeración y humidificación que pueden enmascarar fugas de agua.",
        nearbyAreas: ["Arrecife", "Playa Honda", "Tías", "Teguise", "Mozaga"],
        services: [
          { title: "Detección de Fugas de Agua San Bartolomé", description: "Detección de fugas para propiedades de San Bartolomé. Servicio especializado tanto para casas de pueblo como para fincas rurales.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea San Bartolomé", description: "Detección de tuberías subterráneas para las propiedades rurales de San Bartolomé. Localice tuberías enterradas antes de trabajos de excavación.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas San Bartolomé", description: "Detección de fugas para piscinas privadas en San Bartolomé. Inspección completa con localización de fugas.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas San Bartolomé", description: "Reparación profesional de fugas en todo San Bartolomé. Tuberías de agua, sistemas subterráneos y reparaciones de piscinas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Aljibes y cisternas en Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga en propiedades rurales", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Imagen térmica para edificios antiguos", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
        ],
        seo: { title: "Detección Fugas San Bartolomé | Canary Detect", description: "Detección de fugas San Bartolomé. Casas de pueblo, fincas, propiedades rurales. Tuberías subterráneas. +34 711 051 071", keywords: "detección fugas San Bartolomé, fugas agua San Bartolomé, fugas subterráneas San Bartolomé, fugas rurales Lanzarote" }
      },
      "teguise": {
        name: "Teguise",
        slug: "teguise",
        description: "Detección profesional de fugas en Teguise, la histórica antigua capital de Lanzarote.",
        heroText: "Los edificios históricos de Teguise y los pueblos circundantes necesitan detección de fugas especializada. Proporcionamos servicios expertos para propiedades tradicionales y desarrollos modernos por igual.",
        areaDescription: "Teguise es el municipio más grande de Lanzarote por superficie, extendiéndose desde Costa Teguise en la costa hasta el histórico pueblo de Teguise en el interior. La zona incluye arquitectura tradicional canaria, fincas rurales y desarrollos costeros modernos. Las propiedades históricas a menudo tienen sistemas de fontanería complejos o inusuales que requieren métodos de detección cuidadosos y no invasivos.",
        localChallenges: "El casco histórico de Teguise es Bien de Interés Cultural, con restricciones estrictas sobre excavaciones y modificaciones—haciendo la detección precisa absolutamente esencial. Las casas señoriales del siglo XVI-XVIII tienen muros de piedra volcánica de hasta 80cm de grosor que pueden ocultar fugas durante años. Los pueblos de Guatiza y Arrieta cerca de los Jameos del Agua tienen sistemas de captación de agua de lluvia tradicionales que requieren inspección especializada. Las fincas de cactus para cochinilla tienen extensos sistemas de riego subterráneo instalados hace décadas sin planos.",
        nearbyAreas: ["Costa Teguise", "Tahiche", "Guatiza", "Haría", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Teguise", description: "Detección especializada de fugas para las propiedades históricas y casas modernas de Teguise. Métodos no invasivos protegen edificios valiosos.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Teguise", description: "Detección de fugas en piscinas para el municipio de Teguise. Servicio para villas rurales y urbanizaciones de Costa Teguise.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Teguise", description: "Inspecciones CCTV de desagües para propiedades de Teguise. Esencial para edificios antiguos con trazados de drenaje desconocidos.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Teguise", description: "Reparación profesional de fugas en Teguise. Reparaciones respetuosas para propiedades históricas y soluciones modernas para obras nuevas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Detección en edificios patrimoniales", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
          { title: "Sistema de agua tradicional en Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Paredes húmedas en casas antiguas", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Teguise | Históricas y Rurales", description: "Detección de fugas Teguise. Edificios históricos, fincas rurales, propiedades costeras. Métodos no invasivos. +34 711 051 071", keywords: "detección fugas Teguise, fugas agua Teguise, fugas edificios históricos Lanzarote, fugas rurales Teguise, Costa Teguise fugas" }
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
      localChallenges: "Arrecife's historic centre presents unique challenges: cast iron pipes from the 1960s-70s with advanced corrosion, shared sewage systems between old buildings, and difficult access in narrow streets of the old town. Properties near the Charco de San Ginés lagoon particularly suffer from rising damp due to proximity to the sea. Apartment blocks in the port area have centralised plumbing systems where pinpointing the exact leak avoids disturbing multiple neighbours.",
      nearbyAreas: ["San Bartolomé", "Playa Honda", "Tías", "Puerto del Carmen"],
      services: [
        { title: "Water Leak Detection Arrecife", description: "Hidden water leak detection in Arrecife properties using thermal imaging, acoustic sensors and tracer gas. Find leaks behind walls and under floors without damage.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Arrecife", description: "Swimming pool and spa leak detection for Arrecife hotels, villas and residential pools. Pinpoint accuracy to minimize repair costs.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Arrecife", description: "CCTV drain surveys and pipe inspection throughout Arrecife. 6 camera systems for all pipe sizes with detailed video reports.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Arrecife", description: "Complete leak repair services in Arrecife. From detection to repair - water pipes, pool pipes and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Water meter running? Complete guide", href: `${blogBasePath}/water-meter-running-when-taps-off` },
        { title: "How Lanzarote's water system works", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Signs of underground leak", href: `${blogBasePath}/signs-of-underground-water-leak` },
      ],
      seo: { title: "Leak Detection Arrecife | Water & Pool | Canary Detect", description: "Leak detection Arrecife. Water leaks, pool leaks, underground pipes. No Find No Fee. Call +34 711 051 071", keywords: "leak detection Arrecife, water leak detection Arrecife, pool leak detection Arrecife, leak repair Arrecife, plumber Arrecife Lanzarote, hidden water leak Arrecife" }
    },
    "puerto-del-carmen": {
      name: "Puerto del Carmen",
      slug: "puerto-del-carmen",
      description: "Expert leak detection services in Puerto del Carmen, Lanzarote's busiest tourist resort.",
      heroText: "Puerto del Carmen's hotels, apartments and villas need reliable leak detection. We provide fast, professional service to minimize disruption to guests and residents alike.",
      areaDescription: "As Lanzarote's premier tourist destination, Puerto del Carmen has a high concentration of hotels, holiday apartments and rental villas. Water leaks can be costly for property owners—both in water bills and potential damage to guest experiences. We offer priority service for commercial properties and emergency call-outs for hotels experiencing active leaks.",
      localChallenges: "Puerto del Carmen presents tourism-specific challenges: hotels with complex pool systems including jacuzzis, fountains and waterfalls; apartments with high turnover where leaks can go unnoticed for months; and pressure to resolve issues quickly to avoid affecting guests. Beachfront properties along Playa Grande suffer accelerated corrosion from the salty environment. 1980s complexes along Avenida de las Playas have polyethylene pipes degraded by sun and extreme rooftop heat.",
      nearbyAreas: ["Tías", "Playa Honda", "Arrecife", "Puerto Calero"],
      services: [
        { title: "Water Leak Detection Puerto del Carmen", description: "Fast water leak detection for Puerto del Carmen hotels and villas. Non-invasive methods minimize disruption to guests. Insurance-ready reports included.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Puerto del Carmen", description: "Swimming pool leak detection for Puerto del Carmen's many hotel and villa pools. Expert service with complete pinpointing—not just confirmation.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Puerto del Carmen", description: "CCTV drain inspection and unblocking in Puerto del Carmen. Fast response for hotels and restaurants experiencing drainage issues.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Emergency Leak Repair Puerto del Carmen", description: "Emergency leak repair service in Puerto del Carmen. Quick response to minimize water damage and guest disruption.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Pool leak detection guide", href: `${blogBasePath}/how-to-check-for-pool-leaks-lanzarote` },
        { title: "Pool leak repair costs Lanzarote", href: `${blogBasePath}/swimming-pool-leak-repair-cost-lanzarote` },
        { title: "Damp walls: causes & solutions", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Puerto del Carmen | Canary Detect", description: "Leak detection Puerto del Carmen. Hotels, villas, apartments. Pool leaks, emergency repairs. Call +34 711 051 071", keywords: "leak detection Puerto del Carmen, water leak detection Puerto del Carmen, pool leak detection Puerto del Carmen, hotel leak detection Lanzarote, villa leak repair Puerto del Carmen" }
    },
    "playa-blanca": {
      name: "Playa Blanca",
      slug: "playa-blanca",
      description: "Local leak detection experts based in Playa Blanca, serving the south of Lanzarote.",
      heroText: "We're based right here in Playa Blanca—your local leak detection specialists. With €80,000+ of professional equipment, we serve the entire south of the island with same-day availability.",
      areaDescription: "Playa Blanca is our home base, meaning we can offer the fastest response times in the south of Lanzarote. The area's luxury villas and marina properties often feature complex plumbing systems and swimming pools that require specialist leak detection. We know the local building styles and common issues, giving us an edge when it comes to finding and fixing leaks quickly.",
      localChallenges: "The luxury villas of Marina Rubicón and Montaña Roja feature high-end plumbing systems with multiple irrigation zones, infinity pools with overflow edges, and integrated spas—all potential leak points. The volcanic terrain of southern Lanzarote makes traditional excavation difficult, making our precise detection even more valuable. Older properties in Las Coloradas have aljibe (water tank) systems requiring specialist inspection to detect leaks in their stone walls.",
      nearbyAreas: ["Yaiza", "Femés", "Las Breñas", "El Golfo"],
      services: [
        { title: "Water Leak Detection Playa Blanca", description: "Same-day water leak detection in Playa Blanca. We're based locally so can respond fast. Thermal imaging, tracer gas and acoustic detection.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Playa Blanca", description: "Expert pool leak detection for Playa Blanca's luxury villas and developments. Complete leak pinpointing with professional reports.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Underground Detection Playa Blanca", description: "Underground pipe and cable detection in Playa Blanca. Essential before construction or landscaping on your property.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Leak Repair Playa Blanca", description: "Local leak repair service in Playa Blanca. From detection through to complete repair—pipes, pools and drains.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Lanzarote water system guide", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Thermal imaging for leak detection", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
        { title: "Signs of underground leak", href: `${blogBasePath}/signs-of-underground-water-leak` },
      ],
      seo: { title: "Leak Detection Playa Blanca | Local Experts", description: "Local leak detection Playa Blanca. We're based here! Water, pool, underground. Same-day service. Call +34 711 051 071", keywords: "leak detection Playa Blanca, water leak detection Playa Blanca, pool leak detection Playa Blanca, plumber Playa Blanca, leak repair Playa Blanca Lanzarote" }
    },
    "costa-teguise": {
      name: "Costa Teguise",
      slug: "costa-teguise",
      description: "Professional leak detection services in Costa Teguise, Lanzarote's family-friendly resort.",
      heroText: "Costa Teguise's apartments, villas and commercial properties need reliable leak detection. We serve the whole area with professional, non-invasive leak detection services.",
      areaDescription: "Costa Teguise is known for its purpose-built resort developments, many dating from the 1980s and 90s. These properties often have complex shared plumbing systems where pinpointing a leak's exact location is crucial to avoid unnecessary excavation. Our multi-technology approach is perfect for Costa Teguise's apartment blocks and community pools.",
      localChallenges: "Costa Teguise's resort complexes like Sands Beach, Los Zocos and Oasis Lanz have centralised plumbing systems over 30 years old with multiple distribution points. Community pools with their extensive pipe networks require specific expertise to isolate the leaking section. The constant northeast wind accelerates evaporation, making it difficult to distinguish between evaporation loss and actual leaks—our pressure tests eliminate this doubt. Properties near the golf course have extensive irrigation systems that can mask underground leaks.",
      nearbyAreas: ["Teguise", "Tahiche", "Guatiza", "Arrecife"],
      services: [
        { title: "Water Leak Detection Costa Teguise", description: "Water leak detection for Costa Teguise apartments and villas. Non-invasive methods ideal for shared buildings and community properties.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Costa Teguise", description: "Community pool and private pool leak detection in Costa Teguise. Professional reports for community administrators and property managers.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Pipe Inspection Costa Teguise", description: "CCTV pipe inspection for Costa Teguise properties. Assess condition of aging pipework before problems escalate.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Costa Teguise", description: "Professional leak repair service in Costa Teguise. Complete solutions for residential and commercial properties.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Community pool leak detection", href: `${blogBasePath}/how-to-check-for-pool-leaks-lanzarote` },
        { title: "Water meter running with taps off?", href: `${blogBasePath}/water-meter-running-when-taps-off` },
        { title: "Damp walls in apartments", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Costa Teguise | Canary Detect", description: "Leak detection Costa Teguise. Apartments, villas, community pools. Expert shared building service. Call +34 711 051 071", keywords: "leak detection Costa Teguise, water leak detection Costa Teguise, pool leak detection Costa Teguise, apartment leak detection Lanzarote, community pool leak Costa Teguise" }
    },
    "yaiza": {
      name: "Yaiza",
      slug: "yaiza",
      description: "Professional leak detection services in Yaiza, one of Lanzarote's most picturesque municipalities.",
      heroText: "Yaiza's luxury villas, rural fincas and traditional properties deserve expert leak detection. We provide specialist services throughout this beautiful municipality.",
      areaDescription: "Yaiza municipality covers the southwest of Lanzarote including Playa Blanca, El Golfo, and the stunning Timanfaya National Park area. The region features many high-end properties with complex water systems and swimming pools. Our proximity to Yaiza (we're based in Playa Blanca) means fast response times and local knowledge of building styles and common plumbing issues in the area.",
      localChallenges: "Yaiza and Uga's rural fincas have unique water systems: traditional aljibes (underground rainwater tanks), artesian wells, and long supply pipes from the mains network. Detecting leaks in these extensive systems requires specific expertise. The wineries and restaurants of La Geria have drip irrigation systems for their vineyards that can develop multiple microscopic leaks difficult to detect visually. Properties near the National Park have excavation restrictions making precise detection even more critical.",
      nearbyAreas: ["Playa Blanca", "El Golfo", "Femés", "Uga", "Las Breñas"],
      services: [
        { title: "Water Leak Detection Yaiza", description: "Expert water leak detection for Yaiza's luxury villas and rural fincas. Thermal imaging and acoustic detection for hidden leaks.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Yaiza", description: "Swimming pool leak detection for Yaiza's many private pools. Complete pinpointing service with professional reports.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Underground Detection Yaiza", description: "Underground pipe and utility detection for rural properties in Yaiza. Essential for construction and landscaping projects.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Leak Repair Yaiza", description: "Professional leak repair service throughout Yaiza municipality. Water pipes, pool systems and underground repairs.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Aljibes & cisterns in Lanzarote", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Underground leak signs on fincas", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Thermal imaging for leak detection", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
      ],
      seo: { title: "Leak Detection Yaiza | Villa & Finca | Canary Detect", description: "Leak detection Yaiza. Luxury villas, fincas, rural properties. Pool leak detection. Fast local service. Call +34 711 051 071", keywords: "leak detection Yaiza, water leak detection Yaiza, pool leak detection Yaiza, villa leak detection Lanzarote, finca leak repair Yaiza" }
    },
    "tias": {
      name: "Tías",
      slug: "tias",
      description: "Expert leak detection services in Tías, serving one of Lanzarote's fastest-growing municipalities.",
      heroText: "Tías municipality, home to Puerto del Carmen, needs reliable leak detection services. We serve residential, commercial and tourist properties throughout the area.",
      areaDescription: "Tías is one of Lanzarote's most populous municipalities, encompassing Puerto del Carmen and surrounding residential areas. The mix of older Spanish properties and newer tourist developments means varied plumbing systems and different types of leak challenges. Our multi-technology approach is ideal for accurately locating leaks in any property type.",
      localChallenges: "The hillside village of Tías has traditional Canarian homes with plumbing systems over 50 years old, many with original lead pipes requiring upgrade. The altitude difference between Tías village and Puerto del Carmen creates water pressure variations that stress older pipes. Urbanisations in Mácher and Conil have extensive garden irrigation systems that can develop invisible leaks under lawns. Rural properties often rely on pressure pumps and tanks adding complexity to leak diagnosis.",
      nearbyAreas: ["Puerto del Carmen", "Mácher", "La Asomada", "Conil", "Arrecife"],
      services: [
        { title: "Water Leak Detection Tías", description: "Professional water leak detection throughout Tías. Serving residential properties and holiday rentals with non-invasive detection methods.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Tías", description: "Pool leak detection for Tías properties. Expert service for private pools and community swimming pools.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Tías", description: "CCTV drain surveys and pipe inspection in Tías. Identify blockages, damage and drainage issues quickly.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Tías", description: "Complete leak repair services in Tías. From detection through to professional repair of all leak types.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Water meter running: what to do", href: `${blogBasePath}/water-meter-running-when-taps-off` },
        { title: "Pool leak detection guide", href: `${blogBasePath}/how-to-check-for-pool-leaks-lanzarote` },
        { title: "Damp walls diagnosis", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Tías | Water & Pool | Canary Detect", description: "Leak detection Tías. Water leaks, pool leaks, drain surveys. Serving Tías & Puerto del Carmen. Call +34 711 051 071", keywords: "leak detection Tías, water leak detection Tías, pool leak detection Tías, plumber Tías Lanzarote, leak repair Tías" }
    },
    "playa-honda": {
      name: "Playa Honda",
      slug: "playa-honda",
      description: "Professional leak detection in Playa Honda, Lanzarote's second-largest town.",
      heroText: "Playa Honda's residential properties and commercial buildings need reliable leak detection. We provide fast, professional service to this growing community.",
      areaDescription: "Playa Honda is Lanzarote's second-largest population centre, located between Arrecife and the airport. The town has a mix of apartment blocks, townhouses and commercial properties. Many buildings date from the 1980s and 90s, meaning aging pipework is common. Our leak detection technology can pinpoint leaks in these older systems without unnecessary excavation.",
      localChallenges: "Playa Honda's apartment blocks have shared downpipe systems where a leak on one floor can manifest as damp on another—requiring expert diagnosis to identify the true source. The industrial zone near the airport has commercial buildings with high-flow plumbing systems designed for industrial use. Properties near the beach experience accelerated corrosion from sea breeze, especially on copper connections and brass valves.",
      nearbyAreas: ["Arrecife", "San Bartolomé", "Tías", "Puerto del Carmen"],
      services: [
        { title: "Water Leak Detection Playa Honda", description: "Water leak detection for Playa Honda apartments and houses. Non-invasive methods ideal for shared buildings and community properties.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Playa Honda", description: "Community pool and private pool leak detection in Playa Honda. Professional reports for property managers.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Pipe Inspection Playa Honda", description: "CCTV pipe inspection for Playa Honda properties. Assess aging pipework condition before problems escalate.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Playa Honda", description: "Professional leak repair in Playa Honda. Water pipes, drains and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Leaks in apartment buildings", href: `${blogBasePath}/damp-walls-causes-solutions` },
        { title: "Signs of underground leak", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Lanzarote water system guide", href: `${blogBasePath}/master-your-lanzarote-water-system` },
      ],
      seo: { title: "Leak Detection Playa Honda | Canary Detect", description: "Leak detection Playa Honda. Apartments, houses, community buildings. Fast response. Call +34 711 051 071", keywords: "leak detection Playa Honda, water leak detection Playa Honda, pool leak detection Playa Honda, plumber Playa Honda, apartment leak Playa Honda" }
    },
    "san-bartolome": {
      name: "San Bartolomé",
      slug: "san-bartolome",
      description: "Expert leak detection services in San Bartolomé, in the heart of Lanzarote.",
      heroText: "San Bartolomé's residential properties and rural fincas need specialist leak detection. We provide professional services throughout this central municipality.",
      areaDescription: "San Bartolomé sits at Lanzarote's geographical centre, making it easily accessible from our base. The municipality includes traditional villages and rural properties as well as more modern developments. Underground water supply systems are common in rural areas, requiring specialist detection equipment to locate leaks accurately.",
      localChallenges: "San Bartolomé's historic centre has traditional stone houses with retrofitted plumbing systems creating mazes of pipes difficult to trace. Rural fincas in Montaña Blanca and Güime rely on aljibes and cisterns with stone walls susceptible to invisible cracks. The Tanit Museum and other historic properties require especially delicate detection methods to avoid damaging heritage structures. Wine bodegas in the area have refrigeration and humidification systems that can mask water leaks.",
      nearbyAreas: ["Arrecife", "Playa Honda", "Tías", "Teguise", "Mozaga"],
      services: [
        { title: "Water Leak Detection San Bartolomé", description: "Water leak detection for San Bartolomé properties. Specialist service for both village houses and rural fincas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection San Bartolomé", description: "Underground pipe detection for San Bartolomé's rural properties. Locate buried pipes before excavation work.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection San Bartolomé", description: "Pool leak detection for private pools in San Bartolomé. Complete survey with leak pinpointing.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair San Bartolomé", description: "Professional leak repair throughout San Bartolomé. Water pipes, underground systems and pool repairs.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Aljibes & cisterns in Lanzarote", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Underground leak signs on rural properties", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Thermal imaging for old buildings", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
      ],
      seo: { title: "Leak Detection San Bartolomé | Canary Detect", description: "Leak detection San Bartolomé. Village houses, fincas, rural properties. Underground pipes. Call +34 711 051 071", keywords: "leak detection San Bartolomé, water leak detection San Bartolomé, underground leak San Bartolomé, rural leak Lanzarote" }
    },
    "teguise": {
      name: "Teguise",
      slug: "teguise",
      description: "Professional leak detection in Teguise, Lanzarote's historic former capital.",
      heroText: "Teguise's historic buildings and surrounding villages need specialist leak detection. We provide expert services for traditional properties and modern developments alike.",
      areaDescription: "Teguise is Lanzarote's largest municipality by area, stretching from Costa Teguise on the coast to the historic town of Teguise inland. The area includes traditional Canarian architecture, rural fincas, and modern coastal developments. Historic properties often have complex or unusual plumbing systems requiring careful, non-invasive detection methods.",
      localChallenges: "Teguise's historic centre is a Protected Cultural Asset with strict restrictions on excavation and modifications—making precise detection absolutely essential. 16th-18th century manor houses have volcanic stone walls up to 80cm thick that can hide leaks for years. The villages of Guatiza and Arrieta near Jameos del Agua have traditional rainwater capture systems requiring specialist inspection. Cactus fincas for cochineal have extensive underground irrigation systems installed decades ago without plans.",
      nearbyAreas: ["Costa Teguise", "Tahiche", "Guatiza", "Haría", "Arrecife"],
      services: [
        { title: "Water Leak Detection Teguise", description: "Specialist leak detection for Teguise's historic properties and modern homes. Non-invasive methods protect valuable buildings.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Teguise", description: "Pool leak detection for Teguise municipality. Serving rural villas and Costa Teguise developments.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Teguise", description: "CCTV drain surveys for Teguise properties. Essential for old buildings with unknown drainage layouts.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Teguise", description: "Professional leak repair in Teguise. Sympathetic repairs for historic properties and modern solutions for new builds.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Detection in heritage buildings", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
        { title: "Traditional Lanzarote water systems", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Damp walls in old houses", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Teguise | Historic & Rural | Canary Detect", description: "Leak detection Teguise. Historic buildings, rural fincas, coastal properties. Non-invasive methods. Call +34 711 051 071", keywords: "leak detection Teguise, water leak detection Teguise, historic building leak Lanzarote, rural leak Teguise, Costa Teguise leak" }
    }
  };
};

// UI text translations for LocationPage component
export const getLocationUIText = (isSpanish: boolean) => {
  if (isSpanish) {
    return {
      hero: {
        badge: "Área de Servicio",
        titlePrefix: "Detección de Fugas en ",
      },
      cta: {
        getQuote: "Presupuesto Gratis",
        callNow: "Llamar Ahora",
        requestQuote: "Solicitar Presupuesto",
      },
      sections: {
        localExperts: "Expertos Locales",
        servicesIn: (name: string) => `Servicios de Detección de Fugas en ${name}`,
        getQuoteIn: (name: string) => `Presupuesto en ${name}`,
        quoteDescription: (name: string) => `Contáctenos para un presupuesto gratuito para detección de fugas en ${name}. Sin compromiso.`,
        hours: "Lun-Vie 8:00-18:00, Sáb 9:00-14:00",
        ourServices: "Nuestros Servicios",
        servicesAvailable: (name: string) => `Servicios Disponibles en ${name}`,
        coverageArea: "Área de Cobertura",
        nearbyAreas: "También Damos Servicio a Zonas Cercanas",
        nearbyDescription: (name: string) => `Además de ${name}, cubrimos estas zonas cercanas para detección de fugas.`,
        needLeakDetection: (name: string) => `¿Necesita Detección de Fugas en ${name}?`,
        ctaDescription: "Contáctenos hoy para un presupuesto gratuito. Sin Encontrar, Sin Pagar.",
        localChallenges: "Desafíos Locales",
        relatedArticles: "Artículos Relacionados",
      },
      features: {
        noFindNoFee: { title: "Sin Encontrar, Sin Pagar", description: "Resultados garantizados o sin cargo" },
        equipment: { title: "€80.000+ en Equipos", description: "Tecnología de grado profesional" },
        accuracy: { title: "Precisión Centimétrica", description: "95% de precisión en localización" },
        reports: { title: "Informes para Seguros", description: "Documentación profesional incluida" },
      },
      notFound: {
        title: "Ubicación No Encontrada",
        description: "No pudimos encontrar esa ubicación. Por favor contáctenos para consultas.",
        button: "Contáctenos",
      },
    };
  }

  return {
    hero: {
      badge: "Service Area",
      titlePrefix: "Leak Detection in ",
    },
    cta: {
      getQuote: "Get Free Quote",
      callNow: "Call Now",
      requestQuote: "Request Quote",
    },
    sections: {
      localExperts: "Local Experts",
      servicesIn: (name: string) => `Leak Detection Services in ${name}`,
      getQuoteIn: (name: string) => `Get a Quote in ${name}`,
      quoteDescription: (name: string) => `Contact us for a free, no-obligation quote for leak detection in ${name}.`,
      hours: "Mon-Fri 8am-6pm, Sat 9am-2pm",
      ourServices: "Our Services",
      servicesAvailable: (name: string) => `Services Available in ${name}`,
      coverageArea: "Coverage Area",
      nearbyAreas: "We Also Serve Nearby Areas",
      nearbyDescription: (name: string) => `In addition to ${name}, we cover these nearby areas for leak detection.`,
      needLeakDetection: (name: string) => `Need Leak Detection in ${name}?`,
      ctaDescription: "Contact us today for a free quote. No Find, No Fee guarantee.",
      localChallenges: "Local Challenges",
      relatedArticles: "Related Articles",
    },
    features: {
      noFindNoFee: { title: "No Find, No Fee", description: "Guaranteed results or no charge" },
      equipment: { title: "€80,000+ Equipment", description: "Professional-grade technology" },
      accuracy: { title: "Centimetre Accuracy", description: "95% pinpoint accuracy" },
      reports: { title: "Insurance Reports", description: "Professional documentation included" },
    },
    notFound: {
      title: "Location Not Found",
      description: "We couldn't find that location. Please contact us for enquiries.",
      button: "Contact Us",
    },
  };
};
