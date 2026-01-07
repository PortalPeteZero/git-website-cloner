import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
            <span className="text-primary font-medium">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mt-2 mb-6">
              Professional Leak Detection Experts
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              Canary Detect is a professional leak detection company serving the Canary Islands. 
              With years of experience and the latest technology, we help property owners find and fix leaks quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                Dedicated to Finding Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Canary Detect was founded with a simple mission: to provide the Canary Islands with 
                professional, reliable leak detection services. We understand how frustrating and 
                costly water leaks can be, which is why we've invested in the best equipment and 
                training to deliver accurate results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings together years of experience in plumbing, construction, and 
                leak detection technology. We've helped hundreds of homeowners, businesses, 
                and hotels across Gran Canaria, Tenerife, Lanzarote, and the other islands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in our non-invasive approach - using advanced acoustic, thermal, 
                and camera technology to find leaks without unnecessary damage to your property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-4xl">CD</span>
                  </div>
                  <p className="text-muted-foreground font-heading text-xl">Since 2014</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground">
              Our experienced team is dedicated to providing the best leak detection services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pete */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 text-center border border-border"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">PA</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-1">Pete Ashcroft</h3>
              <p className="text-primary font-medium text-sm mb-3">Co-Founder & Lead Technician</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pete brings over 15 years of experience in plumbing and leak detection. 
                He specializes in pool leak detection and underwater camera inspections.
              </p>
            </motion.div>

            {/* Dave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-lg p-6 text-center border border-border"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">DP</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-1">Dave Poxon</h3>
              <p className="text-primary font-medium text-sm mb-3">Co-Founder & Technical Director</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dave is an expert in underground pipe and cable detection. 
                He manages our ground-penetrating radar and pipe locating equipment.
              </p>
            </motion.div>
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
              Ready to Find Your Leak?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and quote. We're here to help.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
