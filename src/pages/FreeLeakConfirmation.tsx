import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import FreeLeakConfirmationSection from "@/components/services/FreeLeakConfirmationSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, FileCheck, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero/free-leak-hero.jpg";
import { useTranslation } from "@/i18n/LanguageContext";

const FreeLeakConfirmation = () => {
  const { isSpanish } = useTranslation();
  const canonicalUrl = isSpanish 
    ? "https://canary-detect.com/es/servicios/test-confirmacion-fugas-gratis"
    : "https://canary-detect.com/services/free-leak-confirmation";

  const trustPoints = [
    { icon: FileCheck, text: isSpanish ? "Informe Profesional" : "Professional Report" },
    { icon: Clock, text: isSpanish ? "Evaluación Rápida" : "Quick Assessment" },
    { icon: Shield, text: isSpanish ? "Sin Compromiso" : "No Obligation" },
  ];

  return (
    <Layout>
      <SEOHead
        title={isSpanish 
          ? "Test de Confirmación de Fugas Gratis Lanzarote | Sin Compromiso | Canary Detect"
          : "Free Leak Confirmation Test Lanzarote | No Catch | Canary Detect"}
        description={isSpanish
          ? "Test de confirmación de fugas GRATIS en Lanzarote. Antes de reservar una inspección completa, confirmaremos si tiene una fuga con un informe profesional - sin coste."
          : "FREE leak confirmation test in Lanzarote. Before you book a full survey, we'll confirm if you have a leak with a professional report - at no cost. No catch, no obligation."}
        keywords={isSpanish
          ? "test fugas gratis Lanzarote, confirmación fugas, tengo una fuga, comprobación fugas agua, detección fugas gratis"
          : "free leak test Lanzarote, leak confirmation Lanzarote, do I have a leak, water leak check, free leak detection, leak assessment Lanzarote"}
        canonical={canonicalUrl}
        type="service"
      />

      {/* Hero Section - Full Width Background */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={isSpanish ? "Especialista en detección de fugas trabajando" : "Leak detection specialist at work"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.45)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-canary-cyan/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                <CheckCircle className="h-4 w-4" />
                {isSpanish ? "NUEVO 2026 — COMPLETAMENTE GRATIS" : "NEW FOR 2026 — COMPLETELY FREE"}
              </span>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                {isSpanish ? "Test de Confirmación" : "Free Leak"}
                <span className="block text-primary drop-shadow-lg">
                  {isSpanish ? "de Fugas Gratis" : "Confirmation Test"}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {isSpanish ? (
                  <>¿No está seguro si tiene una fuga? Visitaremos su propiedad y lo confirmaremos — 
                  <span className="text-primary font-semibold"> completamente gratis</span>, con un informe profesional.</>
                ) : (
                  <>Not sure if you have a leak? We'll visit your property and confirm — 
                  <span className="text-primary font-semibold"> completely free</span>, with a professional report.</>
                )}
              </p>

              {/* Trust Points */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {trustPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  >
                    <point.icon className="h-4 w-4 text-primary" />
                    <span className="text-white text-sm font-medium">{point.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-xl text-lg px-8 py-6" asChild>
                  <a href="#enquiry-form">
                    {isSpanish ? "Reserve Su Test Gratis" : "Book Your Free Test"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>


      {/* Enquiry Form Section */}
      <div id="enquiry-form">
        <FreeLeakConfirmationSection
          title={isSpanish ? "Test de Confirmación de Fugas Gratis" : "Free Leak Confirmation Tests"}
          phone="+34 828 679 761"
          email="info@canary-detect.com"
          includes={isSpanish ? [
            "Test de confirmación de fugas GRATIS",
            "Informe básico si es necesario",
            "Evaluación experta de su propiedad",
            "Consulta sin compromiso",
          ] : [
            "FREE leak confirmation test",
            "Basic report if required",
            "Expert assessment of your property",
            "No obligation consultation",
          ]}
          importantNote={isSpanish 
            ? "Este servicio es para CONFIRMAR si tiene una fuga o no, con un informe detallado. NO es una inspección para localizar la posición exacta."
            : "This service is to CONFIRM if you have a leak or not, with a detailed report. It is NOT a leak survey to pinpoint the exact location."}
          subNote={isSpanish
            ? "Para inspecciones completas de localización de fugas, contáctenos para nuestro servicio de detección integral."
            : "For full leak pinpointing surveys, contact us for our comprehensive detection service."}
        />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-canary-navy mb-4">
            {isSpanish ? "¿Ya Sabe Que Tiene una Fuga?" : "Already Know You Have a Leak?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isSpanish 
              ? "Si ya sabe que existe una fuga y necesita que localicemos su posición exacta, reserve nuestra inspección completa de detección de fugas."
              : "If you already know a leak exists and need us to pinpoint its exact location, book our full leak detection survey."}
          </p>
          <Button size="lg" asChild>
            <Link to={isSpanish ? "/es/servicios/deteccion-fugas-agua" : "/services/water-leak-detection"}>
              {isSpanish ? "Ver Servicio Completo de Detección" : "View Full Leak Detection Service"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FreeLeakConfirmation;
