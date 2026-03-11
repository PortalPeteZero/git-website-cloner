import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import SEOHead from "@/components/seo/SEOHead";
import ServiceSchema from "@/components/seo/ServiceSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import HomepageFAQSchema from "@/components/seo/HomepageFAQSchema";
import { useTranslation } from "@/i18n/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingFallback from "@/components/LoadingFallback";

// Lazy load below-the-fold components for faster initial render
const ServicesGrid = lazy(() => import("@/components/home/ServicesGrid"));
const PricingHomepageSection = lazy(() => import("@/components/home/PricingHomepageSection"));
const TechnologySection = lazy(() => import("@/components/home/TechnologySection"));
const HowItWorksSection = lazy(() => import("@/components/home/HowItWorksSection"));

const CaseStudiesPreview = lazy(() => import("@/components/home/CaseStudiesPreview"));
const HomepageSEOContent = lazy(() => import("@/components/home/HomepageSEOContent"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const ProblemFAQSection = lazy(() => import("@/components/home/ProblemFAQSection"));
const GoogleReviewsHighlight = lazy(() => import("@/components/home/GoogleReviewsHighlight"));
const PopularArticlesSection = lazy(() => import("@/components/home/PopularArticlesSection"));
const ServiceAreasHomepage = lazy(() => import("@/components/home/ServiceAreasHomepage"));
const GetQuoteCTA = lazy(() => import("@/components/home/GetQuoteCTA"));

const Index = () => {
  const { t, isSpanish } = useTranslation();
  
  return (
    <Layout>
      <SEOHead 
        title={isSpanish ? "Canary Detect | Detección Fugas Agua Piscina Lanzarote" : "Canary Detect | Water & Pool Leak Detection Lanzarote"}
        description={isSpanish ? "Detección experta de fugas en Lanzarote. Fugas de agua, piscinas, tuberías subterráneas. Respuesta rápida, tecnología avanzada." : "Expert leak detection in Lanzarote. Water leaks, pool leaks, underground pipes. Fast response, advanced technology."}
        keywords={t('meta.home.keywords')}
        canonical={isSpanish ? "https://canary-detect.com/es" : "https://canary-detect.com"}
      />
      <LocalBusinessSchema page="home" />
      <ServiceSchema />
      <HomepageFAQSchema />
      
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
        <Suspense fallback={<LoadingFallback height="min-h-[400px]" />}>
          <ServicesGrid />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[400px]" />}>
          <PricingHomepageSection />
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
          <GoogleReviewsHighlight />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <CaseStudiesPreview />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[400px]" />}>
          <HomepageSEOContent />
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

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[400px]" />}>
          <PopularArticlesSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[300px]" />}>
          <ServiceAreasHomepage />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback height="min-h-[200px]" />}>
          <GetQuoteCTA />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Index;
