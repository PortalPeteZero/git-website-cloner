import { useEffect } from 'react';

export default function ServiceSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Leak Detection and Repair",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Canary Detect",
        "alternateName": "The Leaky Finders",
        "description": "Professional leak detection and repair services in Lanzarote. Specialists in water leak detection, pool leak detection, and underground pipe location.",
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
        "priceRange": "€€",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ]
      },
      "areaServed": [
        { "@type": "City", "name": "Lanzarote" },
        { "@type": "City", "name": "Playa Blanca" },
        { "@type": "City", "name": "Puerto del Carmen" },
        { "@type": "City", "name": "Arrecife" },
        { "@type": "City", "name": "Costa Teguise" },
        { "@type": "City", "name": "Yaiza" },
        { "@type": "City", "name": "Tías" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Leak Detection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Leak Detection",
              "description": "Professional water leak detection using thermal imaging and acoustic equipment to find hidden leaks in walls, floors, and ceilings."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Swimming Pool Leak Detection",
              "description": "Specialist swimming pool and spa leak detection using pressure testing and dye testing techniques."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Underground Pipe Detection",
              "description": "Locate underground pipes, cables, and utilities using ground-penetrating radar and electromagnetic pipe locators."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drain Detection",
              "description": "Locate and identify drainage issues using advanced camera inspection and tracing technology."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pipe Inspection",
              "description": "CCTV pipe inspection to assess the condition of your pipes and identify blockages, damage, or deterioration."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leak Repair",
              "description": "Professional leak repair services across Lanzarote. Complete solutions from detection to repair."
            }
          }
        ]
      }
    };
    
    script.textContent = JSON.stringify(serviceSchema);
    
    // Remove existing schema if present
    const existing = document.getElementById('service-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('service-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  
  return null;
}
