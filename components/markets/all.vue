<template>
    <div>
        <!-- All Markets -->
        <p class="text-2xl font-bold">All Markets in Dhaka</p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
            <div v-for="(market, i) of markets" :key="i">
                <NuxtLink :to="market.market_slug">
                <div class="border-2 rounded-xl">
                    <div :class="market" class="h-40 rounded-t-xl">
                        <img class="building w-full h-40 rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                        <!-- <p class="shop bg-black text-white inline px-1">{{ market }} Shops</p> -->
                    </div>
                    <p class="font-bold p-3">{{ market.market_name }}</p>
                </div>
                </NuxtLink>
            </div>
        </div>
        <!-- End All Markets -->
    </div>
</template>
<script>
export default {
    data (){
      return {
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
