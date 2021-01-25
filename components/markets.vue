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
                        <div v-for="market of topMarkets">
                          <NuxtLink :to="market.market_slug">
                            <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                                <div :class="market" class="img-box h-40 rounded-t-xl">
                                    <img class="building w-full h-40 rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                                    <p class="shop bg-black text-white inline px-1 ml-2 absolute" style="margin-top: -30px">{{ market.shop_count }} Shops</p>
                                </div>
                                <p class="font-bold p-3">{{ market.market_name }}</p>
                            </div>
                          </NuxtLink>
                        </div>
                    </div>
                    <!-- End Top Markets -->
                    <!-- All Markets -->
                    <p class="text-2xl font-bold">All Markets in Dhaka</p>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                        <div v-for="market of markets">
                          <NuxtLink :to="{name:'market', params:{slug: market.market_slug}}">
                            <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                                <div :class="market" class="img-box h-40 rounded-t-xl">
                                    <img class="building w-full h-40 rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                                    <p class="shop bg-black text-white inline px-1 ml-2 absolute" style="margin-top: -30px">{{ market.shop_count }} Shops</p>
                                </div>
                                <p class="font-bold p-3">{{ market.market_name }}</p>
                            </div>
                          </NuxtLink>
                        </div>
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
    data (){
      return {
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
        topMarkets: [],

        markets: [],
        basePath: null,

      }
    },

    mounted() {
      this.loadTopMarket();
      this.loadMarket();
      this.basePath = this.$axios.defaults.baseURL;
    },



    methods: {
      async loadTopMarket() {
        await this.$axios.$get(
          'http://localhost:8000/api/markets/top'
        ).then((res) => {
          this.topMarkets = res.data;

        })
      },

      async loadMarket() {
        await this.$axios.$get(
          'http://localhost:8000/api/markets'
        ).then((res) => {
          this.markets = res.data;
        })
      }

    }

}
</script>
