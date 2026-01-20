import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

// Import unique images for each blog post
import waterLeakImg from "@/assets/services/water-leak-detection.jpg";
import pipeInspectionImg from "@/assets/services/pipe-inspection.jpg";
import poolLeakImg from "@/assets/services/pool-leak-detection.jpg";
import drainDetectionImg from "@/assets/services/drain-detection.jpg";
import undergroundImg from "@/assets/services/underground-detection.jpg";
import leakRepairImg from "@/assets/services/leak-repair.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs You May Have a Hidden Water Leak",
    excerpt: "Water leaks can go unnoticed for months, causing significant damage. Here are the warning signs to look out for...",
    date: "2024-01-15",
    author: "Pete Ashcroft",
    category: "Tips & Advice",
    image: waterLeakImg,
  },
  {
    id: 2,
    title: "The Benefits of Non-Invasive Leak Detection",
    excerpt: "Modern leak detection technology means we can find leaks without breaking walls or floors. Learn how it works...",
    date: "2024-01-08",
    author: "Dave Poxon",
    category: "Technology",
    image: pipeInspectionImg,
  },
  {
    id: 3,
    title: "Swimming Pool Leak Detection: What You Need to Know",
    excerpt: "Is your pool losing water? It might be evaporation, or it could be a leak. Here's how to tell the difference...",
    date: "2023-12-20",
    author: "Pete Ashcroft",
    category: "Pool Care",
    image: poolLeakImg,
  },
  {
    id: 4,
    title: "Understanding Your Water Bill: Signs of a Leak",
    excerpt: "An unexplained increase in your water bill is often the first sign of a leak. Here's what to look for...",
    date: "2023-12-10",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: drainDetectionImg,
  },
  {
    id: 5,
    title: "Thermal Imaging in Leak Detection",
    excerpt: "Thermal imaging cameras are one of our most valuable tools. Discover how they help us find hidden leaks...",
    date: "2023-11-28",
    author: "Pete Ashcroft",
    category: "Technology",
    image: undergroundImg,
  },
  {
    id: 6,
    title: "Preparing Your Property for a Leak Detection Survey",
    excerpt: "Getting ready for a leak detection visit? Here's how to prepare your property for the best results...",
    date: "2023-11-15",
    author: "Dave Poxon",
    category: "Tips & Advice",
    image: leakRepairImg,
  },
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-canary-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium">Our Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-canary-white mt-2 mb-6">
              News & Insights
            </h1>
            <p className="text-canary-white/80 text-lg leading-relaxed">
              Tips, advice, and insights from our leak detection experts. 
              Learn more about leak detection technology and how to protect your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.title} cover`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline cursor-pointer">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest tips and news about leak detection delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
