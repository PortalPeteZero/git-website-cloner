import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FAQSchema from "@/components/seo/FAQSchema";

const faqs = [
  {
    question: "What is your 'No Find, No Fee' leak detection policy?",
    answer:
      "If we confirm you have a water leak but cannot locate it, there is no fee for our leak detection service - this has never happened so far! However, if we find that you don't have a leak and your issue is caused by something else, we charge 50% of the survey cost for a 'Leak Confirmation Survey' and provide a report for your peace of mind.",
  },
  {
    question: "How accurate is your water leak detection in Lanzarote?",
    answer:
      "We use a multi-technology approach with over €80,000 worth of specialist leak detection equipment to confirm every leak location using at least two independent technologies. This delivers centimetre accuracy in 95% of cases, locating water leaks to within 30cm² of their position - keeping repair costs and disruption to an absolute minimum.",
  },
  {
    question: "What areas of Lanzarote do you cover for leak detection?",
    answer:
      "We cover the entire island of Lanzarote for water leak detection, pool leak detection and underground pipe detection. This includes Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, Tías, Yaiza, Playa Honda, Teguise, and all surrounding areas. We're based in Playa Blanca.",
  },
  {
    question: "Do you offer leak repair as well as leak detection?",
    answer:
      "Yes, we offer comprehensive leak repair services in Lanzarote for water pipe leak repair, pool pipe leak repair and underground leak repair. However, you're also free to use your own contractor for the repair - you're not obligated to use our repair team. We provide detailed reports to guide any repair work.",
  },
  {
    question: "Will you need to break walls or floors to find my water leak?",
    answer:
      "Our hidden water leak detection methods are non-invasive. We use acoustic sensors, thermal imaging, tracer gas, CCTV cameras, and other advanced technology to locate leaks without damaging your property. In rare cases, minimal access may be needed, but this is discussed and agreed beforehand.",
  },
  {
    question: "What leak detection technology do you use?",
    answer:
      "We carry the latest leak detection equipment including: GASENSE tracer gas detection, acoustic geophones for underground water leak detection, infrared thermal imaging cameras for hidden water leak detection, pipe microphones with centimetre accuracy, and multiple CCTV camera systems for pipes of all sizes.",
  },
  {
    question: "Do you provide leak detection reports for insurance claims?",
    answer:
      "Yes, every leak detection survey includes a detailed professional report that can be used for your insurance company. This documents our findings, methods used, and recommendations for leak repair.",
  },
  {
    question: "How much does leak detection in Lanzarote cost?",
    answer:
      "We operate on a fixed-fee basis with transparent leak detection Lanzarote prices. We quote a fixed price upfront and stick to it, regardless of how long the survey takes. Contact us for a free quote based on your specific requirements.",
  },
  {
    question: "My water meter is running - do I have a leak?",
    answer:
      "A constantly running water meter often indicates a hidden water leak. Our FREE leak confirmation test can determine if you have a leak before you commit to a full survey. We'll assess your water system, check the basics, and provide a professional report at no cost.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
              Leak Detection Lanzarote FAQ
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
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
