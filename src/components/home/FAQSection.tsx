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
    question: "What is your 'No Find, No Fee' policy?",
    answer:
      "If we confirm you have a leak but cannot locate it, there is no fee - this has never happened so far! However, if we find that you don't have a leak and your issue is caused by something else, we charge 50% of the survey cost for a 'Leak Confirmation Survey' and provide a report for your peace of mind.",
  },
  {
    question: "How accurate is your leak detection?",
    answer:
      "We use a multi-technology approach with over €80,000 worth of equipment to confirm every leak location using at least two independent technologies. This delivers centimetre accuracy in 95% of cases, locating leaks to within 30cm² of their position - keeping repair costs and disruption to an absolute minimum.",
  },
  {
    question: "What areas of Lanzarote do you cover?",
    answer:
      "We cover the entire island of Lanzarote including Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise, and all surrounding areas. We're based in Playa Blanca.",
  },
  {
    question: "Do you repair leaks as well as detect them?",
    answer:
      "Yes, we offer leak repair services for most types of leaks we detect. However, you're also free to use your own contractor for the repair - you're not obligated to use our repair team. We provide detailed reports to guide any repair work.",
  },
  {
    question: "Will you need to break walls or floors?",
    answer:
      "Our methods are non-invasive. We use acoustic sensors, thermal imaging, tracer gas, CCTV cameras, and other advanced technology to locate leaks without damaging your property. In rare cases, minimal access may be needed, but this is discussed and agreed beforehand.",
  },
  {
    question: "What technology do you use?",
    answer:
      "We carry the latest equipment including: GASENSE tracer gas detection, geophones for acoustic listening, infrared thermal imaging cameras, pipe microphones with centimetre accuracy, and multiple CCTV camera systems for pipes of all sizes.",
  },
  {
    question: "Do you provide reports for insurance?",
    answer:
      "Yes, every survey includes a detailed professional report that can be used for your insurance company. This documents our findings, methods used, and recommendations.",
  },
  {
    question: "What if the survey takes longer than expected?",
    answer:
      "We operate on a fixed-fee basis. We do not charge extra if the survey takes longer than planned. We're committed to completing the job and locating the leak.",
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
