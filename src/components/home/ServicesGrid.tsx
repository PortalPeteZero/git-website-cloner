import { motion } from "framer-motion";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Import service hero images
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import undergroundDetectionImg from "@/assets/services/underground-detection.jpg";
import waterLeakDetectionImg from "@/assets/services/water-leak-detection.jpg";
import poolLeakDetectionImg from "@/assets/services/pool-leak-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";

// Import gallery images for carousels
import drainDetection2 from "@/assets/services/gallery/drain-detection-2.jpg";
import drainDetection3 from "@/assets/services/gallery/drain-detection-3.jpg";
import pipeInspection2 from "@/assets/services/gallery/pipe-inspection-2.jpg";
import pipeInspection3 from "@/assets/services/gallery/pipe-inspection-3.jpg";
import poolLeak2 from "@/assets/services/gallery/pool-leak-2.jpg";
import poolLeak3 from "@/assets/services/gallery/pool-leak-3.jpg";
import waterLeak1 from "@/assets/services/gallery/water-leak-1.jpg";
import waterLeak2 from "@/assets/services/gallery/water-leak-2.jpg";
import undergroundDetection6 from "@/assets/services/gallery/underground-detection-6.jpg";

const services = [
  {
    title: "Drain Detection",
    description: "Locate and identify drainage issues using advanced camera inspection and tracing technology.",
    icon: Search,
    href: "/services/drain-detection",
    images: [drainDetectionImg, drainDetection2, drainDetection3],
  },
  {
    title: "Pipe Inspection",
    description: "CCTV pipe inspection to assess the condition of your pipes and identify blockages or damage.",
    icon: CircleDot,
    href: "/services/pipe-inspection",
    images: [pipeInspectionImg, pipeInspection2, pipeInspection3],
  },
  {
    title: "Underground Detection",
    description: "Locate underground pipes, cables, and utilities using ground-penetrating radar and pipe locators.",
    icon: Cable,
    href: "/services/underground-detection",
    images: [undergroundDetectionImg, undergroundDetection6],
  },
  {
    title: "Water Leak Detection",
    description: "Find hidden water leaks in walls, floors, and ceilings using acoustic and thermal imaging.",
    icon: Droplets,
    href: "/services/water-leak-detection",
    images: [waterLeakDetectionImg, waterLeak1, waterLeak2],
  },
  {
    title: "Pool Leak Detection",
    description: "Specialist pool and spa leak detection to stop water loss and reduce chemical costs.",
    icon: Waves,
    href: "/services/pool-leak-detection",
    images: [poolLeakDetectionImg, poolLeak2, poolLeak3],
  },
  {
    title: "Leak Repair",
    description: "Professional leak repair services once we've located the problem.",
    icon: Wrench,
    href: "/services/leak-repair",
    images: [leakRepairImg],
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-canary-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Our Services
          </h2>
          <p className="text-white/70">
            We offer a comprehensive range of leak detection and repair services 
            across Lanzarote, using the latest technology and equipment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
