 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import { Droplets, Waves, MapPin, Wrench, ArrowRight, Search } from "lucide-react";
 
 interface BlogCrossLinksProps {
   isSpanish: boolean;
 }
 
 const BlogCrossLinks = ({ isSpanish }: BlogCrossLinksProps) => {
   const serviceBasePath = isSpanish ? '/es/servicios' : '/services';
   const locationBasePath = isSpanish ? '/es/ubicaciones' : '/locations';
 
   const services = [
     {
       title: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection",
       description: isSpanish 
         ? "Encuentre fugas ocultas con imagen térmica y gas trazador"
         : "Find hidden leaks with thermal imaging and tracer gas",
       href: `${serviceBasePath}/water-leak-detection`,
       icon: Droplets,
     },
     {
       title: isSpanish ? "Fugas en Piscinas" : "Pool Leak Detection",
       description: isSpanish 
         ? "Localización precisa de fugas en piscinas y spas"
         : "Precise leak location for pools and spas",
       href: `${serviceBasePath}/pool-leak-detection`,
       icon: Waves,
     },
     {
       title: isSpanish ? "Inspección de Desagües" : "Drain Inspection",
       description: isSpanish 
         ? "CCTV y localización de bloqueos en tuberías"
         : "CCTV and blockage location in pipes",
       href: `${serviceBasePath}/drain-detection`,
       icon: Search,
     },
     {
       title: isSpanish ? "Reparación de Fugas" : "Leak Repair",
       description: isSpanish 
         ? "Reparación completa tras localizar la fuga"
         : "Complete repair after leak location",
       href: `${serviceBasePath}/leak-repair`,
       icon: Wrench,
     },
   ];
 
   const locations = [
     { name: "Arrecife", slug: "arrecife" },
     { name: "Puerto del Carmen", slug: "puerto-del-carmen" },
     { name: "Playa Blanca", slug: "playa-blanca" },
     { name: "Costa Teguise", slug: "costa-teguise" },
     { name: "Yaiza", slug: "yaiza" },
     { name: "Tías", slug: "tias" },
   ];
 
   const content = {
     servicesTitle: isSpanish ? "Nuestros Servicios" : "Our Services",
     servicesSubtitle: isSpanish 
       ? "Detectamos y reparamos fugas en toda Lanzarote"
       : "We detect and repair leaks across Lanzarote",
     areasTitle: isSpanish ? "Zonas de Servicio" : "Service Areas",
     areasSubtitle: isSpanish 
       ? "Cobertura en toda la isla con respuesta rápida"
       : "Island-wide coverage with fast response",
     viewService: isSpanish ? "Ver servicio" : "View service",
   };
 
   return (
     <section className="py-12 md:py-16 bg-muted section-divider">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-10">
           {/* Services Links */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="font-heading text-2xl font-bold mb-2">{content.servicesTitle}</h2>
             <p className="text-muted-foreground text-sm mb-6">{content.servicesSubtitle}</p>
             <div className="grid sm:grid-cols-2 gap-4">
               {services.map((service) => {
                 const Icon = service.icon;
                 return (
                   <Link
                     key={service.href}
                     to={service.href}
                     className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
                   >
                     <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                       <Icon className="h-4 w-4 text-primary" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                         {service.title}
                       </h3>
                       <p className="text-muted-foreground text-xs mt-1">
                         {service.description}
                       </p>
                     </div>
                   </Link>
                 );
               })}
             </div>
           </motion.div>
 
           {/* Location Links */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <div className="flex items-center gap-2 mb-2">
               <MapPin className="h-5 w-5 text-primary" />
               <h2 className="font-heading text-2xl font-bold">{content.areasTitle}</h2>
             </div>
             <p className="text-muted-foreground text-sm mb-6">{content.areasSubtitle}</p>
             <div className="flex flex-wrap gap-2">
               {locations.map((location) => (
                 <Link
                   key={location.slug}
                   to={`${locationBasePath}/${location.slug}`}
                   className="px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all inline-flex items-center gap-1.5 group"
                 >
                   {location.name}
                   <ArrowRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                 </Link>
               ))}
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default BlogCrossLinks;