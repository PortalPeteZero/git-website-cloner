import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does leak detection take?",
    answer:
      "Most residential leak detection surveys take between 1-3 hours depending on the property size and complexity. Pool leak detection typically takes 2-4 hours. We'll give you a time estimate when you book.",
  },
  {
    question: "Is your leak detection service guaranteed?",
    answer:
      "Yes! We're confident in our technology and expertise. If we can't find your leak, you don't pay. We have a 98% success rate in locating leaks on the first visit.",
  },
  {
    question: "What areas of Lanzarote do you cover?",
    answer:
      "We cover the entire island of Lanzarote including Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise, and all surrounding areas.",
  },
  {
    question: "Do you repair leaks as well as detect them?",
    answer:
      "Yes, we offer leak repair services for most types of leaks we detect. For complex repairs, we can recommend trusted local contractors and provide detailed reports to guide the repair work.",
  },
  {
    question: "How much does leak detection cost?",
    answer:
      "Prices vary depending on the type of detection needed. We offer free quotes with no obligation. Contact us to discuss your specific situation and we'll provide a clear, upfront price.",
  },
  {
    question: "Will you need to break walls or floors?",
    answer:
      "Our methods are non-invasive. We use acoustic sensors, thermal imaging cameras, and other advanced technology to locate leaks without damaging your property. Only minimal access may be needed for repairs.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-6">
              Got questions about our leak detection services? Here are answers to
              the most common questions we receive.
            </p>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Get in touch and we'll be happy
              to help.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
