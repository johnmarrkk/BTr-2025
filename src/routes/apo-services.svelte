<script>
    import { createEventDispatcher } from "svelte";

    import Modal from "./queue-number.svelte";
    let modalVisible = false;
    let queueNumber = 0;

    let windowNum = 0;

    function addQueue() {
        queueNumber++; // Increment the queue number each time the modal is triggered
        modalVisible = true;
    }

    function changeWindowNum(newNum) {
        if (typeof newNum === "number") {
            windowNum = newNum;
        }
    }

    const dispatch = createEventDispatcher();

    // Close modal when clicking outside the modal box
    function handleClickOutside(event) {
        if (event.target.closest("#apo-modal") === null) {
            dispatch("close");
        }
    }

    function ClickOutsideFidelityModal(event) {
        if (event.target.closest("#fidelity-modal") === null) {
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
</script>

<!-- Clickable background wrapper -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50"
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
                class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-40 cursor-pointer"
                >Fidelity Bond</button
            >
            <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-40 cursor-pointer"
                on:click={() => { openPriorityModal(); changeWindowNum(2); }}
                >Confirmation and Certification of National Collections</button
            >
            <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-40 cursor-pointer"
                on:click={() => { openPriorityModal(); changeWindowNum(2); }}>Opening of Bank Account</button
            >
            <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-40 cursor-pointer"
                on:click={() => { openPriorityModal(); changeWindowNum(6); }}>Re-order of MDS Check</button
            >
            <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-40 cursor-pointer"
                on:click={() => { openPriorityModal(); changeWindowNum(6); }}>General Concerns</button
            >
        </div>
    </div>
</div>

{#if isModalOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div>
        <div
            class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50"
        >
            <div class="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-auto">
                <h2 class="text-2xl font-bold mb-4">
                    Fidelity Bond Information
                </h2>
                <div class="flex">
                    <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-40 h-24 cursor-pointer"
                        on:click={() => { openPriorityModal(); changeWindowNum(1); }}>LGU</button
                    >
                    <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-40 h-24 cursor-pointer"
                        on:click={() => { openPriorityModal(); changeWindowNum(3); }}>NGA</button
                    >
                    <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-40 h-24 cursor-pointer"
                        on:click={() => { openPriorityModal(); changeWindowNum(4); }}>SK</button
                    >
                    <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-40 h-24 cursor-pointer"
                        on:click={() => { openPriorityModal(); changeWindowNum(5); }}>GOCC</button
                    >
                </div>
                <button
                    on:click={closeFidelityModal}
                    class="mt-4 text-white bg-red-600 hover:bg-red-700 font-bold rounded-lg py-2 px-4"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
{/if}

{#if isPriorityOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div>
        <div
            class="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50"
        >
            <div class="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-auto">
                <div class="flex">
                    <button
                        type="button"
                        class="text-white bg-red-500 hover:bg-red-600 hover:border transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 size-70 cursor-pointer"
                        on:click={addQueue}
                    >
                        <img
                            src="https://ph-test-11.slatic.net/p/493d128b900a54ae49002aa2fb44f8ae.jpg"
                            alt="prio"
                        /></button
                    >
                    <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 size-70 cursor-pointer"
                        on:click={addQueue}>No</button
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
    </div>
{/if}

<Modal bind:isVisible={modalVisible} {queueNumber} {windowNum}/>
