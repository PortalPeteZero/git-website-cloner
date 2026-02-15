export interface FontaneroLocation {
  slug: string;
  name: string;
  seo: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string;
  challenges: string[];
  services: string[];
  body: string;
  cta: string;
}

export const fontaneroLocations: Record<string, FontaneroLocation> = {
  arrecife: {
    slug: "arrecife",
    name: "Arrecife",
    seo: {
      title: "Fontanero en Arrecife | Canary Detect",
      description: "Fontanero profesional en Arrecife, Lanzarote. Reparaciones urgentes, calderas, detección de fugas y fontanería de piscinas. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Arrecife",
    intro:
      "Como capital de Lanzarote, Arrecife concentra una gran densidad de viviendas, edificios de apartamentos y locales comerciales. Las tuberías antiguas del casco urbano, combinadas con la presión variable del suministro municipal, generan problemas frecuentes de fontanería que requieren atención profesional inmediata.",
    challenges: [
      "Tuberías de hierro galvanizado con más de 40 años en edificios del centro que sufren corrosión interna y pérdida de caudal.",
      "Problemas de presión intermitente en zonas altas como Altavista y Argana, donde la red municipal trabaja al límite.",
      "Sistemas de desagüe obsoletos en la zona del Charco de San Ginés que se ven afectados por la cercanía al mar y la humedad salina.",
      "Calderas y termos eléctricos deteriorados por la cal del agua desalada, que reduce su eficiencia y vida útil.",
    ],
    services: [
      "Reparación urgente de tuberías rotas y fugas en viviendas y comunidades de vecinos.",
      "Sustitución de tramos de tubería corroída por materiales modernos multicapa o PPR.",
      "Instalación y mantenimiento de calderas y calentadores de agua adaptados al clima de Lanzarote.",
      "Detección acústica y por gas trazador de fugas ocultas en suelos y paredes.",
      "Desatascos profesionales con equipos de alta presión para bajantes y colectores.",
      "Renovación de colectores y válvulas de distribución en comunidades de propietarios.",
    ],
    body:
      "Nuestro equipo de fontaneros cualificados conoce a fondo la infraestructura hídrica de Arrecife. Trabajamos tanto en el casco antiguo como en las urbanizaciones más modernas de Playa del Reducto y Maneje. Utilizamos cámaras CCTV para inspeccionar el estado interno de las tuberías antes de intervenir, lo que nos permite ofrecer soluciones precisas y minimizar las obras. Todos nuestros trabajos incluyen una garantía de 2 años en materiales y mano de obra. Respondemos a emergencias en menos de 2 horas dentro del municipio de Arrecife, asegurando que los problemas de agua no se conviertan en daños mayores para su propiedad.",
    cta: "¿Necesita un fontanero urgente en Arrecife? Llámenos al 711 051 071 para una respuesta rápida.",
  },
  "playa-blanca": {
    slug: "playa-blanca",
    name: "Playa Blanca",
    seo: {
      title: "Fontanero en Playa Blanca | Canary Detect",
      description: "Fontanero en Playa Blanca, Lanzarote. Piscinas, villas, reparaciones urgentes y calderas. Garantía 2 años. Llámenos: 711 051 071.",
    },
    h1: "Fontanero en Playa Blanca",
    intro:
      "Playa Blanca, en el sur de Lanzarote, es una zona de rápido crecimiento con numerosas villas de lujo, complejos turísticos y apartamentos vacacionales. La alta rotación de inquilinos y el uso intensivo de piscinas generan una demanda constante de servicios de fontanería especializada.",
    challenges: [
      "Fugas en sistemas de piscinas privadas causadas por el movimiento térmico de las tuberías expuestas al sol intenso del sur.",
      "Roturas en tuberías de riego enterradas en jardines de villas, agravadas por el terreno volcánico y las raíces.",
      "Acumulación de cal en grifería y electrodomésticos por la dureza del agua desalada suministrada.",
      "Problemas en sistemas de agua caliente de apartamentos turísticos con uso intensivo durante temporada alta.",
    ],
    services: [
      "Fontanería integral para piscinas: reparación de skimmers, boquillas de retorno y tuberías de aspiración.",
      "Detección y reparación de fugas en sistemas de riego y jardines.",
      "Instalación de descalcificadores y filtros de agua para proteger instalaciones.",
      "Mantenimiento preventivo de fontanería para propiedades de alquiler vacacional.",
      "Sustitución de válvulas y colectores en cuartos de máquinas de piscinas.",
      "Reparación urgente de tuberías reventadas y cortes de suministro.",
    ],
    body:
      "En Playa Blanca trabajamos habitualmente en urbanizaciones como Montaña Roja, Las Coloradas y Marina Rubicón. Entendemos las necesidades específicas de los propietarios de villas con piscina y los gestores de apartamentos turísticos. Nuestros fontaneros están formados en sistemas de depuración y tratamiento de agua para piscinas, lo que nos permite ofrecer un servicio completo sin necesidad de múltiples proveedores. Realizamos inspecciones preventivas trimestrales para propiedades de alquiler, evitando sorpresas costosas durante la temporada alta. Garantizamos respuesta en el mismo día para urgencias en todo el municipio de Yaiza.",
    cta: "¿Problemas de fontanería en Playa Blanca? Contacte con nosotros: 711 051 071.",
  },
  "puerto-del-carmen": {
    slug: "puerto-del-carmen",
    name: "Puerto del Carmen",
    seo: {
      title: "Fontanero Puerto del Carmen | Canary Detect",
      description: "Fontanero en Puerto del Carmen, Lanzarote. Hoteles, apartamentos, piscinas comunitarias. Urgencias 24h. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Puerto del Carmen",
    intro:
      "Puerto del Carmen es el principal centro turístico de Lanzarote, con cientos de hoteles, apartamentos y restaurantes que dependen de un suministro de agua fiable. Los sistemas de fontanería en esta zona sufren un desgaste acelerado por el uso continuo y la salinidad ambiental.",
    challenges: [
      "Tuberías de cobre corroídas por la salinidad costera en edificios de la Avenida de las Playas.",
      "Fugas en piscinas comunitarias de grandes complejos hoteleros que pierden miles de litros semanales.",
      "Sistemas de ACS (agua caliente sanitaria) sobrecargados en establecimientos turísticos durante temporada alta.",
      "Bajantes y desagües obstruidos en edificios de apartamentos con décadas de antigüedad.",
    ],
    services: [
      "Mantenimiento de fontanería para hoteles y complejos de apartamentos.",
      "Detección de fugas en piscinas comunitarias con equipos acústicos de precisión.",
      "Renovación de redes de distribución de agua en comunidades de propietarios.",
      "Instalación y reparación de sistemas de ACS para hostelería.",
      "Desatascos industriales para restaurantes y cocinas comerciales.",
      "Reparación urgente con disponibilidad 24 horas para el sector turístico.",
    ],
    body:
      "Conocemos cada rincón de Puerto del Carmen, desde los complejos de Los Pocillos hasta las urbanizaciones de La Tiñosa. Nuestro equipo tiene amplia experiencia trabajando con comunidades de propietarios y administradores de fincas para resolver problemas de fontanería que afectan a múltiples viviendas. Utilizamos tecnología de detección no invasiva para localizar fugas sin necesidad de demoler paredes o suelos, lo que es especialmente importante en establecimientos turísticos que no pueden cerrar. Ofrecemos contratos de mantenimiento anuales para hoteles y complejos que garantizan revisiones periódicas y prioridad en urgencias.",
    cta: "¿Fontanero en Puerto del Carmen? Llame ahora: 711 051 071.",
  },
  "costa-teguise": {
    slug: "costa-teguise",
    name: "Costa Teguise",
    seo: {
      title: "Fontanero en Costa Teguise | Canary Detect",
      description: "Fontanero profesional Costa Teguise. Apartamentos, piscinas comunitarias, reparaciones urgentes. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Costa Teguise",
    intro:
      "Costa Teguise es una zona residencial y turística con numerosos complejos de apartamentos, campos de golf y piscinas comunitarias. La infraestructura hídrica de la zona, construida principalmente en los años 80 y 90, requiere actualizaciones frecuentes para mantener su funcionalidad.",
    challenges: [
      "Redes de distribución de agua de más de 30 años con juntas deterioradas en complejos de apartamentos.",
      "Fugas en sistemas de riego de campos de golf y zonas ajardinadas que desperdician agua cara.",
      "Problemas de presión en plantas altas de edificios que no cuentan con grupos de presión actualizados.",
      "Colectores de aguas residuales obsoletos que provocan atascos recurrentes en comunidades.",
    ],
    services: [
      "Renovación de redes de distribución de agua en comunidades de apartamentos.",
      "Instalación de grupos de presión para edificios con problemas de caudal.",
      "Reparación de fugas en sistemas de riego comerciales y residenciales.",
      "Sustitución de colectores y bajantes en edificios antiguos.",
      "Fontanería de piscinas comunitarias: filtros, bombas y circuitos hidráulicos.",
      "Auditorías de consumo de agua para detectar pérdidas ocultas.",
    ],
    body:
      "En Costa Teguise colaboramos regularmente con administradores de fincas y comunidades de propietarios para gestionar el mantenimiento de las instalaciones de agua. Realizamos auditorías de consumo que permiten identificar fugas ocultas comparando el volumen facturado con el uso real. Esta zona tiene una particularidad: muchos complejos comparten infraestructura de agua, lo que significa que una fuga puede afectar a múltiples propietarios. Nuestro enfoque es diagnosticar con precisión antes de actuar, utilizando cámaras de inspección y equipos de correlación acústica que nos permiten localizar el punto exacto del problema sin excavaciones innecesarias.",
    cta: "¿Necesita un fontanero en Costa Teguise? Llame al 711 051 071.",
  },
  yaiza: {
    slug: "yaiza",
    name: "Yaiza",
    seo: {
      title: "Fontanero en Yaiza | Canary Detect",
      description: "Fontanero en Yaiza, Lanzarote. Villas, fincas rurales, aljibes y sistemas tradicionales. Garantía 2 años. Llame: 711 051 071.",
    },
    h1: "Fontanero en Yaiza",
    intro:
      "El municipio de Yaiza abarca desde Playa Blanca hasta las bodegas de La Geria, incluyendo pueblos como Femés, Uga y Las Breñas. Las propiedades en esta zona van desde villas modernas de lujo hasta fincas rurales centenarias con sistemas de agua tradicionales que requieren un conocimiento especializado.",
    challenges: [
      "Aljibes y cisternas antiguas con grietas y filtraciones que reducen la capacidad de almacenamiento.",
      "Tuberías enterradas a gran profundidad en terreno volcánico, difíciles de localizar y reparar.",
      "Fincas rurales con sistemas de captación de agua de lluvia que necesitan mantenimiento regular.",
      "Villas aisladas con bombas de presión y depósitos que requieren calibración periódica.",
    ],
    services: [
      "Reparación y sellado de aljibes y depósitos de agua tradicionales.",
      "Localización de tuberías enterradas en terreno volcánico con equipos electromagnéticos.",
      "Instalación de sistemas de bombeo y presurización para fincas aisladas.",
      "Mantenimiento de sistemas de captación y almacenamiento de agua de lluvia.",
      "Fontanería de piscinas para villas de lujo en La Geria y Femés.",
      "Conexión y actualización de acometidas de agua en zonas rurales.",
    ],
    body:
      "Yaiza presenta desafíos únicos de fontanería debido a su extensión geográfica y la diversidad de sus propiedades. Nuestro equipo tiene experiencia específica trabajando con aljibes tradicionales canarios, una característica común en las fincas de esta zona. Sabemos cómo reparar y impermeabilizar estas estructuras sin comprometer su integridad arquitectónica. Para las villas modernas dispersas por el municipio, ofrecemos instalaciones completas de grupos de presión, calentadores solares y sistemas de filtración. Cubrimos todo el municipio, desde Puerto Calero hasta Las Breñas, con tiempos de respuesta garantizados.",
    cta: "¿Fontanero en el municipio de Yaiza? Contáctenos: 711 051 071.",
  },
  tias: {
    slug: "tias",
    name: "Tías",
    seo: {
      title: "Fontanero en Tías | Canary Detect",
      description: "Fontanero profesional en Tías, Lanzarote. Reparaciones, detección fugas, calderas. Zona Puerto del Carmen. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Tías",
    intro:
      "Tías es uno de los municipios más poblados de Lanzarote, englobando la zona residencial de Tías pueblo y la turística Puerto del Carmen. El crecimiento urbanístico de las últimas décadas ha creado una mezcla de infraestructuras antiguas y modernas que plantean retos específicos de fontanería.",
    challenges: [
      "Diferencias de presión significativas entre las zonas altas (Tías pueblo) y las zonas costeras (Puerto del Carmen).",
      "Tuberías de fibrocemento en barrios antiguos que necesitan sustitución urgente por materiales seguros.",
      "Problemas de condensación y humedad en viviendas de la zona alta debido a la inversión térmica.",
      "Sistemas de fontanería heterogéneos que mezclan materiales incompatibles por reformas sucesivas.",
    ],
    services: [
      "Sustitución de tuberías de fibrocemento por materiales modernos certificados.",
      "Instalación de reguladores de presión para zonas con caudal variable.",
      "Diagnóstico y reparación de problemas de humedad por condensación.",
      "Reformas integrales de baños y cocinas con fontanería certificada.",
      "Reparación de fugas en cubiertas y azoteas.",
      "Mantenimiento de depósitos de agua comunitarios.",
    ],
    body:
      "En Tías comprendemos la diferencia entre las necesidades del casco urbano y la zona costera. Las viviendas del pueblo, muchas de construcción tradicional, suelen tener tuberías de plomo o fibrocemento que deben sustituirse por razones de salud y eficiencia. Ofrecemos presupuestos detallados para renovaciones parciales o completas del sistema de fontanería. Para las propiedades más modernas, nos especializamos en optimizar el rendimiento de los sistemas existentes mediante reguladores de presión, válvulas antirretorno y aislamiento térmico de tuberías. Nuestro servicio cubre desde La Asomada hasta Mácher, con respuesta en el mismo día.",
    cta: "¿Busca un fontanero en Tías? Llame ahora: 711 051 071.",
  },
  teguise: {
    slug: "teguise",
    name: "Teguise",
    seo: {
      title: "Fontanero en Teguise | Canary Detect",
      description: "Fontanero en Teguise, Lanzarote. Casas históricas, villas rurales, Costa Teguise. Sistemas tradicionales y modernos. 711 051 071.",
    },
    h1: "Fontanero en Teguise",
    intro:
      "Teguise, la antigua capital de Lanzarote, combina un casco histórico protegido con zonas residenciales modernas y la urbanización costera de Costa Teguise. La diversidad arquitectónica del municipio exige fontaneros con experiencia tanto en sistemas tradicionales como en instalaciones contemporáneas.",
    challenges: [
      "Edificios históricos del casco antiguo con restricciones de obra que limitan las intervenciones de fontanería.",
      "Pozos y aljibes en desuso en casas rurales que pueden causar filtraciones y problemas estructurales.",
      "Suministro de agua irregular en las zonas rurales del interior del municipio.",
      "Redes de saneamiento antiguas en el pueblo que provocan retornos y malos olores.",
    ],
    services: [
      "Fontanería respetuosa con el patrimonio para edificios protegidos del casco histórico.",
      "Sellado y desactivación segura de pozos y aljibes en desuso.",
      "Instalación de depósitos de agua y grupos de presión para zonas rurales.",
      "Renovación de redes de saneamiento con técnicas de mínima excavación.",
      "Reparación de fugas en viviendas rurales dispersas por el municipio.",
      "Fontanería para nuevas construcciones en zonas de desarrollo urbanístico.",
    ],
    body:
      "El municipio de Teguise requiere un enfoque especial debido a la protección patrimonial de su casco histórico. Nuestros fontaneros están familiarizados con las normativas de intervención en edificios catalogados y saben cómo ocultar instalaciones modernas sin alterar la estética tradicional. En las zonas rurales como Guatiza, Nazaret y Los Valles, ofrecemos soluciones para propiedades aisladas que necesitan autonomía hídrica: depósitos elevados, bombas sumergibles y sistemas de presurización. También cubrimos Costa Teguise con servicios adaptados a las necesidades de sus complejos turísticos y residenciales.",
    cta: "¿Necesita un fontanero en Teguise? Contacte con nosotros: 711 051 071.",
  },
  "san-bartolome": {
    slug: "san-bartolome",
    name: "San Bartolomé",
    seo: {
      title: "Fontanero San Bartolomé | Canary Detect",
      description: "Fontanero en San Bartolomé, Lanzarote. Playa Honda, zona industrial, viviendas. Reparaciones urgentes. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en San Bartolomé",
    intro:
      "San Bartolomé ocupa una posición central en Lanzarote e incluye Playa Honda, la segunda localidad más poblada de la isla. La zona combina áreas residenciales densas, una zona industrial activa y un aeropuerto, cada una con necesidades de fontanería distintas.",
    challenges: [
      "Edificios de Playa Honda con más de 30 años y redes de fontanería que necesitan renovación completa.",
      "Naves industriales con sistemas de fontanería comercial que requieren mantenimiento especializado.",
      "Viviendas en el casco de San Bartolomé con mezcla de tuberías antiguas y reformas parciales.",
      "Problemas de drenaje en zonas llanas de Playa Honda durante episodios de lluvia intensa.",
    ],
    services: [
      "Renovación integral de fontanería en edificios residenciales de Playa Honda.",
      "Fontanería industrial para naves y locales comerciales del polígono.",
      "Reparación urgente de tuberías y averías en viviendas particulares.",
      "Instalación de sistemas de drenaje y evacuación de aguas pluviales.",
      "Mantenimiento de instalaciones hidráulicas en comunidades de vecinos.",
      "Sustitución de calderas y termos eléctricos con certificación energética.",
    ],
    body:
      "San Bartolomé y Playa Honda son zonas donde trabajamos con frecuencia, tanto en viviendas particulares como en locales comerciales de la zona industrial. La proximidad del aeropuerto y la concentración de actividad económica hacen que los problemas de fontanería necesiten solución rápida para no interrumpir la actividad diaria. En Playa Honda ofrecemos servicios de renovación para comunidades de vecinos que quieren actualizar sus instalaciones con materiales modernos y eficientes. Para la zona industrial, disponemos de equipos capaces de trabajar con tuberías de gran diámetro y sistemas de presión comercial. Nuestro almacén de repuestos nos permite resolver la mayoría de averías en una sola visita.",
    cta: "¿Fontanero en San Bartolomé o Playa Honda? Llame: 711 051 071.",
  },
  haria: {
    slug: "haria",
    name: "Haría",
    seo: {
      title: "Fontanero en Haría | Canary Detect",
      description: "Fontanero en Haría, norte de Lanzarote. Casas rurales, aljibes, sistemas de agua tradicionales. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Haría",
    intro:
      "Haría, conocida como el Valle de las Mil Palmeras, es el municipio más al norte de Lanzarote. Sus pueblos (Haría, Máguez, Ye, Arrieta, Punta Mujeres) conservan una arquitectura tradicional con sistemas de agua que han funcionado durante generaciones pero que requieren mantenimiento especializado.",
    challenges: [
      "Aljibes centenarios con filtraciones que desperdician el escaso agua de lluvia que recoge la zona norte.",
      "Suministro municipal limitado que obliga a depender de cisternas de agua transportada.",
      "Tuberías exteriores expuestas a la humedad constante del alisio que favorece la oxidación.",
      "Casas rurales rehabilitadas donde la fontanería moderna debe integrarse con estructuras antiguas.",
    ],
    services: [
      "Restauración y sellado de aljibes y tanques de agua tradicionales.",
      "Instalación de sistemas de recogida y filtración de agua de lluvia.",
      "Protección anticorrosión para tuberías expuestas en zonas húmedas.",
      "Fontanería adaptada para casas rurales rehabilitadas como vivienda o turismo rural.",
      "Instalación de bombas y depósitos elevados para garantizar presión constante.",
      "Reparación de fugas en tubería enterrada en terreno volcánico irregular.",
    ],
    body:
      "El norte de Lanzarote tiene condiciones climáticas y geológicas distintas al resto de la isla: más humedad, más vegetación y un terreno volcánico más irregular. Nuestros fontaneros conocen estas particularidades y adaptan las soluciones a cada situación. Trabajamos habitualmente con propietarios de casas rurales en Haría y Máguez que buscan modernizar sus instalaciones sin perder el carácter tradicional de sus viviendas. En Arrieta y Punta Mujeres, donde la proximidad al mar acelera la corrosión, utilizamos materiales específicamente resistentes a ambientes salinos. También ofrecemos servicio de mantenimiento de aljibes, limpieza de depósitos y revisión de sistemas de bombeo para garantizar un suministro fiable todo el año.",
    cta: "¿Necesita un fontanero en Haría o el norte de Lanzarote? Llame: 711 051 071.",
  },
  tinajo: {
    slug: "tinajo",
    name: "Tinajo",
    seo: {
      title: "Fontanero en Tinajo | Canary Detect",
      description: "Fontanero en Tinajo, Lanzarote. Fincas agrícolas, La Santa, sistemas de riego y aljibes. Garantía 2 años. 711 051 071.",
    },
    h1: "Fontanero en Tinajo",
    intro:
      "Tinajo es un municipio agrícola en el centro-oeste de Lanzarote que incluye localidades como La Santa, Mancha Blanca y Tiagua. La actividad agrícola de la zona, combinada con propiedades rurales dispersas, genera necesidades de fontanería muy específicas relacionadas con el riego, el almacenamiento de agua y la presurización.",
    challenges: [
      "Sistemas de riego agrícola con fugas subterráneas que desperdician agua en una isla donde es un recurso escaso.",
      "Propiedades rurales alejadas de la red municipal que dependen de depósitos y cisternas.",
      "Infraestructura de fontanería básica en muchas viviendas antiguas de los pueblos del interior.",
      "Exposición al viento constante que deteriora las instalaciones exteriores y las conexiones de agua.",
    ],
    services: [
      "Diseño e instalación de sistemas de riego eficientes para fincas y explotaciones agrícolas.",
      "Localización de fugas subterráneas en terrenos agrícolas con equipos especializados.",
      "Instalación de depósitos de agua y bombas de presión para propiedades aisladas.",
      "Renovación de fontanería interior en casas rurales tradicionales.",
      "Mantenimiento de aljibes y cisternas de recogida de agua.",
      "Fontanería para alojamientos de turismo rural y casas de campo rehabilitadas.",
    ],
    body:
      "Tinajo y sus alrededores requieren un fontanero que entienda las necesidades del mundo rural de Lanzarote. Muchas propiedades en esta zona no están conectadas a la red de saneamiento municipal y dependen de fosas sépticas que necesitan un diseño e instalación correctos. En La Santa trabajamos con propietarios de apartamentos y el complejo deportivo, donde la cercanía al mar exige materiales resistentes a la corrosión. Para las fincas agrícolas de la zona, ofrecemos diseño de sistemas de riego por goteo que maximizan la eficiencia del agua, un recurso especialmente valioso en Lanzarote. Nuestro conocimiento del terreno volcánico local nos permite instalar y reparar tuberías enterradas con la mínima alteración del suelo.",
    cta: "¿Busca un fontanero en Tinajo o La Santa? Llame: 711 051 071.",
  },
};

export const fontaneroLocationSlugs = Object.keys(fontaneroLocations);
