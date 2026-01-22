import { useState } from "react";
import { CheckCircle2, Send, ArrowRight, FileSearch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function LeakConfirmationForm() {
  const { toast } = useToast();
  const { isSpanish } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: isSpanish ? "Información Faltante" : "Missing Information",
        description: isSpanish 
          ? "Por favor, complete su nombre, teléfono y email."
          : "Please fill in your name, phone, and email.",
        variant: "destructive",
      });
      return;
    }
    
    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  const submitForm = async (enquiryType: "Free Leak Test Enquiry" | "Full Leak Survey Request") => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", { ...formData, enquiryType });
    
    const enquiryTypeDisplay = isSpanish 
      ? (enquiryType === "Free Leak Test Enquiry" ? "Solicitud de Test Gratis" : "Solicitud de Inspección Completa")
      : enquiryType;
    
    toast({
      title: isSpanish ? "¡Solicitud Enviada!" : "Request Sent!",
      description: isSpanish 
        ? `Su ${enquiryTypeDisplay} ha sido enviada. Nos pondremos en contacto pronto.`
        : `Your ${enquiryType} has been submitted. We'll be in touch soon.`,
    });
    
    setFormData({ name: "", phone: "", email: "", address: "", message: "" });
    setShowConfirmDialog(false);
    setIsSubmitting(false);
  };

  const includesList = isSpanish ? [
    "Test de confirmación de fugas GRATIS",
    "Informe básico si es necesario",
    "Evaluación experta de su propiedad",
    "Consulta sin compromiso",
  ] : [
    "FREE leak confirmation test",
    "Basic report if required",
    "Expert assessment of your property",
    "No obligation consultation",
  ];

  return (
    <>
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            name="name"
            placeholder={isSpanish ? "Su Nombre *" : "Your Name *"}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
          />
          <Input
            name="phone"
            type="tel"
            placeholder={isSpanish ? "Teléfono *" : "Phone Number *"}
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
          />
          <Input
            name="email"
            type="email"
            placeholder={isSpanish ? "Email *" : "Email Address *"}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
          />
          <Input
            name="address"
            placeholder={isSpanish ? "Dirección de la Propiedad" : "Property Address"}
            value={formData.address}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
          />
          <Textarea
            name="message"
            placeholder={isSpanish ? "Describa brevemente su problema..." : "Briefly describe your concern..."}
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary resize-none"
          />
          
          <Button type="submit" size="lg" className="w-full shadow-lg group">
            <Send className="h-4 w-4 mr-2" />
            {isSpanish ? "Enviar Solicitud" : "Submit Request"}
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
        
        <p className="text-canary-white/60 text-xs mt-3 text-center">
          {isSpanish ? "Servicio gratis • Sin compromiso • Respuesta rápida" : "Free service • No obligation • Quick response"}
        </p>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-lg bg-canary-navy border-white/20">
          <DialogHeader>
            <DialogTitle className="text-canary-white text-xl font-heading flex items-center gap-2">
              <FileSearch className="h-5 w-5 text-primary" />
              {isSpanish ? "Por Favor Confirme Su Solicitud" : "Please Confirm Your Request"}
            </DialogTitle>
            <DialogDescription className="text-canary-white/80 text-base pt-2">
              {isSpanish ? "Usted entiende que..." : "You understand that..."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="rounded-xl bg-orange-500/10 border border-orange-500/30 p-4">
              <p className="text-canary-white text-sm leading-relaxed">
                {isSpanish ? (
                  <>Este servicio es para <span className="text-orange-400 font-semibold">CONFIRMAR si tiene una fuga o no</span>, 
                  con un informe detallado. <span className="text-orange-400 font-semibold">NO</span> es una inspección para localizar la posición exacta.</>
                ) : (
                  <>This service is to <span className="text-orange-400 font-semibold">CONFIRM if you have a leak or not</span>, 
                  with a detailed report. It is <span className="text-orange-400 font-semibold">NOT</span> a leak survey to pinpoint the exact location.</>
                )}
              </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <h4 className="font-heading font-bold text-canary-white text-sm mb-3">
                {isSpanish ? "Incluido:" : "Included:"}
              </h4>
              <ul className="space-y-2">
                {includesList.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-canary-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-canary-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-canary-white/80 text-sm text-center">
                {isSpanish 
                  ? "Si ya sabe que tiene una fuga y necesita una inspección para localizarla:"
                  : "If you already know you have a leak and need a survey to pinpoint it:"}
              </p>
              
              <Button
                onClick={() => submitForm("Full Leak Survey Request")}
                disabled={isSubmitting}
                variant="secondary"
                className="w-full bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy"
              >
                <FileSearch className="h-4 w-4 mr-2" />
                {isSubmitting 
                  ? (isSpanish ? "Enviando..." : "Sending...") 
                  : (isSpanish ? "Enviar Solicitud de Inspección Completa" : "Send a Survey Booking Request")}
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-canary-white/60 text-xs uppercase tracking-wider">{isSpanish ? "o" : "or"}</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              <Button
                onClick={() => submitForm("Free Leak Test Enquiry")}
                disabled={isSubmitting}
                size="lg"
                className="w-full shadow-lg"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {isSubmitting 
                  ? (isSpanish ? "Enviando..." : "Sending...") 
                  : (isSpanish ? "Continuar con Test de Confirmación Gratis" : "Proceed with Free Leak Confirmation Test")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
