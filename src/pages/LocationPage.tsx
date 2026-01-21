import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MapPin, Clock, Droplets, Waves, Search, Wrench } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import titleBg from "@/assets/title-bg.jpg";

interface LocationData {
  name: string;
  slug: string;
  description: string;
  heroText: string;
  areaDescription: string;
  nearbyAreas: string[];
  services: {
    title: string;
    description: string;
    href: string;
    icon: typeof Droplets;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

const locationsData: Record<string, LocationData> = {
  "arrecife": {
    name: "Arrecife",
    slug: "arrecife",
    description: "Professional leak detection services in Arrecife, Lanzarote's capital city.",
    heroText: "Lanzarote's capital city deserves expert leak detection. We serve residential properties, hotels, and commercial buildings throughout Arrecife with our comprehensive range of water leak detection and repair services.",
    areaDescription: "As Lanzarote's largest town and main port, Arrecife has a mix of older properties and modern developments. Aging pipe infrastructure, combined with the island's hard water, means water leaks are common. Our team provides fast response times to Arrecife, typically within 24-48 hours for standard appointments and same-day for emergencies.",
    nearbyAreas: ["San Bartolomé", "Playa Honda", "Tías", "Puerto del Carmen"],
    services: [
      {
        title: "Water Leak Detection Arrecife",
        description: "Hidden water leak detection in Arrecife properties using thermal imaging, acoustic sensors and tracer gas. Find leaks behind walls and under floors without damage.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Arrecife",
        description: "Swimming pool and spa leak detection for Arrecife hotels, villas and residential pools. Pinpoint accuracy to minimize repair costs.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Drain Detection Arrecife",
        description: "CCTV drain surveys and pipe inspection throughout Arrecife. 6 camera systems for all pipe sizes with detailed video reports.",
        href: "/services/drain-detection",
        icon: Search
      },
      {
        title: "Leak Repair Arrecife",
        description: "Complete leak repair services in Arrecife. From detection to repair - water pipes, pool pipes and underground systems.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Arrecife | Water & Pool Leak Detection | Canary Detect",
      description: "Professional leak detection Arrecife. Water leak detection, pool leak detection, underground pipe detection & leak repair in Lanzarote's capital. No Find No Fee. Call +34 711 051 071",
      keywords: "leak detection Arrecife, water leak detection Arrecife, pool leak detection Arrecife, leak repair Arrecife, plumber Arrecife Lanzarote, hidden water leak Arrecife"
    }
  },
  "puerto-del-carmen": {
    name: "Puerto del Carmen",
    slug: "puerto-del-carmen",
    description: "Expert leak detection services in Puerto del Carmen, Lanzarote's busiest tourist resort.",
    heroText: "Puerto del Carmen's hotels, apartments and villas need reliable leak detection. We provide fast, professional service to minimize disruption to guests and residents alike.",
    areaDescription: "As Lanzarote's premier tourist destination, Puerto del Carmen has a high concentration of hotels, holiday apartments and rental villas. Water leaks can be costly for property owners—both in water bills and potential damage to guest experiences. We offer priority service for commercial properties and emergency call-outs for hotels experiencing active leaks.",
    nearbyAreas: ["Tías", "Playa Honda", "Arrecife", "Puerto Calero"],
    services: [
      {
        title: "Water Leak Detection Puerto del Carmen",
        description: "Fast water leak detection for Puerto del Carmen hotels and villas. Non-invasive methods minimize disruption to guests. Insurance-ready reports included.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Puerto del Carmen",
        description: "Swimming pool leak detection for Puerto del Carmen's many hotel and villa pools. Expert service with complete pinpointing—not just confirmation.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Drain Detection Puerto del Carmen",
        description: "CCTV drain inspection and unblocking in Puerto del Carmen. Fast response for hotels and restaurants experiencing drainage issues.",
        href: "/services/drain-detection",
        icon: Search
      },
      {
        title: "Emergency Leak Repair Puerto del Carmen",
        description: "Emergency leak repair service in Puerto del Carmen. Quick response to minimize water damage and guest disruption.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Puerto del Carmen | Hotel & Villa Leak Detection | Canary Detect",
      description: "Professional leak detection Puerto del Carmen. Water leak detection for hotels, villas & apartments. Pool leak detection, emergency repairs. Fast response. Call +34 711 051 071",
      keywords: "leak detection Puerto del Carmen, water leak detection Puerto del Carmen, pool leak detection Puerto del Carmen, hotel leak detection Lanzarote, villa leak repair Puerto del Carmen"
    }
  },
  "playa-blanca": {
    name: "Playa Blanca",
    slug: "playa-blanca",
    description: "Local leak detection experts based in Playa Blanca, serving the south of Lanzarote.",
    heroText: "We're based right here in Playa Blanca—your local leak detection specialists. With €80,000+ of professional equipment, we serve the entire south of the island with same-day availability.",
    areaDescription: "Playa Blanca is our home base, meaning we can offer the fastest response times in the south of Lanzarote. The area's luxury villas and marina properties often feature complex plumbing systems and swimming pools that require specialist leak detection. We know the local building styles and common issues, giving us an edge when it comes to finding and fixing leaks quickly.",
    nearbyAreas: ["Yaiza", "Femés", "Las Breñas", "El Golfo"],
    services: [
      {
        title: "Water Leak Detection Playa Blanca",
        description: "Same-day water leak detection in Playa Blanca. We're based locally so can respond fast. Thermal imaging, tracer gas and acoustic detection.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Playa Blanca",
        description: "Expert pool leak detection for Playa Blanca's luxury villas and developments. Complete leak pinpointing with professional reports.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Underground Detection Playa Blanca",
        description: "Underground pipe and cable detection in Playa Blanca. Essential before construction or landscaping on your property.",
        href: "/services/underground-detection",
        icon: Search
      },
      {
        title: "Leak Repair Playa Blanca",
        description: "Local leak repair service in Playa Blanca. From detection through to complete repair—pipes, pools and drains.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Playa Blanca | Local Leak Detection Experts | Canary Detect",
      description: "Local leak detection Playa Blanca. We're based here! Water leak detection, pool leak detection, underground detection. Same-day service. No Find No Fee. Call +34 711 051 071",
      keywords: "leak detection Playa Blanca, water leak detection Playa Blanca, pool leak detection Playa Blanca, plumber Playa Blanca, leak repair Playa Blanca Lanzarote"
    }
  },
  "costa-teguise": {
    name: "Costa Teguise",
    slug: "costa-teguise",
    description: "Professional leak detection services in Costa Teguise, Lanzarote's family-friendly resort.",
    heroText: "Costa Teguise's apartments, villas and commercial properties need reliable leak detection. We serve the whole area with professional, non-invasive leak detection services.",
    areaDescription: "Costa Teguise is known for its purpose-built resort developments, many dating from the 1980s and 90s. These properties often have complex shared plumbing systems where pinpointing a leak's exact location is crucial to avoid unnecessary excavation. Our multi-technology approach is perfect for Costa Teguise's apartment blocks and community pools.",
    nearbyAreas: ["Teguise", "Tahiche", "Guatiza", "Arrecife"],
    services: [
      {
        title: "Water Leak Detection Costa Teguise",
        description: "Water leak detection for Costa Teguise apartments and villas. Non-invasive methods ideal for shared buildings and community properties.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Costa Teguise",
        description: "Community pool and private pool leak detection in Costa Teguise. Professional reports for community administrators and property managers.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Pipe Inspection Costa Teguise",
        description: "CCTV pipe inspection for Costa Teguise properties. Assess condition of aging pipework before problems escalate.",
        href: "/services/pipe-inspection",
        icon: Search
      },
      {
        title: "Leak Repair Costa Teguise",
        description: "Professional leak repair service in Costa Teguise. Complete solutions for residential and commercial properties.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Costa Teguise | Apartment & Villa Leak Detection | Canary Detect",
      description: "Professional leak detection Costa Teguise. Water leak detection for apartments, villas & community pools. Expert service for shared buildings. Call +34 711 051 071",
      keywords: "leak detection Costa Teguise, water leak detection Costa Teguise, pool leak detection Costa Teguise, apartment leak detection Lanzarote, community pool leak Costa Teguise"
    }
  },
  "yaiza": {
    name: "Yaiza",
    slug: "yaiza",
    description: "Professional leak detection services in Yaiza, one of Lanzarote's most picturesque municipalities.",
    heroText: "Yaiza's luxury villas, rural fincas and traditional properties deserve expert leak detection. We provide specialist services throughout this beautiful municipality.",
    areaDescription: "Yaiza municipality covers the southwest of Lanzarote including Playa Blanca, El Golfo, and the stunning Timanfaya National Park area. The region features many high-end properties with complex water systems and swimming pools. Our proximity to Yaiza (we're based in Playa Blanca) means fast response times and local knowledge of building styles and common plumbing issues in the area.",
    nearbyAreas: ["Playa Blanca", "El Golfo", "Femés", "Uga", "Las Breñas"],
    services: [
      {
        title: "Water Leak Detection Yaiza",
        description: "Expert water leak detection for Yaiza's luxury villas and rural fincas. Thermal imaging and acoustic detection for hidden leaks.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Yaiza",
        description: "Swimming pool leak detection for Yaiza's many private pools. Complete pinpointing service with professional reports.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Underground Detection Yaiza",
        description: "Underground pipe and utility detection for rural properties in Yaiza. Essential for construction and landscaping projects.",
        href: "/services/underground-detection",
        icon: Search
      },
      {
        title: "Leak Repair Yaiza",
        description: "Professional leak repair service throughout Yaiza municipality. Water pipes, pool systems and underground repairs.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Yaiza | Villa & Finca Leak Detection | Canary Detect",
      description: "Professional leak detection Yaiza. Water leak detection for luxury villas, fincas & rural properties. Pool leak detection. Fast local service. Call +34 711 051 071",
      keywords: "leak detection Yaiza, water leak detection Yaiza, pool leak detection Yaiza, villa leak detection Lanzarote, finca leak repair Yaiza"
    }
  },
  "tias": {
    name: "Tías",
    slug: "tias",
    description: "Expert leak detection services in Tías, serving one of Lanzarote's fastest-growing municipalities.",
    heroText: "Tías municipality, home to Puerto del Carmen, needs reliable leak detection services. We serve residential, commercial and tourist properties throughout the area.",
    areaDescription: "Tías is one of Lanzarote's most populous municipalities, encompassing Puerto del Carmen and surrounding residential areas. The mix of older Spanish properties and newer tourist developments means varied plumbing systems and different types of leak challenges. Our multi-technology approach is ideal for accurately locating leaks in any property type.",
    nearbyAreas: ["Puerto del Carmen", "Mácher", "La Asomada", "Conil", "Arrecife"],
    services: [
      {
        title: "Water Leak Detection Tías",
        description: "Professional water leak detection throughout Tías. Serving residential properties and holiday rentals with non-invasive detection methods.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Tías",
        description: "Pool leak detection for Tías properties. Expert service for private pools and community swimming pools.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Drain Detection Tías",
        description: "CCTV drain surveys and pipe inspection in Tías. Identify blockages, damage and drainage issues quickly.",
        href: "/services/drain-detection",
        icon: Search
      },
      {
        title: "Leak Repair Tías",
        description: "Complete leak repair services in Tías. From detection through to professional repair of all leak types.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Tías | Water & Pool Leak Detection | Canary Detect",
      description: "Professional leak detection Tías. Water leak detection, pool leak detection & drain surveys. Serving Tías and Puerto del Carmen. No Find No Fee. Call +34 711 051 071",
      keywords: "leak detection Tías, water leak detection Tías, pool leak detection Tías, plumber Tías Lanzarote, leak repair Tías"
    }
  },
  "playa-honda": {
    name: "Playa Honda",
    slug: "playa-honda",
    description: "Professional leak detection in Playa Honda, Lanzarote's second-largest town.",
    heroText: "Playa Honda's residential properties and commercial buildings need reliable leak detection. We provide fast, professional service to this growing community.",
    areaDescription: "Playa Honda is Lanzarote's second-largest population centre, located between Arrecife and the airport. The town has a mix of apartment blocks, townhouses and commercial properties. Many buildings date from the 1980s and 90s, meaning aging pipework is common. Our leak detection technology can pinpoint leaks in these older systems without unnecessary excavation.",
    nearbyAreas: ["Arrecife", "San Bartolomé", "Tías", "Puerto del Carmen"],
    services: [
      {
        title: "Water Leak Detection Playa Honda",
        description: "Water leak detection for Playa Honda apartments and houses. Non-invasive methods ideal for shared buildings and community properties.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Playa Honda",
        description: "Community pool and private pool leak detection in Playa Honda. Professional reports for property managers.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Pipe Inspection Playa Honda",
        description: "CCTV pipe inspection for Playa Honda properties. Assess aging pipework condition before problems escalate.",
        href: "/services/pipe-inspection",
        icon: Search
      },
      {
        title: "Leak Repair Playa Honda",
        description: "Professional leak repair in Playa Honda. Water pipes, drains and underground systems.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Playa Honda | Apartment & House Leak Detection | Canary Detect",
      description: "Professional leak detection Playa Honda. Water leak detection for apartments, houses & community buildings. Fast response. No Find No Fee. Call +34 711 051 071",
      keywords: "leak detection Playa Honda, water leak detection Playa Honda, pool leak detection Playa Honda, plumber Playa Honda, apartment leak Playa Honda"
    }
  },
  "san-bartolome": {
    name: "San Bartolomé",
    slug: "san-bartolome",
    description: "Expert leak detection services in San Bartolomé, in the heart of Lanzarote.",
    heroText: "San Bartolomé's residential properties and rural fincas need specialist leak detection. We provide professional services throughout this central municipality.",
    areaDescription: "San Bartolomé sits at the geographic centre of Lanzarote, making it easily accessible from our base. The municipality includes traditional villages and rural properties as well as more modern developments. Underground water supply systems are common in rural areas, requiring specialist detection equipment to locate leaks accurately.",
    nearbyAreas: ["Arrecife", "Playa Honda", "Tías", "Teguise", "Mozaga"],
    services: [
      {
        title: "Water Leak Detection San Bartolomé",
        description: "Water leak detection for San Bartolomé properties. Specialist service for both village houses and rural fincas.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Underground Detection San Bartolomé",
        description: "Underground pipe detection for San Bartolomé's rural properties. Locate buried pipes before excavation work.",
        href: "/services/underground-detection",
        icon: Search
      },
      {
        title: "Pool Leak Detection San Bartolomé",
        description: "Pool leak detection for private pools in San Bartolomé. Complete survey with leak pinpointing.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Leak Repair San Bartolomé",
        description: "Professional leak repair throughout San Bartolomé. Water pipes, underground systems and pool repairs.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection San Bartolomé | Rural & Village Leak Detection | Canary Detect",
      description: "Professional leak detection San Bartolomé. Water leak detection for village houses, fincas & rural properties. Underground pipe detection. Call +34 711 051 071",
      keywords: "leak detection San Bartolomé, water leak detection San Bartolomé, underground leak detection San Bartolomé, rural leak detection Lanzarote"
    }
  },
  "teguise": {
    name: "Teguise",
    slug: "teguise",
    description: "Professional leak detection in Teguise, Lanzarote's historic former capital.",
    heroText: "Teguise's historic buildings and surrounding villages need specialist leak detection. We provide expert services for traditional properties and modern developments alike.",
    areaDescription: "Teguise is Lanzarote's largest municipality by area, stretching from Costa Teguise on the coast to the historic town of Teguise inland. The area includes traditional Canarian architecture, rural fincas, and modern coastal developments. Historic properties often have complex or unusual plumbing systems that require careful, non-invasive leak detection methods.",
    nearbyAreas: ["Costa Teguise", "Tahiche", "Guatiza", "Haría", "Arrecife"],
    services: [
      {
        title: "Water Leak Detection Teguise",
        description: "Specialist water leak detection for Teguise's historic properties and modern homes. Non-invasive methods protect valuable buildings.",
        href: "/services/water-leak-detection",
        icon: Droplets
      },
      {
        title: "Pool Leak Detection Teguise",
        description: "Pool leak detection for Teguise municipality. Serving rural villas and Costa Teguise developments.",
        href: "/services/pool-leak-detection",
        icon: Waves
      },
      {
        title: "Drain Detection Teguise",
        description: "CCTV drain surveys for Teguise properties. Essential for older buildings with unknown drainage layouts.",
        href: "/services/drain-detection",
        icon: Search
      },
      {
        title: "Leak Repair Teguise",
        description: "Professional leak repair in Teguise. Sympathetic repairs for historic properties and modern solutions for new builds.",
        href: "/services/leak-repair",
        icon: Wrench
      }
    ],
    seo: {
      title: "Leak Detection Teguise | Historic & Rural Property Leak Detection | Canary Detect",
      description: "Professional leak detection Teguise. Specialist service for historic buildings, rural fincas & coastal properties. Non-invasive methods. Call +34 711 051 071",
      keywords: "leak detection Teguise, water leak detection Teguise, historic building leak detection Lanzarote, rural leak detection Teguise, Costa Teguise leak detection"
    }
  }
};

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  const locationData = location ? locationsData[location] : null;

  if (!locationData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="text-muted-foreground mb-8">The location you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead 
        title={locationData.seo.title}
        description={locationData.seo.description}
        keywords={locationData.seo.keywords}
        canonical={`https://canary-detect.com/locations/${locationData.slug}`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt={`Leak detection services in ${locationData.name} Lanzarote`} className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.35)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-[0.1em]">Leak Detection</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Professional Leak Detection & Repair in <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{locationData.name}</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              {locationData.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild>
                <a href="tel:+34711051071">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +34 711 051 071
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About This Area */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Local Experts</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Leak Detection Services in {locationData.name}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {locationData.areaDescription}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">No Find, No Fee Guarantee</p>
                      <p className="text-sm text-muted-foreground">If we can't locate your leak, you don't pay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">€80,000+ Equipment</p>
                      <p className="text-sm text-muted-foreground">Thermal imaging, tracer gas, acoustic sensors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Centimetre Accuracy</p>
                      <p className="text-sm text-muted-foreground">Multi-technology confirmation for precision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Insurance Reports</p>
                      <p className="text-sm text-muted-foreground">Professional documentation for claims</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 sticky top-24 shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Get a Quote in {locationData.name}</h3>
                <p className="text-foreground/80 text-sm mb-6">
                  Contact us for a free consultation and quote. Fast response times across {locationData.name}.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+34711051071" className="hover:text-primary transition-colors">+34 711 051 071</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">Mon-Fri 8:00-18:00, Sat 9:00-14:00</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+34711051071">Call Now</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Services Available in {locationData.name}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {locationData.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={service.href}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Coverage Area</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">
              Also Serving Nearby Areas
            </h2>
            <p className="text-muted-foreground mb-8">
              In addition to {locationData.name}, we provide leak detection services throughout Lanzarote.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {locationData.nearbyAreas.map((area) => (
                <span 
                  key={area}
                  className="bg-muted px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Leak Detection in {locationData.name}?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact Canary Detect today for professional leak detection services. 
              No Find, No Fee guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 text-white border border-white/40 hover:bg-white hover:text-canary-navy" asChild>
                <a href="tel:+34711051071">Call +34 711 051 071</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
