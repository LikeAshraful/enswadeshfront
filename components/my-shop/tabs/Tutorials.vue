<template lang="">
    <div>
        <p class="title">How to ... ? (5)</p>
        <div class="p-4 bg-white mb-4">
            <div class="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
                <div v-for="(video, i) in videos" :key="i" class="md:border-2 border border-green-4">
                    <div class="relative pb-2/3">
                        <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                        <small class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline">10:00</small>
                    </div>
                    <div class="p-2">
                        <p class="font-bold lg:text-lg">Video name goes here</p>
                    </div>
                </div>
            </div>
            <!-- When no videos yet -->
            <!-- <div class="py-10 text-center">
                <p class="h2">You have no videos</p>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videos: [
                '',
                '',
                '',
                '',
                '',
            ],
        }
    }
}
</script>