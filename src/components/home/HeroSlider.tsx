import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero/hero-banner.jpg";

const HeroSlider = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Navy overlay - stronger on left, fading to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-canary-navy via-canary-navy/80 to-canary-navy/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Precision Leak Detection.
              <br />
              Peace of Mind.
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Professional leak detection using advanced equipment and non-invasive 
              methods—helping property owners find leaks fast and avoid costly damage.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
