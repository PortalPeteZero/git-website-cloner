import { Droplets, Search, Cable, Waves, CircleDot, Wrench } from "lucide-react";
import ServiceCardLite from "./ServiceCardLite";

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
    <section className="py-20 md:py-28 bg-canary-navy relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Radial gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Our Services
          </h2>
          <p className="text-white/70">
            We offer a comprehensive range of leak detection and repair services 
            across Lanzarote, using the latest technology and equipment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCardLite
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              image={service.images?.[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
