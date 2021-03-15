<template lang="">
    <div>
        <div class="p-4">
            <div class="search">
                <i class="search-icon ri-search-line"></i>
                <input type="text" class="search-input w-full focus:outline-none" placeholder="Search">
            </div>
        </div>
        
        <div class="px-4">
            <div class="grid grid-cols-4 gap-4">
                <div class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="h3 mt-4">Adam</p>
                    <button class="mt-4 btn-border hover:bg-green-3 focus:outline-none">Invite</button>
                </div>
                <div class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="h3 mt-4">Adam</p>
                    <button class="mt-4 btn-border hover:bg-green-3 focus:outline-none">Send Request</button>
                </div>
            </div>
        </div>
        <div class="p-4 flex justify-center">
            <button class="btn-border hover:bg-green-3 focus:outline-none">View more</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>