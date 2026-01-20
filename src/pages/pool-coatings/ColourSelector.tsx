import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import finishData from "@/data/finishes.json";

const popularFinishes = ["blue-lagoon", "mediterranean-blue", "french-grey", "sandy-beach", "santorini"];

export default function ColourSelector() {
  const brilloBlancoFinishes = finishData.finishes.filter((finish) => finish.productLine === "Brillo Blanco");
  const otherFinishes = finishData.finishes.filter((finish) => finish.productLine !== "Brillo Blanco");

  const FinishCard = ({ finish }: { finish: typeof finishData.finishes[0] }) => {
    const isPopular = popularFinishes.includes(finish.id);

    return (
      <Link
        to={`/pool-coatings/colours/${finish.id}`}
        className="group text-left rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative"
      >
        {isPopular && (
          <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
        <div
          className="aspect-square"
          style={{ backgroundColor: finish.swatchColor }}
        />
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {finish.finishName}
            </h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{finish.productLine}</p>
        </div>
      </Link>
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-canary-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-canary-dark via-canary-dark/95 to-canary-dark/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-3 block">
              21+ Stunning Options
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mb-4">
              Water Colour Selector
            </h1>
            <p className="text-lg text-canary-white/80">
              Explore our complete range of ECO Finish water colours. From vibrant blues to natural sands, 
              find the perfect finish for your pool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 border-b border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground text-center">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      {/* All Colours Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl font-bold mb-2">aquaBRIGHT & polyFIBRO Colours</h2>
            <p className="text-muted-foreground">Our most popular finishes for fibreglass pools</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {otherFinishes.map((finish) => (
              <FinishCard key={finish.id} finish={finish} />
            ))}
          </div>
        </div>
      </section>

      {/* Brillo Blanco Section */}
      {brilloBlancoFinishes.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="font-heading text-2xl font-bold mb-2">Brillo Blanco Collection</h2>
              <p className="text-muted-foreground">Premium white finishes with subtle shimmer effects</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {brilloBlancoFinishes.map((finish) => (
                <FinishCard key={finish.id} finish={finish} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Not Sure Which Colour?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Contact us for a free consultation. We'll help you choose the perfect finish for your pool.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-background/90 transition-colors"
          >
            Get Expert Advice
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
