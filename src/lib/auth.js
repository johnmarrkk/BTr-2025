import { supabase } from '$lib/supabase/client';
import bcrypt from 'bcryptjs';

/**
 * Hash a plain text password before storing it in the database.
 * @param {string} password
 * @returns {Promise<string>}
 */
export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Verify if the entered password matches the stored hash.
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

/**
 * Fetch admin details by Employee ID.
 * @param {string} employee_id
 * @returns {Promise<object | null>}
 */
export async function getAdmin(employee_id) {
    const { data, error } = await supabase
        .from('admins')
        .select('employee_id, password_hash, employee_name, window_id')
        .eq('employee_id', employee_id)
        .single();

    return error ? null : data;
}
