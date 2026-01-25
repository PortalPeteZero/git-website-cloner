import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import technologyHero from "@/assets/hero/technology-hero.jpg";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";
// Before & After images
import leakRepairBa1 from "@/assets/services/gallery/leak-repair-ba-1.jpg";
import leakRepairBa2 from "@/assets/services/gallery/leak-repair-ba-2.jpg";
import leakRepairBa3 from "@/assets/services/gallery/leak-repair-ba-3.jpg";
import leakRepairBa4 from "@/assets/services/gallery/leak-repair-ba-4.jpg";

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
    description: isSpanish
      ? "6 sistemas de cámaras para todos los tamaños de tuberías desde 25mm hasta 300mm. Inspeccionamos desagües, alcantarillado y tuberías subterráneas para encontrar bloqueos, daños e infiltraciones."
      : "Internal CCTV inspection allows us to see inside your pipework and visually identify faults. We carry four different camera systems to suit different pipe diameters. Flexible cameras navigate around bends to access hard-to-reach areas, while more rigid cameras travel greater distances through longer pipe runs.",
    bestFor: isSpanish ? "Inspecciones de desagües, bloqueos, daños estructurales" : "Reveals the true layout of pipework including T-junctions and hidden branches. Identifies cracks, corrosion, joint failures, and root intrusion.",
    limitations: isSpanish
      ? "El acceso puede estar limitado por tuberías estrechas, codos de 90 grados, escombros o agua estancada."
      : "Access can be limited by narrow pipes, sharp 90-degree bends, T-junctions, debris, or standing water.",
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
  
  return (
    <Layout>
      <SEOHead 
        title={t('meta.technology.title')}
        description={t('meta.technology.description')}
        keywords={t('meta.technology.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/tecnologia" : "https://canary-detect.com/technology"}
      />
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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish ? (
                <>Detección de Fugas <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Multi-Tecnología Profesional</span></>
              ) : (
                <>Professional Multi-Technology <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Leak Detection Lanzarote</span></>
              )}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish ? (
                <>
                  ¿Tiene dificultades para encontrar de dónde viene la fuga? Muchas empresas usan solo una tecnología, pero ningún método es 100% preciso. 
                  Por eso Los Cazafugas siempre confirmamos la ubicación usando 
                  al menos dos tecnologías independientes para nuestros <Link to="/es/servicios" className="underline hover:text-primary transition-colors">servicios de detección de fugas</Link>.
                </>
              ) : (
                <>
                  Struggling to find where water is leaking from? Many leak detection companies rely on just one technology, but no single method is 100% accurate. 
                  That's why The Leaky Finders always confirm a leak location using 
                  at least two independent technologies for our <Link to="/services" className="underline hover:text-primary transition-colors">leak detection services</Link>.
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

      {/* Technologies Detail */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                  
                  <p className="text-muted-foreground leading-relaxed mt-5">
                    {tech.description}
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
                      {tech.bestFor}
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
                      {tech.limitations}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Tech Approach */}
      <section className="py-12 md:py-16 bg-muted section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">{isSpanish ? "Por Qué Importa" : "Why It Matters"}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                {isSpanish ? "La Ventaja Multi-Tecnología" : "The Multi-Technology Advantage"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
