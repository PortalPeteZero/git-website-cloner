import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import titleBg from "@/assets/title-bg.jpg";
import SEOHead from "@/components/seo/SEOHead";

const Contact = () => {
  return (
    <Layout>
      <SEOHead 
        title="Contact Canary Detect | Leak Detection Lanzarote | Emergency Leak Repair"
        description="Contact Canary Detect for professional leak detection in Lanzarote. Emergency leak repair available. Free quotes for water leak detection, pool leak detection & pipe inspection. Call +34 711 051 071"
        keywords="leak detection Lanzarote, emergency leak repair Lanzarote, leak detection Lanzarote prices, pool leak detection Playa Blanca, water leak repair Canary Islands"
        canonical="https://canary-detect.com/contact"
      />
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.9)] via-[rgba(30,41,59,0.7)] to-[rgba(30,41,59,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,41,59,0.6)] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-white font-semibold text-sm uppercase tracking-[0.1em] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Get in <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Touch</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              Need leak detection in Lanzarote? Contact us for a free consultation and quote. 
              Emergency leak repair available. Serving Arrecife, Puerto del Carmen, Playa Blanca & all areas.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
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
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+34 600 000 000" 
                      className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</Label>
                  <select
                    id="service"
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base appearance-none cursor-pointer focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
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
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your problem or enquiry..."
                    rows={5}
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base min-h-[120px] resize-y focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200"
                >
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
                    <h3 className="font-heading font-bold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Zona Industrial, 1<br />
                      35580 Playa Blanca, Lanzarote
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Serving all of Lanzarote including<br />
                      Arrecife, Puerto del Carmen & Costa Teguise
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

              {/* Map - Playa Blanca Office */}
              <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d-13.8267!3d28.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc462a0e0e0e0e0e%3A0x0!2sZona%20Industrial%2C%20Playa%20Blanca!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Canary Detect Office - Playa Blanca, Lanzarote"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
