<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 lg:px-20 px-3">
            <n-link to="/" class="text-blue-500">Home</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <n-link to="/cities" class="text-blue-500">Go To Market</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <p>Dhaka</p>
        </div>
        <!-- End Breadcrumbs -->
        <div class="markets lg:px-20 px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <div>
                    <p class="rounded-t-lg p-2 filter font-bold">Filter by location</p>
                    <div class="rounded-b-lg p-2">
                        <n-link :to="location.url" v-for="(location, i) in locations" :key="i" class="flex items-center p-2 hover duration-300">
                            <img class="h-5 pr-2" src="~/assets/icons/checkbox.png" alt="Icon">
                            <p class="font-bold">{{ location.name }}</p>
                        </n-link>
                    </div>
                </div>
                <!-- End Filter -->
                <div class="lg:col-span-3 col-span-2">
                    <!-- Top Markets -->
                    <div class="flex justify-between">
                        <p class="title-color text-2xl font-black">Top Markets in Dhaka</p>
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
                            <div class="border-2 division-box rounded-xl">
                                <div :class="market.bg" class="img-box h-40 rounded-t-xl">
                                    <img class="cloud h-12" src="~/assets/img/cloud.png" alt="Image">
                                    <img class="building h-16" src="~/assets/img/building.png" alt="Image">
                                    <p class="shop bg-black text-white inline px-1">{{ market.shop }} Shops</p>
                                </div>
                                <p class="font-bold p-3">{{ market.name }}</p>
                            </div>
                        </n-link>
                    </div>
                    <!-- End Top Markets -->
                    <!-- All Markets -->
                    <p class="title-color text-2xl font-black">All Markets in Dhaka</p>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                        <div v-for="market of markets">
                          <NuxtLink to="#">
                            <div class="border-2 division-box rounded-xl">
                                <div :class="market" class="img-box h-40 rounded-t-xl">
                                    <img class="building h-16" :src="basePath + '/' + market.market_icon" alt="Image">
                                    <!-- <p class="shop bg-black text-white inline px-1">{{ market }} Shops</p> -->
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
        topMarkets: [
            {url: '', bg: 'bg-sky', shop:'115', name: 'Eastern Plaza Shopping'},
            {url: '', bg: 'bg-pink', shop:'90', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-blue', shop:'75', name: 'Gulshan Pink City'},
            {url: '', bg: 'bg-blue', shop:'35', name: 'Eastern Plaza'},
            {url: '', bg: 'bg-sky', shop:'50', name: 'Metro Shopping Mall'},
            {url: '', bg: 'bg-pink', shop:'40', name: 'Gulshan Pink City'},
        ],

        markets: [],
        basePath: null,

      }
    },

    mounted() {
      this.loadMarket();
      this.basePath = this.$axios.defaults.baseURL;
    },



    methods: {
      async loadMarket() {
        await this.$axios.$get(
          'http://localhost:8000/api/markets'
        ).then((res) => {
          this.markets = res.data;
        })
      }
    }

    // async fetch() {
    //   this.mountains = await fetch(
    //     'https://api.nuxtjs.dev/mountains'
    //   ).then(res => res.json())
    // }

}
</script>
<style>
    .markets {
        color: #163A24;
    }
    .markets .filter{
        background: #EBF5EE;
    }
    .markets .hover:hover {
        background: #EBF5EE;
    }
    .markets .title-color {
        color: #163A24;
    }
    .markets .division-box {
        border-color: #163A24;
        -webkit-box-shadow: 3px 3px 1px 2px #163A24;
        box-shadow: 3px 3px 1px 2px #163A24;
    }
    .markets .division-box .img-box{
        position: relative;
    }
    .markets .division-box .shop{
        position: absolute;
        left: 5px;
        bottom: 5px;
    }
    .markets .division-box .cloud {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .markets .division-box .building {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .markets .bg-sky {
        background: #DFFCFF;
    }
    .markets .bg-pink {
        background: #FFE6ED;
    }
    .markets .bg-blue {
        background: #E7E6FF;
    }
</style>
