import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-canary-dark text-canary-white py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a 
            href="tel:+34711051071" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+34 711 051 071</span>
          </a>
          <a 
            href="mailto:info@canary-detect.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@canary-detect.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
