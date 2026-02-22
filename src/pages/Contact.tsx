import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactHero from "@/assets/hero/contact-hero.jpg";
import SEOHead from "@/components/seo/SEOHead";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import AllServicesGrid from "@/components/internal-links/AllServicesGrid";

const Contact = () => {
  const { t, isSpanish } = useTranslation();

  return (
    <Layout>
      <SEOHead 
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
        keywords={t('meta.contact.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/contacto" : "https://canary-detect.com/contact"}
      />
      <LocalBusinessSchema page="contact" />
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHero} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
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
              {t('contact.heroSubtitle')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {t('contact.heroTitle')} <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{t('contact.heroTitleHighlight')}</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {t('contact.heroDescription')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enquiry CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {t('contact.sendMessage')}
              </h2>

              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {isSpanish 
                    ? "Complete nuestro formulario de consulta en línea y nos pondremos en contacto con usted lo antes posible."
                    : "Fill out our online enquiry form and we'll get back to you as soon as possible."}
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="min-w-[200px]"
                >
                  <a href="https://camello-blanco-sl.odoo.com/en/enquiry" target="_blank" rel="noopener noreferrer">
                    {isSpanish ? "Ir al Formulario de Consulta" : "Go to Enquiry Form"}
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {t('contact.contactInfo')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-none">
                {t('contact.contactDescription')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.phone')}</h3>
                    <a href="tel:+34711051071" className="text-muted-foreground hover:text-primary transition-colors">
                      +34 711 051 071
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.email')}</h3>
                    <a href="mailto:info@canary-detect.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@canary-detect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.office')}</h3>
                    <p className="text-muted-foreground">
                      C. las Maretas 12<br />
                      35580 Playa Blanca, Lanzarote
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 whitespace-pre-line">
                      {t('contact.servingAreas')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t('contact.hoursText')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Response Section */}
              <div className="mt-10 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {isSpanish ? "Respuesta de Emergencia" : "Emergency Response"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isSpanish 
                    ? "Disponibilidad telefónica 24/7 para emergencias de fugas de agua en toda Lanzarote. Tiempo de respuesta típico de 2-4 horas."
                    : "24/7 phone availability for water leak emergencies across Lanzarote. Typical response time of 2–4 hours."}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {(isSpanish ? [
                    "📞 Llame — evaluamos su situación por teléfono",
                    "📋 Evaluamos la urgencia y asignamos al técnico más cercano",
                    "🚗 Llegamos a cualquier punto de Lanzarote en 2-4 horas",
                    "🔍 Detección y localización con equipos multi-tecnología",
                    "📄 Informe fotográfico profesional entregado el mismo día"
                  ] : [
                    "📞 Call — we assess your situation over the phone",
                    "📋 We evaluate urgency and assign the nearest technician",
                    "🚗 We reach anywhere in Lanzarote within 2–4 hours",
                    "🔍 Detection and location using multi-technology equipment",
                    "📄 Professional photographic report delivered same day"
                  ]).map((step, i) => (
                    <p key={i}>{step}</p>
                  ))}
                </div>
              </div>

              {/* Map - Playa Blanca Office */}
              <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d-13.8267!3d28.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc462a0e0e0e0e0e%3A0x0!2sC.%20las%20Maretas%2012%2C%20Playa%20Blanca!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isSpanish ? "Oficina Canary Detect - Playa Blanca, Lanzarote" : "Canary Detect Office - Playa Blanca, Lanzarote"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Grid - Internal Links */}
      <AllServicesGrid isSpanish={isSpanish} />
    </Layout>
  );
};

export default Contact;
