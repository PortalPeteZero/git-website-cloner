import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { ArrowLeft, Save, Upload, Image as ImageIcon } from "lucide-react";

interface AdminBlogEditorProps {
  postId: string | null;
  onBack: () => void;
}

interface BlogPostForm {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
  read_time: number;
  published: boolean;
}

const initialForm: BlogPostForm = {
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  category: '',
  author: 'Canary Detect',
  featured_image: '',
  meta_title: '',
  meta_description: '',
  keywords: '',
  read_time: 5,
  published: false,
};

const AdminBlogEditor = ({ postId, onBack }: AdminBlogEditorProps) => {
  const [form, setForm] = useState<BlogPostForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    if (!postId) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', postId)
      .single();

    if (error) {
      toast.error('Failed to load post');
      onBack();
    } else if (data) {
      setForm({
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt || '',
        content: data.content,
        category: data.category || '',
        author: data.author,
        featured_image: data.featured_image || '',
        meta_title: data.meta_title || '',
        meta_description: data.meta_description || '',
        keywords: data.keywords || '',
        read_time: data.read_time || 5,
        published: data.published,
      });
    }
    setLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `blog/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      toast.error('Failed to upload image');
      console.error(uploadError);
    } else {
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);
      
      setForm(prev => ({ ...prev, featured_image: publicUrl }));
      toast.success('Image uploaded');
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.title.trim() || !form.content.trim() || !form.slug.trim()) {
      toast.error('Please fill in title, slug, and content');
      return;
    }

    setSaving(true);

    const postData = {
      slug: form.slug,
      title: form.title,
      excerpt: form.excerpt || null,
      content: form.content,
      category: form.category || null,
      author: form.author,
      featured_image: form.featured_image || null,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      keywords: form.keywords || null,
      read_time: form.read_time,
      published: form.published,
    };

    let error;
    
    if (postId) {
      const result = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', postId);
      error = result.error;
    } else {
      const result = await supabase
        .from('blog_posts')
        .insert(postData);
      error = result.error;
    }

    if (error) {
      console.error('Save error:', error);
      if (error.code === '23505') {
        toast.error('A post with this slug already exists');
      } else {
        toast.error('Failed to save post');
      }
    } else {
      toast.success(postId ? 'Post updated' : 'Post created');
      onBack();
    }
    
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-heading font-bold">
          {postId ? 'Edit Post' : 'New Post'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-4">Basic Information</h3>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={form.title}
                onChange={handleTitleChange}
                placeholder="How to Check for Pool Leaks"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug *</Label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">/blog/</span>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="how-to-check-for-pool-leaks"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={form.category}
                onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                placeholder="Pool Care"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={form.author}
                onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
                placeholder="Pete Ashcroft"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="read_time">Read Time (minutes)</Label>
              <Input
                id="read_time"
                type="number"
                min="1"
                value={form.read_time}
                onChange={(e) => setForm(prev => ({ ...prev, read_time: parseInt(e.target.value) || 5 }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={form.excerpt}
              onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Brief description for blog listing..."
              rows={2}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="font-semibold text-lg mb-4">Featured Image</h3>
          
          <div className="space-y-4">
            {form.featured_image && (
              <div className="relative aspect-video max-w-md rounded-lg overflow-hidden border border-border">
                <img 
                  src={form.featured_image} 
                  alt="Featured" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex items-center gap-4">
              <Label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors">
                  <Upload className="h-4 w-4" />
                  <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </Label>
              
              <span className="text-muted-foreground text-sm">or</span>
              
              <Input
                placeholder="Paste image URL"
                value={form.featured_image}
                onChange={(e) => setForm(prev => ({ ...prev, featured_image: e.target.value }))}
                className="max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="font-semibold text-lg mb-4">Content (Markdown)</h3>
          <Textarea
            value={form.content}
            onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Write your article content in Markdown format..."
            rows={20}
            className="font-mono text-sm"
            required
          />
          <p className="text-xs text-muted-foreground mt-2">
            Supports Markdown: **bold**, *italic*, ## headings, - lists, [links](url), and embedded videos with HTML.
          </p>
        </div>

        {/* SEO */}
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-4">SEO Settings</h3>
          
          <div className="space-y-2">
            <Label htmlFor="meta_title">Meta Title</Label>
            <Input
              id="meta_title"
              value={form.meta_title}
              onChange={(e) => setForm(prev => ({ ...prev, meta_title: e.target.value }))}
              placeholder="SEO title (defaults to post title)"
            />
            <p className="text-xs text-muted-foreground">Keep under 60 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="meta_description">Meta Description</Label>
            <Textarea
              id="meta_description"
              value={form.meta_description}
              onChange={(e) => setForm(prev => ({ ...prev, meta_description: e.target.value }))}
              placeholder="SEO description for search results..."
              rows={2}
            />
            <p className="text-xs text-muted-foreground">Keep between 150-160 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              value={form.keywords}
              onChange={(e) => setForm(prev => ({ ...prev, keywords: e.target.value }))}
              placeholder="pool leak detection, bucket test, swimming pool"
            />
            <p className="text-xs text-muted-foreground">Comma-separated keywords</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3">
            <Switch
              id="published"
              checked={form.published}
              onCheckedChange={(checked) => setForm(prev => ({ ...prev, published: checked }))}
            />
            <Label htmlFor="published" className="cursor-pointer">
              {form.published ? 'Published' : 'Draft'}
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : (postId ? 'Update Post' : 'Create Post')}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogEditor;
