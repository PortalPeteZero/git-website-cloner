import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getHomePath, getServicesBasePath, getBlogPath, getContactPath } from "@/i18n/routes";

const NotFound = () => {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const content = {
    title: isSpanish ? "Página no encontrada | Canary Detect" : "Page Not Found | Canary Detect",
    description: isSpanish 
      ? "La página que busca no existe. Vuelva a la página de inicio de Canary Detect."
      : "The page you're looking for doesn't exist. Return to Canary Detect homepage.",
    heading: isSpanish ? "Página no encontrada" : "Page not found",
    subheading: isSpanish 
      ? "Lo sentimos, la página que busca no existe o ha sido movida."
      : "Sorry, the page you're looking for doesn't exist or has been moved.",
    homeLink: isSpanish ? "Volver al Inicio" : "Return to Home",
    servicesLink: isSpanish ? "Ver Servicios" : "View Services",
    blogLink: isSpanish ? "Leer Blog" : "Read Blog",
    contactLink: isSpanish ? "Contactar" : "Contact Us",
  };

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted px-4">
        <div className="text-center max-w-md">
          <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            {content.heading}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {content.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to={getHomePath(isSpanish)} 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {content.homeLink}
            </Link>
            <Link 
              to={getServicesBasePath(isSpanish)} 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
            >
              {content.servicesLink}
            </Link>
          </div>
          <div className="mt-6 flex gap-4 justify-center text-sm">
            <Link to={getBlogPath(isSpanish)} className="text-primary hover:underline">
              {content.blogLink}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to={getContactPath(isSpanish)} className="text-primary hover:underline">
              {content.contactLink}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
