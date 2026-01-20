import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TechnologySection from "@/components/home/TechnologySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WelcomeSection />
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
