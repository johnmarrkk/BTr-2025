
<script>
    import { adminStore } from "$lib/stores/admin";

    import {
        Alert,
        Button,
        Label,
        Input,
        ButtonGroup,
        InputAddon,
        ToolbarButton,
        Helper,
    } from "flowbite-svelte";
    import {
        EyeOutline,
        EyeSlashOutline,
        InfoCircleSolid,
    } from "flowbite-svelte-icons";
    import { fly } from "svelte/transition";
    let show = false;
    let show1 = false;
    import { supabase } from "$lib/supabaseClient";
    import { writable } from "svelte/store";
    import bcrypt from "bcryptjs"; // Import bcrypt

    let employee_id = "";
    let password = "";
    let errorMessage = writable(""); // Store for error messages

    // Handle login
    async function handleLogin() {
    errorMessage.set(""); // Reset error message

    // Fetch the admin by employee_id
    const { data: admin, error } = await supabase
        .from("admins")
        .select("employee_id, employee_name, password_hash, role, window_name")
        .eq("employee_id", employee_id)
        .single();

    if (error || !admin) {
        errorMessage.set("Invalid Employee ID.");
        return;
    }

    // Compare hashed password with input password
    const isMatch = await bcrypt.compare(password, admin.password_hash);

    if (!isMatch) {
        errorMessage.set("Invalid Password.");
        return;
    }

    // Store admin session in localStorage
    localStorage.setItem("admin_session", JSON.stringify(admin));
    
    // Update the Svelte store
    adminStore.set(admin);

    // Redirect to the admin dashboard
    window.location.href = "/admin";
}
</script>

<div class="flex justify-center items-center mt-60 ">
    <div class="border-1 p-5 rounded-2xl">
        <h1 class="text-3xl m-2 flex items-center font-bold">
            <img
                class="h-16 m-3"
                src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/BTr-Original-Logo-e1472045709118.png"
                alt="logo"
            />
            BTr Queuing System
        </h1>

        {#if $errorMessage}
            <Alert color="red" dismissable class="!bg-red-100 mb-1">
                <InfoCircleSolid slot="icon" class="w-5 h-5" />
                {$errorMessage}
            </Alert>
        {/if}
        <form on:submit|preventDefault={handleLogin}>
            <Label class="space-y-2 !text-black mb-2">
                <span>Employee ID</span>
                <Input
                    class="!bg-white !text-black w-full"
                    type="text"
                    id="employee_id"
                    bind:value={employee_id}
                    required
                    placeholder="Enter employee ID"
                    size="md"
                />
            </Label>

            <div class="w-100 !text-black">
                <Label for="show-password" class=" !text-black">Password</Label>
                <Input
                    class="w-100 !bg-white !text-black"
                    id="password"
                    type={show ? "text" : "password"}
                    bind:value={password}
                    required
                    placeholder="Enter Password"
                    size="md"
                >
                    <button
                    type="button"
                        slot="right"
                        on:click={() => (show = !show)}
                    >
                        {#if show}
                            <EyeOutline class="w-6 h-6" />  
                        {:else}
                            <EyeSlashOutline class="w-6 h-6" />
                        {/if}
                    </button>
                </Input>
            </div>

            <Button type="submit" color="blue" class="w-100 mt-5 text-md"
                >Login</Button
            >
        </form>
    </div>
</div>