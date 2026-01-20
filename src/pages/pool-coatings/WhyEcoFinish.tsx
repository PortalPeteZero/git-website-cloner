import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    feature: "Surface Lifespan",
    eco: "10+ years",
    traditional: "1–2 years before repainting",
  },
  {
    feature: "Fade & Chalk Resistance",
    eco: "No mottling or chalking",
    traditional: "Prone to fading and blistering",
  },
  {
    feature: "Chemical Resistance",
    eco: "Highly resistant",
    traditional: "Discolours with imbalanced chemistry",
  },
  {
    feature: "Pool Downtime",
    eco: "2–3 days once",
    traditional: "1–2 weeks every 1–2 years",
  },
  {
    feature: "Water Usage",
    eco: "One drain at install",
    traditional: "Drain & refill each resurface",
  },
  {
    feature: "Long-Term Cost",
    eco: "Lower total investment",
    traditional: "Recurring expense + lost income",
  },
];

const problems = [
  "1–2 weeks downtime",
  "Expensive water refills",
  "Lost rental bookings",
];

export default function WhyEcoFinish() {
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
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-canary-white mb-4">
              Stop the Endless Resurfacing Cycle
            </h1>
            <p className="text-lg md:text-xl text-canary-white/80 mb-6">
              Fibreglass pool owners in the Canaries know the pattern: gel coat fades, paint peels, 
              and every 1–2 years you're paying for another resurface.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-canary-white/70 text-sm">
              {problems.map((problem) => (
                <span key={problem} className="flex items-center gap-2">
                  <X className="h-4 w-4 text-destructive" />
                  {problem}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              ECO Finish: A 10+ Year Solution
            </h2>
            <p className="text-muted-foreground">
              One application. No more annual repainting. See how it compares:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="grid grid-cols-3 gap-2 p-4 bg-canary-dark text-canary-white font-semibold text-sm">
                <div></div>
                <div className="text-center">ECO Finish</div>
                <div className="text-center text-canary-white/70">Gel Coat / Paint</div>
              </div>
              {comparisons.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-2 p-4 text-sm ${
                    index % 2 === 0 ? "bg-card" : "bg-muted"
                  }`}
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center flex items-center justify-center gap-2 text-primary font-medium">
                    <Check className="h-4 w-4" />
                    {row.eco}
                  </div>
                  <div className="text-center text-muted-foreground">{row.traditional}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">The Solution</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                Built for the Canary Islands
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ECO Finish was specifically designed for harsh conditions. The UV-stable pigments 
                won't fade under our intense sun, and the coating is resistant to the salt air 
                that corrodes traditional finishes.
              </p>
              <ul className="space-y-3">
                {[
                  "UV-stable pigments that won't fade or chalk",
                  "Resistant to salt air corrosion",
                  "Reduces algae growth naturally",
                  "Eco-friendly application process",
                  "21+ beautiful water colours available",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
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
              <h3 className="font-heading text-2xl font-bold text-canary-white mb-4">
                Perfect for Holiday Rentals
              </h3>
              <p className="text-canary-white/80 mb-6">
                With ECO Finish, you'll avoid the annual pool closure that costs you bookings. 
                One installation, then years of trouble-free pool use.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-canary-white/5 rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-canary-white/60">Year Lifespan</p>
                </div>
                <div className="bg-canary-white/5 rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary">2-3</p>
                  <p className="text-sm text-canary-white/60">Days Install</p>
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
              Ready to Break the Cycle?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Get a free consultation and quote for your pool. We serve all of Lanzarote.
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
