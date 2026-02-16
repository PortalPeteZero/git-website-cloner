
-- Create table to cache Google reviews
CREATE TABLE public.google_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  google_review_id TEXT UNIQUE,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT,
  relative_time_description TEXT,
  review_time BIGINT,
  profile_photo_url TEXT,
  language TEXT DEFAULT 'en',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;

-- Public read access (reviews are public content)
CREATE POLICY "Anyone can read reviews"
ON public.google_reviews
FOR SELECT
USING (true);

-- Only admins can manage reviews
CREATE POLICY "Admins can manage reviews"
ON public.google_reviews
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Table to track last sync time
CREATE TABLE public.review_sync_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reviews_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'success'
);

ALTER TABLE public.review_sync_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read sync log"
ON public.review_sync_log
FOR SELECT
USING (true);

CREATE POLICY "Service role manages sync log"
ON public.review_sync_log
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_google_reviews_updated_at
BEFORE UPDATE ON public.google_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
