import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Droplets, Search, Cable, Waves, CircleDot, Wrench } from "lucide-react";
import ServiceCard from "@/components/home/ServiceCard";

const services = [
  {
    title: "Drain Detection",
    description: "Locate and identify drainage issues using advanced camera inspection and tracing technology. We can find blockages, breaks, and root intrusions.",
    icon: Search,
    href: "/services/drain-detection",
  },
  {
    title: "Pipe Inspection",
    description: "CCTV pipe inspection to assess the condition of your pipes and identify blockages, damage, or deterioration before they become major problems.",
    icon: CircleDot,
    href: "/services/pipe-inspection",
  },
  {
    title: "Underground Detection",
    description: "Locate underground pipes, cables, and utilities using ground-penetrating radar and electromagnetic pipe locators. Essential for construction and renovation projects.",
    icon: Cable,
    href: "/services/underground-detection",
  },
  {
    title: "Water Leak Detection",
    description: "Find hidden water leaks in walls, floors, and ceilings using acoustic listening devices and thermal imaging cameras. Non-invasive and accurate.",
    icon: Droplets,
    href: "/services/water-leak-detection",
  },
  {
    title: "Pool Leak Detection",
    description: "Specialist pool and spa leak detection to stop water loss and reduce chemical costs. We use pressure testing and dye testing techniques.",
    icon: Waves,
    href: "/services/pool-leak-detection",
  },
  {
    title: "Leak Repair",
    description: "Professional leak repair services once we've located the problem. We offer complete solutions from detection to repair.",
    icon: Wrench,
    href: "/services/leak-repair",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-canary-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium">Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mt-2 mb-6">
              Professional Leak Detection Services
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              We offer a comprehensive range of leak detection and repair services across the Canary Islands, 
              using the latest technology and equipment to find and fix leaks quickly and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
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
