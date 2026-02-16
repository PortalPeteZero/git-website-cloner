import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface GoogleReview {
  id: string;
  google_review_id: string | null;
  author_name: string;
  rating: number;
  text: string | null;
  relative_time_description: string | null;
  review_time: number | null;
  profile_photo_url: string | null;
  language: string | null;
  is_featured: boolean | null;
  created_at: string;
}

export const useGoogleReviews = (options?: { featured?: boolean; limit?: number }) => {
  return useQuery({
    queryKey: ["google-reviews", options?.featured, options?.limit],
    queryFn: async () => {
      let query = supabase
        .from("google_reviews")
        .select("*")
        .order("review_time", { ascending: false });

      if (options?.featured) {
        query = query.eq("is_featured", true);
      }
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as GoogleReview[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useSyncReviews = () => {
  const syncReviews = async () => {
    const { data, error } = await supabase.functions.invoke("sync-google-reviews");
    if (error) throw error;
    return data;
  };
  return { syncReviews };
};
