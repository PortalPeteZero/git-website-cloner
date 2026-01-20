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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/services" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/technology" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Technology
            </Link>
            <Link to="/contact" className="text-canary-navy font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  Leak Detection Surveys
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/services/water-leak-detection" className="cursor-pointer">
                    Water Leak Detection
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/pool-leak-detection" className="cursor-pointer">
                    Pool Leak Surveys
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a 
              href="https://leakguardlanzarote.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Water Leak Monitoring & Alarm
              </Button>
            </a>
            <a 
              href="https://leak-detective.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Try Our Spot The Leak Game
              </Button>
            </a>
            <a 
              href="https://canary-detect-coatings.es/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm">
                Pool Coatings
              </Button>
            </a>
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
                to="/contact" 
                className="text-canary-navy font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-wrap gap-2 pt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Leak Detection Surveys
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                    <DropdownMenuItem asChild>
                      <Link to="/services/water-leak-detection" onClick={() => setMobileMenuOpen(false)} className="cursor-pointer">
                        Water Leak Detection
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/services/pool-leak-detection" onClick={() => setMobileMenuOpen(false)} className="cursor-pointer">
                        Pool Leak Surveys
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a 
                  href="https://leakguardlanzarote.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" size="sm">
                    Water Leak Monitoring & Alarm
                  </Button>
                </a>
                <a 
                  href="https://leak-detective.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" size="sm">
                    Try Our Spot The Leak Game
                  </Button>
                </a>
                <a 
                  href="https://canary-detect-coatings.es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="default" size="sm">
                    Pool Coatings
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
