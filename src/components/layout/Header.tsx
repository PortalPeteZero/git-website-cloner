import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-light-bg.png";

const services = [
  { name: "Drain Detection", href: "/services/drain-detection" },
  { name: "Pipe Inspection", href: "/services/pipe-inspection" },
  { name: "Underground Pipe & Cable Detection", href: "/services/underground-detection" },
  { name: "Water Pipe Leak Detection", href: "/services/water-leak-detection" },
  { name: "Pool Leak Detection", href: "/services/pool-leak-detection" },
  { name: "Leak Repair", href: "/services/leak-repair" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Canary Detect - The Leaky Finders"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </Link>

          {/* Emergency Badge - Desktop */}
          <div className="hidden md:flex items-center gap-3 bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg shadow-md">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="font-bold text-sm">24/7</span>
            </div>
            <div className="w-px h-6 bg-destructive-foreground/30" />
            <a href="tel:+34646022695" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">+34 646 02 26 95</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/services" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/technology" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Technology
            </Link>
            <Link to="/about" className="text-canary-navy font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/case-studies" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-canary-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Emergency Badge - Mobile */}
              <a 
                href="tel:+34646022695" 
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground px-4 py-3 rounded-lg"
              >
                <Clock className="h-4 w-4" />
                <span className="font-bold">24/7 Emergency</span>
                <Phone className="h-4 w-4" />
                <span className="font-semibold">+34 646 02 26 95</span>
              </a>
              
              <Link 
                to="/services" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/technology" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/about" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/case-studies" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
