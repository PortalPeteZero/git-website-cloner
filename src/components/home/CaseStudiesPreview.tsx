import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

import poolLeak1 from "@/assets/case-studies/pool-leak-1.jpg";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";

const CaseStudiesPreview = () => {
  const { isSpanish } = useLanguage();

  const caseStudies = isSpanish ? [
    {
      id: 1,
      title: "Detección de Fuga en Piscina de Hotel",
      location: "Playa Blanca",
      description:
        "Localizamos una fuga significativa en la piscina de un hotel que estaba causando una pérdida de agua de 5.000 litros por día.",
      image: poolLeak1,
    },
    {
      id: 2,
      title: "Localización de Tuberías Subterráneas",
      location: "Puerto del Carmen",
      description: "Mapeamos con éxito las tuberías de servicios subterráneos para un nuevo proyecto de construcción.",
      image: photo1,
    },
    {
      id: 3,
      title: "Fuga de Agua Residencial",
      location: "Costa Teguise",
      description:
        "Encontramos y reparamos una fuga oculta en una villa que había estado causando problemas de humedad durante meses.",
      image: photo2,
    },
  ] : [
    {
      id: 1,
      title: "Hotel Pool Leak Detection",
      location: "Playa Blanca",
      description:
        "Located a significant leak in a hotel pool that was causing water loss of 5,000 liters per day.",
      image: poolLeak1,
    },
    {
      id: 2,
      title: "Underground Pipe Location",
      location: "Puerto del Carmen",
      description: "Successfully mapped underground utility pipes for a new construction project.",
      image: photo1,
    },
    {
      id: 3,
      title: "Residential Water Leak",
      location: "Costa Teguise",
      description:
        "Found and repaired a hidden leak in a villa that had been causing damp problems for months.",
      image: photo2,
    },
  ];

  // Helper for language-aware routes
  const getRoute = (enPath: string, esPath: string) => isSpanish ? esPath : enPath;

  return (
    <section className="py-12 md:py-16 bg-muted/50 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            {isSpanish ? "Los Cazafugas en Acción" : "The Leaky Finders at Work"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            {isSpanish ? "Casos de Éxito Recientes" : "Recent Case Studies"}
          </h2>
          <p className="text-muted-foreground">
            {isSpanish 
              ? "Vea cómo Los Cazafugas resuelven problemas de fugas en Lanzarote."
              : "See how The Leaky Finders solve leak problems across Lanzarote."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                  {study.location}
                </span>
                <h3 className="font-heading font-bold text-lg mt-1 mb-2 text-canary-navy group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-canary-navy hover:bg-canary-navy/90 text-white font-semibold" asChild>
            <Link to={getRoute("/case-studies", "/es/casos-de-exito")} className="inline-flex items-center gap-2">
              {isSpanish ? "Ver Todos los Casos de Éxito" : "View All Case Studies"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
