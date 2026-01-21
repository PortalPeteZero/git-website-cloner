import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  BadgeCheck, 
  FileText, 
  MessageSquareQuote,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "No Find, No Fee",
    description: "If we confirm you have a leak but cannot locate it, there is no charge. This has never happened so far.",
    highlight: true
  },
  {
    icon: BadgeCheck,
    title: "Fixed Fee Policy",
    description: "We quote a fixed price upfront and stick to it, regardless of how long the survey takes. No surprises."
  },
  {
    icon: MessageSquareQuote,
    title: "Free Quotes",
    description: "Contact us for a free, no-obligation quote for your specific situation. We'll assess your needs and provide transparent pricing."
  },
  {
    icon: FileText,
    title: "Insurance Reports Included",
    description: "Every survey includes a detailed professional photographic report suitable for insurance claims at no extra cost."
  }
];

const pricingInfo = [
  {
    title: "Residential Leak Detection",
    features: [
      "Fixed fee survey for homes and villas",
      "Full report with findings included",
      "No Find, No Fee guarantee applies",
      "Same-day service often available"
    ]
  },
  {
    title: "Swimming Pool Leak Detection",
    features: [
      "Specialist pool and spa surveys",
      "Pressure testing and location",
      "Repair recommendations included",
      "Works on all pool types"
    ]
  },
  {
    title: "Commercial Leak Detection",
    features: [
      "Tailored surveys for businesses",
      "Hotels, apartments, offices",
      "Detailed professional reports",
      "Minimal disruption guaranteed"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted section-pattern">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium">Transparent Pricing</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
            Leak Detection Lanzarote Prices & Guarantees
          </h2>
          <p className="text-muted-foreground">
            We believe in transparent, fixed-fee pricing with no hidden costs. 
            Our surveys are priced based on property type and complexity.
          </p>
        </motion.div>

        {/* Service Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingInfo.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading font-bold text-xl mb-6 text-foreground">
                {service.title}
              </h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-8">
            Our Guarantees
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-6 text-center ${
                  guarantee.highlight 
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20' 
                    : 'bg-card border border-border'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  guarantee.highlight ? 'bg-primary' : 'bg-muted'
                }`}>
                  <guarantee.icon className={`h-7 w-7 ${
                    guarantee.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{guarantee.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
            <strong>Note:</strong> For leak confirmation surveys (where we confirm if a leak exists), 
            a 50% charge applies as diagnostic work has been completed.
          </p>
          <Button size="lg" className="group" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
