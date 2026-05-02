
-- Profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile select" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Brand context (single row per user)
CREATE TABLE public.brand_context (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE UNIQUE,
  company_name TEXT NOT NULL DEFAULT 'MedPharma Alliance International',
  description TEXT,
  audience TEXT,
  tone TEXT,
  keywords TEXT,
  services TEXT,
  competitors TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.brand_context ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own brand select" ON public.brand_context FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own brand insert" ON public.brand_context FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own brand update" ON public.brand_context FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "own brand delete" ON public.brand_context FOR DELETE USING (auth.uid() = user_id);

-- Content blocks
CREATE TABLE public.content_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  title TEXT NOT NULL,
  block_type TEXT NOT NULL, -- seo_blog, meta_tags, social_post, gbp_post, review_reply, gsc_fix, schema_markup
  platform TEXT, -- website, linkedin, facebook, instagram, tiktok, gbp, gsc
  brief TEXT,
  content TEXT,
  meta JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'draft', -- draft, in_review, approved, published
  scheduled_for TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own content select" ON public.content_blocks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own content insert" ON public.content_blocks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own content update" ON public.content_blocks FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "own content delete" ON public.content_blocks FOR DELETE USING (auth.uid() = user_id);

-- Action items
CREATE TABLE public.action_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT, -- seo, social, gbp, gsc, partnerships, app_growth
  priority TEXT NOT NULL DEFAULT 'medium', -- low, medium, high
  status TEXT NOT NULL DEFAULT 'todo', -- todo, in_progress, done, blocked
  assignee TEXT,
  due_date DATE,
  proof_link TEXT,
  proof_notes TEXT,
  content_block_id UUID REFERENCES public.content_blocks(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.action_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own action select" ON public.action_items FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own action insert" ON public.action_items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own action update" ON public.action_items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "own action delete" ON public.action_items FOR DELETE USING (auth.uid() = user_id);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER content_blocks_touch BEFORE UPDATE ON public.content_blocks
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER action_items_touch BEFORE UPDATE ON public.action_items
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER brand_context_touch BEFORE UPDATE ON public.brand_context
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
