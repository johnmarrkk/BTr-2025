<script>
    import { writable } from "svelte/store";
    import { scale } from "svelte/transition";
    import { supabase } from "$lib/supabaseClient";
    import { onMount } from "svelte";

    let queueNumber = 0;
    let prio = writable(false);
    let service = writable("");
    let showModal = writable(false);
    let fidelityModal = writable(false);
    let queueModal = writable(false);
    let priorityModal = writable(false);

    let loading = true;

    onMount(() => {
        loading = true;
        setTimeout(() => {
            queueNumber = ""; // Replace with your actual queue logic
            loading = false;
        }, 2000); // 2 seconds delay
    });

    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString("en-PH", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        let h = now.getHours() % 12 || 12,
            m = now.getMinutes().toString().padStart(2, "0"),
            ampm = now.getHours() >= 12 ? "PM" : "AM";

        document.getElementById("dateTimeDisplay").textContent =
            `${date} - ${h}:${m} ${ampm}`;
    }

    function setPriority(value) {
        prio = value;
    }

    function setService(value) {
        service = value;
    }

    async function createQueue() {
        // Fetch the latest queue number
        const { data: latestQueue } = await supabase
            .from("queue")
            .select("queue_number")
            .order("queue_number", { ascending: false })
            .limit(1)
            .single();

        // Determine the next queue number
        const nextQueueNumber = latestQueue
            ? String(Number(latestQueue.queue_number) + 1).padStart(2, "0")
            : "01";

        // Insert the new queue number into the database
        const { error } = await supabase.from("queue").insert([
            {
                queue_number: nextQueueNumber,
                is_priority: prio, // Set priority status
                status: "pending", // Set status
                service: service, // Set service type
                created_at: new Date(
                    new Date().getTime() + 8 * 60 * 60 * 1000,
                ).toISOString(), // Use current timestamp
            },
        ]);

        if (error) {
            console.error("Error creating queue:", error);
            return;
        }

        // Update the displayed queue number
        queueNumber = nextQueueNumber;
    }
</script>

<div
    style="width: 100%; z-index: -1; background-image: url('/BTr-bg.png'); background-size: cover;"
    class="h-screen"
>
    <nav
        class="w-full text-2xl flex flex-col items-center justify-center pt-44"
    >
        <div class="flex items-center">
            <img
                class="h-28 m-2"
                src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/cropped-BTr-Original-Logo-1-1.png"
                alt=""
            />
            <h1 class="font-bold text-7xl text-white">BTr</h1>
        </div>

        <h1 class="font-bold ml-4 text-4xl text-white">QUEUING SYSTEM</h1>
    </nav>
    <div class="flex justify-center gap-6 items-center mt-25">
        <button
            on:click={() => showModal.set(true)}
            class="px-4 py-2 w-80 h-72 text-white text-2xl font-bold bg-blue-600 rounded-xl cursor-pointer transition-transform transform hover:scale-105"
        >
            ALBAY PROVINCIAL OFFICE
        </button>
        <button
            class="px-4 py-2 w-80 h-72 text-white text-2xl font-bold bg-yellow-400 rounded-xl cursor-pointer transition-transform transform hover:scale-105"
        >
            REGIONAL OFFICE
        </button>

        <div></div>
    </div>
</div>
<!-- Open Modal Button -->

{#if $showModal}
    <!-- Modal Wrapper (Closes when clicking outside) -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 flex items-center justify-center z-50"
        on:click={() => showModal.set(false)}
    >
        <!-- Modal Box -->
        <div
            class="bg-white p-6 rounded-lg shadow-lg w-auto border border-gray-300"
            transition:scale={{ duration: 200 }}
            on:click|stopPropagation
        >
            <h2 class="text-xl font-bold">Albay Provincial Office</h2>
            <div class="grid grid-cols-3 p-2 items-center">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-40 font-bold rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => fidelityModal.set(true)}
                    on:click={() => showModal.set(false)}>Fidelity Bond</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-40 font-bold rounded-lg text-2xl p-2 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => showModal.set(false)}
                    on:click={() => setService("Confirmation and Certification of National Collections")}
                    >Confirmation and Certification of National Collections</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-40 font-bold rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => showModal.set(false)}
                    on:click={() => setService("Bank Account")}
                    >Opening of Bank Account</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-40 font-bold rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => showModal.set(false)}
                    on:click={() => setService("MDS Check")}
                    >Re-order of MDS Check</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-40 font-bold rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => showModal.set(false)}
                    on:click={() => setService("General Concern")}
                    >General Concerns</button
                >
            </div>
        </div>
    </div>
{/if}

{#if $fidelityModal}
    <!-- Modal Wrapper (Closes when clicking outside) -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 flex items-center justify-center z-50"
        on:click={() => fidelityModal.set(false)}
    >
        <!-- Modal Box -->
        <div
            class="bg-white p-6 rounded-lg shadow-lg w-auto border border-gray-300"
            transition:scale={{ duration: 200 }}
            on:click|stopPropagation
        >
            <h2 class="text-xl font-bold">Fidelity Bond</h2>
            <div class="flex p-2 items-center">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-48 h-40 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fidelity LGU")}>LGU</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-48 h-40 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fidelity NGA")}>NGA</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-48 h-40 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fidelity SK")}>SK</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-48 h-40 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fidelity GOCC")}>GOCC</button
                >
            </div>
        </div>
    </div>
{/if}

{#if $priorityModal}
    <!-- Modal Wrapper (Closes when clicking outside) -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 flex items-center justify-center z-50"
        on:click={() => priorityModal.set(false)}
    >
        <!-- Modal Box -->
        <div
            class="bg-white p-6 rounded-lg shadow-lg w-auto border border-gray-300"
            transition:scale={{ duration: 200 }}
            on:click|stopPropagation
        >
            <div class="flex items-center">
                <button
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-700 w-80 h-60 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => queueModal.set(true)}
                    on:click={() => priorityModal.set(false)}
                    on:click={updateDateTime}
                    on:click={() => setPriority(true)}
                    on:click={createQueue}
                >
                    <img
                        src="https://ph-test-11.slatic.net/p/493d128b900a54ae49002aa2fb44f8ae.jpg"
                        alt="prio"
                    /></button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-80 h-60 font-medium rounded-lg text-7xl px-2.5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => queueModal.set(true)}
                    on:click={() => priorityModal.set(false)}
                    on:click={updateDateTime}
                    on:click={() => setPriority(false)}
                    on:click={createQueue}
                >
                    NO</button
                >
            </div>
        </div>
    </div>
{/if}

{#if $queueModal}
    <!-- Modal Wrapper with Blurred Background -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
        on:click={() => queueModal.set(false)}
    >
        <!-- Modal Box -->
        <div
            class="bg-white p-6 rounded-lg shadow-lg w-150 h-auto border border-gray-300 print:border-0 print:shadow-none"
            transition:scale={{ duration: 200 }}
            on:click|stopPropagation
        >
            <div class="flex justify-center">
                <h2 class="text-3xl font-bold">ALBAY PROVINCIAL OFFICE</h2>
            </div>
            <div class="flex justify-center">
                <h2 class="text-xl font-bold">Queue Number</h2>
            </div>
            <div class="flex justify-center">
                {#if prio}
                 <h1 class="text-red-500 text-6xl font-bold">PRIORITY</h1>
                {/if}
            </div>
            <div
                class="flex justify-center p-4 h-80 m-5 rounded-lg border text-9xl font-bold border-dashed items-center"
            >
                {#if loading}
                    <!-- Tailwind Loading Spinner -->
                    <div
                        class="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
                    ></div>
                {:else}
                    <!-- Queue Number Display -->
                    <h1 class="text-9xl font-bold font-sans">{queueNumber}</h1>
                {/if}
            </div>
            <div class="flex justify-center">
                <h1 class="flex justify-center items-center font-bold text-2xl mr-5 ml-5 text-center">{service}</h1>
            </div>
            <div id="dateTimeDisplay" class="text-m ml-5 font-semibold"></div>
            <div
                class="flex justify-center m-5 rounded-lg items-center bg-blue-500"
            >
                <button
                    on:click={() => queueModal.set(false)}
                    class="px-4 py-2 bg-blue-400 w-full text-white rounded-md print:hidden"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
{/if}
