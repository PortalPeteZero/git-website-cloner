import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  page?: "home" | "contact";
}

const LocalBusinessSchema = ({ page = "home" }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://canary-detect.com/#business",
    name: "Canary Detect - The Leaky Finders",
    alternateName: "The Leaky Finders",
    description: "Professional leak detection and repair services in Lanzarote. Specialists in water leak detection, swimming pool leak detection, underground pipe detection, and drain surveys using €80,000+ of advanced equipment including thermal imaging, acoustic sensors, and tracer gas technology.",
    url: "https://canary-detect.com",
    telephone: "+34711051071",
    email: "info@canary-detect.com",
    image: "https://canary-detect.com/og-image.jpg",
    logo: "https://canary-detect.com/logo.png",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
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
      name: "Leak Detection Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Leak Detection",
            description: "Hidden water leak detection using thermal imaging, acoustic sensors and tracer gas technology"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Swimming Pool Leak Detection",
            description: "Professional pool leak detection with pressure testing and underwater inspection"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Underground Leak Detection",
            description: "Locate buried pipes and underground water leaks with centimetre accuracy"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drain Detection & CCTV Surveys",
            description: "CCTV drain inspection and pipe surveys with detailed video reports"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Leak Repair",
            description: "Complete leak repair services for water pipes, pool systems and underground leaks"
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
    slogan: "No Find, No Fee",
    knowsAbout: [
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
