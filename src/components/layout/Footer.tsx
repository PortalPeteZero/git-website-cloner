import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-dark-bg.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, isSpanish } = useLanguage();
  
  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  const navLinks = [
    { to: getRoute("/", "/es"), label: isSpanish ? "Inicio" : "Home" },
    { to: getRoute("/about", "/es/sobre-nosotros"), label: isSpanish ? "Sobre Nosotros" : "About Us" },
    { to: getRoute("/services", "/es/servicios"), label: isSpanish ? "Servicios" : "Services" },
    { to: getRoute("/technology", "/es/tecnologia"), label: isSpanish ? "Tecnología" : "Technology" },
    { to: getRoute("/case-studies", "/es/casos-de-exito"), label: isSpanish ? "Casos de Éxito" : "Case Studies" },
    { to: getRoute("/contact", "/es/contacto"), label: isSpanish ? "Contacto" : "Contact" },
  ];

  const serviceLinks = [
    { to: getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua"), label: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection" },
    { to: getRoute("/services/pool-leak-detection", "/es/servicios/deteccion-fugas-piscinas"), label: isSpanish ? "Detección de Fugas de Piscinas" : "Pool Leak Detection" },
    { to: getRoute("/services/underground-detection", "/es/servicios/deteccion-subterranea"), label: isSpanish ? "Detección Subterránea" : "Underground Detection" },
    { to: getRoute("/services/drain-detection", "/es/servicios/deteccion-desagues"), label: isSpanish ? "Inspección de Desagües" : "Drain & Pipe Surveys" },
    { to: getRoute("/services/leak-repair", "/es/servicios/reparacion-fugas"), label: isSpanish ? "Reparación de Fugas" : "Leak Repair" },
    { to: getRoute("/services/pool-leak-repair", "/es/servicios/reparacion-fugas-piscinas"), label: isSpanish ? "Reparación Fugas Piscinas" : "Pool Leak Repair" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Callback Form Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-orange-500" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`,
        }} />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                {isSpanish ? "Obtenga un Presupuesto Gratis Hoy" : "Get a Free Quote Today"}
              </h3>
              <p className="text-white/80 text-sm mt-1">
                {isSpanish ? "Le devolveremos la llamada en 24 horas" : "We'll call you back within 24 hours"}
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input 
                type="text" 
                placeholder={isSpanish ? "Su Nombre" : "Your Name"}
                className="bg-white/95 text-slate-900 border-0 h-11 min-w-[180px] placeholder:text-slate-500"
              />
              <Input 
                type="tel" 
                placeholder={isSpanish ? "Número de Teléfono" : "Phone Number"}
                className="bg-white/95 text-slate-900 border-0 h-11 min-w-[180px] placeholder:text-slate-500"
              />
              <Button 
                type="submit" 
                className="bg-slate-900 hover:bg-slate-800 text-white h-11 px-6 whitespace-nowrap group"
              >
                {isSpanish ? "Solicitar Llamada" : "Request Callback"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/70">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee"}</p>
                <p className="text-xs">{isSpanish ? "Resultados garantizados" : "Guaranteed results"}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{isSpanish ? "Respuesta en 24h" : "24hr Response"}</p>
                <p className="text-xs">{isSpanish ? "Respuesta rápida" : "Fast turnaround"}</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 text-white/70">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{isSpanish ? "€80K+ en Equipos" : "€80K+ Equipment"}</p>
                <p className="text-xs">{isSpanish ? "Grado profesional" : "Professional grade"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Logo & About - 3 cols */}
            <div className="lg:col-span-3">
              <div className="mb-5">
                <img src={logo} alt={isSpanish ? "Canary Detect - Los Cazafugas" : "Canary Detect - The Leaky Finders"} className="h-12 w-auto" />
              </div>
              <p className="text-primary font-semibold text-sm italic mb-3">
                {isSpanish ? '"Los Cazafugas"' : '"The Leaky Finders"'}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {isSpanish 
                  ? "Los principales especialistas en detección de fugas de Lanzarote. Servicio profesional con la última tecnología."
                  : "Lanzarote's leading leak detection specialists. Professional service with the latest technology."}
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100071808930725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4 text-white/80 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/canarydetect_the_leaky_finders/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4 text-white/80 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links - 2 cols */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                {isSpanish ? "Navegación" : "Navigation"}
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-slate-400 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - 3 cols */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                {isSpanish ? "Servicios" : "Services"}
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map(link => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-slate-400 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas - 2 cols */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                {isSpanish ? "Zonas" : "Areas"}
              </h4>
              <ul className="space-y-2">
                {[
                  "Arrecife", "Puerto del Carmen", "Playa Blanca", 
                  "Costa Teguise", "Yaiza", "Tías", "Playa Honda"
                ].map(area => (
                  <li key={area}>
                    <Link 
                      to={`${isSpanish ? '/es/ubicaciones' : '/locations'}/${area.toLowerCase().replace(/ /g, '-')}`}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - 2 cols */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                {isSpanish ? "Contacto" : "Contact"}
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+34711051071" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">
                      +34 711 051 071
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@canary-detect.com" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
                      info@canary-detect.com
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">
                    Zona Industrial, 1<br />
                    35580 Playa Blanca<br />
                    Lanzarote
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Canary Detect - {isSpanish ? '"Los Cazafugas"' : '"The Leaky Finders"'}. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <div className="flex items-center gap-4">
              <Link to={getRoute("/blog", "/es/blog")} className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="text-slate-700">•</span>
              <Link to="/admin/login" className="hover:text-primary transition-colors">
                Admin
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            {isSpanish 
              ? "Canary Detect es un nombre comercial de Camello Blanco S.L."
              : "Canary Detect is a trading name of Camello Blanco S.L."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
