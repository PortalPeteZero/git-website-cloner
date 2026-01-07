import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Hotel Pool Leak Detection",
    location: "Gran Canaria",
    description: "Located a significant leak in a hotel pool that was causing water loss of 5,000 liters per day.",
    fullDescription: "A large hotel in Gran Canaria contacted us about their swimming pool which was losing approximately 5,000 liters of water per day. Using our specialist pool leak detection equipment, we were able to identify a crack in the pool shell caused by ground movement. The hotel was able to arrange repairs and significantly reduce their water and chemical costs.",
    result: "Leak found and repaired within 48 hours",
  },
  {
    id: 2,
    title: "Underground Pipe Location",
    location: "Tenerife",
    description: "Successfully mapped underground utility pipes for a new construction project.",
    fullDescription: "A construction company in Tenerife needed to know the exact location of all underground utilities before beginning excavation work on a new development. Our team used ground-penetrating radar and electromagnetic locating equipment to map all buried pipes and cables, providing detailed drawings for the construction team.",
    result: "Complete utility map delivered in 1 day",
  },
  {
    id: 3,
    title: "Residential Water Leak",
    location: "Lanzarote",
    description: "Found and repaired a hidden leak in a villa that had been causing damp problems for months.",
    fullDescription: "The owners of a villa in Lanzarote had been experiencing persistent damp on their walls for several months. Previous attempts to find the source had been unsuccessful. Using thermal imaging and acoustic leak detection, we were able to pinpoint a leak in a hot water pipe running under the floor slab. The repair was completed with minimal disruption.",
    result: "Problem solved after months of searching",
  },
  {
    id: 4,
    title: "Commercial Building Survey",
    location: "Fuerteventura",
    description: "Pre-purchase drainage survey for a commercial property revealed significant issues.",
    fullDescription: "A client considering purchasing a commercial property in Fuerteventura asked us to conduct a comprehensive drainage survey before completing the purchase. Our CCTV inspection revealed significant root intrusion and collapsed sections in the main sewer line. This information allowed the buyer to negotiate a significant reduction in the purchase price.",
    result: "Saved client €15,000 in negotiations",
  },
  {
    id: 5,
    title: "Apartment Complex Leak",
    location: "Gran Canaria",
    description: "Traced a leak affecting multiple apartments to a single source in the main riser.",
    fullDescription: "An apartment complex in Las Palmas was experiencing water damage in three different apartments on different floors. Building management suspected multiple leaks but our investigation revealed a single leak in the main water riser that was tracking through the building. One repair solved all the problems.",
    result: "Single leak causing multiple problems identified",
  },
  {
    id: 6,
    title: "Spa Resort Pool System",
    location: "Tenerife",
    description: "Complete leak detection survey of spa facilities including pools, hot tubs, and pipework.",
    fullDescription: "A luxury spa resort in Tenerife commissioned a complete leak detection survey of their water facilities. We tested all pools, hot tubs, fountains, and associated pipework. Several small leaks were identified and repaired, resulting in significant water and energy savings for the resort.",
    result: "Annual water savings of €8,000+",
  },
];

const CaseStudies = () => {
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
            <span className="text-primary font-medium">Our Work</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mt-2 mb-6">
              Case Studies
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              See examples of our leak detection work across the Canary Islands. 
              From hotel pools to residential villas, we've helped hundreds of clients solve their leak problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span className="text-6xl font-heading font-bold text-primary/30">
                    {study.id}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {study.location}
                  </span>
                  <h3 className="font-heading font-bold text-xl mt-1 mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {study.fullDescription}
                  </p>
                  <div className="bg-muted rounded-lg p-3">
                    <span className="text-xs text-primary font-medium uppercase">Result:</span>
                    <p className="text-sm font-medium mt-1">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Have a Similar Problem?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact us today to discuss your leak detection needs. We're here to help.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
