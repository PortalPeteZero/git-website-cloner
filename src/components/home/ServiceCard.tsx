import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 3000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link 
        to={href}
        className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden"
      >
        {images.length > 0 && (
          <div className="aspect-[16/10] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${title} ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-[1.03] transition-transform duration-500"
              />
            </AnimatePresence>
            
            {/* Subtle gradient overlay for smoother transition */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
            
            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-primary" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2 text-canary-navy group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          <span className="inline-flex items-center mt-4 text-primary font-semibold text-sm group-hover:underline">
            Learn More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
