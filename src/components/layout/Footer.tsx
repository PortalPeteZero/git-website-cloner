import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-dark-bg.png";

const Footer = () => {
  return (
    <footer className="bg-canary-dark text-canary-white relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Callback Form Section */}
      <div className="bg-primary py-12 relative overflow-hidden">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,1) 20px, rgba(255,255,255,1) 21px)`,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Request a Callback
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Leave your details and we'll get back to you within 24 hours
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-background text-foreground"
              />
              <Input 
                type="tel" 
                placeholder="Your Phone Number" 
                className="bg-background text-foreground"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="whitespace-nowrap"
              >
                Call Me Back
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div>
              <div className="mb-4">
                <img src={logo} alt="Canary Detect - The Leaky Finders" className="h-12 w-auto" />
              </div>
              <p className="text-primary font-semibold text-sm italic mb-2">"The Leaky Finders"</p>
              <p className="text-canary-white/80 text-sm leading-relaxed">
                Professional leak detection services across Lanzarote. 
                Using the latest technology to find and fix leaks quickly and efficiently.
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100071808930725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/canarydetect_the_leaky_finders/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-canary-white/80 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-canary-white/80 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-canary-white/80 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="text-canary-white/80 hover:text-primary transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-canary-white/80 hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-canary-white/80 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/water-leak-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Water Leak Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/pool-leak-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Swimming Pool Leak Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/underground-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Underground Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/leak-repair" className="text-canary-white/80 hover:text-primary transition-colors">
                    Leak Repair
                  </Link>
                </li>
              </ul>
              
              <h4 className="font-heading font-bold text-lg mt-6 mb-3">Service Areas</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li>
                  <Link to="/locations/arrecife" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Arrecife
                  </Link>
                </li>
                <li>
                  <Link to="/locations/puerto-del-carmen" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Puerto del Carmen
                  </Link>
                </li>
                <li>
                  <Link to="/locations/playa-blanca" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Playa Blanca
                  </Link>
                </li>
                <li>
                  <Link to="/locations/costa-teguise" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Costa Teguise
                  </Link>
                </li>
                <li>
                  <Link to="/locations/yaiza" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Yaiza
                  </Link>
                </li>
                <li>
                  <Link to="/locations/tias" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Tías
                  </Link>
                </li>
                <li>
                  <Link to="/locations/playa-honda" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Playa Honda
                  </Link>
                </li>
                <li>
                  <Link to="/locations/san-bartolome" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    San Bartolomé
                  </Link>
                </li>
                <li>
                  <Link to="/locations/teguise" className="text-canary-white/80 hover:text-primary transition-colors text-sm">
                    Teguise
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+34646022695" className="text-canary-white/80 hover:text-primary transition-colors">
                      +34 646 02 26 95
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@canary-detect.com" className="text-canary-white/80 hover:text-primary transition-colors">
                    info@canary-detect.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-canary-white/80">
                    Zona Industrial, 1<br />
                    35580 Playa Blanca, Lanzarote
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-canary-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-canary-white/60">
          <p>
            &copy; {new Date().getFullYear()} Canary Detect - "The Leaky Finders". All rights reserved.
            <span className="mx-2">|</span>
            <Link to="/admin/login" className="hover:text-primary transition-colors">
              Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
