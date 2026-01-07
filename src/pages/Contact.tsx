import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
            <span className="text-primary font-medium">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              Have a leak problem? Contact us today for a free consultation and quote. 
              We're here to help with all your leak detection needs across the Canary Islands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+34 600 000 000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service...</option>
                    <option value="drain-detection">Drain Detection</option>
                    <option value="pipe-inspection">Pipe Inspection</option>
                    <option value="underground-detection">Underground Detection</option>
                    <option value="water-leak">Water Leak Detection</option>
                    <option value="pool-leak">Pool Leak Detection</option>
                    <option value="leak-repair">Leak Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your problem or enquiry..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                We're available to help with your leak detection needs. 
                Get in touch using any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Phone</h3>
                    <a href="tel:+34646022695" className="text-muted-foreground hover:text-primary transition-colors">
                      +34 646 02 26 95
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email</h3>
                    <a href="mailto:info@canary-detect.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@canary-detect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Serving all the Canary Islands<br />
                      Gran Canaria, Tenerife, Lanzarote & more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 - 18:00<br />
                      Saturday: 9:00 - 14:00<br />
                      Emergency calls available
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Canary Islands, Spain</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
