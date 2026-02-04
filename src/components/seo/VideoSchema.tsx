import { Helmet } from "react-helmet-async";

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 format, e.g., "PT2M30S" for 2 minutes 30 seconds
}

/**
 * VideoObject schema for Google Video indexing
 * @see https://developers.google.com/search/docs/appearance/structured-data/video
 */
const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: "Canary Detect",
      logo: {
        "@type": "ImageObject",
        url: "https://canary-detect.com/favicon.png",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default VideoSchema;
