<script>
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient.js";
  import { adminStore, loadAdminSession } from "$lib/stores/admin";
  import {
    ArrowLeftToBracketOutline,
    ProfileCardOutline,
  } from "flowbite-svelte-icons";

  let time = "";
  let date = "";

  function updateDateTime() {
    const now = new Date();

    // Get time in 12-hour format with AM/PM
    time = now.toLocaleTimeString("en-PH", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Get full date (e.g., Monday, February 3, 2025)
    date = now.toLocaleDateString("en-PH", {
      timeZone: "Asia/Manila",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  onMount(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  });

  let adminData;

  export let data;
  let numberqueue = data?.numberqueue || [];

  // Ensure the array updates in the UI
  $: numberqueue = [...numberqueue];

  async function fetchNumberQueue() {
    const { data, error } = await supabase.from("numberqueue").select("*");
    if (error) console.error("Error fetching numberqueue:", error);
    numberqueue = data || [];
  }

  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";

  onMount(() => {
    loadAdminSession(); // Load admin session on page reload
  });

  $: if ($adminStore) {
    adminData = $adminStore;
  }

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
</script>

<nav
  class="h-20 w-full bg-blue-800 flex items-center border-b-4 border-b-yellow-300"
>
  <img
    class="h-16 m-3"
    src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/BTr-Original-Logo-e1472045709118.png"
    alt="logo"
  />
  <h1 class="text-white text-3xl">BTr Queuing System APO</h1>
  <div class="ml-auto flex items-center">
    <div class="ml-auto w-auto text-white text-xl">
      <p class="text-sm">{date}</p>
      <p class="text-xl font-bold">{time}</p>
    </div>
    <button
      on:click={logout}
      class="flex ml-auto mr-2 my-4 text-white items-center hover:bg-gray-600 p-2 rounded-lg"
      >
      <ArrowLeftToBracketOutline />
    </button>
  </div>
</nav>
<div
  class="flex flex-col-2 justify-center items-center h-auto gap-4 w-full m-5"
>
  <div class="bg-gray-200 h-[700px] w-1/2 rounded-2xl gap-4 p-4">
    <div class="grid grid-cols-3 w-full gap-3">
      <div class="h-[650px] rounded-lg overflow-y-auto scrollbar-hide">
        <Table shadow class="!bg-white !text-black ">
          <TableHead class="!bg-white text-gray-700">
            <TableHeadCell
              class="!bg-yellow-400 !text-white text-right text-sm w-full"
              >Waiting</TableHeadCell
            >
            <TableHeadCell class="!bg-yellow-400 !text-black text-right"
            ></TableHeadCell>
          </TableHead>
          <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
            <TableBodyRow class="!bg-white !text-black text-center text-sm">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
              <TableBodyCell class="!bg-white !text-black text-center"
                >W1</TableBodyCell
              >
            </TableBodyRow>
            <TableBodyRow class="!bg-white !text-black text-center">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
              <TableBodyCell class="!bg-white !text-black text-center"
                >W1</TableBodyCell
              >
            </TableBodyRow>
            <TableBodyRow class="!bg-white !text-black text-center">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
              <TableBodyCell class="!bg-white !text-black text-center"
                >W1</TableBodyCell
              >
            </TableBodyRow>
            <TableBodyRow class="!bg-white !text-black text-center">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
              <TableBodyCell class="!bg-white !text-black text-center"
                >W1</TableBodyCell
              >
            </TableBodyRow>
            <TableBodyRow class="!bg-white !text-black text-center">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
              <TableBodyCell class="!bg-white !text-black text-center"
                >W1</TableBodyCell
              >
            </TableBodyRow>
          </TableBody>
        </Table>
      </div>

      <div class="h-[650px] rounded-lg overflow-y-auto">
        <Table shadow class="!bg-white !text-black ">
          <TableHead class="!bg-white text-gray-700">
            {#if adminData}
              <TableHeadCell
                class="!bg-green-500 !text-white text-center text-sm"
                >{adminData.window_name}</TableHeadCell
              >
            {/if}
          </TableHead>
          <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
            <TableBodyRow class="!bg-white !text-black text-center text-sm">
              <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </div>

      <div class="h-[650px] rounded-lg overflow-y-auto">
        <Table shadow class="!bg-white !text-black">
          <TableHead class="!bg-white text-gray-700">
            <TableHeadCell class="!bg-red-600 !text-white text-center text-sm">
              Priority
            </TableHeadCell>
          </TableHead>
          <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
            {#each numberqueue as numqueue (numqueue.id)}
              <TableBodyRow class="!bg-white !text-black text-center text-sm">
                <TableBodyCell class="!bg-white !text-black"
                  >{numqueue.number}</TableBodyCell
                >
              </TableBodyRow>
            {/each}
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
  <div
    class="grid grid-rows-[400px, 200px] h-[500px] w-1/4 rounded-2xl mb-auto"
  >
    <div class="w-full h-auto">
      <div class="p-3 m-2 rounded-2xl border">
        {#if adminData}
          <p class="text-2xl mt-2 flex items-center">
            <ProfileCardOutline class="m-1" /><strong
              >{adminData.employee_name}</strong
            >
          </p>
          <p class="text-lg"><strong>{adminData.role}</strong></p>
          <p class="text-lg"><strong>{adminData.window_name} </strong></p>
          <p class="text-lg"><strong>{adminData.service}</strong></p>
        {/if}
      </div>
    </div>
    <div class="w-full">
      <div
        class="flex flex-col bg-white rounded-3xl items-center h-100 border w-full"
      >
        <h1
          class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
        >
          SERVING
        </h1>
        <div class="flex items-center text-[100px] font-bold h-80">01</div>
        <div
          class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
        >
          {#if adminData}
            <h1 class="text-3xl font-bold uppercase">
              {adminData.window_name}
            </h1>
            <h1 class="">{adminData.role}</h1>
            <h1 class="">{adminData.service}???s</h1>
          {/if}
        </div>
      </div>
    </div>
    <div class="h-auto mt-5">
      <button
        type="button"
        class="text-white flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none w-full font-medium rounded-lg text-xl p-4 text-center me-2 mb-2 cursor-pointer"
        >Next
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
