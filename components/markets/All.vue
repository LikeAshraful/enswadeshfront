<template>
    <div>
        <!-- All Markets -->
        <p class="text-2xl font-bold capitalize">All Markets in {{ this.$route.params.city }} </p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 sm:gap-3 gap-2 pt-6 pb-12">
          <loader v-if="isLoading"></loader>
          <template v-else>
            <div v-for="(market, i) of markets" :key="i">
                <NuxtLink :to="{name:'market-slug-id', params:{slug: market.market_slug, id: market.id }}">
                <div class="border-2 md:border-r-8 border-r-4 md:border-b-8 border-b-4 border-green-4 rounded-xl">
                  <div class="rounded-t-xl relative">
                      <div class="rounded-t-xl relative pb-2/3">
                          <img class="absolute h-full w-full object-cover rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                          <p class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline">{{ market.shop_count }} Shops</p>
                      </div>
                      <p class="font-bold p-3">{{ market.market_name }}</p>
                  </div>
                </div>
                </NuxtLink>
            </div>
          </template>
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
        isLoading:true,
      }
    },

    mounted() {
      this.loadMarket();
      this.basePath = this.$axios.defaults.baseURL;
    },


    methods: {
      async loadMarket() {
        await this.$axios.$get(
          '/api/markets/all-market-by-city/' + this.$route.params.id
        ).then((res) => {
          this.markets = res.data;
          this.isLoading = false;
        })
      }
    }

}
</script>
