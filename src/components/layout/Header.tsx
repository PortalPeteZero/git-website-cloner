import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-gradient-to-r from-background via-background to-muted/30 border-b border-border/30"
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Canary Detect - The Leaky Finders"
              className="h-16 md:h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {/* Primary Links */}
            <Link 
              to="/" 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/") 
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/contact") 
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              Contact
            </Link>

            {/* Divider */}
            <div className="h-8 w-px bg-border mx-2" />

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`gap-1.5 border-2 font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
                    isServicesActive 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-canary-navy/20 bg-canary-navy/5 text-canary-navy hover:border-canary-navy/40 hover:bg-canary-navy/10"
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-lg p-1 z-50">
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/drain-detection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Drain & Pipe Surveys
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/drain-unblocking" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Drain Unblocking
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/leak-repair" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Leak Repair
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/pool-leak-repair" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Pool Leak Repair
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/pipe-inspection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Pipe Inspection
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/underground-detection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Underground Pipe & Cable Location
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Villa & Pool Leaks Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1.5 border-2 border-primary/30 bg-primary/5 text-canary-navy font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Villa & Pool Leaks
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-lg p-1 z-50">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://leakguardlanzarote.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors flex items-center gap-2"
                  >
                    Water Leak Monitoring
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/water-leak-detection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Water Leak Detection
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/water-leak-detection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Villa Leak Surveys
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/pool-leak-detection" 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    Pool Leak Surveys
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* External Links */}
            <a 
              href="https://leak-detective.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="gap-1.5 border-2 border-canary-navy/20 bg-canary-navy/5 text-canary-navy font-semibold hover:border-canary-navy/40 hover:bg-canary-navy/10 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Spot The Leak Game
                <ExternalLink className="h-3 w-3 opacity-60" />
              </Button>
            </a>

            {/* Pool Coatings CTA - Premium styling */}
            <a 
              href="https://canary-detect-coatings.es/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="sm"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-[hsl(25,93%,50%)] text-white font-bold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border-0 px-5"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Pool Coatings
                  <ExternalLink className="h-3 w-3" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,93%,45%)] to-primary opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-canary-navy hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {/* Primary Links */}
              <Link 
                to="/" 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="h-px bg-border my-2" />

              {/* Buttons */}
              <div className="flex flex-col gap-3 px-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="default"
                      className={`w-full justify-between gap-1.5 border-2 font-semibold transition-all duration-300 ${
                        isServicesActive 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-canary-navy/20 bg-canary-navy/5 text-canary-navy hover:border-canary-navy/40 hover:bg-canary-navy/10"
                      }`}
                    >
                      Services
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-lg p-1 z-50 w-[250px]">
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/drain-detection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Drain & Pipe Surveys
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/drain-unblocking" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Drain Unblocking
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/leak-repair" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Leak Repair
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/pool-leak-repair" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Pool Leak Repair
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/pipe-inspection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Pipe Inspection
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/underground-detection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Underground Pipe & Cable Location
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="default"
                      className="w-full justify-between gap-1.5 border-2 border-primary/30 bg-primary/5 text-canary-navy font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      Villa & Pool Leaks
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-lg p-1 z-50 w-[200px]">
                    <DropdownMenuItem asChild>
                      <a 
                        href="https://leakguardlanzarote.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md flex items-center gap-2"
                      >
                        Water Leak Monitoring
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/water-leak-detection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Water Leak Detection
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/water-leak-detection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Villa Leak Surveys
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/services/pool-leak-detection" 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md"
                      >
                        Pool Leak Surveys
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a 
                  href="https://leak-detective.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    size="default"
                    className="w-full justify-center gap-1.5 border-2 border-canary-navy/20 bg-canary-navy/5 text-canary-navy font-semibold hover:border-canary-navy/40 hover:bg-canary-navy/10 transition-all duration-300"
                  >
                    Spot The Leak Game
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </Button>
                </a>

                <a 
                  href="https://canary-detect-coatings.es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button 
                    size="default"
                    className="w-full justify-center relative overflow-hidden bg-gradient-to-r from-primary to-[hsl(25,93%,50%)] text-white font-bold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 border-0"
                  >
                    <span className="flex items-center gap-1.5">
                      Pool Coatings
                      <ExternalLink className="h-3 w-3" />
                    </span>
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
