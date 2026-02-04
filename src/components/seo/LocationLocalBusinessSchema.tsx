import { Helmet } from "react-helmet-async";

interface LocationLocalBusinessSchemaProps {
  locationName: string;
  locationDescription: string;
  canonicalUrl: string;
  isSpanish: boolean;
}

const LocationLocalBusinessSchema = ({
  locationName,
  locationDescription,
  canonicalUrl,
  isSpanish,
}: LocationLocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonicalUrl}#business`,
    name: `Canary Detect - ${locationName}`,
    legalName: "Camello Blanco S.L.",
    alternateName: isSpanish ? "Los Cazafugas" : "The Leaky Finders",
    description: locationDescription,
    url: canonicalUrl,
    telephone: "+34711051071",
    email: "info@canary-detect.com",
    image: "https://canary-detect.com/og-image.jpg",
    logo: "https://canary-detect.com/favicon.png",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: isSpanish 
      ? "Efectivo, Tarjeta de Crédito, Transferencia Bancaria" 
      : "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zona Industrial, 1",
      addressLocality: "Playa Blanca",
      addressRegion: "Lanzarote",
      postalCode: "35580",
      addressCountry: "ES"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.8608,
      longitude: -13.8267
    },
    areaServed: {
      "@type": "City",
      name: locationName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Lanzarote",
        containedInPlace: {
          "@type": "Country",
          name: "Spain"
        }
      }
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isSpanish ? "Servicios de Detección de Fugas" : "Leak Detection Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Fugas de Agua" : "Water Leak Detection",
            description: isSpanish 
              ? `Detección de fugas de agua ocultas en ${locationName} usando imágenes térmicas y sensores acústicos`
              : `Hidden water leak detection in ${locationName} using thermal imaging and acoustic sensors`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection",
            description: isSpanish
              ? `Detección profesional de fugas de piscinas en ${locationName} con pruebas de presión`
              : `Professional pool leak detection in ${locationName} with pressure testing`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Fugas Subterráneas" : "Underground Leak Detection",
            description: isSpanish
              ? `Localización de tuberías enterradas y fugas subterráneas en ${locationName}`
              : `Locate buried pipes and underground leaks in ${locationName}`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Reparación de Fugas" : "Leak Repair",
            description: isSpanish
              ? `Servicios de reparación de fugas en ${locationName} para tuberías y piscinas`
              : `Leak repair services in ${locationName} for pipes and pools`
          }
        }
      ]
    },
    slogan: isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocationLocalBusinessSchema;
