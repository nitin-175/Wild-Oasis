import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ibtryzoaophocyxwberi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidHJ5em9hb3Bob2N5eHdiZXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDUyNDQsImV4cCI6MjA3NjUyMTI0NH0.618oqVSZpvOKZFJza5ElcmNPfYNLV5Je07GcmKGQAFw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
