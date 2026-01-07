import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero/hero-banner.jpg";

const slides = [
  {
    id: 1,
    title: "Professional Leak Detection",
    subtitle: "Across the Canary Islands",
    description: "Using the latest technology to detect and locate leaks quickly and accurately, minimizing damage and repair costs.",
    cta: "Our Services",
    ctaLink: "/services",
  },
  {
    id: 2,
    title: "Expert Pool Leak Detection",
    subtitle: "Save Water, Save Money",
    description: "Specialist pool leak detection services using advanced acoustic and thermal imaging technology.",
    cta: "Learn More",
    ctaLink: "/services/pool-leak-detection",
  },
  {
    id: 3,
    title: "Underground Pipe Detection",
    subtitle: "Find Hidden Problems",
    description: "Advanced ground-penetrating radar and pipe locating equipment to find underground utilities and leaks.",
    cta: "Get a Quote",
    ctaLink: "/contact",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-canary-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-canary-dark/70" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-primary font-medium mb-2"
              >
                {slides[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-canary-white mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-canary-white/80 text-lg md:text-xl mb-8 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <Button size="lg" asChild>
                  <Link to={slides[currentSlide].ctaLink}>
                    {slides[currentSlide].cta}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-canary-white text-canary-white hover:bg-canary-white hover:text-canary-dark" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-canary-white/10 hover:bg-canary-white/20 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-canary-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-canary-white/10 hover:bg-canary-white/20 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-canary-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-canary-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
