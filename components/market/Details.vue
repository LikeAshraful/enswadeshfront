<template>
    <div>
        <div class="flex">
            <img class="h-40 w-2/5 rounded-l-lg" :src="imagepath + '/' + market.market_icon" alt="Image">
            <div class="pl-3 w-full">
                <p class="font-bold lg:text-2xl">{{market.market_name}}</p>
                <div class="flex justify-around text-center font-bold mt-4">
                    <div class="">
                        <p>{{market.shop_count}}</p>
                        <p class="text-gray-2">Registered Shop</p>
                    </div>
                    <div class="">
                        <p>{{market.total_floor}}</p>
                        <p class="text-gray-2">Total floor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      market: [],
      imagepath: this.$axios.defaults.baseURL,
    }
  },

  mounted() {
      this.loadMarket();
      this.basePath = this.$axios.defaults.baseURL;
    },

    methods: {
      async loadMarket() {
        await this.$axios.$get(
          '/api/markets/' + this.$route.params.id
        ).then((res) => {
          this.market = res.data;
        })
      },


    }
}
</script>
