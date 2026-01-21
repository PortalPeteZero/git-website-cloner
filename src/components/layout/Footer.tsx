import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-dark-bg.png";

const Footer = () => {
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
                Get a Free Quote Today
              </h3>
              <p className="text-white/80 text-sm mt-1">
                We'll call you back within 24 hours
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/95 text-slate-900 border-0 h-11 min-w-[180px] placeholder:text-slate-500"
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-white/95 text-slate-900 border-0 h-11 min-w-[180px] placeholder:text-slate-500"
              />
              <Button 
                type="submit" 
                className="bg-slate-900 hover:bg-slate-800 text-white h-11 px-6 whitespace-nowrap group"
              >
                Request Callback
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
                <p className="font-medium text-white text-sm">No Find, No Fee</p>
                <p className="text-xs">Guaranteed results</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">24hr Response</p>
                <p className="text-xs">Fast turnaround</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 text-white/70">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">€80K+ Equipment</p>
                <p className="text-xs">Professional grade</p>
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
                <img src={logo} alt="Canary Detect - The Leaky Finders" className="h-12 w-auto" />
              </div>
              <p className="text-primary font-semibold text-sm italic mb-3">"The Leaky Finders"</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Lanzarote's leading leak detection specialists. Professional service with the latest technology.
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
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/technology", label: "Technology" },
                  { to: "/case-studies", label: "Case Studies" },
                  { to: "/contact", label: "Contact" },
                ].map(link => (
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
                Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/services/water-leak-detection", label: "Water Leak Detection" },
                  { to: "/services/pool-leak-detection", label: "Pool Leak Detection" },
                  { to: "/services/underground-detection", label: "Underground Detection" },
                  { to: "/services/drain-detection", label: "Drain & Pipe Surveys" },
                  { to: "/services/leak-repair", label: "Leak Repair" },
                  { to: "/services/pool-leak-repair", label: "Pool Leak Repair" },
                ].map(link => (
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
                Areas
              </h4>
              <ul className="space-y-2">
                {[
                  "Arrecife", "Puerto del Carmen", "Playa Blanca", 
                  "Costa Teguise", "Yaiza", "Tías", "Playa Honda"
                ].map(area => (
                  <li key={area}>
                    <Link 
                      to={`/locations/${area.toLowerCase().replace(/ /g, '-')}`}
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
                Contact
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
              © {new Date().getFullYear()} Canary Detect - "The Leaky Finders". All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="text-slate-700">•</span>
              <Link to="/admin/login" className="hover:text-primary transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;