import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TopBar = () => {
  const { isSpanish } = useLanguage();

  return (
    <div className="bg-canary-dark text-canary-white py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
        <div className="flex items-center gap-6">
          <a 
            href="mailto:info@canary-detect.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@canary-detect.com</span>
          </a>
        </div>

        {/* Prominent Call CTA */}
        <a
          href="tel:+34911985705"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-[0.97]"
        >
          <Phone className="h-4 w-4 animate-pulse" />
          <span>{isSpanish ? "Llámenos:" : "Call Us:"} +34 911 98 57 05</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
