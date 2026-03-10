import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import LoadingFallback from "./components/LoadingFallback";

// SEO-critical pages loaded eagerly for LovableHTML pre-rendering
import Index from "./pages/Index";
import LocationPage from "./pages/LocationPage";
import Locations from "./pages/Locations";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import FontaneroLocationPage from "./pages/FontaneroLocationPage";

// Low-traffic / non-SEO-critical pages lazy-loaded to reduce initial bundle
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Technology = lazy(() => import("./pages/Technology"));
const Reviews = lazy(() => import("./pages/Reviews"));
const PlumbingServices = lazy(() => import("./pages/PlumbingServices"));
const PlumbingServiceDetail = lazy(() => import("./pages/PlumbingServiceDetail"));
const FreeLeakConfirmation = lazy(() => import("./pages/FreeLeakConfirmation"));
const PrePurchaseSurvey = lazy(() => import("./pages/PrePurchaseSurvey"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const MeetTheTeam = lazy(() => import("./pages/MeetTheTeam"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const queryClient = new QueryClient();

// Wrapper for lazy-loaded routes
const LazyRoute = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback height="min-h-screen" />}>
    {children}
  </Suspense>
);

// Main App component - LanguageProvider must be inside BrowserRouter
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* English Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/free-leak-confirmation" element={<LazyRoute><FreeLeakConfirmation /></LazyRoute>} />
              <Route path="/services/pre-purchase-survey" element={<LazyRoute><PrePurchaseSurvey /></LazyRoute>} />
              <Route path="/services/pipe-inspection" element={<Navigate to="/services/drain-detection" replace />} />
              
              {/* SEO-friendly redirects for common URL variations */}
              <Route path="/services/leaking-water-pipe-repair-lanzarote" element={<Navigate to="/services/leak-repair" replace />} />
              <Route path="/services/water-pipe-leak-repair" element={<Navigate to="/services/leak-repair" replace />} />
              <Route path="/services/pipe-leak-repair" element={<Navigate to="/services/leak-repair" replace />} />
              <Route path="/services/water-leak-detection-lanzarote" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/services/water-leak-detection-lanzarote/" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/services/swimming-pool-leak-detection" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/services/pool-leak" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/services/underground-leak-detection" element={<Navigate to="/services/underground-detection" replace />} />
              <Route path="/services/underground-pipe-leak" element={<Navigate to="/services/underground-detection" replace />} />
              <Route path="/services/water-leak" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/services/drain-survey" element={<Navigate to="/services/drain-detection" replace />} />
              <Route path="/services/cctv-drain-survey" element={<Navigate to="/services/drain-detection" replace />} />
              
              {/* Legacy WordPress URL redirects */}
              <Route path="/leak-from-your-swimming-pool-can-costs-thousands-of-euros" element={<Navigate to="/blog/swimming-pool-leak-repair-cost-lanzarote" replace />} />
              <Route path="/leak-detection-water-pipe" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/pipe-leaks-in-lanzarote-can-be-very-difficult-to-locate" element={<Navigate to="/services/underground-detection" replace />} />
              <Route path="/water-leaks-can-cause-serious-issues-for-lanzarote-homeowners" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/suffering-from-a-leaking-water-pipe-but-dont-know-where-the-leak-is-we-can-help" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/category/case-studies" element={<Navigate to="/case-studies" replace />} />
              <Route path="/category/case-studies/" element={<Navigate to="/case-studies" replace />} />
              <Route path="/detecting-a-pool-leak-is-not-necessarily-a-straightforward-task" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/detecting-a-pool-leak-is-not-necessarily-a-straightforward-task/" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/how-do-we-locate-problems-in-underground-pipes-that-you-cannot-see" element={<Navigate to="/technology" replace />} />
              <Route path="/cable-detection-is-essential-before-commencing-any-construction-project" element={<Navigate to="/services/drain-detection" replace />} />
              <Route path="/five-reasons-to-invest-in-water-leak-detection" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/diy-tips-how-to-detect-pool-leaks" element={<Navigate to="/blog/how-to-check-for-pool-leaks-lanzarote" replace />} />
              <Route path="/diy-tips-how-to-detect-pool-leaks/" element={<Navigate to="/blog/how-to-check-for-pool-leaks-lanzarote" replace />} />
              <Route path="/leak-detection-and-repair-pool" element={<Navigate to="/services/pool-leak-repair" replace />} />
              <Route path="/leak-detection-and-repair-pool/" element={<Navigate to="/services/pool-leak-repair" replace />} />
              
              {/* Additional legacy WordPress URL redirects from GSC */}
              <Route path="/every-pool-owner-dreads-the-thought-of-a-leak" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/products/pool-leak-detection" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/category/blog" element={<Navigate to="/blog" replace />} />
              <Route path="/category/blog/" element={<Navigate to="/blog" replace />} />
              <Route path="/why-is-pipe-detection-in-lanzarote-important" element={<Navigate to="/technology" replace />} />
              <Route path="/why-is-pipe-detection-in-lanzarote-important/" element={<Navigate to="/technology" replace />} />
              <Route path="/there-can-be-many-reasons-for-a-leak-in-your-pool-in-lanzarote" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/there-can-be-many-reasons-for-a-leak-in-your-pool-in-lanzarote/" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/pipe-leak-detection-in-lanzarote-the-easy-way" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/leak-detection-water-pipe" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/leak-detection-water-pipe/" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/all-our-utilities-run-underground-the-problem-is-that-you-dont-know-where" element={<Navigate to="/services/underground-detection" replace />} />
              <Route path="/suffering-a-leak-from-your-pool-we-can-find-it-and-fix-it-for-you" element={<Navigate to="/services/pool-leak-repair" replace />} />
              <Route path="/locating-underground-services-what-you-need-to-know" element={<Navigate to="/services/underground-detection" replace />} />
              <Route path="/accurate-drain-pipe-detection" element={<Navigate to="/services/drain-detection" replace />} />
              <Route path="/accurate-drain-pipe-detection/" element={<Navigate to="/services/drain-detection" replace />} />
              
              {/* Date archive redirects */}
              <Route path="/2023/04" element={<Navigate to="/blog" replace />} />
              <Route path="/2023/04/" element={<Navigate to="/blog" replace />} />
              <Route path="/2021/08" element={<Navigate to="/blog" replace />} />
              <Route path="/2021/08/" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/01" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/01/" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/12" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/12/" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/08" element={<Navigate to="/blog" replace />} />
              <Route path="/2022/08/" element={<Navigate to="/blog" replace />} />
              <Route path="/2023/03" element={<Navigate to="/blog" replace />} />
              <Route path="/2023/03/" element={<Navigate to="/blog" replace />} />
              
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<LazyRoute><CaseStudies /></LazyRoute>} />
              <Route path="/technology" element={<LazyRoute><Technology /></LazyRoute>} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/:location" element={<LocationPage />} />
              <Route path="/meet-the-team" element={<LazyRoute><MeetTheTeam /></LazyRoute>} />
              <Route path="/reviews" element={<LazyRoute><Reviews /></LazyRoute>} />
              <Route path="/privacy-policy" element={<LazyRoute><PrivacyPolicy /></LazyRoute>} />
              <Route path="/plumbing-services" element={<LazyRoute><PlumbingServices /></LazyRoute>} />
              <Route path="/plumbing-services/:slug" element={<LazyRoute><PlumbingServiceDetail /></LazyRoute>} />
              
              {/* Spanish URL Redirects and legacy i18n fallbacks */}
              <Route path="/es/services" element={<Navigate to="/es/servicios" replace />} />
              <Route path="/es/services/" element={<Navigate to="/es/servicios" replace />} />
              <Route path="/equipo" element={<Navigate to="/es/equipo" replace />} />
              <Route path="/ubicaciones" element={<Navigate to="/es/ubicaciones" replace />} />
              <Route path="/politica-de-privacidad" element={<Navigate to="/es/politica-de-privacidad" replace />} />
              <Route path="/es/privacy-policy" element={<Navigate to="/es/politica-de-privacidad" replace />} />
              <Route path="/es/servicios/desbloqueo-desagues" element={<Navigate to="/es/servicios/desatasco-desagues" replace />} />
              <Route path="/es/servicios/deteccion-fugas-piscina" element={<Navigate to="/es/servicios/deteccion-fugas-piscinas" replace />} />
              <Route path="/es/servicios/reparacion-fugas-piscina" element={<Navigate to="/es/servicios/reparacion-fugas-piscinas" replace />} />
              <Route path="/blog/lanzarote-water-supply-guide" element={<Navigate to="/blog/master-your-lanzarote-water-system" replace />} />
              <Route path="/es/blog/guia-suministro-agua-lanzarote" element={<Navigate to="/es/blog/domina-tu-sistema-de-agua-lanzarote" replace />} />
              <Route path="/locations/tiagua" element={<Navigate to="/locations/tinajo" replace />} />
              <Route path="/locations/mancha-blanca" element={<Navigate to="/locations/tinajo" replace />} />
              <Route path="/es/ubicaciones/tiagua" element={<Navigate to="/es/ubicaciones/tinajo" replace />} />
              <Route path="/es/ubicaciones/mancha-blanca" element={<Navigate to="/es/ubicaciones/tinajo" replace />} />
              
              {/* Fontanero location pages */}
              {["arrecife","playa-blanca","puerto-del-carmen","costa-teguise","yaiza","tias","teguise","san-bartolome","haria","tinajo"].map(loc => (
                <Route key={loc} path={`/es/fontanero-${loc}`} element={<FontaneroLocationPage />} />
              ))}
              
              {/* Spanish Routes */}
              <Route path="/es" element={<Index />} />
              <Route path="/es/sobre-nosotros" element={<About />} />
              <Route path="/es/servicios" element={<Services />} />
              <Route path="/es/servicios/confirmacion-fugas-gratis" element={<LazyRoute><FreeLeakConfirmation /></LazyRoute>} />
              <Route path="/es/servicios/inspeccion-precompra" element={<LazyRoute><PrePurchaseSurvey /></LazyRoute>} />
              <Route path="/es/servicios/:slug" element={<ServiceDetail />} />
              <Route path="/es/contacto" element={<Contact />} />
              <Route path="/es/casos-de-exito" element={<LazyRoute><CaseStudies /></LazyRoute>} />
              <Route path="/es/tecnologia" element={<LazyRoute><Technology /></LazyRoute>} />
              <Route path="/es/blog" element={<Blog />} />
              <Route path="/es/blog/:slug" element={<BlogArticle />} />
              <Route path="/es/ubicaciones" element={<Locations />} />
              <Route path="/es/ubicaciones/:location" element={<LocationPage />} />
              <Route path="/es/equipo" element={<LazyRoute><MeetTheTeam /></LazyRoute>} />
              <Route path="/es/resenas" element={<LazyRoute><Reviews /></LazyRoute>} />
              <Route path="/es/politica-de-privacidad" element={<LazyRoute><PrivacyPolicy /></LazyRoute>} />
              <Route path="/es/servicios-fontaneria" element={<LazyRoute><PlumbingServices /></LazyRoute>} />
              <Route path="/es/servicios-fontaneria/:slug" element={<LazyRoute><PlumbingServiceDetail /></LazyRoute>} />
              
              {/* Admin (English only) */}
              <Route path="/admin" element={<LazyRoute><Admin /></LazyRoute>} />
              <Route path="/admin/login" element={<LazyRoute><AdminLogin /></LazyRoute>} />
              
              <Route path="*" element={<LazyRoute><NotFound /></LazyRoute>} />
            </Routes>
          </TooltipProvider>
        </LanguageProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
