import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  images?: string[];
  index?: number;
}

const ServiceCard = ({ title, description, icon: Icon, href, images = [], index = 0 }: ServiceCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Slower for better performance
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link 
        to={href}
        className="group block bg-white rounded-xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden"
      >
        {images.length > 0 && (
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={images[currentImageIndex]}
              alt={`${title} ${currentImageIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 transition-opacity"
              loading="lazy"
              decoding="async"
            />
            
            {/* Subtle gradient overlay for smoother transition */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
            
            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "bg-primary w-4" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2 text-canary-navy group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          <span className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
            Learn More 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
