import { motion } from "framer-motion";
import { Atom, AudioLines, Thermometer, Mic, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const technologies = [
  {
    name: "GASENSE",
    subtitle: "Tracer Gas Detection",
    icon: Atom,
    description:
      "We pressurise pipes with a safe nitrogen/hydrogen mix. Gas escapes through faults and rises to the surface where our sensors detect it - perfect for buried pipework.",
  },
  {
    name: "Geophone",
    subtitle: "Acoustic Listening",
    icon: AudioLines,
    description:
      "Detects the distinctive sound of water escaping from pressurised pipes. We identify the loudest point along the pipe route to locate the leak.",
  },
  {
    name: "Thermal Imaging",
    subtitle: "Infrared Detection",
    icon: Thermometer,
    description:
      "Our thermal cameras detect temperature anomalies caused by leaking water - revealing hidden moisture behind walls and under floors.",
  },
  {
    name: "Pipe Mic",
    subtitle: "Internal Microphone",
    icon: Mic,
    description:
      "Inserted directly into pipework, this amplifies leak sounds and can be located from above ground to centimetre accuracy - our most precise method.",
  },
  {
    name: "CCTV Inspection",
    subtitle: "Internal Cameras",
    icon: Video,
    description:
      "Four camera systems for different pipe sizes let us visually identify cracks, corrosion, root intrusion, and joint failures with pinpoint accuracy.",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-20 md:py-28 bg-canary-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Multi-Technology Detection
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            No single method is 100% accurate. That's why we confirm every leak using{" "}
            <span className="text-primary font-semibold">at least two independent technologies</span>,
            delivering centimetre accuracy and keeping repair costs to an absolute minimum.
          </p>
        </motion.div>

        {/* Equipment value badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-primary/20 border border-primary/30 rounded-full px-6 py-3 inline-flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">
              Over <span className="text-primary font-bold">€80,000</span> of specialist equipment
            </span>
          </div>
        </motion.div>

        {/* Technology cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-1">
                {tech.name}
              </h3>
              <p className="text-primary text-xs font-medium uppercase tracking-wide mb-3">
                {tech.subtitle}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="secondary" asChild>
            <Link to="/technology">Learn More About Our Technology</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
