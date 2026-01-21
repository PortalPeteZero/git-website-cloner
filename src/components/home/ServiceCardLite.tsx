import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ServiceCardLiteProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  imageAlt?: string;
}

const ServiceCardLite = ({ title, description, icon: Icon, href, image, imageAlt }: ServiceCardLiteProps) => {
  return (
    <div className="transition-transform duration-300 ease-out hover:-translate-y-1">
      <Link
        to={href}
        className="group block bg-white rounded-xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 ease-out overflow-hidden"
      >
        {image && (
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
          </div>
        )}

        <div className="p-6">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2 text-canary-navy group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCardLite;
