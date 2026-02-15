import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg";
import aboutHero from "@/assets/hero/about-hero.jpg";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/i18n/LanguageContext";

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
                  ? "Nos enorgullecemos de nuestro enfoque no invasivo - utilizando tecnología acústica, térmica y de cámara avanzada para encontrar fugas sin daños innecesarios a su propiedad."
                  : "We take pride in our non-invasive approach - using advanced acoustic, thermal, and camera technology to find leaks without unnecessary damage to your property."}
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

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
