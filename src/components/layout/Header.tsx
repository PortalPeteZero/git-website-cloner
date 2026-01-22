import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink, Phone, Droplets, Waves, Wrench, Search, TestTube, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logoLight from "@/assets/logo-light-bg.png";
import logoTransparent from "@/assets/logo-transparent.png";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.includes("/services") || location.pathname.includes("/servicios");

  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  const navLinkClass = (active: boolean) => 
    `relative px-3 py-1.5 font-semibold text-sm transition-all duration-300 rounded-md ${
      active 
        ? "text-primary" 
        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "shadow-lg" 
        : ""
    }`}>
      {/* Top Row - Logo + Primary Navigation */}
      <div className="bg-canary-navy">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Logo - Left side with fixed width for alignment */}
            <div className="w-40 shrink-0">
              <Link to={getRoute("/", "/es")} className="flex items-center group">
                <img
                  src={logoTransparent}
                  alt={isSpanish ? "Canary Detect - Los Cazafugas" : "Canary Detect - The Leaky Finders"}
                  className="h-28 md:h-32 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Top Nav - Centered */}
            <nav className="hidden lg:flex items-center justify-center gap-6 flex-1">
              <Link 
                to={getRoute("/", "/es")} 
                className={`px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-md ${
                  isActive("/") || isActive("/es")
                    ? "text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to={getRoute("/technology", "/es/tecnologia")} 
                className={`px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-md ${
                  isActive("/technology") || isActive("/es/tecnologia")
                    ? "text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {t('navigation.technology')}
              </Link>
              <Link 
                to={getRoute("/case-studies", "/es/casos-de-exito")} 
                className={`px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-md ${
                  isActive("/case-studies") || isActive("/es/casos-de-exito")
                    ? "text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {t('navigation.caseStudies')}
              </Link>
              <Link 
                to={getRoute("/about", "/es/sobre-nosotros")} 
                className={`px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-md ${
                  isActive("/about") || isActive("/es/sobre-nosotros")
                    ? "text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                to={getRoute("/blog", "/es/blog")} 
                className={`px-3 py-1.5 font-medium text-sm transition-all duration-300 rounded-md ${
                  isActive("/blog") || isActive("/es/blog")
                    ? "text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                Blog
              </Link>

              <div className="h-4 w-px bg-white/20 mx-2" />

              <LanguageSwitcher variant="dark" />
            </nav>

            {/* Empty spacer to balance the layout */}
            <div className="hidden lg:block w-40 shrink-0" />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all duration-300 ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Services & CTAs (Desktop only) */}
      <div className={`hidden lg:block transition-all duration-300 border-b-4 border-gradient ${
        scrolled 
          ? "bg-background/98 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center py-1.5">
            {/* Contact Button - Centered under logo with fixed width */}
            <div className="w-40 shrink-0 flex justify-center">
              <Link to={getRoute("/contact", "/es/contacto")}>
                <Button 
                  size="sm"
                  className="bg-canary-navy hover:bg-canary-navy/90 text-white font-bold gap-1.5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {t('navigation.contact')}
                </Button>
              </Link>
            </div>

            {/* Center buttons */}
            <div className="flex items-center justify-center gap-4 flex-1">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`group flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md ${
                    isServicesActive 
                      ? "bg-primary text-white shadow-primary/30" 
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  <Wrench className="h-4 w-4" />
                  {t('navigation.services')}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-background border border-border shadow-xl rounded-xl p-2 min-w-[220px]"
                align="center"
              >
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/drain-detection", "/es/servicios/deteccion-desagues")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Inspección de Desagües" : "Drain & Pipe Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/drain-unblocking", "/es/servicios/desbloqueo-desagues")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Desbloqueo de Desagües" : "Drain Unblocking"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/leak-repair", "/es/servicios/reparacion-fugas")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Reparación de Fugas" : "Leak Repair"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/pool-leak-repair", "/es/servicios/reparacion-fugas-piscinas")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Reparación Fugas Piscinas" : "Pool Leak Repair"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/underground-detection", "/es/servicios/deteccion-subterranea")} 
                    className="cursor-pointer font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Detección Subterránea" : "Underground Location"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="https://canary-detect-coatings.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer font-semibold text-accent hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-2 py-2.5"
                  >
                    {t('navigation.poolCoatings')}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Villa & Pool Leaks Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="group flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md bg-accent text-white hover:bg-accent/90"
                >
                  <Waves className="h-4 w-4" />
                  {t('navigation.villaPoolLeaks')}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-background border border-border shadow-xl rounded-xl p-2 min-w-[220px]"
                align="center"
              >
                <DropdownMenuItem asChild>
                  <a 
                    href="https://leakguardlanzarote.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer font-medium hover:bg-accent/10 hover:text-accent rounded-lg transition-colors flex items-center gap-2 py-2.5"
                  >
                    {isSpanish ? "Monitoreo de Fugas" : "Water Leak Monitoring"}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    className="cursor-pointer font-medium hover:bg-accent/10 hover:text-accent rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    className="cursor-pointer font-medium hover:bg-accent/10 hover:text-accent rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Inspección de Villas" : "Villa Leak Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/pool-leak-detection", "/es/servicios/deteccion-fugas-piscinas")} 
                    className="cursor-pointer font-medium hover:bg-accent/10 hover:text-accent rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Inspección de Piscinas" : "Pool Leak Surveys"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")} 
                    className="cursor-pointer font-semibold text-primary hover:bg-primary/10 rounded-lg transition-colors py-2.5"
                  >
                    {isSpanish ? "Test Confirmación Gratis" : "Free Leak Confirmation"}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Divider */}
            <div className="h-8 w-px bg-border mx-1" />

            {/* Spot The Leak Game */}
            <a 
              href="https://leak-detective.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary"
            >
              <Gamepad2 className="h-4 w-4" />
              {t('navigation.spotTheLeakGame')}
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>

            {/* Free Test CTA */}
            <Link to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")}>
              <button className="flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                <TestTube className="h-4 w-4" />
                {isSpanish ? "Test Gratis" : "Free Test"}
              </button>
            </Link>
            </div>

            {/* Empty spacer to balance the layout */}
            <div className="w-40 shrink-0" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {/* Language Switcher Mobile */}
              <div className="flex justify-center pb-3 border-b border-border mb-3">
                <LanguageSwitcher variant="mobile" />
              </div>

              {/* Services Section - Expandable */}
              <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between rounded-xl transition-all bg-primary/5 hover:bg-primary/10">
                  <span className="flex items-center gap-3 text-foreground font-bold">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-4 w-4 text-primary" />
                    </span>
                    {t('navigation.services')}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pr-2 py-2 space-y-1">
                  <Link 
                    to={getRoute("/services/drain-detection", "/es/servicios/deteccion-desagues")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Inspección de Desagües" : "Drain & Pipe Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/drain-unblocking", "/es/servicios/desbloqueo-desagues")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Desbloqueo de Desagües" : "Drain Unblocking"}
                  </Link>
                  <Link 
                    to={getRoute("/services/leak-repair", "/es/servicios/reparacion-fugas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Reparación de Fugas" : "Leak Repair"}
                  </Link>
                  <Link 
                    to={getRoute("/services/pool-leak-repair", "/es/servicios/reparacion-fugas-piscinas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Reparación Fugas Piscinas" : "Pool Leak Repair"}
                  </Link>
                  <Link 
                    to={getRoute("/services/underground-detection", "/es/servicios/deteccion-subterranea")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary/60" />
                    {isSpanish ? "Detección Subterránea" : "Underground Location"}
                  </Link>
                  <a 
                    href="https://canary-detect-coatings.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-accent font-semibold hover:bg-accent/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-accent" />
                    {t('navigation.poolCoatings')}
                    <ExternalLink className="h-3 w-3 opacity-60 ml-auto" />
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Villa & Pool Leaks Section - Expandable */}
              <Collapsible open={villaPoolOpen} onOpenChange={setVillaPoolOpen}>
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between rounded-xl transition-all bg-accent/5 hover:bg-accent/10">
                  <span className="flex items-center gap-3 text-foreground font-bold">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Waves className="h-4 w-4 text-accent" />
                    </span>
                    {t('navigation.villaPoolLeaks')}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-accent transition-transform duration-200 ${villaPoolOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pr-2 py-2 space-y-1">
                  <a 
                    href="https://leakguardlanzarote.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-accent/60" />
                    {isSpanish ? "Monitoreo de Fugas" : "Water Leak Monitoring"}
                    <ExternalLink className="h-3 w-3 opacity-60 ml-auto" />
                  </a>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-accent/60" />
                    {isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection"}
                  </Link>
                  <Link 
                    to={getRoute("/services/water-leak-detection", "/es/servicios/deteccion-fugas-agua")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-accent/60" />
                    {isSpanish ? "Inspección de Villas" : "Villa Leak Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/pool-leak-detection", "/es/servicios/deteccion-fugas-piscinas")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-foreground/80 font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-accent/60" />
                    {isSpanish ? "Inspección de Piscinas" : "Pool Leak Surveys"}
                  </Link>
                  <Link 
                    to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {isSpanish ? "Test Confirmación Gratis" : "Free Leak Confirmation"}
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <div className="h-px bg-border my-3" />
              
              {/* Primary Links */}
              <Link 
                to={getRoute("/", "/es")} 
                className="px-4 py-3 text-foreground font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to={getRoute("/technology", "/es/tecnologia")} 
                className="px-4 py-3 text-foreground font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.technology')}
              </Link>
              <Link 
                to={getRoute("/case-studies", "/es/casos-de-exito")} 
                className="px-4 py-3 text-foreground font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.caseStudies')}
              </Link>
              <Link 
                to={getRoute("/about", "/es/sobre-nosotros")} 
                className="px-4 py-3 text-foreground font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                to={getRoute("/blog", "/es/blog")} 
                className="px-4 py-3 text-foreground font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="h-px bg-border my-3" />

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 px-2">
                <Link 
                  to={getRoute("/contact", "/es/contacto")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button 
                    size="lg"
                    className="w-full justify-center bg-primary hover:bg-primary/90 text-white font-bold gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    {t('navigation.contact')}
                  </Button>
                </Link>
                <Link 
                  to={getRoute("/services/free-leak-confirmation", "/es/servicios/confirmacion-fugas-gratis")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full justify-center gap-2 border-2 border-accent text-accent font-bold hover:bg-accent hover:text-white"
                  >
                    <TestTube className="h-4 w-4" />
                    {isSpanish ? "Test Gratis" : "Free Test"}
                  </Button>
                </Link>
                <a 
                  href="https://leak-detective.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="w-full justify-center gap-2 text-foreground/70 font-medium"
                  >
                    <Gamepad2 className="h-4 w-4" />
                    {t('navigation.spotTheLeakGame')}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
