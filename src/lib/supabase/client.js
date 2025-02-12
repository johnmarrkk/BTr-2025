import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://qkwiltuapxqpknbwwghe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrd2lsdHVhcHhxcGtuYnd3Z2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MDg4MDYsImV4cCI6MjA1NDM4NDgwNn0.xIFB9vFQE-R0dCaIldpCRuaZSlt-ETeG81NsftQy6SU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
