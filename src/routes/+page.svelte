<script>
    import Modal from "./apo-services.svelte";
    let showModal = false;
</script>

<nav class="h-24 p-2 w-full bg-blue-800 flex items-center">
    <div class="">
        <img
            class="h-20"
            src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/BTr-Original-Logo-e1472045709118.png"
            alt="logo"
        />
    </div>
    <div>
        <h1 class="text-white text-3xl p-3 font-bold">
            BUREAU OF THE TREASURY
        </h1>
    </div>
</nav>

<div class="w-full h-[800px]">
    <div class="w-full flex justify-center gap-4 mt-24">
        <button
            type="button"
            id="open-modal"
            class="text-white bg-blue-600 hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 h-80 cursor-pointer"
            on:click={() => (showModal = true)}>Albay Provincial Office</button
        >
        <button
            type="button"
            class="text-white bg-yellow-400 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg font-bold rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2 w-100 cursor-pointer"
            >Regional Office</button
        >
    </div>

    {#if showModal}
        <Modal on:close={() => (showModal = false)} />
    {/if}
</div>
