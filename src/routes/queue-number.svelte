<script>
    export let isVisible = false;
    export let queueNumber = 1;
    export let windowNum = 0;

    function hideModal() {
        isVisible = false;
    }
</script>

{#if isVisible}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 drop-shadow-lg bg-opacity-10 flex items-center justify-center z-50"
        on:click={hideModal}
    >
        <div
            class="bg-white p-6 rounded-lg shadow-lg text-center h-[600px] flex flex-col justify-center items-center border w-[700px]"
            on:click|stopPropagation
        >
            <h2 class="text-4xl font-bold mt-20">Albay Provincial Office</h2>
            <h2 class="text-xl font-bold mt-2">Queue Number</h2>

            <div class="flex justify-center m-5">
                <!-- Format the queue number as "01", "02", "03"... -->
                <p
                    class="text-9xl border font-bold text-blue-600 mt-2 p-4 border-black border-dashed rounded-2xl"
                >
                    {String(queueNumber).padStart(3, "0")}
                </p>
            </div>

            <h2 class="text-xl font-bold mb-4">
                Please wait for your number to be shown on screen
            </h2>

            <div>
                <h1 class="text-6xl font-bold text-blue-600">WINDOW <span>{String(windowNum)}</span></h1>
            </div>

            <button
                class="mt-auto w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
                on:click={hideModal}
                
            >
                Close
            </button>
        </div>
    </div>
{/if}
