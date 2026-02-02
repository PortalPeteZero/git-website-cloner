import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

// CRITICAL: Import FIRST hero image eagerly for LCP - with responsive variants
import hqScene from "@/assets/hero/carousel-hq-scene.jpg";
// Mobile-optimized: smaller width for faster mobile LCP
import hqSceneMobile from "@/assets/hero/carousel-hq-scene.jpg?w=800&format=webp&quality=75";
import hqSceneTablet from "@/assets/hero/carousel-hq-scene.jpg?w=1200&format=webp&quality=80";
import hqSceneDesktop from "@/assets/hero/carousel-hq-scene.jpg?w=1920&format=webp&quality=85";

// Slide content data (text only - images loaded separately)
const getHeroSlidesData = (lazyImages: string[]) => ({
  en: [
    {
      image: hqScene,
      imageMobile: hqSceneMobile,
      imageTablet: hqSceneTablet,
      imageDesktop: hqSceneDesktop,
      alt: "Canary Detect - The Leaky Finders headquarters with technicians and van in Lanzarote",
      title: "The Leaky Finders.",
      subtitle: "No Find, No Fee.",
      description: "Professional water leak detection and swimming pool leak detection across Lanzarote. Using €80,000+ specialist equipment including thermal imaging, acoustic sensors and tracer gas technology.",
      subtext: "Is your pool losing water? Water meter running? Damp walls? We find and fix leaks fast."
    },
    {
      image: lazyImages[0] || hqScene,
      alt: "The Leaky Finders at villa terrace with pool in Lanzarote",
      title: "Villa & Pool Specialists.",
      subtitle: "The Leaky Finders.",
      description: "Our trained technicians use advanced acoustic equipment and thermal imaging to detect hidden leaks at your villa or pool area without unnecessary damage.",
      subtext: ""
    },
    {
      image: lazyImages[1] || hqScene,
      alt: "Leak detection equipment and technician Lanzarote",
      title: "Advanced Technology.",
      subtitle: "Precision Detection.",
      description: "€80,000+ worth of specialist equipment including thermal imaging cameras, acoustic sensors and tracer gas technology for pinpoint accuracy.",
      subtext: ""
    },
    {
      image: lazyImages[2] || hqScene,
      alt: "Swimming pool leak detection Playa Blanca Lanzarote",
      title: "Swimming Pool Leak Detection.",
      subtitle: "Pool Losing Water?",
      description: "Is your swimming pool losing water every day? Constant refilling? We don't just confirm leaks—we pinpoint the exact location using pressure testing, acoustic detection and CCTV inspection.",
      subtext: ""
    },
    {
      image: lazyImages[3] || hqScene,
      alt: "Underground pipe detection using ground-penetrating radar",
      title: "Underground Leak Detection.",
      subtitle: "Find Water Leaks Fast.",
      description: "Need to find buried pipes before digging? Underground water leak detection in Lanzarote. Find hidden leaks beneath floors, gardens and driveways with centimetre accuracy.",
      subtext: ""
    },
    {
      image: lazyImages[4] || hqScene,
      alt: "Thermal imaging camera detecting hidden water leak",
      title: "Water Pipe Leak Detection.",
      subtitle: "Hidden Leak Specialists.",
      description: "Damp walls? High water bills? Meter running when taps are off? Find hidden water leaks in walls, floors and ceilings with thermal imaging, tracer gas and acoustic technology.",
      subtext: ""
    },
    {
      image: lazyImages[5] || hqScene,
      alt: "Professional leak repair service Lanzarote",
      title: "Leak Repair Lanzarote.",
      subtitle: "Detection to Repair.",
      description: "Found a leak? We'll fix it fast. Complete leak detection and repair service. Water pipe leak repair, swimming pool pipe leak repair and underground leak repair across Lanzarote.",
      subtext: ""
    }
  ],
  es: [
    {
      image: hqScene,
      imageMobile: hqSceneMobile,
      imageTablet: hqSceneTablet,
      imageDesktop: hqSceneDesktop,
      alt: "Canary Detect - Los Cazafugas sede con técnicos y furgoneta en Lanzarote",
      title: "Los Cazafugas.",
      subtitle: "Sin Encontrar, Sin Pagar.",
      description: "Detección profesional de fugas de agua y piscinas en toda Lanzarote. Con más de €80.000 en equipos especializados incluyendo cámaras térmicas, sensores acústicos y tecnología de gas trazador.",
      subtext: "¿Su piscina pierde agua? ¿Contador corriendo? ¿Paredes húmedas? Encontramos y reparamos fugas rápidamente."
    },
    {
      image: lazyImages[0] || hqScene,
      alt: "Los Cazafugas en terraza de villa con piscina en Lanzarote",
      title: "Especialistas en Villas y Piscinas.",
      subtitle: "Los Cazafugas.",
      description: "Nuestros técnicos cualificados utilizan equipos acústicos avanzados e imágenes térmicas para detectar fugas ocultas en su villa o área de piscina sin daños innecesarios.",
      subtext: ""
    },
    {
      image: lazyImages[1] || hqScene,
      alt: "Equipo de detección de fugas y técnico en Lanzarote",
      title: "Tecnología Avanzada.",
      subtitle: "Detección de Precisión.",
      description: "Más de €80.000 en equipos especializados incluyendo cámaras térmicas, sensores acústicos y tecnología de gas trazador para precisión al centímetro.",
      subtext: ""
    },
    {
      image: lazyImages[2] || hqScene,
      alt: "Detección de fugas de piscina Playa Blanca Lanzarote",
      title: "Detección de Fugas de Piscinas.",
      subtitle: "¿Su Piscina Pierde Agua?",
      description: "¿Su piscina pierde agua cada día? ¿Rellenado constante? No solo confirmamos las fugas, localizamos la posición exacta usando pruebas de presión, detección acústica e inspección CCTV.",
      subtext: ""
    },
    {
      image: lazyImages[3] || hqScene,
      alt: "Detección de tuberías subterráneas usando radar de penetración terrestre",
      title: "Detección de Fugas Subterráneas.",
      subtitle: "Encuentre Fugas de Agua Rápido.",
      description: "¿Necesita encontrar tuberías enterradas antes de excavar? Detección de fugas de agua subterráneas en Lanzarote. Encuentre fugas ocultas bajo suelos, jardines y caminos con precisión centimétrica.",
      subtext: ""
    },
    {
      image: lazyImages[4] || hqScene,
      alt: "Cámara de imagen térmica detectando fuga de agua oculta",
      title: "Detección de Fugas de Tuberías de Agua.",
      subtitle: "Especialistas en Fugas Ocultas.",
      description: "¿Paredes húmedas? ¿Facturas de agua altas? ¿Contador corriendo con los grifos cerrados? Encuentre fugas de agua ocultas en paredes, suelos y techos con imágenes térmicas, gas trazador y tecnología acústica.",
      subtext: ""
    },
    {
      image: lazyImages[5] || hqScene,
      alt: "Servicio profesional de reparación de fugas Lanzarote",
      title: "Reparación de Fugas Lanzarote.",
      subtitle: "De la Detección a la Reparación.",
      description: "¿Ha encontrado una fuga? La reparamos rápidamente. Servicio completo de detección y reparación de fugas. Reparación de fugas de tuberías de agua, reparación de fugas de piscinas y reparación de fugas subterráneas en toda Lanzarote.",
      subtext: ""
    }
  ]
});

// Memoized hero image component with responsive srcset for LCP optimization
const HeroImage = memo(({ 
  src, 
  srcMobile, 
  srcTablet, 
  srcDesktop, 
  alt, 
  isFirst 
}: { 
  src: string; 
  srcMobile?: string;
  srcTablet?: string;
  srcDesktop?: string;
  alt: string; 
  isFirst: boolean;
}) => {
  // For first slide, use picture element with responsive sources
  if (isFirst && srcMobile && srcTablet && srcDesktop) {
    return (
      <picture>
        {/* Mobile: up to 640px - smallest, fastest loading */}
        <source 
          media="(max-width: 640px)" 
          srcSet={srcMobile}
          type="image/webp"
        />
        {/* Tablet: 641px to 1024px */}
        <source 
          media="(max-width: 1024px)" 
          srcSet={srcTablet}
          type="image/webp"
        />
        {/* Desktop: 1025px and up */}
        <source 
          media="(min-width: 1025px)" 
          srcSet={srcDesktop}
          type="image/webp"
        />
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          sizes="100vw"
        />
      </picture>
    );
  }

  // For non-first slides, use simple img tag with lazy loading
  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
      fetchPriority="low"
      loading="lazy"
      decoding="async"
      sizes="100vw"
    />
  );
});

HeroImage.displayName = "HeroImage";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lazyImages, setLazyImages] = useState<string[]>([]);
  const { isSpanish } = useLanguage();
  
  // Load additional images after first paint (LCP optimization)
  useEffect(() => {
    // Delay loading non-critical images to prioritize LCP
    const loadTimer = setTimeout(async () => {
      try {
        const [
          terraceModule,
          photo1Module,
          photo2Module,
          photo3Module,
          photo4Module,
          photo5Module
        ] = await Promise.all([
          import("@/assets/hero/carousel-terrace.jpg"),
          import("@/assets/gallery/photo-1.jpg"),
          import("@/assets/gallery/photo-2.jpg"),
          import("@/assets/gallery/photo-3.jpg"),
          import("@/assets/gallery/photo-4.jpg"),
          import("@/assets/gallery/photo-5.jpg"),
        ]);
        
        setLazyImages([
          terraceModule.default,
          photo1Module.default,
          photo2Module.default,
          photo3Module.default,
          photo4Module.default,
          photo5Module.default,
        ]);
      } catch (error) {
        console.warn("Failed to load hero images:", error);
      }
    }, 1500); // Delay loading to prioritize first paint
    
    return () => clearTimeout(loadTimer);
  }, []);
  
  const heroSlidesData = getHeroSlidesData(lazyImages);
  const heroSlides = isSpanish ? heroSlidesData.es : heroSlidesData.en;

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSlideChange = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const slide = heroSlides[currentSlide];
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden">
      {/* Background Images with Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <HeroImage 
            src={slide.image} 
            srcMobile={'imageMobile' in slide ? slide.imageMobile : undefined}
            srcTablet={'imageTablet' in slide ? slide.imageTablet : undefined}
            srcDesktop={'imageDesktop' in slide ? slide.imageDesktop : undefined}
            alt={slide.alt}
            isFirst={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced gradient overlay for better text contrast - WCAG AA compliant */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.3)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-start pt-16 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {isSpanish ? "Detección de Fugas Lanzarote e Islas Canarias" : "Leak Detection Lanzarote & Canary Islands"}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  {slide.title}
                  <br />
                  <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{slide.subtitle}</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to={getRoute("/contact", "/es/contacto")}>
                  {isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote"}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-canary-navy px-8 py-6 text-lg backdrop-blur-sm shadow-lg" asChild>
                <Link to={getRoute("/services", "/es/servicios")}>
                  {isSpanish ? "Nuestros Servicios" : "Our Services"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Enhanced */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideChange(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentSlide 
                ? "bg-primary w-12" 
                : "bg-white/40 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default memo(HeroSlider);
