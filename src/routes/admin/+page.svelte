<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
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
</nav>
<div
    class="flex flex-col-2 justify-center items-center h-auto gap-4 w-full m-5"
>
    <div class="bg-gray-200 h-[700px] w-1/2 rounded-2xl gap-4 p-4">
        <div class="grid grid-cols-3 w-full gap-3">
            <div class="h-[650px] rounded-lg  overflow-y-auto">
                <Table shadow class="!bg-white !text-black ">
                    <TableHead class="!bg-white text-gray-700">
                      <TableHeadCell class="!bg-yellow-400 !text-black text-right text-sm">Waiting</TableHeadCell>
                      <TableHeadCell class="!bg-yellow-400 !text-black text-right"></TableHeadCell>
                    </TableHead>
                    <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
                      <TableBodyRow class="!bg-white !text-black text-center text-sm">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                      <TableBodyRow class="!bg-white !text-black text-center">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                        <TableBodyCell class="!bg-white !text-black text-center">W1</TableBodyCell>
                      </TableBodyRow>
                    </TableBody>
                  </Table>
                  
            </div>

            <div class="h-[650px] rounded-lg  overflow-y-auto">
                <Table shadow class="!bg-white !text-black ">
                    <TableHead class="!bg-white text-gray-700">
                      <TableHeadCell class="!bg-green-500 !text-white text-center text-sm">WINDOW 1</TableHeadCell>
                    </TableHead>
                    <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
                      <TableBodyRow class="!bg-white !text-black text-center text-sm">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                      </TableBodyRow>
                      
                    </TableBody>
                  </Table>
                  
            </div>

            <div class="h-[650px] rounded-lg  overflow-y-auto">
                <Table shadow class="!bg-white !text-black ">
                    <TableHead class="!bg-white text-gray-700">
                      <TableHeadCell class="!bg-red-600 !text-white text-center text-sm ">Priority</TableHeadCell>
                    </TableHead>
                    <TableBody class="!bg-white divide-y max-h-60 overflow-y-auto">
                      <TableBodyRow class="!bg-white !text-black text-center text-sm">
                        <TableBodyCell class="!bg-white !text-black">01</TableBodyCell>
                      </TableBodyRow>
                      
                    </TableBody>
                  </Table>
                  
            </div>

        </div>
    </div>
    <div
        class="grid grid-rows-[400px, 200px] h-[500px] w-1/4 rounded-2xl mb-auto"
    >
        <div class="w-full">
            <div
                class="flex flex-col bg-white rounded-3xl items-center h-100 border w-full"
            >
                <h1
                    class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                >
                    NOW SERVING
                </h1>
                <div class="flex items-center text-[100px] font-bold h-80">
                    01
                </div>
                <div
                    class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                >
                    <h1 class="text-3xl font-bold">WINDOW 1</h1>
                    <h1 class="">Treasury Operations Officer</h1>
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
