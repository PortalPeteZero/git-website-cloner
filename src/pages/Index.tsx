import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import MeetTheTeamSection from "@/components/home/MeetTheTeamSection";
import SEOHead from "@/components/seo/SEOHead";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingFallback from "@/components/LoadingFallback";

// Lazy load below-the-fold components for faster initial render
const ServicesGrid = lazy(() => import("@/components/home/ServicesGrid"));
const TechnologySection = lazy(() => import("@/components/home/TechnologySection"));
const HowItWorksSection = lazy(() => import("@/components/home/HowItWorksSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const CaseStudiesPreview = lazy(() => import("@/components/home/CaseStudiesPreview"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const ProblemFAQSection = lazy(() => import("@/components/home/ProblemFAQSection"));

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
      
      {/* Critical above-the-fold content */}
      <ErrorBoundary>
        <HeroSlider />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <WelcomeSection />
      </ErrorBoundary>
      
      <TrustBadgesSection />
      
      
      {/* Lazy-loaded below-the-fold sections */}
      <ErrorBoundary>
        <MeetTheTeamSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[400px]" />}>
          <ServicesGrid />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <TechnologySection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <HowItWorksSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <TestimonialsSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <CaseStudiesPreview />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <ProblemFAQSection />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <FAQSection />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Index;
