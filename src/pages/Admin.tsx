import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus, LogOut, FileText, Image, Settings } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";
import AdminBlogList from "@/components/admin/AdminBlogList";
import AdminBlogEditor from "@/components/admin/AdminBlogEditor";

type AdminView = 'list' | 'editor';

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<AdminView>('list');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session) {
          navigate('/admin/login');
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session) {
        // Check admin role
        setTimeout(async () => {
          const { data: roles } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .in('role', ['admin', 'editor']);
          
          if (!roles || roles.length === 0) {
            toast.error("Access denied");
            await supabase.auth.signOut();
            navigate('/admin/login');
          }
          setLoading(false);
        }, 0);
      } else {
        navigate('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate('/admin/login');
  };

  const handleNewPost = () => {
    setEditingPostId(null);
    setView('editor');
  };

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    setView('editor');
  };

  const handleBackToList = () => {
    setEditingPostId(null);
    setView('list');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-canary-navy text-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-heading font-bold text-xl">Canary Detect Admin</h1>
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
              {user?.email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/10">
              <a href="/" target="_blank">View Site</a>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-white hover:bg-white/10">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-3">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                view === 'list' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <FileText className="h-4 w-4" />
              Blog Posts
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {view === 'list' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold">Blog Posts</h2>
              <Button onClick={handleNewPost}>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>
            <AdminBlogList onEdit={handleEditPost} />
          </div>
        )}

        {view === 'editor' && (
          <AdminBlogEditor 
            postId={editingPostId} 
            onBack={handleBackToList}
          />
        )}
      </main>
    </div>
  );
};

export default Admin;
