import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Hotel Pool Leak Detection",
    location: "Gran Canaria",
    description: "Located a significant leak in a hotel pool that was causing water loss of 5,000 liters per day.",
  },
  {
    id: 2,
    title: "Underground Pipe Location",
    location: "Tenerife",
    description: "Successfully mapped underground utility pipes for a new construction project.",
  },
  {
    id: 3,
    title: "Residential Water Leak",
    location: "Lanzarote",
    description: "Found and repaired a hidden leak in a villa that had been causing damp problems for months.",
  },
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-medium">Our Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
            Recent Case Studies
          </h2>
          <p className="text-muted-foreground">
            See examples of our leak detection work across the Canary Islands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <span className="text-6xl font-heading font-bold text-primary/20">
                  {study.id}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">
                  {study.location}
                </span>
                <h3 className="font-heading font-bold text-lg mt-1 mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/case-studies" className="inline-flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
