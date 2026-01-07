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
    title: "Drain Detection",
    description: "Professional drain tracing and detection services using the latest camera and electronic tracing technology.",
    icon: Search,
    heroImage: drainDetectionImg,
    galleryImages: [drainDetection2, drainDetection3],
    features: [
      "CCTV drain surveys",
      "Drain tracing with sonde",
      "Blockage location",
      "Root intrusion detection",
      "Pipe material identification",
      "Detailed video reports",
    ],
    content: "Our drain detection service uses advanced CCTV camera equipment to inspect the inside of your drains and identify any issues. We can locate blockages, cracks, root intrusions, and other problems that may be affecting your drainage system. Our electronic sonde tracing allows us to map the exact route of your drains, even when buried deep underground.",
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
    description: "Find hidden water leaks without destructive investigation using acoustic and thermal imaging technology.",
    icon: Droplets,
    heroImage: waterLeakDetectionImg,
    galleryImages: [waterLeak1, waterLeak2],
    features: [
      "Acoustic leak detection",
      "Thermal imaging cameras",
      "Pressure testing",
      "Tracer gas detection",
      "Non-invasive methods",
      "Accurate pinpointing",
    ],
    content: "Hidden water leaks can cause significant damage to your property and result in high water bills. Our water leak detection service uses a combination of acoustic listening devices, thermal imaging cameras, and tracer gas technology to pinpoint the exact location of leaks in walls, floors, and underground pipes - all without unnecessary damage to your property.",
  },
  "pool-leak-detection": {
    title: "Pool Leak Detection",
    description: "Specialist swimming pool and spa leak detection to stop water loss and reduce chemical and heating costs.",
    icon: Waves,
    heroImage: poolLeakDetectionImg,
    galleryImages: [poolLeak2, poolLeak3],
    features: [
      "Pressure testing",
      "Dye testing",
      "Electronic leak detection",
      "Structural crack detection",
      "Pipework inspection",
      "Underwater camera surveys",
    ],
    content: "A leaking pool can waste thousands of liters of water and chemicals every month. Our specialist pool leak detection service uses a range of techniques including pressure testing, dye testing, and electronic detection to find leaks in the pool shell, pipework, fittings, and equipment. We can detect leaks in all types of pools including concrete, liner, and fiberglass.",
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
      <section className="relative bg-canary-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/90 to-canary-dark/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mb-6">
              {service.title}
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              {service.description}
            </p>
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
