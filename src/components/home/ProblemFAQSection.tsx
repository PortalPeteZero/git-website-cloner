import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/seo/FAQSchema";
import { HelpCircle, ArrowRight } from "lucide-react";

const problemFaqs = [
  {
    question: "Why is my pool losing water?",
    answer: "If your swimming pool is losing more than 6mm of water per day (beyond normal evaporation), you likely have a leak. Common causes include cracks in the pool shell, damaged pipe connections, or faulty fittings. Our swimming pool leak detection service in Lanzarote can pinpoint the exact location using pressure testing and specialist equipment."
  },
  {
    question: "My water meter is running when all taps are off - do I have a leak?",
    answer: "Yes, if your water meter continues to run when no water is being used, this indicates a hidden water leak somewhere in your property. This could be underground pipes, under floor slabs, or behind walls. Our acoustic and thermal imaging leak detection can find these hidden leaks without breaking walls or floors."
  },
  {
    question: "How do you find water leaks underground?",
    answer: "We use multiple technologies to find underground water leaks: tracer gas detection (GASENSE), acoustic listening devices (geophones), and thermal imaging. By combining at least two methods, we achieve centimetre accuracy in locating underground leaks, minimizing excavation and repair costs."
  },
  {
    question: "Can you detect leaks in swimming pool pipes?",
    answer: "Yes, we specialize in swimming pool pipe leak detection. We use pressure testing to isolate leaks in pool plumbing, then pinpoint the exact location using acoustic equipment and tracer gas. This works for underground pool pipes, return lines, and suction lines."
  },
  {
    question: "Do you repair leaks or just detect them?",
    answer: "We offer both leak detection and leak repair services across Lanzarote. Once we locate your leak, we can either repair it ourselves or provide detailed guidance for your chosen contractor. Our reports include exact location and recommended repair methods."
  },
  {
    question: "How much does leak detection cost in Lanzarote?",
    answer: "We offer fixed-fee leak detection surveys with no hidden costs. Prices vary depending on property size and complexity. Contact us for a free quote. Remember our No Find, No Fee guarantee - if we confirm you have a leak but cannot locate it, there's no charge."
  }
];

const ProblemFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50 section-pattern section-divider">
      <FAQSchema faqs={problemFaqs} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Title and CTA */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <HelpCircle className="h-5 w-5" />
                <span>Common Problems</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Leak Problems We Solve
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Not sure if you have a leak? These are the most common signs our customers notice 
                before calling us. If any of these sound familiar, we can help.
              </p>
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get Expert Help
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {problemFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`problem-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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

export default ProblemFAQSection;
