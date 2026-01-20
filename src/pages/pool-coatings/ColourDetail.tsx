import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import finishData from "@/data/finishes.json";

export default function ColourDetail() {
  const { colourId } = useParams<{ colourId: string }>();
  const finish = finishData.finishes.find((f) => f.id === colourId);

  if (!finish) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Colour Not Found</h1>
          <p className="text-muted-foreground mb-8">The colour you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/pool-coatings/colours">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Colours
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const features = [
    "10+ year durability",
    "UV-stable pigments",
    "Salt air resistant",
    "Reduces algae growth",
    "Eco-friendly application",
    "Non-slip texture available",
  ];

  return (
    <Layout>
      {/* Hero with colour display */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            to="/pool-coatings/colours"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Colour Selector
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Colour Swatch */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div
                className="aspect-square rounded-2xl shadow-xl"
                style={{ backgroundColor: finish.swatchColor }}
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {finish.productLine}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                ECO Finish
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
                {finish.finishName}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {finish.description}
              </p>

              <div className="bg-muted rounded-lg p-6 mb-8">
                <h3 className="font-heading font-bold text-lg mb-4">Features & Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pool-coatings/process">
                    See Application Process
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Colour Note */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-xl font-bold mb-4">About Water Colour</h2>
            <p className="text-muted-foreground leading-relaxed">
              The final water colour in your pool will vary based on pool depth, lighting conditions,
              time of day, and surrounding environment. Deeper pools tend to show more intense colours,
              while shallow areas will appear lighter. We recommend viewing installed examples to get
              the best understanding of how each finish appears in real conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Other Colours */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Other Colours You Might Like</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {finishData.finishes
              .filter((f) => f.id !== finish.id)
              .slice(0, 6)
              .map((otherFinish) => (
                <Link
                  key={otherFinish.id}
                  to={`/pool-coatings/colours/${otherFinish.id}`}
                  className="group"
                >
                  <div
                    className="aspect-square rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                    style={{ backgroundColor: otherFinish.swatchColor }}
                  />
                  <p className="text-xs font-medium text-center mt-2 group-hover:text-primary transition-colors">
                    {otherFinish.finishName}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
