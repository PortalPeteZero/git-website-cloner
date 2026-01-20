import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Shield, Droplets, Leaf, Check, Clock, Palette } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Sun, text: "UV-stable pigments that won't fade" },
  { icon: Shield, text: "Resistant to salt air corrosion" },
  { icon: Droplets, text: "Reduces algae growth naturally" },
  { icon: Leaf, text: "Eco-friendly application" },
];

const comparisons = [
  { feature: "Surface Lifespan", eco: "10+ years", traditional: "1–2 years" },
  { feature: "Pool Downtime", eco: "2–3 days once", traditional: "1–2 weeks yearly" },
  { feature: "Fade Resistance", eco: "No mottling", traditional: "Prone to fading" },
  { feature: "Long-Term Cost", eco: "Lower total", traditional: "Recurring expense" },
];

export default function PoolCoatingsIndex() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-canary-dark py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/95 to-canary-dark/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
              ECO Finish Pool Coatings
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-canary-white mb-6">
              Stop Repainting Your Pool Every Year
            </h1>
            <p className="text-lg md:text-xl text-canary-white/80 mb-4 leading-relaxed">
              Tired of re-gel-coating or repainting your fibreglass pool? ECO Finish offers a 
              longer-lasting alternative — designed to perform for <strong className="text-canary-white">10+ years</strong>.
            </p>
            <p className="text-sm text-canary-white/60 mb-8">
              Less draining. Less downtime. Less wasted water. Ideal for Canary Islands pools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/pool-coatings/colours">
                  <Palette className="mr-2 h-5 w-5" />
                  Explore Colours
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-canary-white/30 text-canary-white hover:bg-canary-white/10" asChild>
                <Link to="/pool-coatings/why-eco-finish">
                  Why ECO Finish?
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">Benefits</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Built for Canary Island Conditions
            </h2>
            <p className="text-muted-foreground">
              ECO Finish is specifically designed to withstand harsh UV, salt air, and year-round pool use.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 text-center border border-border shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-medium text-foreground">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Comparison</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                ECO Finish vs Traditional Methods
              </h2>
              <p className="text-muted-foreground mb-8">
                See how ECO Finish compares to gel coat and paint resurfacing.
              </p>

              <div className="space-y-4">
                {comparisons.map((row) => (
                  <div key={row.feature} className="bg-background rounded-lg p-4 border border-border">
                    <p className="font-medium text-sm text-muted-foreground mb-2">{row.feature}</p>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-primary font-semibold">
                        <Check className="h-4 w-4" />
                        {row.eco}
                      </span>
                      <span className="text-muted-foreground">{row.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8" asChild>
                <Link to="/pool-coatings/why-eco-finish">
                  See Full Comparison
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-canary-dark rounded-lg p-8 text-center"
            >
              <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold text-canary-white mb-4">
                10+ Year Durability
              </h3>
              <p className="text-canary-white/80 mb-6">
                One application. No more annual repainting. ECO Finish is designed to last, 
                saving you time, money, and water.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">21+</p>
                  <p className="text-sm text-canary-white/60">Colours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">2-3</p>
                  <p className="text-sm text-canary-white/60">Days Install</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-canary-white/60">Year Life</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Colour Preview */}
      <section className="py-12 bg-canary-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-canary-white mb-1">21+ Colour Options</h3>
              <p className="text-canary-white/70 text-sm">From vibrant blues to natural sands</p>
            </div>
            <div className="flex items-center gap-2">
              {["#0077B6", "#48CAE4", "#023E8A", "#00B4D8", "#8E9AAF", "#E8D5B7"].map((color) => (
                <div
                  key={color}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <Button variant="outline" className="border-canary-white/30 text-canary-white hover:bg-canary-white/10" asChild>
              <Link to="/pool-coatings/colours">
                Explore Colours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Pool?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact us for a free consultation and quote. We serve all of Lanzarote.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
