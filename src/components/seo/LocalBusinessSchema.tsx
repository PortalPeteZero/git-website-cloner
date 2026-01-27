import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n/LanguageContext";

interface LocalBusinessSchemaProps {
  page?: "home" | "contact";
}

const LocalBusinessSchema = ({ page = "home" }: LocalBusinessSchemaProps) => {
  const { isSpanish } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://canary-detect.com/#business",
    name: "Canary Detect",
    legalName: "Camello Blanco S.L.",
    alternateName: isSpanish ? "Los Cazafugas" : "The Leaky Finders",
    description: isSpanish
      ? "Servicios profesionales de detección y reparación de fugas en Lanzarote. Especialistas en detección de fugas de agua, detección de fugas de piscinas, detección de tuberías subterráneas e inspecciones de desagües con más de €80.000 en equipos avanzados incluyendo imágenes térmicas, sensores acústicos y tecnología de gas trazador."
      : "Professional leak detection and repair services in Lanzarote. Specialists in water leak detection, swimming pool leak detection, underground pipe detection, and drain surveys using €80,000+ of advanced equipment including thermal imaging, acoustic sensors, and tracer gas technology.",
    url: isSpanish ? "https://canary-detect.com/es" : "https://canary-detect.com",
    telephone: "+34711051071",
    email: "info@canary-detect.com",
    image: "https://canary-detect.com/og-image.jpg",
    logo: "https://canary-detect.com/favicon.png",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: isSpanish ? "Efectivo, Tarjeta de Crédito, Transferencia Bancaria" : "Cash, Credit Card, Bank Transfer",
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
    areaServed: [
      {
        "@type": "City",
        name: "Arrecife",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "City",
        name: "Puerto del Carmen",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "City",
        name: "Playa Blanca",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "City",
        name: "Costa Teguise",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "City",
        name: "Yaiza",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "City",
        name: "Tías",
        containedInPlace: { "@type": "AdministrativeArea", name: "Lanzarote" }
      },
      {
        "@type": "AdministrativeArea",
        name: "Lanzarote",
        containedInPlace: { "@type": "Country", name: "Spain" }
      }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00"
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
              ? "Detección de fugas de agua ocultas usando imágenes térmicas, sensores acústicos y tecnología de gas trazador"
              : "Hidden water leak detection using thermal imaging, acoustic sensors and tracer gas technology"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Fugas de Piscinas" : "Swimming Pool Leak Detection",
            description: isSpanish
              ? "Detección profesional de fugas de piscinas con pruebas de presión e inspección subacuática"
              : "Professional pool leak detection with pressure testing and underwater inspection"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Fugas Subterráneas" : "Underground Leak Detection",
            description: isSpanish
              ? "Localice tuberías enterradas y fugas de agua subterráneas con precisión centimétrica"
              : "Locate buried pipes and underground water leaks with centimetre accuracy"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Detección de Desagües e Inspecciones CCTV" : "Drain Detection & CCTV Surveys",
            description: isSpanish
              ? "Inspección CCTV de desagües e inspecciones de tuberías con informes de vídeo detallados"
              : "CCTV drain inspection and pipe surveys with detailed video reports"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isSpanish ? "Reparación de Fugas" : "Leak Repair",
            description: isSpanish
              ? "Servicios completos de reparación de fugas para tuberías de agua, sistemas de piscinas y fugas subterráneas"
              : "Complete leak repair services for water pipes, pool systems and underground leaks"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [
      "https://www.facebook.com/canarydetect",
      "https://www.instagram.com/canarydetect"
    ],
    founder: {
      "@type": "Person",
      name: "Pete Ashcroft"
    },
    foundingDate: "2014",
    slogan: isSpanish ? "Sin Encontrar, Sin Pagar" : "No Find, No Fee",
    knowsAbout: isSpanish ? [
      "Detección de Fugas",
      "Reparación de Fugas de Agua",
      "Detección de Fugas de Piscinas",
      "Imágenes Térmicas",
      "Detección Acústica de Fugas",
      "Detección con Gas Trazador",
      "Inspecciones CCTV de Desagües",
      "Localización de Tuberías Subterráneas"
    ] : [
      "Leak Detection",
      "Water Leak Repair",
      "Swimming Pool Leak Detection",
      "Thermal Imaging",
      "Acoustic Leak Detection",
      "Tracer Gas Detection",
      "CCTV Drain Surveys",
      "Underground Pipe Location"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
