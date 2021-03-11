<template>
    <div>
        <div class="mb-4 flex gap-8 items-center">
            <div class="grid grid-cols-2 gap-2 leading-none">
                <div class="text-right text-xs tracking-tighter text-gray-4">
                    <p>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </p>
                    <p>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </p>
                    <p>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </p>
                    <p>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </p>
                    <p>
                        <i class="ri-star-fill"></i>
                    </p>
                </div>
                <div class="flex flex-col items-center justify-around">
                    <div class="bg-gray-4 h-2 w-20 rounded-full">
                        <div class="h-full w-16 bg-green-4 rounded-full"></div>
                    </div>
                    <div class="bg-gray-4 h-2 w-20 rounded-full">
                        <div class="h-full w-10 bg-green-4 rounded-full"></div>
                    </div>
                    <div class="bg-gray-4 h-2 w-20 rounded-full">
                        <div class="h-full w-4 bg-green-4 rounded-full"></div>
                    </div>
                    <div class="bg-gray-4 h-2 w-20 rounded-full">
                        <div class="h-full w-2 bg-green-4 rounded-full"></div>
                    </div>
                    <div class="bg-gray-4 h-2 w-20 rounded-full">
                        <div class="h-full w-1 bg-green-4 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <p class="text-2xl font-bold">4.5</p>
                <p class="text-yellow-2 text-xs tracking-tighter">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                </p>
            </div>
        </div>
        <div class="border-t text-gray-3 mb-4"></div>
        <div class="mb-6" v-for="(review, i) in reviews" :key="i">
            <div class="flex justify-between">
                <div class="flex items-center gap-8">
                    <p class="font-semibold text-xl">John Doe</p>
                    <p class="bg-green-4 px-2 text-white inline">
                        4.5<i class="ri-star-fill ml-2 text-yellow-2"></i>
                    </p>
                </div>
                <p class="text-gray-4">05 Mar, 2021</p>
            </div>
            <p class="mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <div class="flex flex-row gap-4 mt-4">
                <img class="h-24 w-24" src="~/assets/img/products/default.png" alt="Image">
                <img class="h-24 w-24" src="~/assets/img/products/default.png" alt="Image">
                <img class="h-24 w-24" src="~/assets/img/products/default.png" alt="Image">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            reviews: [
                '',
                '',
                '',
            ]
        }
    }
}
</script>