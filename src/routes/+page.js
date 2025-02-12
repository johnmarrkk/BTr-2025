import { supabase } from '$lib/supabase/client';

export async function load() {
    const { data, error } = await supabase.from('instruments').select('*');

    if (error) {
        console.error('Error fetching employees:', error.message);
        return { instruments: [] };
    }

    return { instruments: data };
}