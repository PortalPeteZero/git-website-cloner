import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Lock, Mail, AlertCircle } from "lucide-react";
import logoDark from "@/assets/logo-dark-bg.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if user has admin role
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .in('role', ['admin', 'editor']);
        
        if (roles && roles.length > 0) {
          navigate('/admin');
        }
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          const { data: roles } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .in('role', ['admin', 'editor']);
          
          if (roles && roles.length > 0) {
            navigate('/admin');
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`
          }
        });
        
        if (error) throw error;
        toast.success("Account created! Please check your email or sign in.");
        setIsSignUp(false);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Check if user has admin role
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', data.user.id)
          .in('role', ['admin', 'editor']);

        if (!roles || roles.length === 0) {
          await supabase.auth.signOut();
          toast.error("Access denied. You don't have admin privileges.");
          return;
        }

        toast.success("Welcome back!");
        navigate('/admin');
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      if (error.message.includes('Invalid login')) {
        toast.error("Invalid email or password");
      } else if (error.message.includes('already registered')) {
        toast.error("This email is already registered. Please sign in.");
      } else {
        toast.error(error.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-canary-navy flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-xl shadow-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <img src={logoDark} alt="Canary Detect" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-heading font-bold">Admin Portal</h1>
            <p className="text-muted-foreground text-sm mt-2">
              {isSignUp ? "Create an admin account" : "Sign in to manage blog content"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@canary-detect.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Please wait..." : (isSignUp ? "Create Account" : "Sign In")}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-primary hover:underline"
            >
              {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
            </button>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                After signing up, you'll need to be granted admin access by an existing administrator 
                before you can access the admin panel.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-white/60 text-sm mt-4">
          <a href="/" className="hover:text-white transition-colors">
            ← Back to website
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
