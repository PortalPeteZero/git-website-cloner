 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import { ArrowRight, BookOpen, Clock } from "lucide-react";
 import { getBlogArticles } from "@/data/blogArticles";
 
 interface PopularGuidesSectionProps {
   isSpanish: boolean;
 }
 
 const PopularGuidesSection = ({ isSpanish }: PopularGuidesSectionProps) => {
   const blogBasePath = isSpanish ? '/es/blog' : '/blog';
   const blogArticles = getBlogArticles(isSpanish);
   
   // Get top 6 articles for homepage
   const featuredArticles = blogArticles.slice(0, 6);
 
   const content = {
     tagline: isSpanish ? "Guías y Consejos" : "Guides & Tips",
     title: isSpanish ? "Artículos Populares" : "Popular Articles",
     subtitle: isSpanish 
       ? "Aprenda a detectar fugas, proteger su propiedad y ahorrar en reparaciones con nuestras guías expertas."
       : "Learn how to detect leaks, protect your property, and save on repairs with our expert guides.",
     readMore: isSpanish ? "Leer Artículo" : "Read Article",
     viewAll: isSpanish ? "Ver Todos los Artículos" : "View All Articles",
     minRead: isSpanish ? "min" : "min",
   };
 
   return (
     <section className="py-16 md:py-20 bg-muted section-divider">
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-12"
         >
           <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-3">
             <BookOpen className="h-4 w-4" />
             {content.tagline}
           </div>
           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
             {content.title}
           </h2>
           <p className="text-muted-foreground text-lg">
             {content.subtitle}
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {featuredArticles.map((article, index) => (
             <motion.article
               key={article.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.08 }}
               className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all"
             >
               <Link to={`${blogBasePath}/${article.slug}`}>
                 <div className="aspect-video overflow-hidden">
                   <img
                     src={article.image}
                     alt={article.title}
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
               </Link>
               <div className="p-5">
                 <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                   <span className="text-primary font-medium">{article.category}</span>
                   <span className="flex items-center gap-1">
                     <Clock className="h-3 w-3" />
                     {article.readTime} {content.minRead}
                   </span>
                 </div>
                 <Link to={`${blogBasePath}/${article.slug}`}>
                   <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                     {article.title}
                   </h3>
                 </Link>
                 <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                   {article.excerpt}
                 </p>
                 <Link 
                   to={`${blogBasePath}/${article.slug}`}
                   className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                 >
                   {content.readMore}
                   <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </div>
             </motion.article>
           ))}
         </div>
 
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mt-10"
         >
           <Link 
             to={blogBasePath}
             className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
           >
             {content.viewAll}
             <ArrowRight className="h-5 w-5" />
           </Link>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default PopularGuidesSection;