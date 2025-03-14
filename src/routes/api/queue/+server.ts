import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function POST({ request }) {
    const { service, is_priority } = await request.json();

    // Fetch the latest queue number
    const { data: latestQueue, error: fetchError } = await supabase
        .from('queue')
        .select('queue_number')
        .order('queue_number', { ascending: false })
        .limit(1)
        .single();

    if (fetchError) {
        return json({ error: 'Failed to fetch latest queue number' }, { status: 500 });
    }

    // Determine the next queue number
    const nextQueueNumber = latestQueue
        ? String(Number(latestQueue.queue_number) + 1).padStart(2, '0')
        : '01';

    // Insert new queue entry
    const { error: insertError } = await supabase.from('queue').insert([
        {
            queue_number: nextQueueNumber,
            is_priority,
            status: 'pending',
            service,
            created_at: new Date().toISOString()
        }
    ]);

    if (insertError) {
        return json({ error: 'Failed to create queue' }, { status: 500 });
    }

    return json({ queue_number: nextQueueNumber });
}
