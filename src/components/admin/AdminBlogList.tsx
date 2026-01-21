import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Edit, Trash2, Eye, EyeOff, ExternalLink } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface AdminBlogListProps {
  onEdit: (postId: string) => void;
}

const AdminBlogList = ({ onEdit }: AdminBlogListProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, slug, title, category, author, published, created_at, updated_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load posts');
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const togglePublish = async (post: BlogPost) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ published: !post.published })
      .eq('id', post.id);

    if (error) {
      toast.error('Failed to update post');
    } else {
      toast.success(post.published ? 'Post unpublished' : 'Post published');
      fetchPosts();
    }
  };

  const deletePost = async (postId: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', postId);

    if (error) {
      toast.error('Failed to delete post');
    } else {
      toast.success('Post deleted');
      fetchPosts();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg">
        <p className="text-muted-foreground mb-4">No blog posts yet.</p>
        <p className="text-sm text-muted-foreground">Click "New Post" to create your first article.</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-4 font-medium">Title</th>
            <th className="text-left p-4 font-medium hidden md:table-cell">Category</th>
            <th className="text-left p-4 font-medium hidden lg:table-cell">Author</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium hidden md:table-cell">Updated</th>
            <th className="text-right p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-4">
                <div className="font-medium line-clamp-1">{post.title}</div>
                <div className="text-xs text-muted-foreground mt-1">/{post.slug}</div>
              </td>
              <td className="p-4 hidden md:table-cell">
                {post.category && (
                  <Badge variant="secondary">{post.category}</Badge>
                )}
              </td>
              <td className="p-4 hidden lg:table-cell text-muted-foreground">
                {post.author}
              </td>
              <td className="p-4">
                <Badge variant={post.published ? "default" : "outline"}>
                  {post.published ? 'Published' : 'Draft'}
                </Badge>
              </td>
              <td className="p-4 hidden md:table-cell text-muted-foreground text-sm">
                {formatDate(post.updated_at)}
              </td>
              <td className="p-4">
                <div className="flex items-center justify-end gap-2">
                  {post.published && (
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-8 w-8"
                    >
                      <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePublish(post)}
                    className="h-8 w-8"
                    title={post.published ? 'Unpublish' : 'Publish'}
                  >
                    {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(post.id)}
                    className="h-8 w-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Post</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{post.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deletePost(post.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBlogList;
