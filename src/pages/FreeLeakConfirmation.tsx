import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import FreeLeakConfirmationSection from "@/components/services/FreeLeakConfirmationSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import freeLeakConfirmationImg from "@/assets/services/free-leak-confirmation.png";

const FreeLeakConfirmation = () => {
  const canonicalUrl = "https://canary-detect.com/services/free-leak-confirmation";

  return (
    <Layout>
      <SEOHead
        title="Free Leak Confirmation Test Lanzarote | No Catch | Canary Detect"
        description="FREE leak confirmation test in Lanzarote. Before you book a full survey, we'll confirm if you have a leak with a professional report - at no cost. No catch, no obligation."
        keywords="free leak test Lanzarote, leak confirmation Lanzarote, do I have a leak, water leak check, free leak detection, leak assessment Lanzarote"
        canonical={canonicalUrl}
        type="service"
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-canary-navy via-slate-800 to-canary-navy">
        {/* Gradient orbs for depth */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-canary-cyan/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                NEW FOR 2026 - NO CATCH
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Free Leak
                <span className="block text-primary">Confirmation Test</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                Not sure if you have a leak? Before booking a full survey, we'll come to your property 
                and confirm whether a leak exists — completely free, with a professional report.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg" asChild>
                  <a href="#enquiry-form">
                    Book Free Test
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="tel:+34828679761">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-canary-cyan/20 to-primary/30 rounded-3xl blur-xl opacity-60" />
                <img
                  src={freeLeakConfirmationImg}
                  alt="Free Leak Confirmation Test - New for 2026"
                  className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Enquiry Form Section */}
      <div id="enquiry-form">
        <FreeLeakConfirmationSection
          title="Free Leak Confirmation Tests"
          phone="+34 828 679 761"
          email="info@canary-detect.com"
          includes={[
            "FREE leak confirmation test",
            "Basic report if required",
            "Expert assessment of your property",
            "No obligation consultation",
          ]}
          importantNote="This service is to CONFIRM if you have a leak or not, with a detailed report. It is NOT a leak survey to pinpoint the exact location."
          subNote="For full leak pinpointing surveys, contact us for our comprehensive detection service."
        />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-canary-navy mb-4">
            Already Know You Have a Leak?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you already know a leak exists and need us to pinpoint its exact location, book our full leak detection survey.
          </p>
          <Button size="lg" asChild>
            <Link to="/services/water-leak-detection">
              View Full Leak Detection Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FreeLeakConfirmation;
