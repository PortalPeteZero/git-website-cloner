import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import contactHero from "@/assets/hero/contact-hero.jpg";
import SEOHead from "@/components/seo/SEOHead";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { t, isSpanish } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => phone === "" || /^[\d\s+()-]{7,}$/.test(phone);

  const getFieldError = (field: string) => {
    if (!touched[field]) return null;
    if (field === "name" && formData.name.trim().length < 2) return t('forms.errors.nameRequired');
    if (field === "email" && !validateEmail(formData.email)) return t('forms.errors.emailRequired');
    if (field === "phone" && !validatePhone(formData.phone)) return t('forms.errors.phoneInvalid');
    if (field === "message" && formData.message.trim().length < 10) return t('forms.errors.messageMin');
    return null;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    
    if (getFieldError("name") || getFieldError("email") || getFieldError("message")) return;
    
    setIsSubmitting(true);
    
    try {
      // Get service label for the email
      const selectedService = serviceOptions.find(opt => opt.value === formData.service);
      const serviceLabel = selectedService?.label || "Not specified";
      
      const { data, error } = await supabase.functions.invoke('send-leak-enquiry', {
        body: {
          name: formData.name,
          phone: formData.phone || "Not provided",
          email: formData.email,
          address: `Service: ${serviceLabel}`,
          message: formData.message,
          enquiryType: "Full Leak Survey Request" as const,
        },
      });

      if (error) {
        console.error("Edge function error:", error);
        throw new Error(error.message || "Failed to send message");
      }

      console.log("Contact form submitted successfully:", data);
      setSubmitStatus("success");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        setTouched({});
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (field: string) => {
    const error = getFieldError(field);
    const value = formData[field as keyof typeof formData];
    const base = "w-full bg-background border-2 rounded-md px-4 py-3 text-base transition-all duration-200 focus:outline-none";
    
    if (error) return `${base} border-destructive ring-4 ring-destructive/10 focus:border-destructive`;
    if (touched[field] && value) return `${base} border-green-500 bg-green-500/5 focus:border-green-500 focus:ring-4 focus:ring-green-500/10`;
    return `${base} border-input hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10`;
  };

  const serviceOptions = isSpanish ? [
    { value: "", label: "Seleccione un servicio..." },
    { value: "drain-detection", label: "Detección de Desagües" },
    { value: "pipe-inspection", label: "Inspección de Tuberías" },
    { value: "underground-detection", label: "Detección Subterránea" },
    { value: "water-leak", label: "Detección de Fugas de Agua" },
    { value: "pool-leak", label: "Detección de Fugas de Piscinas" },
    { value: "leak-repair", label: "Reparación de Fugas" },
    { value: "other", label: "Otro" },
  ] : [
    { value: "", label: "Select a service..." },
    { value: "drain-detection", label: "Drain Detection" },
    { value: "pipe-inspection", label: "Pipe Inspection" },
    { value: "underground-detection", label: "Underground Detection" },
    { value: "water-leak", label: "Water Leak Detection" },
    { value: "pool-leak", label: "Pool Leak Detection" },
    { value: "leak-repair", label: "Leak Repair" },
    { value: "other", label: "Other" },
  ];

  return (
    <Layout>
      <SEOHead 
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
        keywords={t('meta.contact.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es/contacto" : "https://canary-detect.com/contact"}
      />
      <LocalBusinessSchema page="contact" />
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHero} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {t('contact.heroSubtitle')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {t('contact.heroTitle')} <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{t('contact.heroTitleHighlight')}</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {t('contact.heroDescription')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {t('contact.sendMessage')}
              </h2>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-medium">{t('forms.messageSentSuccess')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">{t('forms.yourName')}</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onBlur={() => handleBlur("name")}
                      placeholder={t('forms.placeholders.name')} 
                      className={getInputClassName("name")}
                    />
                    {getFieldError("name") && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {getFieldError("name")}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">{t('forms.phoneNumber')}</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onBlur={() => handleBlur("phone")}
                      placeholder={t('forms.placeholders.phone')} 
                      className={getInputClassName("phone")}
                    />
                    {getFieldError("phone") && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {getFieldError("phone")}
                      </motion.p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">{t('forms.email')}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={() => handleBlur("email")}
                    placeholder={t('forms.placeholders.email')} 
                    className={getInputClassName("email")}
                  />
                  {getFieldError("email") && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {getFieldError("email")}
                    </motion.p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-foreground">{t('forms.serviceRequired')}</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-12 w-full rounded-md border-2 border-input bg-background px-4 py-3 text-base appearance-none cursor-pointer transition-all duration-200 hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23f97316%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">{t('forms.yourMessage')}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onBlur={() => handleBlur("message")}
                    placeholder={t('forms.placeholders.message')}
                    rows={5}
                    className={`${getInputClassName("message")} min-h-[120px] resize-y`}
                  />
                  {getFieldError("message") && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {getFieldError("message")}
                    </motion.p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`min-w-[160px] ${
                    submitStatus === "success" 
                      ? "bg-green-500 hover:bg-green-500" 
                      : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('forms.sending')}
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      {t('forms.sent')}
                    </>
                  ) : (
                    t('forms.sendMessage')
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {t('contact.contactInfo')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-none">
                {t('contact.contactDescription')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.phone')}</h3>
                    <a href="tel:+34711051071" className="text-muted-foreground hover:text-primary transition-colors">
                      +34 711 051 071
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.email')}</h3>
                    <a href="mailto:info@canary-detect.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@canary-detect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.office')}</h3>
                    <p className="text-muted-foreground">
                      Zona Industrial, 1<br />
                      35580 Playa Blanca, Lanzarote
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 whitespace-pre-line">
                      {t('contact.servingAreas')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t('contact.hoursText')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map - Playa Blanca Office */}
              <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d-13.8267!3d28.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc462a0e0e0e0e0e%3A0x0!2sZona%20Industrial%2C%20Playa%20Blanca!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isSpanish ? "Oficina Canary Detect - Playa Blanca, Lanzarote" : "Canary Detect Office - Playa Blanca, Lanzarote"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
