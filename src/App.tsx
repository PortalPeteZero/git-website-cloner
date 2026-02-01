import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import FreeLeakConfirmation from "./pages/FreeLeakConfirmation";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import LocationPage from "./pages/LocationPage";
import MeetTheTeam from "./pages/MeetTheTeam";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";
import PlumbingServices from "./pages/PlumbingServices";
import PlumbingServiceDetail from "./pages/PlumbingServiceDetail";

const queryClient = new QueryClient();

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
              <Route path="/services/free-leak-confirmation" element={<FreeLeakConfirmation />} />
              <Route path="/services/pipe-inspection" element={<Navigate to="/services/drain-detection" replace />} />
              
              {/* SEO-friendly redirects for common URL variations */}
              <Route path="/services/leaking-water-pipe-repair-lanzarote" element={<Navigate to="/services/leak-repair" replace />} />
              <Route path="/services/water-pipe-leak-repair" element={<Navigate to="/services/leak-repair" replace />} />
              <Route path="/services/pipe-leak-repair" element={<Navigate to="/services/leak-repair" replace />} />
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
              <Route path="/detecting-a-pool-leak-is-not-necessarily-a-straightforward-task" element={<Navigate to="/services/pool-leak-detection" replace />} />
              <Route path="/how-do-we-locate-problems-in-underground-pipes-that-you-cannot-see" element={<Navigate to="/technology" replace />} />
              <Route path="/cable-detection-is-essential-before-commencing-any-construction-project" element={<Navigate to="/services/drain-detection" replace />} />
              <Route path="/five-reasons-to-invest-in-water-leak-detection" element={<Navigate to="/services/water-leak-detection" replace />} />
              <Route path="/diy-tips-how-to-detect-pool-leaks" element={<Navigate to="/blog/how-to-check-for-pool-leaks-lanzarote" replace />} />
              <Route path="/leak-detection-and-repair-pool" element={<Navigate to="/services/pool-leak-repair" replace />} />
              
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/locations/:location" element={<LocationPage />} />
              <Route path="/meet-the-team" element={<MeetTheTeam />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/plumbing-services" element={<PlumbingServices />} />
              <Route path="/plumbing-services/:slug" element={<PlumbingServiceDetail />} />
              
              {/* Spanish Routes */}
              <Route path="/es" element={<Index />} />
              <Route path="/es/sobre-nosotros" element={<About />} />
              <Route path="/es/servicios" element={<Services />} />
              <Route path="/es/servicios/confirmacion-fugas-gratis" element={<FreeLeakConfirmation />} />
              <Route path="/es/servicios/:slug" element={<ServiceDetail />} />
              <Route path="/es/contacto" element={<Contact />} />
              <Route path="/es/casos-de-exito" element={<CaseStudies />} />
              <Route path="/es/tecnologia" element={<Technology />} />
              <Route path="/es/blog" element={<Blog />} />
              <Route path="/es/blog/:slug" element={<BlogArticle />} />
              <Route path="/es/ubicaciones/:location" element={<LocationPage />} />
              <Route path="/es/equipo" element={<MeetTheTeam />} />
              <Route path="/es/politica-de-privacidad" element={<PrivacyPolicy />} />
              <Route path="/es/servicios-fontaneria" element={<PlumbingServices />} />
              <Route path="/es/servicios-fontaneria/:slug" element={<PlumbingServiceDetail />} />
              
              {/* Admin (English only) */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </LanguageProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
