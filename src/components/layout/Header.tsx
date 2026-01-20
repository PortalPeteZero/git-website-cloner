import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/services" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Services
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
          <nav className="lg:hidden pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/services" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
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
