import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwlgabusfdiugsydwtcz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bGdhYnVzZmRpdWdzeWR3dGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMzY0MDIsImV4cCI6MjA1NDkxMjQwMn0.-J2gqrRLo3WMEAaCmiCsdIYVYthBh-Zb3qZ9DTzt4qo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
