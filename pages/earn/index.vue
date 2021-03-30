<template lang="">
    <div>
        <div class="min-h-screen">
            <p class="h1 py-4">Earn</p>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div v-for="(item, index) in items" :key="index" class="border-2 border-r-4 border-b-4 border-green-4 rounded-xl">
                    <div class="relative pb-2/3 bg-purple-1 rounded-t-xl">
                        <img class="absolute w-full h-full px-10 pt-2" src="~/assets/img/building.png" alt="Image">
                    </div>
                    <div class="bg-yellow-3 flex flex-wrap items-center justify-center rounded-b-xl">
                        <p class="font-bold py-3 text-md">{{item}}</p>
                    </div>
                </div>
            </div>
            <div class="mt-4 bg-white">
                <p class="lg:h1 md:h2 h3 lg:p-4 p-2">Earn by Refer to friends</p>
                <div class="divider"></div>
                <div class="p-4">
                    Contents hear...
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                'Refer to friends',
                'Make shopping friends',
                'Visit shops',
                'Create contents',
            ]
        }
    }
}
</script>