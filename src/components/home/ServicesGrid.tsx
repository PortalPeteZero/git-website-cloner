import { motion } from "framer-motion";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Drain Detection",
    description: "Locate and identify drainage issues using advanced camera inspection and tracing technology.",
    icon: Search,
    href: "/services/drain-detection",
  },
  {
    title: "Pipe Inspection",
    description: "CCTV pipe inspection to assess the condition of your pipes and identify blockages or damage.",
    icon: CircleDot,
    href: "/services/pipe-inspection",
  },
  {
    title: "Underground Detection",
    description: "Locate underground pipes, cables, and utilities using ground-penetrating radar and pipe locators.",
    icon: Cable,
    href: "/services/underground-detection",
  },
  {
    title: "Water Leak Detection",
    description: "Find hidden water leaks in walls, floors, and ceilings using acoustic and thermal imaging.",
    icon: Droplets,
    href: "/services/water-leak-detection",
  },
  {
    title: "Pool Leak Detection",
    description: "Specialist pool and spa leak detection to stop water loss and reduce chemical costs.",
    icon: Waves,
    href: "/services/pool-leak-detection",
  },
  {
    title: "Leak Repair",
    description: "Professional leak repair services once we've located the problem.",
    icon: Wrench,
    href: "/services/leak-repair",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-medium">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of leak detection and repair services 
            across the Canary Islands, using the latest technology and equipment.
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
