<script>
    import { onMount } from "svelte";

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
</script>

<div class="flex flex-col h-screen bg-white">
    <div class="grid grid-cols-2 h-auto">
        <div class="border m-2 rounded-2xl flex items-center bg-black">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video width="100%" height="auto" autoplay muted loop controls>
                <source src="/Made to Be More in Senior High.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="flex-10 bg-white p-4 m-2 rounded-3xl drop-shadow-lg">
            <div
                class="grid grid-cols-3 place-content-stretch gap-4 items-center h-full"
            >
                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        01
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 1</h1>
                        <h1 class="">Treasury Operating Officer III</h1>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        02
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 2</h1>
                        <h1 class="">Treasury Operating Officer I</h1>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        03
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 3</h1>
                        <h1 class="">Treasury Operating Officer IV</h1>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        04
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 4</h1>
                        <h1 class="">Treasury Operating Officer IV</h1>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        --
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 5</h1>
                        <h1 class="">Treasury Operating Officer IV</h1>
                    </div>
                </div>

                <div
                    class="flex flex-col bg-white rounded-3xl items-center h-80 border"
                >
                    <h1
                        class="bg-blue-800 text-white h-20 w-full flex flex-col justify-center items-center text-2xl rounded-t-3xl font-bold"
                    >
                        NOW SERVING
                    </h1>
                    <div class="flex items-center text-[100px] font-bold h-60">
                        06
                    </div>
                    <div
                        class="bg-blue-800 text-white h-32 w-full flex flex-col justify-center items-center rounded-b-2xl"
                    >
                        <h1 class="text-3xl font-bold">COUNTER 6</h1>
                        <h1 class="">Treasury Operating Officer IV</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center bg-blue-800 p-4 m-2 rounded-3xl h-40">
        <div>
            <img
                class="h-32"
                src="https://www.treasury.gov.ph/wp-content/uploads/2016/08/BTr-Original-Logo-e1472045709118.png"
                alt="logo"
            />
        </div>
        <div>
            <h1 class="text-white text-5xl">
                Bureau of the Treasury Albay Provincial Office
            </h1>
        </div>

        <div class="ml-auto w-80 text-white">
            <p class="text-lg font-semibold">Philippine Standard Time</p>
            <p class="text-5xl font-bold">{time}</p>
            <p class="text-2xl">{date}</p>
        </div>
    </div>
</div>
