<template>
    <div>
        <!-- Top Markets -->
        <div class="flex justify-between">
            <p class="text-2xl font-bold capitalize">Top Markets in {{ this.$route.params.city }}</p>
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
            <div v-for="(market, i) in topMarkets.data" :key="i">
              <NuxtLink  :to="{name:'market-slug-id', params:{slug: market.market_slug, id: market.id }}">
                  <div class="border-2 border-r-8 border-b-8 border-green-4 rounded-xl">
                      <div class="rounded-t-xl relative">
                          <img class="h-40 w-full rounded-t-xl" :src="basePath + '/' + market.market_icon" alt="Image">
                          <p style="margin-top: -30px;" class="shop bg-black text-white inline ml-2 px-1 absolute">{{ market.shop_count }} Shops</p>
                      </div>
                      <p class="font-bold p-3">{{ market.market_name }}</p>
                  </div>
                </NuxtLink>
            </div>
        </div>
        <!-- End Top Markets -->
    </div>
</template>
<script>
export default {
  name: "Top",
    data (){
      return {
        topMarkets: [],
        basePath: this.$axios.defaults.baseURL,
      }
    },

    async fetch() {
      this.topMarkets = await fetch(
        'http://localhost:8000/api/markets/top-market-by-city/' + this.$route.params.id
      ).then(res => res.json())
    }
}
</script>
