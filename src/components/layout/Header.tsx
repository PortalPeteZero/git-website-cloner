import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [villaPoolOpen, setVillaPoolOpen] = useState(false);
  const location = useLocation();
  const { t, isSpanish } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.includes("/services") || location.pathname.includes("/servicios");

  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-gradient-to-r from-background via-background to-muted/30 border-b border-border/30"
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* Spacer for layout balance */}
          <div className="w-8" />

          {/* Desktop Navigation - Show at xl (1280px+) to prevent overflow */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Primary Links */}
            <Link 
              to={getRoute("/", "/es")} 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/") || isActive("/es")
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              {t('navigation.home')}
            </Link>
            <Link 
              to={getRoute("/technology", "/es/tecnologia")} 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/technology") || isActive("/es/tecnologia")
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              {t('navigation.technology')}
            </Link>
            <Link 
              to={getRoute("/case-studies", "/es/casos-de-exito")} 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/case-studies") || isActive("/es/casos-de-exito")
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              {t('navigation.caseStudies')}
            </Link>
            <Link 
              to={getRoute("/about", "/es/sobre-nosotros")} 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/about") || isActive("/es/sobre-nosotros")
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to={getRoute("/contact", "/es/contacto")} 
              className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 ${
                isActive("/contact") || isActive("/es/contacto")
                  ? "text-primary after:w-full" 
                  : "text-canary-navy hover:text-primary after:w-0 hover:after:w-full"
              } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              {t('navigation.contact')}
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
                  {t('navigation.services')}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-lg p-1 z-50">
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/drain-detection", "/es/servicios/deteccion-desagues")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Inspección de Desagües" : "Drain & Pipe Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/drain-unblocking", "/es/servicios/desbloqueo-desagues")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Desbloqueo de Desagües" : "Drain Unblocking"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/leak-repair", "/es/servicios/reparacion-fugas")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Reparación de Fugas" : "Leak Repair"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/pool-leak-repair", "/es/servicios/reparacion-fugas-piscinas")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Reparación Fugas Piscinas" : "Pool Leak Repair"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/pipe-inspection", "/es/servicios/inspeccion-tuberias")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Inspección de Tuberías" : "Pipe Inspection"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/underground-detection", "/es/servicios/deteccion-subterranea")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Detección Subterránea" : "Underground Pipe & Cable Location"}
                  </Link>
                </DropdownMenuItem>
                <div className="border-t border-border/50 my-1" />
                <DropdownMenuItem asChild>
                  <a 
                    href="https://canary-detect-coatings.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer font-semibold text-primary hover:bg-primary/10 rounded-md transition-colors flex items-center gap-2"
                  >
                    {t('navigation.poolCoatings')}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/technology", "/es/tecnologia")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Ver Nuestra Tecnología →" : "See Our Technology →"}
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
                  {t('navigation.villaPoolLeaks')}
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
                    {isSpanish ? "Monitoreo de Fugas" : "Water Leak Monitoring"}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Inspección de Villas" : "Villa Leak Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/pool-leak-detection", "/es/servicios/deteccion-fugas-piscinas")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Inspección de Piscinas" : "Pool Leak Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                  >
                    {isSpanish ? "Test Confirmación Gratis" : "Free Leak Confirmation Test"}
                  </Link>
                </DropdownMenuItem>
                <div className="border-t border-border/50 my-1" />
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/technology", "/es/tecnologia")} 
                    className="cursor-pointer font-semibold text-primary hover:bg-primary/10 rounded-md transition-colors"
                  >
                    {isSpanish ? "Ver Nuestra Tecnología →" : "See Our Technology →"}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog Link */}
            <Link to={getRoute("/blog", "/es/blog")}>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-1.5 border-2 border-canary-navy/20 bg-canary-navy/5 text-canary-navy font-semibold hover:border-canary-navy/40 hover:bg-canary-navy/10 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {t('navigation.seeOurBlog')}
              </Button>
            </Link>

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
                {t('navigation.spotTheLeakGame')}
                <ExternalLink className="h-3 w-3 opacity-60" />
              </Button>
            </a>

          </nav>

          {/* Mobile Menu Button - Show until xl breakpoint */}
          <button
            className="xl:hidden p-2.5 text-canary-navy hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="xl:hidden pb-6 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {/* Language Switcher Mobile */}
              <div className="px-4 py-2">
                <LanguageSwitcher variant="mobile" />
              </div>
              
              <div className="h-px bg-border my-2" />

              {/* Services Section - Expandable */}
              <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-canary-navy font-bold text-lg hover:bg-primary/5 rounded-lg transition-all">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {t('navigation.services')}
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 pr-4 pb-2 space-y-1">
                  <Link 
                    to={getRoute("/services/drain-detection", "/es/servicios/deteccion-desagues")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Inspección de Desagües" : "Drain & Pipe Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/drain-unblocking", "/es/servicios/desbloqueo-desagues")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Desbloqueo de Desagües" : "Drain Unblocking"}
                  </Link>
                  <Link 
                    to={getRoute("/services/leak-repair", "/es/servicios/reparacion-fugas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Reparación de Fugas" : "Leak Repair"}
                  </Link>
                  <Link 
                    to={getRoute("/services/pool-leak-repair", "/es/servicios/reparacion-fugas-piscinas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Reparación Fugas Piscinas" : "Pool Leak Repair"}
                  </Link>
                  <Link 
                    to={getRoute("/services/pipe-inspection", "/es/servicios/inspeccion-tuberias")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Inspección de Tuberías" : "Pipe Inspection"}
                  </Link>
                  <Link 
                    to={getRoute("/services/underground-detection", "/es/servicios/deteccion-subterranea")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Detección Subterránea" : "Underground Location"}
                  </Link>
                  <a 
                    href="https://canary-detect-coatings.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-primary font-semibold hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {t('navigation.poolCoatings')}
                    <ExternalLink className="h-3 w-3 opacity-60 ml-auto" />
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Villa & Pool Leaks Section - Expandable */}
              <Collapsible open={villaPoolOpen} onOpenChange={setVillaPoolOpen}>
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-canary-navy font-bold text-lg hover:bg-primary/5 rounded-lg transition-all">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {t('navigation.villaPoolLeaks')}
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${villaPoolOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 pr-4 pb-2 space-y-1">
                  <a 
                    href="https://leakguardlanzarote.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Monitoreo de Fugas" : "Water Leak Monitoring"}
                    <ExternalLink className="h-3 w-3 opacity-60 ml-auto" />
                  </a>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection"}
                  </Link>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Inspección de Villas" : "Villa Leak Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/pool-leak-detection", "/es/servicios/deteccion-fugas-piscinas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Inspección de Piscinas" : "Pool Leak Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-canary-navy/80 font-medium hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Test Confirmación Gratis" : "Free Leak Confirmation Test"}
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <div className="h-px bg-border my-2" />
              
              {/* Primary Links */}
              <Link 
                to={getRoute("/", "/es")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to={getRoute("/technology", "/es/tecnologia")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.technology')}
              </Link>
              <Link 
                to={getRoute("/case-studies", "/es/casos-de-exito")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.caseStudies')}
              </Link>
              <Link 
                to={getRoute("/about", "/es/sobre-nosotros")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                to={getRoute("/contact", "/es/contacto")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
              <Link 
                to={getRoute("/blog", "/es/blog")} 
                className="px-4 py-3 text-canary-navy font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.seeOurBlog')}
              </Link>

              <div className="h-px bg-border my-2" />

              {/* External Links */}
              <div className="flex flex-col gap-2 px-4 pb-2">
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
                    className="w-full justify-center gap-1.5 border-2 border-canary-navy/20 bg-canary-navy/5 text-canary-navy font-semibold"
                  >
                    {t('navigation.spotTheLeakGame')}
                    <ExternalLink className="h-3 w-3 opacity-60" />
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
