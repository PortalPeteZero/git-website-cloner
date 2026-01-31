// Maps English routes to Spanish equivalents
export const routeMap: Record<string, string> = {
  '/': '/es',
  '/services': '/es/servicios',
  '/services/drain-detection': '/es/servicios/deteccion-desagues',
  '/services/underground-detection': '/es/servicios/deteccion-subterranea',
  '/services/water-leak-detection': '/es/servicios/deteccion-fugas-agua',
  '/services/pool-leak-detection': '/es/servicios/deteccion-fugas-piscinas',
  '/services/leak-repair': '/es/servicios/reparacion-fugas',
  '/services/drain-unblocking': '/es/servicios/desbloqueo-desagues',
  '/services/pool-leak-repair': '/es/servicios/reparacion-fugas-piscinas',
  '/services/free-leak-confirmation': '/es/servicios/confirmacion-fugas-gratis',
  '/services/damp-moisture-mapping': '/es/servicios/mapeo-humedad',
  '/technology': '/es/tecnologia',
  '/about': '/es/sobre-nosotros',
  '/case-studies': '/es/casos-de-exito',
  '/contact': '/es/contacto',
  '/blog': '/es/blog',
  '/plumbing-services': '/es/servicios-fontaneria',
  '/plumbing-services/general-repairs': '/es/servicios-fontaneria/reparaciones-generales',
  '/plumbing-services/boiler-services': '/es/servicios-fontaneria/servicios-calderas',
  '/plumbing-services/system-upgrades': '/es/servicios-fontaneria/mejoras-sistema',
  '/plumbing-services/manifold-upgrades': '/es/servicios-fontaneria/mejoras-colectores',
  '/plumbing-services/pool-plumbing': '/es/servicios-fontaneria/fontaneria-piscinas',
  '/plumbing-services/pool-repairs': '/es/servicios-fontaneria/reparaciones-piscinas',
};

// Reverse map for Spanish to English
export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([en, es]) => [es, en])
);

// Service slug translations (English to Spanish)
export const serviceSlugMap: Record<string, string> = {
  'drain-detection': 'deteccion-desagues',
  'underground-detection': 'deteccion-subterranea',
  'water-leak-detection': 'deteccion-fugas-agua',
  'pool-leak-detection': 'deteccion-fugas-piscinas',
  'leak-repair': 'reparacion-fugas',
  'drain-unblocking': 'desbloqueo-desagues',
  'pool-leak-repair': 'reparacion-fugas-piscinas',
  'free-leak-confirmation': 'confirmacion-fugas-gratis',
  'damp-moisture-mapping': 'mapeo-humedad',
};

// Plumbing service slug translations (English to Spanish)
export const plumbingSlugMap: Record<string, string> = {
  'general-repairs': 'reparaciones-generales',
  'boiler-services': 'servicios-calderas',
  'system-upgrades': 'mejoras-sistema',
  'manifold-upgrades': 'mejoras-colectores',
  'pool-plumbing': 'fontaneria-piscinas',
  'pool-repairs': 'reparaciones-piscinas',
};

// Reverse plumbing slug map (Spanish to English)
export const reversePlumbingSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(plumbingSlugMap).map(([en, es]) => [es, en])
);

// Reverse service slug map (Spanish to English)
export const reverseServiceSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([en, es]) => [es, en])
);

// Blog slug translations (English to Spanish)
export const blogSlugMap: Record<string, string> = {
  "master-your-lanzarote-water-system": "domina-tu-sistema-de-agua-lanzarote",
  "how-to-check-for-pool-leaks-lanzarote": "como-detectar-fugas-en-piscinas-lanzarote",
  "signs-of-underground-water-leak": "senales-fuga-agua-subterranea",
  "water-meter-running-when-taps-off": "contador-agua-girando-grifos-cerrados",
  "damp-walls-causes-solutions": "paredes-humedas-causas-soluciones",
  "thermal-imaging-leak-detection-explained": "imagen-termica-deteccion-fugas-explicada",
  "swimming-pool-leak-repair-cost-lanzarote": "coste-reparacion-fugas-piscina-lanzarote"
};

// Reverse blog slug map (Spanish to English)
export const reverseBlogSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugMap).map(([en, es]) => [es, en])
);

// Get the English slug from a potentially Spanish slug
export const getEnglishSlug = (slug: string): string => {
  return reverseServiceSlugMap[slug] || slug;
};

// Get the Spanish slug from an English slug
export const getSpanishSlug = (slug: string): string => {
  return serviceSlugMap[slug] || slug;
};

// Get the equivalent route in the target language
export const getEquivalentRoute = (currentPath: string, targetLang: 'en' | 'es'): string => {
  if (targetLang === 'es') {
    // Check direct match first
    if (routeMap[currentPath]) return routeMap[currentPath];
    
    // Handle dynamic service routes
    const serviceMatch = currentPath.match(/^\/services\/(.+)$/);
    if (serviceMatch && serviceSlugMap[serviceMatch[1]]) {
      return `/es/servicios/${serviceSlugMap[serviceMatch[1]]}`;
    }
    
    // Handle plumbing service routes
    const plumbingMatch = currentPath.match(/^\/plumbing-services\/(.+)$/);
    if (plumbingMatch && plumbingSlugMap[plumbingMatch[1]]) {
      return `/es/servicios-fontaneria/${plumbingSlugMap[plumbingMatch[1]]}`;
    }
    if (currentPath === '/plumbing-services') {
      return '/es/servicios-fontaneria';
    }
    
    // Handle blog routes
    const blogMatch = currentPath.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      const spanishSlug = blogSlugMap[blogMatch[1]] || blogMatch[1];
      return `/es/blog/${spanishSlug}`;
    }
    
    // Handle location routes
    const locationMatch = currentPath.match(/^\/locations\/(.+)$/);
    if (locationMatch) {
      return `/es/ubicaciones/${locationMatch[1]}`;
    }
    
    // Default: prepend /es
    return `/es${currentPath}`;
  } else {
    // Check direct match first
    if (reverseRouteMap[currentPath]) return reverseRouteMap[currentPath];
    
    // Handle dynamic service routes
    const serviceMatch = currentPath.match(/^\/es\/servicios\/(.+)$/);
    if (serviceMatch && reverseServiceSlugMap[serviceMatch[1]]) {
      return `/services/${reverseServiceSlugMap[serviceMatch[1]]}`;
    }
    
    // Handle plumbing service routes
    const plumbingMatch = currentPath.match(/^\/es\/servicios-fontaneria\/(.+)$/);
    if (plumbingMatch && reversePlumbingSlugMap[plumbingMatch[1]]) {
      return `/plumbing-services/${reversePlumbingSlugMap[plumbingMatch[1]]}`;
    }
    if (currentPath === '/es/servicios-fontaneria') {
      return '/plumbing-services';
    }
    
    // Handle blog routes
    const blogMatch = currentPath.match(/^\/es\/blog\/(.+)$/);
    if (blogMatch) {
      const englishSlug = reverseBlogSlugMap[blogMatch[1]] || blogMatch[1];
      return `/blog/${englishSlug}`;
    }
    
    // Handle location routes
    const locationMatch = currentPath.match(/^\/es\/ubicaciones\/(.+)$/);
    if (locationMatch) {
      return `/locations/${locationMatch[1]}`;
    }
    
    // Default: remove /es prefix
    return currentPath.replace(/^\/es/, '') || '/';
  }
};

// Helper to get the base path for services
export const getServicesBasePath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/servicios' : '/services';
};

// Helper to get the service detail path
export const getServicePath = (slug: string, isSpanish: boolean): string => {
  const finalSlug = isSpanish ? getSpanishSlug(slug) : slug;
  return isSpanish ? `/es/servicios/${finalSlug}` : `/services/${slug}`;
};

// Helper to get contact path
export const getContactPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/contacto' : '/contact';
};

// Helper to get technology path
export const getTechnologyPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/tecnologia' : '/technology';
};

// Helper to get about path
export const getAboutPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/sobre-nosotros' : '/about';
};

// Helper to get case studies path
export const getCaseStudiesPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/casos-de-exito' : '/case-studies';
};

// Helper to get blog path
export const getBlogPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/blog' : '/blog';
};

// Helper to get blog article path with proper slug translation
export const getBlogArticlePath = (slug: string, isSpanish: boolean): string => {
  const finalSlug = isSpanish ? (blogSlugMap[slug] || slug) : slug;
  return isSpanish ? `/es/blog/${finalSlug}` : `/blog/${slug}`;
};

// Helper to get English blog slug from potentially Spanish slug
export const getEnglishBlogSlug = (slug: string): string => {
  return reverseBlogSlugMap[slug] || slug;
};

// Helper to get Spanish blog slug from English slug
export const getSpanishBlogSlug = (slug: string): string => {
  return blogSlugMap[slug] || slug;
};

// Helper to get home path
export const getHomePath = (isSpanish: boolean): string => {
  return isSpanish ? '/es' : '/';
};

// Helper to get plumbing services path
export const getPlumbingServicesPath = (isSpanish: boolean): string => {
  return isSpanish ? '/es/servicios-fontaneria' : '/plumbing-services';
};

// Helper to get plumbing service detail path
export const getPlumbingServicePath = (slug: string, isSpanish: boolean): string => {
  const finalSlug = isSpanish ? (plumbingSlugMap[slug] || slug) : slug;
  return isSpanish ? `/es/servicios-fontaneria/${finalSlug}` : `/plumbing-services/${slug}`;
};
