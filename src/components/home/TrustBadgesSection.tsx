import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Award, Clock, MapPin, FileCheck, Wrench } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Leaks Found", icon: Wrench },
  { value: 40, suffix: "+", label: "Years Experience", icon: Award },
  { value: 100, suffix: "%", label: "Success Rate", icon: Shield },
  { value: 24, suffix: "hr", label: "Emergency Service", icon: Clock },
];

const badges = [
  { label: "No Find, No Fee", icon: Shield, description: "Risk-free guarantee" },
  { label: "€80,000+ Equipment", icon: Award, description: "Latest technology" },
  { label: "All Lanzarote", icon: MapPin, description: "Island-wide coverage" },
  { label: "Insurance Reports", icon: FileCheck, description: "Included free" },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const TrustBadgesSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Statistics Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -2 }}
              className="group bg-card border-2 border-border hover:border-primary/30 rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 mb-3 transition-all duration-300">
                <badge.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                {badge.label}
              </h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
