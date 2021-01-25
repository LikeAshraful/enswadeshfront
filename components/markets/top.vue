<template>
    <div>
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
    </div>
</template>
<script>
export default {
    data (){
      return {
        topMarkets: [
            {url: '/market', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-purple-1', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-gray-1', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-pink-1', shop:'115', name: 'Eastern Plaza Shopping'},
        ],
      }
    },
}
</script>
