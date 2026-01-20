import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Search, FileText, Wrench } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Contact Us",
    description: "Call or fill out our contact form to describe your leak problem.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Assessment",
    description: "We'll discuss your situation and arrange a convenient time to visit.",
    icon: ClipboardCheck,
  },
  {
    number: 3,
    title: "Detection",
    description: "Our experts use advanced technology to locate the leak precisely.",
    icon: Search,
  },
  {
    number: 4,
    title: "Report",
    description: "You receive a detailed report with findings and recommendations.",
    icon: FileText,
  },
  {
    number: 5,
    title: "Repair",
    description: "We can repair the leak or provide guidance for your chosen contractor.",
    icon: Wrench,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-navy">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            From your first call to problem solved - here's what to expect when you
            work with Canary Detect.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-canary-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
