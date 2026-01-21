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
import ProblemFAQSection from "@/components/home/ProblemFAQSection";
import SEOHead from "@/components/seo/SEOHead";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const Index = () => {
  return (
    <Layout>
      <SEOHead 
        title="Leak Detection Lanzarote | Pool & Water Leak Repair | No Find No Fee"
        description="Professional leak detection in Lanzarote. Find water leaks, pool leaks & underground pipes with €80,000+ equipment. No Find, No Fee guarantee. Serving Playa Blanca, Puerto del Carmen & Arrecife."
        keywords="leak detection Lanzarote, water leak detection Canary Islands, pool leak detection Lanzarote, leak repair Lanzarote, underground water leak detection, swimming pool leak detection, hidden water leak detection, Lanzarote water leak specialist, leak detection service Lanzarote, professional leak detection"
        canonical="https://canary-detect.com"
      />
      <LocalBusinessSchema page="home" />
      <HeroSlider />
      <WelcomeSection />
      <TrustBadgesSection />
      <ServicesGrid />
      <TechnologySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <ProblemFAQSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
