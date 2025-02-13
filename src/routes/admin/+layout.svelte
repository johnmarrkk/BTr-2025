<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        // Check if admin session exists
        const session = localStorage.getItem("admin_session");

        if (!session) {
            goto("/login"); // Redirect to login if no session
        }
    });
</script>

<slot />
