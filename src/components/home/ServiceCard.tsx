import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

const ServiceCard = ({ title, description, icon: Icon, href, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link 
        to={href}
        className="group block p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
      >
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center mt-4 text-primary font-medium text-sm group-hover:underline">
          Learn More →
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
