<template>
  <div>
    <!-- All Markets -->
    <p class="text-2xl font-bold">Markets search result</p>
    <div
      v-if="markets.length > 0"
      :class="cols"
      class="grid grid-cols-2 lg:gap-6 sm:gap-3 gap-2 pt-6 pb-12"
    >
      <loader v-if="isLoading"></loader>
      <template v-else>
        <div v-for="(market, i) of markets" :key="i">
          <NuxtLink
            :to="{
              name: 'market-slug-id',
              params: { slug: market.slug, id: market.id },
            }"
          >
            <div
              class="border-2 md:border-r-8 border-r-4 md:border-b-8 border-b-4 border-green-4 rounded-xl"
            >
              <div class="rounded-t-xl relative">
                <div class="rounded-t-xl relative pb-2/3">
                  <img
                    class="absolute h-full w-full object-cover rounded-t-xl"
                    :src="
                      market.icon
                        ? basePath + '/' + market.icon
                        : require(`~/assets/img/default_market.png`)
                    "
                    alt="Image"
                  />
                  <p
                    class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline"
                  >
                    {{ market.shop_count }} Shops
                  </p>
                </div>
                <p class="font-bold p-3">{{ market.name }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>
    <div v-else>
      <h1 class="text-3xl font-bold text-center text-red-400">
        No result found!
      </h1>
    </div>
    <!-- End All Markets -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      basePath: null,
    }
  },

  props: ['cols', 'markets', 'isLoading'],

  mounted() {
    this.basePath = this.$axios.defaults.baseURL
  },
}
</script>
