import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WelcomeSection />
      <ServicesGrid />
      <CaseStudiesPreview />
    </Layout>
  );
};

export default Index;
