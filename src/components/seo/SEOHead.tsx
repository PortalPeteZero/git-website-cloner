import { useEffect } from 'react';
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
}

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  canonical,
  type = 'website',
  image = '/og-image.jpg'
}: SEOHeadProps) {
  const location = useLocation();
  const { language, isSpanish } = useTranslation();

  useEffect(() => {
    // Set html lang attribute
    document.documentElement.lang = language;
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const ogLocaleAlt = document.querySelector('meta[property="og:locale:alternate"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image.startsWith('http') ? image : `https://canary-detect.com${image}`);
    if (ogType) ogType.setAttribute('content', type);
    if (ogLocale) ogLocale.setAttribute('content', isSpanish ? 'es_ES' : 'en_GB');
    if (ogLocaleAlt) ogLocaleAlt.setAttribute('content', isSpanish ? 'en_GB' : 'es_ES');
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', image.startsWith('http') ? image : `https://canary-detect.com${image}`);
    if (twitterUrl && canonical) twitterUrl.setAttribute('content', canonical);
    
    // Update canonical if provided
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }
    }

    // Add/update hreflang tags
    const baseUrl = 'https://canary-detect.com';
    const enUrl = isSpanish 
      ? `${baseUrl}${getEquivalentRoute(location.pathname, 'en')}`
      : `${baseUrl}${location.pathname}`;
    const esUrl = isSpanish
      ? `${baseUrl}${location.pathname}`
      : `${baseUrl}${getEquivalentRoute(location.pathname, 'es')}`;

    // Manage hreflang link tags
    let hreflangEn = document.querySelector('link[hreflang="en"]') as HTMLLinkElement;
    let hreflangEs = document.querySelector('link[hreflang="es"]') as HTMLLinkElement;
    let hreflangDefault = document.querySelector('link[hreflang="x-default"]') as HTMLLinkElement;

    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute('href', enUrl);

    if (!hreflangEs) {
      hreflangEs = document.createElement('link');
      hreflangEs.setAttribute('rel', 'alternate');
      hreflangEs.setAttribute('hreflang', 'es');
      document.head.appendChild(hreflangEs);
    }
    hreflangEs.setAttribute('href', esUrl);

    if (!hreflangDefault) {
      hreflangDefault = document.createElement('link');
      hreflangDefault.setAttribute('rel', 'alternate');
      hreflangDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute('href', enUrl);

  }, [title, description, keywords, canonical, type, image, language, isSpanish, location.pathname]);
  
  return null;
}
