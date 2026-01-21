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
  '/technology': '/es/tecnologia',
  '/about': '/es/sobre-nosotros',
  '/case-studies': '/es/casos-de-exito',
  '/contact': '/es/contacto',
  '/blog': '/es/blog',
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
};

// Reverse service slug map (Spanish to English)
export const reverseServiceSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([en, es]) => [es, en])
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
    
    // Handle blog routes
    const blogMatch = currentPath.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
      return `/es/blog/${blogMatch[1]}`;
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
    
    // Handle blog routes
    const blogMatch = currentPath.match(/^\/es\/blog\/(.+)$/);
    if (blogMatch) {
      return `/blog/${blogMatch[1]}`;
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

// Helper to get home path
export const getHomePath = (isSpanish: boolean): string => {
  return isSpanish ? '/es' : '/';
};
