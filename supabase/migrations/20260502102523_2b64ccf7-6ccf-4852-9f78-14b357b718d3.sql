-- Missions: one per target Google search the user wants to win
CREATE TABLE public.missions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  keyword TEXT NOT NULL,
  goal TEXT,
  priority TEXT NOT NULL DEFAULT 'medium',
  status TEXT NOT NULL DEFAULT 'active',
  current_rank INTEGER,
  target_rank INTEGER DEFAULT 1,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.missions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own missions select" ON public.missions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own missions insert" ON public.missions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own missions update" ON public.missions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "own missions delete" ON public.missions FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER missions_updated_at BEFORE UPDATE ON public.missions
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Mission steps: ordered playbook items
CREATE TABLE public.mission_steps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES public.missions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  kind TEXT NOT NULL DEFAULT 'copy_paste',
  title TEXT NOT NULL,
  instructions TEXT,
  body TEXT,
  where_to_paste TEXT,
  owner TEXT NOT NULL DEFAULT 'me',
  status TEXT NOT NULL DEFAULT 'todo',
  proof_link TEXT,
  proof_notes TEXT,
  estimated_minutes INTEGER DEFAULT 5,
  done_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.mission_steps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own steps select" ON public.mission_steps FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own steps insert" ON public.mission_steps FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own steps update" ON public.mission_steps FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "own steps delete" ON public.mission_steps FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER mission_steps_updated_at BEFORE UPDATE ON public.mission_steps
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE INDEX mission_steps_mission_idx ON public.mission_steps(mission_id, position);