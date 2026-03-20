import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { fontaneroLocations } from "@/data/fontaneroLocationsData";
import { Phone, Wrench, ShieldCheck, Clock, Droplets, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/hero/services-hero.jpg?w=1920";

const FontaneroLocationPage = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  // Extract location slug from path like /es/fontanero-tinajo → tinajo
  const locationSlug = pathname.replace("/es/fontanero-", "");
  const data = fontaneroLocations[locationSlug];

  if (!data) {
    return (
      <Layout>
        <Helmet>
          <title>Página no encontrada</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Página no encontrada</h1>
            <p className="text-muted-foreground">La ubicación solicitada no está disponible.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const breadcrumbs = [
    { name: "Inicio", url: "https://canary-detect.com/es" },
    { name: "Servicios Fontanería", url: "https://canary-detect.com/es/servicios-fontaneria" },
    { name: `Fontanero ${data.name}`, url: `https://canary-detect.com/es/fontanero-${data.slug}` },
  ];

  return (
    <Layout>
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`https://canary-detect.com/es/fontanero-${data.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
          role="img"
          aria-label={`Servicios de fontanería profesional en ${data.name}, Lanzarote`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {data.intro}
          </p>
          <div className="mt-8">
            <a href="tel:+34911985705">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Phone className="h-5 w-5" />
                911 98 57 05
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Problemas comunes de fontanería en {data.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.challenges.map((challenge, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-lg bg-muted/50 border border-border">
                <Droplets className="h-6 w-6 text-primary shrink-0 mt-1" />
                <p className="text-foreground/90">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Nuestros servicios de fontanería en {data.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, idx) => (
              <div key={idx} className="flex gap-3 p-5 rounded-lg bg-background border border-border">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/90 text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Por qué elegir Canary Detect en {data.name}?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            {data.body}
          </p>

          {/* Trust badges */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Garantía 2 años</p>
                <p className="text-xs text-muted-foreground">Materiales y mano de obra</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Clock className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Respuesta rápida</p>
                <p className="text-xs text-muted-foreground">Urgencias el mismo día</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Wrench className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Fontaneros cualificados</p>
                <p className="text-xs text-muted-foreground">+20 años experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-bold text-primary-foreground mb-6">
            {data.cta}
          </p>
          <a href="tel:+34911985705">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
              <Phone className="h-5 w-5" />
              Llamar ahora: 911 98 57 05
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default FontaneroLocationPage;
