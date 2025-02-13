import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://vwlgabusfdiugsydwtcz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bGdhYnVzZmRpdWdzeWR3dGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMzY0MDIsImV4cCI6MjA1NDkxMjQwMn0.-J2gqrRLo3WMEAaCmiCsdIYVYthBh-Zb3qZ9DTzt4qo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
