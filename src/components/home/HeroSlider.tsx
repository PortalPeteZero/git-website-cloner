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

const heroSlides = [
  {
    image: photo1,
    title: "Leak Detection Lanzarote.",
    subtitle: "No Find, No Fee.",
    description: "Professional water leak detection and pool leak detection across Lanzarote. Using €80,000+ specialist equipment including thermal imaging, acoustic sensors and tracer gas technology."
  },
  {
    image: photo2,
    title: "Pool Leak Detection.",
    subtitle: "Pool Losing Water?",
    description: "Swimming pool leak detection specialists in Lanzarote. We don't just confirm leaks—we pinpoint the exact location using pressure testing, acoustic detection and CCTV inspection."
  },
  {
    image: photo3,
    title: "Underground Leak Detection.",
    subtitle: "Find Water Leaks Fast.",
    description: "Underground water leak detection in Lanzarote. Find hidden leaks beneath floors, gardens and driveways with centimetre accuracy using ground-penetrating radar."
  },
  {
    image: photo4,
    title: "Water Pipe Leak Detection.",
    subtitle: "Hidden Leak Specialists.",
    description: "Hidden water leak detection throughout the Canary Islands. Is your water meter running? We'll find the leak with thermal imaging, tracer gas and acoustic technology."
  },
  {
    image: photo5,
    title: "Leak Repair Lanzarote.",
    subtitle: "Detection to Repair.",
    description: "Complete leak detection and repair service. Water pipe leak repair, pool pipe leak repair and underground leak repair. Emergency leak repair available across Lanzarote."
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden">
      {/* Background Images with Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slide.image} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Refined gradient overlay - less dark, more visible image */}
      <div className="absolute inset-0 bg-gradient-to-r from-canary-navy/95 via-canary-navy/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-canary-navy/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
                >
                  Leak Detection Lanzarote &amp; Canary Islands
                </motion.span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                  {slide.title}
                  <br />
                  <span className="text-primary">{slide.subtitle}</span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm" asChild>
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
