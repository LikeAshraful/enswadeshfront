<template>
    <div>
        <!-- All Markets -->
        <p class="text-2xl font-bold capitalize">All Markets in {{ this.$route.params.city }} </p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
            <div v-for="(market, i) of markets" :key="i">
                <NuxtLink :to="{name:'market-slug-id', params:{slug: market.market_slug, id: market.id }}">
                <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                  <div class="rounded-t-xl relative">
                      <div :class="market" class="h-40 rounded-t-xl">
                          <img class="building w-full h-40 rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                          <p style="margin-top: -30px;" class="shop bg-black text-white inline ml-2 px-1 absolute">{{ market.shop_count }} Shops</p>
                      </div>
                      <p class="font-bold p-3">{{ market.market_name }}</p>
                  </div>
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
          'http://localhost:8000/api/markets/all-market-by-city/' + this.$route.params.id
        ).then((res) => {
          this.markets = res.data;
        })
      }
    }

}
</script>
