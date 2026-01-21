import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, BlogArticle as StaticBlogArticle } from "@/data/blogArticles";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import waterLeakImg from "@/assets/services/water-leak-detection.jpg";

interface DatabaseBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  author: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  read_time: number | null;
  created_at: string;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [dbPost, setDbPost] = useState<DatabaseBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Check static articles first
  const staticArticle = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];

  useEffect(() => {
    if (staticArticle) {
      setLoading(false);
      return;
    }

    const fetchDbPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setDbPost(data);
      }
      setLoading(false);
    };

    fetchDbPost();
  }, [slug, staticArticle]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (notFound && !staticArticle) {
    return <Navigate to="/blog" replace />;
  }

  // Use static article or database post
  const article = staticArticle || dbPost;
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const isStatic = !!staticArticle;
  const title = isStatic ? staticArticle.title : dbPost!.title;
  const metaTitle = isStatic ? staticArticle.metaTitle : (dbPost!.meta_title || dbPost!.title);
  const metaDescription = isStatic ? staticArticle.metaDescription : (dbPost!.meta_description || dbPost!.excerpt || '');
  const keywords = isStatic ? staticArticle.keywords : (dbPost!.keywords || '');
  const content = isStatic ? staticArticle.content : dbPost!.content;
  const category = isStatic ? staticArticle.category : (dbPost!.category || 'Blog');
  const author = isStatic ? staticArticle.author : dbPost!.author;
  const readTime = isStatic ? staticArticle.readTime : (dbPost!.read_time || 5);
  const date = isStatic ? staticArticle.date : dbPost!.created_at;
  const image = isStatic ? staticArticle.image : (dbPost!.featured_image || waterLeakImg);

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <Layout>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonical={`https://canary-detect.com/blog/${slug}`}
        type="article"
        image={image}
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": metaDescription,
          "image": image,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Canary Detect",
            "logo": {
              "@type": "ImageObject",
              "url": "https://canary-detect.com/logo.png"
            }
          },
          "datePublished": date,
          "dateModified": date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://canary-detect.com/blog/${slug}`
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover" 
            fetchPriority="high" 
            decoding="async" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canary-navy/95 via-canary-navy/80 to-canary-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-canary-navy/80 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(date)}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime} min read
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ol:my-4
                prose-table:border-border prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border-border
                [&_.video-embed]:my-8 [&_.video-embed]:rounded-lg [&_.video-embed]:overflow-hidden [&_.video-embed]:shadow-lg
                [&_iframe]:w-full [&_iframe]:aspect-video"
            >
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ href, children }) => {
                    if (href?.startsWith('/')) {
                      return <Link to={href} className="text-primary hover:underline">{children}</Link>;
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-canary-navy rounded-xl text-white text-center"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">
                Need Professional Leak Detection?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Don't let hidden leaks damage your property. Contact Canary Detect for expert leak detection across Lanzarote with our No Find, No Fee guarantee.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((post, index) => (
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
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                      <h3 className="font-heading font-bold text-base mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <span className="inline-flex items-center text-primary text-sm font-medium">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogArticle;
