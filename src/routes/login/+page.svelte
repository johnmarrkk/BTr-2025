<script>
    import { goto } from '$app/navigation';

    function redirectToDashboard() {
        goto('/admin'); // Change '/dashboard' to your target route
    }
</script>

<div
    class="mx-auto mt-40 h-100 p-16 w-150 flex-auto justify-center items-center bg-white border-2 border-gray-200 rounded-2xl drop-shadow-2xl"
>
    <div class="flex justify-center items-center mx-auto text-center ">
        <img 
        class="h-16 m-3"
        src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/BTr-Original-Logo-e1472045709118.png"
        alt="logo"
    />
        <h1 class="text-4xl font-bold">BTr Queuing System</h1>
    </div>
    <div class="mt-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">ID Number</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Employee ID number" required />
        <button type="button" on:click={redirectToDashboard}  class="text-white bg-blue-700 mt-5 p-4 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm">Login</button>
    </div>

</div>
