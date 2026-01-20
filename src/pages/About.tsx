import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welcomeImg from "@/assets/welcome.jpg";
import titleBg from "@/assets/title-bg.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-canary-navy/90 via-canary-navy/70 to-canary-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-canary-navy/60 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              Professional Leak Detection <span className="text-primary">Experts</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Canary Detect is a professional leak detection company serving Lanzarote. 
              With years of experience and the latest technology, we help property owners find and fix leaks quickly.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
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
                Canary Detect was founded with a simple mission: to provide Lanzarote with 
                professional, reliable leak detection services. We understand how frustrating and 
                costly water leaks can be, which is why we've invested over <strong className="text-foreground">€80,000</strong> in 
                the best equipment and training to deliver accurate results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings together years of experience in plumbing, construction, and 
                leak detection technology. We've helped hundreds of homeowners, businesses, 
                and hotels across Arrecife, Puerto del Carmen, Playa Blanca, Costa Teguise, and the whole island.
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
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <img src={welcomeImg} alt="Canary Detect team at work" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  <p className="font-heading font-bold text-lg">Since 2014</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-16 md:py-24 bg-canary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium">Our Promises</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-canary-white">
              Why Choose Canary Detect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">No Find, No Fee</h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                If we can't locate your leak, you don't pay. For leak confirmation surveys, 
                a 50% charge applies as the work has been completed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">Fixed Fee Guarantee</h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                No hidden extras. We quote a fixed price upfront and stick to it, 
                regardless of how long the job takes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-canary-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-canary-white/10"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-canary-white">Insurance-Ready Reports</h3>
              <p className="text-canary-white/70 text-sm leading-relaxed">
                All surveys include professional photographic reports suitable for 
                insurance claims and property documentation.
              </p>
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
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
                  alt="Pete Ashcroft - Co-Founder & Lead Technician"
                  className="w-full h-full object-cover"
                />
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
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Dave Poxon - Co-Founder & Technical Director"
                  className="w-full h-full object-cover"
                />
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
