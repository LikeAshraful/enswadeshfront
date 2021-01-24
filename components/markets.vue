<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 px-3">
            <n-link to="/" class="text-blue-1">Home</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <n-link to="/cities" class="text-blue-1">Go To Market</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <p>Dhaka</p>
        </div>
        <!-- End Breadcrumbs -->
        <!-- Markets Section -->
        <div class="px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <div>
                    <p class="rounded-t-lg p-2 bg-green-1 font-bold">Filter by location</p>
                    <div class="rounded-b-lg py-2">
                        <n-link :to="location.url" v-for="(location, i) in locations" :key="i" class="flex items-center p-2 hover:bg-green-1 duration-300">
                            <img class="h-5 pr-2" src="~/assets/icons/checkbox.png" alt="Icon">
                            <p class="font-bold">{{ location.name }}</p>
                        </n-link>
                    </div>
                </div>
                <!-- End Filter -->
                <div class="lg:col-span-3 col-span-2">
                    <!-- Top Markets -->
                    <div class="flex justify-between">
                        <p class="text-2xl font-bold">Top Markets in Dhaka</p>
                        <div class="flex">
                            <n-link to="">
                                <img class="border-2 rounded-full p-3 mr-3" src="~/assets/icons/left.png" alt="Icon">
                            </n-link>
                            <n-link to="">
                                <img class="border-2 rounded-full p-3" src="~/assets/icons/right.png" alt="Icon">
                            </n-link>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                        <n-link v-for="(market, i) in topMarkets" :key="i" :to="market.url">
                            <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                                <div :class="market.bg" class="rounded-t-xl pt-4 pxt-4 relative">
                                    <img class="h-40 m-auto" src="~/assets/img/building.png" alt="Image">
                                    <p style="margin-top: -30px;" class="shop bg-black text-white inline ml-2 px-1 absolute">{{ market.shop }} Shops</p>
                                </div>
                                <p class="font-bold p-3">{{ market.name }}</p>
                            </div>
                        </n-link>
                    </div>
                    <!-- End Top Markets -->
                    <!-- All Markets -->
                    <p class="text-2xl font-bold">All Markets in Dhaka</p>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                        <n-link v-for="(market, i) in allMarkets" :key="i" :to="market.url">
                            <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                                <div :class="market.bg" class="rounded-t-xl pt-4 pxt-4 relative">
                                    <img class="h-40 m-auto" src="~/assets/img/building.png" alt="Image">
                                    <p style="margin-top: -30px;" class="shop bg-black text-white inline ml-2 px-1 absolute">{{ market.shop }} Shops</p>
                                </div>
                                <p class="font-bold p-3">{{ market.name }}</p>
                            </div>
                        </n-link>
                    </div>
                    <!-- End All Markets -->
                </div>
            </div>
        </div>
        <!-- End Markets Section -->
    </div>
</template>
<script>
export default {
    data: () => ({
        locations: [
            {url: '', name: 'Badda'},
            {url: '', name: 'Bashundhara'},
            {url: '', name: 'Adabor'},
            {url: '', name: 'Uttara'},
            {url: '', name: 'Dhanmondi'},
            {url: '', name: 'Mohammadpur'},
            {url: '', name: 'Malibag'},
            {url: '', name: 'Gulistan'},
            {url: '', name: 'Banani'},
            {url: '', name: 'Demra'},
        ],
        topMarkets: [
            {url: '/market', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
        ],
        allMarkets: [
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
        ],
    })
}
</script>