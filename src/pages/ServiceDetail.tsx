import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Droplets, Search, Cable, Waves, CircleDot, Wrench, LucideIcon } from "lucide-react";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";

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

interface ServiceData {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  content: string;
  heroImage: string;
  galleryImages: string[];
}

const servicesData: Record<string, ServiceData> = {
  "drain-detection": {
    title: "Drain Detection & CCTV Surveys",
    description: "Professional drain tracing, CCTV inspection, and unblocking services using 6 different camera systems for pipes of all sizes.",
    icon: Search,
    heroImage: drainDetectionImg,
    galleryImages: [drainDetection2, drainDetection3],
    features: [
      "6 camera systems for all pipe sizes",
      "Advanced locators for exact positioning",
      "Depth measurement capability",
      "Jetting & unblocking services",
      "Before and after inspection",
      "Detailed video reports",
    ],
    content: "Canary Detect have 6 camera systems of all sizes, allowing us to survey a variety of pipe sizes from very small bathroom pipes to main drains. Our advanced locators can pinpoint the exact position of the camera head from the surface, along with depth measurements. This means we can not only view your pipes internally but also accurately locate their route from above ground.\n\nUnlike many other companies, we combine our jetting with our cameras. This enables us to inspect the pipes before and after cleaning, and using the cameras while we work ensures nothing is missed. We have a range of equipment for cleaning and unblocking pipes, from jetting machines to 'pipe knockers' for more difficult obstructions.\n\nIf pipes are full of standing water, grease, or blockages, we may need to clean them first before the cameras can see clearly.",
  },
  "pipe-inspection": {
    title: "Pipe Inspection",
    description: "Comprehensive CCTV pipe inspection to assess condition and identify problems before they become costly repairs.",
    icon: CircleDot,
    heroImage: pipeInspectionImg,
    galleryImages: [pipeInspection2, pipeInspection3],
    features: [
      "High-definition camera inspection",
      "Pipe condition assessment",
      "Joint displacement detection",
      "Corrosion identification",
      "Pre-purchase surveys",
      "Recorded video footage",
    ],
    content: "Our pipe inspection service provides a thorough assessment of your plumbing system's condition. Using high-definition push-rod cameras, we can inspect pipes from 25mm to 300mm diameter, identifying issues such as scale buildup, corrosion, joint failures, and structural damage. This is particularly valuable for pre-purchase property surveys.",
  },
  "underground-detection": {
    title: "Underground Pipe & Cable Detection",
    description: "Locate buried utilities, pipes, and cables before you dig using ground-penetrating radar and electromagnetic locators.",
    icon: Cable,
    heroImage: undergroundDetectionImg,
    galleryImages: [undergroundDetection6],
    features: [
      "Ground-penetrating radar (GPR)",
      "Electromagnetic pipe locators",
      "Utility mapping",
      "Depth estimation",
      "Construction site surveys",
      "As-built documentation",
    ],
    content: "Before any excavation work, it's essential to know what's buried beneath the surface. Our underground detection service uses ground-penetrating radar and electromagnetic locating equipment to identify the position and depth of buried pipes, cables, and other utilities. This helps prevent costly damage and potential safety hazards during construction or landscaping projects.",
  },
  "water-leak-detection": {
    title: "Water Pipe Leak Detection",
    description: "Find hidden water leaks with centimetre accuracy using our multi-technology approach and €80,000+ of specialist equipment.",
    icon: Droplets,
    heroImage: waterLeakDetectionImg,
    galleryImages: [waterLeak1, waterLeak2],
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
    content: "Canary Detect carries over €80,000 worth of the latest leak-detection equipment, enabling us to offer a truly premium service. No single technology is 100% accurate, which is why we always confirm a leak location using at least two independent technologies.\n\nOur methods include: GASENSE tracer gas detection where we pressurise pipes with a safe nitrogen/hydrogen mixture and detect escaping gas at surface level; acoustic geophones that detect the sound of water escaping from pressurised pipes; infrared thermal imaging to identify temperature differences caused by leaking water; and pipe microphones inserted directly into pipework for centimetre-accurate positioning.\n\nWe operate on a No Find, No Fee basis - if we confirm you have a leak but cannot locate it, there is no charge. Our surveys include detailed professional reports suitable for insurance claims.",
  },
  "pool-leak-detection": {
    title: "Pool Leak Detection",
    description: "Comprehensive swimming pool and spa leak detection - we don't just confirm a leak, we pinpoint its exact location.",
    icon: Waves,
    heroImage: poolLeakDetectionImg,
    galleryImages: [poolLeak2, poolLeak3],
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
    content: "Unlike some companies, our pool surveys not only confirm a leak is present and identify which section is affected, but we then go on to pinpoint the exact position of the leak.\n\nOur comprehensive survey tests every aspect of your pool including: acoustic testing around all fittings, pool shell, and lights; testing of pump, filter, and fittings in the pump housing; pressure testing of all pipework; and electronic testing of the pool shell.\n\nOnce a leaking section is found, we pinpoint the leak using CCTV cameras for internal pipe inspection, internal pipe hydrophones, external geophones, vacuum leak location, and H2/N2 gas insertion and detection.\n\nEvery survey includes a detailed professional report for your insurance company. Please note: for complete testing, the pool should be clean and filled to halfway up the skimmers. You're free to use your own contractor for repairs - you're not obligated to use our repair team.",
  },
  "leak-repair": {
    title: "Leak Repair",
    description: "Professional leak repair services to fix the problems we find, providing a complete solution from detection to repair.",
    icon: Wrench,
    heroImage: leakRepairImg,
    galleryImages: [],
    features: [
      "Pipe repairs",
      "Pool repairs",
      "Drain repairs",
      "Joint sealing",
      "Patch repairs",
      "Complete replacements",
    ],
    content: "Once we've located your leak, we can also provide professional repair services. Our experienced team can carry out a wide range of repairs, from simple pipe fixes to more complex pool shell repairs. We use quality materials and proven techniques to ensure a lasting solution to your leak problems.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

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
      {/* Hero Section with Image */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image - Full visibility */}
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay - only on left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/80 to-transparent" />
          {/* Bottom gradient for smooth transition */}
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
                <a href="tel:+34646022695">Call Now</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.content}
                </p>

                {/* Image Gallery */}
                {service.galleryImages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-heading text-xl font-bold mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] rounded-lg overflow-hidden"
                      >
                        <img 
                          src={service.heroImage} 
                          alt={`${service.title} 1`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                      {service.galleryImages.map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index + 1) * 0.1 }}
                          className="aspect-[4/3] rounded-lg overflow-hidden"
                        >
                          <img 
                            src={img} 
                            alt={`${service.title} ${index + 2}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="font-heading text-xl font-bold mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted rounded-lg p-6 sticky top-24"
              >
                <h3 className="font-heading text-xl font-bold mb-4">Get a Quote</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Contact us today for a free consultation and quote for {service.title.toLowerCase()} services.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+34646022695">Call Now</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
