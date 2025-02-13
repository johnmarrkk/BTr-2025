import { writable } from "svelte/store";

// Create a store for admin session
export const adminStore = writable(null);

// Function to load admin data from localStorage (useful for page reloads)
export function loadAdminSession() {
    const admin = localStorage.getItem("admin_session");
    if (admin) {
        adminStore.set(JSON.parse(admin));
    }
}

// Function to logout the admin
export function logoutAdmin() {
    localStorage.removeItem("admin_session");
    adminStore.set(null);
}
