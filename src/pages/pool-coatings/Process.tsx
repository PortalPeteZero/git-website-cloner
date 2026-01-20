import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Droplets, Wrench, Paintbrush, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Droplets,
    title: "1. Pool Preparation",
    description: "The pool is drained and thoroughly cleaned. We remove any loose material, algae, and prepare the surface for optimal adhesion.",
    duration: "Day 1",
  },
  {
    icon: Wrench,
    title: "2. Surface Repair",
    description: "Any cracks, chips, or damage to the fibreglass shell is repaired. The surface is sanded to create the perfect key for the coating.",
    duration: "Day 1-2",
  },
  {
    icon: Paintbrush,
    title: "3. ECO Finish Application",
    description: "The ECO Finish coating is thermally sprayed onto the prepared surface. This creates a molecular bond with the fibreglass for maximum durability.",
    duration: "Day 2-3",
  },
  {
    icon: Sparkles,
    title: "4. Final Inspection & Refill",
    description: "After curing, we inspect the finish, complete any touch-ups, and refill your pool. You're ready to swim within hours.",
    duration: "Day 3",
  },
];

const expectations = [
  "Pool drained for 2-3 days",
  "Minimal disruption to your property",
  "Professional clean-up after completion",
  "Full walkthrough and care instructions",
  "Warranty documentation provided",
];

export default function Process() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-canary-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/95 to-canary-dark/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
              How It Works
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-canary-white mb-4">
              The ECO Finish Process
            </h1>
            <p className="text-lg text-canary-white/80">
              From start to finish in just 2-3 days. Here's what to expect when we resurface your pool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-24 bg-border mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">What to Expect</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                A Professional Experience
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We pride ourselves on delivering a seamless, professional service. Here's what 
                you can expect when you choose Canary Detect for your ECO Finish installation.
              </p>
              <ul className="space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-canary-dark rounded-lg p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-canary-white mb-6">
                Timeline at a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-canary-white/10 pb-4">
                  <span className="text-canary-white/80">Initial Consultation</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center border-b border-canary-white/10 pb-4">
                  <span className="text-canary-white/80">Site Survey</span>
                  <span className="text-primary font-medium">1-2 hours</span>
                </div>
                <div className="flex justify-between items-center border-b border-canary-white/10 pb-4">
                  <span className="text-canary-white/80">Installation</span>
                  <span className="text-primary font-medium">2-3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-canary-white/80">Pool Ready to Use</span>
                  <span className="text-primary font-medium">Day 3</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact us for a free consultation and quote. We'll assess your pool and provide 
              a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pool-coatings/colours">
                  Explore Colours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
