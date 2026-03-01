import { Helmet } from "react-helmet-async";

/**
 * Service schema for the homepage.
 * References the LocalBusiness by @id to avoid duplicate entity issues.
 */
export default function ServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Leak Detection and Repair",
    "provider": {
      "@id": "https://canary-detect.com/#business"
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
}
