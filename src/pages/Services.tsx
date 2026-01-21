import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench } from "lucide-react";
import ServiceCard from "@/components/home/ServiceCard";
import SEOHead from "@/components/seo/SEOHead";
import ServiceSchema from "@/components/seo/ServiceSchema";
import PricingSection from "@/components/services/PricingSection";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";
import drainUnblockingImg from "@/assets/services/drain-unblocking.jpg";
import poolLeakRepairImg from "@/assets/services/pool-leak-repair.jpg";
import servicesHero from "@/assets/hero/services-hero.jpg";

// Import gallery images for carousels
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg";
import poolLeak2 from "@/assets/services/gallery/pool-leak-2.jpg";
import poolLeak3 from "@/assets/services/gallery/pool-leak-3.jpg";
import waterLeak1 from "@/assets/services/gallery/water-leak-1.jpg";
import waterLeak2 from "@/assets/services/gallery/water-leak-2.jpg";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg";
import drainUnblocking1 from "@/assets/services/gallery/drain-unblocking-1.jpg";
import poolRepair1 from "@/assets/services/gallery/pool-repair-1.jpg";

const services = [
  {
    title: "Drain & Pipe Surveys",
    description: "CCTV camera inspection and drain tracing to locate blockages, breaks, root intrusions and pipe condition issues. 6 camera systems for all pipe sizes with detailed video reports.",
    icon: Search,
    href: "/services/drain-detection",
    images: [drainDetectionImg, pipeInspectionImg, drainDetection2, pipeInspection2],
  },
  {
    title: "Drain Unblocking",
    description: "Blocked drain? High-pressure jetting and mechanical cleaning to clear all types of blockages fast. CCTV inspection before and after. Emergency callout available.",
    icon: CircleDot,
    href: "/services/drain-unblocking",
    images: [drainUnblockingImg, drainUnblocking1, pipeInspection3],
  },
  {
    title: "Underground Detection",
    description: "Need to find buried pipes before digging? Avoid costly damage by locating underground pipes, cables, and utilities with ground-penetrating radar and electromagnetic locators.",
    icon: Cable,
    href: "/services/underground-detection",
    images: [undergroundDetectionImg, undergroundDetection6],
  },
  {
    title: "Water Leak Detection",
    description: "Damp walls? High water bills? Meter running when taps are off? Find hidden water leaks in walls, floors, and ceilings using acoustic and thermal imaging.",
    icon: Droplets,
    href: "/services/water-leak-detection",
    images: [waterLeakDetectionImg, waterLeak1, waterLeak2],
  },
  {
    title: "Swimming Pool Leak Detection",
    description: "Is your swimming pool losing water every day? Constant refilling? We'll find the leak using pressure testing and dye testing techniques to stop water loss.",
    icon: Waves,
    href: "/services/pool-leak-detection",
    images: [poolLeakDetectionImg, poolLeak2, poolLeak3],
  },
  {
    title: "Leak Repair",
    description: "Found a water leak? We'll fix it fast. Professional pipe and plumbing repairs once we've located the problem. Complete solutions from detection to repair.",
    icon: Wrench,
    href: "/services/leak-repair",
    images: [leakRepairImg],
  },
  {
    title: "Pool Leak Repair",
    description: "Swimming pool leaking? We repair pool pipes, shell cracks, fittings and equipment. Complete detection-to-repair service with quality materials guaranteed.",
    icon: Waves,
    href: "/services/pool-leak-repair",
    images: [poolLeakRepairImg, poolRepair1, poolLeak2],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead 
        title="Leak Detection Services Lanzarote | Water, Pool & Pipe Detection & Repair"
        description="Complete leak detection and repair services across Lanzarote. Swimming pool leak detection, water pipe leaks, underground detection. Professional equipment, accurate results. Free quotes available."
        keywords="leak detection service Lanzarote, professional leak detection, water pipe leak detection, swimming pool leak detection, underground water leak detection, pool pipe leak repair, water pipe leak repair, leak detection and repair, accurate leak detection, leak detection company Lanzarote"
        canonical="https://canary-detect.com/services"
      />
      <ServiceSchema />
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHero} 
            alt="Professional leak detection equipment case Lanzarote"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.9)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,41,59,0.6)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Leak Detection Services <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Lanzarote</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              Professional leak detection and repair services across Lanzarote and the Canary Islands. 
              We use <Link to="/technology" className="underline hover:text-primary transition-colors">€80,000+ of specialist equipment</Link> including thermal imaging, acoustic sensors 
              and tracer gas to find water leaks, swimming pool leaks and underground pipe leaks with centimetre accuracy.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-background section-noise">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Guarantees */}
      <PricingSection />

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Canary Detect Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">1</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Non-Invasive Methods</h3>
              <p className="text-muted-foreground text-sm">
                We use advanced technology to find leaks without breaking walls or floors unnecessarily.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">2</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Latest Technology</h3>
              <p className="text-muted-foreground text-sm">
                Acoustic sensors, thermal cameras, and GPR equipment for accurate detection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading font-bold text-2xl">3</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Fast Results</h3>
              <p className="text-muted-foreground text-sm">
                Quick response times and efficient detection means less disruption for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
