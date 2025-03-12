<script>
    import { writable } from "svelte/store";
    import { scale } from "svelte/transition";
    import { supabase } from "$lib/supabaseClient";

    let queueNumber = "";
    let prio = false;
    let service = "";
    
    let showModal = writable(false);
    let fidelityModal = writable(false);
    let queueModal = writable(false);
    let priorityModal = writable(false);

    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString("en-US", {
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
                created_at: new Date().toISOString(), // Use current timestamp
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

<nav class="bg-blue-600 w-full h-16 text-xl flex items-center text-white">
    <img
        class="h-12 m-2"
        src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/cropped-BTr-Original-Logo-1-1.png"
        alt=""
    />
    BTR Queuing System
</nav>

<div class="flex justify-center gap-4 items-center mt-80">
    <button
        on:click={() => showModal.set(true)}
        class="px-4 py-2 w-80 h-40 text-white text-2xl font-bold bg-blue-600 rounded-md cursor-pointer transition-transform transform hover:scale-105"
    >
        ALBAY PROVINCIAL OFFICE
    </button>
    <button
        class="px-4 py-2 w-80 h-40 text-white text-2xl font-bold bg-yellow-400 rounded-md cursor-pointer transition-transform transform hover:scale-105"
    >
        REGIONAL OFFICE
    </button>

    <div></div>
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
            <div class="grid grid-cols-3 p-4 items-center">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-64 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => fidelityModal.set(true)}
                    on:click={() => showModal.set(false)}>Fidelity Bond</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-64 h-20 font-medium rounded-lg text-m p-2 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("CCNC")}
                    >Confirmation and Certification of National Collections</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-64 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Bank_Account")}>Opening of Bank Account</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-64 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("MDS_check")}
                    >Re-order of MDS Check</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-64 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Gen_Concern")}>General Concerns</button
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
            <div class="flex p-4 items-center">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-40 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fedelity_LGU")}>LGU</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-40 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fedelity_NGA")}>NGA</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-40 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fedelity_SK")}>SK</button
                >
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 w-40 h-20 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
                    on:click={() => priorityModal.set(true)}
                    on:click={() => fidelityModal.set(false)}
                    on:click={() => setService("Fedelity_GOCC")}
                    >GOCC</button
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
            <div class="flex p-4 items-center">
                <button
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-700 w-50 h-40 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
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
                    class="text-white bg-blue-700 hover:bg-blue-800 w-50 h-40 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer"
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
            class="bg-white p-6 rounded-lg shadow-lg w-150 h-140 border border-gray-300"
            transition:scale={{ duration: 200 }}
            on:click|stopPropagation
        >
            <div class="flex justify-center">
                <h2 class="text-3xl font-bold">ALBAY PROVINCIAL OFFICE</h2>
            </div>
            <div class="flex justify-center">
                <h2 class="text-xl font-bold">Queue Number</h2>
            </div>
            <div
                class="flex justify-center p-4 h-80 m-5 rounded-lg border text-9xl font-bold border-dashed items-center"
            >
                <h1>{queueNumber}</h1>
            </div>
            <div id="dateTimeDisplay" class="text-xs ml-5 font-semibold"></div>
            <div
                class="flex justify-center m-5 rounded-lg items-center bg-blue-500"
            >
                <button
                    on:click={() => queueModal.set(false)}
                    class="px-4 py-2 bg-blue-400 w-full text-white rounded-md"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
{/if}
