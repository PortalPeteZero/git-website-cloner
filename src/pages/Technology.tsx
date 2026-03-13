import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import technologyHero from "@/assets/hero/technology-hero.jpg?w=1920";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";
import AllServicesGrid from "@/components/internal-links/AllServicesGrid";
// Before & After images
import leakRepairBa1 from "@/assets/services/gallery/leak-repair-ba-1.jpg?w=800";
import leakRepairBa2 from "@/assets/services/gallery/leak-repair-ba-2.jpg?w=800";
import leakRepairBa3 from "@/assets/services/gallery/leak-repair-ba-3.jpg?w=800";
import leakRepairBa4 from "@/assets/services/gallery/leak-repair-ba-4.jpg?w=800";

const getTechnologies = (isSpanish: boolean) => [
  {
    name: "GASENSE",
    subtitle: isSpanish ? "Tecnología GASENSE" : "Tracer Gas Detection",
    icon: Atom,
    description: isSpanish
      ? "Presurizamos las tuberías con una mezcla segura de nitrógeno/hidrógeno. El gas escapa en el punto de la fuga y sube a través de cualquier material - hormigón, baldosas, tierra - donde nuestros sensores lo detectan con precisión milimétrica."
      : "GASENSE is a tracer gas detection system. We pressurise the pipe with a safe, inert gas mixture containing nitrogen and hydrogen. Where a leak exists, this gas escapes through the fault and rises to the surface. Our highly sensitive sensors detect the gas at ground level, allowing us to pinpoint the location of the leak without excavation.",
    bestFor: isSpanish ? "Ideal para: Fugas subterráneas, tuberías ocultas, tuberías de piscinas" : "Particularly effective for locating leaks in buried pipework.",
    limitations: isSpanish
      ? "El gas viaja por el camino de menor resistencia. Si hay terreno más blando cerca, la lectura más alta puede aparecer allí."
      : "Gas travels through the path of least resistance. If a leak is underneath concrete but there is softer ground nearby, the highest reading may appear in the softer area. We account for this when interpreting results.",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: isSpanish ? "Geófono" : "Geophone",
    subtitle: isSpanish ? "Escucha Acústica" : "Acoustic Listening Device",
    icon: AudioLines,
    description: isSpanish
      ? "Detectamos el sonido del agua escapando de tuberías presurizadas. Nuestro equipo amplifica los sonidos de fugas miles de veces, permitiéndonos localizar fugas a través de hormigón, tierra y otros materiales."
      : "A geophone is an acoustic listening device that detects the sound of water escaping from a pressurised pipe. When water leaks from a pipe under pressure, it creates a distinctive noise as it passes through the fault. By placing the geophone at various points along the pipe route and listening for this sound, we can identify the loudest point, which indicates the leak location.",
    bestFor: isSpanish ? "Ideal para: Fugas en red principal, sistemas presurizados" : "Works best on hard surfaces where sound travels clearly.",
    limitations: isSpanish
      ? "El ruido de fondo del tráfico o maquinaria puede interferir. El sonido también puede viajar a lo largo de la tubería."
      : "Background noise from traffic, machinery, or other water sources can interfere. Sound can also travel along the pipe, meaning the loudest surface point may not be directly above the leak.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: isSpanish ? "Imagen Térmica Infrarroja" : "Infrared Thermal Imaging",
    subtitle: isSpanish ? "Detección de Temperatura" : "Temperature Detection",
    icon: Thermometer,
    description: isSpanish
      ? "Identificamos diferencias de temperatura causadas por agua fugándose. Las fugas de agua fría o de calefacción se muestran claramente en imágenes térmicas, revelando humedad oculta detrás de paredes y bajo suelos."
      : "Infrared thermal imaging detects temperature differences on surfaces. When water leaks from a pipe, it often causes localised cooling or heating depending on the water temperature and surroundings. Our thermal camera identifies these temperature anomalies, revealing areas of moisture that are not visible to the naked eye.",
    bestFor: isSpanish ? "Ideal para: Fugas en paredes, suelo radiante, mapeo de humedad" : "Excellent for detecting leaks behind walls, under floors, and where water has spread from the original leak point.",
    limitations: isSpanish
      ? "Otras fuentes de calor como exposición solar o equipos eléctricos pueden afectar las lecturas."
      : "Other heat sources such as sun exposure, electrical equipment, or recently used hot water can affect readings and must be accounted for.",
    color: "from-red-500 to-orange-600",
  },
  {
    name: isSpanish ? "Micrófono de Tubería" : "Pipe Mic",
    subtitle: isSpanish ? "Micrófono de Contacto Interno" : "Internal Contact Microphone",
    icon: Mic,
    description: isSpanish
      ? "Insertados directamente en las tuberías para escuchar desde el interior. Proporciona localización con precisión centimétrica de fugas en tramos de tuberías accesibles."
      : "A pipe mic is a contact microphone that we insert directly into the pipework. It amplifies the sound of water flowing through the pipe and any turbulence caused by a leak. Our equipment can locate the position of the microphone from above ground to centimetre accuracy, making this the most precise method available for pinpointing a leak.",
    bestFor: isSpanish ? "El método más preciso - precisión centimétrica" : "The most precise method available - centimetre accuracy for pinpointing leaks.",
    limitations: isSpanish
      ? "Necesitamos acceso claro a la tubería. Puede bloquearse por codos de 90 grados o escombros."
      : "We need clear access into the pipe. This can be blocked by 90-degree bends, debris, or pipework that is too narrow for the equipment.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: isSpanish ? "Inspección CCTV Interna" : "Internal CCTV Inspection",
    subtitle: isSpanish ? "Inspección Visual de Tuberías" : "Visual Pipe Inspection",
    icon: Video,
    color: "from-amber-500 to-yellow-600",
  },
];

const getBeforeAfterImages = (isSpanish: boolean) => [
  { src: leakRepairBa1, caption: isSpanish ? "Precisión milimétrica significa excavación mínima" : "Pinpoint accuracy means minimal excavation" },
  { src: leakRepairBa2, caption: isSpanish ? "Área de reparación pequeña - solo 2 baldosas levantadas" : "Small repair area - just 2 tiles lifted" },
  { src: leakRepairBa3, caption: isSpanish ? "Localización precisa ahorra tiempo y dinero" : "Precise location saves time and money" },
  { src: leakRepairBa4, caption: isSpanish ? "Reparación dirigida con mínima interrupción" : "Targeted repair with minimal disruption" },
];

const Technology = () => {
  const { t, isSpanish } = useTranslation();
  const technologies = getTechnologies(isSpanish);
  const beforeAfterImages = getBeforeAfterImages(isSpanish);
  
  // CCTV description and bestFor with internal links - rendered separately
  const cctvDescription = isSpanish
    ? <>6 sistemas de cámaras para todos los tamaños de tuberías desde 25mm hasta 300mm. Inspeccionamos desagües, alcantarillado y tuberías subterráneas para encontrar bloqueos, daños e infiltraciones, similar al equipo especializado usado en nuestro <Link to="/es/servicios/deteccion-desagues" className="text-primary underline hover:text-primary/80 transition-colors">servicio dedicado de inspección CCTV de desagües y tuberías en Lanzarote</Link>.</>
    : <>Internal CCTV inspection allows us to see inside your pipework and visually identify faults. We carry four different camera systems to suit different pipe diameters, similar to the specialised equipment used in our dedicated <Link to="/services/drain-detection" className="text-primary underline hover:text-primary/80 transition-colors">drain and pipe CCTV survey service in Lanzarote</Link>. Flexible cameras navigate around bends to access hard-to-reach areas, while more rigid cameras travel greater distances through longer pipe runs.</>;
  
  const cctvBestFor = isSpanish
    ? <>Revela el diseño real de las tuberías incluyendo uniones en T y ramificaciones ocultas. Identifica grietas, corrosión, fallos en juntas e intrusión de raíces, y proporciona el nivel de detalle necesario para <Link to="/es/servicios/inspeccion-tuberias" className="text-primary underline hover:text-primary/80 transition-colors">inspecciones completas CCTV de desagües y tuberías</Link>.</>
    : <>Reveals the true layout of pipework including T-junctions and hidden branches. Identifies cracks, corrosion, joint failures, and root intrusion, and provides the level of detail needed for comprehensive <Link to="/services/pipe-inspection" className="text-primary underline hover:text-primary/80 transition-colors">CCTV drain and pipe inspection surveys</Link>.</>;

  const cctvLimitations = isSpanish
    ? "El acceso puede estar limitado por tuberías estrechas, codos de 90 grados, escombros o agua estancada."
    : "Access can be limited by narrow pipes, sharp 90-degree bends, T-junctions, debris, or standing water.";

  return (
    <Layout>
      <SEOHead 
        title={t('meta.technology.title')}
        description={t('meta.technology.description')}
        keywords={t('meta.technology.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/tecnologia" : "https://canary-detect.com/technology"}
      />

      {/* SR-only H1 for SEO */}
      <h1 className="sr-only">
        {isSpanish ? "Detección de Fugas Lanzarote" : "Leak Detection Lanzarote"}
      </h1>

      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={technologyHero} alt={isSpanish ? "Equipo de detección de fugas multi-tecnología Lanzarote" : "Multi-technology leak detection equipment Lanzarote"} className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {isSpanish ? "Tecnología de Los Cazafugas" : "The Leaky Finders' Technology"}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish ? (
                <>Detección de Fugas de Agua <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Multi-Tecnología Profesional</span></>
              ) : (
                <>Professional Multi-Technology <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Water Leak Detection Lanzarote</span></>
              )}
            </h2>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish ? (
                <>
                  ¿Busca detección de fugas experta en Lanzarote? Canary Detect se especializa en encontrar y reparar fugas en toda la isla.
                </>
              ) : (
                <>
                  Looking for expert leak detection in Lanzarote? Canary Detect specializes in finding and repairing leaks across the island.
                </>
              )}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Equipment Value */}
      <section className="py-12 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <Sparkles className="h-10 w-10 text-white/80" />
            <div>
              <p className="text-primary-foreground text-lg md:text-xl font-medium">
                {isSpanish ? "Canary Detect dispone de más de" : "Canary Detect carries over"}{" "}
                <span className="font-heading font-bold text-2xl md:text-3xl">€80,000</span>{" "}
                {isSpanish ? "en equipos de detección de fugas de última generación" : "worth of the latest leak detection equipment"}
              </p>
              <p className="text-primary-foreground/80 mt-2">
                {isSpanish 
                  ? "Ofreciendo precisión centimétrica y manteniendo los costes de reparación al mínimo"
                  : "Delivering centimetre accuracy and keeping repair costs to an absolute minimum"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction to Leak Detection */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {isSpanish ? "Introducción a la Detección de Fugas" : "Introduction to Leak Detection"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isSpanish
                ? "Esta página es para propietarios y empresas en Lanzarote que buscan servicios fiables y no invasivos de detección y reparación de fugas para proteger sus propiedades y conservar agua."
                : "This page is for homeowners and businesses in Lanzarote seeking reliable, non-invasive leak detection and repair services to protect their properties and conserve water."}
            </p>

            <h3 className="font-heading text-2xl font-bold mb-3">
              {isSpanish ? "Por Qué Importa la Detección Temprana de Fugas" : "Why Early Leak Detection Matters"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isSpanish
                ? "La detección de fugas de agua es un servicio esencial para propietarios y empresas en Lanzarote y las Islas Canarias, ayudando a identificar y resolver fugas antes de que se conviertan en reparaciones costosas o daños significativos a la propiedad. La detección de fugas es especialmente crítica en Lanzarote debido a la escasez de agua y la necesidad de proteger valiosas inversiones inmobiliarias. Al detectar fugas temprano, ayudamos a nuestros clientes a ahorrar dinero, reducir costes de reparación y proteger sus propiedades de mayores interrupciones."
                : "Water leak detection is an essential service for homeowners and businesses across Lanzarote and the Canary Islands, helping to identify and resolve leaks before they escalate into costly repairs or significant property damage. Leak detection is especially critical in Lanzarote due to water scarcity and the need to protect valuable property investments. By detecting leaks early, we help our clients save money, reduce repair costs, and protect their properties from further disruption."}
            </p>

            <h3 className="font-heading text-2xl font-bold mb-3">
              {isSpanish ? "Nuestro Enfoque de Detección de Fugas" : "Our Approach to Leak Detection"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isSpanish
                ? "En Canary Detect, también conocidos como Los Cazafugas, nuestro equipo experto se especializa en localizar fugas en piscinas, sistemas de agua y tuberías subterráneas, utilizando tecnología avanzada para garantizar resultados rápidos y precisos. Canary Detect y Leakbusters son servicios locales especializados de habla inglesa que ofrecen servicios de detección y reparación de fugas en Lanzarote."
                : "At Canary Detect, also known as The Leaky Finders, our expert team specializes in pinpointing leaks in pools, water systems, and underground pipes, using advanced technology to ensure fast, accurate results. Canary Detect and Leakbusters are specialized, English-speaking local services offering leak detection and repair services in Lanzarote."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isSpanish
                ? "Nuestra empresa ha construido una reputación de excelencia en detección y reparación de fugas, con más de 40 años de experiencia combinada y una tasa de éxito comprobada del 99%. Tratamos cada trabajo de detección de fugas con un enfoque profesional y dedicado, enfatizando un servicio cuidadoso y exhaustivo para garantizar la satisfacción del cliente y la precisión. Canary Detect ofrece una garantía sin riesgo con nuestra política 'Sin Encontrar, Sin Pagar'. Entendemos que cada propiedad es única y cada fuga presenta sus propios desafíos. Por eso utilizamos una combinación de métodos no invasivos, como dispositivos de escucha acústica e imagen térmica, para encontrar fugas sin daños innecesarios a su villa o local comercial. Nuestro enfoque significa menos conjeturas, mínima interrupción y soluciones más efectivas para los problemas de su sistema de agua."
                : "Our company has built a reputation for excellence in leak detection and repair, with over 40 years of combined experience and a proven 99% success rate. We treat each leak detection job with a professional and dedicated approach, emphasizing careful and thorough service to ensure customer satisfaction and accuracy. Canary Detect offers a risk-free guarantee with a 'No Find, No Fee' policy. We understand that every property is unique, and every leak presents its own challenges. That's why we use a combination of non-invasive methods, such as acoustic listening devices and thermal imaging, to find leaks without unnecessary damage to your villa or business premises. Our approach means less guesswork, minimal disruption, and more effective solutions for your water system problems."}
            </p>

            <h3 className="font-heading text-2xl font-bold mb-3">
              {isSpanish ? "Compromiso con el Servicio al Cliente" : "Customer Service Commitment"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isSpanish
                ? "En Canary Detect, nos enorgullecemos de ofrecer un servicio al cliente de primera junto con experiencia de vanguardia. Nuestro equipo trata cada trabajo con cuidado y atención al detalle, asegurando que las grietas, fugas y otros problemas se reparen rápida y eficientemente. Los comentarios positivos y testimonios de nuestros clientes reflejan nuestro compromiso de proporcionar respuestas, apoyo y tranquilidad durante todo el proceso."
                : "At Canary Detect, we pride ourselves on delivering good, old-fashioned customer service alongside cutting-edge expertise. Our team treats every job with care and attention to detail, ensuring that cracks, leaks, and other issues are repaired quickly and efficiently. The positive comments and testimonials from our clients reflect our commitment to providing answers, support, and peace of mind throughout the process."}
            </p>

            <h3 className="font-heading text-2xl font-bold mb-3">
              {isSpanish ? "Inspecciones Gratuitas y Soporte" : "Free Surveys and Support"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isSpanish
                ? "Ya sea que esté lidiando con una piscina con fugas, grietas ocultas en su sistema de agua o aumentos inexplicables en su factura de agua, nuestros expertos están aquí para ayudar. Ofrecemos inspecciones gratuitas para evaluar su propiedad, proporcionar recomendaciones claras y trabajar con usted para encontrar la mejor solución, ahorrándole tiempo, dinero y estrés. Si tiene preguntas o quiere saber más sobre cómo podemos ayudarle, no dude en ponerse en contacto con nuestro amable equipo. Deje que Canary Detect llene los vacíos en la protección de su propiedad y asegure que su hogar o negocio se mantenga seguro, seco y sin preocupaciones."
                : "Whether you're dealing with a leaky pool, hidden cracks in your water system, or unexplained increases in your water bill, our experts are here to help. We offer free surveys to assess your property, provide clear recommendations, and work with you to find the best solution, saving you time, money, and stress. If you have questions or want to learn more about how we can help, don't hesitate to get in touch with our friendly team. Let Canary Detect fill the gaps in your property's protection and ensure your home or business stays safe, dry, and worry-free."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common Leak Problems */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {isSpanish ? "Problemas Comunes de Fugas" : "Common Leak Problems"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {isSpanish
                ? "Vivir en Lanzarote y las Islas Canarias significa disfrutar de un clima hermoso y propiedades impresionantes, pero también trae desafíos únicos en lo que respecta a fugas de agua. En Canary Detect, nuestro equipo de expertos, conocidos como Los Cazafugas, que han visto de primera mano cómo incluso una pequeña fuga puede convertirse rápidamente en un gran problema, generando altos costes de reparación y pérdida innecesaria de agua."
                : "Living in Lanzarote and the Canary Islands means enjoying beautiful weather and stunning properties, but it also brings unique challenges when it comes to water leaks. At Canary Detect, our team of experts, known as The Leaky Finders, has seen firsthand how even a small leak can quickly turn into a big problem, leading to high repair costs and unnecessary water loss."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isSpanish ? "Algunos de los problemas de fugas más comunes que encontramos incluyen:" : "Some of the most common leak problems we encounter include:"}
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Fugas en Piscinas" : "Pool Leaks"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isSpanish
                    ? "Las grietas en las estructuras de piscinas o las tuberías defectuosas pueden hacer que el agua se escape, dificultando el mantenimiento de su piscina y aumentando sus facturas de agua. La detección temprana de fugas de agua es crucial para prevenir daños mayores y reparaciones costosas."
                    : "Cracks in pool structures or faulty plumbing can cause water to escape, making your pool difficult to maintain and driving up your water bills. Early water leak detection is crucial to prevent further damage and costly repairs."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Fugas en Tuberías Subterráneas" : "Underground Pipe Leaks"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isSpanish
                    ? "Ocultas bajo jardines, caminos de entrada o patios, estas fugas pueden pasar desapercibidas durante semanas o meses. A menudo resultan en manchas de humedad, hundimiento o aumentos inexplicables en el consumo de agua, problemas que pueden ser caros de arreglar si no se detectan a tiempo."
                    : "Hidden beneath gardens, driveways, or patios, these leaks can go unnoticed for weeks or months. They often result in damp patches, subsidence, or unexplained increases in water usage, issues that can be expensive to fix if not caught early."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Fugas en Villas y Casas Vacacionales" : "Leaks in Villas and Holiday Homes"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isSpanish
                    ? "Las propiedades en Lanzarote a menudo quedan desocupadas durante largos períodos, lo que facilita que las fugas se desarrollen sin ser detectadas. Esto puede causar daños estructurales, moho y mayores costes de reparación cuando finalmente se descubre el problema."
                    : "Properties in Lanzarote are often left unoccupied for long periods, making it easy for leaks to develop unnoticed. This can lead to structural damage, mold, and higher repair costs when the problem is finally discovered."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Fugas en el Sistema" : "System Leaks"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isSpanish
                    ? "Ya sea una junta defectuosa, una tubería corroída o una grieta oculta en su sistema de agua, estas fugas pueden interrumpir su rutina diaria y causar daños significativos a la propiedad si no se abordan rápidamente."
                    : "Whether it's a faulty joint, corroded pipe, or a hidden crack in your water system, these leaks can disrupt your daily routine and cause significant property damage if not addressed promptly."}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {isSpanish
                ? "Nuestros expertos en Canary Detect utilizan métodos avanzados de detección de fugas para encontrar y solucionar estos problemas rápidamente, minimizando las interrupciones y ahorrándole dinero. Al confiar en nuestro equipo experimentado, puede proteger su propiedad, evitar costes de reparación innecesarios y asegurar que su sistema de agua funcione correctamente. Si sospecha de una fuga o quiere verificar su propiedad en busca de problemas ocultos, póngase en contacto con Canary Detect, la empresa de detección de fugas de confianza en Lanzarote y las Islas Canarias."
                : "Our experts at Canary Detect use advanced leak detection methods to find and fix these problems quickly, minimizing disruption and saving you money. By trusting our experienced team, you can protect your property, avoid unnecessary repair costs, and ensure your water system is running smoothly. If you suspect a leak or want to check your property for hidden issues, get in touch with Canary Detect, the trusted leak detection company in Lanzarote and the Canary Islands."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {isSpanish ? "Nuestros Métodos de Detección" : "Our Detection Methods"}
            </h2>
            <p className="text-muted-foreground">
              {isSpanish 
                ? "Cada tecnología tiene fortalezas únicas. Combinando múltiples métodos, logramos resultados que ninguna tecnología podría ofrecer por sí sola."
                : "Each technology has unique strengths. By combining multiple methods, we achieve results that no single technology could deliver alone."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const isCCTV = tech.name === (isSpanish ? "Inspección CCTV Interna" : "Internal CCTV Inspection");
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group bg-card border-2 border-border hover:border-primary/30 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Header with Icon */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-5">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <tech.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </h3>
                        <p className="text-primary text-sm font-semibold uppercase tracking-wide mt-1">
                          {tech.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mt-5 max-w-none">
                      {isCCTV ? cctvDescription : tech.description}
                    </p>
                  </div>

                  {/* Best For & Limitations */}
                  <div className="grid sm:grid-cols-2 gap-4 p-8 pt-0">
                    <div className="bg-green-500/5 border-l-4 border-green-500 rounded-r-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-heading font-bold text-xs uppercase tracking-wide text-green-700">
                          {isSpanish ? "Ideal Para" : "Best For"}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {isCCTV ? cctvBestFor : tech.bestFor}
                      </p>
                    </div>
                    
                    <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        <span className="font-heading font-bold text-xs uppercase tracking-wide text-amber-700">
                          {isSpanish ? "Limitaciones" : "Limitations"}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {isCCTV ? cctvLimitations : tech.limitations}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-Tech Approach */}
      <section className="py-12 md:py-16 bg-muted section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium">{isSpanish ? "Por Qué Importa" : "Why It Matters"}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                {isSpanish ? "La Ventaja Multi-Tecnología" : "The Multi-Technology Advantage"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
                {isSpanish 
                  ? "Cada fuga presenta desafíos únicos. Las condiciones del terreno, materiales de tuberías, ruido de fondo y construcción de la propiedad afectan qué método funciona mejor. Usando múltiples tecnologías, podemos:"
                  : "Every leak presents unique challenges. Ground conditions, pipe materials, background noise, and property construction all affect which detection method works best. By using multiple technologies, we can:"}
              </p>
              <div className="space-y-4">
                {(isSpanish ? [
                  "Confirmar hallazgos con verificación independiente",
                  "Superar limitaciones de métodos individuales",
                  "Lograr precisión centimétrica en la mayoría de casos",
                  "Proporcionar confianza en nuestros hallazgos",
                  "Minimizar el tamaño y coste de reparaciones",
                  "Reducir las molestias a su propiedad",
                ] : [
                  "Confirm findings with independent verification",
                  "Overcome limitations of individual methods",
                  "Achieve centimetre accuracy in most cases",
                  "Provide confidence in our findings",
                  "Minimise the size and cost of repairs",
                  "Reduce disruption to your property",
                ]).map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-heading font-bold text-xl mb-6 text-center">
                {isSpanish ? "Nuestra Garantía" : "Our Guarantee"}
              </h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <p className="font-heading font-bold text-2xl text-primary mb-2">
                    {isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee"}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {isSpanish 
                      ? "Si confirmamos que tiene una fuga pero no podemos localizarla, no hay cargo. Esto nunca ha sucedido hasta ahora."
                      : "If we confirm you have a leak but cannot locate it, there is no charge. This has never happened so far."}
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <p className="font-heading font-bold text-xl mb-2">{isSpanish ? "Política de Precio Fijo" : "Fixed Fee Policy"}</p>
                  <p className="text-muted-foreground text-sm">
                    {isSpanish 
                      ? "No cobramos extra si la inspección toma más tiempo del esperado. Estamos comprometidos a completar el trabajo."
                      : "We don't charge extra if the survey takes longer than expected. We're committed to completing the job."}
                  </p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <p className="font-heading font-bold text-xl mb-2">{isSpanish ? "Informes para Seguros" : "Insurance Reports"}</p>
                  <p className="text-muted-foreground text-sm">
                    {isSpanish 
                      ? "Cada inspección incluye un informe profesional detallado que puede usarse para su compañía de seguros."
                      : "Every survey includes a detailed professional report that can be used for your insurance company."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Before & After Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                {isSpanish ? "Prueba: Precisión Milimétrica = Reparaciones Mínimas" : "Proof: Pinpoint Accuracy = Minimal Repairs"}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isSpanish 
                  ? "Cuando combinamos múltiples tecnologías de detección, localizamos fugas al centímetro. Esto significa excavaciones más pequeñas, menores costes de reparación y menos molestias a su propiedad."
                  : "When we combine multiple detection technologies, we pinpoint leaks to the centimetre. This means smaller excavations, lower repair costs, and less disruption to your property."}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beforeAfterImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 border-2 border-border group-hover:border-primary/30 transition-colors">
                    <img 
                      src={img.src} 
                      alt={isSpanish ? `Antes y después reparación fuga ${index + 1} - ${img.caption}` : `Before and after leak repair ${index + 1} - ${img.caption}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-medium">
                    {img.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's In Your Report */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium">
              {isSpanish ? "Informes Profesionales" : "Professional Reports"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {isSpanish ? "Qué Incluye Su Informe" : "What's Included in Your Report"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isSpanish
                ? "Cada inspección incluye un informe fotográfico profesional detallado, adecuado para reclamaciones de seguros, sin coste adicional."
                : "Every survey includes a detailed professional photographic report, suitable for insurance claims, at no extra cost."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {(isSpanish ? [
                "Documentación fotográfica completa de todos los hallazgos",
                "Imágenes térmicas con anotaciones de temperatura",
                "Diagrama de localización de la fuga con medidas precisas",
                "Datos de pruebas de presión y lecturas acústicas",
                "Recomendaciones de reparación con opciones",
                "Estimación de costes de reparación orientativa",
                "Resumen ejecutivo para compañías de seguros",
                "Vídeo CCTV de inspecciones de desagües (cuando aplique)"
              ] : [
                "Full photographic documentation of all findings",
                "Annotated thermal images with temperature readings",
                "Leak location diagram with precise measurements",
                "Pressure test data and acoustic readings",
                "Repair recommendations with options",
                "Indicative repair cost estimates",
                "Executive summary for insurance companies",
                "CCTV video of drain inspections (where applicable)"
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid - Internal Links */}
      <AllServicesGrid isSpanish={isSpanish} />

      {!isSpanish && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Leak Detection Technology in Lanzarote: Why It Makes the Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Finding a water leak in Lanzarote is rarely straightforward. Pipes run under concrete terraces, through tiled walls, and deep beneath gardens. Many are decades old and made from materials that behave differently under pressure. Without the right equipment, a leak investigation becomes guesswork, and guesswork means unnecessary destruction of floors, walls, and landscaping before the actual fault is even found. Specialist leak detection technology changes that entirely.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                The Right Technology for Every Situation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                No single piece of equipment can find every type of leak. A thermal camera is highly effective at detecting a hot water pipe leaking inside a wall, but it cannot locate a buried supply pipe leaking under a concrete path. Tracer gas can pinpoint a leak three metres underground, but it will not show the internal condition of a corroded drain pipe. The reason Canary Detect carries over &euro;80,000 worth of equipment is that every situation demands a different approach, and the team needs the full toolkit to match the method to the problem.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Ground-Penetrating Radar for Underground Pipe Mapping
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ground-penetrating radar (GPR) sends electromagnetic pulses into the ground and interprets the reflections to build a subsurface picture. In Lanzarote, this is particularly useful for mapping the route of plastic and non-metallic pipes, which cannot be traced with a standard electromagnetic locator. Before any underground investigation begins, understanding where the pipes actually run is essential. Many properties here were built with no detailed as-built drawings, meaning the pipe routes are genuinely unknown. GPR gives our technicians a map before any excavation or detection work starts.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Acoustic Correlators for Precise Pipe Leak Location
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                An acoustic correlator is a step beyond a standard geophone listening device. Two sensors are placed at different points along the pipe, and the correlator analyses the time difference in the leak noise arriving at each sensor. From this, it calculates the mathematical position of the leak along the pipe, typically to within a few centimetres, even when the pipe is buried under a metre of concrete. For longer pipe runs across gardens, driveways, and communal areas, correlation is the most reliable method available for achieving the kind of precision that keeps excavation work small and targeted.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Tracer Gas Detection: Finding Leaks Without Excavation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tracer gas detection involves pressurising the suspected pipe with a safe mixture of nitrogen and hydrogen gas. This mixture is non-toxic, non-flammable, and lighter than air. Where a leak exists, the gas escapes through the same fault that water is escaping through and rises to the surface. A sensitive probe detects the gas at ground level, pinpointing the leak location without any excavation at all. This is our most commonly used method for buried pipe leaks across Lanzarote, particularly for the underground supply connections that run from the street meter to the property boundary.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Thermal Imaging for Concealed Leaks in Walls and Floors
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our thermal imaging cameras detect temperature differences as small as 0.1 degrees Celsius across a surface. A leaking hot water pipe behind a tiled wall will cool the tiles around the fault point in a characteristic pattern that is invisible to the human eye but clearly visible to the camera. Similarly, cold water leaking beneath a heated floor creates a cold patch that shows up immediately on the thermal image. Thermal imaging is fast, non-invasive, and provides visual evidence that can be photographed and included in insurance reports.
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 mt-10">
                Why Lanzarote Properties Need Specialist Detection Technology
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lanzarote presents a specific set of conditions that make leak detection more complex than on the mainland and make accurate technology more important.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Desalinated Water and Pipe Deterioration
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The water supply across the Canary Islands comes from desalination plants. Desalinated water has a different mineral profile to mainland European water, and over years it accelerates corrosion inside older metal pipes. Copper and galvanised iron installations that have been carrying desalinated water for twenty or thirty years are frequently in a much worse internal condition than their external appearance suggests. Leak detection technology helps assess this hidden deterioration, not just the active leak.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Older Build Quality and Hidden Pipework
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Properties built in Lanzarote during the 1970s, 1980s, and 1990s were often constructed without detailed plumbing records. Pipes run in unexpected directions, at unexpected depths, through walls that were later tiled over or altered during renovation. Detection technology allows us to find where pipes actually are before any invasive work begins and to locate leaks within those pipes without reference to plans that often do not exist.
              </p>

              <h3 className="font-heading text-2xl font-bold mb-3">
                Holiday Homes and Long-Term Vacancy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A significant proportion of Lanzarote properties are holiday homes or investment properties that may be unoccupied for months at a time. A slow underground pipe leak during a period of vacancy can result in saturated ground, damage to foundations, and subsidence that is not discovered until the owner returns. Our technology allows us to identify and quantify active leaks quickly, even in properties where the pipework has not been monitored for some time.
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 mt-10">
                How We Combine Technologies on a Single Survey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                On most surveys, we use at least two or three technologies together. A typical underground pipe investigation starts with pressure testing to confirm a leak exists and measure its severity. We then use electromagnetic or GPR pipe locating to trace the route of the pipe. Tracer gas or acoustic correlation then narrows the location to a precise point. Where appropriate, a thermal camera checks any above-ground sections. Each technology cross-checks the others, which is why our success rate is as high as it is. A single sensor reading can be ambiguous. Two or three readings from different technologies pointing to the same spot is confirmation.
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 mt-10">
                Technology and Cost: Why Investing in Detection Saves Money
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A professional leak detection survey using advanced technology costs a fraction of what unnecessary excavation costs. A contractor who opens up a terrace looking for a leak without prior detection work might lift twenty square metres of tiles, dig through concrete, and still not find the fault. A Canary Detect survey that uses tracer gas and acoustic correlation to pinpoint the leak to within ten centimetres means the repair contractor lifts one tile, digs one small hole, and fixes the pipe. The detection fee is recovered many times over in reduced repair costs, and the property suffers far less collateral damage in the process.
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 mt-10">
                Frequently Asked Questions: Leak Detection Technology Lanzarote
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    What detection technology does Canary Detect use?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We carry tracer gas detection equipment (GASENSE), acoustic geophones and correlators, infrared thermal imaging cameras, internal pipe microphones, ground-penetrating radar, electromagnetic pipe locators, and full CCTV camera systems for pipe inspection. Each tool is selected based on the specific conditions at your property.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    Is leak detection technology safe to use around my family and pets?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. The tracer gas we use is a non-toxic nitrogen and hydrogen mixture. Thermal cameras and acoustic sensors are entirely passive. Ground-penetrating radar uses very low-power electromagnetic pulses that are safe in all domestic environments. None of our detection methods require chemicals, high-voltage equipment, or any procedure that poses a risk to occupants.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    How accurate is your leak detection equipment?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In most situations, we can locate a leak to within ten centimetres using acoustic correlation combined with tracer gas. For leaks inside walls, thermal imaging typically narrows the fault area to within twenty to thirty centimetres. Our pipe microphone technology can achieve centimetre accuracy on accessible pipe runs.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    Can your technology find leaks under reinforced concrete?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. Tracer gas rises through concrete, tarmac, sand, soil, and most surface materials. Acoustic correlation works through concrete slabs as long as the pipe carries sufficient water pressure. These methods are specifically designed for situations where the pipe is inaccessible without excavation.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    Do I need to be present during the survey?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Someone does need to provide access to the property and the water meter. Beyond that, you are welcome to observe the survey or leave our team to work independently. Many of our clients in Lanzarote are property owners who are not on the island at the time, and surveys are often arranged through property managers or keyholders.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    What if your technology cannot find the leak?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our No Find, No Fee policy applies. If we confirm that an active leak exists but cannot precisely locate it using our full range of equipment, you pay nothing for the survey. In practice, this has never happened, but the guarantee is real and unconditional.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    How long does a leak detection survey take in Lanzarote?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most residential surveys take between two and four hours. A straightforward pool leak test can be completed in under two hours. A complex underground investigation across a large property with multiple pipe zones may take a full day. We give you a realistic time estimate when you book, and we never charge extra if the survey takes longer than expected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {isSpanish ? "¿Listo para Los Cazafugas?" : "Ready for The Leaky Finders?"}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              {isSpanish ? (
                <>Contáctenos hoy para una consulta gratuita. Nuestro enfoque multi-tecnología significa que encontraremos su fuga con confianza. <Link to="/es/casos-de-exito" className="underline hover:text-white transition-colors">Vea nuestros casos de éxito</Link> para ejemplos reales.</>
              ) : (
                <>Contact us today for a free consultation. Our multi-technology approach means we'll find your leak with confidence. <Link to="/case-studies" className="underline hover:text-white transition-colors">See our case studies</Link> for real examples.</>
              )}
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>{isSpanish ? "Presupuesto Gratis" : "Get a Free Quote"}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
