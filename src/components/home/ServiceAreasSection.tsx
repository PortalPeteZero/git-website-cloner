 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import { MapPin, ArrowRight, Building2, Waves, Home } from "lucide-react";
 
 interface ServiceAreasSectionProps {
   isSpanish: boolean;
 }
 
 const ServiceAreasSection = ({ isSpanish }: ServiceAreasSectionProps) => {
   const locationBasePath = isSpanish ? '/es/ubicaciones' : '/locations';
   
   // Major areas with descriptions
   const majorAreas = [
     {
       name: "Arrecife",
       slug: "arrecife",
       icon: Building2,
       description: isSpanish 
         ? "Capital de Lanzarote. Edificios residenciales, hoteles, comercios."
         : "Capital of Lanzarote. Residential buildings, hotels, commercial properties.",
     },
     {
       name: "Puerto del Carmen",
       slug: "puerto-del-carmen",
       icon: Waves,
       description: isSpanish 
         ? "Centro turístico. Hoteles, apartamentos, villas con piscina."
         : "Tourist hub. Hotels, apartments, villas with pools.",
     },
     {
       name: "Playa Blanca",
       slug: "playa-blanca",
       icon: Home,
       description: isSpanish 
         ? "Nuestra base local. Villas de lujo, Marina Rubicón."
         : "Our local base. Luxury villas, Marina Rubicón.",
     },
     {
       name: "Costa Teguise",
       slug: "costa-teguise",
       icon: Waves,
       description: isSpanish 
         ? "Complejos turísticos, campos de golf, comunidades."
         : "Resort complexes, golf courses, communities.",
     },
   ];
 
   // All locations for full linking
   const allLocations = [
    { name: "Yaiza", slug: "yaiza" },
      { name: "Tías", slug: "tias" },
      { name: "Playa Honda", slug: "playa-honda" },
      { name: "Teguise", slug: "teguise" },
      { name: "San Bartolomé", slug: "san-bartolome" },
      { name: "Puerto Calero", slug: "puerto-calero" },
      { name: "Tahiche", slug: "tahiche" },
      { name: "Guatiza", slug: "guatiza" },
      { name: "Femés", slug: "femes" },
      { name: "Uga", slug: "uga" },
      { name: "Las Breñas", slug: "las-brenas" },
    ];
 
   const content = {
     tagline: isSpanish ? "Cobertura en Toda la Isla" : "Island-Wide Coverage",
     title: isSpanish ? "Áreas de Servicio en Lanzarote" : "Service Areas in Lanzarote",
     subtitle: isSpanish 
       ? "Damos servicio a toda Lanzarote con tiempos de respuesta rápidos. Haga clic en su zona para información local."
       : "We serve all of Lanzarote with fast response times. Click your area for local information.",
     otherAreas: isSpanish ? "También Cubrimos" : "We Also Cover",
     viewAll: isSpanish ? "Ver Todas las Áreas" : "View All Areas",
   };
 
   return (
     <section className="py-16 md:py-20 bg-background section-divider">
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-12"
         >
           <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-3">
             <MapPin className="h-4 w-4" />
             {content.tagline}
           </div>
           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
             {content.title}
           </h2>
           <p className="text-muted-foreground text-lg">
             {content.subtitle}
           </p>
         </motion.div>
 
         {/* Major Areas Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
           {majorAreas.map((area, index) => {
             const Icon = area.icon;
             return (
               <motion.div
                 key={area.slug}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
               >
                 <Link
                   to={`${locationBasePath}/${area.slug}`}
                   className="block h-full p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
                 >
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                       <Icon className="h-5 w-5 text-primary" />
                     </div>
                     <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                       {area.name}
                     </h3>
                   </div>
                   <p className="text-muted-foreground text-sm mb-3">
                     {area.description}
                   </p>
                   <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                     {isSpanish ? "Ver servicios" : "View services"}
                     <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                   </span>
                 </Link>
               </motion.div>
             );
           })}
         </div>
 
         {/* Other Areas Pills */}
         <div className="text-center">
           <p className="text-muted-foreground text-sm mb-4">{content.otherAreas}:</p>
           <div className="flex flex-wrap justify-center gap-2">
             {allLocations.map((location) => (
               <Link
                 key={location.slug}
                 to={`${locationBasePath}/${location.slug}`}
                 className="px-4 py-2 bg-muted border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
               >
                 {location.name}
               </Link>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ServiceAreasSection;