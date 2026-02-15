import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '@/i18n/LanguageContext';
import { getEquivalentRoute } from '@/i18n/routes';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'service';
  image?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  type = 'website',
  image = '/og-image.jpg',
  noIndex = false,
  schemaJson,
}: SEOHeadProps) => {
  const location = useLocation();
  const { language, isSpanish } = useTranslation();
  const baseUrl = 'https://canary-detect.com';

  const effectiveCanonical = canonical || `${baseUrl}${location.pathname}`;
  const resolvedImage = image.startsWith('http') ? image : `${baseUrl}${image}?v=2`;

  const enUrl = isSpanish
    ? `${baseUrl}${getEquivalentRoute(location.pathname, 'en')}`
    : `${baseUrl}${location.pathname}`;
  const esUrl = isSpanish
    ? `${baseUrl}${location.pathname}`
    : `${baseUrl}${getEquivalentRoute(location.pathname, 'es')}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={effectiveCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={effectiveCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={isSpanish ? 'es_ES' : 'en_ES'} />
      <meta property="og:locale:alternate" content={isSpanish ? 'en_GB' : 'es_ES'} />
      <meta property="og:site_name" content="Canary Detect" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={effectiveCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Schema JSON-LD */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schemaJson) ? schemaJson : schemaJson)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
