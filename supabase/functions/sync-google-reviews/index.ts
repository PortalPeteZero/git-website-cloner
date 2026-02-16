import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_API_KEY = Deno.env.get("GOOGLE_PLACES_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!GOOGLE_API_KEY) {
      throw new Error("GOOGLE_PLACES_API_KEY not configured");
    }

    const placeId = "ChIJQ24m1lQ3RgwRqFUT1hoFicQ";

    // Fetch reviews from Google Places API (New)
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=en`;
    
    const googleRes = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!googleRes.ok) {
      const errorText = await googleRes.text();
      console.error("Google API error:", errorText);
      
      // Try legacy API as fallback
      const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`;
      const legacyRes = await fetch(legacyUrl);
      const legacyData = await legacyRes.json();
      
      if (legacyData.status !== "OK") {
        throw new Error(`Google Places API error: ${legacyData.status} - ${legacyData.error_message || 'Unknown'}`);
      }

      const reviews = legacyData.result?.reviews || [];
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      let upsertCount = 0;
      for (const review of reviews) {
        const reviewId = `${review.author_name}-${review.time}`;
        const { error } = await supabase
          .from("google_reviews")
          .upsert({
            google_review_id: reviewId,
            author_name: review.author_name,
            rating: review.rating,
            text: review.text || "",
            relative_time_description: review.relative_time_description,
            review_time: review.time,
            profile_photo_url: review.profile_photo_url || null,
            language: review.language || "en",
          }, { onConflict: "google_review_id" });

        if (!error) upsertCount++;
      }

      // Log sync
      await supabase.from("review_sync_log").insert({
        reviews_count: upsertCount,
        status: "success_legacy",
      });

      return new Response(
        JSON.stringify({
          success: true,
          synced: upsertCount,
          total_from_google: reviews.length,
          api: "legacy",
          rating: legacyData.result?.rating,
          total_reviews: legacyData.result?.user_ratings_total,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // New Places API response
    const data = await googleRes.json();
    const reviews = data.reviews || [];
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    let upsertCount = 0;
    for (const review of reviews) {
      const reviewId = `${review.authorAttribution?.displayName}-${review.publishTime}`;
      const { error } = await supabase
        .from("google_reviews")
        .upsert({
          google_review_id: reviewId,
          author_name: review.authorAttribution?.displayName || "Anonymous",
          rating: review.rating,
          text: review.text?.text || review.originalText?.text || "",
          relative_time_description: review.relativePublishTimeDescription || "",
          review_time: review.publishTime ? Math.floor(new Date(review.publishTime).getTime() / 1000) : null,
          profile_photo_url: review.authorAttribution?.photoUri || null,
          language: review.originalText?.languageCode || "en",
        }, { onConflict: "google_review_id" });

      if (!error) upsertCount++;
      else console.error("Upsert error:", error);
    }

    // Log sync
    await supabase.from("review_sync_log").insert({
      reviews_count: upsertCount,
      status: "success",
    });

    return new Response(
      JSON.stringify({
        success: true,
        synced: upsertCount,
        total_from_google: reviews.length,
        api: "new",
        rating: data.rating,
        total_reviews: data.userRatingCount,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Sync error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
