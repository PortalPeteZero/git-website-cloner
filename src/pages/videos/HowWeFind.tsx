import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import VideoSchema from "@/components/seo/VideoSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HowWeFind = () => {
  return (
    <Layout>
      <SEOHead
        title="How We Find Water Leaks Without Breaking Your Walls | Canary Detect"
        description="Watch how our specialist team locates hidden water leaks beneath floors and behind walls without causing any damage. Non-invasive detection in Lanzarote."
        canonical="https://canary-detect.com/videos/how-we-find-water-leaks-without-breaking-walls"
      />
      <VideoSchema
        name="How We Find Water Leaks Without Breaking Your Walls"
        description="Watch how our specialist team locates hidden water leaks beneath floors and behind walls without causing any damage. Non-invasive acoustic and thermal detection in Lanzarote."
        thumbnailUrl="https://img.youtube.com/vi/PLACEHOLDER_ID/maxresdefault.jpg"
        uploadDate="2026-03-01"
        embedUrl="https://www.youtube.com/embed/PLACEHOLDER_ID"
        duration="PT5M0S"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://canary-detect.com/" },
          { name: "Videos", url: "https://canary-detect.com/videos" },
          { name: "How We Find Water Leaks Without Breaking Your Walls", url: "https://canary-detect.com/videos/how-we-find-water-leaks-without-breaking-walls" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "Videos", href: "/videos" },
              { label: "How We Find Water Leaks" },
            ]}
            className="mb-6"
          />
          <div className="text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              Water Leak Detection
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Find Water Leaks Without Breaking Your Walls
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              See exactly how our non-invasive leak detection technology locates hidden water leaks beneath floors and behind walls, without any damage to your property.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Embed */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER_ID"
                title="How We Find Water Leaks Without Breaking Your Walls"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Video coming soon. Check back shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Written Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <h2>The Problem With Traditional Leak Detection</h2>
            <p>
              For years, finding a hidden water leak meant one thing: breaking open walls or digging up floors to trace a pipe. It was disruptive, expensive, and often unnecessary. The real location of the leak might only be a few centimetres from where you started demolishing, but without the right tools, there was no way to know. Property owners in Lanzarote were left facing large repair bills not just for the leak itself, but for the damage caused by finding it.
            </p>

            <h2>How We Locate Leaks Without Any Damage</h2>
            <p>
              At Canary Detect, we use a combination of specialist equipment to pinpoint the exact source of a leak before anything is opened up. Our primary tools are acoustic listening devices, thermal imaging cameras, and tracer gas detection systems. Each method works differently, and we choose the right approach based on the type of property, the pipe system involved, and where we suspect the problem lies.
            </p>
            <p>
              Acoustic detection works by listening for the sound a pressurised leak makes as water escapes through a crack or joint in the pipe. Even through concrete and tile, a skilled operative with the right equipment can hear this signal and trace it back to the source. Thermal imaging lets us see temperature differences in walls and floors caused by escaping water, highlighting wet areas that would otherwise be invisible. Tracer gas is used when acoustic methods cannot isolate the leak precisely: a harmless gas is introduced into the pipe, and a surface sensor detects exactly where it escapes.
            </p>

            <h2>What Happens on the Day</h2>
            <p>
              When our team arrives, we start with a brief conversation about where you have noticed signs of a problem: a damp patch, an unexplained rise in your water bill, a sound of running water when everything is turned off. This helps us narrow down the likely area before any equipment is unpacked. We then carry out a systematic survey, working methodically through the property to eliminate sections of pipework until we have identified the source. Once found, we mark the exact location and give you a clear report of what we found and what the repair will involve. We do not start any work without your agreement.
            </p>

            <h2>No Find, No Fee</h2>
            <p>
              We operate on a No Find, No Fee basis. If we carry out a full leak detection survey and cannot locate the source, you do not pay for the detection. This policy reflects our confidence in our equipment and our team. It also means you can call us without worrying about paying out for a survey that draws a blank. We work across Lanzarote and the wider Canary Islands, covering residential properties, villas, commercial premises, and community pools.
            </p>
          </div>

          {/* Back link */}
          <div className="max-w-3xl mx-auto mt-10">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              More Videos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Think You Have a Water Leak?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch and we will come to you. No Find, No Fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base border-white/30 text-white hover:bg-white/10">
              <Link to="/services/water-leak-detection">Learn About Our Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowWeFind;
