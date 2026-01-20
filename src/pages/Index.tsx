import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TechnologySection from "@/components/home/TechnologySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import FAQSection from "@/components/home/FAQSection";
import SEOHead from "@/components/seo/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead 
        title="Leak Detection Lanzarote | Water & Pool Leak Detection | Canary Detect"
        description="Professional leak detection Lanzarote. Expert water leak detection, pool leak detection, underground pipe detection & leak repair. No Find No Fee guarantee. €80,000+ specialist equipment. Serving Arrecife, Puerto del Carmen, Playa Blanca."
        keywords="leak detection Lanzarote, water leak detection Canary Islands, pool leak detection Lanzarote, leak repair Lanzarote, underground water leak detection, swimming pool leak detection, hidden water leak detection, Lanzarote water leak specialist, leak detection service Lanzarote, professional leak detection"
        canonical="https://canary-detect.com"
      />
      <HeroSlider />
      <WelcomeSection />
      <TrustBadgesSection />
      <ServicesGrid />
      <TechnologySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <FAQSection />
    </Layout>
  );
};

export default Index;
