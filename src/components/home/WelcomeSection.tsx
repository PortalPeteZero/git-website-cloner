import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Non-invasive detection methods",
  "Latest acoustic technology",
  "Thermal imaging equipment",
  "Fast and accurate results",
  "Experienced professionals",
  "Competitive pricing",
];

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium">Welcome to Canary Detect</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
              Professional Leak Detection Services in the Canary Islands
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Canary Detect provides professional leak detection services across the Canary Islands. 
              Our team of experts uses the latest technology and equipment to locate leaks quickly 
              and accurately, helping you save time, money, and prevent further damage to your property.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a swimming pool leak, water pipe leak, or need underground pipe detection, 
              we have the expertise and equipment to find the problem and provide effective solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-3xl">CD</span>
                  </div>
                  <p className="text-muted-foreground">Professional Leak Detection</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-heading font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
