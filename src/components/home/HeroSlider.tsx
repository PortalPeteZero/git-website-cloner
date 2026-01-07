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
    title: "Precision Leak Detection.",
    subtitle: "Peace of Mind.",
    description: "Professional leak detection using advanced equipment and non-invasive methods—helping property owners find leaks fast and avoid costly damage."
  },
  {
    image: photo2,
    title: "Expert Pool Leak Detection.",
    subtitle: "Save Water & Money.",
    description: "Specialized pool and spa leak detection services using state-of-the-art technology to pinpoint leaks without destructive excavation."
  },
  {
    image: photo3,
    title: "Underground Pipe Detection.",
    subtitle: "Find Hidden Problems.",
    description: "Advanced underground utility detection and pipe locating services to identify buried infrastructure quickly and accurately."
  },
  {
    image: photo4,
    title: "CCTV Pipe Inspections.",
    subtitle: "See Inside Your Pipes.",
    description: "High-definition camera inspections reveal blockages, cracks, and damage inside your drainage and sewer systems."
  },
  {
    image: photo5,
    title: "Thermal Imaging Services.",
    subtitle: "Detect the Invisible.",
    description: "Infrared thermal imaging technology to detect hidden water leaks, moisture, and temperature anomalies behind walls and floors."
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
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Images with Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img 
            src={slide.image} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navy overlay - stronger on left, fading to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-canary-navy via-canary-navy/80 to-canary-navy/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide 
                ? "bg-primary w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
