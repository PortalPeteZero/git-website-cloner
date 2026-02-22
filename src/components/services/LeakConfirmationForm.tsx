import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";

const ODOO_ENQUIRY_URL = "https://camello-blanco-sl.odoo.com/en/enquiry";

export default function LeakConfirmationForm() {
  const { isSpanish } = useTranslation();

  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-canary-cyan/10 border-2 border-primary/50 p-5 md:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-primary font-bold text-xs uppercase tracking-widest">
            {isSpanish ? "Servicio Gratis" : "Free Service"}
          </p>
          <h3 className="font-heading text-lg font-bold text-canary-white">
            {isSpanish ? "Solicitar Test de Confirmación Gratis" : "Request Free Confirmation Test"}
          </h3>
        </div>
      </div>

      <p className="text-canary-white/90 text-sm leading-relaxed mb-4">
        {isSpanish 
          ? "Complete nuestro formulario de consulta en línea para solicitar su test de confirmación de fugas gratuito. Nos pondremos en contacto con usted lo antes posible."
          : "Fill out our online enquiry form to request your free leak confirmation test. We'll get back to you as soon as possible."}
      </p>

      <Button asChild size="lg" className="w-full shadow-lg group">
        <a href={ODOO_ENQUIRY_URL} target="_blank" rel="noopener noreferrer">
          <Sparkles className="h-4 w-4 mr-2" />
          {isSpanish ? "Ir al Formulario de Consulta" : "Go to Enquiry Form"}
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
      
      <p className="text-canary-white/60 text-xs mt-3 text-center">
        {isSpanish ? "Servicio gratis • Sin compromiso • Respuesta rápida" : "Free service • No obligation • Quick response"}
      </p>
    </div>
  );
}
