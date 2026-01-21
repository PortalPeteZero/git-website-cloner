import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle, Clock, TrendingUp } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

// Import hero and case study images
import caseStudiesHero from "@/assets/hero/case-studies-hero.jpg";
import drainDetection1 from "@/assets/case-studies/drain-detection-1.jpg";
import poolLeak1 from "@/assets/case-studies/pool-leak-1.jpg";
import pipeInspection1 from "@/assets/case-studies/pipe-inspection-1.jpg";

// Import gallery photos for variety
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Hotel Pool Leak Detection",
    location: "Playa Blanca",
    description: "Located a significant leak in a hotel pool that was causing water loss of 5,000 liters per day.",
    fullDescription: "A large hotel in Playa Blanca contacted us about their swimming pool which was losing approximately 5,000 liters of water per day. Using our specialist pool leak detection equipment, we were able to identify a crack in the pool shell caused by ground movement. The hotel was able to arrange repairs and significantly reduce their water and chemical costs.",
    result: "Leak found and repaired within 48 hours",
    metrics: { time: "48 hours", savings: "€12,000/year" },
    image: poolLeak1,
  },
  {
    id: 2,
    title: "Underground Pipe Location",
    location: "Puerto del Carmen",
    description: "Successfully mapped underground utility pipes for a new construction project.",
    fullDescription: "A construction company in Puerto del Carmen needed to know the exact location of all underground utilities before beginning excavation work on a new development. Our team used ground-penetrating radar and electromagnetic locating equipment to map all buried pipes and cables, providing detailed drawings for the construction team.",
    result: "Complete utility map delivered in 1 day",
    metrics: { time: "1 day", savings: "Avoided damage" },
    image: photo1,
  },
  {
    id: 3,
    title: "Residential Water Leak",
    location: "Costa Teguise",
    description: "Found and repaired a hidden leak in a villa that had been causing damp problems for months.",
    fullDescription: "The owners of a villa in Costa Teguise had been experiencing persistent damp on their walls for several months. Previous attempts to find the source had been unsuccessful. Using thermal imaging and acoustic leak detection, we were able to pinpoint a leak in a hot water pipe running under the floor slab. The repair was completed with minimal disruption.",
    result: "Problem solved after months of searching",
    metrics: { time: "3 hours", savings: "Minimal excavation" },
    image: photo2,
  },
  {
    id: 4,
    title: "Commercial Building Survey",
    location: "Arrecife",
    description: "Pre-purchase drainage survey for a commercial property revealed significant issues.",
    fullDescription: "A client considering purchasing a commercial property in Arrecife asked us to conduct a comprehensive drainage survey before completing the purchase. Our CCTV inspection revealed significant root intrusion and collapsed sections in the main sewer line. This information allowed the buyer to negotiate a significant reduction in the purchase price.",
    result: "Saved client €15,000 in negotiations",
    metrics: { time: "Half day", savings: "€15,000" },
    image: drainDetection1,
  },
  {
    id: 5,
    title: "Apartment Complex Leak",
    location: "Playa Honda",
    description: "Traced a leak affecting multiple apartments to a single source in the main riser.",
    fullDescription: "An apartment complex in Playa Honda was experiencing water damage in three different apartments on different floors. Building management suspected multiple leaks but our investigation revealed a single leak in the main water riser that was tracking through the building. One repair solved all the problems.",
    result: "Single leak causing multiple problems identified",
    metrics: { time: "4 hours", savings: "3 repairs avoided" },
    image: pipeInspection1,
  },
  {
    id: 6,
    title: "Spa Resort Pool System",
    location: "Yaiza",
    description: "Complete leak detection survey of spa facilities including pools, hot tubs, and pipework.",
    fullDescription: "A luxury spa resort in Yaiza commissioned a complete leak detection survey of their water facilities. We tested all pools, hot tubs, fountains, and associated pipework. Several small leaks were identified and repaired, resulting in significant water and energy savings for the resort.",
    result: "Annual water savings of €8,000+",
    metrics: { time: "2 days", savings: "€8,000/year" },
    image: photo3,
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <SEOHead 
        title="Leak Detection Case Studies Lanzarote | Real Results & Success Stories"
        description="See real leak detection work across Lanzarote. Hotel pools, villas, commercial buildings. Case studies from Playa Blanca, Puerto del Carmen, Costa Teguise & Arrecife."
        keywords="leak detection case studies, Lanzarote leak repair results, pool leak detection examples, water leak detection success, commercial leak detection Lanzarote"
        canonical="https://canary-detect.com/case-studies"
      />
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={caseStudiesHero} 
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.9)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,41,59,0.6)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Our Work</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Leak Detection & Repair <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Case Studies Lanzarote</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              See examples of our leak detection work across Lanzarote. 
              From hotel pools to residential villas, we've helped hundreds of clients solve their leak problems.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Location Badge */}
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  
                  {/* Location Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      <MapPin className="h-3 w-3" />
                      {study.location}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.fullDescription}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{study.metrics.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span>{study.metrics.savings}</span>
                    </div>
                  </div>

                  {/* Result Box */}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-primary font-bold uppercase tracking-wide">Result</span>
                        <p className="text-foreground font-semibold mt-1">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-[hsl(25,93%,45%)] section-stripes-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
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
            <Button size="lg" variant="secondary" className="shadow-xl" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
