import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PoolCoatingsIndex from "./pages/pool-coatings/PoolCoatingsIndex";
import ColourSelector from "./pages/pool-coatings/ColourSelector";
import ColourDetail from "./pages/pool-coatings/ColourDetail";
import WhyEcoFinish from "./pages/pool-coatings/WhyEcoFinish";
import Process from "./pages/pool-coatings/Process";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pool-coatings" element={<PoolCoatingsIndex />} />
          <Route path="/pool-coatings/colours" element={<ColourSelector />} />
          <Route path="/pool-coatings/colours/:colourId" element={<ColourDetail />} />
          <Route path="/pool-coatings/why-eco-finish" element={<WhyEcoFinish />} />
          <Route path="/pool-coatings/process" element={<Process />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
