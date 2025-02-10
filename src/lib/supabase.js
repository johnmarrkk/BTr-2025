import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qkwiltuapxqpknbwwghe.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrd2lsdHVhcHhxcGtuYnd3Z2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MDg4MDYsImV4cCI6MjA1NDM4NDgwNn0.xIFB9vFQE-R0dCaIldpCRuaZSlt-ETeG81NsftQy6SU'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
