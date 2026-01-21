import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { blogArticles, BlogArticle as StaticBlogArticle } from "@/data/blogArticles";
import { supabase } from "@/integrations/supabase/client";
import waterLeakImg from "@/assets/services/water-leak-detection.jpg";

interface DatabaseBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  author: string;
  featured_image: string | null;
  read_time: number | null;
  created_at: string;
}

interface CombinedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  image: string;
  readTime: number;
  date: string;
  isDatabase: boolean;
}

const Blog = () => {
  const [dbPosts, setDbPosts] = useState<CombinedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDbPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, slug, title, excerpt, category, author, featured_image, read_time, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setDbPosts(data.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt || '',
          category: post.category || 'Blog',
          author: post.author,
          image: post.featured_image || waterLeakImg,
          readTime: post.read_time || 5,
          date: post.created_at,
          isDatabase: true,
        })));
      }
      setLoading(false);
    };

    fetchDbPosts();
  }, []);

  // Convert static articles to combined format
  const staticPosts: CombinedPost[] = blogArticles.map(article => ({
    id: String(article.id),
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    author: article.author,
    image: article.image,
    readTime: article.readTime,
    date: article.date,
    isDatabase: false,
  }));

  // Combine and sort all posts by date (newest first)
  const allPosts = [...dbPosts, ...staticPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <Layout>
      <SEOHead
        title="Leak Detection Blog | Tips & Guides | Canary Detect Lanzarote"
        description="Expert leak detection tips, guides, and advice for Lanzarote property owners. Learn how to detect pool leaks, find underground water leaks, and protect your property."
        keywords="leak detection blog, pool leak tips, water leak guide, underground leak detection, Lanzarote plumbing advice"
        canonical="https://canary-detect.com/blog"
      />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={waterLeakImg} alt="Leak detection tips and advice blog" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-canary-navy/90 via-canary-navy/70 to-canary-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-canary-navy/60 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Leak Detection Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
              Expert Tips & <span className="text-primary">Guides</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Practical advice from Lanzarote's leak detection experts. 
              Learn how to identify leaks, protect your property, and save money on repairs.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="group">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} min read
                  </span>
                </div>
                <Button asChild>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            All Articles
          </h2>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <span className="text-xs text-primary font-medium">
                      {post.category}
                    </span>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="font-heading font-bold text-lg mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Need Help With a Leak?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our expert team is ready to help you find and fix leaks across Lanzarote. 
              Contact us for a free consultation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
