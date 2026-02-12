import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg";
import aboutHero from "@/assets/hero/about-hero.jpg";
import peteDaveMain from "@/assets/team/pete-dave-main.jpg";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import { getHomePath } from "@/i18n/routes";
import { Droplets, Camera, Thermometer, Radio, Shield, Clock, MapPin, Award } from "lucide-react";

const About = () => {
  const { t, isSpanish } = useTranslation();
  
  const canonicalUrl = isSpanish 
    ? "https://canary-detect.com/es/sobre-nosotros" 
    : "https://canary-detect.com/about";

  const faqItems = isSpanish ? [
    { question: "¿Qué es Canary Detect?", answer: "Canary Detect es el nombre comercial de Camello Blanco S.L., una empresa profesional de detección de fugas establecida en 2014 en Lanzarote. Ofrecemos servicios especializados de detección de fugas de agua, piscinas y tuberías subterráneas utilizando equipos avanzados valorados en más de €80.000." },
    { question: "¿En qué zonas de Lanzarote trabajan?", answer: "Prestamos servicio en toda la isla de Lanzarote, incluyendo Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Teguise, San Bartolomé, Haría y más. Ofrecemos cobertura completa de la isla." },
    { question: "¿Qué significa 'Sin Encontrar, Sin Pagar'?", answer: "Nuestra garantía Sin Encontrar, Sin Pagar significa que si no podemos localizar su fuga, no le cobramos por la detección. Para inspecciones de confirmación de fugas, se aplica un cargo del 50% ya que el trabajo de inspección ha sido completado." },
    { question: "¿Qué tecnología utilizan para detectar fugas?", answer: "Utilizamos una combinación de tecnologías incluyendo detección acústica, cámaras termográficas, gas trazador, cámaras CCTV para tuberías e inspección por colorante. Siempre usamos al menos dos métodos diferentes para confirmar la ubicación de una fuga." },
  ] : [
    { question: "What is Canary Detect?", answer: "Canary Detect is the trading name of Camello Blanco S.L., a professional leak detection company established in 2014 in Lanzarote. We provide specialised water leak, pool leak, and underground pipe detection services using advanced equipment valued at over €80,000." },
    { question: "Which areas of Lanzarote do you cover?", answer: "We serve the entire island of Lanzarote, including Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Teguise, San Bartolomé, Haría, and more. We offer complete island-wide coverage." },
    { question: "What does 'No Find, No Fee' mean?", answer: "Our No Find, No Fee guarantee means that if we cannot locate your leak, you don't pay for the detection. For leak confirmation surveys, a 50% charge applies as the survey work has been completed." },
    { question: "What technology do you use to detect leaks?", answer: "We use a combination of technologies including acoustic detection, thermal imaging cameras, tracer gas, CCTV pipe cameras, and dye testing. We always use at least two different methods to confirm a leak's location." },
  ];

  const stats = isSpanish ? [
    { value: "10+", label: "Años de Experiencia" },
    { value: "€80K+", label: "Inversión en Equipos" },
    { value: "4.9★", label: "Valoración en Google" },
    { value: "100%", label: "Cobertura de Lanzarote" },
  ] : [
    { value: "10+", label: "Years Experience" },
    { value: "€80K+", label: "Equipment Investment" },
    { value: "4.9★", label: "Google Rating" },
    { value: "100%", label: "Lanzarote Coverage" },
  ];

  const technologies = isSpanish ? [
    { icon: Radio, name: "Detección Acústica", desc: "Micrófonos de suelo y correladores para localizar fugas en tuberías enterradas" },
    { icon: Thermometer, name: "Cámaras Termográficas", desc: "Imagen infrarroja para detectar variaciones de temperatura causadas por fugas ocultas" },
    { icon: Droplets, name: "Gas Trazador", desc: "Gas inerte inyectado en tuberías que escapa por el punto de fuga" },
    { icon: Camera, name: "Cámaras CCTV", desc: "Inspección visual interna de tuberías y desagües para localizar daños" },
  ] : [
    { icon: Radio, name: "Acoustic Detection", desc: "Ground microphones and correlators to pinpoint leaks in buried pipes" },
    { icon: Thermometer, name: "Thermal Imaging", desc: "Infrared cameras to detect temperature variations caused by hidden leaks" },
    { icon: Droplets, name: "Tracer Gas", desc: "Inert gas injected into pipework that escapes at the leak point" },
    { icon: Camera, name: "CCTV Cameras", desc: "Internal visual inspection of pipes and drains to locate damage" },
  ];

  return (
    <Layout>
      <SEOHead 
        title={t('meta.about.title')}
        description={t('meta.about.description')}
        keywords={t('meta.about.keywords')}
        canonical={canonicalUrl}
      />
      <BreadcrumbSchema 
        items={[
          { name: isSpanish ? "Inicio" : "Home", url: `https://canary-detect.com${getHomePath(isSpanish)}` },
          { name: isSpanish ? "Sobre Nosotros" : "About", url: canonicalUrl }
        ]} 
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqItems} />

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
                <>Empresa Líder en <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Detección de Fugas en Lanzarote Desde 2014</span></>
              ) : (
                <>Lanzarote's Leading <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Leak Detection Company Since 2014</span></>
              )}
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {isSpanish 
                ? "Canary Detect - \"Los Cazafugas\" - es una empresa profesional de detección de fugas que presta servicio en Lanzarote. Con años de experiencia y la última tecnología, ayudamos a los propietarios a encontrar y reparar fugas rápidamente."
                : "Canary Detect - \"The Leaky Finders\" - is a professional leak detection company serving Lanzarote. With years of experience and the latest technology, we help property owners find and fix leaks quickly."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">{isSpanish ? "Nuestra Historia" : "Our Story"}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                {isSpanish ? "Dedicados a Encontrar Soluciones" : "Dedicated to Finding Solutions"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
                {isSpanish ? (
                  <>
                    Canary Detect es el nombre comercial de Camello Blanco S.L., una empresa con sede en Lanzarote establecida en 2014. Nos fundamos con una misión simple: proporcionar a Lanzarote 
                    <Link to="/es/servicios" className="text-primary hover:underline"> servicios profesionales y fiables de detección de fugas</Link>. Entendemos lo frustrantes y 
                    costosas que pueden ser las fugas de agua, por eso hemos invertido más de <Link to="/es/tecnologia" className="text-primary hover:underline font-semibold">€80.000 en los últimos equipos</Link> y formación para ofrecer resultados precisos.
                  </>
                ) : (
                  <>
                    Canary Detect is the trading name of Camello Blanco S.L., a Lanzarote-based company established in 2014. We were founded with a simple mission: to provide Lanzarote with 
                    professional, reliable <Link to="/services" className="text-primary hover:underline">leak detection services</Link>. We understand how frustrating and 
                    costly water leaks can be, which is why we've invested over <Link to="/technology" className="text-primary hover:underline font-semibold">€80,000 in the latest equipment</Link> and training to deliver accurate results.
                  </>
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
                {isSpanish ? (
                  <>
                    Nuestro equipo reúne años de experiencia en fontanería, construcción y 
                    tecnología de detección de fugas. Hemos ayudado a <Link to="/es/casos-de-exito" className="text-primary hover:underline">cientos de propietarios, empresas 
                    y hoteles</Link> en Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise y toda la isla.
                  </>
                ) : (
                  <>
                    Our team brings together years of experience in plumbing, construction, and 
                    leak detection technology. We've helped <Link to="/case-studies" className="text-primary hover:underline">hundreds of homeowners, businesses, 
                    and hotels</Link> across Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, and the whole island.
                  </>
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-none">
                {isSpanish 
                  ? "Nos enorgullecemos de nuestro enfoque no invasivo - utilizando tecnología acústica, térmica y de cámara avanzada para encontrar fugas sin daños innecesarios a su propiedad. Cada inspección incluye un informe fotográfico profesional adecuado para reclamaciones de seguros."
                  : "We take pride in our non-invasive approach - using advanced acoustic, thermal, and camera technology to find leaks without unnecessary damage to your property. Every survey includes a professional photographic report suitable for insurance claims."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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

      {/* Meet Pete & Dave */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={peteDaveMain} alt={isSpanish ? "Pete y Dave - Los Cazafugas de Lanzarote" : "Pete and Dave - The Leaky Finders of Lanzarote"} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-medium">{isSpanish ? "Conozca al Equipo" : "Meet the Team"}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                {isSpanish ? "Pete & Dave - Los Cazafugas" : "Pete & Dave - The Leaky Finders"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-none">
                {isSpanish
                  ? "Pete y Dave son los rostros detrás de Canary Detect. Con una formación combinada en fontanería, construcción e ingeniería, aportan un enfoque práctico y experimentado a cada trabajo. No son solo operadores de equipos - son solucionadores de problemas que entienden cómo se construyen los edificios en Lanzarote y dónde las fugas tienden a esconderse."
                  : "Pete and Dave are the faces behind Canary Detect. With a combined background in plumbing, construction, and engineering, they bring a hands-on, experienced approach to every job. They're not just equipment operators - they're problem solvers who understand how buildings are constructed in Lanzarote and where leaks tend to hide."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-none">
                {isSpanish
                  ? "Conocidos localmente como \"Los Cazafugas\", se han ganado una reputación por su minuciosidad, honestidad y sentido del humor. Ya sea una fuga de piscina en Playa Blanca o una tubería rota bajo una villa en Puerto del Carmen, Pete y Dave la encontrarán."
                  : "Known locally as \"The Leaky Finders,\" they've built a reputation for thoroughness, honesty, and a good sense of humour. Whether it's a pool leak in Playa Blanca or a burst pipe under a villa in Puerto del Carmen, Pete and Dave will find it."}
              </p>
              <Button asChild variant="outline">
                <Link to={isSpanish ? "/es/equipo" : "/meet-the-team"}>
                  {isSpanish ? "Más Sobre el Equipo" : "More About the Team"} →
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">{isSpanish ? "Nuestro Equipo" : "Our Equipment"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {isSpanish ? "Tecnología Profesional de Detección" : "Professional Detection Technology"}
            </h2>
            <p className="text-muted-foreground">
              {isSpanish
                ? "Utilizamos una combinación de tecnologías avanzadas para garantizar resultados precisos. Siempre confirmamos con al menos dos métodos diferentes."
                : "We use a combination of advanced technologies to ensure accurate results. We always confirm with at least two different methods."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg border border-border p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to={isSpanish ? "/es/tecnologia" : "/technology"}>
                {isSpanish ? "Ver Toda la Tecnología" : "View All Technology"} →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-12 md:py-16 bg-canary-dark section-pattern-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">{isSpanish ? "Nuestras Promesas" : "Our Promises"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-white">
              {isSpanish ? "Por Qué Elegir Canary Detect" : "Why Choose Canary Detect"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, emoji: "🎯", title: isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee", desc: isSpanish ? "Si no podemos localizar su fuga, no paga. Para inspecciones de confirmación, se aplica un cargo del 50%." : "If we can't locate your leak, you don't pay. For confirmation surveys, a 50% charge applies." },
              { icon: Award, emoji: "💰", title: isSpanish ? "Precio Fijo Garantizado" : "Fixed Fee Guarantee", desc: isSpanish ? "Sin extras ocultos. Cotizamos un precio fijo por adelantado y lo mantenemos." : "No hidden extras. We quote a fixed price upfront and stick to it." },
              { icon: Clock, emoji: "📋", title: isSpanish ? "Informes para Seguros" : "Insurance-Ready Reports", desc: isSpanish ? "Informes fotográficos profesionales incluidos en cada inspección." : "Professional photographic reports included with every survey." },
              { icon: MapPin, emoji: "🏝️", title: isSpanish ? "Cobertura Total de Lanzarote" : "Full Lanzarote Coverage", desc: isSpanish ? "Servicio en toda la isla - desde Arrecife hasta Playa Blanca, de costa a costa." : "Island-wide service - from Arrecife to Playa Blanca, coast to coast." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">{item.title}</h3>
                <p className="text-canary-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-primary font-medium">{isSpanish ? "Áreas de Servicio" : "Service Areas"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {isSpanish ? "Servicio en Toda la Isla" : "Island-Wide Service"}
            </h2>
            <p className="text-muted-foreground">
              {isSpanish
                ? "Ofrecemos detección de fugas profesional en todas las zonas de Lanzarote. Donde quiera que esté su propiedad, podemos ayudarle."
                : "We provide professional leak detection across all areas of Lanzarote. Wherever your property is located, we can help."}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Arrecife", path: "/arrecife" },
              { name: "Puerto del Carmen", path: "/puerto-del-carmen" },
              { name: "Playa Blanca", path: "/playa-blanca" },
              { name: "Costa Teguise", path: "/costa-teguise" },
              { name: "Tías", path: "/tias" },
              { name: "Yaiza", path: "/yaiza" },
              { name: "Teguise", path: "/teguise" },
              { name: "San Bartolomé", path: "/san-bartolome" },
              { name: "Haría", path: "/haria" },
              { name: "Tinajo", path: "/tinajo" },
            ].map((area) => (
              <Link
                key={area.name}
                to={isSpanish ? `/es/ubicaciones${area.path}` : `/locations${area.path}`}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-medium">{isSpanish ? "Preguntas Frecuentes" : "FAQ"}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
              {isSpanish ? "Preguntas Sobre Canary Detect" : "Questions About Canary Detect"}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-lg border border-border p-5"
              >
                <summary className="font-heading font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-muted-foreground leading-relaxed mt-3">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 bg-primary section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {isSpanish ? "¿Listo para Encontrar su Fuga?" : "Ready to Find Your Leak?"}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              {isSpanish 
                ? "Contáctenos hoy para una consulta y presupuesto gratuitos. Estamos aquí para ayudar."
                : "Contact us today for a free consultation and quote. We're here to help."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to={isSpanish ? "/es/contacto" : "/contact"}>
                  {isSpanish ? "Contactar" : "Get in Touch"}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to={isSpanish ? "/es/servicios/confirmacion-fugas-gratis" : "/services/free-leak-confirmation"}>
                  {isSpanish ? "Confirmación Gratis" : "Free Leak Check"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
