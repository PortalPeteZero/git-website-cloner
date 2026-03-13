import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg?w=1200";
import aboutHero from "@/assets/hero/about-hero.jpg?w=1920";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";
import AllServicesGrid from "@/components/internal-links/AllServicesGrid";

const About = () => {
  const { t, isSpanish } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={t('meta.about.title')}
        description={t('meta.about.description')}
        keywords={t('meta.about.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/sobre-nosotros" : "https://canary-detect.com/about"}
      />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt={isSpanish ? "Equipo de detección de fugas Canary Detect Lanzarote" : "Canary Detect leak detection team Lanzarote"} className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
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
              {isSpanish ? "Sobre Nosotros" : "About Us"}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {isSpanish ? (
                <>Detección de Fugas <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Lanzarote</span></>
              ) : (
                <>Leak Detection <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Lanzarote</span></>
              )}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish 
                ? "Canary Detect y Los Cazafugas ofrecen servicios profesionales de detección de fugas para todo tipo de propiedades en Lanzarote, incluyendo detección de fugas de emergencia y en piscinas."
                : "Canary Detect and The Leaky Finders provide professional leak detection services for all property types across Lanzarote, including emergency and pool leak detection."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed text-lg max-w-none">
              {isSpanish
                ? "¿Buscas detección de fugas en Lanzarote? Canary Detect es tu experto local. Esta página cubre todo lo que necesitas saber sobre la detección de fugas en Lanzarote: nuestra gama completa de servicios (incluyendo emergencias y detección de fugas en piscinas), la tecnología avanzada que utilizamos, nuestro equipo experimentado y las zonas que cubrimos en toda la isla. Ya seas propietario, empresario o administrador de fincas en Lanzarote, nuestros servicios profesionales de detección de fugas están diseñados para prevenir daños en la propiedad y ahorrarte dinero identificando fugas a tiempo."
                : "Looking for leak detection in Lanzarote? Canary Detect is your local expert. This page covers everything you need to know about leak detection Lanzarote: our full range of services (including emergency and pool leak detection), the advanced technology we use, our experienced team, and the areas we cover across the island. Whether you are a homeowner, business owner, or property manager in Lanzarote, our professional leak detection services are designed to prevent property damage and save you money by identifying leaks early."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-none">
              {isSpanish
                ? "Atendemos villas residenciales, alquileres vacacionales, complejos comunitarios y propiedades comerciales en toda la isla."
                : "We serve residential villas, holiday rentals, community complexes, and commercial properties throughout the island."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium">{isSpanish ? "Nuestra Historia" : "Our Story"}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                {isSpanish ? "Detección de Fugas Lanzarote: Empresa Líder Desde 2014" : "Leak Detection Lanzarote: Leading Company Since 2014"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
                {isSpanish
                  ? "Canary Detect - \"Los Cazafugas\" - es una empresa profesional de detección de fugas que presta servicio en Lanzarote. Con años de experiencia y la última tecnología, ayudamos a los propietarios a encontrar y reparar fugas rápidamente."
                  : "Canary Detect - \"The Leaky Finders\" - is a professional leak detection company serving Lanzarote. With years of experience and the latest technology, we help property owners find and fix leaks quickly."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
                {isSpanish
                  ? "Proporcionamos servicios profesionales de detección de fugas en las Islas Canarias, incluyendo Lanzarote y otras islas populares del archipiélago."
                  : "We provide professional leak detection services across the Canary Islands, including Lanzarote and other popular islands in the archipelago."}
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">
                {isSpanish ? "Nuestra Misión" : "Our Mission"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
                {isSpanish ? (
                  <>
                    Canary Detect es el nombre comercial de Camello Blanco S.L., una empresa con sede en Lanzarote establecida en 2014. Nos fundamos con una misión simple: proporcionar a Lanzarote 
                    <Link to="/es/servicios" className="text-primary hover:underline"> servicios profesionales y fiables de detección de fugas</Link>. Entendemos lo frustrantes y 
                    costosas que pueden ser las fugas de agua, por eso la detección temprana de fugas es crucial para prevenir daños en la propiedad y ahorrar en costes de reparación.
                  </>
                ) : (
                  <>
                    Canary Detect is the trading name of Camello Blanco S.L., a Lanzarote-based company established in 2014. We were founded with a simple mission: to provide Lanzarote with 
                    professional, reliable <Link to="/services" className="text-primary hover:underline">leak detection services</Link>. We understand how frustrating and 
                    costly water leaks can be, which is why early leak detection is crucial for preventing property damage and saving on repair costs.
                  </>
                )}
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">
                {isSpanish ? "Nuestra Experiencia" : "Our Experience"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
                {isSpanish ? (
                  <>
                    Por eso hemos invertido más de <Link to="/es/tecnologia" className="text-primary hover:underline font-semibold">€80.000 en los últimos equipos</Link> y formación para ofrecer resultados precisos. Nuestro equipo reúne años de experiencia en fontanería, construcción y 
                    tecnología de detección de fugas. Hemos ayudado a <Link to="/es/casos-de-exito" className="text-primary hover:underline">cientos de propietarios, empresas 
                    y hoteles</Link> en Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise y toda la isla.
                  </>
                ) : (
                  <>
                    That's why we've invested over <Link to="/technology" className="text-primary hover:underline font-semibold">€80,000 in the latest equipment</Link> and training to deliver accurate results. Our team brings together years of experience in plumbing, construction, and 
                    leak detection technology. We've helped <Link to="/case-studies" className="text-primary hover:underline">hundreds of homeowners, businesses, 
                    and hotels</Link> across Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, and the whole island.
                  </>
                )}
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3">
                {isSpanish ? "Nuestro Enfoque" : "Our Approach"}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-none">
                {isSpanish 
                  ? "Nos enorgullecemos de nuestro enfoque no invasivo - utilizando tecnología acústica, térmica y de cámara avanzada para encontrar fugas sin daños innecesarios a su propiedad."
                  : "We take pride in our non-invasive approach - using advanced acoustic, thermal, and camera technology to find leaks without unnecessary damage to your property."}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-none">
                {isSpanish
                  ? "A continuación, descubre por qué tantos eligen Canary Detect para sus necesidades de detección de fugas."
                  : "Next, discover why so many choose Canary Detect for their leak detection needs."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <img src={welcomeImg} alt={isSpanish ? "Técnico profesional de detección de fugas usando equipo acústico Lanzarote" : "Professional leak detection technician using acoustic equipment Lanzarote"} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  <p className="font-heading font-bold text-lg">{isSpanish ? "Desde 2014" : "Since 2014"}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-12 md:py-16 bg-canary-dark section-pattern-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">{isSpanish ? "Nuestras Promesas" : "Our Promises"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-white">
              {isSpanish ? "Por Qué Elegir Canary Detect" : "Why Choose Canary Detect"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                {isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee"}
              </h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                {isSpanish 
                  ? "Si no podemos localizar su fuga, no paga. Para inspecciones de confirmación de fugas, se aplica un cargo del 50% ya que el trabajo ha sido completado."
                  : "If we can't locate your leak, you don't pay. For leak confirmation surveys, a 50% charge applies as the work has been completed."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                {isSpanish ? "Garantía de Precio Fijo" : "Fixed Fee Guarantee"}
              </h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                {isSpanish 
                  ? "Sin extras ocultos. Cotizamos un precio fijo por adelantado y lo mantenemos, independientemente de cuánto tiempo tome el trabajo."
                  : "No hidden extras. We quote a fixed price upfront and stick to it, regardless of how long the job takes."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                {isSpanish ? "Informes para Seguros" : "Insurance-Ready Reports"}
              </h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                {isSpanish 
                  ? "Todas las inspecciones incluyen informes fotográficos profesionales adecuados para reclamaciones de seguros y documentación de propiedades."
                  : "All surveys include professional photographic reports suitable for insurance claims and property documentation."}
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-canary-white/60 text-center mt-8 max-w-2xl mx-auto"
          >
            {isSpanish
              ? "¿Listo para conocer nuestra gama completa de servicios de detección de fugas? Sigue leyendo."
              : "Ready to learn more about our comprehensive leak detection services? Read on for a full overview."}
          </motion.p>
        </div>
      </section>

      {/* All Services Grid with intro */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-muted-foreground leading-relaxed max-w-none">
              {isSpanish
                ? "Canary Detect ofrece una gama completa de servicios de detección de fugas en Lanzarote, utilizando tecnología de última generación para localizar con precisión fugas de agua ocultas en hogares, negocios y piscinas. Nuestro equipo se especializa en detección de fugas en Lanzarote, proporcionando a los clientes locales un servicio experto, tecnología avanzada y precios transparentes adaptados a las necesidades únicas de la isla."
                : "Canary Detect offers a complete range of leak detection services across Lanzarote, using state-of-the-art technology to accurately locate hidden water leaks in homes, businesses, and swimming pools. Our team specializes in leak detection Lanzarote, providing local clients with expert service, advanced technology, and transparent pricing tailored to the island's unique needs."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid - Internal Links */}
      <AllServicesGrid isSpanish={isSpanish} />

      {/* Technology and Equipment Section */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium">{isSpanish ? "Nuestra Tecnología" : "Our Technology"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
              {isSpanish ? "Nuestra Tecnología y Equipamiento" : "Our Technology and Equipment"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-none">
              {isSpanish
                ? "En Canary Detect, creemos que las herramientas adecuadas marcan la diferencia en la detección de fugas. Por eso hemos invertido en la última tecnología de vanguardia, asegurando que nuestro equipo pueda detectar fugas con una precisión y eficiencia inigualables. Nuestro equipamiento especializado, valorado en más de €80.000, incluye:"
                : "At Canary Detect, we believe that the right tools make all the difference when it comes to leak detection. That is why we have invested in the latest cutting-edge technology, ensuring our team can detect leaks with unrivalled accuracy and efficiency. Our specialist equipment, worth over €80,000, includes:"}
            </p>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Imagen Térmica" : "Thermal Imaging"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isSpanish
                    ? "Detecta anomalías de temperatura causadas por agua con fugas. Este método nos ayuda a localizar fugas ocultas detrás de paredes o bajo suelos."
                    : "Detects temperature anomalies caused by leaking water. This method helps us pinpoint leaks hidden behind walls or under floors."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Escucha Acústica" : "Acoustic Listening"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isSpanish
                    ? "Detecta el sonido del agua escapando de tuberías presurizadas, permitiéndonos localizar fugas incluso cuando no son visibles."
                    : "Detects the sound of water escaping from pressurized pipes, allowing us to locate leaks even when they are not visible."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Detección por Gas Trazador" : "Tracer Gas Detection"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isSpanish
                    ? "Consiste en presurizar tuberías con una mezcla de gas segura para localizar fugas. El gas escapa en el punto de fuga y es detectado por sensores sensibles."
                    : "Involves pressurizing pipes with a safe gas mix to locate leaks. The gas escapes at the leak point and is detected by sensitive sensors."}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {isSpanish ? "Inspección CCTV" : "CCTV Inspection"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isSpanish
                    ? "Utiliza cámaras internas para identificar visualmente problemas en tuberías, desagües y sistemas subterráneos."
                    : "Uses internal cameras to visually identify issues in pipes, drains, and underground systems."}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-8 max-w-none">
              {isSpanish
                ? "Nuestro enfoque no invasivo significa que podemos proporcionar servicios de detección de fugas en Lanzarote sin causar interrupciones innecesarias ni daños a su propiedad. Ya sea que esté lidiando con una fuga menor o un problema de fontanería complejo, nuestro equipo utiliza las mejores herramientas disponibles para ofrecer una solución rápida y eficaz."
                : "Our non-invasive approach means we can provide leak detection services across Lanzarote without causing unnecessary disruption or damage to your property. Whether you're dealing with a minor leak or a complex plumbing issue, our team uses the best tools available to deliver a fast, effective solution."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-none">
              {isSpanish
                ? "Con Canary Detect, puede confiar en que sus problemas de fugas se resolverán utilizando los métodos más avanzados de la industria."
                : "With Canary Detect, you can trust that your leak problems will be solved using the most advanced methods in the industry."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-none italic">
              {isSpanish
                ? "¿Curioso por saber qué opinan nuestros clientes? Sigue leyendo para ver sus comentarios y experiencias."
                : "Curious about what our clients think? Read on to see their feedback and experiences."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-12 md:py-16 bg-canary-dark section-pattern-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-canary-white">
              {isSpanish ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                  {isSpanish ? "Profesionalidad y Experiencia" : "Professionalism and Expertise"}
                </h3>
                <p className="text-canary-white/70 leading-relaxed">
                  {isSpanish
                    ? "Nuestros clientes destacan constantemente nuestra profesionalidad, experiencia y la tranquilidad que les proporcionamos. Valoran nuestra capacidad para detectar fugas de forma rápida y precisa, lo que les ha ahorrado miles de euros en agua desperdiciada y ha prevenido daños extensos en sus propiedades."
                    : "Our clients consistently highlight our professionalism, expertise, and the peace of mind we provide. They value our ability to detect leaks quickly and accurately, which has saved them thousands of euros in wasted water and prevented extensive property damage."}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                  {isSpanish ? "Servicio Gratuito de Confirmación de Fugas" : "Free Leak Confirmation Service"}
                </h3>
                <p className="text-canary-white/70 leading-relaxed">
                  {isSpanish
                    ? "Muchos aprecian nuestro servicio gratuito de confirmación de fugas, que ofrece una comprobación sin compromiso de sus sistemas de fontanería y les ayuda a tomar decisiones informadas."
                    : "Many appreciate our free leak confirmation service, which offers a no-obligation check of their plumbing systems and helps them make informed decisions."}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                  {isSpanish ? "Reputación de Excelencia" : "Reputation for Excellence"}
                </h3>
                <p className="text-canary-white/70 leading-relaxed">
                  {isSpanish
                    ? "Con una tasa de éxito del 99% y más de 1.200 fugas detectadas, nuestra reputación de excelencia está bien merecida. Como compartió un cliente satisfecho, \"Los servicios de detección de fugas de Canary Detect son de primera clase, y su equipo es altamente profesional y receptivo.\" Nuestro compromiso con la comunicación clara y el servicio experto significa que puede confiar en nosotros para proteger su propiedad y resolver fugas de manera eficiente."
                    : "With a 99% success rate and over 1,200 leaks detected, our reputation for excellence is well-earned. As one satisfied client shared, \"Canary Detect's leak detection services are top-notch, and their team is highly professional and responsive.\" Our commitment to clear communication and expert service means you can trust us to protect your property and resolve leaks efficiently."}
                </p>
              </div>
            </div>

            <p className="text-canary-white/60 mt-8 italic">
              {isSpanish
                ? "¿Listo para ver dónde trabajamos? Descubre nuestra zona de cobertura a continuación."
                : "Ready to see where we work? Find out about our coverage area next."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {isSpanish ? "Dónde Trabajamos en Lanzarote" : "Where We Work in Lanzarote"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
              {isSpanish
                ? "Canary Detect ofrece con orgullo servicios de detección de fugas en toda la isla de Lanzarote. Desde Playa Blanca y Puerto del Carmen hasta Costa Teguise, Arrecife y más allá, nuestro equipo está estratégicamente posicionado para proporcionar una respuesta rápida y un servicio eficiente dondequiera que estés."
                : "Canary Detect proudly offers leak detection services across the entire island of Lanzarote. From Playa Blanca and Puerto del Carmen to Costa Teguise, Arrecife, and beyond, our team is strategically positioned to provide rapid response and efficient service wherever you are."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
              {isSpanish ? "Trabajamos con:" : "We work with:"}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>{isSpanish ? "Propietarios residenciales" : "Residential homeowners"}</li>
              <li>{isSpanish ? "Propiedades comerciales" : "Commercial properties"}</li>
              <li>{isSpanish ? "Administradores de fincas" : "Property managers"}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
              {isSpanish
                ? "Ofrecemos soluciones a medida para todo tipo de problemas de fugas. No importa si tu propiedad está en Yaiza, Tías o cualquier otra parte de Lanzarote, puedes confiar en Canary Detect para arreglar las fugas de forma rápida y eficaz."
                : "We deliver tailored solutions for all types of leak problems. No matter if your property is in Yaiza, Tías, or any other part of Lanzarote, you can rely on Canary Detect to fix leaks quickly and effectively."}
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-none">
              {isSpanish
                ? "Nuestros servicios integrales en toda la isla garantizan que cada cliente reciba el más alto nivel de atención y el mejor resultado posible para su propiedad."
                : "Our comprehensive services across the island ensure that every client receives the highest standard of care and the best possible outcome for their property."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-none italic">
              {isSpanish
                ? "¿Quieres saber más sobre las personas detrás de Canary Detect? Conoce a nuestro equipo de expertos a continuación."
                : "Want to know more about the people behind Canary Detect? Meet our expert team below."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 md:py-16 bg-canary-dark section-pattern-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-canary-white">
              {isSpanish ? "Conoce al Equipo de Canary Detect" : "Meet the Canary Detect Team"}
            </h2>
            <p className="text-canary-white/70 leading-relaxed mb-8">
              {isSpanish
                ? "El equipo de Canary Detect reúne más de 40 años de experiencia combinada en detección de fugas y localización de servicios subterráneos."
                : "The Canary Detect team brings together over 40 years of combined experience in leak detection and underground utility location."}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                  {isSpanish ? "Cualificados y Experimentados" : "Qualified and Experienced"}
                </h3>
                <p className="text-canary-white/70 leading-relaxed">
                  {isSpanish
                    ? "Nuestros fontaneros plenamente cualificados y experimentados son apasionados por ofrecer un servicio y resultados excepcionales. Nos mantenemos a la vanguardia de la industria utilizando la última tecnología y proporcionando informes profesionales y asesoramiento experto a cada cliente."
                    : "Our fully qualified, time-served plumbers are passionate about delivering exceptional service and results. We stay at the forefront of the industry by using the latest technology and providing professional reports and expert advice to every client."}
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">
                  {isSpanish ? "Mínima Interrupción" : "Minimal Disruption"}
                </h3>
                <p className="text-canary-white/70 leading-relaxed">
                  {isSpanish
                    ? "Nuestra experiencia inigualable significa que podemos detectar y reparar fugas con mínima interrupción y daño a su propiedad. Entendemos lo estresantes que pueden ser los problemas de fugas, por eso nuestro equipo se dedica a hacer que todo el proceso sea lo más fluido y libre de estrés posible."
                    : "Our unrivalled experience means we can detect and fix leaks with minimal disruption and damage to your property. We understand how stressful leak problems can be, which is why our team is dedicated to making the entire process as smooth and stress-free as possible."}
                </p>
              </div>
            </div>

            <p className="text-canary-white/70 leading-relaxed mt-8">
              {isSpanish
                ? "Con Canary Detect, te beneficias de un equipo que realmente se preocupa por tu propiedad y siempre está listo para ayudar con cualquier pregunta o duda."
                : "With Canary Detect, you benefit from a team that truly cares about your property and is always ready to help with any questions or concerns."}
            </p>
            <p className="text-canary-white/60 mt-4 italic">
              {isSpanish
                ? "¿Listo para dar el siguiente paso? Contáctanos hoy para una consulta y presupuesto gratuitos."
                : "Ready to take the next step? Contact us today for a free consultation and quote."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* English FAQ Section */}
      {!isSpanish && (
        <section className="py-12 md:py-16 bg-background section-noise">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Choosing a Leak Detection Company in Lanzarote
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Canary Detect is an established leak detection company based in Lanzarote, trading since 2014 as the operational name of Camello Blanco S.L. (CIF: B72431232). We are a registered Spanish limited company with a permanent presence on the island, not a mainland contractor flying in for jobs.
                </p>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  What Sets a Professional Leak Detection Company Apart
                </h3>
                <p>
                  Not all leak detection companies use the same level of equipment or methodology. A professional leak detection company should use multiple detection technologies on every survey, confirm leak positions with at least two independent methods before marking any location, provide a detailed written report with photographs and coordinates, and operate a genuine No Find, No Fee policy.
                </p>
                <p>
                  Canary Detect meets all of these standards. We invest over &euro;80,000 in specialist detection equipment including GASENSE tracer gas systems, high-sensitivity acoustic geophones, infrared thermal imaging cameras, ground-penetrating radar, and CCTV pipe cameras. This level of investment is what separates a dedicated leak detection company from a general plumber with a basic acoustic device.
                </p>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Why Local Knowledge Matters for Leak Detection in Lanzarote
                </h3>
                <p>
                  Lanzarote has specific challenges that mainland or international leak detection companies are not equipped to understand. The island uses desalinated water, which is more aggressive to pipework than typical mains water. Properties are built on volcanic basalt, which is extremely hard and expensive to excavate. Pipe documentation in older properties is often incomplete or absent. Community water systems in urbanisations are frequently complex and poorly maintained.
                </p>
                <p>
                  A leak detection company with years of on-island experience understands these conditions and knows how to adapt detection methods accordingly. Canary Detect has worked across every area of Lanzarote since 2014, building up knowledge of the most common pipe types, failure modes, and property configurations found here.
                </p>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Company Credentials and Registration
                </h3>
                <p>
                  Canary Detect operates as Camello Blanco S.L., a Spanish limited company registered in the Canary Islands. We are fully insured for our detection and repair operations and operate in full compliance with Spanish building and plumbing regulations. Our insurance-approved reports are accepted by all major insurers operating in the Canary Islands.
                </p>

                <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                  Frequently Asked Questions About Canary Detect
                </h3>

                <p>
                  <strong>Is Canary Detect a registered company?</strong> Yes. We operate as Camello Blanco S.L. (CIF: B72431232), a registered Spanish limited company based in Lanzarote.
                </p>
                <p>
                  <strong>How long has Canary Detect been operating in Lanzarote?</strong> Since 2014. We have over 10 years of experience detecting and repairing leaks across the island.
                </p>
                <p>
                  <strong>Do you offer emergency leak detection?</strong> Yes. Canary Detect offers 24/7 emergency leak detection across Lanzarote. If you have an urgent situation, contact us at any time.
                </p>
                <p>
                  <strong>What types of property do you work on?</strong> We work on all property types - private villas, holiday apartments, community complexes, hotels, commercial premises, and construction sites. Any property in Lanzarote with a leak detection or underground survey need.
                </p>
                <p>
                  <strong>Do you carry out repairs as well as detection?</strong> Yes. Canary Detect offers a complete detection-to-repair service. Once we have confirmed and located a leak, our team can carry out the repair work directly, or provide a detailed report for your own contractor to work from.
                </p>
                <p>
                  <strong>How do your reports work for insurance claims?</strong> Every survey produces a full written report including thermal photographs, acoustic measurements, confirmed leak coordinates, and recommended repair options. These reports are formatted for insurance company submission and are accepted by all major insurers operating in the Canary Islands.
                </p>
                <p>
                  <strong>Do you speak English?</strong> Yes. Canary Detect is a bilingual company. Our team works in both English and Spanish, and all our reports can be produced in either language.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-primary section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {isSpanish ? "¿Listo para Encontrar su Fuga?" : "Ready to Find Your Leak?"}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              {isSpanish 
                ? "Contáctenos hoy para una consulta y presupuesto gratuitos. Estamos aquí para ayudar."
                : "Contact us today for a free consultation and quote. We're here to help."}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                {isSpanish ? "Contactar" : "Get in Touch"}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
