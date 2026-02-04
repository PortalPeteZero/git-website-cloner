import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Waves, Wrench } from "lucide-react";

interface BlogServicesCalloutProps {
  isSpanish: boolean;
}

const BlogServicesCallout = ({ isSpanish }: BlogServicesCalloutProps) => {
  const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
  const contactPath = isSpanish ? '/es/contacto' : '/contact';
  
  const services = isSpanish ? [
    { title: "Detección de Fugas de Agua", href: `${serviceBasePath}/deteccion-fugas-agua`, icon: Droplets },
    { title: "Detección de Fugas en Piscinas", href: `${serviceBasePath}/deteccion-fugas-piscinas`, icon: Waves },
    { title: "Reparación de Fugas", href: `${serviceBasePath}/reparacion-fugas`, icon: Wrench },
  ] : [
    { title: "Water Leak Detection", href: `${serviceBasePath}/water-leak-detection`, icon: Droplets },
    { title: "Pool Leak Detection", href: `${serviceBasePath}/pool-leak-detection`, icon: Waves },
    { title: "Leak Repair", href: `${serviceBasePath}/leak-repair`, icon: Wrench },
  ];

  return (
    <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
      <h3 className="font-heading font-bold text-lg mb-3">
        {isSpanish ? "¿Necesita Ayuda Profesional?" : "Need Professional Help?"}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {isSpanish 
          ? "Canary Detect ofrece servicios profesionales de detección de fugas en toda Lanzarote con nuestra garantía Sin Encontrar, Sin Pagar."
          : "Canary Detect offers professional leak detection services across Lanzarote with our No Find, No Fee guarantee."}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              to={service.href}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Icon className="h-3.5 w-3.5" />
              {service.title}
            </Link>
          );
        })}
      </div>
      <Link
        to={contactPath}
        className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
      >
        {isSpanish ? "Solicitar Presupuesto Gratis" : "Get a Free Quote"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default BlogServicesCallout;
