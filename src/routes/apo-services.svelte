<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Modal from "./queue-number.svelte";
    import { supabase } from "$lib/supabase/client";

    let modalVisible = false;
    let queueNumber = 0;
    let service = "";
    let isPriority = false;
    let latestQueueNumber = "001"; // Default
    let newQueueNumber = "";
    let windowNum = 0;

    const dispatch = createEventDispatcher();

    // Fetch latest queue number from Supabase
    async function fetchLatestQueue() {
        const { data, error } = await supabase
            .from("queue")
            .select("queue_number")
            .order("queue_id", { ascending: false })
            .limit(1)
            .single();

        if (error) {
            console.error("Error fetching latest queue:", error);
        } else if (data) {
            latestQueueNumber = data.queue_number;
        }
    }

    // Reactive statement: Compute new queue number
    $: newQueueNumber = String(parseInt(latestQueueNumber) + 1).padStart(3, "0");

    // Insert new queue into Supabase
    async function addQueue() {
        await fetchLatestQueue(); // Ensure the latest queue number is up to date

        queueNumber++;
        modalVisible = true;

        const { error } = await supabase
            .from("queue")
            .insert([
                {
                    queue_number: newQueueNumber,
                    service: service, 
                    is_priority: isPriority, 
                    status: "waiting", // Default status
                    created_at: new Date().toISOString()
                }
            ]);

        if (error) {
            console.error("Error adding queue:", error);
        } else {
            latestQueueNumber = newQueueNumber; // Update after successful insertion
        }
    }

    function changeWindowNum(newNum) {
        if (typeof newNum === "number") {
            windowNum = newNum;
        }
    }

    function handleClickOutside(event) {
        if (!event.target.closest("#apo-modal")) {
            dispatch("close");
        }
    }

    let isModalOpen = false;
    function openFidelityModal() {
        isModalOpen = true;
    }
    function closeFidelityModal() {
        isModalOpen = false;
    }

    let isPriorityOpen = false;
    function openPriorityModal() {
        isPriorityOpen = true;
    }
    function closePriorityModal() {
        isPriorityOpen = false;
    }

    onMount(fetchLatestQueue);

    function setServiceValue(button) {
        service = button.getAttribute("data-service"); // Get the value from button's attribute
        alert("Selected Service: " + service);
    }

    function setPrioValue() {
        isPriority = true;
        alert("Priority: " + isPriority);
    }

    function setPrioValuetoFalse() {
        isPriority = false;
        alert("Priority: " + isPriority);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50"
    on:click={handleClickOutside}
>
    <div
        id="apo-modal"
        class="bg-white bg-opacity-90 rounded-lg drop-shadow-xl p-6 w-7xl h-[500px] border border-gray-300"
    >
        <h2 class="text-2xl font-bold mb-4">Albay Provincial Office</h2>
        <div class="flex flex-wrap justify-center">
            <button
                type="button"
                on:click={openFidelityModal}
                class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-100 h-40 cursor-pointer"
            >
                Fidelity Bond
            </button>
            <button
                type="button"
                on:click={() => {
                    openPriorityModal();
                    changeWindowNum(2);
                }}
                class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-100 h-40 cursor-pointer"
            >
                Confirmation and Certification of National Collections
            </button>
            <button
                type="button"
                on:click={() => {
                    openPriorityModal();
                    changeWindowNum(2);
                }}
                class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-100 h-40 cursor-pointer"
            >
                Opening of Bank Account
            </button>
            <button
                type="button"
                on:click={() => {
                    openPriorityModal();
                    changeWindowNum(6);
                }}
                class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-100 h-40 cursor-pointer"
            >
                Re-order of MDS Check
            </button>
            <button
                type="button"
                on:click={() => {
                    openPriorityModal();
                    changeWindowNum(6);
                }}
                class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-100 h-40 cursor-pointer"
            >
                General Concerns
            </button>
        </div>
    </div>
</div>

{#if isModalOpen}
    <div
        class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50"
    >
        <div class="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-auto">
            <h2 class="text-2xl font-bold mb-4">Fidelity Bond Information</h2>
            <div class="flex">
                <button
                    type="button"
                    on:click={(event) => {
                        openPriorityModal();
                        changeWindowNum(1);
                        setServiceValue(event.target); // Pass the clicked button to the function
                    }}
                    class="serviceButton text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-40 h-24 cursor-pointer"
                    data-service="Fidelity Bond (LGU)"
                >
                    LGU
                </button>
                <button
                    type="button"
                    on:click={() => {
                        openPriorityModal();
                        changeWindowNum(3);
                        setServiceValue(event.target);
                    }}
                    class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-40 h-24 cursor-pointer"
                    data-service="Fidelity Bond (NGA)"
                >
                    NGA
                </button>
                <button
                    type="button"
                    on:click={() => {
                        openPriorityModal();
                        changeWindowNum(4);
                    }}
                    class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-40 h-24 cursor-pointer"
                >
                    SK
                </button>
                <button
                    type="button"
                    on:click={() => {
                        openPriorityModal();
                        changeWindowNum(5);
                    }}
                    class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 w-40 h-24 cursor-pointer"
                >
                    GOCC
                </button>
            </div>
            <button
                on:click={closeFidelityModal}
                class="mt-4 text-white bg-red-600 hover:bg-red-700 font-bold rounded-lg py-2 px-4"
            >
                Close
            </button>
        </div>
    </div>
{/if}

{#if isPriorityOpen}
    <div
        class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50"
    >
        <div class="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-auto">
            <div class="flex">
                <button
                    type="button"
                    class="text-white bg-red-500 hover:bg-red-600 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 size-70 cursor-pointer"
                    on:click={(event) => {
                        addQueue(); 
                        setPrioValue();  
                      }}
                >
                    <img
                        src="https://ph-test-11.slatic.net/p/493d128b900a54ae49002aa2fb44f8ae.jpg"
                        alt="prio"
                    />
                </button>
                <button
                    type="button"
                    class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 size-70 cursor-pointer"
                    on:click={(event) => {
                        addQueue(); 
                        setPrioValuetoFalse();  
                      }}
                      >No</button
                >
            </div>
            <button
                on:click={closePriorityModal}
                class="mt-4 text-white bg-red-600 hover:bg-red-700 font-bold rounded-lg py-2 px-4"
            >
                Close
            </button>
        </div>
    </div>
{/if}

<Modal bind:isVisible={modalVisible} {queueNumber} {windowNum} />
