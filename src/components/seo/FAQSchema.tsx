import { useEffect, forwardRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  schemaId?: string;
}

const FAQSchema = forwardRef<HTMLDivElement, FAQSchemaProps>(({ faqs, schemaId = 'faq-schema' }, ref) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = schemaId;
    
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    script.textContent = JSON.stringify(faqSchema);
    
    // Remove existing schema with same id if present
    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqs, schemaId]);
  
  return <div ref={ref} style={{ display: 'none' }} />;
});

FAQSchema.displayName = "FAQSchema";

export default FAQSchema;
