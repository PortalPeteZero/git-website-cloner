import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  schemaId?: string;
}

const FAQSchema = forwardRef<HTMLDivElement, FAQSchemaProps>(({ faqs, schemaId = 'faq-schema' }, ref) => {
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div ref={ref} style={{ display: 'none' }} />
    </>
  );
});

FAQSchema.displayName = "FAQSchema";

export default FAQSchema;
