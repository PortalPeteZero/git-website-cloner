import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-dark-bg.png";
const Footer = () => {
  return (
    <footer className="bg-canary-dark text-canary-white">
      {/* Callback Form Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
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
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div>
              <div className="mb-4">
                <img src={logo} alt="Canary Detect - The Leaky Finders" className="h-12 w-auto" />
              </div>
              <p className="text-canary-white/80 text-sm leading-relaxed">
                Professional leak detection services across Lanzarote. 
                Using the latest technology to find and fix leaks quickly and efficiently.
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.facebook.com/canarydetect" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/canarydetect" 
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
                  <Link to="/case-studies" className="text-canary-white/80 hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-canary-white/80 hover:text-primary transition-colors">
                    Blog
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
                  <Link to="/services/drain-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Drain Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/pipe-inspection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Pipe Inspection
                  </Link>
                </li>
                <li>
                  <Link to="/services/underground-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Underground Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/water-leak-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Water Leak Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/pool-leak-detection" className="text-canary-white/80 hover:text-primary transition-colors">
                    Pool Leak Detection
                  </Link>
                </li>
                <li>
                  <Link to="/services/leak-repair" className="text-canary-white/80 hover:text-primary transition-colors">
                    Leak Repair
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
                    Lanzarote, Canary Islands
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
          <p>&copy; {new Date().getFullYear()} Canary Detect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
