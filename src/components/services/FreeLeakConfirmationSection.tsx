import { BadgeCheck, CheckCircle2, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation.png";
import LeakConfirmationForm from "./LeakConfirmationForm";
import { useTranslation } from "@/i18n/LanguageContext";

type Props = {
  title: string;
  phone: string;
  email: string;
  includes: string[];
  importantNote: string;
  subNote: string;
};

export default function FreeLeakConfirmationSection({
  phone,
  email,
  includes,
  importantNote,
  subNote,
}: Props) {
  const { isSpanish } = useTranslation();
  
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-canary-navy to-slate-900 relative overflow-hidden">
      {/* Gradient orbs for depth */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-canary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        {/* Featured promo banner with glow effect */}
        <div className="mb-8 md:mb-10 relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-canary-cyan/20 to-primary/20 rounded-3xl blur-xl opacity-60" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={freeLeakConfirmationImg} 
              alt={isSpanish 
                ? "Test de Confirmación de Fugas Gratis - Nuevo 2026 - 95% de las fugas en Lanzarote están ocultas"
                : "Free Leak Confirmation Test - New for 2026 - 95% of Lanzarote leaks are hidden"}
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            {isSpanish ? "NUEVO SERVICIO 2026" : "NEW SERVICE FOR 2026"}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-canary-white leading-tight">
            {isSpanish ? "Test de Confirmación de Fugas Gratis" : "Free Leak Confirmation Tests"}
          </h2>
          <p className="text-canary-white/90 text-lg md:text-xl mt-3 font-light">
            {isSpanish ? "Sin más adivinanzas. Sin dinero malgastado. Sin letra pequeña." : "No more guessing. No wasted money. No catch."}
          </p>
        </header>

        {/* Main Grid - Now 3 columns on large screens */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-5">
            <p className="text-canary-white/90 text-base leading-relaxed">
              {isSpanish ? (
                <>Aquí en Lanzarote, <span className="text-primary font-semibold">el 95% de las fugas que tratamos están ocultas</span>—sin señales visibles, sin
                pistas obvias. Incluso fugas masivas en villas pueden pasar completamente desapercibidas durante semanas.</>
              ) : (
                <>Here in Lanzarote, <span className="text-primary font-semibold">95% of the leaks we deal with are hidden</span>—no visible signs, no
                obvious clues. Even massive leaks in villas can go completely unnoticed for weeks.</>
              )}
            </p>

            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <p className="text-orange-400 font-bold text-xs uppercase tracking-widest">
                {isSpanish ? "El problema antiguo" : "The old problem"}
              </p>
              <p className="text-canary-white/90 mt-3 text-sm leading-relaxed">
                {isSpanish 
                  ? "Sospecha que tiene una fuga. Reserva una inspección. Llegamos. Resulta que no hay fuga—solo un grifo goteando o una lectura errónea del contador. Ha pagado por tranquilidad, pero se siente como dinero malgastado."
                  : "You suspect a leak. You book a survey. We arrive. Turns out there's no leak—just a dripping tap or a meter misread. You've paid for peace of mind, but it feels like wasted money."}
              </p>
            </div>
            <div className="rounded-xl bg-primary/15 border border-primary/40 p-5">
              <p className="text-primary font-bold text-xs uppercase tracking-widest">
                {isSpanish ? "La nueva solución" : "The new solution"}
              </p>
              <p className="text-canary-white/90 mt-3 text-sm leading-relaxed">
                {isSpanish
                  ? "Antes de reservar una inspección completa, iremos a su propiedad para un test de confirmación de fugas gratis. Evaluaremos su sistema, comprobaremos lo básico, y le daremos un informe profesional—sin coste."
                  : "Before you book a full survey, we'll come to your property for a free leak confirmation test. We'll assess your system, check the basics, and give you a professional report—at no cost."}
              </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <p className="text-canary-cyan font-bold text-xs uppercase tracking-widest">
                {isSpanish ? "¿Qué ganamos nosotros?" : "What's in it for us?"}
              </p>
              <p className="text-canary-white/85 mt-3 text-sm leading-relaxed">
                {isSpanish
                  ? "Eficiencia. A menudo reservamos medios días para inspecciones, solo para descubrir al llegar que no hay fuga. De esta forma, llenamos nuestra agenda con fugas reales—todos ganamos."
                  : "Efficiency. We often reserve half-day slots for surveys, only to discover on arrival there's no leak. This way, we fill our schedule with genuine leaks—win-win."}
              </p>
            </div>
          </div>

          {/* Center - Form */}
          <div className="lg:col-span-1">
            <LeakConfirmationForm />
          </div>

          {/* Right Sidebar - What's Included */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-canary-cyan/10 border-2 border-canary-cyan/50 p-5 md:p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">
                    {isSpanish ? "Importante" : "Important"}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-canary-white">
                    {isSpanish ? "Qué incluye" : "What this includes"}
                  </h3>
                </div>
              </div>

              <p className="text-canary-white text-sm leading-relaxed">{importantNote}</p>
              <p className="text-canary-white/75 mt-2 text-sm leading-relaxed">{subNote}</p>

              <div className="mt-4">
                <h4 className="font-heading font-bold text-canary-white text-sm mb-2">
                  {isSpanish ? "Incluido" : "Included"}
                </h4>
                <ul className="space-y-1.5">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-canary-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-canary-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy"
                >
                  <a href={`tel:${phone}`}>{isSpanish ? "Llamar" : "Call"} {phone}</a>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-canary-white/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-canary-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-canary-white/60 text-sm">
          <span className="text-canary-white/80 font-medium">{isSpanish ? "Nota:" : "Note:"}</span> {isSpanish 
            ? "Esta es una visita y informe de confirmación — no una inspección de localización."
            : "This is a confirmation visit and report — not a pinpointing survey."}
        </p>
      </div>
    </section>
  );
}
