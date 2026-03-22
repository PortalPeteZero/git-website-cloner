import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const videoItems = [
  {
    title: "How We Find Water Leaks Without Breaking Your Walls",
    description: "See exactly how our non-invasive leak detection technology locates hidden water leaks beneath floors and behind walls, without any damage to your property.",
    slug: "how-we-find-water-leaks-without-breaking-walls",
    youtubeId: "PLACEHOLDER_ID",
    category: "Water Leak Detection",
    uploadDate: "2026-03-01",
  },
];

const Videos = () => {
  return (
    <Layout>
      <SEOHead
        title="Leak Detection Videos | Canary Detect"
        description="Watch our leak detection videos: real jobs, equipment guides and tips for property owners in Lanzarote. See how we find leaks without breaking walls."
        canonical="https://canary-detect.com/videos"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Canary Detect Videos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Watch Us Find Leaks
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            See our team in action: real leak detection jobs, equipment guides, and practical tips for property owners in Lanzarote.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoItems.map((video) => (
              <div key={video.slug} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
                {/* Thumbnail with play overlay */}
                <div className="relative aspect-video group cursor-pointer">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-red-600 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {video.category}
                  </Badge>
                  <h2 className="text-lg font-bold text-foreground mb-2">
                    {video.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  <Link
                    to={`/videos/${video.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
                  >
                    Watch video
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
