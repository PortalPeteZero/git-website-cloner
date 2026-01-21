import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import hero images from gallery
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import hqScene from "@/assets/hero/carousel-hq-scene.jpg";
import terraceScene from "@/assets/hero/carousel-terrace.jpg";

const heroSlides = [
  {
    image: hqScene,
    alt: "Canary Detect - The Leaky Finders headquarters with technicians and van in Lanzarote",
    title: "The Leaky Finders.",
    subtitle: "No Find, No Fee.",
    description: "Professional water leak detection and swimming pool leak detection across Lanzarote. Using €80,000+ specialist equipment including thermal imaging, acoustic sensors and tracer gas technology.",
    subtext: "Is your pool losing water? Water meter running? Damp walls? We find and fix leaks fast."
  },
  {
    image: terraceScene,
    alt: "The Leaky Finders at villa terrace with pool in Lanzarote",
    title: "Villa & Pool Specialists.",
    subtitle: "The Leaky Finders.",
    description: "Our trained technicians use advanced acoustic equipment and thermal imaging to detect hidden leaks at your villa or pool area without unnecessary damage.",
    subtext: ""
  },
  {
    image: photo1,
    alt: "Leak detection equipment and technician Lanzarote",
    title: "Advanced Technology.",
    subtitle: "Precision Detection.",
    description: "€80,000+ worth of specialist equipment including thermal imaging cameras, acoustic sensors and tracer gas technology for pinpoint accuracy.",
    subtext: ""
  },
  {
    image: photo2,
    alt: "Swimming pool leak detection Playa Blanca Lanzarote",
    title: "Swimming Pool Leak Detection.",
    subtitle: "Pool Losing Water?",
    description: "Is your swimming pool losing water every day? Constant refilling? We don't just confirm leaks—we pinpoint the exact location using pressure testing, acoustic detection and CCTV inspection.",
    subtext: ""
  },
  {
    image: photo3,
    alt: "Underground pipe detection using ground-penetrating radar",
    title: "Underground Leak Detection.",
    subtitle: "Find Water Leaks Fast.",
    description: "Need to find buried pipes before digging? Underground water leak detection in Lanzarote. Find hidden leaks beneath floors, gardens and driveways with centimetre accuracy.",
    subtext: ""
  },
  {
    image: photo4,
    alt: "Thermal imaging camera detecting hidden water leak",
    title: "Water Pipe Leak Detection.",
    subtitle: "Hidden Leak Specialists.",
    description: "Damp walls? High water bills? Meter running when taps are off? Find hidden water leaks in walls, floors and ceilings with thermal imaging, tracer gas and acoustic technology.",
    subtext: ""
  },
  {
    image: photo5,
    alt: "Professional leak repair service Lanzarote",
    title: "Leak Repair Lanzarote.",
    subtitle: "Detection to Repair.",
    description: "Found a leak? We'll fix it fast. Complete leak detection and repair service. Water pipe leak repair, swimming pool pipe leak repair and underground leak repair across Lanzarote.",
    subtext: ""
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000); // Slower transitions for better performance
    
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

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
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced gradient overlay for better text contrast - WCAG AA compliant */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.3)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
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
                  Leak Detection Lanzarote &amp; Canary Islands
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  {slide.title}
                  <br />
                  <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{slide.subtitle}</span>
                </h1>
                <p className="text-slate-100 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-canary-navy px-8 py-6 text-lg backdrop-blur-sm shadow-lg" asChild>
                <Link to="/services">Our Services</Link>
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
            onClick={() => setCurrentSlide(idx)}
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

export default HeroSlider;
