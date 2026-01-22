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
import { useTranslation } from "@/i18n/LanguageContext";

const Index = () => {
  const { t, isSpanish } = useTranslation();
  
  return (
    <Layout>
      <SEOHead 
        title={t('meta.home.title')}
        description={t('meta.home.description')}
        keywords={t('meta.home.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es" : "https://canary-detect.com"}
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
