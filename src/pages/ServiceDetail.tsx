import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Droplets, Search, Cable, Waves, CircleDot, Wrench, LucideIcon, Home, HelpCircle, BadgeCheck, Atom, AudioLines, Thermometer, Mic, Shield, FileText } from "lucide-react";
import FreeLeakConfirmationSection from "@/components/services/FreeLeakConfirmationSection";
import SEOHead from "@/components/seo/SEOHead";
// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection-hero.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation.png";

// Import water leak carousel images
import waterLeakHqScene from "@/assets/services/water-leak/hq-scene.jpg";
import waterLeakSportsFacility from "@/assets/services/water-leak/sports-facility.jpg";
import waterLeakUtilityRoom from "@/assets/services/water-leak/utility-room.jpg";
import waterLeakResidentialStreet from "@/assets/services/water-leak/residential-street.jpg";

// Import gallery images
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg";
import drainDetection3 from "@/assets/services/gallery/drain-detection-3.jpg";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg";
import poolLeak2 from "@/assets/services/gallery/pool-leak-2.jpg";
import poolLeak3 from "@/assets/services/gallery/pool-leak-3.jpg";
import waterLeak1 from "@/assets/services/gallery/water-leak-1.jpg";
import waterLeak2 from "@/assets/services/gallery/water-leak-2.jpg";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg";
import drainUnblocking1 from "@/assets/services/gallery/drain-unblocking-1.jpg";
import poolRepair1 from "@/assets/services/gallery/pool-repair-1.jpg";

// Water leak detection carousel images
const waterLeakCarouselImages = [
  { src: waterLeakHqScene, alt: "Canary Detect technicians at headquarters detecting leak in Lanzarote" },
  { src: waterLeakSportsFacility, alt: "Water leak detection at sports facility in Lanzarote" },
  { src: waterLeakUtilityRoom, alt: "Indoor utility room water leak detection with acoustic equipment" },
  { src: waterLeakResidentialStreet, alt: "Residential street water leak detection in Lanzarote" },
];

interface ServiceData {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  content: string;
  heroImage: string;
  galleryImages: string[];
  specialHeroImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  freeLeakSection?: {
    enabled: boolean;
    highlights: { icon: LucideIcon; text: string }[];
    includes: string[];
    importantNote: string;
    subNote: string;
  };
}

const servicesData: Record<string, ServiceData> = {
  "drain-detection": {
    title: "Drain & Pipe Surveys Lanzarote",
    description: "Professional CCTV drain and pipe inspection in Lanzarote. 6 camera systems for all pipe sizes - from bathroom pipes to main drains. Detailed video reports and accurate location tracing.",
    icon: Search,
    heroImage: drainDetectionImg,
    galleryImages: [pipeInspectionImg, drainDetection2, pipeInspection2],
    seo: {
      title: "Drain & Pipe Surveys Lanzarote | CCTV Inspection | Canary Detect",
      description: "Professional drain and pipe CCTV inspection in Lanzarote. 6 camera systems for all pipe sizes. Drain tracing, condition assessment, blockage detection & detailed video reports.",
      keywords: "drain survey Lanzarote, pipe inspection Lanzarote, CCTV drain survey, pipe condition assessment, drain camera inspection, pre-purchase pipe survey Canary Islands"
    },
    features: [
      "6 camera systems for all pipe sizes",
      "High-definition video inspection",
      "Advanced locators for exact positioning",
      "Depth measurement capability",
      "Pipe condition assessment",
      "Joint & corrosion detection",
      "Pre-purchase property surveys",
      "Detailed video reports",
    ],
    content: "Canary Detect have 6 camera systems of all sizes, allowing us to survey a variety of pipe sizes from very small bathroom pipes to main drains. Our advanced locators can pinpoint the exact position of the camera head from the surface, along with depth measurements. This means we can not only view your pipes internally but also accurately locate their route from above ground.\n\nUsing high-definition push-rod cameras, we can inspect pipes from 25mm to 300mm diameter, identifying issues such as scale buildup, corrosion, joint failures, and structural damage. This is particularly valuable for pre-purchase property surveys in Lanzarote.\n\nUnlike many other companies, we combine our jetting with our cameras. This enables us to inspect the pipes before and after cleaning, and using the cameras while we work ensures nothing is missed. We have a range of equipment for cleaning and unblocking pipes, from jetting machines to 'pipe knockers' for more difficult obstructions.\n\nIf pipes are full of standing water, grease, or blockages, we may need to clean them first before the cameras can see clearly.",
  },
  "underground-detection": {
    title: "Underground Pipe & Cable Detection Lanzarote",
    description: "Find water leak underground in Lanzarote. Locate buried utilities, pipes, and cables before you dig using ground-penetrating radar and electromagnetic locators.",
    icon: Cable,
    heroImage: undergroundDetectionImg,
    galleryImages: [undergroundDetection6],
    seo: {
      title: "Underground Water Leak Detection Lanzarote | Find Water Leak Underground",
      description: "Underground water leak detection and pipe location in Lanzarote. GPR radar, electromagnetic locators. Find buried pipes, cables & utilities. Construction site surveys.",
      keywords: "underground water leak detection, find water leak underground, underground pipe detection Lanzarote, buried pipe location, utility detection Canary Islands, underground leak repair"
    },
    features: [
      "Ground-penetrating radar (GPR)",
      "Electromagnetic pipe locators",
      "Utility mapping",
      "Depth estimation",
      "Construction site surveys",
      "As-built documentation",
    ],
    content: "Before any excavation work, it's essential to know what's buried beneath the surface. Our underground detection service in Lanzarote uses ground-penetrating radar and electromagnetic locating equipment to identify the position and depth of buried pipes, cables, and other utilities. This helps prevent costly damage and potential safety hazards during construction or landscaping projects.",
  },
  "water-leak-detection": {
    title: "Water Pipe Leak Detection Lanzarote",
    description: "Hidden water leak detection in Lanzarote with centimetre accuracy using our multi-technology approach and €80,000+ of specialist equipment. Water meter running? We'll find the leak.",
    icon: Droplets,
    heroImage: waterLeakDetectionImg,
    specialHeroImage: freeLeakConfirmationImg,
    galleryImages: [waterLeakHqScene, waterLeakSportsFacility, waterLeakUtilityRoom, waterLeakResidentialStreet],
    seo: {
      title: "Water Leak Detection Lanzarote | Hidden Water Leak Detection | No Find No Fee",
      description: "Professional water leak detection Lanzarote. Find hidden water leaks with centimetre accuracy. Water meter running? Thermal imaging, tracer gas, acoustic detection. No Find No Fee. €80,000+ equipment.",
      keywords: "water leak detection Canary Islands, hidden water leak detection, water meter running leak, water pipe leak detection, water pipe leak repair, leak detection Lanzarote, Lanzarote water leak specialist, accurate leak detection"
    },
    freeLeakSection: {
      enabled: true,
      highlights: [
        { icon: Home, text: "No visible signs - leaks go unnoticed" },
        { icon: HelpCircle, text: "Complex water systems - mains pumps tanks" },
        { icon: BadgeCheck, text: "FREE home visit and leak report" },
      ],
      includes: [
        "FREE leak confirmation test",
        "Professional written report",
        "Expert assessment of your property",
        "No obligation consultation",
      ],
      importantNote: "This service is to CONFIRM if you have a leak or not, with a detailed report. It is NOT a leak survey to pinpoint the exact location.",
      subNote: "For full leak pinpointing surveys, contact us for our comprehensive detection service.",
    },
    features: [
      "No Find, No Fee guarantee",
      "Centimetre accuracy",
      "Multi-technology confirmation",
      "Thermal imaging cameras",
      "Tracer gas detection (GASENSE)",
      "Acoustic geophones & pipe mics",
      "Non-invasive methods",
      "Insurance-ready reports",
    ],
    content: "Canary Detect carries over €80,000 worth of the latest leak-detection equipment, enabling us to offer a truly premium water leak detection service in Lanzarote. No single technology is 100% accurate, which is why we always confirm a leak location using at least two independent technologies.\n\nOur methods include: GASENSE tracer gas detection where we pressurise pipes with a safe nitrogen/hydrogen mixture and detect escaping gas at surface level; acoustic geophones that detect the sound of water escaping from pressurised pipes; infrared thermal imaging to identify temperature differences caused by leaking water; and pipe microphones inserted directly into pipework for centimetre-accurate positioning.\n\nWe operate on a No Find, No Fee basis - if we confirm you have a leak but cannot locate it, there is no charge. Our surveys include detailed professional reports suitable for insurance claims.",
  },
  "pool-leak-detection": {
    title: "Pool Leak Detection Lanzarote",
    description: "Swimming pool leak detection in Lanzarote - we don't just confirm a leak, we pinpoint its exact location. Pool losing water? We'll find why.",
    icon: Waves,
    heroImage: poolLeakDetectionImg,
    galleryImages: [poolLeak2, poolLeak3],
    seo: {
      title: "Pool Leak Detection Lanzarote | Swimming Pool Leak Detection | Playa Blanca",
      description: "Professional pool leak detection Lanzarote. Pool losing water? We pinpoint the exact leak location. Acoustic testing, pressure testing, CCTV inspection. Pool leak repair service available.",
      keywords: "pool leak detection Lanzarote, swimming pool leak detection, pool losing water leak, pool pipe leak repair, pool leak detection Playa Blanca, pool leak repair service"
    },
    features: [
      "Acoustic testing of all fittings",
      "Pool shell testing (acoustic & electronic)",
      "Light fitting inspection",
      "Pump, filter & housing testing",
      "Pressure testing of pipework",
      "CCTV internal pipe inspection",
      "Vacuum leak location",
      "H2/N2 gas detection",
      "Insurance-ready reports",
    ],
    content: "Unlike some companies, our pool leak detection surveys in Lanzarote not only confirm a leak is present and identify which section is affected, but we then go on to pinpoint the exact position of the leak.\n\nOur comprehensive survey tests every aspect of your pool including: acoustic testing around all fittings, pool shell, and lights; testing of pump, filter, and fittings in the pump housing; pressure testing of all pipework; and electronic testing of the pool shell.\n\nOnce a leaking section is found, we pinpoint the leak using CCTV cameras for internal pipe inspection, internal pipe hydrophones, external geophones, vacuum leak location, and H2/N2 gas insertion and detection.\n\nEvery survey includes a detailed professional report for your insurance company. Please note: for complete testing, the pool should be clean and filled to halfway up the skimmers. You're free to use your own contractor for repairs - you're not obligated to use our repair team.",
  },
  "leak-repair": {
    title: "Leak Repair Lanzarote",
    description: "Professional leak repair services in Lanzarote to fix water pipe leaks, pool pipe leaks and underground leaks - complete solution from detection to repair.",
    icon: Wrench,
    heroImage: leakRepairImg,
    galleryImages: [],
    seo: {
      title: "Leak Repair Lanzarote | Water Pipe Leak Repair | Pool Pipe Leak Repair",
      description: "Professional leak repair Lanzarote. Water pipe leak repair, pool pipe leak repair, underground leak repair. Emergency leak repair available. Complete detection to repair service.",
      keywords: "leak repair Lanzarote, water leak repair Canary Islands, water pipe leak repair, pool pipe leak repair, underground leak repair, emergency leak repair Lanzarote, leak detection and repair"
    },
    features: [
      "Pipe repairs",
      "Pool repairs",
      "Drain repairs",
      "Joint sealing",
      "Patch repairs",
      "Complete replacements",
    ],
    content: "Once we've located your leak in Lanzarote, we can also provide professional leak repair services. Our experienced team can carry out a wide range of repairs, from simple pipe fixes to more complex pool shell repairs. We use quality materials and proven techniques to ensure a lasting solution to your leak problems. Emergency leak repair available across Lanzarote.",
  },
  "drain-unblocking": {
    title: "Drain Unblocking Lanzarote",
    description: "Professional drain unblocking services in Lanzarote. Blocked drain? We clear all types of blockages quickly and effectively using high-pressure jetting and specialist equipment.",
    icon: Search,
    heroImage: drainUnblockingImg,
    galleryImages: [drainUnblocking1, drainDetection2],
    seo: {
      title: "Drain Unblocking Lanzarote | Blocked Drain Clearance | Emergency Service",
      description: "Professional drain unblocking Lanzarote. Blocked drain cleared fast with high-pressure jetting. Kitchen, bathroom, main drains. Emergency drain unblocking available. CCTV inspection included.",
      keywords: "drain unblocking Lanzarote, blocked drain Lanzarote, drain clearance, drain jetting, emergency drain unblocking, blocked toilet, blocked sink Canary Islands"
    },
    features: [
      "High-pressure water jetting",
      "Mechanical drain cleaning",
      "Root cutting & removal",
      "Grease & fat dissolution",
      "CCTV before & after inspection",
      "Emergency callout available",
      "All drain sizes cleared",
      "Preventative maintenance",
    ],
    content: "Blocked drains can cause serious disruption to your home or business in Lanzarote. Canary Detect provides fast, effective drain unblocking services using professional high-pressure jetting equipment capable of clearing even the most stubborn blockages.\n\nWe handle all types of blockages including: grease and fat buildup in kitchen drains, hair and soap accumulation in bathroom drains, foreign object removal, tree root intrusion, and scale deposits in older pipes.\n\nUnlike basic drain clearance, we always include CCTV inspection before and after the work. This ensures we identify the cause of the blockage, confirm it's completely cleared, and check for any underlying damage that could cause future problems.\n\nOur equipment includes high-pressure jetting machines up to 4000 PSI, mechanical 'pipe knockers' for solid blockages, and rotating cutting heads for root removal. Emergency drain unblocking is available across Lanzarote - call us for same-day service.",
  },
  "pool-leak-repair": {
    title: "Pool Leak Repair Lanzarote",
    description: "Professional swimming pool leak repair in Lanzarote. From pipe repairs to shell crack fixing, we repair all types of pool leaks with lasting solutions.",
    icon: Waves,
    heroImage: poolLeakRepairImg,
    galleryImages: [poolRepair1, poolLeak2],
    seo: {
      title: "Pool Leak Repair Lanzarote | Swimming Pool Pipe Repair | Pool Shell Repair",
      description: "Professional pool leak repair Lanzarote. Swimming pool pipe repair, shell crack repair, fitting replacement. Complete pool leak detection and repair service. Quality materials & lasting repairs.",
      keywords: "pool leak repair Lanzarote, swimming pool repair, pool pipe repair, pool shell repair, pool fitting repair, pool leak fix Canary Islands, pool leak detection and repair"
    },
    features: [
      "Pool pipe repairs",
      "Shell crack repairs",
      "Fitting & light replacement",
      "Skimmer repairs",
      "Return line repairs",
      "Main drain repairs",
      "Structural crack injection",
      "Quality materials guaranteed",
    ],
    content: "Once we've pinpointed your pool leak in Lanzarote, our experienced repair team can fix it properly. We specialise in all types of swimming pool leak repairs, ensuring your pool is watertight and ready to use.\n\nOur pool leak repair services include:\n\n**Pipe Repairs**: Leaking pool pipes are often the culprit. We excavate only where necessary, repair or replace damaged sections, and pressure test to confirm the fix.\n\n**Shell Repairs**: Cracks in the pool shell can develop over time due to ground movement or settling. We use specialist underwater repair compounds and structural injection techniques for lasting repairs.\n\n**Fitting Repairs**: Lights, returns, skimmers, and main drains all have potential leak points. We replace gaskets, reseal fittings, or replace components as needed.\n\n**Complete Service**: As Lanzarote's leak detection specialists, we offer a complete detection-to-repair service. This means one company, one responsibility, and no finger-pointing between contractors.\n\nAll repairs come with our quality guarantee. We use professional-grade materials designed for the Lanzarote climate and pool chemical environment.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const canonicalUrl = `https://canary-detect.com/services/${slug}`;
  
  // Carousel state for water-leak-detection
  const [currentSlide, setCurrentSlide] = useState(0);
  const isWaterLeakPage = slug === "water-leak-detection";
  
  useEffect(() => {
    if (!isWaterLeakPage) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % waterLeakCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isWaterLeakPage]);

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <SEOHead 
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonical={canonicalUrl}
        type="service"
      />
      {/* Hero Section - Carousel for water-leak-detection, standard for others */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {isWaterLeakPage ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={waterLeakCarouselImages[currentSlide].src}
                alt={waterLeakCarouselImages[currentSlide].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          ) : (
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-canary-white mb-6 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-canary-white text-lg md:text-xl leading-relaxed drop-shadow-md max-w-xl">
              {service.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="shadow-lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                <a href="tel:+34711051071">Call +34 711 051 071</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Carousel Indicators - Only for water leak detection */}
        {isWaterLeakPage && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {waterLeakCarouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentSlide 
                    ? "bg-primary w-12" 
                    : "bg-white/40 w-2 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </section>


      {/* Free Leak Confirmation Section - Only for Water Leak Detection */}
      {service.freeLeakSection?.enabled && (
        <FreeLeakConfirmationSection
          title={service.title}
          phone={"+34 711 051 071"}
          email={"info@canary-detect.com"}
          includes={service.freeLeakSection.includes}
          importantNote={service.freeLeakSection.importantNote}
          subNote={service.freeLeakSection.subNote}
        />
      )}

      {/* Content Section */}
      <section className="py-10 md:py-12 bg-background section-divider">
        <div className="container mx-auto px-4">
          
          {/* CTA Banner - Full Width at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-canary-navy to-slate-800 rounded-xl p-6 md:p-8 shadow-xl mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Get a Free Quote</h3>
                <p className="text-white/70 text-sm mt-1">
                  Contact us today for a free consultation for {service.title.toLowerCase()} services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="whitespace-nowrap" size="lg" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white whitespace-nowrap" size="lg" asChild>
                  <a href="tel:+34711051071">Call +34 711 051 071</a>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>No Find, No Fee Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span>€80,000+ Equipment</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FileText className="h-4 w-4 text-primary" />
                <span>Insurance Reports</span>
              </div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                About This Service
              </h2>
              
              {/* Split content into paragraphs with better formatting */}
              <div className="space-y-4">
                {service.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Technology Methods - Only for water leak detection */}
              {slug === 'water-leak-detection' && (
                <div className="bg-gradient-to-br from-slate-50 to-muted/50 rounded-2xl p-6 md:p-8 border border-border mt-6">
                  <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-canary-navy rounded-lg flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    Detection Technologies We Use
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Atom, name: "GASENSE", desc: "Tracer gas detection for buried pipes" },
                      { icon: AudioLines, name: "Geophones", desc: "Acoustic listening devices" },
                      { icon: Thermometer, name: "Thermal Imaging", desc: "Infrared temperature detection" },
                      { icon: Mic, name: "Pipe Mic", desc: "Centimetre-accurate positioning" },
                    ].map((tech, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <tech.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{tech.name}</p>
                          <p className="text-sm text-muted-foreground">{tech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Features + Gallery */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-bold mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              {service.galleryImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-heading text-xl font-bold mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img 
                        src={service.heroImage} 
                        alt={`${service.title} 1`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {service.galleryImages.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-[4/3] rounded-lg overflow-hidden"
                      >
                        <img 
                          src={img} 
                          alt={`${service.title} ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
