import { useEffect } from 'react';

interface ServiceDetailSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  isSpanish?: boolean;
}

const ServiceDetailSchema = ({ 
  serviceName, 
  serviceDescription, 
  serviceUrl,
  isSpanish = false 
}: ServiceDetailSchemaProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-detail-schema';
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "url": serviceUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Canary Detect",
        "legalName": "Camello Blanco S.L.",
        "alternateName": isSpanish ? "Los Cazafugas" : "The Leaky Finders",
        "telephone": "+34 711 051 071",
        "email": "info@canary-detect.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Zona Industrial, 1",
          "addressLocality": "Playa Blanca",
          "addressRegion": "Lanzarote",
          "postalCode": "35580",
          "addressCountry": "ES"
        },
        "url": "https://canary-detect.com",
        "priceRange": "€€"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Lanzarote, Canary Islands, Spain"
      },
      "serviceType": isSpanish ? "Detección de Fugas" : "Leak Detection",
      "termsOfService": "https://canary-detect.com/privacy-policy",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+34 711 051 071",
          "contactType": isSpanish ? "servicio al cliente" : "customer service",
          "availableLanguage": ["English", "Spanish"]
        },
        "serviceUrl": serviceUrl
      }
    };
    
    script.textContent = JSON.stringify(serviceSchema);
    
    // Remove existing schema if present
    const existing = document.getElementById('service-detail-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('service-detail-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [serviceName, serviceDescription, serviceUrl, isSpanish]);
  
  return null;
};

export default ServiceDetailSchema;
