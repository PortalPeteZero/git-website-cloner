import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import finishData from "@/data/finishes.json";

// Import all available pool coating images
import blueLagoon from "@/assets/pool-coatings/blue-lagoon.jpg";
import blueLagoon2 from "@/assets/pool-coatings/blue-lagoon-2.jpg";
import mediterraneanBlue from "@/assets/pool-coatings/mediterranean-blue.jpg";
import frenchGrey from "@/assets/pool-coatings/french-grey.jpg";
import galleryGreySteps from "@/assets/pool-coatings/gallery-grey-steps.jpg";
import sandyBeach from "@/assets/pool-coatings/sandy-beach.jpg";
import sandyBeach2 from "@/assets/pool-coatings/sandy-beach-2.jpg";
import gallerySandyBeach from "@/assets/pool-coatings/gallery-sandy-beach.jpg";
import santorini from "@/assets/pool-coatings/santorini.jpg";
import pacificBlue from "@/assets/pool-coatings/pacific-blue.jpg";
import konaCoast from "@/assets/pool-coatings/kona-coast.jpg";
import tropicalTeal from "@/assets/pool-coatings/tropical-teal.jpg";
import tropicalTeal2 from "@/assets/pool-coatings/tropical-teal-2.jpg";
import midnightBlue from "@/assets/pool-coatings/midnight-blue.jpg";
import midnightBlue2 from "@/assets/pool-coatings/midnight-blue-2.jpg";

// Map finish IDs to imported images
const finishImages: Record<string, string> = {
  "blue-lagoon": blueLagoon,
  "mediterranean-blue": mediterraneanBlue,
  "french-grey": frenchGrey,
  "sandy-beach": sandyBeach,
  "santorini": santorini,
  "pacific-blue": pacificBlue,
  "kona-coast": konaCoast,
  "tropical-teal": tropicalTeal,
  "midnight-blue": midnightBlue,
};

// Gallery images for each finish
const finishGalleries: Record<string, string[]> = {
  "blue-lagoon": [blueLagoon, blueLagoon2],
  "mediterranean-blue": [mediterraneanBlue],
  "french-grey": [frenchGrey, galleryGreySteps],
  "sandy-beach": [sandyBeach, sandyBeach2, gallerySandyBeach],
  "santorini": [santorini],
  "pacific-blue": [pacificBlue],
  "kona-coast": [konaCoast],
  "tropical-teal": [tropicalTeal, tropicalTeal2],
  "midnight-blue": [midnightBlue, midnightBlue2],
};

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

  const mainImage = finishImages[finish.id];
  const galleryImages = finishGalleries[finish.id] || [];

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
            {/* Colour Swatch / Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {mainImage ? (
                <div className="rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={mainImage}
                    alt={`${finish.finishName} pool finish`}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ) : (
                <div
                  className="aspect-square rounded-2xl shadow-xl"
                  style={{ backgroundColor: finish.swatchColor }}
                />
              )}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border border-border/50"
                  style={{ backgroundColor: finish.swatchColor }}
                />
                {finish.productLine}
              </div>

              {/* Gallery thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-20 h-20 rounded-lg overflow-hidden shadow-sm border-2 border-transparent hover:border-primary transition-colors cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${finish.finishName} gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
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
              .map((otherFinish) => {
                const otherImage = finishImages[otherFinish.id];
                return (
                  <Link
                    key={otherFinish.id}
                    to={`/pool-coatings/colours/${otherFinish.id}`}
                    className="group"
                  >
                    {otherImage ? (
                      <div className="aspect-square rounded-lg shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
                        <img
                          src={otherImage}
                          alt={otherFinish.finishName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div
                        className="aspect-square rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ backgroundColor: otherFinish.swatchColor }}
                      />
                    )}
                    <p className="text-xs font-medium text-center mt-2 group-hover:text-primary transition-colors">
                      {otherFinish.finishName}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
