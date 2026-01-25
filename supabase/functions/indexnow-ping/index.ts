import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BASE_URL = "https://canary-detect.com";
const INDEXNOW_KEY = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"; // 32-char hex key

// URLs to submit - main sitemap and key pages
const URLS_TO_SUBMIT = [
  `${BASE_URL}/sitemap.xml`,
  BASE_URL,
  `${BASE_URL}/services`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/contact`,
];

async function pingIndexNow(urls: string[]): Promise<{ success: boolean; message: string }> {
  try {
    // IndexNow supports batch submission
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "canary-detect.com",
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return { success: true, message: `IndexNow ping successful: ${response.status}` };
    } else {
      const text = await response.text();
      return { success: false, message: `IndexNow ping failed: ${response.status} - ${text}` };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, message: `IndexNow error: ${message}` };
  }
}

async function pingBingIndexNow(urls: string[]): Promise<{ success: boolean; message: string }> {
  try {
    // Bing's IndexNow endpoint (alternative to api.indexnow.org)
    const response = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "canary-detect.com",
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return { success: true, message: `Bing IndexNow ping successful: ${response.status}` };
    } else {
      const text = await response.text();
      return { success: false, message: `Bing IndexNow ping failed: ${response.status} - ${text}` };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, message: `Bing IndexNow error: ${message}` };
  }
}

async function pingYandexIndexNow(urls: string[]): Promise<{ success: boolean; message: string }> {
  try {
    // Yandex's IndexNow endpoint
    const response = await fetch("https://yandex.com/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: "canary-detect.com",
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return { success: true, message: `Yandex IndexNow ping successful: ${response.status}` };
    } else {
      const text = await response.text();
      return { success: false, message: `Yandex IndexNow ping failed: ${response.status} - ${text}` };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, message: `Yandex IndexNow error: ${message}` };
  }
}

async function getRecentlyUpdatedUrls(): Promise<string[]> {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get blog posts updated in the last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    
    const { data: recentPosts, error } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("published", true)
      .gte("updated_at", oneDayAgo);

    if (error) {
      console.error("Error fetching recent posts:", error);
      return [];
    }

    const blogUrls = recentPosts?.map(post => `${BASE_URL}/blog/${post.slug}`) || [];
    return blogUrls;
  } catch (error) {
    console.error("Error in getRecentlyUpdatedUrls:", error);
    return [];
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting IndexNow ping job...");

    // Get recently updated blog URLs
    const recentUrls = await getRecentlyUpdatedUrls();
    const allUrls = [...URLS_TO_SUBMIT, ...recentUrls];
    const uniqueUrls = [...new Set(allUrls)];

    console.log(`Submitting ${uniqueUrls.length} URLs to search engines`);

    // Ping all search engines in parallel using IndexNow
    const [indexNowResult, bingResult, yandexResult] = await Promise.all([
      pingIndexNow(uniqueUrls),
      pingBingIndexNow(uniqueUrls),
      pingYandexIndexNow(uniqueUrls),
    ]);

    const results = {
      timestamp: new Date().toISOString(),
      urlsSubmitted: uniqueUrls.length,
      recentBlogUpdates: recentUrls.length,
      indexNow: indexNowResult,
      bing: bingResult,
      yandex: yandexResult,
    };

    console.log("Ping results:", JSON.stringify(results, null, 2));

    return new Response(JSON.stringify(results, null, 2), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("IndexNow ping error:", error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
