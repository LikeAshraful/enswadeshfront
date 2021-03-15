<template>
    <div>
        <div class="p-4">
            <div class="search">
                <i class="search-icon ri-search-line"></i>
                <input type="text" class="search-input w-full focus:outline-none" placeholder="Search">
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4 px-4">
            <div v-for="(item, index) in items" :key="index">
                <div class="relative">
                    <img class="h-16 w-full" src="~/assets/img/banner_green.png" alt="Image"/>
                    <p class="absolute top-0 mt-4 w-full text-center font-bold text-white text-xl mb-5" >101</p>
                    <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image" />
                    <p class="w-full text-center font-bold">Shop name gose hear</p>
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
            items: [
                '',
                '',
                '',
                '',
                '',
            ]
        }
    }
}
</script>