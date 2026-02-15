import { Droplets, Waves, Search, Wrench, LucideIcon } from "lucide-react";

export interface LocationData {
  name: string;
  slug: string;
  description: string;
  heroText: string;
  areaDescription: string;
  localChallenges: string;
  // New expanded content sections
  aboutLocation?: string;
  landmarks?: string[];
  neighborhoods?: string[];
  commonWaterIssues?: {
    title: string;
    description: string;
  }[];
  serviceCoverage?: string;
  whyChooseUs?: string[];
  emergencyResponse?: {
    responseTime: string;
    availability: string;
    description: string;
  };
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
        aboutLocation: "Arrecife, la vibrante capital de Lanzarote, es una ciudad portuaria con más de 60.000 habitantes que combina historia, comercio y vida moderna. Fundada en el siglo XV como puerto pesquero, la ciudad ha evolucionado hasta convertirse en el centro administrativo, comercial y cultural de la isla. El paseo marítimo de Arrecife ofrece vistas espectaculares del Atlántico, mientras que el casco histórico mantiene el encanto arquitectónico tradicional canario con sus casas encaladas y balcones de madera. La ciudad alberga importantes instituciones culturales, centros comerciales modernos y una próspera comunidad local que convive con visitantes de todo el mundo.",
        landmarks: ["Charco de San Ginés", "Castillo de San Gabriel", "Marina Lanzarote", "Calle Real", "Playa del Reducto", "El Almacén Centro de Arte"],
        neighborhoods: ["Centro Histórico", "San Ginés", "Los Alonso", "Argana Alta", "Altavista", "Titerroy", "Maneje"],
        commonWaterIssues: [
          { title: "Tuberías de Hierro Fundido Corroídas", description: "Los edificios construidos entre 1960-1980 tienen tuberías de hierro fundido con décadas de corrosión interna. El agua dura de Lanzarote acelera este deterioro, causando fugas en uniones y codos." },
          { title: "Humedad por Capilaridad", description: "Las propiedades cerca del Charco de San Ginés y la zona portuaria sufren humedad ascendente debido a la proximidad del nivel freático y el ambiente salino del océano." },
          { title: "Fugas en Sistemas Centralizados", description: "Los bloques de apartamentos del centro tienen sistemas de fontanería compartidos donde una sola fuga puede afectar a múltiples viviendas y disparar las facturas de la comunidad." },
          { title: "Problemas de Presión de Agua", description: "Las zonas altas de Arrecife como Argana y Altavista experimentan fluctuaciones de presión que estresan las tuberías antiguas, causando micro-fugas difíciles de detectar." }
        ],
        serviceCoverage: "Damos cobertura completa a toda la ciudad de Arrecife y sus barrios: desde el centro histórico con sus edificios tradicionales, pasando por las urbanizaciones residenciales de Argana Alta y Altavista, hasta las zonas comerciales cerca del puerto y el paseo marítimo. Nuestro servicio incluye propiedades residenciales, comunidades de vecinos, hoteles, oficinas y locales comerciales. También damos servicio a las zonas industriales del polígono y las urbanizaciones más nuevas de la periferia.",
        whyChooseUs: [
          "Conocimiento profundo de los estilos constructivos típicos de Arrecife y sus problemas de fontanería específicos",
          "Respuesta rápida desde nuestra base en el sur—llegamos a Arrecife en menos de 45 minutos",
          "Equipos de €80.000+ incluyendo cámaras termográficas, detectores acústicos y equipos de gas trazador",
          "Experiencia específica con edificios históricos del casco antiguo que requieren técnicas no invasivas",
          "Garantía Sin Encontrar, Sin Pagar—solo paga cuando localizamos su fuga con precisión",
          "Informes profesionales válidos para seguros y comunidades de propietarios"
        ],
        emergencyResponse: {
          responseTime: "2-4 horas",
          availability: "24/7 Emergencias",
          description: "Entendemos que las fugas de agua en Arrecife requieren atención urgente, especialmente en edificios de apartamentos donde el agua puede filtrarse a viviendas inferiores. Nuestro servicio de emergencia está disponible las 24 horas. Llegamos a cualquier punto de Arrecife en 2-4 horas para emergencias, equipados con todo lo necesario para localizar y aislar la fuga inmediatamente."
        },
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
        seo: { title: "Detección Fugas Arrecife | Expertos en Fugas de Agua y Piscinas", description: "Detección profesional de fugas en Arrecife, capital de Lanzarote. Fugas de agua ocultas, piscinas, tuberías subterráneas. Sin Encontrar, Sin Pagar. Emergencias 24h. +34 711 051 071", keywords: "detección fugas Arrecife, fugas agua Arrecife, fugas piscina Arrecife, reparación fugas Arrecife, fontanero Arrecife Lanzarote, fugas ocultas Arrecife" }
      },
      "puerto-del-carmen": {
        name: "Puerto del Carmen",
        slug: "puerto-del-carmen",
        description: "Servicios expertos de detección de fugas en Puerto del Carmen, el centro turístico más concurrido de Lanzarote.",
        heroText: "Los hoteles, apartamentos y villas de Puerto del Carmen necesitan detección de fugas fiable. Proporcionamos un servicio rápido y profesional para minimizar las molestias a huéspedes y residentes.",
        areaDescription: "Como el destino turístico principal de Lanzarote, Puerto del Carmen tiene una alta concentración de hoteles, apartamentos de vacaciones y villas de alquiler. Las fugas de agua pueden ser costosas para los propietarios, tanto en facturas de agua como en posibles daños a la experiencia de los huéspedes. Ofrecemos servicio prioritario para propiedades comerciales y llamadas de emergencia para hoteles con fugas activas.",
        aboutLocation: "Puerto del Carmen es el corazón turístico de Lanzarote, una vibrante zona costera que se extiende a lo largo de 6 kilómetros de playas doradas. Lo que comenzó como un pequeño pueblo pesquero en los años 60 se ha transformado en el resort más popular de la isla, albergando más de la mitad de las camas turísticas de Lanzarote. El pueblo viejo conserva su encanto tradicional con restaurantes de pescado fresco junto al puerto, mientras que la Avenida de las Playas ofrece kilómetros de paseo marítimo con tiendas, restaurantes y bares. Puerto del Carmen atrae a millones de visitantes cada año, desde familias británicas y alemanas hasta nómadas digitales que trabajan desde sus apartamentos con vistas al mar.",
        landmarks: ["Playa Grande", "Playa Chica", "Avenida de las Playas", "Puerto Viejo", "Centro Comercial Biosfera", "Los Fariones"],
        neighborhoods: ["Puerto Viejo", "La Tiñosa", "Los Pocillos", "Matagorda", "Playa de los Pocillos", "La Peñita"],
        commonWaterIssues: [
          { title: "Fugas en Piscinas de Hoteles", description: "Los complejos hoteleros tienen sistemas de piscinas con múltiples componentes—jacuzzis, cascadas, circuitos de recirculación—cada uno una posible fuente de fuga que aumenta costes operativos." },
          { title: "Tuberías Degradadas por el Sol", description: "Las azoteas de los complejos de los años 80 tienen tuberías de polietileno expuestas a décadas de sol intenso. El plástico se vuelve quebradizo y desarrolla micro-fisuras." },
          { title: "Corrosión por Ambiente Marino", description: "Las propiedades en primera línea de playa sufren corrosión acelerada. El aire salino ataca conexiones metálicas y acelera el deterioro de tuberías de cobre y hierro." },
          { title: "Fugas Ocultas en Apartamentos Turísticos", description: "Con alta rotación de huéspedes, las fugas pequeñas pueden pasar meses sin detectarse. El propietario descubre el problema al recibir facturas de agua extraordinarias." }
        ],
        serviceCoverage: "Cubrimos toda la extensión de Puerto del Carmen: desde el tranquilo Puerto Viejo con sus restaurantes tradicionales, pasando por la animada zona de La Tiñosa y la Avenida de las Playas, hasta las zonas residenciales más tranquilas de Los Pocillos y Matagorda. Damos servicio tanto a propiedades turísticas (hoteles, apartamentos de alquiler vacacional, complejos) como a viviendas de residentes permanentes. También cubrimos las urbanizaciones en la ladera como Risco Prieto y Puerto del Carmen Alto.",
        whyChooseUs: [
          "Experiencia específica con propiedades turísticas—entendemos la urgencia de resolver problemas sin afectar huéspedes",
          "Disponibilidad de servicio de emergencia para hoteles con fugas activas que amenazan habitaciones ocupadas",
          "Informes profesionales en inglés y español para propietarios extranjeros y administradores de fincas",
          "Técnicas no invasivas que permiten continuar con la actividad hotelera mientras localizamos fugas",
          "Conocimiento profundo de los sistemas de fontanería típicos de los complejos turísticos de la zona",
          "Garantía Sin Encontrar, Sin Pagar—especialmente importante para propietarios que gestionan remotamente"
        ],
        emergencyResponse: {
          responseTime: "1-3 horas",
          availability: "24/7 Emergencias",
          description: "En Puerto del Carmen, una fuga de agua activa puede significar habitaciones de hotel fuera de servicio o apartamentos turísticos inhabilitados—costes que se multiplican cada hora. Nuestro equipo de emergencia puede estar en cualquier punto de Puerto del Carmen en 1-3 horas, incluso fuera de horario laboral. Llegamos con todo el equipo necesario para localizar la fuga y, si es posible, realizar la reparación inmediata."
        },
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
        seo: { title: "Detección Fugas Puerto del Carmen | Hoteles y Villas", description: "Detección profesional de fugas en Puerto del Carmen. Hoteles, villas, apartamentos turísticos. Piscinas y emergencias 24h. Sin Encontrar, Sin Pagar. +34 711 051 071", keywords: "detección fugas Puerto del Carmen, fugas agua Puerto del Carmen, fugas piscina Puerto del Carmen, fugas hotel Lanzarote, reparación urgente fugas" }
      },
      "playa-blanca": {
        name: "Playa Blanca",
        slug: "playa-blanca",
        description: "Expertos locales en detección de fugas con base en Playa Blanca, dando servicio al sur de Lanzarote.",
        heroText: "Estamos ubicados aquí mismo en Playa Blanca, sus especialistas locales en detección de fugas. Con más de €80.000 en equipos profesionales, damos servicio a todo el sur de la isla con disponibilidad el mismo día.",
        areaDescription: "Playa Blanca es nuestra base, lo que significa que podemos ofrecer los tiempos de respuesta más rápidos en el sur de Lanzarote. Las villas de lujo y propiedades de la marina a menudo cuentan con sistemas de fontanería complejos y piscinas que requieren detección especializada. Conocemos los estilos de construcción locales y los problemas comunes, dándonos ventaja a la hora de encontrar y reparar fugas rápidamente.",
        aboutLocation: "Playa Blanca es el resort más meridional de Lanzarote, una zona que ha experimentado un espectacular desarrollo en las últimas tres décadas. Lo que comenzó como un tranquilo pueblo pesquero se ha transformado en un destino de lujo con la exclusiva Marina Rubicón, playas de arena blanca y urbanizaciones de alto standing. A diferencia de Puerto del Carmen, Playa Blanca mantiene un ritmo más relajado y atrae a un público que busca tranquilidad y calidad. La zona ofrece acceso por ferry a Fuerteventura, algunas de las mejores playas de la isla como Papagayo, y vistas impresionantes hacia los islotes de Lobos y Fuerteventura.",
        landmarks: ["Marina Rubicón", "Playas de Papagayo", "Faro de Pechiguera", "Castillo de las Coloradas", "Centro Comercial Rubicón", "Puerto Deportivo"],
        neighborhoods: ["Centro Playa Blanca", "Las Coloradas", "Montaña Roja", "Marina Rubicón", "Faro Park", "Los Limones", "Playa Flamingo"],
        commonWaterIssues: [
          { title: "Fugas en Piscinas de Villas de Lujo", description: "Las villas de alta gama tienen piscinas infinity, spas integrados y sistemas de climatización que multiplican los posibles puntos de fuga. Cada componente requiere inspección especializada." },
          { title: "Sistemas de Riego Complejos", description: "Los jardines tropicales de las villas cuentan con múltiples zonas de riego automático. Las fugas en tuberías enterradas pueden pasar desapercibidas durante meses, disparando las facturas de agua." },
          { title: "Problemas con Aljibes Tradicionales", description: "Las propiedades más antiguas de Las Coloradas tienen depósitos de agua subterráneos (aljibes) con muros de piedra que pueden desarrollar filtraciones difíciles de localizar." },
          { title: "Terreno Volcánico Problemático", description: "El suelo volcánico del sur de Lanzarote hace que la excavación sea extremadamente costosa. Nuestra detección precisa minimiza el área a excavar, ahorrando miles de euros." }
        ],
        serviceCoverage: "Como empresa local con base en Playa Blanca, cubrimos toda la zona sur con los tiempos de respuesta más rápidos de la isla. Nuestro servicio abarca desde el centro histórico junto al puerto hasta las urbanizaciones de lujo de Marina Rubicón, Montaña Roja y Faro Park. También damos servicio a las zonas residenciales de Las Coloradas, Los Limones y las propiedades más alejadas hacia Papagayo. Cubrimos tanto villas individuales como comunidades de propietarios, hoteles boutique y apartamentos turísticos.",
        whyChooseUs: [
          "Somos locales—nuestra oficina está aquí en Playa Blanca, lo que significa respuesta inmediata sin tiempos de desplazamiento",
          "Conocimiento profundo de las construcciones típicas de la zona sur, desde villas de lujo hasta casas tradicionales",
          "Experiencia específica con los sistemas de piscinas infinity y spas comunes en las propiedades de alto standing",
          "Relaciones establecidas con constructores, arquitectos y administradores de fincas locales",
          "Disponibilidad para emergencias—podemos estar en su propiedad en minutos, no horas",
          "Entendemos los desafíos del terreno volcánico y la importancia de la detección precisa"
        ],
        emergencyResponse: {
          responseTime: "30 min - 1 hora",
          availability: "24/7 Emergencias",
          description: "Como residentes de Playa Blanca, ofrecemos el tiempo de respuesta más rápido del sur de la isla. Para emergencias en Playa Blanca y alrededores, podemos estar en su propiedad en 30 minutos a 1 hora, cualquier día de la semana. Esto es crucial cuando una fuga amenaza con dañar una villa de lujo o cuando hay huéspedes esperando en una propiedad de alquiler."
        },
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
        seo: { title: "Detección Fugas Playa Blanca | ¡Somos Locales!", description: "Expertos locales en detección de fugas en Playa Blanca. Villas de lujo, piscinas, fugas subterráneas. Respuesta inmediata. Sin Encontrar, Sin Pagar. +34 711 051 071", keywords: "detección fugas Playa Blanca, fugas agua Playa Blanca, fugas piscina Playa Blanca, fontanero Playa Blanca, reparación fugas Playa Blanca Lanzarote" }
      },
      "costa-teguise": {
        name: "Costa Teguise",
        slug: "costa-teguise",
        description: "Servicios profesionales de detección de fugas en Costa Teguise, el resort familiar de Lanzarote.",
        heroText: "Los apartamentos, villas y propiedades comerciales de Costa Teguise necesitan detección de fugas fiable. Damos servicio a toda la zona con servicios profesionales de detección no invasiva.",
        areaDescription: "Costa Teguise es conocida por sus urbanizaciones construidas a propósito, muchas de los años 80 y 90. Estas propiedades a menudo tienen sistemas de fontanería compartidos complejos donde localizar la ubicación exacta de una fuga es crucial para evitar excavaciones innecesarias. Nuestro enfoque multi-tecnológico es perfecto para los bloques de apartamentos y piscinas comunitarias de Costa Teguise.",
        aboutLocation: "Costa Teguise es el segundo resort más grande de Lanzarote, diseñado originalmente por el célebre artista César Manrique en los años 70. A diferencia del desarrollo orgánico de Puerto del Carmen, Costa Teguise fue planificada desde cero como un destino turístico de calidad. El resultado es un resort con calles amplias, zonas verdes bien cuidadas y una arquitectura que respeta el estilo tradicional canario. La zona atrae principalmente a familias europeas, ofreciendo playas seguras, un paseo marítimo animado y el único campo de golf de la isla. La mezcla de turistas y residentes permanentes—muchos jubilados europeos—crea una comunidad diversa con necesidades variadas.",
        landmarks: ["Playa de las Cucharas", "Pueblo Marinero", "Campo de Golf Costa Teguise", "Aquarium Lanzarote", "Playa de los Charcos", "Centro Comercial Las Cucharas"],
        neighborhoods: ["Playa de las Cucharas", "Playa de los Charcos", "Pueblo Marinero", "Jardín del Mar", "Oasis de Nazaret", "El Jablillo"],
        commonWaterIssues: [
          { title: "Sistemas de Fontanería Envejecidos", description: "Los complejos de los años 80 tienen tuberías de más de 40 años con múltiples puntos de distribución. La corrosión interna y las juntas deterioradas causan fugas en ubicaciones inesperadas." },
          { title: "Piscinas Comunitarias Problemáticas", description: "Las grandes piscinas comunitarias tienen redes de tuberías extensas. Una fuga puede estar a 50 metros del punto visible de pérdida de agua, requiriendo experiencia para aislar la sección afectada." },
          { title: "Confusión Evaporación vs Fuga", description: "Los vientos alisios constantes del noreste aceleran la evaporación de piscinas. Nuestras pruebas de presión distinguen definitivamente entre pérdida por evaporación y fugas reales." },
          { title: "Fugas en Sistemas de Riego del Golf", description: "Las propiedades cercanas al campo de golf tienen sistemas de riego extensos. Las fugas subterráneas pueden enmascararse durante meses, aumentando silenciosamente las facturas de agua." }
        ],
        serviceCoverage: "Cubrimos toda Costa Teguise desde el animado paseo marítimo de Las Cucharas hasta las urbanizaciones más tranquilas del interior. Nuestro servicio incluye los grandes complejos turísticos como Sands Beach, Los Zocos, Oasis Lanz y Barceló Teguise Beach, así como las comunidades residenciales de Jardín del Mar, El Jablillo y Oasis de Nazaret. También damos servicio a las propiedades cerca del campo de golf y las zonas residenciales de residentes permanentes.",
        whyChooseUs: [
          "Experiencia específica con los sistemas de fontanería centralizados típicos de los complejos de Costa Teguise",
          "Capacidad para trabajar con comunidades de propietarios y administradores de fincas en múltiples idiomas",
          "Pruebas de presión profesionales para distinguir fugas reales de pérdida por evaporación",
          "Técnicas no invasivas ideales para edificios compartidos—mínima molestia a vecinos",
          "Informes detallados válidos para reclamaciones de seguros y reuniones de comunidades",
          "Conocimiento de los desafíos específicos de las construcciones de los años 80-90 de la zona"
        ],
        emergencyResponse: {
          responseTime: "2-3 horas",
          availability: "24/7 Emergencias",
          description: "En Costa Teguise, donde muchas propiedades son apartamentos con vecinos arriba y abajo, una fuga puede convertirse rápidamente en un problema para múltiples viviendas. Ofrecemos servicio de emergencia para aislar fugas activas y minimizar daños. Llegamos a cualquier punto de Costa Teguise en 2-3 horas, equipados para diagnóstico inmediato y, si es posible, reparación temporal para contener el problema."
        },
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
        seo: { title: "Detección Fugas Costa Teguise | Apartamentos y Piscinas", description: "Detección profesional de fugas en Costa Teguise. Apartamentos, complejos turísticos, piscinas comunitarias. Expertos en edificios compartidos. Sin Encontrar, Sin Pagar. +34 711 051 071", keywords: "detección fugas Costa Teguise, fugas agua Costa Teguise, fugas piscina Costa Teguise, fugas apartamentos Lanzarote, piscina comunitaria fuga" }
      },
      "yaiza": {
        name: "Yaiza",
        slug: "yaiza",
        description: "Servicios profesionales de detección de fugas en Yaiza, uno de los municipios más pintorescos de Lanzarote.",
        heroText: "Las villas de lujo, fincas rurales y propiedades tradicionales de Yaiza merecen detección de fugas experta. Proporcionamos servicios especializados en todo este hermoso municipio.",
        areaDescription: "El municipio de Yaiza cubre el suroeste de Lanzarote incluyendo Playa Blanca, El Golfo y la impresionante zona del Parque Nacional de Timanfaya. La región cuenta con muchas propiedades de alta gama con sistemas de agua complejos y piscinas. Nuestra proximidad a Yaiza (estamos basados en Playa Blanca) significa tiempos de respuesta rápidos y conocimiento local de estilos de construcción y problemas comunes de fontanería.",
        aboutLocation: "Yaiza es uno de los municipios más extensos y diversos de Lanzarote, abarcando desde el bullicioso resort de Playa Blanca hasta los tranquilos pueblos agrícolas del interior. El casco histórico de Yaiza, con sus casas blancas inmaculadas y palmeras canarias, ha sido reconocido como uno de los pueblos más bonitos de España. El municipio incluye joyas naturales como El Golfo con su laguna verde, las playas vírgenes de Papagayo y el impresionante Parque Nacional de Timanfaya. La zona atrae tanto a turistas como a residentes que buscan la combinación perfecta de tranquilidad rural y acceso a servicios modernos.",
        landmarks: ["Pueblo de Yaiza", "El Golfo", "Parque Nacional Timanfaya", "Playas de Papagayo", "La Geria viñedos", "Salinas de Janubio"],
        neighborhoods: ["Yaiza pueblo", "Uga", "Femés", "Las Breñas", "La Geria", "El Golfo", "Las Casitas de Femés"],
        commonWaterIssues: [
          { title: "Fugas en Aljibes Tradicionales", description: "Las fincas rurales tienen depósitos de agua subterráneos (aljibes) con muros de piedra que pueden desarrollar filtraciones. Localizar la fuga exacta en estas estructuras requiere experiencia especializada." },
          { title: "Sistemas de Riego para Viñedos", description: "Las bodegas de La Geria tienen kilómetros de tuberías de riego por goteo enterradas. Las micro-fugas múltiples son comunes y difíciles de detectar sin equipamiento profesional." },
          { title: "Tuberías de Suministro Largas", description: "Las propiedades rurales alejadas de la red principal tienen tuberías de suministro de cientos de metros. Una fuga en cualquier punto puede representar pérdidas significativas de agua y presión." },
          { title: "Restricciones de Excavación", description: "Las propiedades cerca del Parque Nacional tienen restricciones estrictas sobre excavación. Nuestra detección precisa es esencial para minimizar el impacto medioambiental de las reparaciones." }
        ],
        serviceCoverage: "Cubrimos todo el extenso municipio de Yaiza: desde el pueblo histórico de Yaiza hasta las fincas de Uga y La Geria, pasando por los pequeños núcleos de Femés, Las Breñas y Las Casitas. También damos servicio a las propiedades de El Golfo y las zonas rurales hacia Timanfaya. Como empresa basada en Playa Blanca (que pertenece al municipio de Yaiza), conocemos íntimamente la zona y sus peculiaridades constructivas.",
        whyChooseUs: [
          "Conocimiento especializado de los sistemas de agua rurales: aljibes, pozos, y tuberías de suministro largas",
          "Experiencia con las restricciones de excavación cerca del Parque Nacional de Timanfaya",
          "Capacidad para detectar fugas en sistemas de riego de viñedos y fincas agrícolas",
          "Tiempo de respuesta rápido gracias a nuestra ubicación en Playa Blanca, dentro del municipio",
          "Comprensión de la arquitectura tradicional canaria y sus desafíos de fontanería únicos",
          "Equipo capaz de acceder a propiedades rurales alejadas de carreteras principales"
        ],
        emergencyResponse: {
          responseTime: "1-2 horas",
          availability: "24/7 Emergencias",
          description: "Como expertos locales del municipio de Yaiza, ofrecemos tiempos de respuesta rápidos para emergencias en toda la zona. Para propiedades en Yaiza pueblo, Uga, o La Geria, podemos estar allí en 1-2 horas. Para El Golfo o zonas más alejadas, nos adaptamos a la urgencia de la situación. Entendemos que en propiedades rurales, una fuga puede significar quedarse sin agua—actuamos con la urgencia necesaria."
        },
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
        seo: { title: "Detección Fugas Yaiza | Villas, Fincas y Propiedades Rurales", description: "Detección profesional de fugas en el municipio de Yaiza. Villas de lujo, fincas rurales, viñedos de La Geria. Expertos en sistemas de agua tradicionales. +34 711 051 071", keywords: "detección fugas Yaiza, fugas agua Yaiza, fugas piscina Yaiza, fugas villa Lanzarote, reparación fugas finca Yaiza, fugas aljibe" }
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
      },
      "puerto-calero": {
        name: "Puerto Calero",
        slug: "puerto-calero",
        description: "Servicios profesionales de detección de fugas en Puerto Calero, la exclusiva zona de marina de Lanzarote.",
        heroText: "Las villas de lujo y propiedades de marina de Puerto Calero necesitan detección de fugas fiable. Proporcionamos servicios especializados para este prestigioso desarrollo.",
        areaDescription: "Puerto Calero es el desarrollo de marina más exclusivo de Lanzarote, con villas de alta gama, apartamentos y propiedades comerciales. Las propiedades de la marina suelen tener sistemas de fontanería complejos incluyendo piscinas, spas y riego. Nuestra proximidad y equipo profesional garantizan tiempos de respuesta rápidos.",
        localChallenges: "Las propiedades de marina de Puerto Calero enfrentan desafíos únicos: proximidad al agua salada que acelera la corrosión en tuberías de cobre y accesorios de latón; sistemas complejos de piscina y spa con múltiples bombas de circulación; riego subterráneo para jardines cuidados; y clientes prestigiosos que requieren servicio discreto y con mínima interrupción. Las propiedades de alta gama a menudo tienen sistemas de calefacción por suelo radiante donde la detección de fugas requiere experiencia en imagen térmica.",
        nearbyAreas: ["Puerto del Carmen", "Tías", "Playa Blanca", "Arrecife"],
        services: [
          { title: "Detección de Fugas de Agua Puerto Calero", description: "Detección experta de fugas para las villas de lujo de Puerto Calero. Métodos no invasivos con imagen térmica y acústica.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Puerto Calero", description: "Detección de fugas en piscinas y spas de Puerto Calero. Localización completa con informes profesionales.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Detección Subterránea Puerto Calero", description: "Detección de tuberías y servicios subterráneos en propiedades de marina. Esencial antes de jardinería o construcción.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Reparación de Fugas Puerto Calero", description: "Reparación profesional de fugas para villas de Puerto Calero. Servicio discreto para propiedades prestigiosas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Guía detección fugas en piscinas", href: `${blogBasePath}/como-detectar-fugas-en-piscinas-lanzarote` },
          { title: "Coste reparación fugas piscina", href: `${blogBasePath}/coste-reparacion-fugas-piscina-lanzarote` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
        ],
        seo: { title: "Detección Fugas Puerto Calero | Marina | Canary Detect", description: "Detección de fugas Puerto Calero. Villas de lujo marina, piscinas, spas. Servicio profesional discreto. +34 711 051 071", keywords: "detección fugas Puerto Calero, fugas agua Puerto Calero, fugas piscina marina Puerto Calero, fugas villa Lanzarote" }
      },
      "femes": {
        name: "Femés",
        slug: "femes",
        description: "Servicios profesionales de detección de fugas en Femés, un pueblo tradicional de montaña en el sur de Lanzarote.",
        heroText: "Femés y las propiedades rurales circundantes necesitan detección de fugas especializada. Nuestro conocimiento local y equipo profesional dan servicio a este pintoresco pueblo.",
        areaDescription: "Femés es un pequeño pueblo tradicional situado en las montañas de Ajaches sobre Playa Blanca. La zona cuenta con casas canarias tradicionales, fincas rurales y propiedades renovadas con vistas impresionantes. Muchas propiedades tienen sistemas de fontanería antiguos y dependen de aljibes para almacenamiento de agua. Nuestra proximidad (base en Playa Blanca) significa tiempos de respuesta rápidos.",
        localChallenges: "Las propiedades de Femés presentan desafíos rurales: largas tuberías de suministro de agua desde la red creando problemas de presión; aljibes tradicionales de piedra con grietas capilares; acceso limitado por carreteras para vehículos de servicio; y propiedades a menudo vacías durante períodos prolongados permitiendo que pequeñas fugas causen daños significativos. El microclima de montaña trae más humedad que las zonas costeras, haciendo el diagnóstico de humedad más complejo.",
        nearbyAreas: ["Playa Blanca", "Yaiza", "Las Breñas", "Uga"],
        services: [
          { title: "Detección de Fugas de Agua Femés", description: "Detección especializada de fugas para propiedades del pueblo de Femés. Servicio experto para casas tradicionales y fincas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea Femés", description: "Detección de tuberías subterráneas para propiedades rurales de Femés. Localice tuberías enterradas antes de excavar.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas Femés", description: "Detección de fugas en piscinas privadas de la zona de Femés. Servicio completo de localización.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas Femés", description: "Reparación profesional de fugas en Femés. Tuberías de agua, aljibes y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Guía de aljibes y cisternas", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Paredes húmedas en casas antiguas", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Femés | Propiedades Rurales | Canary Detect", description: "Detección de fugas Femés. Casas tradicionales, fincas, aljibes. Expertos locales. +34 711 051 071", keywords: "detección fugas Femés, fugas agua Femés Lanzarote, detección fugas finca, detección fugas rural Lanzarote" }
      },
      "las-brenas": {
        name: "Las Breñas",
        slug: "las-brenas",
        description: "Detección profesional de fugas en Las Breñas, un tranquilo pueblo agrícola cerca de Yaiza.",
        heroText: "Las Breñas y las propiedades rurales cercanas necesitan detección de fugas fiable. Proporcionamos servicios expertos para esta pacífica comunidad agrícola.",
        areaDescription: "Las Breñas es un pequeño pueblo agrícola entre Yaiza y Femés, conocido por su herencia agrícola tradicional. Las propiedades incluyen casas de pueblo tradicionales, fincas rurales y casas de campo renovadas. Muchas dependen de cisternas y tienen largas tuberías de suministro que requieren detección especializada.",
        localChallenges: "Las propiedades de Las Breñas enfrentan desafíos de zona agrícola: sistemas de riego por goteo para cultivos y jardines con múltiples pequeños puntos de fuga; sistemas de suministro de agua compartidos entre propiedades vecinas; infraestructura envejecida con tuberías galvanizadas propensas a corrosión; y propiedades de uso estacional que requieren inspección antes y después de los períodos de cierre.",
        nearbyAreas: ["Yaiza", "Femés", "Playa Blanca", "Uga"],
        services: [
          { title: "Detección de Fugas de Agua Las Breñas", description: "Detección experta de fugas para el pueblo de Las Breñas y propiedades rurales. Casas tradicionales y fincas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea Las Breñas", description: "Detección de tuberías subterráneas para propiedades de Las Breñas. Esencial para sistemas de riego y suministro de agua.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas Las Breñas", description: "Detección de fugas en piscinas privadas de la zona de Las Breñas. Servicio profesional de localización.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas Las Breñas", description: "Reparación profesional de fugas en Las Breñas. Tuberías, sistemas de riego y reparaciones subterráneas.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Guía sistema de agua Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Contador de agua corriendo sin usar grifos", href: `${blogBasePath}/contador-agua-girando-grifos-cerrados` },
        ],
        seo: { title: "Detección Fugas Las Breñas | Canary Detect", description: "Detección de fugas Las Breñas. Casas de pueblo, fincas, sistemas de riego. +34 711 051 071", keywords: "detección fugas Las Breñas, fugas agua Las Breñas Lanzarote, detección fugas rural, fugas finca Las Breñas" }
      },
      "uga": {
        name: "Uga",
        slug: "uga",
        description: "Servicios profesionales de detección de fugas en Uga, un pueblo tradicional en la zona vinícola de Lanzarote.",
        heroText: "Las propiedades tradicionales y fincas de Uga necesitan detección de fugas especializada. Proporcionamos servicios expertos en este encantador pueblo cerca de La Geria.",
        areaDescription: "Uga es un pintoresco pueblo en el borde de la región vinícola de La Geria, conocido por su arquitectura canaria tradicional y estación de camellos. Las propiedades incluyen casas históricas de pueblo, fincas renovadas y bodegas. La herencia agrícola de la zona significa que muchas propiedades tienen sistemas complejos de riego y almacenamiento de agua.",
        localChallenges: "Las propiedades de Uga presentan desafíos de zona vinícola: bodegas con refrigeración que crea humedad enmascarando fugas de agua; construcciones tradicionales de piedra con paredes gruesas que ocultan tuberías; riego por goteo para viñas y jardines con múltiples puntos potenciales de fuga; y edificios históricos que requieren métodos de detección cuidadosos y no invasivos para preservar su carácter.",
        nearbyAreas: ["Yaiza", "Femés", "La Geria", "Tías", "Mácher"],
        services: [
          { title: "Detección de Fugas de Agua Uga", description: "Detección experta de fugas para propiedades del pueblo de Uga. Casas tradicionales, fincas y bodegas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea Uga", description: "Detección de tuberías subterráneas y sistemas de riego en Uga. Esencial para viñedos y jardines.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas Uga", description: "Detección de fugas en piscinas privadas de la zona de Uga. Inspección completa con localización.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas Uga", description: "Reparación profesional de fugas en Uga. Reparaciones respetuosas para propiedades tradicionales.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Sistemas de agua tradicionales Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Imagen térmica para edificios antiguos", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
          { title: "Detección de fugas subterráneas", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
        ],
        seo: { title: "Detección Fugas Uga | La Geria | Canary Detect", description: "Detección de fugas Uga. Pueblo tradicional, fincas, bodegas. Especialistas zona vinícola. +34 711 051 071", keywords: "detección fugas Uga, fugas agua Uga Lanzarote, detección fugas bodega, detección fugas La Geria" }
      },
      "tahiche": {
        name: "Tahiche",
        slug: "tahiche",
        description: "Servicios profesionales de detección de fugas en Tahiche, hogar de la Fundación César Manrique.",
        heroText: "Las propiedades residenciales y villas de Tahiche necesitan detección de fugas fiable. Proporcionamos servicios expertos en esta ubicación central de Lanzarote.",
        areaDescription: "Tahiche es un pueblo residencial entre Costa Teguise y Arrecife, famoso como hogar de la antigua residencia de César Manrique (ahora fundación). La zona cuenta con una mezcla de casas canarias tradicionales y villas modernas. Su ubicación central significa que las propiedades conectan con la infraestructura principal de agua, aunque las propiedades más antiguas pueden tener tuberías envejecidas.",
        localChallenges: "Las propiedades de Tahiche enfrentan desafíos del centro de la isla: casas tradicionales con fontanería adaptada creando rutas de tuberías complejas; propiedades sobre roca volcánica donde la excavación es difícil y costosa; villas modernas con sistemas de calefacción por suelo radiante que requieren experiencia en imagen térmica; y sistemas de agua comunitarios que sirven a múltiples propiedades donde aislar fugas individuales requiere experiencia.",
        nearbyAreas: ["Costa Teguise", "Arrecife", "Teguise", "Guatiza"],
        services: [
          { title: "Detección de Fugas de Agua Tahiche", description: "Detección experta de fugas para propiedades de Tahiche. Casas tradicionales y villas modernas.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección de Fugas en Piscinas Tahiche", description: "Detección de fugas en piscinas para villas de Tahiche. Servicio profesional con localización completa.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Inspección de Desagües Tahiche", description: "Inspecciones CCTV de desagües para propiedades de Tahiche. Identifique bloqueos y estado de tuberías.", href: `${serviceBasePath}/deteccion-desagues`, icon: Search },
          { title: "Reparación de Fugas Tahiche", description: "Reparación profesional de fugas en Tahiche. Tuberías de agua, piscinas y sistemas de drenaje.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Contador de agua corriendo constantemente", href: `${blogBasePath}/contador-agua-girando-grifos-cerrados` },
          { title: "Imagen térmica para fugas", href: `${blogBasePath}/imagen-termica-deteccion-fugas-explicada` },
          { title: "Diagnóstico paredes húmedas", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Tahiche | Canary Detect", description: "Detección de fugas Tahiche. Propiedades residenciales, villas, casas tradicionales. Centro Lanzarote. +34 711 051 071", keywords: "detección fugas Tahiche, fugas agua Tahiche Lanzarote, fugas villa Tahiche, fontanero Tahiche" }
      },
      "guatiza": {
        name: "Guatiza",
        slug: "guatiza",
        description: "Servicios profesionales de detección de fugas en Guatiza, famosa por su Jardín de Cactus.",
        heroText: "Guatiza y las zonas agrícolas circundantes necesitan detección de fugas especializada. Proporcionamos servicios expertos para este tradicional pueblo del noreste de Lanzarote.",
        areaDescription: "Guatiza es un pueblo agrícola tradicional en el noreste de Lanzarote, famoso por sus plantaciones de cactus y el Jardín de Cactus diseñado por César Manrique. Las propiedades incluyen casas de pueblo tradicionales, fincas rurales y casas de campo renovadas. La herencia agrícola de la zona significa extensos sistemas de riego.",
        localChallenges: "Las propiedades de Guatiza enfrentan desafíos de zona agrícola: extenso riego de plantaciones de cactus con sistemas de goteo subterráneos; casas tradicionales de piedra con paredes gruesas que ocultan la fontanería; desarrollo limitado significando infraestructura más antigua; y propiedades con sistemas de captación de agua de lluvia (maretas) que requieren inspección especializada. La ubicación noreste trae más humedad afectando el diagnóstico de humedades.",
        nearbyAreas: ["Teguise", "Costa Teguise", "Arrieta", "Mala", "Tahiche"],
        services: [
          { title: "Detección de Fugas de Agua Guatiza", description: "Detección experta de fugas para el pueblo de Guatiza y propiedades rurales. Agrícola y residencial.", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
          { title: "Detección Subterránea Guatiza", description: "Detección de riego subterráneo y tuberías en Guatiza. Esencial para fincas de cactus y jardines.", href: `${serviceBasePath}/deteccion-subterranea`, icon: Search },
          { title: "Detección de Fugas en Piscinas Guatiza", description: "Detección de fugas en piscinas privadas de la zona de Guatiza. Localización profesional.", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
          { title: "Reparación de Fugas Guatiza", description: "Reparación profesional de fugas en Guatiza. Tuberías, riego y sistemas subterráneos.", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench }
        ],
        relatedLinks: [
          { title: "Guía sistemas de agua Lanzarote", href: `${blogBasePath}/domina-tu-sistema-de-agua-lanzarote` },
          { title: "Señales de fuga subterránea", href: `${blogBasePath}/senales-fuga-agua-subterranea` },
          { title: "Paredes húmedas en casas antiguas", href: `${blogBasePath}/paredes-humedas-causas-soluciones` },
        ],
        seo: { title: "Detección Fugas Guatiza | Canary Detect", description: "Detección de fugas Guatiza. Casas de pueblo, fincas de cactus, sistemas de riego. +34 711 051 071", keywords: "detección fugas Guatiza, fugas agua Guatiza Lanzarote, fugas finca cactus, fugas riego Guatiza" }
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
      aboutLocation: "Arrecife, the vibrant capital of Lanzarote, is a port city of over 60,000 residents that blends history, commerce, and modern life. Founded in the 15th century as a fishing port, the city has evolved into the island's administrative, commercial, and cultural centre. Arrecife's waterfront promenade offers spectacular Atlantic views, while the historic centre maintains traditional Canarian architectural charm with whitewashed houses and wooden balconies. The city hosts important cultural institutions, modern shopping centres, and a thriving local community that coexists with visitors from around the world.",
      landmarks: ["Charco de San Ginés", "Castillo de San Gabriel", "Marina Lanzarote", "Calle Real", "Playa del Reducto", "El Almacén Art Centre"],
      neighborhoods: ["Historic Centre", "San Ginés", "Los Alonso", "Argana Alta", "Altavista", "Titerroy", "Maneje"],
      commonWaterIssues: [
        { title: "Corroded Cast Iron Pipes", description: "Buildings constructed between 1960-1980 have cast iron pipes with decades of internal corrosion. Lanzarote's hard water accelerates this deterioration, causing leaks at joints and elbows." },
        { title: "Rising Damp", description: "Properties near Charco de San Ginés and the port area suffer from rising damp due to proximity to the water table and the salty ocean environment." },
        { title: "Leaks in Centralised Systems", description: "Apartment blocks in the centre have shared plumbing systems where a single leak can affect multiple homes and spike community water bills." },
        { title: "Water Pressure Problems", description: "Higher areas of Arrecife like Argana and Altavista experience pressure fluctuations that stress older pipes, causing micro-leaks difficult to detect." }
      ],
      serviceCoverage: "We provide complete coverage across the entire city of Arrecife and its neighbourhoods: from the historic centre with its traditional buildings, through the residential developments of Argana Alta and Altavista, to the commercial zones near the port and waterfront. Our service includes residential properties, apartment communities, hotels, offices, and commercial premises. We also serve the industrial areas and newer developments on the outskirts.",
      whyChooseUs: [
        "Deep knowledge of typical Arrecife building styles and their specific plumbing challenges",
        "Fast response from our base in the south—we reach Arrecife in under 45 minutes",
        "€80,000+ in equipment including thermal imaging cameras, acoustic detectors, and tracer gas equipment",
        "Specific experience with historic buildings in the old town that require non-invasive techniques",
        "No Find, No Fee guarantee—you only pay when we pinpoint your leak with precision",
        "Professional reports valid for insurance claims and property management companies"
      ],
      emergencyResponse: {
        responseTime: "2-4 hours",
        availability: "24/7 Emergency",
        description: "We understand that water leaks in Arrecife require urgent attention, especially in apartment buildings where water can seep into lower floors. Our emergency service is available 24 hours. We arrive anywhere in Arrecife within 2-4 hours for emergencies, equipped with everything needed to locate and isolate the leak immediately."
      },
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
      seo: { title: "Leak Detection Arrecife | Water & Pool Experts Lanzarote", description: "Professional leak detection in Arrecife, Lanzarote's capital. Hidden water leaks, pool leaks, underground pipes. No Find, No Fee. 24h emergencies. +34 711 051 071", keywords: "leak detection Arrecife, water leak detection Arrecife, pool leak detection Arrecife, leak repair Arrecife, plumber Arrecife Lanzarote, hidden water leak Arrecife" }
    },
    "puerto-del-carmen": {
      name: "Puerto del Carmen",
      slug: "puerto-del-carmen",
      description: "Expert leak detection services in Puerto del Carmen, Lanzarote's busiest tourist resort.",
      heroText: "Puerto del Carmen's hotels, apartments and villas need reliable leak detection. We provide fast, professional service to minimize disruption to guests and residents alike.",
      areaDescription: "As Lanzarote's premier tourist destination, Puerto del Carmen has a high concentration of hotels, holiday apartments and rental villas. Water leaks can be costly for property owners—both in water bills and potential damage to guest experiences. We offer priority service for commercial properties and emergency call-outs for hotels experiencing active leaks.",
      aboutLocation: "Puerto del Carmen is the tourist heart of Lanzarote, a vibrant coastal area stretching along 6 kilometres of golden beaches. What began as a small fishing village in the 1960s has transformed into the island's most popular resort, hosting more than half of Lanzarote's tourist beds. The old town retains its traditional charm with fresh fish restaurants by the harbour, while Avenida de las Playas offers kilometres of seafront promenade with shops, restaurants, and bars. Puerto del Carmen attracts millions of visitors each year, from British and German families to digital nomads working from apartments with sea views.",
      landmarks: ["Playa Grande", "Playa Chica", "Avenida de las Playas", "Old Harbour", "Biosfera Shopping Centre", "Los Fariones"],
      neighborhoods: ["Old Town", "La Tiñosa", "Los Pocillos", "Matagorda", "Playa de los Pocillos", "La Peñita"],
      commonWaterIssues: [
        { title: "Hotel Pool System Leaks", description: "Hotel complexes have pool systems with multiple components—jacuzzis, waterfalls, recirculation circuits—each a potential leak source increasing operating costs." },
        { title: "Sun-Degraded Pipes", description: "1980s complex rooftops have polyethylene pipes exposed to decades of intense sun. The plastic becomes brittle and develops micro-cracks." },
        { title: "Marine Environment Corrosion", description: "Beachfront properties suffer accelerated corrosion. Salty air attacks metal connections and accelerates deterioration of copper and iron pipes." },
        { title: "Hidden Leaks in Holiday Apartments", description: "With high guest turnover, small leaks can go undetected for months. Owners discover the problem when receiving extraordinary water bills." }
      ],
      serviceCoverage: "We cover the entire length of Puerto del Carmen: from the quiet Old Town with its traditional restaurants, through the lively La Tiñosa area and Avenida de las Playas, to the quieter residential zones of Los Pocillos and Matagorda. We serve both tourist properties (hotels, holiday rental apartments, complexes) and permanent resident homes. We also cover hillside developments like Risco Prieto and Puerto del Carmen Alto.",
      whyChooseUs: [
        "Specific experience with tourist properties—we understand the urgency of resolving issues without affecting guests",
        "Emergency service availability for hotels with active leaks threatening occupied rooms",
        "Professional reports in English and Spanish for foreign owners and property managers",
        "Non-invasive techniques that allow hotel operations to continue while we locate leaks",
        "Deep knowledge of typical plumbing systems in the area's tourist complexes",
        "No Find, No Fee guarantee—especially important for owners managing remotely"
      ],
      emergencyResponse: {
        responseTime: "1-3 hours",
        availability: "24/7 Emergency",
        description: "In Puerto del Carmen, an active water leak can mean hotel rooms out of service or tourist apartments unusable—costs that multiply every hour. Our emergency team can be anywhere in Puerto del Carmen within 1-3 hours, even outside business hours. We arrive with all equipment needed to locate the leak and, if possible, perform immediate repair."
      },
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
      seo: { title: "Leak Detection Puerto del Carmen | Hotels & Villas", description: "Professional leak detection in Puerto del Carmen. Hotels, villas, tourist apartments. Pool leaks and 24h emergencies. No Find, No Fee. +34 711 051 071", keywords: "leak detection Puerto del Carmen, water leak detection Puerto del Carmen, pool leak detection Puerto del Carmen, hotel leak detection Lanzarote, villa leak repair Puerto del Carmen" }
    },
    "playa-blanca": {
      name: "Playa Blanca",
      slug: "playa-blanca",
      description: "Local leak detection experts based in Playa Blanca, serving the south of Lanzarote.",
      heroText: "We're based right here in Playa Blanca—your local leak detection specialists. With €80,000+ of professional equipment, we serve the entire south of the island with same-day availability.",
      areaDescription: "Playa Blanca is our home base, meaning we can offer the fastest response times in the south of Lanzarote. The area's luxury villas and marina properties often feature complex plumbing systems and swimming pools that require specialist leak detection. We know the local building styles and common issues, giving us an edge when it comes to finding and fixing leaks quickly.",
      aboutLocation: "Playa Blanca is Lanzarote's southernmost resort, an area that has experienced spectacular development over the past three decades. What began as a quiet fishing village has transformed into a luxury destination with the exclusive Marina Rubicón, white sand beaches, and high-end developments. Unlike Puerto del Carmen, Playa Blanca maintains a more relaxed pace and attracts visitors seeking tranquillity and quality. The area offers ferry access to Fuerteventura, some of the island's best beaches like Papagayo, and stunning views towards Lobos Island and Fuerteventura.",
      landmarks: ["Marina Rubicón", "Papagayo Beaches", "Pechiguera Lighthouse", "Las Coloradas Castle", "Rubicón Shopping Centre", "Marina"],
      neighborhoods: ["Playa Blanca Centre", "Las Coloradas", "Montaña Roja", "Marina Rubicón", "Faro Park", "Los Limones", "Playa Flamingo"],
      commonWaterIssues: [
        { title: "Luxury Villa Pool Leaks", description: "High-end villas have infinity pools, integrated spas, and climate control systems that multiply potential leak points. Each component requires specialist inspection." },
        { title: "Complex Irrigation Systems", description: "Tropical villa gardens have multiple automatic irrigation zones. Leaks in buried pipes can go undetected for months, driving up water bills." },
        { title: "Traditional Aljibe Problems", description: "Older properties in Las Coloradas have underground water tanks (aljibes) with stone walls that can develop difficult-to-locate seepage." },
        { title: "Volcanic Terrain Challenges", description: "Southern Lanzarote's volcanic soil makes excavation extremely expensive. Our precise detection minimises the area to dig, saving thousands of euros." }
      ],
      serviceCoverage: "As a local company based in Playa Blanca, we cover the entire south with the fastest response times on the island. Our service spans from the historic centre by the port to the luxury developments of Marina Rubicón, Montaña Roja, and Faro Park. We also serve the residential areas of Las Coloradas, Los Limones, and properties further toward Papagayo. We cover individual villas as well as owner communities, boutique hotels, and tourist apartments.",
      whyChooseUs: [
        "We're local—our office is right here in Playa Blanca, meaning immediate response with no travel time",
        "Deep knowledge of typical southern zone construction, from luxury villas to traditional houses",
        "Specific experience with infinity pool and spa systems common in high-end properties",
        "Established relationships with local builders, architects, and property managers",
        "Emergency availability—we can be at your property in minutes, not hours",
        "We understand volcanic terrain challenges and the importance of precise detection"
      ],
      emergencyResponse: {
        responseTime: "30 min - 1 hour",
        availability: "24/7 Emergency",
        description: "As Playa Blanca residents, we offer the fastest response time in the south of the island. For emergencies in Playa Blanca and surroundings, we can be at your property in 30 minutes to 1 hour, any day of the week. This is crucial when a leak threatens to damage a luxury villa or when guests are waiting at a rental property."
      },
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
      seo: { title: "Leak Detection Playa Blanca | We're Local!", description: "Local leak detection experts in Playa Blanca. Luxury villas, pools, underground leaks. Immediate response. No Find, No Fee. +34 711 051 071", keywords: "leak detection Playa Blanca, water leak detection Playa Blanca, pool leak detection Playa Blanca, plumber Playa Blanca, leak repair Playa Blanca Lanzarote" }
    },
    "costa-teguise": {
      name: "Costa Teguise",
      slug: "costa-teguise",
      description: "Professional leak detection services in Costa Teguise, Lanzarote's family-friendly resort.",
      heroText: "Costa Teguise's apartments, villas and commercial properties need reliable leak detection. We serve the whole area with professional, non-invasive leak detection services.",
      areaDescription: "Costa Teguise is known for its purpose-built resort developments, many dating from the 1980s and 90s. These properties often have complex shared plumbing systems where pinpointing a leak's exact location is crucial to avoid unnecessary excavation. Our multi-technology approach is perfect for Costa Teguise's apartment blocks and community pools.",
      aboutLocation: "Costa Teguise is Lanzarote's second-largest resort, originally designed by the celebrated artist César Manrique in the 1970s. Unlike the organic development of Puerto del Carmen, Costa Teguise was planned from scratch as a quality tourist destination. The result is a resort with wide streets, well-maintained green areas, and architecture that respects traditional Canarian style. The area mainly attracts European families, offering safe beaches, a lively promenade, and the island's only golf course. The mix of tourists and permanent residents—many European retirees—creates a diverse community with varied needs.",
      landmarks: ["Playa de las Cucharas", "Pueblo Marinero", "Costa Teguise Golf Course", "Aquarium Lanzarote", "Playa de los Charcos", "Las Cucharas Shopping Centre"],
      neighborhoods: ["Playa de las Cucharas", "Playa de los Charcos", "Pueblo Marinero", "Jardín del Mar", "Oasis de Nazaret", "El Jablillo"],
      commonWaterIssues: [
        { title: "Aging Plumbing Systems", description: "1980s complexes have 40+ year old pipes with multiple distribution points. Internal corrosion and deteriorated joints cause leaks in unexpected locations." },
        { title: "Problematic Community Pools", description: "Large community pools have extensive pipe networks. A leak can be 50 metres from the visible water loss point, requiring expertise to isolate the affected section." },
        { title: "Evaporation vs Leak Confusion", description: "Constant northeast trade winds accelerate pool evaporation. Our pressure tests definitively distinguish between evaporation loss and actual leaks." },
        { title: "Golf Course Irrigation Leaks", description: "Properties near the golf course have extensive irrigation systems. Underground leaks can be masked for months, silently increasing water bills." }
      ],
      serviceCoverage: "We cover all of Costa Teguise from the lively Las Cucharas promenade to the quieter inland developments. Our service includes large tourist complexes like Sands Beach, Los Zocos, Oasis Lanz, and Barceló Teguise Beach, as well as residential communities in Jardín del Mar, El Jablillo, and Oasis de Nazaret. We also serve properties near the golf course and permanent resident areas.",
      whyChooseUs: [
        "Specific experience with the centralised plumbing systems typical of Costa Teguise complexes",
        "Ability to work with property communities and managers in multiple languages",
        "Professional pressure tests to distinguish real leaks from evaporation loss",
        "Non-invasive techniques ideal for shared buildings—minimal disturbance to neighbours",
        "Detailed reports valid for insurance claims and community meetings",
        "Knowledge of specific challenges in 1980s-90s construction in the area"
      ],
      emergencyResponse: {
        responseTime: "2-3 hours",
        availability: "24/7 Emergency",
        description: "In Costa Teguise, where many properties are apartments with neighbours above and below, a leak can quickly become a problem for multiple homes. We offer emergency service to isolate active leaks and minimise damage. We arrive anywhere in Costa Teguise within 2-3 hours, equipped for immediate diagnosis and, if possible, temporary repair to contain the problem."
      },
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
      seo: { title: "Leak Detection Costa Teguise | Apartments & Pools", description: "Professional leak detection in Costa Teguise. Apartments, tourist complexes, community pools. Shared building experts. No Find, No Fee. +34 711 051 071", keywords: "leak detection Costa Teguise, water leak detection Costa Teguise, pool leak detection Costa Teguise, apartment leak detection Lanzarote, community pool leak Costa Teguise" }
    },
    "yaiza": {
      name: "Yaiza",
      slug: "yaiza",
      description: "Professional leak detection services in Yaiza, one of Lanzarote's most picturesque municipalities.",
      heroText: "Yaiza's luxury villas, rural fincas and traditional properties deserve expert leak detection. We provide specialist services throughout this beautiful municipality.",
      areaDescription: "Yaiza municipality covers the southwest of Lanzarote including Playa Blanca, El Golfo, and the stunning Timanfaya National Park area. The region features many high-end properties with complex water systems and swimming pools. Our proximity to Yaiza (we're based in Playa Blanca) means fast response times and local knowledge of building styles and common plumbing issues in the area.",
      aboutLocation: "Yaiza is one of Lanzarote's most extensive and diverse municipalities, spanning from the bustling Playa Blanca resort to the tranquil farming villages of the interior. The historic centre of Yaiza, with its immaculate white houses and Canarian palm trees, has been recognised as one of Spain's most beautiful villages. The municipality includes natural gems like El Golfo with its green lagoon, the pristine Papagayo beaches, and the stunning Timanfaya National Park. The area attracts both tourists and residents seeking the perfect combination of rural tranquillity and access to modern amenities.",
      landmarks: ["Yaiza Village", "El Golfo", "Timanfaya National Park", "Papagayo Beaches", "La Geria Vineyards", "Janubio Salt Flats"],
      neighborhoods: ["Yaiza Village", "Uga", "Femés", "Las Breñas", "La Geria", "El Golfo", "Las Casitas de Femés"],
      commonWaterIssues: [
        { title: "Traditional Aljibe Leaks", description: "Rural fincas have underground water tanks (aljibes) with stone walls that can develop seepage. Locating the exact leak in these structures requires specialised expertise." },
        { title: "Vineyard Irrigation Systems", description: "La Geria wineries have kilometres of buried drip irrigation pipes. Multiple micro-leaks are common and difficult to detect without professional equipment." },
        { title: "Long Supply Pipes", description: "Rural properties far from the mains have supply pipes hundreds of metres long. A leak anywhere along the line can mean significant water and pressure losses." },
        { title: "Excavation Restrictions", description: "Properties near the National Park have strict excavation restrictions. Our precise detection is essential to minimise the environmental impact of repairs." }
      ],
      serviceCoverage: "We cover the entire extensive Yaiza municipality: from the historic Yaiza village to the fincas of Uga and La Geria, through the small settlements of Femés, Las Breñas, and Las Casitas. We also serve properties in El Golfo and rural areas towards Timanfaya. As a company based in Playa Blanca (which belongs to Yaiza municipality), we intimately know the area and its construction peculiarities.",
      whyChooseUs: [
        "Specialised knowledge of rural water systems: aljibes, wells, and long supply pipes",
        "Experience with excavation restrictions near Timanfaya National Park",
        "Ability to detect leaks in vineyard and agricultural irrigation systems",
        "Fast response time thanks to our location in Playa Blanca, within the municipality",
        "Understanding of traditional Canarian architecture and its unique plumbing challenges",
        "Equipment capable of accessing rural properties far from main roads"
      ],
      emergencyResponse: {
        responseTime: "1-2 hours",
        availability: "24/7 Emergency",
        description: "As local experts in Yaiza municipality, we offer fast response times for emergencies throughout the area. For properties in Yaiza village, Uga, or La Geria, we can be there in 1-2 hours. For El Golfo or more remote areas, we adapt to the urgency of the situation. We understand that in rural properties, a leak can mean running out of water—we act with the necessary urgency."
      },
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
      seo: { title: "Leak Detection Yaiza | Villas, Fincas & Rural Properties", description: "Professional leak detection in Yaiza municipality. Luxury villas, rural fincas, La Geria vineyards. Traditional water system experts. +34 711 051 071", keywords: "leak detection Yaiza, water leak detection Yaiza, pool leak detection Yaiza, villa leak detection Lanzarote, finca leak repair Yaiza, aljibe leak" }
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
    },
    "puerto-calero": {
      name: "Puerto Calero",
      slug: "puerto-calero",
      description: "Professional leak detection services in Puerto Calero, Lanzarote's exclusive marina village.",
      heroText: "Puerto Calero's luxury villas and marina properties need reliable leak detection. We provide specialist services for this prestigious development.",
      areaDescription: "Puerto Calero is Lanzarote's premier marina development, featuring high-end villas, apartments and commercial properties. The marina's luxurious properties often have complex plumbing systems including pools, spas and irrigation. Our proximity and professional equipment mean fast response times for this exclusive area.",
      localChallenges: "Puerto Calero's marina properties face unique challenges: saltwater proximity accelerating corrosion on copper pipes and brass fittings; complex pool and spa systems with multiple circulation pumps; underground irrigation for manicured gardens; and prestigious clients requiring discreet, minimal-disruption service. The high-spec properties often have underfloor heating systems where leak detection requires thermal imaging expertise.",
      nearbyAreas: ["Puerto del Carmen", "Tías", "Playa Blanca", "Arrecife"],
      services: [
        { title: "Water Leak Detection Puerto Calero", description: "Expert leak detection for Puerto Calero's luxury villas. Non-invasive thermal imaging and acoustic methods.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Puerto Calero", description: "Pool and spa leak detection for Puerto Calero properties. Complete pinpointing with professional reports.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Underground Detection Puerto Calero", description: "Underground pipe and utility detection for marina properties. Essential before landscaping or construction.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Leak Repair Puerto Calero", description: "Professional leak repair for Puerto Calero villas. Discreet service for prestigious properties.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Pool leak detection guide", href: `${blogBasePath}/how-to-check-for-pool-leaks-lanzarote` },
        { title: "Pool leak repair costs", href: `${blogBasePath}/swimming-pool-leak-repair-cost-lanzarote` },
        { title: "Signs of underground leak", href: `${blogBasePath}/signs-of-underground-water-leak` },
      ],
      seo: { title: "Leak Detection Puerto Calero | Marina Villas | Canary Detect", description: "Leak detection Puerto Calero. Luxury marina villas, pools, spas. Professional discreet service. Call +34 711 051 071", keywords: "leak detection Puerto Calero, water leak Puerto Calero, pool leak Puerto Calero marina, villa leak Lanzarote" }
    },
    "femes": {
      name: "Femés",
      slug: "femes",
      description: "Professional leak detection services in Femés, a traditional mountain village in southern Lanzarote.",
      heroText: "Femés and surrounding rural properties need specialist leak detection. Our local knowledge and professional equipment serve this picturesque village.",
      areaDescription: "Femés is a small traditional village perched in the Ajaches mountains above Playa Blanca. The area features traditional Canarian houses, rural fincas and renovated properties with stunning views. Many properties have older plumbing systems and rely on aljibes for water storage. Our proximity (based in Playa Blanca) means fast response times.",
      localChallenges: "Femés properties present rural challenges: long water supply pipes from the mains creating pressure issues; traditional stone aljibes (cisterns) with hairline cracks; limited access roads for service vehicles; and properties often empty for extended periods allowing small leaks to cause significant damage. The mountain microclimate brings more moisture than coastal areas, making dampness diagnosis more complex.",
      nearbyAreas: ["Playa Blanca", "Yaiza", "Las Breñas", "Uga"],
      services: [
        { title: "Water Leak Detection Femés", description: "Specialist leak detection for Femés village properties. Expert service for traditional houses and fincas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection Femés", description: "Underground pipe detection for Femés rural properties. Locate buried pipes before excavation.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection Femés", description: "Pool leak detection for private pools in Femés area. Complete pinpointing service.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair Femés", description: "Professional leak repair in Femés. Water pipes, aljibes and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Aljibes & cisterns guide", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Underground leak signs", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Damp walls in old houses", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Femés | Rural Properties | Canary Detect", description: "Leak detection Femés. Traditional village houses, fincas, aljibes. Local experts. Call +34 711 051 071", keywords: "leak detection Femés, water leak Femés Lanzarote, finca leak detection, rural leak detection Lanzarote" }
    },
    "las-brenas": {
      name: "Las Breñas",
      slug: "las-brenas",
      description: "Professional leak detection in Las Breñas, a quiet agricultural village near Yaiza.",
      heroText: "Las Breñas and nearby rural properties need reliable leak detection. We provide expert services for this peaceful farming community.",
      areaDescription: "Las Breñas is a small agricultural village between Yaiza and Femés, known for its traditional farming heritage. Properties include traditional village houses, rural fincas and renovated country homes. Many rely on cisterns and have long supply pipes requiring specialist detection.",
      localChallenges: "Las Breñas properties face agricultural-zone challenges: drip irrigation systems for crops and gardens with multiple small leak points; shared water supply systems between neighbouring properties; aging infrastructure with galvanised pipes prone to corrosion; and properties often used seasonally requiring inspection before and after closure periods.",
      nearbyAreas: ["Yaiza", "Femés", "Playa Blanca", "Uga"],
      services: [
        { title: "Water Leak Detection Las Breñas", description: "Expert leak detection for Las Breñas village and rural properties. Traditional houses and fincas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection Las Breñas", description: "Underground pipe detection for Las Breñas properties. Essential for irrigation and water supply systems.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection Las Breñas", description: "Pool leak detection for private pools in Las Breñas area. Professional pinpointing service.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair Las Breñas", description: "Professional leak repair in Las Breñas. Pipes, irrigation systems and underground repairs.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Lanzarote water system guide", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Signs of underground leak", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Water meter running with taps off", href: `${blogBasePath}/water-meter-running-when-taps-off` },
      ],
      seo: { title: "Leak Detection Las Breñas | Canary Detect", description: "Leak detection Las Breñas. Village houses, fincas, irrigation systems. Call +34 711 051 071", keywords: "leak detection Las Breñas, water leak Las Breñas Lanzarote, rural leak detection, finca leak Las Breñas" }
    },
    "uga": {
      name: "Uga",
      slug: "uga",
      description: "Professional leak detection services in Uga, a traditional village in Lanzarote's wine country.",
      heroText: "Uga's traditional properties and fincas need specialist leak detection. We provide expert services in this charming village near La Geria.",
      areaDescription: "Uga is a picturesque village on the edge of La Geria wine region, known for its traditional Canarian architecture and camel station. Properties include historic village houses, renovated fincas and bodegas. The area's agricultural heritage means many properties have complex irrigation and water storage systems.",
      localChallenges: "Uga properties present wine-country challenges: bodegas with refrigeration creating moisture that masks water leaks; traditional stone constructions with thick walls hiding pipes; drip irrigation for vines and gardens with multiple potential leak points; and historic buildings requiring careful, non-invasive detection methods to preserve character.",
      nearbyAreas: ["Yaiza", "Femés", "La Geria", "Tías", "Mácher"],
      services: [
        { title: "Water Leak Detection Uga", description: "Expert leak detection for Uga village properties. Traditional houses, fincas and bodegas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection Uga", description: "Underground pipe and irrigation system detection in Uga. Essential for vineyards and gardens.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection Uga", description: "Pool leak detection for private pools in Uga area. Complete survey with pinpointing.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair Uga", description: "Professional leak repair in Uga. Sympathetic repairs for traditional properties.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Traditional water systems Lanzarote", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Thermal imaging for old buildings", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
        { title: "Underground leak detection", href: `${blogBasePath}/signs-of-underground-water-leak` },
      ],
      seo: { title: "Leak Detection Uga | La Geria | Canary Detect", description: "Leak detection Uga. Traditional village, fincas, bodegas. Wine country specialists. Call +34 711 051 071", keywords: "leak detection Uga, water leak Uga Lanzarote, bodega leak detection, La Geria leak detection" }
    },
    "tahiche": {
      name: "Tahiche",
      slug: "tahiche",
      description: "Professional leak detection services in Tahiche, home to the César Manrique Foundation.",
      heroText: "Tahiche's residential properties and villas need reliable leak detection. We provide expert services in this central Lanzarote location.",
      areaDescription: "Tahiche is a residential village between Costa Teguise and Arrecife, famous as the home of César Manrique's former residence (now a foundation). The area features a mix of traditional Canarian houses and modern villas. Its central location means properties connect to main water infrastructure, though older properties may have aging pipes.",
      localChallenges: "Tahiche properties face central-island challenges: traditional houses with retrofitted plumbing creating complex pipe routes; properties on volcanic rock where excavation is difficult and expensive; modern villas with underfloor heating systems requiring thermal imaging expertise; and community water systems serving multiple properties where isolating individual leaks requires expertise.",
      nearbyAreas: ["Costa Teguise", "Arrecife", "Teguise", "Guatiza"],
      services: [
        { title: "Water Leak Detection Tahiche", description: "Expert leak detection for Tahiche properties. Traditional houses and modern villas.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Pool Leak Detection Tahiche", description: "Pool leak detection for Tahiche villas. Professional service with complete pinpointing.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Drain Detection Tahiche", description: "CCTV drain surveys for Tahiche properties. Identify blockages and pipe condition.", href: `${serviceBasePath}/drain-detection`, icon: Search },
        { title: "Leak Repair Tahiche", description: "Professional leak repair in Tahiche. Water pipes, pools and drainage systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Water meter running constantly", href: `${blogBasePath}/water-meter-running-when-taps-off` },
        { title: "Thermal imaging for leaks", href: `${blogBasePath}/thermal-imaging-leak-detection-explained` },
        { title: "Damp walls diagnosis", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Tahiche | Canary Detect", description: "Leak detection Tahiche. Residential properties, villas, traditional houses. Central Lanzarote. Call +34 711 051 071", keywords: "leak detection Tahiche, water leak Tahiche Lanzarote, villa leak Tahiche, plumber Tahiche" }
    },
    "guatiza": {
      name: "Guatiza",
      slug: "guatiza",
      description: "Professional leak detection services in Guatiza, famous for its Cactus Garden.",
      heroText: "Guatiza and surrounding agricultural areas need specialist leak detection. We provide expert services for this traditional northeast Lanzarote village.",
      areaDescription: "Guatiza is a traditional agricultural village in northeast Lanzarote, famous for its cactus plantations and the Jardín de Cactus designed by César Manrique. Properties include traditional village houses, rural fincas and renovated country homes. The area's agricultural heritage means extensive irrigation systems.",
      localChallenges: "Guatiza properties face agricultural-zone challenges: extensive cactus plantation irrigation with underground drip systems; traditional stone houses with thick walls hiding plumbing; limited development meaning older infrastructure; and properties with rainwater harvesting systems (maretas) requiring specialist inspection. The northeast location brings more humidity affecting dampness diagnosis.",
      nearbyAreas: ["Teguise", "Costa Teguise", "Arrieta", "Mala", "Tahiche"],
      services: [
        { title: "Water Leak Detection Guatiza", description: "Expert leak detection for Guatiza village and rural properties. Agricultural and residential.", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
        { title: "Underground Detection Guatiza", description: "Underground irrigation and pipe detection in Guatiza. Essential for cactus fincas and gardens.", href: `${serviceBasePath}/underground-detection`, icon: Search },
        { title: "Pool Leak Detection Guatiza", description: "Pool leak detection for private pools in Guatiza area. Professional pinpointing.", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
        { title: "Leak Repair Guatiza", description: "Professional leak repair in Guatiza. Pipes, irrigation and underground systems.", href: `${serviceBasePath}/leak-repair`, icon: Wrench }
      ],
      relatedLinks: [
        { title: "Lanzarote water systems guide", href: `${blogBasePath}/master-your-lanzarote-water-system` },
        { title: "Underground leak signs", href: `${blogBasePath}/signs-of-underground-water-leak` },
        { title: "Damp walls in old houses", href: `${blogBasePath}/damp-walls-causes-solutions` },
      ],
      seo: { title: "Leak Detection Guatiza | Canary Detect", description: "Leak detection Guatiza. Village houses, cactus fincas, irrigation systems. Call +34 711 051 071", keywords: "leak detection Guatiza, water leak Guatiza Lanzarote, cactus finca leak, irrigation leak Guatiza" }
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
